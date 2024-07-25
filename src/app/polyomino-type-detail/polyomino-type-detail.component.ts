import { Component, OnInit, Input, SimpleChanges, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { PolyominoType } from '../model/polyomino-type';
import { Polyomino } from '../model/polyomino';
import { PolyominoDetailComponent } from '../polyomino-detail/polyomino-detail.component';
import { PolyominoTypeDetailItemComponent } from '../polyomino-type-detail-item/polyomino-type-detail-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-polyomino-type-detail',
  templateUrl: './polyomino-type-detail.component.html',
  styleUrls: ['./polyomino-type-detail.component.css'],
  imports: [PolyominoDetailComponent, PolyominoTypeDetailItemComponent, NgIf, NgFor]
})
export class PolyominoTypeDetailComponent implements OnInit {
  @Input() polyominoType!: PolyominoType;
  selectedPolyomino!: Polyomino;
  @ViewChildren('myCanvas') polyominoCanvasItems!: any[];

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //this.drawPolyominos();
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.polyominoType) {
      //this.drawPolyominos();
    }
  }

  onSelect(polyomino: Polyomino) {
    this.selectedPolyomino = polyomino;
  }

  drawPolyominos() {
    var count: number = 0;
    this.polyominoCanvasItems.forEach(item => console.log(item.nativeElement.id));
  }

  get polyominos(): Polyomino[] {
    return this.polyominoType.items;
  }

}
