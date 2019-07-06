import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../services/spacex-api/launches.service';
import { Launch } from '../models/launch.model';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  launches: Launch[];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getUpcomingLaunches().subscribe(result => {
      this.launches = result;
    });
  }
  doRefresh(event: any) {
    this.launchesService.getUpcomingLaunches().subscribe(result => {
      this.launches = result;
      event.target.complete();
    });
  }

}
