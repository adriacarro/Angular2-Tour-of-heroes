import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .subscribe(response => this.hero = response);
    });
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }

  goBack(): void {
    window.history.back();
  }

}
