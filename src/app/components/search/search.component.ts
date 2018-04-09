import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  term:string = '';

  constructor(private _spotify:SpotifyService) {

  }

  ngOnInit() {
  }

  searchArtist(term:string){
    if(this.term.length > 4){
      this._spotify.getArtists(this.term).subscribe(data=>{
        console.log(data);
      });
    }else{
      return;
    }
  }

}
