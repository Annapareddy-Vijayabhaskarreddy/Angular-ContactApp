import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceblockService } from 'src/app/services/serviceblock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
 

  constructor(private service:ServiceblockService,private routert:Router) { }
public getNote:any;

public getname:any;
public getemail:any;
public getphonenumber:any;
public a: any="";
public id: any;
 public item: any;
  ngOnInit(): void {
    this.getNotesList();
   

  }
  getNotesList(){
    this.service.getNote().subscribe(data=>{
      this.getNote=data;
      
    });
  }
  MovetrashNotesList(item:any){
    let item1={
      name:item.name,
      phonenumber:item.phonenumber,
      email:item.email

    
    }
    this.service.TrashAdd(item1).subscribe(data=>{
     
    })
    this.service.DeleteNote(item.id).subscribe(data=>{
      this.getNotesList();
     
    })
    
}

EditNotesListt(item:any){
  
  this.a=item
  console.log(this.a.id)
  this.routert.navigate(['/edit', this.a.id
    
 
 ]);
  
 
}
}
