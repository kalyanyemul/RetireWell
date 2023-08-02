import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { HostBinding } from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';

@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.component.html',
  styleUrls: ['./inputpage.component.css']
})
export class InputpageComponent {
  userInput!: string;
  outputData!: string;  
  isLoading = false;

constructor(private route:Router){}

onClickHere(){
  this.route.navigate(['/grid']);
}
  onSubmit(form: NgForm) {
    
    if (form.invalid) {
      return;
        }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false; 
    }, 2000);
    this.route.navigate(['/grid']);
  }
  }
