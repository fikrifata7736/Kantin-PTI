import { DetailService } from "../_shared/services/detail.service";
import { ServiceApiService } from "./../_shared/services/service-api.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from '@angular/material/paginator';
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-jajanan-list",
  templateUrl: "./jajanan-list.component.html",
  styleUrls: ["./jajanan-list.component.css"]
})
export class JajananListComponent implements OnInit {
  public _kantin;
  token = localStorage.getItem("token");
  displayedColumns: string[] = ["nama", "foto", "action"];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  
  constructor(
    private serviceApi: ServiceApiService,
    private detailSvc: DetailService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.token != null) {
      this.serviceApi.getAllJajanan().subscribe(
        result => {
          this._kantin = new MatTableDataSource(result.result.kantin);
          // this._kantin = this.paginator;
          // this._kantin = this.sort;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.router.navigateByUrl("/login");
      window.alert("Login Dulu Dong");
    }
  }

  applyFilter(filterValue: string) {
    this._kantin.filter = filterValue.trim().toLowerCase();
  }

  onClick(jajanan) {
    this.router.navigate(["/jajanan", jajanan.kode]);
  }

  addKantin(){
    this.router.navigateByUrl('/add-kantin');
  }
}
