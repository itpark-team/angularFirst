import {Component, OnInit} from '@angular/core';
import {SomeDataService} from '../services/some.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  isDone: boolean = true;

  constructor(private someSrv: SomeDataService) {

  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isDone = !this.isDone;
  }

}
