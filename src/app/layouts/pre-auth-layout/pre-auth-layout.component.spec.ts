import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthLayoutComponent } from './pre-auth-layout.component';

describe('PreAuthLayoutComponent', () => {
  let component: PreAuthLayoutComponent;
  let fixture: ComponentFixture<PreAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAuthLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
