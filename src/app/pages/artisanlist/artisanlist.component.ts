import { Component, OnInit } from '@angular/core';
import { Artisan } from 'src/app/models/artisan';
// import { Validate } from 'src/app/models/validate';
import { ValidateArtisan } from 'src/app/models/validate-artisan';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-artisanlist',
  templateUrl: './artisanlist.component.html',
  styleUrls: ['./artisanlist.component.scss']
})
export class ArtisanlistComponent implements OnInit {
  artisan: Artisan[] = [];
  name:any; //searching
  body:any; //post data
  rForm: ValidateArtisan = new ValidateArtisan;
  router: any;

  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getArtisan().subscribe((Response) => {
      this.artisan=Response;
      console.log(this.artisan);
      })
  
      //ADDING STAFF
      // this.rs.postData(this.body).subscribe(Response => {
      //   console.log(Response)
      // })
  }

  SearchArtisan(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.artisan = this.artisan.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  deleteArtisanRow(val: any){
    //add conformation
    if(confirm("Delete item?")){
      //call detele function from the component.ts
      this.rs.deleteArtisan(val).subscribe(data => {
      });
      //to display results after delete
      this.rs.getArtisan().subscribe((Response) =>{
      this.artisan = Response;
      });
    }
  }

  updateArtisan(number: any){
    this.router.navigate(['/update', number]);
  }

  //ADD ARTISAN
  // submitArtisanData(value: any) {
  //   let body = {
  //     name: value.name,
  //     email: value.email,
  //     phone: value.phone
  //   }

  //   this.rs.postData(body)
  //     .subscribe(response => {
  //       console.log(response);
  //       alert("Artisan successfully added")
  //     })
  // }
}
