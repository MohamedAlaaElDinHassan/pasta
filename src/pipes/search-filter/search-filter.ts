import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the SearchFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], filter: {search}) {
        if (!items || filter.search === null)
            return items;

        return items.filter(item => item.title.indexOf(filter.search) !== -1);
    }
}
