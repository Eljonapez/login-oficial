import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Nav, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  userLoginOn:boolean=false;

}
