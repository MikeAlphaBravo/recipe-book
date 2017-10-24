import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Book</h1>
    <h3>{{currentFocus}}</h3>
    <hr>
    <form>
      <div *ngFor="let currentRecipe of recipes">
        <h5><strong>{{currentRecipe.title}} <button (click)="editRecipe(currentRecipe)">Edit!!!</button></strong></h5>
        <h6>-{{currentRecipe.ingredients}}</h6>
        <h6>-{{currentRecipe.directions}}</h6>
        </div>
    </form>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  recipes: Recipe[] = [
    new Recipe("Peanut Butter and Chocolate Souffle", "Chocolate, Chocolate, Chocolate, and so much Peanut Butter", "Eat it!"),
    new Recipe("Margarita Pizza", "Basil, Garlic, Tomato, Motz", "Eat the sh*t out of it!"),
    new Recipe("French Onion Soup inside Mushoroom Cap", "Mushroom, Butter, Onion, Stock, Cheese", "Do I really need to tell you what to do now?")
  ];

  editRecipe() {
    alert("You just almost-editted your recipe!");
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
