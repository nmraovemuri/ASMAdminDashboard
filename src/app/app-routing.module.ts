import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
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
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { ShopsComponent } from './shops/shops.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SubUserRegisterComponent } from './sub-user-register/sub-user-register.component';
import { SmsConfigureComponent } from './sms-configure/sms-configure.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { UnitsComponent } from './units/units.component';
import { BrandsComponent } from './brands/brands.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotConfirmPasswordComponent } from './forgot-confirm-password/forgot-confirm-password.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductUnitPriceComponent } from './product-unit-price/product-unit-price.component';



const routes: Routes = [
  {
    path : '',
    component : LoginComponent   
  },
  {
    path : 'home',
    component : HomeComponent   
  },
  {
    path : 'admin-login',
    component : LoginComponent,
    
  },
  {
    path : 'nav',
    component : NavComponent
  },
  {
    path : 'add-area',
    component : AddAreaComponent
  },
  {
    path : 'add_category',
    component  :AddCategoryComponent
  },
  {
    path : 'add-location',
    component :  AddLocationComponent,
  },  
  {
    path : 'add-offer',
    component : AddOfferComponent
  },
 
  {
    path : 'add-product',
    component : AddProductComponent
  },
  {
    path : 'product-price',
    component : ProductUnitPriceComponent
  },
  {
    path : 'add-shop',
    component : AddShopComponent
  },
  {
    path : 'areas',
    component : AreasComponent
  },
  {
    path : 'category',
    component : CategoryComponent
  },
  {
    path : 'add-sub-category',
    component : SubCategoryComponent
  },
  {
    path : 'change-password',
    component : ChangePasswordComponent
  },
  {
    path : 'customer-edit',
    component : CustomerEditComponent
  },
  {
    path : 'customers-view',
    component : CustomerViewComponent
  },
  {
    path : 'customers',
    component : CustomersComponent
  },
  {
    path : 'edit-profile',
    component : EditProfileComponent
  },
  {
    path : 'email',
    component : EmailSettingComponent
  },
  {
    path : 'general/analytics',
    component : GeneralSettingAnalyticsComponent
  },
  {
    path : 'general',
    component : GeneralSettingComponent
  },
  {
    path : 'general/contact',
    component : GeneralSettingContactComponent
  },
  {
    path : 'home/general/favicon',
    component : GeneralSettingFaviconComponent
  },
  {
    path : 'home/general/logo',
    component : GeneralSettingLogoComponent
  },
  {
    path : 'locations',
    component : LocationsComponent
  },
  {
    path : 'offers',
    component : OffersComponent
  },
  {
    path : 'orders-edit',
    component : OrderEditComponent
  },
  {
    path : 'orders-view',
    component : OrderViewComponent
  },
  {
    path : 'orders',
    component : OrdersComponent
  },
  {
    path : 'payment',
    component : PaymentSettingComponent
  },
  {
    path : 'payment/payment-strip',
    component : PaymentSettingStripeComponent
  },
  {
    path : 'home/categories',
    component : CategoriesComponent
  },
  {
    path : 'sub-categories',
    component : SubCategoriesComponent
  },  
  {
    path : 'products-view',
    component : ProductsViewComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'reports',
    component : ReportsComponent
  },
  {
    path : 'shop-products',
    component : ShopProductsComponent
  },
  {
    path : 'shop-view',
    component : ShopViewComponent
  },
  {
    path : 'shops',
    component : ShopsComponent
  },
  {
    path : 'sub-users-list',
    component : UsersListComponent
  },
  {
    path : 'sub-user-register',
    component : SubUserRegisterComponent
  },
  {
    path : 'sms-configure',
    component : SmsConfigureComponent
  },
  {
    path : 'sms-template',
    component : SmsTemplateComponent
  },
  {
    path : 'add-brand',
    component : AddBrandComponent
  },
  {
    path : 'brands',
    component : BrandsComponent
  },
  {
    path : 'add-unit',
    component : AddUnitComponent
  },
  {
    path : 'units',
    component : UnitsComponent
  },
  {
    path : 'forgot-password',
    component : ForgotPasswordComponent
  }, 
  {
    path : 'forgot-confirm-password',
    component : ForgotConfirmPasswordComponent
  },
  {
    path :'order-details/:order_id/:total_amount',
    // single/:pid/:unit_value
    component :OrderDetailsComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
