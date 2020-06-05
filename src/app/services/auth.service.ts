import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../auth/user.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface ResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoginData = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  signupUser(emailVal: string, passVal: string){
    return this.http.post<ResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNUVxKpI4M7xP92U_7XuYU2QAWI8NE18E",
    {
      email: emailVal,
      passVal: passVal,
      returnSecureToken: true,
    },
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  signinUser(username: string, password: string){
    return this.http.post<ResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNUVxKpI4M7xP92U_7XuYU2QAWI8NE18E",
    {
      email: username,
      password: password,
      returnSecureToken: true,
    }).pipe( 
      tap(resData => {
        this.handleAuntentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      })
    );
  }

  private handleAuntentication(email: string, userId: string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new User(email, userId, token, expirationDate);
    //console.log(user);
    this.userLoginData.next(user);
  }
}
