import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-generalreport',
  templateUrl: './generalreport.component.html',
  styleUrls: ['./generalreport.component.scss']
})
export class GeneralreportComponent implements OnInit {

  constructor(private service:ReportService) { }
  readData:any;
  id:any;

  ngOnInit(): void {
    //VIEWS ALL REQUESTS
    this.service.viewReport().subscribe((res)=>{
      console.log(res, "res==>");
      this.readData = res.data; //data is an array
    });
  }
  printThisPage(){
    window.print();
  }

}
