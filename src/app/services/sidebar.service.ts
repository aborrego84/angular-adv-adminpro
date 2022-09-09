import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
    title:'Principal',
    icons:'mdi mdi-gauge',
    submenu: [
      {title: 'Main',url:'/'},
      {title: 'ProgressBar',url:'progress'},
      {title: 'Graphics',url:'grafical'},
    ]}
  ]
  constructor() { }
}
