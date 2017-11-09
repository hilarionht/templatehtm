import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor ( public _is: InformacionService ,private route:Router){

  }
  buscar_producto(term:string){
    //console.log(term);
    this.route.navigate(['buscar',term]);
  }
}
