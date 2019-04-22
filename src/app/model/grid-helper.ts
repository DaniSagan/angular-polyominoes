import { Vec2 } from "./vec2";

export class GridHelper {
    cellSize: number;
    margin: number;

    getPointAtCorner(cellPosition: Vec2, cellCorner: CellCorner): Vec2 {
        var cellOrigin = cellPosition.scale(this.cellSize).add(new Vec2(this.margin, this.margin));
        if(cellCorner === CellCorner.XnegYneg) {
            return cellOrigin;
        } else if(cellCorner === CellCorner.XnegYpos) {
            return cellOrigin.add(new Vec2(0, this.cellSize));
        } else if(cellCorner === CellCorner.XposYneg) {
            return cellOrigin.add(new Vec2(this.cellSize, 0));
        } else if(cellCorner === CellCorner.XposYpos) {
            return cellOrigin.add(new Vec2(this.cellSize, this.cellSize));
        } else {
            return undefined;
        }
    }

    getPointsAtSide(cellPosition: Vec2, cellSide: CellSide): Array<Vec2> {
        if(cellSide === CellSide.Xneg) {
            return [this.getPointAtCorner(cellPosition, CellCorner.XnegYneg), this.getPointAtCorner(cellPosition, CellCorner.XnegYpos)];
        } else if(cellSide === CellSide.Xpos) {
            return [this.getPointAtCorner(cellPosition, CellCorner.XposYneg), this.getPointAtCorner(cellPosition, CellCorner.XposYpos)];
        } else if(cellSide === CellSide.Yneg) {
            return [this.getPointAtCorner(cellPosition, CellCorner.XnegYneg), this.getPointAtCorner(cellPosition, CellCorner.XposYneg)];
        } else if(cellSide === CellSide.Ypos) {
            return [this.getPointAtCorner(cellPosition, CellCorner.XnegYpos), this.getPointAtCorner(cellPosition, CellCorner.XposYpos)];
        } else {
            return undefined;
        }
    }
}

export enum CellSide {
    Xpos = 0,
    Ypos,
    Xneg,
    Yneg
}

export enum CellCorner {
    XnegYneg,
    XnegYpos,
    XposYneg,
    XposYpos
}