import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly Url = environment.api;
  constructor(private httpClient:HttpClient) { }

  sendCredentials(email:string, password:string): Observable<any> {
    console.log(email, password);
    return this.httpClient.post(`${this.Url}/auth/login`, {email, password})
    .pipe(
      tap((data:any) => {
        const { tokenSession } = data; 
        localStorage.setItem('token', tokenSession);
        data.access = true;
        return data
      }),
      catchError((err) => {
        return of({access:false});
      })
    )
  }
}
