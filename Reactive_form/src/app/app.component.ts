import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonsericeService } from './common/commonserice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
 
  
  firstName: string | any;
  title = 'Studentform';
 
  constructor(public cs:CommonsericeService){}

   

 savedata: FormGroup=new FormGroup({
  firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
  middelename: new FormControl(''),
  lastname: new FormControl(''),
  email: new FormControl(''),
  Mobile: new FormControl(''),
  gender:new FormControl(''),
  date: new FormControl(''),
  Address: new FormControl(''),
  city: new FormControl(''),
  state:new FormControl(''),
  pincode: new FormControl(''),
 })

 save(){
  alert("i am in ts")

this.cs.savese(this.savedata.value).subscribe();
 

 }

}
