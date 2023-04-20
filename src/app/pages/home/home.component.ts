import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/sevices/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bannerResult: any = [];
  trendingMoviesData: any = [];
  actionMoviesData: any = [];
  advantgerMoviesData: any = [];

  AnimationMoviesData: any = [];
  comedyMoviesData: any = [];

  documentryMoviesData: any = [];
  scrifyMoviesData: any = [];

  trillerMoviesData: any = [];



  constructor(private service: MovieApiServiceService) {}
  ngOnInit(): void {
    this.bannerData();
    this.trendingMovies();
    this.actionMovies();
    this.advantgerMovies();
    this.annimationMovies();

    this.comedyMovies();

    this.documentryMovies();

    this.scrifyMovies();
    this.trillerMovies();

  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'banner Result');
      this.bannerResult = result.results;
    });
  }

  trendingMovies() {
    this.service.trendingMoviesApiData().subscribe((result) => {
      console.log(result, 'Trending Movies');
      this.trendingMoviesData = result.results;
    });
  }
  actionMovies() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result ,'actions');
      
      this.actionMoviesData=result.results;

    });
  }
  advantgerMovies() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.advantgerMoviesData=result.results;

    });
  }
  annimationMovies() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.AnimationMoviesData=result.results;

    });
  }
  comedyMovies() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMoviesData=result.results;

    });
  }

  documentryMovies() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentryMoviesData=result.results;

    });
  }
  scrifyMovies() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.scrifyMoviesData=result.results;

    });
  }
  trillerMovies() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.trillerMoviesData=result.results;

    });
  }
}
