import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar} from 'ionic-angular'; //Keyboard
import { SuperTabsController } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
@ViewChild(Searchbar) input:Searchbar;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController) {
  	/*this.search.setFocus();*/
  }

  ionViewWillEnter() {
    this.superTabsCtrl.showToolbar(false);
    this.superTabsCtrl.enableTabsSwipe(false);
    /*setTimeout(()=>{this.input.setFocus();},500)*/
/*    setInterval(()=>{
      this.input.setFocus();
      
    },150);*/
      //this.input.setFocus();
      //this.input.setFocus();
    
    /*this.kb.show();*/

  }
  ngOnInit(){
    setTimeout(()=>{this.input.setFocus();},500)
  }

/*  ionViewDidEnter(){
	this.kb.show();  	
  }*/
}
