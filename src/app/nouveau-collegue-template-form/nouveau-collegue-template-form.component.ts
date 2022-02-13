import { Collegue } from './../models';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue: Partial<Collegue> = {
    pseudo: "",
    nom: "",
    prenom: "",
    photo: "",
  };

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  valider(){
    console.log(this.collegue);
    this.dataSrv.creerUnCollegue(this.collegue)
    .subscribe(
      colServeur => console.log(colServeur)
    );
  }

}
