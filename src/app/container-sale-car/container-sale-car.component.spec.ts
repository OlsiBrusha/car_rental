import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSaleCarComponent } from './container-sale-car.component';

describe('ContainerSaleCarComponent', () => {
  let component: ContainerSaleCarComponent;
  let fixture: ComponentFixture<ContainerSaleCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSaleCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerSaleCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
