import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakesComponent } from './cupcakes.component';

describe('CupcakesComponent', () => {
  let component: CupcakesComponent;
  let fixture: ComponentFixture<CupcakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CupcakesComponent]
    });
    fixture = TestBed.createComponent(CupcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
