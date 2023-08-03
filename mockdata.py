import boto3
import json
import ast
import requests

import csv
import fastapi

from geopy.geocoders import Nominatim


api=fastapi.FastAPI()
@api.get('/retirewell/')
def q_call(text):

    #initializing dictionary as dic
    dic={'PERSON':'X','AGE':30,'RETIREMENT_AGE':67, 'ANNUAL_SALARY':0, 'RETIREMENT_AMOUNT':2000, 'LOCATION':'Texas'}

    #Specify the Region 
    REGION = 'ap-south-1'

    # Function for detecting named entities
    def detect_entities(text, language_code):
        comprehend = boto3.client('comprehend', region_name=REGION, aws_access_key_id='AKIAUYZE5Z3637B6RSKD',
                                aws_secret_access_key='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')
        response = comprehend.detect_entities(Text=text, LanguageCode=language_code)
        return response

    # Function for finding out the city_name
    def get_city_name(latitude, longitude):
        # Initialize the geolocator
        geolocator = Nominatim(user_agent="geoapiExercises")

        try:
            # Get the location data using the geolocator's reverse geocoding
            location = geolocator.reverse((latitude, longitude), exactly_one=True)

            if location:
                address = location.raw.get('address', {})
                city = address.get('city', '')
                country = address.get('country','')
                return city, country
            else:
                #print("City name not found.")
                return "Texas", "US"
            

        except Exception as e:
            #f"Error: {e}"
            #return None
            return "Texas"

    # Function for getting the ip 
    def get_current_location():
        try:
            # Get the IP address using an external service
            ip_response = requests.get('https://api.ipify.org?format=json')
            ip_data = ip_response.json()
            ip_address = ip_data['ip']
            
            # Get the geolocation data based on the IP address
            location_response = requests.get(f'https://ipinfo.io/{ip_address}/json')
            location_data = location_response.json()

            # Extract latitude and longitude from the location data
            latitude, longitude = location_data['loc'].split(',')
            return float(latitude), float(longitude)

        except Exception as e:
            print(f"Error: {e}")
            return None

    # Function for findig the location
    def location_find():
        location = get_current_location()
        # Check if the location was obtained successfully
        if location:
            latitude, longitude = location
            # Get the city name based on the latitude and longitude
            city_name, country_name = get_city_name(latitude, longitude)
            if city_name:
                #print(f"City Name: {city_name}")
                return city_name, country_name
            else:
                print("City name not found.")
                return 'Texas', 'US'
        else:
            print("Failed to get the current location.")
            return 'Texas', 'US'

    # Function for getting the Annual salary from csv file
    def Annual_salary(key):
        result = []
        with open('County.csv') as csvfile:
            reader = csv.reader(csvfile, delimiter=',', quotechar='|')
            for row in reader:
                if row[2].strip() == key:
                    result.append(row[3].strip())
        if len(result)==0:
            result.append('35000')
        return int(result[0])

    # language code for aws comprehend
    language_code = 'en'

    # detecting named entities
    result = detect_entities(text, language_code)

    res=json.dumps(result, sort_keys=True, indent=4)
    dictionary = ast.literal_eval(res)

    list=dictionary['Entities']

    for i in list:
        #Fetching Age
        if i['Type'] == 'QUANTITY':
            try:
                if 55 >= int(i['Text']) > 15:
                    #i['Type'] ='AGE';
                    dic['AGE'] = int(i['Text'])
            except:
                dic['AGE'] = 30
        #Fetching Retirement_Age
        elif i['Type'] == 'QUANTITY':
            try:
                if 75 > int(i['Text']) > 55:
                    #i['Type'] ='RETIREMENT_AGE';
                    dic['RETIREMENT_AGE'] = int(i['Text'])
            except:
                dic['RETIREMENT_AGE'] = 67
        #Fetching Retirement_Amount
        elif i['Type'] == 'QUANTITY':
            try:
                if 100 < int(i['Text']) <= 5000:
                        #i['Type'] = 'AMOUNT';
                        dic['RETIREMENT_AMOUNT'] = int(i['Text'])
            except:
                dic['RETIREMENT_AMOUNT']= 2000  
        #Fetching Annual_Salary
        elif i['Type'] == 'QUANTITY':
            try:
                if int(i['Text']) >= 10000:
                    dic['ANNUAL_SALARY'] = int(i['Text'])
            except:
                dic['ANNUAL_SALARY'] = 0
        #Fetching Location
        elif i['Type']=='LOCATION':
            dic['LOCATION'] = i['Text']
        #Fetching Person
        elif i['Type']=='PERSON':
            dic['PERSON']=i['Text']

    #fetch location from ip
    #if dic['LOCATION']=='Blank':
        #dic['LOCATION'] = location_find()
    
    #Annual salary if user not entered fetch from location
    if dic['ANNUAL_SALARY']==0:
        dic['ANNUAL_SALARY']= Annual_salary(dic['LOCATION'])

    print(dic)


