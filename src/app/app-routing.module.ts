import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './usercrud/createuser/createuser.component';
import { EdituserComponent } from './usercrud/edituser/edituser.component';
import { DeleteuserComponent } from './usercrud/deleteuser/deleteuser.component';
import { ViewuserComponent } from './usercrud/viewuser/viewuser.component';

const routes: Routes = [
  {path:'viewall',component:ViewuserComponent},
  {path:'create',component:CreateuserComponent},
  {path:'delete',component:DeleteuserComponent},
  {path:'edit',component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
