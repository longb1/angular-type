import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validate-form';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void{
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      //Send obj to database
      console.log(this.loginForm.value)
    }else{
      //error
      console.log("not valid")
      validateForm.validateAllFormFields(this.loginForm)
      alert("Your Form is invalid")
    }

  }

}
