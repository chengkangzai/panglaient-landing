import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedSheetComponent } from './bed-sheet.component';

describe('BedSheetComponent', () => {
  let component: BedSheetComponent;
  let fixture: ComponentFixture<BedSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
