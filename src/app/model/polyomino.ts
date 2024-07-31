import { Vec2, Transformation } from "./vec2";
import { CellInfo, CellSideType } from "./cell-info";
import { CellSide } from "./grid-helper";

export class Polyomino {

    type!: number;
    cells: Vec2[] = [];

    loadFromObject(obj: any): Polyomino {
        this.type = obj["type"];
        let width: number = obj["width"];
        let height: number = obj["height"];
        let cells: string = obj["cells"];
        let x = 0;
        let y = 0;
        for(let k = 0; k < cells.length; k++)
        {
            if(cells[k] === '1')
            {
                this.cells.push(new Vec2(x, y));
            }
            x++;
            if(x >= width)
            {
                y++;
                x = 0;
            }
        }
        return this
    }

    /**
     * Returns the size of the rectangle that fits the polyomino.
     */
    getSize(): Vec2 {
        if(this.cells.length == 0) {
            return new Vec2(0, 0);
        }
        var xmin: number = this.cells[0].x;
        var ymin: number = this.cells[0].y;
        var xmax: number = this.cells[0].x;
        var ymax: number = this.cells[0].y;
        for(let cell of this.cells) {
            if(cell.x < xmin) {xmin = cell.x;}
            if(cell.y < ymin) {ymin = cell.y;}
            if(cell.x > xmax) {xmax = cell.x;}
            if(cell.y > ymax) {ymax = cell.y;}
        }
        return new Vec2((xmax-xmin)+1, (ymax-ymin)+1);
    }

    /**
     * Returns the coordinates of the upper-left point of a rectangle that encloses the polyomino.
     */
    getOrigin(): Vec2 {
        var xmin: number = this.cells[0].x;
        var ymin: number = this.cells[0].y;
        for(let cell of this.cells) {
            if(cell.x < xmin) {xmin = cell.x;}
            if(cell.y < ymin) {ymin = cell.y;}
        }
        return new Vec2(xmin, ymin);
    }

    /**
     * Returns true if the cell positions are normalized.
     */
    isNormalized(): boolean {
        return this.getOrigin().equals(new Vec2(0, 0));
    }

    /**
     * Returns a 90º counter-clockwise rotated copy of the original polyomino.
     */
    rotated(): Polyomino {
        return this.clone(cell => new Vec2(cell.y, -cell.x));
    }

    /**
     * Returns a copy of the original polyomio flipped by the main diagonal.
     */
    flipped(): Polyomino {
        return this.clone(cell => new Vec2(cell.y, cell.x));
    }

    /**
     * Returns a clone of the polyomino applying a transformation to its cells
     * @param transformation
     */
    clone(transformation: (cell: Vec2) => Vec2): Polyomino {
        var res = new Polyomino();
        res.type = this.type;
        for(let cell of this.cells) {
            res.cells.push(transformation(cell));
        }
        res.normalize();
        return res;
    }

    /**
     * Returns a clone of the polyomino and applyes a transformation
     * @param transformation The transformation to apply to the clone
     */
    transformed(transformation: Transformation): Polyomino {
        return this.clone(Vec2.transformations.get(transformation)!);
    }

    /**
     * Returns true if the polyomino contains the cell at the specified position.
     * @param cellPosition position to be checked
     */
    contains(cellPosition: Vec2): boolean {
        var res: Vec2 = this.cells.find(c => c.equals(cellPosition))!;
        return res !== undefined;
    }

    /**
     * Returns an object with information about a specific cell of the polyomino
     * @param cellPosition position to be checked
     */
    getCellInfo(cellPosition: Vec2): CellInfo {
        var res = new CellInfo();
        res.position = cellPosition;
        res.exists = this.contains(cellPosition);
        if(res.exists) {
            res.set(CellSide.Xpos, this.contains(cellPosition.add(new Vec2(1, 0))) ? CellSideType.Internal : CellSideType.External);
            res.set(CellSide.Ypos, this.contains(cellPosition.add(new Vec2(0, 1))) ? CellSideType.Internal : CellSideType.External);
            res.set(CellSide.Xneg, this.contains(cellPosition.add(new Vec2(-1, 0))) ? CellSideType.Internal : CellSideType.External);
            res.set(CellSide.Yneg, this.contains(cellPosition.add(new Vec2(0, -1))) ? CellSideType.Internal : CellSideType.External);
        }
        return res;
    }

    private normalize() {
        var origin = this.getOrigin();
        for(var k = 0; k < this.cells.length; k++) {
            this.cells[k] = this.cells[k].sub(origin);
        }
    }
}
