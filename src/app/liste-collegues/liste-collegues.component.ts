import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss'],
})
export class ListeColleguesComponent implements OnInit {

 collegues?: Collegue[];

  constructor(private dataService: DataService) {
    this.dataService.listerCollegues().subscribe(data => this.collegues = data)
  }

  ngOnInit(): void {
  }
}
