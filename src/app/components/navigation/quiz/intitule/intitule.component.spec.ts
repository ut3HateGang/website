import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntituleComponent } from './intitule.component';

describe('QuestionComponent', () => {
  let component: IntituleComponent;
  let fixture: ComponentFixture<IntituleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntituleComponent]
    });
    fixture = TestBed.createComponent(IntituleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
