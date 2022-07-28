import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';


// import { ViewChild } from "@angular/core";
// import { SwiperComponent } from "swiper/angular";

// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// SwiperCore.use([EffectCoverflow, Pagination]);


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],

  encapsulation:ViewEncapsulation.None
})
export class InicioComponent implements OnInit {

  
  
  mostrar(){
    this.display = true;
  }
  
  display:Boolean = false;

  constructor() { 

   
  }

  cartas:Object[] = [
    {
      text:"Facil instalacion. La aplicacion fue muy sencilla de conentar y todo en si funcionaba muy bien. Le recomendaria a cualquiera este producto Argentino.",
      nombre:"pepe",
    },
    {
      text:"La instalamos de camino a Neochea y solo tomo 5 minutos. Facil de usar, conectada directamente a la app. Amigable y util equipo.",
      nombre:"juan",
    },
    {
      text:"Tendria que haber compra MySOUI hace años. Simplifica todo y te da la certeza de que todo va a funcionar como corresponde. ",
      nombre:"mike",
    },
    {
      text:"Una ejecucion increible, gran capacidad de alamacenaje con este equipo",
      nombre:"msdadas",
    },
    {
      text:"dsadasd",
      nombre:"mike",
    },
    {
      text:"dsadasd",
      nombre:"mike",
    },

  ];

  
  

  

  ngOnInit(){

    
     
  }
}


