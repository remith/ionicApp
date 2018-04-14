import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RestProvider } from '../../providers/rest/rest';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 	splash = true;
 	sliderImg;
  constructor(public navCtrl: NavController,private provider:RestProvider, private superTabsCtrl: SuperTabsController) { 

  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
    this.getImages();
  }
  opnPage(){
  	this.navCtrl.push(SearchPage);
  }
  ionViewWillEnter() {
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }
  getImages(){
    this.provider.homeSlider()
    .subscribe(data=>{
      console.log(data[0].homeImage);
    this.sliderImg=JSON.parse(data[0].homeImage);
     //console.log('sliderImg '+JSON.stringify(this.sliderImg.homeImage));
     console.log(this.sliderImg);
    })
  }

}
