import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// angular material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [AppComponent, BeneficiaryComponent, PolicyComponent, ClientsComponent, ProductsComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
