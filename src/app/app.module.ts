import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
//rutas
import { app_routing} from './app.routes';
//services
import { InformacionService } from './services/informacion.service';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorcelularComponent } from './components/doctorcelular/doctorcelular.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DoctorcelularComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, HttpModule, app_routing
  ],
  providers: [ InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
