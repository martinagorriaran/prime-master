import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos PRIME
import {MenubarModule} from 'primeng/menubar';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ImageModule,
    ButtonModule,
    CarouselModule,
    InputTextModule,
    ProgressBarModule,
    CardModule
    
  ],
  exports: [
    MenubarModule,
    ImageModule,
    ButtonModule,
    CarouselModule,
    ProgressBarModule,
    CardModule
  ]
})
export class SharedModule { }
