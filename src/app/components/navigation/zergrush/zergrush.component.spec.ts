import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZergrushComponent } from './zergrush.component';

describe('NotFoundComponent', () => {
  let component: ZergrushComponent;
  let fixture: ComponentFixture<ZergrushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZergrushComponent]
    });
    fixture = TestBed.createComponent(ZergrushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
