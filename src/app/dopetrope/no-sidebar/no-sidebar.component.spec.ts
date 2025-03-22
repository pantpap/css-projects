import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSidebarComponent } from './no-sidebar.component';

describe('NoSidebarComponent', () => {
  let component: NoSidebarComponent;
  let fixture: ComponentFixture<NoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
