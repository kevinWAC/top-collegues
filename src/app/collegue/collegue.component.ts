import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Avis, Collegue} from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  activeJaime = false;
  activeDeteste = false;

  @Input() collegue!: Collegue;

  ngOnInit(): void {
  }

  eventLikeOrNot(avisEvent: Avis) {
    if(this.activeJaime === false && avisEvent === 0)
       this.collegue.score += 100;
   this.activeJaime = (avisEvent === 0 && this.collegue.score >= 1000 ) ? true : false;
   if(this.activeDeteste === false && avisEvent === 1)
      this.collegue.score -= 100;
   this.activeDeteste = (avisEvent === 1 && this.collegue.score <= -1000 ) ? true : false;
  }
}

