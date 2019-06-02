import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ServerService{
    constructor( private http: HttpClient ){}

    createUser(data){
        return this.http.post('http://localhost:3000/signup', data);
    }
    signIn(data){
        return this.http.post('http://localhost:3000/login', data);
    }
    createRecipe(data){
        let header = new HttpHeaders({
            "authorization": "Bearer "+ localStorage.getItem('token')
        }) 
        data.user_id = +localStorage.getItem('id');
        return this.http.post('http://localhost:3000/recipe',data, {headers: header})
    }

    //get Particular recipe for edit
    getRecipe(name){
        return this.http.get('http://localhost:3000/recipe/'+localStorage.getItem('id')+'/'+name)
    }
    editRecipe(data){
        return this.http.post('http://localhost:3000/recipe/'+
        localStorage.getItem('recipeId')+'/'+localStorage.getItem('id'),data)

    }
    getAllRecipe(){
        let header = new HttpHeaders({
            "authorization": "Bearer "+ localStorage.getItem('token')
        }) 
        return this.http.get('http://localhost:3000/recipe/'+localStorage.getItem('id'),
        {headers:header});
    }
    deleteRecipe(){
        let header = new HttpHeaders({
            "authorization": "Bearer "+ localStorage.getItem('token')
        })  
        return this.http.delete('http://localhost:3000/recipe/delete/'+localStorage.getItem('id')
        +'/'+localStorage.getItem('recipeId'),{headers:header})
    }
}