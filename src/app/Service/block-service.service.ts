import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BlockServiceService {
  constructor(private  client:HttpClient) { }

  saveBlock(inputData: object){

    return this.client.post(`http://localhost:8080/api_block/block`,inputData);

  }
}
