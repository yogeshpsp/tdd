import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private database:Database) { }

  ngOnInit(): void {
  }
register(value:any){
  set(ref(this.database,'users/' +value.name),{
    username: value.name,
    email: value.email,
    password: value.password
  });
  alert("User created");
  console.log("New Value" +value)
}

update(value:any){
 update(ref(this.database,'users/' +value.name),{
    
    email: value.email,
    password: value.password
  });
  alert("User updated");
  console.log("New Value" +value)
}
}
