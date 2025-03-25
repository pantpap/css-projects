import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopetropeHomeComponent } from './dopetrope-home.component';

describe('DopetropeHomeComponent', () => {
  let component: DopetropeHomeComponent;
  let fixture: ComponentFixture<DopetropeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopetropeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DopetropeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
