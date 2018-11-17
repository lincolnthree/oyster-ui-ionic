import { Component } from '@angular/core';
import { SigfoxService, SigfoxLocation } from '../services/sigfox.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  locations: SigfoxLocation[];

  constructor(
    private sigfox: SigfoxService,
    private platform: Platform
  ) {
    platform.ready().then(() => {
      sigfox.getLocations().then((locations) => {
        this.locations = locations;
        console.log('Loaded GPS locations', this.locations);
      });
    });
  }
}
