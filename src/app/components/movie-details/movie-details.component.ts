import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie: any;

  constructor(private service: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        let id = params['imdbID'];
        this.service.getMovieDetails(id)
          .subscribe(resp=>this.movie = resp);
      });
  }

  goBack() {
    window.history.back();
  }
}
