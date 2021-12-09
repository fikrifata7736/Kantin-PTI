import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ServiceApiService } from "./../_shared/services/service-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  hide = true;
  SHA512 = require("crypto-js/sha512");
  CryptoJS = require("crypto-js");

  constructor(private router: Router, private serviceApi: ServiceApiService) {
    this.initializeForm();
  }

  ngOnInit() {}

  login() {
    this.LoginForm.get('password').patchValue(this.CryptoJS.SHA512(this.LoginForm.get('password').value).toString());
    this.serviceApi.login(this.LoginForm.value).subscribe(result => {
      localStorage.setItem("token", result.token);
      this.serviceApi.verifyToken(result.token).subscribe(result => {
        console.log(result);
        this.router.navigateByUrl("/jajanan");
      });
    });
  }

  register() {
    this.router.navigateByUrl("/register");
  }

  initializeForm() {
    this.LoginForm = new FormGroup({
      user_name: new FormControl(""),
      password: new FormControl(""),
      remember_me: new FormControl(true)
    });
  }
}
