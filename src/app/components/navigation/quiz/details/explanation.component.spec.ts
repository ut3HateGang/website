import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationComponent } from './explanation.component';

describe('DetailsComponent', () => {
  let component: ExplanationComponent;
  let fixture: ComponentFixture<ExplanationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplanationComponent]
    });
    fixture = TestBed.createComponent(ExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
