import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  token = localStorage.getItem("token");
  constructor(private router: Router) {}

  ngOnInit() {
    this.token = localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

  login() {
    this.router.navigateByUrl("/login");
  }
}
