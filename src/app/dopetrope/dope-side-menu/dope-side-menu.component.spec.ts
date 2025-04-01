import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopeSideMenuComponent } from './dope-side-menu.component';

describe('DopeSideMenuComponent', () => {
  let component: DopeSideMenuComponent;
  let fixture: ComponentFixture<DopeSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopeSideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DopeSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
