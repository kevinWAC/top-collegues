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
  @Input() btnJaime!: boolean;
  @Input() btnDeteste!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

 avisEvent(likeOrNot: string){
  let avis = (likeOrNot === "like") ? Avis.AIMER : Avis.DETESTER;
  this.avisEvt.emit(avis);
 }
}
