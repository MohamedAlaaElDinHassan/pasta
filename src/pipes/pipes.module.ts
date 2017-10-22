import { NgModule } from '@angular/core';
import { SearchFilterPipe } from './search-filter/search-filter';
import { OrderByPipe } from './order-by/order-by';
@NgModule({
	declarations: [SearchFilterPipe,
    OrderByPipe],
	imports: [],
	exports: [SearchFilterPipe,
    OrderByPipe]
})
export class PipesModule {}
