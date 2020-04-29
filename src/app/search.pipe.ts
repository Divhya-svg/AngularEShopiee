import { Pipe, PipeTransform } from '@angular/core';




@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(text:string,searchi:string,patter):string{
    if(!text|| !searchi){
      return text;
    }
    //allow searching against any word
    const searchRegex=searchi
    .split(' ')
    .map(escapeRegExp)
    .map(x=> `(\\s|^)${x}`)
    .join('|');

    const regex=new RegExp(searchRegex,'gi');
    const bolded=text.replace(regex,match=> `</b>${match}<b>`);

    return '<b>${bolded}</b>';
  }
  

}

function escapeRegExp(val: string): string {
  return val.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
