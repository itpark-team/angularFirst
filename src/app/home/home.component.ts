import { Component, OnInit } from '@angular/core';
import {SomeDataService} from '../services/some.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private someSrv: SomeDataService) {
    someSrv.data = 7878;
    console.log(someSrv.data);
  }

  ngOnInit(): void {
  }

}
