/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public product=[];
  constructor() { }

  ngOnInit() {
    this.product=[
      // eslint-disable-next-line max-len
      {name:'Milk',image:'/assets/image/milk.jpg',desc:'Milk is essentially an emulsion of fat and protein in water, along with dissolved sugar (carbohydrate), minerals, and vitamins. ',avail:true, price:500},
       {name:'Ghee',image:'/assets/image/ghee.jpg',desc:'Ghee is a form of highly-clarified butter that is traditionally used in Asian cooking. Like butter, ghee is typically made from cow\'s milk. Ghee is made by melting regular butter.',avail:true},
       {name:'Paneer',image:'/assets/image/paneer.jpg',desc:'Paneer is a fresh cheese used in a wide variety of Indian recipes, made by heating and then curdling milk using acid. It\'s very mild and milky in flavor, white in color, and its texture is soft, spongy, and squeaky.',avail:true},
       {name:'Cheese',image:'/assets/image/cheese.jpg',desc:'Cheese is a dairy product produced in wide ranges of flavors, textures, and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep.',avail:true}
   ];
  }

}
