import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./_shared/component/header/header.component";
import { FooterComponent } from "./_shared/component/footer/footer.component";
import { JajananListComponent } from "./jajanan-list/jajanan-list.component";
import { JajananDetailComponent } from "./jajanan-detail/jajanan-detail.component";
import { FavoritListComponent } from "./favorit-list/favorit-list.component";
import { ProfileComponent } from "./profile/profile.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule, MatNativeDateModule } from "@angular/material";
import { RegisterComponent } from "./register/register.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddKantinComponent } from './add-kantin/add-kantin.component';

registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JajananListComponent,
    JajananDetailComponent,
    FavoritListComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    AddKantinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
