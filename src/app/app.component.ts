import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProductService } from './service/product.service';
import { Product } from './interface/product';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  // products
  products: Product[] = [];

  constructor(
    private productsService: ProductService,
    private observer: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.onGetProducts();
    this.onGetProduct();
    // this.onDeleteProduct();
    // this.onAddProduct();
    this.onEditProduct();
  }

  onAddProduct() {
    const product = {
      productName: 'test',
      description: 'test',
      productType: 'test',
      price: 100,
    };
    this.productsService.addProduct(product).subscribe(
      (res) => console.log(res),
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onGetProducts() {
    this.productsService.getProducts().subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onGetProduct() {
    this.productsService.getProduct(2).subscribe(
      (res) => console.log(res),
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onEditProduct() {
    const product = {
      id: 19,
      productName: 'test product',
      description: 'test Description',
      productType: 'test  Type',
      price: 200,
    };
    this.productsService.updateProduct(product).subscribe(
      (res) => console.log(res),
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onDeleteProduct() {
    this.productsService.deleteProduct(19).subscribe(
      (res) => console.log(res),
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}
