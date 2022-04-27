import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Business } from 'src/app/loyout/interface/business';
import { BusinessService } from 'src/app/loyout/services/business.service';

@Component({
  selector: 'app-add-business-modal',
  templateUrl: './add-business-modal.component.html',
  styleUrls: ['./add-business-modal.component.scss']
})
export class AddBusinessModalComponent implements OnInit {

  selected!: number;

  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private bussinesService: BusinessService) { }

  createbussines(){
    console.log(this.form.value);
    this.bussinesService.create(this.form.value).subscribe((bussines: Business) => {
      console.log("Policy created, ", bussines);
    })
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nomb_emp: ['', Validators.required],
      descripcion: ['', Validators.required],
      cod_tipemp: ['', Validators.required],
      img: [''],
    });
  }

}
