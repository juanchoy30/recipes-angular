import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Recipe, Category } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-sharerecipe',
  templateUrl: './sharerecipe.component.html',
  styleUrls: ['./sharerecipe.component.scss']
})
export class SharerecipeComponent implements OnInit {

  @ViewChild('Sform') shareFormDirective;
  shareForm: FormGroup;
  sharerecipe: Recipe;
  category = Category;

  formErrors = {
    'name': '',
    'image': '',
    'description': '',
    'ingredient': '',
    'content': ''
  };

  validationMessages = {
    'name': {'required': 'Dish name is required. Please, give your dish a name'},
    'image': {'required': 'Image is required'},
    'description': {'required': 'Description of the dish is required. Please give a brief description'},
    'ingredient': {'required': 'Please do not leave empty fields'},
    'content': {'required': 'Please do not leave empty fields'}
  }

  constructor(private fb: FormBuilder,
    private recipeservice: RecipeService) { this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this.shareForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      category: 'Others',
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
      preparation: this.fb.array([]),
    });

    this.shareForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  //Ingredients
  ingredients() : FormArray {
    return this.shareForm.get("ingredients") as FormArray
  }

  newIngredient(): FormGroup {
    return this.fb.group({
      ingredient: ['', Validators.required]
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
      content: ['', Validators.required]
    });
}

addPreparation() {
  this.preparation().push(this.newPreparation());
}

removePreparation(i:number) {
  this.preparation().removeAt(i);
}

  //onValuechange
  onValueChanged(data?: any) {
    if (!this.shareForm) { return; }
    const form = this.shareForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }



  onSubmit() {
    this.sharerecipe = this.shareForm.value;
    console.log(this.sharerecipe);
    this.shareForm.reset({
      name: '',
      image: '',
      category: 'Others',
      description: '',
      ingredients: this.fb.array([]),
      preparation: this.fb.array([]),
    });

    this.shareFormDirective.resetForm();
  }

}
