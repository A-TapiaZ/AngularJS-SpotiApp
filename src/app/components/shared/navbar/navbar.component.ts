import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router:Router, private spotifyService:SpotifyService) { 
  }

  ngOnInit(): void {
  }

  search(busqueda:string){
    this.spotifyService.updateBusquedaNav(busqueda);
    this.router.navigate(['/search']);
  }

}
