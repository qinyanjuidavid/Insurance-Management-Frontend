import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },

  {
    path: '',
    component: BeneficiaryComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'policies',
    component: PolicyComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
