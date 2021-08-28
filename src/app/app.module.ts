import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { BantalComponent } from './product-listing/bantal/bantal.component';
import { BedSheetComponent } from './product-listing/bed-sheet/bed-sheet.component';
import { WhyUsComponent } from './why-us/why-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ContactComponent,
    ProductListingComponent,
    BantalComponent,
    BedSheetComponent,
    WhyUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
