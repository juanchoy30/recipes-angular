import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Recipe, Category } from '../shared/recipe';
import { SubmitrecipeService } from '../services/submitrecipe.service';

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
  recipecopy : Recipe;
  errMess: string;
  selectedFile: File = null;

  formErrors = {
    'name': '',
    'description': '',
    'ingredient': '',
    'content': ''
  };

  validationMessages = {
    'name': {'required': 'Dish name is required. Please, give your dish a name'},
    'description': {'required': 'Description of the dish is required. Please give a brief description'},
    'ingredient': {'required': 'Please do not leave empty fields'},
    'content': {'required': 'Please do not leave empty fields'}
  }

  constructor(private fb: FormBuilder,
    private submitrecipeservice: SubmitrecipeService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this.shareForm = this.fb.group({
      id: '',
      name: ['', Validators.required],
      image: '',
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
    this.shareForm.value.image = 'images/' + this.shareForm.value.category + '.jpg'
    this.recipecopy = this.shareForm.value;
    this.submitrecipeservice.submitRecipe(this.recipecopy)
    .subscribe(sharerecipe => {this.sharerecipe = sharerecipe;
      console.log(this.sharerecipe);});
    this.shareForm.reset({
      name: '',
      category: 'Others',
      description: '',
      ingredients: this.fb.array([]),
      preparation: this.fb.array([]),
    });

    this.shareFormDirective.resetForm();
  }

}
