import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{LoginComponent} from './components/Login/login.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { Route, Router,RouterModule } from '@angular/router';
import { ProductComponent } from './components/Product/product.component';
import { ProductService } from './services/product.service';
import { SearchComponent } from './components/searchproduct/search.component';
import { SearchService } from './services/search/Search.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import{StarRatingModule} from 'angular-star-rating';
import { PaymentComponent } from './components/Payment/payment.component';
import { SearchPipe } from './search.pipe';
import { CustomerlayoutComponent } from './components/userlayout/customerlayout.component';
import { DemoMaterialModule } from './material-module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AuthenticationService } from './services';
import { UserRegisterComponent } from './components/Registration/userRegister.component';
import { FeedbackComponent } from './components/Feedback/feedback.component';
import { RegisterService } from './services/Register.service';
import { ContactComponent } from './components/contact/contact.component';
import { FrontPageComponent } from './components/FrontPage/frontPage.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { WishListService } from './services/wishList.service';
import { WishListComponent } from './components/wishList/wishList.component';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';



const myRoutes:Route[]=[
  {path:'home',component:HomepageComponent},
  {path:'contact',component:ContactComponent},
  {path:'wishList',component:WishListComponent},
  {path:'signUp',component:UserRegisterComponent},
  {path:'feedback',component:FeedbackComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    SearchComponent,
    HomepageComponent,
    PaymentComponent,
    SearchPipe,
    CustomerlayoutComponent,
    UserRegisterComponent,
    FeedbackComponent,
    ContactComponent,
    FrontPageComponent,
    WishListComponent
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StarRatingModule.forRoot(),
    DemoMaterialModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(myRoutes),
    CommonModule,
    MatCommonModule
    
   

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ProductService,SearchService,AuthenticationService,RegisterService,ToastrService,WishListService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
