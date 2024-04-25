import { AddMobileComponent } from './components/add-mobile/add-mobile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistreComponent } from './components/registre/registre.component';
import { LoginComponent } from './components/login/login.component';
import { DetailMobileComponent } from './components/detail-mobile/detail-mobile.component';
import { ListeMobileComponent } from './components/liste-mobile/liste-mobile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'liste-mobiles' , pathMatch:'full'},
  {path : 'liste-mobiles' , component:ListeMobileComponent},
  {path:'detail-mobile/:id' , component:DetailMobileComponent},
  {path:'add-mobile' , component:AddMobileComponent},
  {path:'login' , component:LoginComponent},
  {path:'registre' , component:RegistreComponent},
  {path: '**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
