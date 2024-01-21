import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {BlockServiceService} from "../Service/block-service.service";

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, NgIf],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css',
  providers: [BlockServiceService]
})
export class BlockComponent {

  constructor(private blockService: BlockServiceService) {
  }

  type!: string;
  size!: number;
  errors: any = [];

  createBlock() {
    let inputData = {
      type: this.type,
      size: this.size
    };

    this.blockService.saveBlock(inputData).subscribe({
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
