import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hotel } from './hotel';


@Injectable({
    providedIn: 'root'
})

export class HotelService {
    private apiServerUrl =environment.apiBaseUrl;
  
    constructor(private http: HttpClient){}
  
    public getHotels(): Observable<Hotel[]> {
      return this.http.get<Hotel[]>(`${this.apiServerUrl}/hotel/all`);
    }

    public addHotel(hotel: Hotel): Observable<Hotel> {
        return this.http.post<Hotel>(`${this.apiServerUrl}/hotel/add`, hotel);
      }
    
      public updateHotel(hotel: Hotel): Observable<Hotel> {
        return this.http.put<Hotel>(`${this.apiServerUrl}/hotel/update`, hotel);
      }
    
      public deleteHotel(hotelId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/hotel/delete/${hotelId}`);
      }



      getelement(){
        return this.http.get('https://localhost:44305/api/rent')
      }
}