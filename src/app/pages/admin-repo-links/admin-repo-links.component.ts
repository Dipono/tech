import { Component, OnInit } from '@angular/core';
import {ReportService} from 'src/app/services/report.service';

@Component({
  selector: 'app-admin-repo-links',
  templateUrl: './admin-repo-links.component.html',
  styleUrls: ['./admin-repo-links.component.scss']
})
export class AdminRepoLinksComponent implements OnInit {

  constructor(private service:ReportService) { }

  readData:any;
  id:any;
  
  ngOnInit(): void {
    this.service.viewReport().subscribe((res)=>{
      console.log(res, "res==>");
      this.readData = res.data
    })
  }

}
