import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: [ './main-card.component.scss' ]
} )
export class MainCardComponent implements OnInit {

  test = "Créez des mots de passe forts et sûrs pour garantir la sécurité de vos comptes web";

  constructor() {
  }

  ngOnInit(): void {
  }

}
