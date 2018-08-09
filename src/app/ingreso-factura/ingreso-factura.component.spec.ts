import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoFacturaComponent } from './ingreso-factura.component';

describe('IngresoFacturaComponent', () => {
  let component: IngresoFacturaComponent;
  let fixture: ComponentFixture<IngresoFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
