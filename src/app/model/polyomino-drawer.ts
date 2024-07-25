import { Polyomino } from "./polyomino";
import { Vec2 } from "./vec2";
import { CellSideType, CellInfo } from "./cell-info";
import { GridHelper, CellCorner, CellSide } from "./grid-helper";

export class PolyominoDrawer {

    polyomino!: Polyomino;
    canvasElement!: HTMLCanvasElement;
    drawParams!: DrawParams;

    draw() {
        var polyominoSize: Vec2 = this.polyomino.getSize();
        this.canvasElement.width = 2*this.drawParams.margin + polyominoSize.x * this.drawParams.cellSize + 1;
        this.canvasElement.height = 2*this.drawParams.margin + polyominoSize.y * this.drawParams.cellSize + 1;

        var gridHelper = new GridHelper();
        gridHelper.cellSize = this.drawParams.cellSize;
        gridHelper.margin = this.drawParams.margin;

        var ctx = this.canvasElement.getContext('2d')!;
        ctx.imageSmoothingEnabled = false;
        ctx.translate(0.5,0.5);
        ctx.beginPath();
        for(let cell of this.polyomino.cells) {
            this.drawCellBackground(ctx, gridHelper, cell);
        }
        ctx.stroke();
        ctx.beginPath();
        for(let cell of this.polyomino.cells) {
            this.drawCellInternalBorders(ctx, gridHelper, cell);
        }
        ctx.stroke();
        ctx.beginPath();
        for(let cell of this.polyomino.cells) {
            this.drawCellExternalBorders(ctx, gridHelper, cell);
        }
        ctx.stroke();
    }

    private drawCellBackground(ctx: CanvasRenderingContext2D, gridHelper: GridHelper, cellPosition: Vec2) {
        var topLeft = gridHelper.getPointAtCorner(cellPosition, CellCorner.XnegYneg)!;
        ctx.fillStyle = this.drawParams.fillColor;
        ctx.fillRect(topLeft.x, topLeft.y, this.drawParams.cellSize, this.drawParams.cellSize);
    }

    private drawCellInternalBorders(ctx: CanvasRenderingContext2D, gridHelper: GridHelper, cellPosition: Vec2) {
        var topLeft = gridHelper.getPointAtCorner(cellPosition, CellCorner.XnegYneg);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        var cellInfo: CellInfo = this.polyomino.getCellInfo(cellPosition);
        for(let side of [CellSide.Xpos, CellSide.Ypos, CellSide.Xneg, CellSide.Yneg]) {
            var cellSideType: CellSideType = cellInfo.get(side)!;
            if(cellSideType === CellSideType.Internal) {
                var points = gridHelper.getPointsAtSide(cellPosition, side);
                ctx.moveTo(points[0].x, points[0].y);
                ctx.lineTo(points[1].x, points[1].y);
            }
        }
    }

    private drawCellExternalBorders(ctx: CanvasRenderingContext2D, gridHelper: GridHelper, cellPosition: Vec2) {
        var topLeft = gridHelper.getPointAtCorner(cellPosition, CellCorner.XnegYneg);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        var cellInfo: CellInfo = this.polyomino.getCellInfo(cellPosition);
        for(let side of [CellSide.Xpos, CellSide.Ypos, CellSide.Xneg, CellSide.Yneg]) {
            var cellSideType: CellSideType = cellInfo.get(side)!;
            if(cellSideType === CellSideType.External) {
                var points = gridHelper.getPointsAtSide(cellPosition, side);
                ctx.moveTo(points[0].x, points[0].y);
                ctx.lineTo(points[1].x, points[1].y);
            }
        }
    }
}

export class DrawParams {
    cellSize: number;
    fillColor: string;
    margin: number;

    constructor(cellSize: number, color: string, margin: number) {
        this.cellSize = cellSize;
        this.fillColor = color;
        this.margin = margin;
    }
}
