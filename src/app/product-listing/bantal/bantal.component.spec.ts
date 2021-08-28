import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BantalComponent } from './bantal.component';

describe('BantalComponent', () => {
  let component: BantalComponent;
  let fixture: ComponentFixture<BantalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BantalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BantalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
