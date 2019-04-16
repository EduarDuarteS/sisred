import { Component, OnInit, Input } from '@angular/core';
// import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
// import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
// import { ModalComponent } from 'your-path-to-modal-component';


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

  constructor() { }

  ngOnInit() {
    this.heading = this.headingInput;
    this.body = this.bodyInput;
  }

}
