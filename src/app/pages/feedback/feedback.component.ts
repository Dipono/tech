import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Validate } from '../../models/validate'; //import the class
import { Feedback } from '../../models/feedback';
//SERVICE
import { AssignArtisanService } from 'src/app/services/assign-artisan.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  validateModel = new Validate('','','','','','','',null!, null!)  //add an argument for date
  regForm: Feedback = new Feedback;

  constructor(private service:AssignArtisanService) { }
  errormsg:any; //CREATE VARIABLE TO STORE ERROR MESSAGE
  successmsg:any;

  ngOnInit(): void {
    
  }

  userForm = new FormGroup ({
    'artisan_name': new FormControl('', Validators.required),
    'ETC': new FormControl('', Validators.required),
    'staff_name': new FormControl('Banele Mpofu', Validators.required),
    'venue': new FormControl('B15G01', Validators.required),
    'category': new FormControl('Technical', Validators.required),
    'createdAt': new FormControl('2022/11/29', Validators.required),
    'picture': new FormControl('http://imageurl', Validators.required),
   });

   userSubmit()
   {
     // console.log(this.userForm.value); //console the results
     if(this.userForm.valid)
     {
       console.log(this.userForm.value);
       this.service.assignArtisan(this.userForm.value).subscribe((res)=>{
         console.log(res, 'res==>');
         this.userForm.reset();
         this.successmsg = res.message;
       })
     }
     else
     {
       this.errormsg = 'All fields required';
     }
   }

}
