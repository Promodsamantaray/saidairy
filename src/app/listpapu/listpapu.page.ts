import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-listpapu',
  templateUrl: './listpapu.page.html',
  styleUrls: ['./listpapu.page.scss'],
})
export class ListpapuPage implements OnInit {
  public papu = [];
  colorList: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private toastController: ToastController) { }
  ngOnInit() {
    this.colorList=[
      {color:'red'},
      {color:'yellow'},
      {color:'green'},
      {color:'pink'},
      {color:'black'}
    ];
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position
    });

    await toast.present();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
