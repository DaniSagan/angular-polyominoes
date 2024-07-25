import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolyominoTypesComponent } from './polyomino-types.component';

describe('PolyominoTypesComponent', () => {
  let component: PolyominoTypesComponent;
  let fixture: ComponentFixture<PolyominoTypesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolyominoTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyominoTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
