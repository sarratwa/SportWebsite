import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espace'
})
export class EspacePipe implements PipeTransform {

  transform(ch : string): any {
    return(ch.replace(' ','_'));
  }

}
