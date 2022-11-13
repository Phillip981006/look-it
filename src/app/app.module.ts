import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { LandingNavComponent } from './landing/landing-nav/landing-nav.component';

import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerSingInComponent } from './customer/customer-sing-in/customer-sing-in.component';
import { CustomerSingUpComponent } from './customer/customer-sing-up/customer-sing-up.component';
import { CustomerSetCredentialsComponent } from './customer/customer-set-credentials/customer-set-credentials.component';
import { CustomerLandingComponent } from './customer/customer-landing/customer-landing.component';

import { ShopComponent } from './shop/shop.component';
import { ShopSignInComponent } from './shop/shop-sign-in/shop-sign-in.component';
import { ShopSetCredentialsComponent } from './shop/shop-set-credentials/shop-set-credentials.component';
import { ShopLandingComponent } from './shop/shop-landing/shop-landing.component';

import { RoutingDevComponent } from './routing-dev/routing-dev.component';

const routes: Routes = [
  { path: '' , component: LandingComponent },

  { path: 'admin/sign-in' , component: AdminSignInComponent},
  { path: 'admin/landing', component: AdminLandingComponent },

  { path: 'shop/sign-in' , component: ShopSignInComponent },
  { path: 'shop/set-credentials' , component: ShopSetCredentialsComponent },
  { path: 'shop/landing' , component: ShopLandingComponent },

  { path: 'customer/sign-in' , component: CustomerSingInComponent },
  { path: 'customer/sign-up' , component: CustomerSingUpComponent },
  { path: 'customer/set-credentials' , component: CustomerSetCredentialsComponent },
  { path: 'customer/langing', component: CustomerLandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingNavComponent,
    AdminComponent,
    AdminNavComponent,
    CustomerComponent,
    ShopComponent,
    CustomerSingInComponent,
    CustomerSingUpComponent,
    CustomerSetCredentialsComponent,
    CustomerLandingComponent,
    AdminSignInComponent,
    ShopSignInComponent,
    ShopSetCredentialsComponent,
    RoutingDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
