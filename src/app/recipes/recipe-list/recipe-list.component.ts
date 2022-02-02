import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://www.inspiredtaste.net/wp-content/uploads/2022/01/Homemade-Vegan-Meatballs-1-1200.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://www.inspiredtaste.net/wp-content/uploads/2022/01/Homemade-Vegan-Meatballs-1-1200.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
