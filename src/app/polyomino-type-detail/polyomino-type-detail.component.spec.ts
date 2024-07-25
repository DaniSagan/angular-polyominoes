import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolyominoTypeDetailComponent } from './polyomino-type-detail.component';

describe('PolyominoTypeDetailComponent', () => {
  let component: PolyominoTypeDetailComponent;
  let fixture: ComponentFixture<PolyominoTypeDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolyominoTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyominoTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
