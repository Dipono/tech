import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/models/staff';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.scss']
})
export class StafflistComponent implements OnInit {
  staff: Staff[] = [];
  name:any; //searching
  constructor(public rs:RestService, private router:Router) { } //enables page navigation

  ngOnInit(): void {
    this.rs.getStaff().subscribe((Response) => {
    this.staff=Response;
    console.log(this.staff);
    })
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.staff = this.staff.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  deleteRow(val: any){
      //add conformation
      if(confirm("Delete item?")){
        //call detele function from the component.ts
        this.rs.deleteStaff(val).subscribe(data => {
        });
        //to display results after delete
        this.rs.getStaff().subscribe((Response) =>{
        this.staff = Response;
      });
    }
  }

    update(number: any){
    this.router.navigate(['/update', number]);
  }
}
