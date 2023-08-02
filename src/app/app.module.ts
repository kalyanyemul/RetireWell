import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputpageComponent } from './inputpage/inputpage.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GridviewComponent } from './gridview/gridview.component';
import { FormsModule } from '@angular/forms';
import { OutputpageComponent } from './outputpage/outputpage.component';
import { Output2Component } from './output2/output2.component';
import { Output3Component } from './output3/output3.component';
import { Output1Component } from './output1/output1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputpageComponent,
    LoadingpageComponent,
    GridviewComponent,
    OutputpageComponent,
    Output2Component,
    Output3Component,
    Output1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
