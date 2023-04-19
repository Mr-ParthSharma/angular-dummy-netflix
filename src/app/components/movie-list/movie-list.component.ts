import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movies: any[] = [];

  constructor(
    private movieSearch : MoviesService,
    private routes : ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.routes.queryParams.subscribe(params =>{
      this.movieSearch.searchMovies(params['query']).subscribe(movies => {
      this.movies = movies.Search
    })
    })

  }
}
