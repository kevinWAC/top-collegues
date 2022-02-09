import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  like=false;
  noLike=false;
  @Output() avisEvt = new EventEmitter<Avis>();
  @Input() nbrAvis!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

 avisEvent(likeOrNot: string){
  console.log("avis ",this.nbrAvis)
  this.like = (this.nbrAvis + 100 >= 1000) ? true : false;
  this.noLike = (this.nbrAvis - 100 <= -1000) ? true : false;
  let avis = (likeOrNot === "like") ? Avis.AIMER : Avis.DETESTER;
  this.avisEvt.emit(avis);
 }
}
