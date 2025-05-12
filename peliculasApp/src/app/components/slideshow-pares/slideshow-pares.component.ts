import { Pelicula } from './../../interfaces/interfaces';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  standalone: false
})
export class SlideshowParesComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween:-10
  };

  constructor() { }

  ngOnInit() {}

}
