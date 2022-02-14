import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  col?: Collegue;

  constructor(private aRoute: ActivatedRoute, private dataService: DataService) {
      this.aRoute.paramMap.subscribe(paramMap => {
      const pseudo = paramMap.get('pseudo');
      if(pseudo) {
        this.dataService.rechercherCollegueParPseudo(pseudo).subscribe(data=>this.col = data)
      }
    }
    );
  }

  ngOnInit(): void {
  }

}
