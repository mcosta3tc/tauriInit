import { Component, OnInit } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';

@Component( {
  selector: 'app-pass-word-input',
  templateUrl: './pass-word-input.component.html',
  styleUrls: [ './pass-word-input.component.scss' ]
} )
export class PassWordInputComponent implements OnInit {

  password: unknown;

  constructor() { }

  ngOnInit(): void {
    invoke( 'my_custom_command' ).then( ( message ) => this.password = message )
  }

}
