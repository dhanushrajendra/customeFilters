import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'apiFilter'
})
export class ApiFilterPipe implements PipeTransform {
    transform(getApiData: any, searchTerm: string) {
        // if (!getApiData || !searchTerm) {
        //     return getApiData;
        // }
        if (getApiData && searchTerm) {
            return getApiData.filter(apiData =>
                apiData.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                apiData.id.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                apiData.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                apiData.pincode.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
            );
        }
    }
}
