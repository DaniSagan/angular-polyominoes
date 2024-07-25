import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolyominoTypeDetailItemComponent } from './polyomino-type-detail-item.component';

describe('PolyominoTypeDetailItemComponent', () => {
  let component: PolyominoTypeDetailItemComponent;
  let fixture: ComponentFixture<PolyominoTypeDetailItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolyominoTypeDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyominoTypeDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
