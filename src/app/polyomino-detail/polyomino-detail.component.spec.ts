import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyominoDetailComponent } from './polyomino-detail.component';

describe('PolyominoDetailComponent', () => {
  let component: PolyominoDetailComponent;
  let fixture: ComponentFixture<PolyominoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolyominoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyominoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
