import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.css']
})
export class Output1Component {
  retirementAmount!:number;

  constructor(private route:Router){};
  
    onSubmit() {
  
    
      if (this.retirementAmount >= 60000 && this.retirementAmount <= 70000) {
  
        this.route.navigate(['/outputpage2']);
   
      } else if (this.retirementAmount >= 70001 && this.retirementAmount <= 80000) {
   
        this.route.navigate(['/outputpage3']);
   
      } else if (this.retirementAmount == 0) {
   
        this.route.navigate(['/outputpage']);
   
      } else {
   
      
   
      }
    }
}
