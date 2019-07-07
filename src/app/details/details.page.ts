import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchesService } from '../services/spacex-api/launches.service';
import { Launch } from '../models/launch.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  mission:Mission;
  launches:Launch[];
  missionLaunch:Launch[];
  title:string;
 
  constructor(private route: ActivatedRoute, private router: Router, private launchesService: LaunchesService, ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.mission = JSON.parse(params.special);
      }
    });
  }
 

  ngOnInit() {
    this.launchesService.getAllLaunches().subscribe(result => {
      this.launches = result;
    });
  }
  doRefresh(event: any) {
    this.launchesService.getAllLaunches().subscribe(result => {
      this.launches = result;
      event.target.complete();
    });
  }

  public IsInMission( launches:Launch[], mission:Mission) {
   
     if(!launches){
      return this.launches;
     }
     
     return  launches.filter(function(value, index, arr){
     return value.mission_name.includes(mission.mission_name);

  
  });
  }

  public LaunchInMission( launches:Launch[], mission:Mission) {
    var test =false;
    if(!launches){
     return false;
    }
    let lunchInMission = launches.filter(function(value, index, arr){
      
      if(value.mission_name.includes(mission.mission_name) == true){
          test=true;
      } 

    });
   
    return  test;
  } 

  public settitle(launches:Launch[]) {
    if(!launches){
      this.title = "no launches";
      return false ;
     }
     this.title = "Launches";
     return true;
  }

  

}
