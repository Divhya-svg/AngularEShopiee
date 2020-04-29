import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage';
import { AuthGuard } from './_guards';
import { LoginComponent } from './components/Login';
import { CustomerlayoutComponent } from './components/userlayout/customerlayout.component';
import { ContactComponent } from './components/contact/contact.component';
import { PaymentComponent } from './components/Payment/payment.component';
import { WishListComponent } from './components/wishList/wishList.component';
import { FrontPageComponent } from './components/FrontPage/frontPage.component';
import { UserRegisterComponent } from './components/Registration/userRegister.component';
import { FeedbackComponent } from './components/Feedback/feedback.component';




const routes: Routes = [
  {
    path:'front',
    component:FrontPageComponent
  },
  {
    path:'signUp',
    component:UserRegisterComponent
  },
  {
    path:'login',
    component:LoginComponent,
   
  },
  
 {
   path:'customerlayout',
   component:CustomerlayoutComponent,
   children:[{
     path:'contact',component:ContactComponent
     
   },
   {
     path:'feedback',component:FeedbackComponent
   },
  {
    path:'home',component:HomepageComponent,pathMatch:'full'
  },
{
  path:'wishList',component:WishListComponent
}]
 },
 {
   path:'payment',
   component:PaymentComponent
 },
 {
   path:'login',
   component:LoginComponent
 }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
