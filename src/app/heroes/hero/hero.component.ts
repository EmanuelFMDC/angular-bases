import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 23;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescriptions(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'spiderman';
  }

  changeName():void{
    this.age = 45;
  }

  resetForm():void{
    this.name='ironman';
    this.age=23;
  }
}
