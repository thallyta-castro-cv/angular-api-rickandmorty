import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LisApiComponent } from './components/lis-api/lis-api.component';


@NgModule({
  declarations: [
    AppComponent,
    LisApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
