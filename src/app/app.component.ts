import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';
  Collegue: Collegue = {
    pseudo: "toto",
    score: 100,
    photoUrl: "https://picsum.photos/id/237/200/300"
  }

}
