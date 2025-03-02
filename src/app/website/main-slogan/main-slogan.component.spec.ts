import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSloganComponent } from './main-slogan.component';

describe('MainSloganComponent', () => {
  let component: MainSloganComponent;
  let fixture: ComponentFixture<MainSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSloganComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
