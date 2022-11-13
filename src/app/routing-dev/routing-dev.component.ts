import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-routing-dev',
  templateUrl: './routing-dev.component.html',
  styleUrls: ['./routing-dev.component.css']
})
export class RoutingDevComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onNavTo(arg: string){
    this.router.navigate([arg]);
  }

}
