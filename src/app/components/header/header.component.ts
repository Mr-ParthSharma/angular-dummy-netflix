import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: string = '';
  constructor(private routes: Router){}

  ngOnInit(): void {

  }

  submitHandler(evt:any){
    evt.preventDefault();
    this.routes.navigate(['/movies'], { queryParams: { query : this.query}})
  }

}
