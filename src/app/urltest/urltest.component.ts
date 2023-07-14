import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-urltest',
  templateUrl: './urltest.component.html',
  styleUrls: ['./urltest.component.css']
})
export class UrltestComponent implements OnInit{
http:HttpClient;
  constructor(private httpclient:HttpClient){
    this.http=httpclient;
  }
    ngOnInit(){

      this.http.get('https://proud-wave-0410e5a10.3.azurestaticapps.net/').subscribe(
        (res)=>{
          console.log(res)
        }
        ,(error)=>{console.log(error)}
      )
  

    }

  
}
