import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Login } from './auth/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Login, Dashboard],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'project';

  }
