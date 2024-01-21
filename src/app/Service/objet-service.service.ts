import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ObjetServiceService {

  constructor(private  client:HttpClient) { }

  saveObjet(inputData: object){

    return this.client.post(`http://localhost:8080/api_objet/objet`,inputData);

  }
}
