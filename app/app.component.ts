import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Book</h1>
    <h3>{{currentTime}}</h3>
    <h3>{{currentFocus}}</h3>
    <hr>
    <form>
      <div>
        <h5 [class]="ratingColor(currentRecipe)" (click)="haveMade(currentRecipe)" *ngFor="let currentRecipe of recipes"><strong>{{currentRecipe.title}} <button (click)="editRecipe(currentRecipe)">Edit!!!</button></strong>
        <h6>-{{currentRecipe.ingredients}}</h6>
        <h6>-{{currentRecipe.directions}}</h6></h5>
        </div>
    </form>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe("Peanut Butter and Chocolate Souffle", "Chocolate, Chocolate, Chocolate, and so much Peanut Butter", "Eat it!", 3),
    new Recipe("Margarita Pizza", "Basil, Garlic, Tomato, Motz", "Eat the sh*t out of it!", 2),
    new Recipe("French Onion Soup inside Mushoroom Cap", "Mushroom, Butter, Onion, Stock, Cheese", "Do I really need to tell you what to do now?", 1)
  ];

  editRecipe() {
    alert("You just almost-editted your recipe!");
  }

  haveMade(clickedRecipe: Recipe){
    if(clickedRecipe.made === true) {
      alert("You have tried this recipe!");
    } else {
      alert("You have not tried this recipe!");
    }
  }

  ratingColor(currentRecipe) {
    if(currentRecipe.rating === 3) {
      return "bg-danger";
    } else if (currentRecipe.rating === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Recipe {
  public made: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string, public rating: number) { }
}
