import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})

export class TimerComponent implements OnInit {
 @Input() variableTimer: string;
  constructor() { 
    this.initTimer();
  }

  ngOnInit() {}
  
  initTimer() {
  // Set the date we're counting down to
  const countDownDate = new Date('Jan 5, 2021 15:37:25').getTime();

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
