import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users=[
    {
      name:"dapry",
      department:"ICT",
      active:true
    },

    {
      name:"alisimai",
      department:"ICT",
      active:true
    },
    {
      name:"alisimai",
      department:"ICT",
      active:false
    },
]


constructor(){}
ngOnInit(): void {
  
}


viewUser(data: any){
  console.log("user details",data);
}
}
