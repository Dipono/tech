import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-adminreport',
  templateUrl: './adminreport.component.html',
  styleUrls: ['./adminreport.component.scss']
})
export class AdminreportComponent implements OnInit {

  constructor(private service:ReportService) { }

  readData:any;
  id:any;

  ngOnInit(): void {
    //VIEWS ALL REQUESTS
    this.service.viewReport1().subscribe((res)=>{
      console.log(res, "res==>");
      this.readData = res.data; //data is an array
    });
  }

  printThisPage(){
    window.print();
  }

}
