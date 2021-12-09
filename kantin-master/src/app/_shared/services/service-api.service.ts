import { DetailJajan } from "./../models/detailJajan";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpHeaderResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Kantin } from "../models/kantin";

@Injectable({
  providedIn: "root"
})
export class ServiceApiService {
  private urlApi = "https://umn-pti2019.herokuapp.com";
  private loginUrl = "https://umn-pti2019.herokuapp.com/api/login";
  private registerUrl = "https://umn-pti2019.herokuapp.com/api/register";
  private verifyTokenUrl = "https://umn-pti2019.herokuapp.com/api/verify";
  private editProfileUrl = 'https://umn-pti2019.herokuapp.com/api/update';
  private editKantinUrl = 'https://umn-pti2019.herokuapp.com/api/kantin';

  constructor(private http: HttpClient) {}

  getAllJajanan(): Observable<Kantin> {
    return this.http.get<Kantin>(`${this.urlApi}/api/kantin`);
  }

  getJajananByKode(kode: number): Observable<DetailJajan> {
    return this.http.get<DetailJajan>(`${this.urlApi}/api/kantin/${kode}`);
  }

  verifyToken(token): Observable<any> {
    return this.http.post<any>(this.verifyTokenUrl, { token: token });
  }

  login(details): Observable<any> {
    return this.http.post<any>(this.loginUrl, details);
  }

  register(details): Observable<any> {
    return this.http.post<any>(this.registerUrl, details);
  }

  edit(details, token): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(this.editProfileUrl, details, {headers: headers});
  }

  add(details, token): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(this.editKantinUrl, details, {headers: headers});
  }

}
