import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthLayoutComponent } from './post-auth-layout.component';

describe('PostAuthLayoutComponent', () => {
  let component: PostAuthLayoutComponent;
  let fixture: ComponentFixture<PostAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAuthLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
