import { Pelicula } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  standalone:false
})
export class SlideshowPosterComponent  implements OnInit {

@Input() peliculas: Pelicula[] = [];

slideOpts = {
  slidesPerView: 3.3,
  freeMode: true
};

  constructor() { }

  ngOnInit() {}

}
