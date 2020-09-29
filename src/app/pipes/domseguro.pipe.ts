import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitazer:DomSanitizer){}

  transform(value: string, url:string): SafeResourceUrl{
    
    value=value.split(':')[2];

    console.log(url+value);
    
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url+value);
  }

}
