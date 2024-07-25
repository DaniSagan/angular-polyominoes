import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Polyomino } from '../model/polyomino';
import { Vec2 } from '../model/vec2';
import { ColorPalette } from '../model/color-palette';
import { PolyominoDrawer, DrawParams } from '../model/polyomino-drawer';

@Component({
  standalone: true,
  selector: 'app-polyomino-detail',
  templateUrl: './polyomino-detail.component.html',
  styleUrls: ['./polyomino-detail.component.css']
})
export class PolyominoDetailComponent implements OnInit {

  @Input() polyomino!: Polyomino;
  @ViewChild('myPolyominoCanvas') canvas!: ElementRef;
  @ViewChild('rotatedPolyominoCanvas1') rotatedCanvas1!: ElementRef;
  @ViewChild('rotatedPolyominoCanvas2') rotatedCanvas2!: ElementRef;
  @ViewChild('rotatedPolyominoCanvas3') rotatedCanvas3!: ElementRef;
  cellSize: number = 40;
  margin: number = 2;
  colorPalette: ColorPalette = new ColorPalette();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    //this.drawPolyomino();
  }

  ngOnChanges() {
    this.drawPolyomino(<HTMLCanvasElement>(this.canvas.nativeElement), this.polyomino, this.cellSize, this.margin);
    var rotatedPolyominos = this.rotatedPolyominos;
    this.drawPolyomino(<HTMLCanvasElement>(this.rotatedCanvas1.nativeElement), rotatedPolyominos[0], 20, 2);
    this.drawPolyomino(<HTMLCanvasElement>(this.rotatedCanvas2.nativeElement), rotatedPolyominos[1], 20, 2);
    this.drawPolyomino(<HTMLCanvasElement>(this.rotatedCanvas3.nativeElement), rotatedPolyominos[2], 20, 2);
  }

  get rotatedPolyominos(): Polyomino[] {
    var res: Polyomino[] = [];
    var temp: Polyomino = this.polyomino.rotated();
    for(let k of [1,2,3,4]) {
      res.push(temp);
      temp = temp.rotated();
    }
    return res;
  }

  private drawPolyomino(canvasElement: HTMLCanvasElement, polyomino: Polyomino, cellSize: number, margin: number) {
    var polyominoDrawer: PolyominoDrawer = new PolyominoDrawer();
    polyominoDrawer.polyomino = polyomino;
    polyominoDrawer.canvasElement = canvasElement;
    polyominoDrawer.drawParams = new DrawParams(cellSize, this.colorPalette.next(), margin);
    polyominoDrawer.draw();

    /*var polyominoSize: Vec2 = polyomino.getSize();
    canvasElement.width = 2*margin + polyominoSize.x * cellSize;
    canvasElement.height = 2*margin + polyominoSize.y * cellSize;
    var ctx = canvasElement.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.translate(0.5,0.5);
    var palette = new ColorPalette();
    for(let cell of polyomino.cells) {
      ctx.fillStyle = palette.next();
      ctx.fillRect(margin + cell.x * cellSize, margin + cell.y * cellSize, cellSize - 1, cellSize - 1);
      ctx.rect(margin + cell.x * cellSize, margin + cell.y * cellSize, cellSize - 1, cellSize - 1);
    }
    ctx.stroke();       */
  }
}

class PolyominoDrawParams {
  cellSize!: number;
  margin!: number;
  color!: string;
}
