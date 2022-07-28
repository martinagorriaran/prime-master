import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Footer } from 'primeng/api';

import { CuartopComponent } from './components/dashboard/cuartop/cuartop.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { PrimerpComponent } from './components/dashboard/primerp/primerp.component';
import { PruebasComponent } from './components/dashboard/pruebas/pruebas.component';
import { SegundpComponent } from './components/dashboard/segundp/segundp.component';
import { TercerpComponent } from './components/dashboard/tercerp/tercerp.component';

import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  //todo lo qu esta aca es lo del login de tu pag anterior
  //{path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio',component: InicioComponent},
  {path: '',component: InicioComponent},
  //{path: 'dashboard', loadChildren: ()=> import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
 // {path: '**', redirectTo: 'login', pathMatch: 'full'},
  //esto es lo que tendria que estar en el dashboarouting por mientras lo dejo
  {path: 'primerp', component: PrimerpComponent},
  {path: 'segundp', component: SegundpComponent},
  {path: 'tercerp', component: TercerpComponent},
  {path: 'cuartop', component: CuartopComponent},
  {path: 'footer', component: FooterComponent},  
  {path: 'pruebas', component: PruebasComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
