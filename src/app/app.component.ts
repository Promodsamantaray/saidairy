/* eslint-disable max-len */
import { Component } from '@angular/core';

import { faCow,faPrescriptionBottle,faSyringe,faCheese,faBriefcaseMedical,faFileSignature,faPhone,faUserGroup,faHouseChimney,faList,faDisease,faJetFighterUp,faChartSimple} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public appPages = [
    { title: 'Home', url: '/home', icon: faHouseChimney,type:'fw' },
    { title: 'Dashboard', url: '/dashboard', icon: faChartSimple,type:'fw' },
    { title: 'List', url: '/list', icon: faList,type:'fw' },
    { title: 'search', url: '/search', icon: faChartSimple,type:'fw' },
    { title: 'Feeding', url: '/feeding', icon: faCow ,type:'fw'},
    // { title: 'Calf', url: '/calf', icon: faCow,type:'fw' },
    { title: 'Product', url: '/products', icon: faCheese,type:'fw' },
    { title: 'Medicine', url: '/medicine', icon: faSyringe,type:'fw' },
    { title: 'AI', url: '/ai', icon:faPrescriptionBottle ,type:'fw' },
    { title: 'Doctors', url: '/doctor-list', icon: faBriefcaseMedical,type:'fw' },
    { title: 'Insurance', url: '/insurance', icon: faFileSignature,type:'fw' },
    { title: 'Contact', url: '/contact', icon: faPhone,type:'fw' },
    // { title: 'Customer', url: '/customer', icon: faUserGroup,type:'fw' },
    { title: 'Cow', url: '/cow', icon: faCow,type:'fw' },
    { title: 'Disease', url: '/disease', icon: faDisease,type:'fw' },
    // { title: 'Practice', url: '/practice', icon: faJetFighterUp,type:'fw' },
    { title: 'Insemination', url: '/insemination', icon: faSyringe,type:'fw' },
    // { title: 'listpapu', url: '/listpapu', icon: faChartSimple,type:'fw' },
    // { title: 'pratice', url: '/pratice', icon: faChartSimple,type:'fw' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
