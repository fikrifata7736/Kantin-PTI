import { Favorite } from "./../models/favorite";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DetailService {
  private _detail: Favorite[] = [];

  constructor() {}

  addToFavorit(f: Favorite) {
    this._detail.push(f);
    this._detail = this._detail.filter((el, i, a) => i == a.indexOf(el));
  }

  getMyFavorit() {
    return [...this._detail];
  }
}
