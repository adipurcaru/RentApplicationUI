import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  
  terenId: any;
  terenSelectat: any;
  customerName: string;

  formGroup : FormGroup;
  dateModel: Date = new Date();
  stringDateModel: string = new Date().toString();

  nume;
  email;
  data;
  ora;

  constructor(private route: ActivatedRoute, private service: UniversalService) {
    
   }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      params => {
        this.terenId = this.route.snapshot.paramMap.get('teren_id');
      }
    )

    this.service.getTerenByID(this.terenId).subscribe(
      teren => {
        this.terenSelectat = teren;
        console.log(this.terenSelectat);
      }
    )

    this.formGroup = new FormGroup({
      activeEndDate:  new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]})
    }, { updateOn: 'change' });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const DateTimeValidator = (fc: FormControl) => {
  const date = new Date(fc.value);
  const isValid = !isNaN(date.valueOf());
  return isValid ? null : {
      isValid: {
          valid: false
      }
  };
};
