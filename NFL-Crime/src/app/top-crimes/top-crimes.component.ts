import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

// @ts-ignore
import Any = jasmine.Any;
import {RouterModule} from '@angular/router';
import {AppComponent} from '../app.component';
import {TopPlayersForCrimeComponent} from '../top-players-for-crime/top-players-for-crime.component';
import {TopTeamsForCrimeComponent} from '../top-teams-for-crime/top-teams-for-crime.component';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.scss']
})
export class TopCrimesComponent implements OnInit {
  displayedColumns = ['Category', 'arrest_count'];
  dataSource = [];
  baseUrl = 'http://nflarrest.com/api/v1/crime';

  constructor(private httpclient: HttpClient) { }

  // fetch top crimes NFLArrest APIs
  getTopCrimes(url): Observable<Any> {
    return this.httpclient.get(url);
  }

  // on page load
  ngOnInit() {
    this.getTopCrimes(this.baseUrl).subscribe(data => {
      this.dataSource = data;
    });
  }

}
