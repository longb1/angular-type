import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validate-form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm!:FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void{
    this.signupForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.signupForm.valid){
      //Send obj to database
      console.log(this.signupForm.value)
    }else{
      //error
      console.log("not valid")
      validateForm.validateAllFormFields(this.signupForm)
      alert("Your Form is invalid")
    }

  }

}
