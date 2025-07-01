import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Login } from './auth/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Nav } from './shared/nav/nav';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Register } from './auth/register/register';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Login, Dashboard, Nav, RouterModule, ReactiveFormsModule, Register],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'project';

}
