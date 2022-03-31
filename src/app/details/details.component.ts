import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public employees = [] as any;
  public name: string='';
public id:number=0;
  public users: Observable<any>[] = [];
  constructor(private getdatabase: AngularFireModule, private service:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(data=>this.employees=data)

    /*this.service.getEmployees().subscribe(data=>
      this.employee=data
    );
    this.route.queryParams.subscribe(data=>{console.log(data);
      
    });*/

  }

}
