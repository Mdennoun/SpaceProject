import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rocket } from 'src/app/models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getRockets(): Observable<Rocket[]> {
    const requestEndpoint = this.apiBaseUrl + 'rockets';
    return this.http.get<Rocket[]>(requestEndpoint).pipe(
      map(rockets => {
        console.log(rockets);
        return rockets;
      })
    );
  }
}
