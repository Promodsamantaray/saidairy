/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  SI: any;
  SelectedI: any;

  constructor() { }
  public setSI(item){
      this.SI = item; //SI - Selected Insemination
      console.log(this.SI);
  }
  public getSI(){
     return this.SI;
  }
}
