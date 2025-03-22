import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopetropeComponent } from './dopetrope.component';

describe('DopetropeComponent', () => {
  let component: DopetropeComponent;
  let fixture: ComponentFixture<DopetropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopetropeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DopetropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
