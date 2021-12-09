import { DetailJajan } from "./../_shared/models/detailJajan";
import { ServiceApiService } from "./../_shared/services/service-api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DetailService } from "../_shared/services/detail.service";

@Component({
  selector: "app-jajanan-detail",
  templateUrl: "./jajanan-detail.component.html",
  styleUrls: ["./jajanan-detail.component.css"]
})
export class JajananDetailComponent implements OnInit {
  public jajananKode;
  _detailJajan: DetailJajan;
  constructor(
    private detailSvc: DetailService,
    private serviceApi: ServiceApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let kode = this.route.snapshot.paramMap.get("kode");
    this.jajananKode = kode;
    this.serviceApi.getJajananByKode(this.jajananKode).subscribe(result => {
      this._detailJajan = result;
    });
  }

  addFavorit(kantin) {
    this.detailSvc.addToFavorit(kantin);
  }
}
