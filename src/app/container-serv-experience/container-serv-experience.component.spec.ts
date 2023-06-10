import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerServExperienceComponent } from './container-serv-experience.component';

describe('ContainerServExperienceComponent', () => {
  let component: ContainerServExperienceComponent;
  let fixture: ComponentFixture<ContainerServExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerServExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerServExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
