import { Router } from '@angular/router';
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

  constructor(private dataSrv: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  valider(){
    this.dataSrv.creerUnCollegue(this.collegue)
    .subscribe(
      colServeur => {console.log(colServeur)
      }
    );
    this.router.navigateByUrl('/collegues');
  }

}
