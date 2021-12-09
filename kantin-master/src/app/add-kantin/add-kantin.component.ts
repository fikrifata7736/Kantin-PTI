import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-kantin',
  templateUrl: './add-kantin.component.html',
  styleUrls: ['./add-kantin.component.css']
})
export class AddKantinComponent implements OnInit {

  AddKantinForm: FormGroup;
  constructor() { 
    this.initializeForm();
  }

  ngOnInit() {
  }

  initializeForm() {
    this.AddKantinForm = new FormGroup({
      kode: new FormControl("", [Validators.required]),
      nama: new FormControl("", [Validators.required]),
      kategori: new FormControl("", [Validators.required]),
      foto: new FormControl("", [Validators.required]),
      deskripsi: new FormControl("", [Validators.required]),
      harga: new FormControl("", [Validators.required]),
    });
  }

}
