import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient }   from '@angular/common/http';

/**
 * Generated class for the CustomerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})
export class CustomerDetailPage {

  customer:any;
  isEditable: boolean;
  isNew: boolean;

  constructor(
    public navCtrl: NavController,
    public httpClient:HttpClient,
    public navParams: NavParams
  ) {
    this.isEditable = this.navParams.get('isEditable');
    this.customer = this.navParams.get('customer');
    this.isNew = this.navParams.get('isNew');
  }

  onSave(){
    if(this.isNew){
      // send post method to save
      this.httpClient.post("https://dataservicemx.herokuapp.com/api/v1/customers", this.customer ).subscribe((data)=>{
        this.navCtrl.pop();
      }, (error)=>{
        console.log(error);
      });
    }else{
      //sent put method to update
      this.httpClient.put("https://dataservicemx.herokuapp.com/api/v1/customers", this.customer ).subscribe((data)=>{
        this.navCtrl.pop();
      }, (error)=>{
        console.log(error);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDetailPage');
  }

}
