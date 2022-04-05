import { Component, OnInit } from '@angular/core';
import {AddBusinessModalComponent} from "./components/add-business-modal/add-business-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {BusinessService} from "../../services/business.service";

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.scss']
})
export class ListBusinessComponent implements OnInit {

  constructor(public dialog: MatDialog, private services: BusinessService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  tutorials: any;


  openDialog(): void {
    const dialogRef = this.dialog.open(AddBusinessModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  retrieveTutorials(): void {
    this.services.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        });
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

}
