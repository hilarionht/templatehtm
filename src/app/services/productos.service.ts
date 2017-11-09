import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { log } from 'util';



@Injectable()
export class ProductosService {

  carga_producto: boolean = false;
  productos: any[] = [];
  productos_fitrado: any[] = [];
  constructor(private http: Http) {
    this.cargar_prouductos();
  }
  public buscar_producto(term: string) {
    //console.log("buscando producto");
    if (this.productos.length === 0) {
      this.cargar_prouductos().then(() => {
        //termino la carga
        this.filtrar_productos(term);

      });
    } else {
      this.filtrar_productos(term);

    }
  }
  private filtrar_productos(termino: string) {
    this.productos_fitrado = [];
    this.productos.forEach(prod => {

      termino = termino.toLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_fitrado.push(prod);
      }
      //console.log(prod);
    })
  }


  public cargar_producto(cod: string) {
    return this.http.get(`https://doctorcelular-ee865.firebaseio.com/productos/${cod}.json`);
  }


  public cargar_prouductos() {
    this.carga_producto = true;
    let promesa = new Promise((resolve, rejec) => {
      this.http.get('https://doctorcelular-ee865.firebaseio.com/producto_idx.json').subscribe(
        res => {



          // setTimeout(() => {
          //console.log( res.json());
          this.carga_producto = false;
          this.productos = res.json();
          resolve();
          // }, 1500)
        });
    });

    return promesa;

  }
}
