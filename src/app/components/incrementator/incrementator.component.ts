import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: [
  ]
})
export class IncrementatorComponent implements OnInit {

  @Input('value') progress: number = 50;
  @Input('btnClass') btnClass: string ='btn-primary';
  //@Input() progress: number = 50;
  @Output('value') valueExit: EventEmitter<number>=new EventEmitter();
  
  changeValue (value:number)
  {   
    if(this.progress > 95 && value > 0)
    {
      this.valueExit.emit(100);
      return this.progress = 100;
    }
    if(this.progress < 5 && value < 0)
    {
      this.valueExit.emit(0);
      return this.progress = 0;    
    }    
    this.progress=this.progress + value;
    this.valueExit.emit(this.progress);
    return this.progress;   
  }
  onChange(event:number){
    this.progress = event;
    if(event>100)
      this.progress=100
    if(event<0)
      this.progress =0;
    this.valueExit.emit(this.progress)
  }

  constructor() { }

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`

  }
}


