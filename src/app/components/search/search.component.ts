import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas:any[]=[];
  loading:boolean;
  busqueda:string;

  constructor(private spotifyService:SpotifyService) { 

    this.busqueda=this.spotifyService.BusquedaNav();

    if (this.busqueda) {
      this.searchFunction(this.busqueda);
    }
  }
  
  searchFunction(busqueda:string){  

    this.loading=true;
    this.spotifyService.getArtistas(busqueda)
      .subscribe((data:any) => {
        console.log(data);
        this.artistas=data;
      })
      this.loading=false;
  }

}
