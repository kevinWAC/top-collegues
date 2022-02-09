import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() avisEvt = new EventEmitter<Avis>();

  constructor() { }

  ngOnInit(): void {
  }

 avisEvent(likeOrNot: string){
  let avis = (likeOrNot === "like") ? Avis.AIMER : Avis.DETESTER;
  this.avisEvt.emit(avis);
 }
}
