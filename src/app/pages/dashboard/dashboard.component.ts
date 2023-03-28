import { Component, OnInit } from '@angular/core';
import { TechnicalServiceService } from '../../technical-service.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  request: any
  requestData: any
  message = ''
  constructor(private tech: TechnicalServiceService) { }

  ngOnInit(): void {
    this.getAllrequests();
  }

  getAllrequests() {
    this.tech.display_requests().subscribe(
      (response) => {
        console.log(response)
        this.request = response
        if (this.request.success === true) {
          this.requestData = this.request.data
        } else {
          this.message = this.request.message
        }
      }
    )
  }

}
