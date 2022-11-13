import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css']
})
export class LandingNavComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onNavTo(arg: string){
    this.router.navigate([arg]);
  }
}
