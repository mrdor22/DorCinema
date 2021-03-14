// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'limit'
// })
// export class LimitPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }



import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {
  transform(value: string, limit: number){
      if (value.length > limit) return value.substring(0, limit) + '...';
        else return value;
  }
}