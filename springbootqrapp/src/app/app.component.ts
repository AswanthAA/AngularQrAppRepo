import { QrcodeDetails } from './qrcode-details';
import { Component, OnInit } from '@angular/core';
import { ConnectServiceService } from './connect-service.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'springbootqrapp';
  details:QrcodeDetails;
  isShowBoolean:boolean = true;
  isShowProgress:boolean = true;

  constructor(private connect:ConnectServiceService){
    
  }

  ngOnInit() {
    
  }

  qrname: string;
  onSubmit(){
    console.log(this.qrname);

  }
  // testFunction(){

  //   this.connect.getqrcodeTwo().subscribe(data => {
  //     this.details = data;
  //   });
  //   console.log("/////////");
  //   console.log(this.details.qrname);
  //   console.log("/////////");
    
  // }
  onClickSubmit(data){
    alert("Entered string is "+data.qrname);

    this.isShowProgress=false;
    this.connect.getqrcodeTwo(data.qrname).subscribe(data => {
         this.details = data;
         this.isShowProgress=true;
         this.isShowBoolean = false;
         
       });

      

  }

}
