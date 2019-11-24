import { Component, OnInit } from '@angular/core';
import {TopPlayersForCrimeRoutingModule} from './top-players-for-crime-routing.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import Any = jasmine.Any;
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.scss']
})
export class TopPlayersForCrimeComponent implements OnInit {
baseUrl = 'http://nflarrest.com/api/v1/crime/topPlayers/';
  dataSource = [];
  constructor(private httpclient: HttpClient, private route: ActivatedRoute) { }

  // get top players for crime
  getTopCrimes(url): Observable<Any> {
    return this.httpclient.get(url);
  }

  // on page load
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTopCrimes(this.baseUrl + id).subscribe(data => {
      this.dataSource = data;
    });
  }

}
