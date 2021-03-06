import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService,
              private router:Router) {
    console.log("constructor");
    
  }

  ngOnInit(): void {
    console.log("Oninit");
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(idx:number){
    console.log("invoco al metodo de la clase padre en heroes");
    console.log("llego el index " + idx);
    this.router.navigate(['/heroe',idx])
  }

}
