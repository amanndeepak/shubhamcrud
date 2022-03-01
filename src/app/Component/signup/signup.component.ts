import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup
  constructor(private fb: FormBuilder , private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: ['']

    })
  }
 signUp(){
this.http.post<any>('http://localhost:3000/signup',this.signUpForm.value).subscribe(res=>{
  alert('User Record Added Succefully')
  this.signUpForm.reset();
this.route.navigate(['login']);
})
 }
}
