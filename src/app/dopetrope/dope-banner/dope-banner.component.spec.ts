import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopeBannerComponent } from './dope-banner.component';

describe('DopeBannerComponent', () => {
  let component: DopeBannerComponent;
  let fixture: ComponentFixture<DopeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopeBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DopeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
