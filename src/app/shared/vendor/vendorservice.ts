import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from './vendor';


@Injectable({
  providedIn: 'root',
})

export class VendorService {

    constructor(private http: HttpClient) { }

    getVendorSmall() {
    return this.http.get<any>('assets/data/vendor.json')
      .toPromise()
      .then(res => <Vendor[]>res.data)
      .then(data => { return data; });
    }
}