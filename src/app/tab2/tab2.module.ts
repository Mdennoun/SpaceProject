import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Tab2Page } from './tab2.page';
import { ComponentsModule } from '../modules/components/components.modules';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'second/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
