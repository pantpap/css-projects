import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropePortfolioComponent } from './drope-portfolio.component';

describe('DropePortfolioComponent', () => {
  let component: DropePortfolioComponent;
  let fixture: ComponentFixture<DropePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropePortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
