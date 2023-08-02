import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressBarService } from '../progress-bar.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  //   progress = 0;

  images = [
      { url: '../assets/img1.png', alt: 'Image 1', title: 'Image 1 Title' },
      { url: '../assets/13.png', alt: 'Image 2', title: 'Image 2 Title' },
      { url: '../assets/777.png', alt: 'Image 3', title: 'Image 3 Title' },
      { url: '../assets/333.png', alt: 'Image 4', title: 'Image 4 Title' },
    ];


  constructor(private progressBarService: ProgressBarService) { }



  progress = 0;




  ngOnInit() {

    // Simulate a progress update (0 to 100%) - you can update this based on your actual logic.

    const interval = setInterval(() => {

      this.progress += 10; // Increase by 10% at a time

      if (this.progress >= 100) {

        clearInterval(interval);

        this.progressBarService.progressBarCompleted();

      }

    }, 500); // 500ms interval for a smoother animation

  }

} {
  // images = [
  //   { url: '../assets/12.png', alt: 'Image 1', title: 'Image 1 Title' },
  //   { url: '../assets/13.png', alt: 'Image 2', title: 'Image 2 Title' },
  //   { url: '../assets/777.png', alt: 'Image 3', title: 'Image 3 Title' },
  //   { url: '../assets/333.png', alt: 'Image 4', title: 'Image 4 Title' },
  // ];
  //   progress = 0;
  //   constructor(){
  //     setInterval(()=> {
  //       if(this.progress < 100){
  //         this.progress = this.progress + 3.0;
  //       }
  //       else{
  //         this.progress = 0;
  //       }
  //     }, 100);
  //   }
  // }
  //   constructor(private router:Router)
  // {}

  // onClick(){
  //   this.router.navigate(['/inputpage']);
  // }

}
