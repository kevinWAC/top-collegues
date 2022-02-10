import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {
  collegues: Collegue[] = [];
  constructor() { }

  ngOnInit(): void {
    this.collegues.push({pseudo: "pseudo1",score: 0,photoUrl: "https://picsum.photos/id/237/200/300"});
    this.collegues.push({pseudo: "pseudo2",score: 0,photoUrl: "https://picsum.photos/id/1005/200/300"});
    this.collegues.push({pseudo: "pseudo3",score: 0,photoUrl: "https://picsum.photos/id/1003/200/300"});
    this.collegues.push({pseudo: "pseudo1",score: 0,photoUrl: "https://picsum.photos/id/237/200/300"});
    this.collegues.push({pseudo: "pseudo2",score: 0,photoUrl: "https://picsum.photos/id/1005/200/300"});
    this.collegues.push({pseudo: "pseudo3",score: 0,photoUrl: "https://picsum.photos/id/1003/200/300"});
    this.collegues.push({pseudo: "pseudo1",score: 0,photoUrl: "https://picsum.photos/id/237/200/300"});
    this.collegues.push({pseudo: "pseudo2",score: 0,photoUrl: "https://picsum.photos/id/1005/200/300"});
    this.collegues.push({pseudo: "pseudo3",score: 0,photoUrl: "https://picsum.photos/id/1003/200/300"});
  }
}
