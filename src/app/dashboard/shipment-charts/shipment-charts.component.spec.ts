import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentChartsComponent } from './shipment-charts.component';

describe('ShipmentChartsComponent', () => {
  let component: ShipmentChartsComponent;
  let fixture: ComponentFixture<ShipmentChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipmentChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
