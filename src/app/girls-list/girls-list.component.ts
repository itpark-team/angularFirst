import { Component, OnInit } from '@angular/core';
import {SomeDataService} from '../services/some.service';

@Component({
  selector: 'app-girls-list',
  templateUrl: './girls-list.component.html',
  styleUrls: ['./girls-list.component.css']
})
export class GirlsListComponent implements OnInit {

  public girlsValue:number;

  constructor(private someSrv: SomeDataService) {
    someSrv.data = 123;
    console.log(someSrv.data);
    this.girlsValue = someSrv.data;
  }

  ngOnInit(): void {
  }

}
