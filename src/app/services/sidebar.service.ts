import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
    title:'Dashboard',
    icons:'mdi mdi-gauge',
    submenu: [
      {title: 'Main',url:'/'},
      {title: 'Graphics',url:'grafical'},
      {title: 'ProgressBar',url:'progress'},      
      {title: 'Promises',url:'promises'},
      {title: 'Rxjs',url:'rxjs'},
    ]}
  ]
  constructor() { }
}
