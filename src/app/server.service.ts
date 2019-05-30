import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServerService{
    constructor( private http: HttpClient ){}

    createUser(data){
        return this.http.post('http://localhost:3000/auth/signin',data);
    }
    logUser(data){
        return this.http.post('http://localhost:3000/auth/login', data);
    }
}