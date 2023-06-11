import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerServiceComponent } from './container-service.component';

describe('ContainerServiceComponent', () => {
  let component: ContainerServiceComponent;
  let fixture: ComponentFixture<ContainerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
