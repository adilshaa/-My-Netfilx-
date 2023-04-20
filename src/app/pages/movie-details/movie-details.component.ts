import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/sevices/movie-api-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  
  getMoviesult: any;  
  getMovieVideoResult:any;
  getMovieCastResult:any;


  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovies(getParamId);
    this.getMovieVideos(getParamId)
    this.getMovieCast(getParamId)
  }
  getMovies(id: any) {
    this.service.getMovie(id).subscribe((result) => {
      console.log(result, 'getMovies');
      this.getMoviesult = result;
    });
  }
  getMovieVideos(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'movie video');
      this.getMovieVideoResult=result;
    });
  }
  getMovieCast(id:any){
this.service.getMovieCast(id).subscribe(result=>{
console.log(result ,'movie cast');
this.getMovieCastResult=result.cast;

})
  }
}
 