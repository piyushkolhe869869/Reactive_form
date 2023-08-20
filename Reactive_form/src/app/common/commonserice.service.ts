import { Injectable } from '@angular/core';
import { Studentclass } from '../studentclass';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonsericeService {


 

  constructor(private http:HttpClient) { }
  p:Studentclass={
    firstname: undefined,
    middelename: undefined,
    lastname: undefined,
    email: undefined,
    Mobile: undefined,
    gender: undefined,
    date: undefined,
    Address: undefined,
    city: undefined,
    pincode: undefined,
    state: undefined
  }
  savese(o:Studentclass){

      alert(o.firstname)
      console.log(o.firstname)
      console.log(o.middelename)
      console.log(o.lastname)
      console.log(o.Mobile)
      console.log(o.Address)
      console.log(o.pincode)
      console.log(o.gender)
      console.log(o.state)
      console.log(o.city)
      console.log(o.email)
      return this.http.post("",o)
}
}