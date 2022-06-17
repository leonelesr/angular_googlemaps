import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlayqEbYypOHW4pd4pX3DoUv--2vKMmsA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
