import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopeServicesComponent } from './dope-services.component';

describe('DopeServicesComponent', () => {
  let component: DopeServicesComponent;
  let fixture: ComponentFixture<DopeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopeServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DopeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
