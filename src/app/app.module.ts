 
 
import { HttpClientModule } from '@angular/common/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }   from './app.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { HotelService } from './hotel.service';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { SearchPipe } from './search.pipe';
import { DetailsComponent } from './details/details.component';


 
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    SearchPipe,
    DetailsComponent,   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,Ng2OrderModule,Ng2SearchPipeModule, FormsModule,DialogModule,DynamicDialogModule,BrowserModule,ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
