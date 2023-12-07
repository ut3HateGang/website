import {ComponentFixture, TestBed} from '@angular/core/testing';

import {
  McIconComponent,
} from 'src/app/components/mc-components/mc-icon/mc-icon.component';

describe('McIconComponent', () => {
  let component: McIconComponent;
  let fixture: ComponentFixture<McIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McIconComponent],
    });
    fixture = TestBed.createComponent(McIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
