import { Pelicula } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];


  constructor(private MoviesService: MoviesService ) {

  }

  ngOnInit() {
    this.MoviesService.getFeature()
    .subscribe( resp  =>{
      this.peliculasRecientes = resp.results;

    });

      this.MoviesService.getPopulares()
      .subscribe( resp =>{
        console.log('Populares', resp)
        this.populares = resp.results;
      });

  }

}
