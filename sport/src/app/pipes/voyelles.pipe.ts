import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyelles'
})
export class VoyellesPipe implements PipeTransform {

  transform(ch : string): any {
    let voyelles = ['a','e', 'i','u','o','y'];
    let ch1 : string="";
    let found : boolean;
    for (let i = 0; i < ch.length; i++) {
      found = false;
      for (let j = 0; j < voyelles.length; j++) {
        if((ch[i] == voyelles[j]) || (ch[i] == voyelles[j].toUpperCase())){
          ch1 = ch1 + "*";
          found = true;
        }
      }
      if (!found){
        ch1 = ch1 + ch[i];
      }
    }
    return (ch1);
    /*

      let voyelles = ['a','e', 'i','u','o','y'];
      let ch : string = "hello ji"
      for (let k = 0; k < voyelles.length; k++) {
        ch.replace(voyelles[k],'*');
        ch.replace(voyelles[k].toUpperCase(),'*');
      }
      */
  }

}
