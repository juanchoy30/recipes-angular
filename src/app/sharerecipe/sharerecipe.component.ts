import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Recipe, Category } from '../shared/recipe';
import { SubmitrecipeService } from '../services/submitrecipe.service';
import { expand } from '../animations/app.animation';


@Component({
  selector: 'app-sharerecipe',
  templateUrl: './sharerecipe.component.html',
  styleUrls: ['./sharerecipe.component.scss'],
  animations: [
    expand()
  ]
})
export class SharerecipeComponent implements OnInit {

  @ViewChild('Sform') shareFormDirective;
  shareForm: FormGroup;
  sharerecipe: Recipe;
  category = Category;
  recipecopy : Recipe;
  errMess: string;
  spinnerVisible: boolean = false;


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
      ingredients: this.fb.array([]), //define as array
      preparation: this.fb.array([]), //define as array
    });

    this.shareForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  //Ingredients
  ingredients() : FormArray {
    return this.shareForm.get("ingredients") as FormArray
  } //Gets the ingredients array of the shareform

  newIngredient(): FormGroup {
    return this.fb.group({
      ingredient: ['', Validators.required]
    })
 } //Makes the inside element of the array
 
  addIngredients() {
    this.ingredients().push(this.newIngredient());
 } //Adds elements inside the array

  removeIngredients(i:number) {
    this.ingredients().removeAt(i);
  }//removes elements inside the array 

  //Preparation
  
  preparation(): FormArray {
    return this.shareForm.get("preparation") as FormArray
  } //Gets the preparation array of the shareform

  newPreparation(): FormGroup {
    return this.fb.group({
      step: '',
      content: ['', Validators.required]
    }); 
  }//Makes the inside element of the array

  addPreparation() {
    this.preparation().push(this.newPreparation());
  } //Adds elements inside the array

  removePreparation(i:number) {
    this.preparation().removeAt(i);
  }//removes elements inside the array

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
    //In order to select an image to the dish uploaded. (I coudn´t put a upload image button because json server only acepts javascript objects)
    this.shareForm.value.image = 'images/' + this.shareForm.value.category + '.jpg'
    this.recipecopy = this.shareForm.value;
    this.spinnerVisible = true;
    this.submitrecipeservice.submitRecipe(this.recipecopy)
    .subscribe(sharerecipe => { setTimeout(() => {
      this.sharerecipe = sharerecipe;  this.spinnerVisible = false;
      console.log(this.sharerecipe);
      setTimeout(() => this.sharerecipe = null, 5000);}, 2000);},
      errmess => this.errMess = <any>errmess);
    this.shareForm.reset({
      category: 'Others'
    });
    this.shareFormDirective.resetForm();
  }

}
