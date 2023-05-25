import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { Hotel } from '../hotel';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit  {

  allHotel:Hotel[] =[];
  constructor (private http: HttpClient){}
 
  ngOnInit(){
this.fetchHotel();
  }

onHotelFetch(){
  this.fetchHotel();
}

 private fetchHotel(){
  this.http.get<{[key: string]: Hotel}>('https://hotel-b8f96-default-rtdb.firebaseio.com/room.json')
  .pipe(map((res) =>{
    const hotel = [];
    for(const key in res){
      if(res.hasOwnProperty(key)){
        hotel.push({...res[key], id:key})
      }
   
    }
    return hotel;
  }))
  .subscribe((hotel)=>{
    console.log(hotel);
    this.allHotel = hotel;

    console.log("alhotel");
    console.log(this.allHotel);
    
  }
  )
 }
}
