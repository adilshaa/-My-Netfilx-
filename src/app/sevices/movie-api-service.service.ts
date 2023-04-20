import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { 


  }
  NetUrl= 'https://api.themoviedb.org/3';
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

bannerApiData():Observable<any>{
  return this.http.get(`${this.NetUrl}/trending/all/week?api_key=${this.apikey}`);
}

// trendingmoviesapidata

trendingMoviesApiData():Observable<any>{
  return this.http.get(`${this.NetUrl}/trending/movie/day?api_key=${this.apikey}`);
}

// searchMovie

getSearchMovie(data: any): Observable<any> {
  console.log(data, 'movie#');

  return this.http.get(`${this.NetUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
}

getMovie(id:any):Observable<any>{
 return this.http.get(`${this.NetUrl}/movie/${id}?api_key=${this.apikey}`)
}

getMovieVideo(id:any):Observable<any>{
  return this.http.get(`${this.NetUrl}/movie/${id}/videos?api_key=${this.apikey}`)
}
getMovieCast(id:any):Observable<any>{
  return this.http.get(`${this.NetUrl}/movie/${id}/credits?api_key=${this.apikey}`)
}
// action
fetchActionMovies():Observable<any>{
  return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);}
// advanger
fetchAdventureMovies():Observable<any>{
  return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`);}
// animation
fetchAnimationMovies():Observable<any>{
  return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=16`);}
// comedy
fetchComedyMovies():Observable<any>{
  return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`);}
// documentry
fetchDocumentaryMovies():Observable<any>{
  return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`);return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
}
// science-fiction:878
fetchScienceFictionMovies():Observable<any>{
  return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`);}

// thriller
fetchThrillerMovies():Observable<any>{
  return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`); return this.http.get(`${this.NetUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
}

}
