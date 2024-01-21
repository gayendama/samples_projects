import { Routes } from '@angular/router';
import {ObjetComponent} from "./objet/objet.component";
import {FileComponent} from "./file/file.component";
import {BlockComponent} from "./block/block.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'block',component:BlockComponent},
  {path:'file',component:FileComponent},
  {path:'objet',component:ObjetComponent}
];
