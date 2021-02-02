import {Component, OnInit} from '@angular/core';
import {SomeDataService} from '../services/some.service';

interface Girl {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-girls-list',
  templateUrl: './girls-list.component.html',
  styleUrls: ['./girls-list.component.css']
})
export class GirlsListComponent implements OnInit {

  girls: Girl[] = [];

  constructor(private someSrv: SomeDataService) {
    this.girls.push({id: 1, name: 'Alibaba', age : 19});
    this.girls.push({id: 3, name: 'Katya', age : 21});
    this.girls.push({id: 4, name: 'Igor', age : 24});
  }

  ngOnInit(): void {
  }

}
