import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-artreport',
  templateUrl: './artreport.component.html',
  styleUrls: ['./artreport.component.scss']
})
export class ArtreportComponent implements OnInit {

  constructor(private service:ReportService) { }
  errormsg:any; //CREATE VARIABLE TO STORE ERROR MESSAGE
  successmsg:any;

  ngOnInit(): void {
  }
  printThisPage(){
    window.print();
  }

  userForm = new FormGroup ({
    'job_description': new FormControl('', Validators.required),
    'category_type': new FormControl('', Validators.required),
    'date': new FormControl('', Validators.required),
    'artisan_name': new FormControl('', Validators.required),
    'staff_name': new FormControl('', Validators.required),
    'jobstatus': new FormControl('', Validators.required),
    // 'picture': new FormControl('', Validators.required),   //Validate and send to the db
  });

  userSubmit()
  {
    // console.log(this.userForm.value); //console the results
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.service.sendRequest(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      })
    }
    else
    {
      console.log('all fields required');
      
      this.errormsg = 'All fields required';
    }
  }
}
