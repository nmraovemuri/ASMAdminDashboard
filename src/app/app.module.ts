import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { AreasComponent } from './areas/areas.component';
import { CategoryComponent } from './category/category.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomersComponent } from './customers/customers.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { GeneralSettingAnalyticsComponent } from './general-setting-analytics/general-setting-analytics.component';
import { GeneralSettingContactComponent } from './general-setting-contact/general-setting-contact.component';
import { GeneralSettingFaviconComponent } from './general-setting-favicon/general-setting-favicon.component';
import { GeneralSettingLogoComponent } from './general-setting-logo/general-setting-logo.component';
import { LocationsComponent } from './locations/locations.component';
import { OffersComponent } from './offers/offers.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentSettingComponent } from './payment-setting/payment-setting.component';
import { PaymentSettingStripeComponent } from './payment-setting-stripe/payment-setting-stripe.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { ShopsComponent } from './shops/shops.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubUserRegisterComponent } from './sub-user-register/sub-user-register.component';
import { SmsConfigureComponent } from './sms-configure/sms-configure.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { UnitsComponent } from './units/units.component';
import { BrandsComponent } from './brands/brands.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotConfirmPasswordComponent } from './forgot-confirm-password/forgot-confirm-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    AddAreaComponent,
    AddCategoryComponent,
    AddLocationComponent,    
    AddOfferComponent,    
    AddProductComponent,
    AddShopComponent,
    AreasComponent,
    CategoryComponent,
    ChangePasswordComponent,
    CustomerEditComponent,
    CustomerViewComponent,
    CustomersComponent,
    EditProfileComponent,
    EmailSettingComponent,
    GeneralSettingComponent,
    GeneralSettingAnalyticsComponent,
    GeneralSettingContactComponent,
    GeneralSettingFaviconComponent,
    GeneralSettingLogoComponent,
    LocationsComponent,
    OffersComponent,
    OrderEditComponent,
    OrderViewComponent,
    OrdersComponent,
    PaymentSettingComponent,
    PaymentSettingStripeComponent,
    CategoriesComponent,
    SubCategoriesComponent,    
    ProductsViewComponent,
    ProductsComponent,
    ReportsComponent,
    ShopProductsComponent,
    ShopViewComponent,
    ShopsComponent,
    UsersListComponent,
    HeaderComponent,
    FooterComponent,
    SubUserRegisterComponent,
    SmsConfigureComponent,
    SmsTemplateComponent,
    SubCategoryComponent,
    AddUnitComponent,
    AddBrandComponent,
    UnitsComponent,
    BrandsComponent,
    ForgotPasswordComponent,
    ForgotConfirmPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
