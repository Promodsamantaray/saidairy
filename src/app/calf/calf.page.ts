import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calf',
  templateUrl: './calf.page.html',
  styleUrls: ['./calf.page.scss'],
})
export class CalfPage implements OnInit {
  milkingForm: FormGroup;
  list: any;
  currentDate: Date;
  modifyDate: string;
  milkingList=[];
  constructor(private fb: FormBuilder,private datePipe: DatePipe) {
    this.currentDate = new Date();
    this.modifyDate = this.datePipe.transform(this.currentDate, 'y-M-d');
   }

  ngOnInit() {
    this.createForm();
    this.list = [
      {
        name: 'little',
        image: '/assets/image/little.jpg',
        dob: '12-07-2022',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/Glossy.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Glossy',
        image: '/assets/image/Glossy.jpg',
        dob: '12-05-2020',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/Glossy.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Picku',
        image: '/assets/image/Picku.jpg',
        dob: '12-01-2021',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        children:5,
        teeth:2,
        tagName:12,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/Picku.jpg',
          relation: false,
          noOfChildren:6,
        },
      },
      {
        name: 'Twinkle',
        image: '/assets/image/Twinke.jpg',
        dob: '12-08-2020',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/Twinkle.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Brut',
        image: '/assets/image/Twinke.jpg',
        dob: '12-05-2021',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/twinke.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Junior',
        image: '/assets/image/little.jpg',
        dob: '12-05-2021',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/little.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Titul',
        image: '/assets/image/Picku.jpg',
        dob: '15-08-2020',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/Picku.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Klimi',
        image: '/assets/image/Glossy.jpg',
        dob: '12-05-2021',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/Twinke.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Amul',
        image: '/assets/image/Twinke.jpg',
        dob: '12-04-2020',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/twinke.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Titu',
        image: '/assets/image/little.jpg',
        dob: '12-10-2019',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/little.jpg',
          relation: false,
          noOfChildren:5,
        },
      },
      {
        name: 'Pickul',
        image: '/assets/image/Picku.jpg',
        dob: '12-01-2019',
        milkingCapacity: 20,
        breed:'CBJ',
        feeding:'10KG',
        gender:'female',
        noOfChildren:5,
        disease:[
          {name:'FMD',year:'2019',},
          {name:'FMD',year:'2019',}
        ],
        teeth:2,
        tagName:12,
        parentRelation: {
          parentName: 'dhanu',
          tagName:15,
          image: '/assets/image/Picku.jpg',
          relation: false,
          noOfChildren:5,
        },
      },

    ];
  }
  createForm() {
    this.milkingForm = this.fb.group({
      cowName: ['',Validators.required],
      date: ['',Validators.required],
      milk:[0,Validators.required]
    });
  }
  submit(){
    this.milkingForm.get('cowName').value();
    console.log(this.milkingForm.value);
    this.milkingList.push(this.milkingForm.value);
    console.log(this.milkingList);
  }

}
