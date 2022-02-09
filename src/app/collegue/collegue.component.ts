import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Avis, Collegue} from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  cpt: number =  0;
  constructor() { }

  @Input() collegue!: Collegue;

  ngOnInit(): void {
  }

  eventLikeOrNot(avisEvent: Avis) {
      this.cpt = (avisEvent == 0) ? this.collegue.score += 100 : this.collegue.score -= 100;
  }
}

