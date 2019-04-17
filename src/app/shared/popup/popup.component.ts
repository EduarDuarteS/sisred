import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() headingInput: string;
  @Input() bodyInput: string;
  @Input() footerInput: string;
  heading : string = '';
  body : string = '';
  footer : string = '';

  activeList : boolean = false;

  constructor() { }

  ngOnInit() {
    this.heading = this.headingInput;
    this.body = this.bodyInput;
  }

  listSelect : string []= ['Opcion uno', 'Opcion dos', 'Opcion tres','Opcion cuatro'];
}

// npm install --save popper.js angular-popper
