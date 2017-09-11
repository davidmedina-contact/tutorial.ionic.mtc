import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{
    time: string,
    sentBy: string,
    customers: Array<{
      ecn: string,
      customerName: string,
    }>,
    comments: string
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [{
      time: '08:01 am',
      sentBy: 'Marlee Savory',
      customers: [{
        ecn: '1000-2000-3000',
        customerName: 'Dr. Laurie A Johnson'
        }, {
          ecn: '1002-2002-3002',
          customerName: 'Adam Johnson'
        }],
        comments: 'Customer wants to open an IRA for retirement. Expressed interest in other types of investement accounts.'
      }, {
      time: '08:57 am',
      sentBy: 'Colton Greely',
      customers: [{
        ecn: '1001-2001-3001',
        customerName: 'Donald Draper'
      }],
      comments: 'Customer wants to open an IRA for retirement'
    }];
  }

  itemTapped(event, item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}
