import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class Nav {
  userLoginOn:boolean=false;

}
