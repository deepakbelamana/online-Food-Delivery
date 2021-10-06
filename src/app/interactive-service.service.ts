import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractiveServiceService {
   
  private getitems= new Subject<string[]>();
   cartitems$= this.getitems.asObservable();

  constructor() { }

    getcartitems(items:string[])
    {
          this.getitems.next(items);
    }
}
