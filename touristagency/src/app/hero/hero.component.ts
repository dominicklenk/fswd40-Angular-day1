import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private heroText: string;
private heroBtnText: string;

  constructor() {
  this.heroHeading = "We are your ultimate Summer experience Provider!";
  this.heroText = "With hundreds of summer holiday destinations offered, we are your natural choice for planning it all out!";
  this.heroBtnText = "Learn more";
  }

  ngOnInit() {
  }

}
