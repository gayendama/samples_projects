import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "../app.routes";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BlockServiceService} from "../Service/block-service.service";
import {AppComponent} from "../app.component";


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers:[BlockServiceService],
  bootstrap:[AppComponent]
})
export class AppModule { }
