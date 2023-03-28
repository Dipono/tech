import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; //userform
import { StaffrequestService } from 'src/app/services/staffrequest.service';
import { TechnicalServiceService } from '../../technical-service.service'

@Component({
  selector: 'app-staffrequest',
  templateUrl: './staffrequest.component.html',
  styleUrls: ['./staffrequest.component.scss']
})
export class StaffrequestComponent implements OnInit {

  constructor(private service: StaffrequestService, private tech: TechnicalServiceService) { }
  errormsg: any; //CREATE VARIABLE TO STORE ERROR MESSAGE
  successmsg: any;

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'vanue': new FormControl('', Validators.required),
    'date_to_fix': new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required),
    'staffNo': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    // 'picture': new FormControl('', Validators.required),   //Validate and send to the db
  });
  results: any
  userSubmit() {
    // console.log(this.userForm.value); //console the results
    if (this.userForm.valid) {
      this.tech.jobcard_request(this.userForm.value)
        .subscribe((response) => {
          this.results = response
          if (this.results.success === true) {
            console.log(this.results.message)
            return this.results.message
          }
          else{
            console.log(this.results.message)
          }

        }, (error) => {
          console.log(error)
        })
      // console.log(this.userForm.value);
      // this.service.sendRequest(this.userForm.value).subscribe((res)=>{
      //   console.log(res, 'res==>');
      //   this.userForm.reset();
      //   this.successmsg = res.message;
      // })
    }
    else {
      console.log('all fields required');

      this.errormsg = 'All fields required';
    }
  }
}
