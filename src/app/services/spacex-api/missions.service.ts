import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from 'src/app/models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
   }

   getAllMissions(): Observable<Mission[]> {
    const requestEndpoint = this.apiBaseUrl + 'missions';
    return this.http.get<Mission[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }
  
}
