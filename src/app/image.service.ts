import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private query: string;
  private API_KEY: string = environment.PIXBAY_API_KEY;
  private API_URL: string = environment.PIXBAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY +'&q=';
  private perPage: string = "&per_page=10";

  constructor(private http: Http) { }

  getImage(query) {
    return this.http.get(this.URL + query + this.perPage).map(res => res.json());
  }

}
