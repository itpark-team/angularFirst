import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {GirlsListComponent} from './girls-list/girls-list.component';
import {HomeComponent} from './home/home.component';

import {SomeDataService} from './services/some.service';
import {SlutsComponent} from './sluts/sluts.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'girls', component: GirlsListComponent},
  {path: 'pizza', component: PizzaListComponent},
  {path: 'sluts', component: SlutsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    GirlsListComponent,
    HomeComponent,
    SlutsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [
    SomeDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
