import { Component, OnInit } from '@angular/core';
import { ViewrequestService } from 'src/app/services/viewrequest.service';
import { TechnicalServiceService } from '../../technical-service.service'


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private service: ViewrequestService, private tech: TechnicalServiceService) { }

  readData: any;
  id: any;
  successmsg: any;

  request: any
  artisans: any
  message = ''
  ngOnInit(): void {
    //VIEWS ALL REQUESTS
    this.getAllrequests();
    this.getArtisans();
  }



  deleteID(id: any) {
    console.log(id, 'deleteid==>');
    this.service.deleteRequest(id).subscribe((res) => {
      console.log(res, "deleteres=>");
      this.successmsg = res.messasge;
    });
  }

  getAllrequests() {
    this.tech.display_requests().subscribe(
      (response) => {
        console.log(response)
        this.request = response
        if (this.request.success === true) {
          this.readData = this.request.data

        } else {
          this.message = this.request.message
        }
      }
    )
  }

  getArtisans() {
    this.tech.display_artisan().subscribe(
      (response) => {
        console.log(response)
        this.artisans = response
      }
    )
  }
  artisanId = 0;
  selectArtisan(event: any) {
    this.artisanId = event.target.value
  }
  saveChanges(jobcard: any) {
    if (this.artisanId === 0) {
      return alert('Assign artisan before saving')
    }

    let data = { artisanId: Number(this.artisanId) }

    this.tech.update_artisan(jobcard.jobcardId, data).subscribe(
      () => {
        if (jobcard.artisanId === 1) {
          let report = { jobcardId: jobcard.jobcardId }
          this.tech.create_report(report).subscribe(
            (response) => {
              alert("Assign artisan")
            }, (err) => {
              console.log(err)
            }
          )
        }
      alert("Assign Artisan")
      }, (err) => {
        console.log(err)
      }
    )
  }

  //GET BY ID
  viewID(id: any) {
    console.log(id, 'deleteid==>');
    this.service.viewRequest1(id).subscribe((res) => {
      console.log(res, "deleteres=>");
      this.successmsg = res.messasge;

    });
  }
}
