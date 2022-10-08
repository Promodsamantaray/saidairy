/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from './components/details/details.component';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.page.html',
  styleUrls: ['./disease.page.scss'],
})
export class DiseasePage implements OnInit {
  diseaseForm: FormGroup;
     public disease = [];
     public more=false;
  constructor(private fb: FormBuilder,public modalController: ModalController) { }

  ngOnInit() {
    // this.createform();
   this.disease = [
    {
      name: 'FMD',
      scientific:'foot-and-mouth disease virus',
      image:'/assets/image/thila2.jpg',
      rank:'Species',
      classification:'Aphthovirus',
      family:'Picornaviridae',
      order:'Picornavirales',
      desc : 'Foot-and-mouth disease virus is the pathogen that causes foot-and-mouth disease. It is a picornavirus, the prototypical member of the genus Aphthovirus. Wikipedia',
      imgageSet:['/assets/image/thila2.jpg','/assets/image/thila2.jpg','/assets/image/thila2.jpg','/assets/image/thila2.jpg'],
      // eslint-disable-next-line @typescript-eslint/quotes
      sign:[{sign:"drooling,reduced food intake,tongue and mouth lesions/blisters"},{sign:"reduced milk production,lameness,fever,weight loss,abortions"}],
      prevention:[{prevention:'Prevent contact with free roam- ing animals (wildlife, cats, dogs)'}, {prevention:'Free roaming animals can potentially spread the FMD virus from infected to susceptible animals.'},{prevention:'Keep pets in a kennel or tied securely to avoid contact with livestock and feed areas. - Ask your neighbors to do the same.'}],
      treatment:[{treatment:"The conventional method of treating infected animals mainly involves the use of antibiotics, flunixin meglumine and mild disinfectants (Radostitis et al. 2000)"}],
    },
    {
      name: 'THEILERIOSIS',
      scientific:'Eukaryota',
      image:'/assets/image/thila1.jpg',
      rank:'Species',
      classification:'	Alveolata',
      family:'Theileriidae',
      order:'	Piroplasmida',
      desc : 'Theileriosis is a disease caused by a species of Theileria - a blood-borne parasite. It only affects cattle and is primarily transmitted by ticks. Theileria is a widespread disease with an increasing number of cases in the northern parts of the North Island.',
      sign:[{sign:"'anorexia', 'emaciation', 'depressed rumination', 'lacrimation', 'corneal opacity', 'nasal discharge', 'diarrhea', 'terminal dyspnoea', 'frothy nasal discharge (Fukasawa 2003).'"}],
      prevention:[{prevention:"Theileria annulata and transmitted by ticks of the genus Hyalomma.It can be prevented by management, with particular emphasis on movement control, vector control by application of acaricides, preventing transmission of disease."}],
      treatment:[{treatment:"It is suggested that the most economical way to control theileriosis in India would be to immunise calves by infection with sporozoite stabilate and simultaneous treatment with tetracycline, and to reserve buparvaquone for the treatment of clinical cases, in cattle of all ages."}],
    },
    {
      name: 'KETOSIS',
      scientific:'foot-and-mouth disease virus',
      image:'/assets/image/keto1.png',
      rank:'Species',
      classification:'Aphthovirus',
      family:'Picornaviridae',
      order:'Picornavirales',
      desc : 'Occurs in lactating animals usually during the first 2 months of lactation.Initially there is slight decrease in feed intake, drop in milk production, lethargy and firm mucous covered dung.',
      sign:[{sign:"Bad-Breath,Weight loss','Increased ketones in the blood,Increased ketones in the breat','Appetite suppression,Increased focus and energy,Short-term fatigue','Short-term decreases in performance"}],
      prevention:[{prevention:"Ketosis can be prevented or treated by eating a balanced diet', 'which includes carbs, fat, and protein, and by not skipping meals"}],
      treatment:[{treatment:"Intravenous injection of dextrose is the author's standard treatment"},{treatment:"Orally administered propylene glycol after initial use of dextrose or glucocorticoids has given excellent results. Intravenous or intramuscular cortisone has given extremely variable results"}],
    },
    {
      name: 'MASTITIS',
      scientific:'foot-and-mouth disease virus',
      image:'/assets/image/Mastitis4.png',
      rank:'Species',
      classification:'Aphthovirus',
      family:' Picornaviridae',
      order:'Picornavirales',
      desc : 'Bovine mastitis is a condition typified by the persistent and inflammatory reaction of the udder tissue due to either physical trauma or infections caused by microorganisms. It is a potentially fatal mammary gland infection, that is most common in dairy cattle worldwide. It is a disease that is known to cause the greatest loss to the dairy industry',
      sign:[{sign:"Breast tenderness or warmth to the touch,Breast swellin,Thickening of breast tissue, or a breast lum"},{sign:"Pain or a burning sensation continuously or while breast-feeding,Skin redness, often in a wedge-shaped pattern"},
      {sign:'Generally feeling ill,Fever of 101 F (38.3 C) or greater'}],
      prevention:[{prevention:"Ketosis can be prevented or treated by eating a balanced diet, which includes carbs, fat, and protein, and by not skipping meals"}],
      // eslint-disable-next-line @typescript-eslint/quotes
      treatment:[{treatment:"The beta lactamase-resistant penicillins have been recommended in the treatment of mastitis. These include cloxacillin, dicloxacillin, or flucloxacillin. Because penicillins are acidic"},{treatment:"they are poorly concentrated in human milk, which is also acid"}],
    },
  ];

  }
  createform() {
    this.diseaseForm = this.fb.group({
      name: ['',Validators.required],
      scientific: ['',Validators.required],
      rank:['',Validators.required],
      classification:['',Validators.required],
      family:['',Validators.required],
      order:['',Validators.required],
      desc:['',Validators.required],
      imageSet:['',Validators.required],
      sign:['',Validators.required],
      prevention:['',Validators.required],
      treatment:['',Validators.required],
    });
  }
  detail(member){
    console.log(member);
    member.more= !member.more;
    console.log(member);
    this.presentModal(member);
  }
  async presentModal(member) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: { disease: member},
    });
    return await modal.present();
  }
}
