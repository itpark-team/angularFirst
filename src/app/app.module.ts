import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { GirlsListComponent } from './girls-list/girls-list.component';
import { HomeComponent } from './home/home.component';

import {SomeDataService} from './services/some.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'girls', component: GirlsListComponent},
  { path: 'pizza', component: PizzaListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    GirlsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SomeDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
