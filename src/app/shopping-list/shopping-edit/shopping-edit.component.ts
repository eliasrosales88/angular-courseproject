import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;


  constructor( private slService: ShoppingListService) { }
  
  @ViewChild('f') ingredientForm: NgForm;

  ngOnInit() {
    this.slService.startedEditing.subscribe(
      (index:number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form:NgForm){
    console.log(form);
    const ingredient = new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount)
    if (this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, ingredient);
    }else{
      this.slService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  
  onDelete(){
    
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();

  }

  onClear(){
    this.editMode = false;
    this.ingredientForm.reset();
    
  }


}
