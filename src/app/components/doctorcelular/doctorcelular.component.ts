import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-doctorcelular',
  templateUrl: './doctorcelular.component.html'
})
export class DoctorcelularComponent  {
  constructor(private _ps:ProductosService){}
  

}
