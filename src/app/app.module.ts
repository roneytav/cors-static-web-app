import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { UrltestComponent } from './urltest/urltest.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, UrltestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
