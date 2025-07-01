import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Login {

  constructor() { }

  login(credentials:any){
    console.log(credentials);

  }
}
