import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  token = localStorage.getItem("token");
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.token != null) {
    } else {
      this.router.navigateByUrl("/login");
      window.alert("Login Dulu Dong");
    }
  }
}
