import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() headingInput: string;
  @Input() bodyInput: string;
  @Input() activeListInput: boolean;
  @Input() listSelectInput: string[];

  @Output() popupOutput = new EventEmitter();
  @ViewChild('modalEduard') modal: ElementRef;

  showModal() {
    // Show modal with jquery
    $(this.modal.nativeElement).modal('show');
  }
  clickAcepSelect(select: string) {
    this.popupOutput.emit(select);
  }

  constructor() { }
  ngOnInit() { };
}

// npm install --save popper.js angular-popper
