import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessModalComponent } from './add-business-modal.component';

describe('AddBusinessModalComponent', () => {
  let component: AddBusinessModalComponent;
  let fixture: ComponentFixture<AddBusinessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusinessModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusinessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
