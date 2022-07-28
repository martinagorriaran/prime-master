import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

import { PrimerpComponent } from './primerp/primerp.component';
import { SegundpComponent } from './segundp/segundp.component';
import { TercerpComponent } from './tercerp/tercerp.component';
import { CuartopComponent } from './cuartop/cuartop.component';
import { FooterComponent } from './footer/footer.component';
import { PruebasComponent } from './pruebas/pruebas.component';

import {GMapModule} from 'primeng/gmap';
import { MessageService } from 'primeng/api/messageservice';
@NgModule({
  declarations: [
    DashboardComponent,
    PrimerpComponent,
    SegundpComponent,
    TercerpComponent,
    CuartopComponent,
    PruebasComponent,
    // FooterComponent,
  ],
  imports: [

    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    GMapModule,
    
  ],

  exports:[
    PrimerpComponent,
    SegundpComponent,
    TercerpComponent,
    CuartopComponent,
    // FooterComponent,
  ],

  // providers:[
  //   MessageService,
  // ]
})
export class DashboardModule { }
