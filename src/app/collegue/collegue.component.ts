import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Avis, Collegue} from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  activeJaime = false;
  activeDeteste = false;

  @Input() collegue!: Collegue;
constructor(private dataSrv: DataService) { }
  ngOnInit(): void {
  }

    //this.dataService.donnerUnAvis().subscribe

  eventLikeOrNot(avisEvent: Avis) {
    if(this.collegue) {
      this.dataSrv.donnerUnAvis(this.collegue, avisEvent)
        .subscribe(
          colServeur => this.collegue = colServeur
        );
       this.activeJaime = (avisEvent === 0 && this.collegue.score >= 1000 ) ? true : false;
       this.activeDeteste = (avisEvent === 1 && this.collegue.score <= -1000 ) ? true : false;
    }
  }
}

