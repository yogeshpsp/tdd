import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute , Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
public employees: any;
  public name: string='';
public id:number=0;
public querydata:any;
  constructor( private service : EmployeeService , private route:ActivatedRoute, private queryroute:Router, private https:HttpClient) { }

  ngOnInit() {
    
   /* this.service.getEmployees().subscribe(data=>this.employees=data)
    this.name=this.route.snapshot.params['name'];
    console.log("this is for name"+this.name);
    this.service.getEmployees() .subscribe (data => { const name=this.route.snapshot.params['name'];
       this.employees = data.find((d) => { return d.name === name }); console.log("hi all" + name); });
       this.route.queryParams.subscribe((data)=>{this.querydata=data});
       this.service.postdata(this.querydata).subscribe(data => {console.log("Final post " + data)});
       this.https.post('https://tddproject-81480-default-rtdb.firebaseio.com/post.json', this.querydata).subscribe(data => {console.log(data)});
  */
  }

}
