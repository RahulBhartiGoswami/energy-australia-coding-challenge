import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalDataService } from './service/festival-data.service';
import { FestivalServiceService } from './service/festival-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FestivalServiceService, FestivalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
