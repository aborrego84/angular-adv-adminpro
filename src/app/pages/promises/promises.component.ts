import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.getUsers();
    this.getUsers().then(users => {console.log(users)});
    /*const promise = new Promise( (resolve,reject) => {
      if(false)
        resolve('hello world');
      else
        reject('something wrong')
    });
    promise.then((message) => { 
      console.log(message);

    })
    .catch(error => console.log('error in promise',error));  
    
    
    console.log('end init');*/
  }
  getUsers(){
    /*const promise = new Promise(
      resolve => {
        fetch('https://reqres.in/api/users?page=2')
        .then(resp => resp.json())
        .then( body => resolve(body.data))});  
    return promise; */
     return new Promise(
      resolve => {
        fetch('https://reqres.in/api/users?page=2')
        .then(resp => resp.json())
        .then( body => resolve(body.data))}); 
  }
}
