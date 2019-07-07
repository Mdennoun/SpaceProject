import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../services/spacex-api/launches.service';
import { Launch } from '../models/launch.model';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {
  launch:Launch;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getNextLaunches().subscribe(result => {
      this.launch = result;
    });
  }
  doRefresh(event: any) {
    this.launchesService.getNextLaunches().subscribe(result => {
      this.launch = result;
      event.target.complete();
    });
  }

  public IsInMission(launch:Launch, mission:Mission) {
    if(launch.mission_name.startsWith(mission.mission_name)) {

      return true;
    }
    return false;
  }

}
