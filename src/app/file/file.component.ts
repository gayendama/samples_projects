import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FileServiceService} from "../Service/file-service.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, NgIf],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css',
  providers:[FileServiceService]
})
export class FileComponent {

  constructor(private fileService:FileServiceService) {
  }
  type!: string;
  size!: number;
  errors: any = [];

  createFile(){
    let inputData = {
      type: this.type,
      size: this.size
    };

    this.fileService.saveFile(inputData).subscribe({
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
