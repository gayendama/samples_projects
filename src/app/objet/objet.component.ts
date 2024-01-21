import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ObjetServiceService} from "../Service/objet-service.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-objet',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, NgIf],
  templateUrl: './objet.component.html',
  styleUrl: './objet.component.css',
  providers:[ObjetServiceService]
})
export class ObjetComponent {

  constructor(private objetService:ObjetServiceService) {
  }
  type!: string;
  size!: number;
  errors: any = [];


  createObjet(){
    let inputData = {
      type: this.type,
      size: this.size
    };

    this.objetService.saveObjet(inputData).subscribe({
      next: (res: any) => {
        alert("Insertion reussi")
        //console.log(res, 'response');
        this.type="";
        this.size=0;
      },
      error: (err: any) => {
        alert("Insertion non reussi")
        //this.errors = err.error.errors;
        //console.log(err, 'errors');
        this.type="";
        this.size=0;
      }
    });

  }

}
