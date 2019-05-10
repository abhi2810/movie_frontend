import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

export interface data {
  type: string;
}

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  isLoading: boolean;
  type: string;
  constructor(public dialogRef: MatDialogRef<AddPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: data) {
    this.type = data.type;
    this.isLoading = false;
  }
  onSignup(form: NgForm) {
    if (!form.invalid)
      console.log(form.value);
  }
  onClose(){
    this.dialogRef.close();
  }

}
