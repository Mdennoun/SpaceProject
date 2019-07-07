import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  mission:Mission;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.mission = JSON.parse(params.special);
      }
    });
  }
 

  ngOnInit() {
  }

}
