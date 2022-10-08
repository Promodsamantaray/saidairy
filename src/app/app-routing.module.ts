import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'feeding',
    loadChildren: () => import('./feeding/feeding.module').then( m => m.FeedingPageModule)
  },
  {
    path: 'medicine',
    loadChildren: () => import('./medicine/medicine.module').then( m => m.MedicinePageModule)
  },
  {
    path: 'ai',
    loadChildren: () => import('./ai/ai.module').then( m => m.AiPageModule)
  },
  {
    path: 'doctor-list',
    loadChildren: () => import('./doctor-list/doctor-list.module').then( m => m.DoctorListPageModule)
  },
  {
    path: 'insurance',
    loadChildren: () => import('./insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'calf',
    loadChildren: () => import('./calf/calf.module').then( m => m.CalfPageModule)
  },
  {
    path: 'cow',
    loadChildren: () => import('./cow/cow.module').then( m => m.CowPageModule)
  },
  {
    path: 'disease',
    loadChildren: () => import('./disease/disease.module').then( m => m.DiseasePageModule)
  },
  {
    path: 'practice',
    loadChildren: () => import('./practice/practice.module').then( m => m.PracticePageModule)
  },
  {
    path: 'insemination',
    loadChildren: () => import('./insemination/insemination.module').then( m => m.InseminationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'listpapu',
    loadChildren: () => import('./listpapu/listpapu.module').then( m => m.ListpapuPageModule)
  },
  {
    path: 'pratice',
    loadChildren: () => import('./pratice/pratice.module').then( m => m.PraticePageModule)
  },
  {
    path: 'json',
    loadChildren: () => import('./json/json.module').then( m => m.JsonPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
