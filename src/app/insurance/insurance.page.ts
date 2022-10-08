/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {
  public insurance = [];
  type1 = [];
  type2 = [];
  type3 = [];
  type4 = [];
  amount = 0;
  constructor() {}

  ngOnInit() {
    this.insurance = [
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '23/06/2026',
        type: '1',
        amount: '100',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '25/06/2026',
        type: '2',
        amount: '250',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '03/08/2026',
        type: '3',
        amount: '150',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '28/03/2025',
        type: '1',
        amount: '120',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '08/01/2026',
        type: '2',
        amount: '130',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '03/02/2026',
        type: '1',
        amount: '280',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '05/09/2026',
        type: '4',
        amount: '300',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '01/05/2027',
        type: '3',
        amount: '350',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '01/07/2026',
        type: '1',
        amount: '420',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '26/02/2026',
        type: '3',
        amount: '600',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '02/02/2026',
        type: '4',
        amount: '120',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '03/06/2026',
        type: '3',
        amount: '130',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '02/05/2026',
        type: '4',
        amount: '205',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '02/06/2026',
        type: '5',
        amount: '130',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '08/06/2026',
        type: '1',
        amount: '125',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '23/09/2026',
        type: '1',
        amount: '220',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '23/03/2026',
        type: '3',
        amount: '210',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '23/01/2025',
        type: '1',
        amount: '250',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '04/06/2021',
        type: '2',
        amount: '89',
      },
      {
        cowname: 'Glossy',
        tagname: '12345678',
        insurancenumber: 'ABCDEF',
        issuedate: '23/09/2022',
        image: '/assets/image/Picku.jpg',
        expiryDate: '18/09/2022',
        type: '1',
        amount: '100',
      },
    ];
    // this.insurance.forEach(item=>{
    //   console.log(item.type);
    //   if(item.type==='1'){
    //     console.log('do something 1');
    //     this.type1.push(item);
    //   }
    //   if(item.type==='2'){
    //     console.log('do something 2');
    //     this.type2.push(item);
    //   }
    //   if(item.type==='3'){
    //     this.type3.push(item);
    //   }
    //   if(item.type==='4'){
    //     this.type4.push(item);
    //   }
    // });
    // console.log(this.type1,this.type2,this.type3,this.type4);

    //   this.insurance.forEach(item=>{
    //       console.log(item.type);
    //       if(item.type==='1'){
    //         console.log('papu is good');
    //         this.type1.push(item);
    //       }
    //       if(item.type==='2'){
    //         console.log('alok is good');
    //       }
    //       if(item.type==='3'){
    //         console.log('siba is good');
    //       }
    //       if(item.type==='4'){
    //         console.log('utsha is good');
    //       }
    //   });
    //  console.log(this.type1);
    const insuranceCategory = {
      type1: [],
      type2: [],
      type3: [],
      type4: [],
    };
    const insuranceCategoryAmount = {
      type1Amount: 0,
      type2Amount: 0,
      type3Amount: 0,
      type4Amount: 0,
    };
    const insuranceHouse = [
      {
        list: [],
        amount: 0,
        type: '1',
      },
      {
        list: [],
        amount: 0,
        type: '2',
      },
      {
        list: [],
        amount: 0,
        type: '3',
      },
      {
        list: [],
        amount: 0,
        type: '4',
      },
    ];
    this.insurance.forEach((item) => {
      console.log(item.type);
      insuranceHouse.forEach(insuranceitem=>{
      if(insuranceitem.type===item.type){
          insuranceitem.list.push(item);
          insuranceitem.amount=insuranceitem.amount+Number(item.amount);
        }
      });
      // this.amount = this.amount + Number(item.amount);
      // if (item.type === '1') {
      //   insuranceCategory.type1.push(item);
      //   insuranceCategoryAmount.type1Amount =
      //     insuranceCategoryAmount.type1Amount + Number(item.amount);
      //   console.log('papu is good');
      // }
      // if (item.type === '2') {
      //   console.log('alok is good');
      //   insuranceCategoryAmount.type2Amount =
      //     insuranceCategoryAmount.type2Amount + Number(item.amount);
      //   insuranceCategory.type2.push(item);
      // }
      // if (item.type === '3') {
      //   console.log('siba is good');
      //   insuranceCategoryAmount.type3Amount =
      //     insuranceCategoryAmount.type3Amount + Number(item.amount);
      //   insuranceCategory.type3.push(item);
      // }
      // if (item.type === '4') {
      //   console.log('utsha is good');
      //   insuranceCategoryAmount.type4Amount =
      //     insuranceCategoryAmount.type4Amount + Number(item.amount);
      //   insuranceCategory.type4.push(item);
      // }
    });
    console.log(insuranceHouse);
    // console.log(insuranceCategory);
    // console.log(insuranceCategoryAmount);
    // console.log(this.amount);
    // const res = this.insurance.map(bill => bill.amount).reduce((acc, amount) => acc + amount);
    // console.log(res);
    // console.log(this.type1);
  }
}
