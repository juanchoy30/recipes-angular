import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Recipe, Category } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-sharerecipe',
  templateUrl: './sharerecipe.component.html',
  styleUrls: ['./sharerecipe.component.scss']
})
export class SharerecipeComponent implements OnInit {

  shareForm: FormGroup;
  sharerecipe: Recipe;
  category = Category

  constructor(private fb: FormBuilder,
    private recipeservice: RecipeService) { this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this.shareForm = this.fb.group({
      name: '',
      image: '',
      category: 'Others',
      description: '',
      ingredients: this.fb.array([]),
      preparation: this.fb.array([]),
    });
  }

  //Ingredients
  ingredients() : FormArray {
    return this.shareForm.get("ingredients") as FormArray
  }

  newIngredient(): FormGroup {
    return this.fb.group({
      ingredient: ''
    })
 }
 
  addIngredients() {
    this.ingredients().push(this.newIngredient());
 }

 removeIngredients(i:number) {
  this.ingredients().removeAt(i);
}

  //Preparation
  
  preparation(): FormArray {
    return this.shareForm.get("preparation") as FormArray
  }

newPreparation(): FormGroup {
    return this.fb.group({
      step: '',
      content: ''
    });
}

addPreparation() {
  this.preparation().push(this.newPreparation());
}

removePreparation(i:number) {
  this.preparation().removeAt(i);
}


  onSubmit() {
    this.sharerecipe = this.shareForm.value;
    console.log(this.sharerecipe);
    this.shareForm.reset();
  }

}
