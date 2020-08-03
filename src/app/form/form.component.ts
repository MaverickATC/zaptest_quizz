import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Card} from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() newCard = new EventEmitter<string>();

  firstName = new FormControl('');
  lastName = new FormControl('');
  phone = new FormControl('', [Validators.required, Validators.pattern('0-9')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  notes = new FormControl('');

  addItem(value: string): void{
    this.newCard.emit(value);
  };

}
