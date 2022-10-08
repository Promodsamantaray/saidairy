import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { orderBy, groupBy} from 'lodash';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  dashboardForm: FormGroup;
  currentDate: Date;
  modifyDate: string;
  txType=[{displayValue:'In',value:'in'},{displayValue:'Out',value:'out'}];
  txsList: any=[
    {
      date: '2022-09-17T09:43:00+05:30',
      inout: 'in',
      description: 'Paneer',
      amount: '1400'
  },
  {
      date: '2022-09-17T09:43:00+05:30',
      inout: 'in',
      description: 'Milk',
      amount: '1500'
  },
  {
    date: '2022-09-20T09:43:00+05:30',
    inout: 'in',
    description: 'Paneer',
    amount: '1400'
},
{
    date: '2022-09-20T09:43:00+05:30',
    inout: 'in',
    description: 'Milk',
    amount: '1500'
},{
  date: '2022-09-22T09:43:00+05:30',
  inout: 'in',
  description: 'Paneer',
  amount: '1400'
},
{
  date: '2022-09-22T09:43:00+05:30',
  inout: 'in',
  description: 'Milk',
  amount: '1500'
},{
  date: '2022-09-18T09:43:00+05:30',
  inout: 'in',
  description: 'Paneer',
  amount: '1400'
},
{
  date: '2022-09-18T09:43:00+05:30',
  inout: 'in',
  description: 'Milk',
  amount: '1500'
},
    {
        date: '2022-09-18T09:43:00+05:30',
        inout: 'in',
        description: 'Paneer',
        amount: '1400'
    },
    {
        date: '2022-09-18T09:43:00+05:30',
        inout: 'in',
        description: 'Milk',
        amount: '1500'
    },
    {
        date: '2022-09-18T09:43:00+05:30',
        inout: 'in',
        description: 'Milk2',
        amount: '1300'
    },
    {
        date: '2022-09-18T09:43:00+05:32',
        inout: 'out',
        description: 'Medicine',
        amount: '1300'
    },
    {
        date: '2022-09-18T09:43:00+05:30',
        inout: 'out',
        description: 'Food',
        amount: '1000'
    },
    {
        date: '2022-09-19T09:43:00+05:31',
        inout: 'out',
        description: 'Food',
        amount: '1000'
    }
];
  newObj: any[];
  constructor(private fb: FormBuilder,private datePipe: DatePipe) {
    this.currentDate = new Date();
    this.modifyDate = this.datePipe.transform(this.currentDate, 'y-M-d');
    console.log(this.modifyDate);
  }

  ngOnInit() {
    console.log(this.txsList);
    this.txsList.forEach((element: { date: string; newDate: any }) => {
      const newstr = element.date.split('T');
      element.newDate=newstr[0];

    });
   const totalAmount= this.calculateAmount(this.txsList,'out','2022-09-17');
   console.log(totalAmount);
    console.log(this.txsList);
    this.newObj= Object.entries(groupBy(this.txsList, 'newDate'));
   // console.log(newObj);
    this.newObj.forEach((element: any[]) => {
      const newArr: any=element[1];
      let outAmount= 0;
      let inAmount= 0;
      let add: any;

      newArr.forEach((item: { inout: string; amount: any }) => {

        if(item.inout==='in'){
          inAmount =inAmount +Number(item.amount);
        }
        if(item.inout==='out'){
          outAmount =outAmount +Number(item.amount);
        }
      });
      element.push({in:inAmount,out:outAmount});
    });
    console.log(this.newObj);
    this.createForm();

   const filterItems= this.transactionlist(this.txsList,'2022-09-18');
   const inout= this.inOut(filterItems);
console.log(inout);;

    // this.txsList.forEach(item=>{
    //       if(item.this.out=='in'){
    //         this.In = this.In + item.amount;
    //       }
    //       if(item.this.out=='in'){
    //         this.out = this.out + item.amount;
    //       }
    // });

  }
  inOut(filterItems: any[]) {
   let inAmount=0;
   let outAmount=0;
   filterItems.forEach(item=>{
    if(item.inout==='in'){
      inAmount=inAmount+Number(item.amount);
    }
    if(item.inout==='out'){
      outAmount=outAmount+Number(item.amount);
    }
   });
   return {inAmount,outAmount};
  }
  transactionlist(list: any[],date) {
 console.log(list);
 return list.filter(item=>item.newDate===date);
  }
  calculateAmount(list: any[],type?: string,date?: string) {
    let amount=0;
    console.log(type);
   list.forEach((element: { inout: any; newDate: any; amount: any }) => {
    console.log(element);
    if(type!=='undefined' && type===element.inout && date===element.newDate){
      amount=amount+Number(element.amount);
    }
    if(type==='undefined'){
      amount=amount+Number(element.amount);
    }
   });
   return amount;
  }
  createForm() {
    this.dashboardForm= this.fb.group({
      date: ['',Validators.required],
      inout: ['',Validators.required],
      description:['',Validators.required],
      amount:['',Validators.required],
      });
}
submit(){
  this.txsList.push(this.dashboardForm.value);
  console.log(this.txsList);
}


}
