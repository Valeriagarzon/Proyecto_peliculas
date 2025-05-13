import { RespuestaMDB, PeliculaDetalle, RespuestaCredits, Genre } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apikey = environment.apiKey;

interface RespuestaGeneros {
  genres: Genre[];
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;
  generos: Genre[] = [];

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    query = `${URL}${query}&api_key=${apikey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  buscarPeliculas(texto: string) {
    return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${texto}`);
  }

  getFeature() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    const mesString = mes < 10 ? `0${mes}` : `${mes}`;
    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    const url = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}&api_key=${apikey}&language=es&include_image_language=es`;
    return this.http.get<RespuestaMDB>(url);
  }

  getPeliculaDetalle(id: string) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresPelicula(id: string) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

  cargarGeneros(): Promise<Genre[]> {
    return new Promise(resolve => {
      this.ejecutarQuery<RespuestaGeneros>(`/genre/movie/list?a=1`)
        .subscribe(resp => {
          this.generos = resp.genres;
          console.log(this.generos);
          resolve(this.generos);
        });
    });
  }
}
