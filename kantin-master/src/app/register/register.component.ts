import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ServiceApiService } from "./../_shared/services/service-api.service";
import { formatDate } from '@angular/common';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  
  RegisterForm: FormGroup;
  hide=true;
  SHA512 = require("crypto-js/sha512");
  CryptoJS = require("crypto-js");

  constructor(private serviceApi: ServiceApiService) {
    this.initializeForm();
  }

  ngOnInit() {}

  register() {
    this.RegisterForm.get('tanggal_lahir').patchValue(formatDate(this.RegisterForm.get('tanggal_lahir').value, 'yyyy-MM-dd', 'id'));
    this.RegisterForm.get('password').patchValue(this.CryptoJS.SHA512(this.RegisterForm.get('password').value).toString());
    this.serviceApi.register(this.RegisterForm.value).subscribe(result => {
      console.log(result);
    });
  }

  initializeForm() {
    this.RegisterForm = new FormGroup({
      user_name: new FormControl("", [Validators.required]),
      telepon: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      nama_lengkap: new FormControl("", [Validators.required]),
      alamat: new FormControl("", [Validators.required]),
      tanggal_lahir: new FormControl("", [Validators.required]),
      foto: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  
}
