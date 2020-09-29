import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista:any={};
  topTracks:any[]=[];
  loading:boolean;
  
  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {
    this.loading=true;
    router.params.subscribe(params => {
      let {id}= params;
      this.getArtista(id)
      this.getArtistaTopTracks(id)
    })
   }

  ngOnInit(): void {
  }

  getArtista(id:string) {
    this.loading=true;

    this.spotify.getArtista(id)
      .subscribe(data => {
        // console.log(data);
        this.artista=data;
        this.loading=false;
      })
  }

  getArtistaTopTracks(id:string) {
    this.spotify.getTopTracks(id)
      .subscribe(data => {
        console.log(data);
        this.topTracks=data;
      })
  }

}
