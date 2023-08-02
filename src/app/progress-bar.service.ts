import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  constructor(private router: Router) { }




  progressBarCompleted(): void {

    // Navigate to another component once the progress bar reaches 100%

    this.router.navigate(['/outputpage']); // Replace 'another-component' with the actual route of the component you want to navigate to.

  }
}
