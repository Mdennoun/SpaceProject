import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../services/spacex-api/missions.service';
import { Mission } from '../models/mission.model';
import {DetailsPage} from '../details/details.page';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {
  missions:Mission[];

  constructor(private missionsService: MissionsService, public router: Router) { }

  ngOnInit() {
    this.missionsService.getAllMissions().subscribe(result => {
      this.missions = result;
    });
  }
  doRefresh(event: any) {
    this.missionsService.getAllMissions().subscribe(result => {
      this.missions = result;
      event.target.complete();
    });
  }
  openDetailsWithQueryParams(mission:Mission) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(mission)
      }
    };
    this.router.navigate(['menu/details'], navigationExtras);
  }

}

