import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceblockService } from 'src/app/services/serviceblock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddashboard',
  templateUrl: './adddashboard.component.html',
  styleUrls: ['./adddashboard.component.css']
})
export class AdddashboardComponent implements OnInit {

constructor(private service:ServiceblockService,private route:ActivatedRoute, private r:Router ) { }
 public getname:any;
 public getphonenumber:any;
 public getemail:any;
 public getNotesList:any;
 public name:any;
 public save:any;
 public phonenumber:any
 public email:any
 public dataa:any
 
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.service.getNotee(p['id']).subscribe(data=>{
        this.dataa=data,
        this.getname=this.dataa.name
        this.getphonenumber=this.dataa.phonenumber
        this.getemail=this.dataa.email
        this.save=true      
      }) 
    });
  }

  
  AddNotesList(){
    let item={
      name:this.getname,
      phonenumber:this.getphonenumber,
      email:this.getemail
    }
    this.service.getAdd(item).subscribe(data=>{  
     this.getname="",
     this.getphonenumber="",
     this.getemail=""
    })
  }
  UpdateNotesList(item:any){
    item.name=this.getname
    item.phonenumber=this.getphonenumber
    item.email=this.getemail
   
    this.service.UpdateNote(item.id, item).subscribe(data => {
      
      this.getname=""
      this.getphonenumber=""
      this.getemail=""
      this.r.navigate(['/'
    ]);
     
    });
}
}