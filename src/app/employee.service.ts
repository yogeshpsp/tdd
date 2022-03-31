import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{IEmployee} from './employee';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
    private url:string='/assets/data/data.json';
    constructor(private http:HttpClient){}
    getEmployees():Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.url);
    }
    postdata(arrivingdata:any){
        return this.http.post(this.url, arrivingdata);
    }
}
