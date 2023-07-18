import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-urltest',
  templateUrl: './urltest.component.html',
  styleUrls: ['./urltest.component.css']
})
export class UrltestComponent implements OnInit{
http:HttpClient;
statusUrl:string;
  constructor(private httpclient:HttpClient){
    this.http=httpclient;
  }
    ngOnInit(){
      //'https://proud-wave-0410e5a10.3.azurestaticapps.net/
      //https://storageteste1.z15.web.core.windows.net/
      //'https://azrstufirsngmfincldevn.z15.web.core.windows.net/
fetch('https://storageteste1.z15.web.core.windows.net/')
.then(
  
     
        (res)=>{
          if(res.status!=200){
            this.statusUrl='Url offline'
            throw res.statusText ;
          console.log(res);
          }else{
            this.statusUrl='Online'
                        console.log("url online")
          }
        }
      )
  .catch(
    (error)=>
  {
  alert('ERRO ao conectar url contacte suporte descricao:'+error);

  }
  )

  
}

    

  
}
