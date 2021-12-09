import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceblockService {
  

  constructor(private http:HttpClient) { }
  getNote(){
    return this.http.get(`http://localhost:3000/contacts`);
  }
  getNotee(id:number){
    return this.http.get(`http://localhost:3000/contacts/${id}`);
  }
  getAdd(items:any){
    return this.http.post(' http://localhost:3000/contacts',items);
  }
  DeleteNote(id: number) {
    return this.http.delete(`http://localhost:3000/contacts/${id}`);
  }
  UpdateNote(id: number ,item:any){
    return this.http.put(`http://localhost:3000/contacts/${id}` ,item);
  }
  TrashAdd(trash:any){
    return this.http.post('http://localhost:3000/trash',trash); 
  }
  DeleteNotetrash(id: number) {
    return this.http.delete(`http://localhost:3000/trash/${id}`);
  }
  getNoteTotrash() {
    return this.http.get('http://localhost:3000/trash');
  }
}
