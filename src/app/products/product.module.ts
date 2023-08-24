import { NgModule } from '@angular/core';
import { ProductListComonent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import {RouterModule} from '@angular/router'
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComonent,
    ProductDetailComponent,
    ConvertToSpaces,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComonent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
