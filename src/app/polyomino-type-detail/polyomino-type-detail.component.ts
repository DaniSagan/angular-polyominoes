import { Component, OnInit, Input, SimpleChanges, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { PolyominoType } from '../model/polyomino-type';
import { Polyomino } from '../model/polyomino';

@Component({
  selector: 'app-polyomino-type-detail',
  templateUrl: './polyomino-type-detail.component.html',
  styleUrls: ['./polyomino-type-detail.component.css']
})
export class PolyominoTypeDetailComponent implements OnInit {
  @Input() polyominoType: PolyominoType;
  selectedPolyomino: Polyomino; 
  @ViewChildren('myCanvas') polyominoCanvasItems;

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
