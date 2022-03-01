
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { RestaurantData } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {

  constructor(private fb: FormBuilder, private api: ApiService) { }

  formValue!: FormGroup
  restaurantModelObj: RestaurantData = new RestaurantData
  allRestaurantData: any
  showAdd!: boolean;
  showUpdate!: boolean;


  ngOnInit(): void {
    this.formValue = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    })
    this.getAllData()
  }
  //Now subscribing our data which is mapped by api service
  clickAdd() {
    this.formValue.reset;
    this.showAdd = true;
    this.showUpdate = false
  }
  addRestaurant() {
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.services = this.formValue.value.services;

    this.api.postRestaurant(this.restaurantModelObj).subscribe(res => {
      console.log(res)
      alert('Restaurant Record Added Succesfully')
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData()
    }
      
    )
  }
  getAllData() {
    this.api.getResaturant().subscribe(res => {
      this.allRestaurantData = res;
    })
  }
  DeleteRecords(data: any) {
    this.api.deleteRestaurant(data.id).subscribe(res => {
      alert('Record Deleted Succesfully')
      this.getAllData()
    })
  }
  editRestaurant(data: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.restaurantModelObj.id = data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }
  updateRest() {
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;
console.log(this.restaurantModelObj.name)
console.log(this.formValue.value.name)
console.log(this.restaurantModelObj)
    this.api.updateRestaurant(this.restaurantModelObj, this.restaurantModelObj.id).subscribe(res => {
console.log(this.restaurantModelObj.id)
      alert('Update Records Succesfully')
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    })
  }
}



