import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import { StoredetailsPage } from '../storedetails/storedetails';
import { MapPage } from '../map/map';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { LoadingController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SuperTabsController } from 'ionic2-super-tabs';
import { SlicePipe } from '@angular/common';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-storelist',
  templateUrl: 'storelist.html',
})
export class StorelistPage {
  public location;
  private loading:any;
  userProfile;

  constructor(
    public navCtrl: NavController,
    private diagnostic: Diagnostic,
    public navParams: NavParams,
    public locations :LocationsProvider ,
    private locationAccuracy:LocationAccuracy,
    private loadingCtrl:LoadingController,
    private superTabsCtrl: SuperTabsController,
    private slice:SlicePipe,
    private device: Device,
    private storage:Storage,
    private toastCtrl:ToastController,
    private provider:RestProvider) {

  }

  locationcheck() {
    this.loading = this.loadingCtrl.create({
         content: 'Please wait...'
      });
       this.loading.present();
    /*alert("check location  is CALLED:");*/
    this.diagnostic.isLocationEnabled().then(
      (isAvailable) => {
        if(!isAvailable){
          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() =>{
            this.location = JSON.stringify(this.locations.load());
            this.loading.dismiss();
          },error => alert('Error requesting location permissions'+ error)
        );  
      }else{
        this.location = JSON.stringify(this.locations.load()); 
        this.loading.dismiss(); 
        // alert('location already enable ');
      }
    }).catch( e => {
  //    console.log(e);
      alert('Enable location ' + JSON.stringify(e));
    });
  }

  ionViewDidLoad(){
    this.location = JSON.stringify(this.locations.load());
    /*development purpose. Remove or comment when deploying or building to device*/
  //  console.log('ionViewDidLoad ListPage');
 //   console.log(this.location);
  }

  ionViewWillEnter() {
    this.locationcheck();
    this.loading.dismiss();
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);

    this.storage.get('userProfile').then((data)=>{
      this.userProfile = data;
   //   console.log('UserProfile storage'+JSON.stringify(this.userProfile));
    }).catch(err=>{
      alert(JSON.stringify(err)+'Storage error');
    });
  }

  itemTapped(event, item){
    this.navCtrl.push(StoredetailsPage, {
      item: item
    });
  }

  opnMap(){
    this.navCtrl.push(MapPage);
  }

  favStore(store){
    let fav_store={ user_id:this.userProfile.id , device_id:this.device.uuid , s_id:store.s_id }  
    this.provider.addFavStore(fav_store).subscribe(data => {
  //    console.log('Data inside Add to fav store '+JSON.stringify(data.result));
      if(data.result == 'success'){
        let toast = this.toastCtrl.create({
          message: 'Store added as favourite',
          duration: 2000,
          position: 'bottom',
          cssClass: 'normalToast'
        });toast.present();
      }else if(data.result =='shop removed') {
        let toast = this.toastCtrl.create({
          message: 'Shop removed from Favourite',
          duration: 2000,
          position: 'bottom',
          cssClass: 'normalToast'
        });toast.present();
      }else{
        let toast = this.toastCtrl.create({
          message: 'Unable to add shop as favourite',
          duration: 2000,
          position: 'bottom',
          cssClass: 'normalToast'
        });toast.present();
      }
    },error => {
  //    console.log("Error inside Wishlist is"+JSON.stringify(error));
    });
  }
}
