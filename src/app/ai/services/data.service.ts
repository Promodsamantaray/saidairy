import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedAI: any;

  constructor() {}
  public setAI(item) {
    this.selectedAI = item;
    localStorage.setItem('AI',JSON.stringify(this.selectedAI));
    console.log(this.selectedAI);
  }
  public getAI(){
    return this.selectedAI;
  }
}
