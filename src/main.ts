import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {BlockServiceService} from "./app/Service/block-service.service";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FileServiceService} from "./app/Service/file-service.service";
import {ObjetServiceService} from "./app/Service/objet-service.service";

bootstrapApplication(AppComponent,{
  //pour activer le provider
  providers:[provideRouter(routes),BlockServiceService,FileServiceService,ObjetServiceService,importProvidersFrom(HttpClientModule)]
})
  .catch((err) => console.error(err));

