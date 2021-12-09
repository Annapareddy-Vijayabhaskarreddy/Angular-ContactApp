import { Component, OnInit } from '@angular/core';
import { ServiceblockService } from 'src/app/services/serviceblock.service';

@Component({
  selector: 'app-trashdashboard',
  templateUrl: './trashdashboard.component.html',
  styleUrls: ['./trashdashboard.component.css']
})
export class TrashdashboardComponent implements OnInit {

  constructor(private service:ServiceblockService) { }
public getNoteTotrash:any;

  ngOnInit(): void {
    this.getTotrash();
   
  }
  getTotrash(){
    this.service.getNoteTotrash().subscribe(data1=>{
      this.getNoteTotrash=data1;
      
    });
}
DeletetrashNotesList(item:any){
this.service.DeleteNotetrash(item.id).subscribe(data=>{
  this.getTotrash();
  
})
}
Restore(item:any){
  let item1={
    name:item.name,
    phonenumber:item.phonenumber,
    email:item.email
    
  }
  this.service.DeleteNotetrash(item.id).subscribe(data=>{
    this.getTotrash();
    
  })
  this.service.getAdd(item1).subscribe(data=>{
    this.getTotrash();
    
  
  })
}
}