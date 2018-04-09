import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any): any {
    let url = './assets/img/noimage.png';
    if(!value){
      return url;
    }else{
      if(value.length>0){
        return value[1].url;
      }else{
        return url;
      }
    }
  }

}
