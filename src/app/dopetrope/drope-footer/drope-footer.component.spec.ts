import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropeFooterComponent } from './drope-footer.component';

describe('DropeFooterComponent', () => {
  let component: DropeFooterComponent;
  let fixture: ComponentFixture<DropeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropeFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
