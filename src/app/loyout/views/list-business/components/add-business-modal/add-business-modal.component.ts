import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-business-modal',
  templateUrl: './add-business-modal.component.html',
  styleUrls: ['./add-business-modal.component.scss']
})
export class AddBusinessModalComponent implements OnInit {

  selected = '';

  constructor() { }

  ngOnInit(): void {
  }

}
