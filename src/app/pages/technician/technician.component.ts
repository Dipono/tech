import { Component, OnInit } from '@angular/core';
import { ViewrequestArtisanService } from 'src/app/services/viewrequest-artisan.service';
import { TechnicalServiceService } from '../../technical-service.service'

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent implements OnInit {

  constructor(private service:ViewrequestArtisanService, private tech: TechnicalServiceService) { }
  readData:any;
  tempData:any
  id:any;
  successmsg:any;
  statusProgress =[{id:1, progress:"pending"},{id:2, progress:"progress"},{id:3, progress:"complete"}]

  ngOnInit(): void {
    this.viewRequest();
  }

  //Delete record
  deleteID(id:any)
  {
    this.service.deleteRequest(id).subscribe((res)=>{
      this.successmsg = res.messasge;
      this.viewRequest();
    })
    
  }
  //Get record
  viewRequest()
  {
    this.tech.read_report().subscribe(
      (respond)=>{
        this.tempData = respond
        this.readData = this.tempData.data
        console.log(respond)
      }
    )

    // this.service.viewRequest().subscribe((res)=>{
    //   this.readData = res.data; //data is an array
    // });
  }

}
