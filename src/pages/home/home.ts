import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Details } from '../../app/model/details/details.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  details:any[];
  public event = {
   
     timeStarts: '15:35',
     timeEnds: '17:50',
   
   }
 

 
  constructor(public navCtrl: NavController) {
    this.details =Details;
    console.log(this.details);
  }

}
