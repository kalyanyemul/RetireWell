import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-outputpage',
  templateUrl: './outputpage.component.html',
  styleUrls: ['./outputpage.component.css']
})
export class OutputpageComponent {
  editableData: any = null;

  showEditModel: boolean = false;

  editAge: number = 0;

  editSalary: number = 0;

 

  constructor(private route: ActivatedRoute, private router:Router) { }

 

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      this.editableData = { age: 67, salary: 2000 }; // Assuming the initial data comes from the query params

    });

  }

 

  openEditModel() {

    this.showEditModel = true;

    this.editAge = this.editableData.age;

    this.editSalary = this.editableData.salary;

  }

 

  updateData() {

    // You can implement the update logic here using a service or API

    // For simplicity, we are just updating the local data

    this.editableData.age = this.editAge;

    this.editableData.salary = this.editSalary;

    this.showEditModel = false;

    // this.router.navigateByUrl('/dashboard');

 

  }

 }

