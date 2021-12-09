import { AddKantinComponent } from './add-kantin/add-kantin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileComponent } from "./profile/profile.component";
import { FavoritListComponent } from "./favorit-list/favorit-list.component";
import { JajananDetailComponent } from "./jajanan-detail/jajanan-detail.component";
import { JajananListComponent } from "./jajanan-list/jajanan-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "jajanan",
    component: JajananListComponent
  },
  {
    path: "jajanan/:kode",
    component: JajananDetailComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "favorit",
    component: FavoritListComponent
  },
  {
    path: "profil",
    component: ProfileComponent
  },
  {
    path: "user-profile",
    component: UserProfileComponent
  },
  {
    path: "add-kantin",
    component: AddKantinComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
