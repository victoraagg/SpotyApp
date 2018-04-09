import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private artists:any[];
  private urlApi:string = 'https://api.spotify.com/v1/';
  private token:string = 'BQDagUGOB655PJKAY7Z_eAoqn-o8TkhglwCM3hda5sXtJWyrdH7TDPu0B89R2o8lVgNL-34wDCTQ5kQv24I';

  constructor(public http:HttpClient) {
    console.log('Spotify Service OK');
  }

  private getHeaders(){
    return new HttpHeaders({
      'authorization': 'Bearer '+this.token
    });
  }

  public getArtists(term:string){
    let url = `${this.urlApi}search?query=${term}&type=artist&offset=0&limit=5`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers}).map((data:any)=>{
      this.artists = data.artists.items
      return this.artists;
    });
  }

  public getArtist(id:string){
    let url = `${this.urlApi}artists/${id}`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers});
  }

  public getTopTracks(id:string){
    let url = `${this.urlApi}artists/${id}/top-tracks?country=ES`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers}).map((data:any)=>{
      return data.tracks;
    });
  }

}
