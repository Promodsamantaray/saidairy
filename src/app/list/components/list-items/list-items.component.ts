import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cow-list-item',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
@Input() listItems;
@Output() items = new EventEmitter<string>();
  selectItem: any;
  cowList: any[];
  heifers: any[];
  calf: any[];
  constructor() { }

  ngOnInit() {
    console.log(this.listItems);
    this.category(this.listItems);
  }
  memberSelection(hathi){
    this.listItems.forEach(item=>{
      item.active='medium';
    });
    this.selectItem=this.listItems.filter(item=>{
      console.log(item);
       return item.name===hathi;
    })[0];
   this.items.emit(this.selectItem);
    this.selectItem.active='primary';

  }
  category(list){
    this.cowList=[];
    this.heifers=[];
    this.calf=[];
list.forEach(element => {
  console.log(element.dob);
  const dob = this.changeDateFormat(element.dob);
  const date1 = new Date(dob);
const date2 = new Date();
const diffTime = Math.abs(date2.valueOf() - date1.valueOf());
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const monthCount=Math.ceil(diffDays/30);
console.log(diffDays);
console.log(monthCount);
if(monthCount<16){
  this.calf.push(element);
}else if(monthCount>=16 && monthCount>=20){
  this.heifers.push(element);
}else{
  this.cowList.push(element);
}
console.log(this.cowList);
console.log(this.heifers);
console.log(this.calf);
});
  }
  changeDateFormat(dateStr){
    const str=dateStr;
    const newstr=str.split('-');
    const date= newstr[0];
    const month=newstr[1];
    newstr[0]=month;
    newstr[1]=date;
   return newstr.join('-');
  }
}
