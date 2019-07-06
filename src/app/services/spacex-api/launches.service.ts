import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from 'src/app/models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
   }

   getAllLaunches(): Observable<Launch[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches?order=desc';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }
  getPastLaunches(): Observable<Launch[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches/past?order=desc';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }
  getUpcomingLaunches(): Observable<Launch[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches/upcoming?order=desc';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }
}
