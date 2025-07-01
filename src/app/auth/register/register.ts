import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  registerForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient // <-- Inyecta HttpClient
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:4200/api/register', this.registerForm.value)
        .subscribe(
          respuesta => {
            console.log('Usuario registrado:', respuesta);
            this.router.navigateByUrl('/inicio');
          },
          error => {
            alert('Error en registro');
          }
        );
    } else {
      this.registerForm.markAllAsTouched();
      alert('Por favor completa todos los campos correctamente.');
    }
  }
}
