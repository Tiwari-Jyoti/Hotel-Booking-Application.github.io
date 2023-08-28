import { NgModule } from '@angular/core';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddplaceComponent } from './addplace/addplace.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AuthGuard } from './auth/auth.guard';
import { ChatComponent } from './chat/chat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { role: 'ROLE_USER' } },
  { path: 'search/:keyword', component: HomeComponent },
  { path: 'category/:name', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'admindash', component: AdmindashComponent },
  { path: 'addplace', component: AddplaceComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'users', component: AllusersComponent },
  { path: 'places', component: LocationsComponent },
  { path: 'userchat', component: AddQuestionComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'userprofile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
