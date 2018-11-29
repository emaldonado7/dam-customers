import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomerListPage } from '../customer-list/customer-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.navCtrl.push(CustomerListPage);
  }

}
