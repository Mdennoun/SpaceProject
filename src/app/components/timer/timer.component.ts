import { Component, OnInit, Input } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { Launch } from 'src/app/models/launch.model';
import { LaunchesService } from 'src/app/services/spacex-api/launches.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})

export class TimerComponent implements OnInit {
  launch:Launch;

  ngOnInit() {
    this.launchesService.getNextLaunches().subscribe(result => {
      this.initTimer(result.launch_date_local);
    });
    
  }

  constructor(private launchesService: LaunchesService,) { }

     
 
 @Input() variableTimer: string;


  
  initTimer(date:String) {
  // Set the date we're counting down to
  
  const countDownDate = new Date("2019-07-21T19:35:00-04:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(() => {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    this.variableTimer = days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's ';

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('demo').innerHTML = 'EXPIRED';
    }
  }, 1000);
            
  };
}
