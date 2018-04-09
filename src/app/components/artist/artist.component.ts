import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any = {};
  toptracks:any[];

  constructor(private _activatedRoute:ActivatedRoute, public spotify:SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params.map(params=>params['id']).subscribe(id=>{
      this.spotify.getArtist(id).subscribe(data=>{
        this.artist = data;
      });
      this.spotify.getTopTracks(id).subscribe(data=>{
        this.toptracks = data;
      })
    })
  }

}
