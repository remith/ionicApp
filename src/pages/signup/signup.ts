import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController} from 'ionic-angular';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { OnInit } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { ProfilePage } from '../profile/profile';
import { Device } from '@ionic-native/device';
import { SuperTabsController } from 'ionic2-super-tabs';

const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const regexValidators = {
  email: PURE_EMAIL_REGEXP,
  password: PASSWORD_REGEXP
};

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  error;
  userRes;
	user:FormGroup;
	/*user_data = { name: '', email: '', pswd:'', c_pswd:''};*/

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController,
    public provider:RestProvider,
    private device:Device,
    private superTabsCtrl: SuperTabsController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController) {

    this.user = this.formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.compose([Validators.pattern(regexValidators.email), Validators.required])],
      pswd:['',Validators.compose([Validators.pattern(regexValidators.password), Validators.required])],
      c_pswd:['',Validators.required],
      phone_no:['', Validators.required],
      terms:[false, Validators.requiredTrue]
    }, {validator: this.matchingPasswords('pswd', 'c_pswd')});
  }

  matchingPasswords(pas,cpas){
    return(group:FormGroup) =>{
      let password = group.controls[pas];
      let cpassword = group.controls[cpas];
      if(password.value !== cpassword.value){
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  ngOnInit(){
    
/*    this.user = new FormGroup({
      name: new FormControl('' , [Validators.required]),
      email: new FormControl('' , [Validators.required]),
      pswd: new FormControl('' , [Validators.required]),
      c_pswd: new FormControl('' , [Validators.required]),
      phone_no: new FormControl(),
      device_id: new FormControl(this.device.uuid)
    });*/
  }

  ionViewWillEnter(){
    this.superTabsCtrl.showToolbar(false);
    this.superTabsCtrl.enableTabsSwipe(false);
  }
  

  signupUser(){
    console.log(this.user.controls.phone_no.value);
/*      let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();*/
    let alert = this.alertCtrl.create({
    title: 'Enter OTP',
    inputs: [
      {
        name: 'otpinp',
        placeholder: 'Your OTP here',
        type: 'number'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Enter the OTP',
        handler: data => {
          if ((data.optgen === data.otpinp)) {
            this.userSignUp();
          } else {
            this.invalid();
            return false;
          }
        }
      }
    ]
  });
  alert.present();
}
    //console.log('Inside SignUp user');
    /*this.provider.signupUser(this.user.value).subscribe( data => {
      //console.log('userdata from response is'+JSON.stringify(data));
      //console.log("Result is "+data.result);
      //console.log("Message is"+data.message);
      if(data.result == 'success'){
        alert('Data added Successfully');
        this.navCtrl.push(ProfilePage);
      } else
        alert('Unable to create User'+data.message);
      },
      error => {
        //console.log("Error is"+JSON.stringify(error));
    });*/
  userSignUp(){
    this.provider.signupUser(this.user.value).subscribe( data => {
      //console.log('userdata from response is'+JSON.stringify(data));
      //console.log("Result is "+data.result);
      //console.log("Message is"+data.message);
      if(data.result == 'success'){
        alert('Data added Successfully');
        this.navCtrl.push(ProfilePage);
      } else
        alert('Unable to create User'+data.message);
      },
      error => {
        //console.log("Error is"+JSON.stringify(error));
    });
  }

  invalid(){
    console.log('Invalid OTP');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');
  }
}

