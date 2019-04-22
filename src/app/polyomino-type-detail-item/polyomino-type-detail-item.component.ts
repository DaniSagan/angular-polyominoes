import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Polyomino } from '../model/polyomino';
import { Vec2 } from '../model/vec2';
import { ColorPalette } from '../model/color-palette';

@Component({
  selector: 'app-polyomino-type-detail-item',
  templateUrl: './polyomino-type-detail-item.component.html',
  styleUrls: ['./polyomino-type-detail-item.component.css']
})
export class PolyominoTypeDetailItemComponent implements OnInit {

  @Input() polyomino: Polyomino;
  @ViewChild('myCanvas') canvas: ElementRef;
  cellSize: number = 10;
  margin: number = 2;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.drawPolyomino();
  }

  drawPolyomino() {
    var canvasElement = <HTMLCanvasElement>(this.canvas.nativeElement);
    var polyominoSize: Vec2 = this.polyomino.getSize();
    canvasElement.width = 2*this.margin + polyominoSize.x * this.cellSize;
    canvasElement.height = 2*this.margin + polyominoSize.y * this.cellSize;
    var ctx = canvasElement.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.translate(0.5,0.5);
    var palette = new ColorPalette();
    for(let cell of this.polyomino.cells) {
      ctx.fillStyle = palette.next();
      ctx.fillRect(this.margin + cell.x * this.cellSize, this.margin + cell.y * this.cellSize, this.cellSize - 1, this.cellSize - 1);
      ctx.rect(this.margin + cell.x * this.cellSize, this.margin + cell.y * this.cellSize, this.cellSize - 1, this.cellSize - 1);
    } 
    ctx.stroke();       
  }

}
