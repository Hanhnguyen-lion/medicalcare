import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AccountService } from '../services/account';
import { MustMatch } from '../helpers/must-match.validator';
import { AlertService } from '../helpers/alert-service';

@Component({
  selector: 'app-register',
  imports: [NgIf, ReactiveFormsModule, FormsModule, NgClass, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {

  loading = false;
  submitted = false;
  form: any;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService
  ) { }

  ngOnInit(){
      this.form = this.formBuilder.group({
          account_type: ['', Validators.required],
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          dob: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.form.controls; }

  onSubmit(){

      this.submitted = true;
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      var account = this.form.value;
      this.accountService.register(account)
          .subscribe(
              (data) => {
                this.alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
                this.router.navigate(['/Account/Login']);
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              }
          );
    }
}

