import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  busquedaNavBar:string=null;

  constructor(private http:HttpClient) {
    console.log('Spotify Service Ready');
  }

  getQuery(query:string){
    const url= `https://api.spotify.com/v1/${query}`

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQCzuQihj0qQmnSZHNHsjpHy82ZUVkxIMJJz_neVZQY_YuRRP56bgTDdsIdqJiWMB38dXN8jkL0mKiWi4Q4'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items))
  }

  getArtistas(busqueda:string){
    return this.getQuery(`search?q=${busqueda}&type=artist`)
      .pipe(map(data=> data['artists'].items))
  }
  
  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }
  
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe(map(data => data['tracks']))
  }

  updateBusquedaNav(busqueda:string){
    this.busquedaNavBar=busqueda;
  }

  BusquedaNav(){
    return this.busquedaNavBar;
  }


}
