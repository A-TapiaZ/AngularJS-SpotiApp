import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() item:any;

  constructor(private ROUTER: Router) { }

  ngOnInit(): void {
    // console.log(this.cancion);    
  }

  getArtist(item:any){

    let artistaID;
    console.log(item);


    // Esta condicion es porque algunas canciones tienen mas de un artista, por lo que solo buscaremos al primero que aparezca
    if (item.type==='artist') {
      artistaID=item.id;
    } else {
      artistaID=item.artists[0].id;
    }
    
    this.ROUTER.navigate(['/artist',artistaID]);
  }

}
