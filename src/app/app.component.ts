import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email,
          MyValidators.restrictedEmails
        ],
        [MyValidators.uniqueEmail]
      ),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(3),
        ]
      ),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', [Validators.required]),
      }),
      skills: new FormArray([]),
    });
  };

  setCapital(): void {
    const cityMap: Object = {
      ru: 'Moscow',
      by: 'Minsk',
      ua: 'Kiev',
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({
      address: {city}
    });
  };

  addSkill(): void {
    const control = new FormControl('', [Validators.required]);
    // (<FormArray>this.form.get('skills')).push(control);
    (this.form.get('skills') as FormArray).push(control);
  };

  submit(): void {
    if(this.form.valid){
      const formData = {... this.form.value};
      console.log('FORM SUBMIT', formData);
      console.log('FORM', this.form);
      this.form.reset();
    };
  };

};
