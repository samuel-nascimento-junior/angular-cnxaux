import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

import {AccordionModule}		  from 'primeng/primeng';
import {ButtonModule}		      from 'primeng/primeng';
import {DropdownModule}		   	from 'primeng/dropdown';
import {MenuItem}		          from 'primeng/api';
import {PanelMenuModule}		  from 'primeng/panelmenu';
import {PanelModule}		  	  from 'primeng/primeng';
import {RadioButtonModule}		from 'primeng/primeng';
import {TabViewModule}		    from 'primeng/tabview';
import {InputTextareaModule}	from 'primeng/inputtextarea';
import {InputTextModule}      from 'primeng/inputtext';
import {SelectButtonModule}   from 'primeng/selectbutton';
import {CardModule}           from 'primeng/card';

import { FormsModule } from '@angular/forms';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { FlowComponent } from './flow/flow.component';
import { StepComponent } from './step/step.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    InputTextModule,
    PanelMenuModule,
    ButtonModule,
    RadioButtonModule,
    DropdownModule,
    TabViewModule,
    SelectButtonModule,
    CardModule,
    RouterModule.forRoot([
      { path: '', component: WalletListComponent},
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent},
      { path: 'flow', component: FlowComponent},
      { path: 'step', component: StepComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    VerticalMenuComponent,
    FlowComponent,
    StepComponent,
    WalletListComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }