import { Favorite } from "./../_shared/models/favorite";
import { DetailService } from "../_shared/services/detail.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-favorit-list",
  templateUrl: "./favorit-list.component.html",
  styleUrls: ["./favorit-list.component.css"]
})
export class FavoritListComponent implements OnInit {
  loadedKantin: Favorite[];
  token = localStorage.getItem("token");

  constructor(private router: Router, private detailSvc: DetailService) {}

  ngOnInit() {
    if (this.token != null) {
      this.loadedKantin = this.detailSvc.getMyFavorit();
    } else {
      this.router.navigateByUrl("/login");
      window.alert("Login Dulu Dong");
    }
  }
}
