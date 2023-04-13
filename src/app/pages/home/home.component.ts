import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy,AfterViewInit{
  
  
  title:string ="this is home component";
  
  //dependecy injection
  constructor(){}


  ngOnInit():void{
    console.log("home initialized");
  }


  ngOnDestroy():void{
    console.log("home destroyed");
  }

  ngAfterViewInit():void{
    console.log("html view after init ");
  }
}
