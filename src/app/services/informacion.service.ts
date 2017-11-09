import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  url:string = "https://doctorcelular-ee865.firebaseio.com/equipo.json";
  team:any=[];
  info:any={};
  loaded:boolean = false;
  aboutLoaded:boolean = false;


  constructor( public http:Http ) { 

    this.carga_info();
    this.carga_about();
  }
  public carga_info(){
      this.http.get('assets/data/info.page.json').subscribe(data =>{
        //console.log(data.json());
        this.loaded = true;
        this.info = data.json();
      })
  }

  public carga_about()
    {
    this.http.get(this.url).subscribe(data=> {
      //console.log(data.json());
      this.aboutLoaded = true;
      this.team = data.json();
      
    })
  }
}
