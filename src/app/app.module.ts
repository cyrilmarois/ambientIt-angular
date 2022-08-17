import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { PoneyComponent } from './components/race/poney/poney.component';
import { RaceComponent } from './components/race/race.component';

import { RainbowDirective } from './directives/rainbow.directive';

import { MaterialModule } from './modules/material/material.module';

import { PercentPipe } from './pipes/percent.pipe';
import { FilterPoneyPipe } from './pipes/filter-poney.pipe';
import { HomeComponent } from './components/home/home.component';
import { CreateRaceComponent } from './components/create-race/create-race.component';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RaceComponent,
    RainbowDirective,
    PercentPipe,
    FilterPoneyPipe,
    HomeComponent,
    CreateRaceComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FilterPoneyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
