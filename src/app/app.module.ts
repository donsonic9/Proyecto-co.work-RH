import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/inicio/navbar/navbar.component';
import { BannerComponent } from './components/inicio/banner/banner.component';
import { ConocenosComponent } from './components/inicio/conocenos/conocenos.component';
import { ServiciosComponent } from './components/inicio/servicios/servicios.component';
import { RevisatucvComponent } from './components/inicio/revisatucv/revisatucv.component';
import { FooterComponent } from './components/inicio/footer/footer.component';
import { SelPersonalComponent } from './components/sel-personal/sel-personal.component';
import { LigSueldosComponent } from './components/lig-sueldos/lig-sueldos.component';
import { ComunicacionincorpComponent } from './components/comunicacionincorp/comunicacionincorp.component';
import { RevisarcvComponent } from './components/revisarcv/revisarcv.component';
import { NavbarLiteComponent } from './components/sel-personal/navbar-lite/navbar-lite.component';
import { FooterLiteComponent } from './components/sel-personal/footer-lite/footer-lite.component';
import { SelPersonalMainContentComponent } from './components/sel-personal/sel-personal-main-content/sel-personal-main-content.component';
import { RevisarcvMainContentComponent } from './components/revisarcv/revisarcv-main-content/revisarcv-main-content.component';
import { LiqSueldosMainContentComponent } from './components/lig-sueldos/liq-sueldos-main-content/liq-sueldos-main-content.component';
import { ComunicacionincorpMainContentComponent } from './components/comunicacionincorp/comunicacionincorp-main-content/comunicacionincorp-main-content.component';
import { MisionVisionComponent } from './components/inicio/mision-vision/mision-vision.component';

// Para habilitar las llamadas al servidor:
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    BannerComponent,
    ConocenosComponent,
    ServiciosComponent,
    RevisatucvComponent,
    FooterComponent,
    SelPersonalComponent,
    LigSueldosComponent,
    ComunicacionincorpComponent,
    RevisarcvComponent,
    NavbarLiteComponent,
    FooterLiteComponent,
    SelPersonalMainContentComponent,
    RevisarcvMainContentComponent,
    LiqSueldosMainContentComponent,
    ComunicacionincorpMainContentComponent,
    MisionVisionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
