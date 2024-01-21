import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private  client:HttpClient) { }

  saveFile(inputData: object){

    return this.client.post(`http://localhost:8080/api_file/file`,inputData);

  }
}
