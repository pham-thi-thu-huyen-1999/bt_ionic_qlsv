import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-lichhoc',
  templateUrl: './lichhoc.page.html',
  styleUrls: ['./lichhoc.page.scss'],
})
export class LichhocPage implements OnInit {

  listdiem : [];

  constructor(private _Service:ServiceService, private storage: Storage) { 
    this.calldata();
    }

  ngOnInit() {

    }

    calldata() {
      this.storage.get('MY_ACCOUNT').then((val) => {
        console.log('Account is', val);
        this.listdiem = val;
        console.log(this.listdiem);
      });
    }


  goBack() {
    this._Service.goBack();
    }

}
