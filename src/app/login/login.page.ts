import { Component, OnInit } from '@angular/core';
import*as firebase from 'firebase';
import {FIREBASE_CONFIG ,getdata} from '../config_firebase';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  edt_email="";
  edt_pass="";
  account=[];
  listStudent=[];
  selectedProduct : Subject<any> = new Subject;

  constructor(private router: Router) { 
    this.btn_getDocument();
  }

  ngOnInit() {
  }
  btn_login(){
    // console.log(this.edt_email);
    // console.log(this.edt_pass);
    let ref =firebase.database().ref('account/').orderByChild("email").equalTo(this.edt_email);
    ref.on('value',resp=>{
      this.account=getdata(resp);
      if(this.account.length>0){
        if(this.account[0].pass===this.edt_pass){
          console.log("Conguration")
          this.router.navigate(['']);
        }else{
          console.log("wrong password")
        }
      }else{
        console.log("tai khoan khong ton tai")
      }
    })
  }

    btn_getDocument(){
    // console.log(this.edt_email);
    // console.log(this.edt_pass);
    let ref =firebase.database().ref('account/');
    ref.on('value',resp=>{
      this.listStudent=getdata(resp);
      console.log(this.listStudent)
         });
  }

getpopup(det) {
  this.selectedProduct.next(det);
  }
}
