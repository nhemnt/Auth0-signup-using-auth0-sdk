import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class SignupService {
  constructor(private _http: Http) {
  }

  onSigup(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000', user, {headers: headers});
  }

}
