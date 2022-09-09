import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare var customInitFuctions: any;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  

  constructor(private settingsService: SettingsService|null) { }

  ngOnInit(): void { 
    customInitFuctions();
  }
}
