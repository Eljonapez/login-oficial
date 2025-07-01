import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: any;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.http.post('http://127.0.0.1:4200/api/login', this.loginForm.value)
        .subscribe(
          respuesta => {
            console.log('Login exitoso', respuesta);
            this.router.navigateByUrl('/inicio');
          },
          error => {
            alert('Error en login');
          }
        );
    } else {
      this.loginForm.markAllAsTouched();
      alert("error al ingresar los datos");
    }
  }
}
