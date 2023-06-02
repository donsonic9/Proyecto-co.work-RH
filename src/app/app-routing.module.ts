import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SelPersonalComponent } from './components/sel-personal/sel-personal.component';
import { LigSueldosComponent } from './components/lig-sueldos/lig-sueldos.component';
import { ComunicacionincorpComponent } from './components/comunicacionincorp/comunicacionincorp.component';
import { RevisarcvComponent } from './components/revisarcv/revisarcv.component';

const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'seleccion-de-personal', component: SelPersonalComponent},
  { path:'liquidacion-sueldos', component: LigSueldosComponent},
  { path:'comunicacion-in-corp', component: ComunicacionincorpComponent},
  { path:'revisar-cv', component: RevisarcvComponent},
  { path: "**", redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
