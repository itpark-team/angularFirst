import {Component, OnInit} from '@angular/core';
import {SomeDataService} from '../services/some.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number;
  isDanger: boolean;
  counterStyle: string;

  constructor(private someSrv: SomeDataService) {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  incCounter(): void {
    this.counter++;
    this.chooseCounterStyle();
  }

  decCounter(): void {
    this.counter--;
    this.chooseCounterStyle();
  }

  private chooseCounterStyle(): void {
    if (this.counter > 0) {
      this.counterStyle = 'text-info';
    } else if (this.counter < 0) {
      this.counterStyle = 'text-danger';
    } else if (this.counter === 0) {
      this.counterStyle = 'text-dark';
    }
  }

}
