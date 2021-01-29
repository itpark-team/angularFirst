import { Component, OnInit } from '@angular/core';
import {SomeDataService} from '../services/some.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private someSrv: SomeDataService) {
    //someSrv.data = 324;
    console.log(someSrv.data);
  }

  ngOnInit(): void {
  }

}
