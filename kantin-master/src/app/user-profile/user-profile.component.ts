import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from "./../_shared/services/service-api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  EditProfileForm: FormGroup;
  token = localStorage.getItem('token');
  hide=true;
  SHA512 = require("crypto-js/sha512");
  CryptoJS = require("crypto-js");

  constructor(private serviceApi: ServiceApiService) { 
    this.initializeForm();
  }

  ngOnInit() {
    this.serviceApi.verifyToken(this.token).subscribe(result => {
      console.log(result.result.user);
      this.EditProfileForm.patchValue(result.result.user);
    });
  }

  edit(){
    this.EditProfileForm.get('password').patchValue(this.CryptoJS.SHA512(this.EditProfileForm.get('password').value).toString());
    this.EditProfileForm.get('tanggal_lahir').patchValue(formatDate(this.EditProfileForm.get('tanggal_lahir').value, 'yyyy-MM-dd', 'id'));
    this.serviceApi.edit(this.EditProfileForm.value, this.token)
    .subscribe(result => {
      console.log(result);
    })
  }  

  initializeForm() {
    this.EditProfileForm = new FormGroup({
      nama_lengkap: new FormControl("", [Validators.required]),
      alamat: new FormControl("", [Validators.required]),
      tanggal_lahir: new FormControl("", [Validators.required]),
      foto: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

}
