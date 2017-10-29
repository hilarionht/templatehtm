import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class ProductosService {

  carga_producto:boolean= false;
  productos:any[]= [];
  constructor(private http:Http ) { 
    this.cargar_prouductos();
  }

  public cargar_prouductos(){
    this.carga_producto = false;
        this.http.get('https://doctorcelular-ee865.firebaseio.com/producto_idx.json').subscribe(
          res=> {  
            console.log( res.json());
            this.carga_producto = true;
            this.productos = res.json();
                }
        )

    }  
}
