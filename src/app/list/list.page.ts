import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListCardComponent } from './components/list-card/list-card.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public list = [];
  selectedItem: any;
  selectItem: any;
  cowList: any[];
  heifers: any[];
  calf: any[];
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.list = [
      {
        name: 'little',
        image: '/assets/image/little.jpg',
        dob: '12-07-2022',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/Glossy.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Glossy',
        image: '/assets/image/Glossy.jpg',
        dob: '12-05-2020',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/Glossy.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Picku',
        image: '/assets/image/Picku.jpg',
        dob: '12-01-2021',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        children: 5,
        teeth: 2,
        tagName: 12,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/Picku.jpg',
          relation: false,
          noOfChildren: 6,
        },
      },
      {
        name: 'Twinkle',
        image: '/assets/image/twinkle.jpg',
        dob: '12-08-2020',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/twinkle.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Brut',
        image: '/assets/image/twinkle.jpg',
        dob: '12-05-2021',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/twinkle.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Junior',
        image: '/assets/image/little.jpg',
        dob: '12-05-2021',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/little.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Titul',
        image: '/assets/image/Picku.jpg',
        dob: '15-08-2020',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/Picku.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Klimi',
        image: '/assets/image/Glossy.jpg',
        dob: '12-05-2021',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/twinkle.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Amul',
        image: '/assets/image/twinkle.jpg',
        dob: '12-04-2020',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/twinkle.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Titu',
        image: '/assets/image/little.jpg',
        dob: '12-10-2019',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/little.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
      {
        name: 'Pickul',
        image: '/assets/image/Picku.jpg',
        dob: '12-01-2019',
        milkingCapacity: 20,
        breed: 'CBJ',
        feeding: '10KG',
        gender: 'female',
        noOfChildren: 5,
        disease: [
          { name: 'FMD', year: '2019' },
          { name: 'FMD', year: '2019' },
        ],
        teeth: 2,
        tagName: 12,
        parentRelation: {
          parentName: 'dhanu',
          tagName: 15,
          image: '/assets/image/Picku.jpg',
          relation: false,
          noOfChildren: 5,
        },
      },
    ];
  }
  selectedItems(value) {
    this.selectItem = value;
    this.presentModal();
  }
  async presentModal() {
    console.log(this.selectItem);
    const modal = await this.modalController.create({
      component: ListCardComponent,
      cssClass: 'my-custom-class',
      componentProps: { item: this.selectItem },
    });
    return await modal.present();
  }
}
