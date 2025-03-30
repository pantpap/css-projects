import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropeBlogComponent } from './drope-blog.component';

describe('DropeBlogComponent', () => {
  let component: DropeBlogComponent;
  let fixture: ComponentFixture<DropeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropeBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
