import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../services/spacex-api/launches.service';
import { Launch } from '../models/launch.model';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  launches: Launch[];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getPastLaunches().subscribe(result => {
      this.launches = result;
    });
  }
  doRefresh(event: any) {
    this.launchesService.getPastLaunches().subscribe(result => {
      this.launches = result;
      event.target.complete();
    });
  }

}
