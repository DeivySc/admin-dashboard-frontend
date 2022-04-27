import { Component, OnInit } from '@angular/core';
import {AddBusinessModalComponent} from "./components/add-business-modal/add-business-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {BusinessService} from "../../services/business.service";
import { Business } from '../../interface/business';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.scss']
})
export class ListBusinessComponent implements OnInit {

  constructor(public dialog: MatDialog, private bussinesService: BusinessService, private _formBuilder: FormBuilder) { }

  Data: any[] = [
    {id: 1, name: 'Primax Solution', descrip: 'esta es una pequeña descripcion', tipo: 'Banca'},
    {id: 1, name: 'Notifai', descrip: 'esta es una pequeña descripcion', tipo: 'Ecommerce'},
    {id: 1, name: 'Redeban', descrip: 'esta es una pequeña descripcion', tipo: 'Banca'}
  ]

  bussines!: Business[];
  selectedPolicy:  Business  = { cod_emp :  0 , nomb_emp: '', descripcion:  '', cod_tipemp: 0, img_emp: ''};

  displayedColumns: string[] = ['id', 'name', 'descrip', 'tipo', 'funtion'];
  dataSource = this.Data;
  tutorials: any;

  /* readProducts(): void {
    this.bussinesService.readAll()
      .subscribe(
        bussines => {
          this.bussines = bussines;
          console.log(bussines);
        },
        error => {
          console.log(error);
        });
  } */

  delete(id: number){
    this.bussinesService.delete(id).subscribe((business: Business)=>{
      console.log("Bussines deleted, ", business);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBusinessModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {

    this.bussinesService.readAll().subscribe((bussines: Business[])=>{
      this.bussines = bussines;
      console.log(this.bussines);
    })
  }

}
