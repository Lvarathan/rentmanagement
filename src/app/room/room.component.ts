import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
 
}) 
export class RoomComponent  implements OnInit{
  public hotels: Hotel[] =[];
  address: any;
  datas: any;
  rent:any;
  search:any;
  hotel: any;
  Hotel: any;
  hotelName :string = "";
  hotelEmail :string="";
  hotelAddress:string="";


  constructor(private hotelService: HotelService,private primengConfig: PrimeNGConfig,private http: HttpClient, private room:HotelService){}


  // ngOnInit(){ 
  //   this.getHotels();

  //   this.primengConfig.ripple = true;
  // }
  
  
  //   public getHotels(): void {
  //     this.hotelService.getHotels().subscribe(
  //       (response: Hotel[]) => {
  //         this.hotels = response;
  //         console.log(this.hotels);
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       }
  //     );
  //   }



  ngOnInit() {
    this.room.getelement().subscribe((res:any)=>{
      this.rent = res;
      
      console.log(this.rent);
    })
    
  }
   
    display: boolean = false;
  onclick(hotelname:any ,address:any ,email:any) 
  {
     console.log(hotelname,address,email);
      
     this.hotelName=hotelname;
     this.hotelAddress=this.hotelAddress;
     this.hotelEmail=email;
     
    
    // console.log(c);
    // console.log(this.rent);
    
    // for (var j = 0; j < this.rent.length; j++) {
    //   if (this.rent[j].id == c)
    //    {
       
    //     console.log(this.rent[j]);

    //     this.datas = Array(this.rent[j]);

    //     console.log(this.datas);
    //   }
      this.display = true
   
    // }


  }

  key: string ='review';
  reverse:boolean = false
  sort(key: string){
    this.key =key;
    this.reverse =!this.reverse;
  
  }

  detailcreate(hotel: {pName: string,phone: string,address:string}){
console.log(hotel);
this.http.post('https://hotel-b8f96-default-rtdb.firebaseio.com/room.json',hotel)
.subscribe((res) =>
{
console.log(res);
});
this.display=false
  }


}
