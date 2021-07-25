import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './usercrud/createuser/createuser.component';
import { EdituserComponent } from './usercrud/edituser/edituser.component';
import { ViewuserComponent } from './usercrud/viewuser/viewuser.component';
import { DeleteuserComponent } from './usercrud/deleteuser/deleteuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    EdituserComponent,
    ViewuserComponent,
    DeleteuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
