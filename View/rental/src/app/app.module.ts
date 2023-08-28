import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { RestService } from './_service/rest.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddplaceComponent } from './addplace/addplace.component';
import { ChatComponent } from './chat/chat.component';
import { AllusersComponent } from './allusers/allusers.component';
import { LocationsComponent } from './locations/locations.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { PaymentComponent } from './payment/payment.component';
import { UserProfileComponent } from './userprofile/userprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    CheckoutComponent,
    ForbiddenComponent,
    AdmindashComponent,
    AdminHeaderComponent,
    AddplaceComponent,
    ChatComponent,
    AllusersComponent,
    LocationsComponent,
    AddQuestionComponent,
    PaymentComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
