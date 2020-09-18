import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { QrcodeDetails } from './qrcode-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectServiceService {

  private usersUrl: string;
  private qrname: string;

  constructor(private http: HttpClient, private params:HttpParams) { 

    params.set('qrname', "aswanth");
    this.usersUrl = 'http://localhost:8080/api/qrcodee';
 
    //this.qrname = "aswanth";
  }

  public getqrcode(qrcodedetails: QrcodeDetails): Observable<QrcodeDetails> {
    return this.http.get<QrcodeDetails>(this.usersUrl);
  }

  public getqrcodeTwo(qrname:string): Observable<QrcodeDetails> {
    this.qrname = qrname;
    return this.http.get<QrcodeDetails>(this.usersUrl+"/"+this.qrname);
    //{params:{qrname: 'aswanth'}}
  }

  public save(qrcodedetails: QrcodeDetails) {
    return this.http.post<QrcodeDetails>(this.usersUrl, qrcodedetails);
  }

}
