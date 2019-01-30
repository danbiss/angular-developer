import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {
  transform(value?: string): any {
    if (!value) {
      return null;
    }
    return value.replace(/<.*?>/g, ''); // replace tags
  }
}
