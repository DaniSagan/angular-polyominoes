import { Vec2 } from "./vec2";
import { CellSide } from "./grid-helper";

export class CellInfo {

    exists: boolean;
    position: Vec2;
    private _sideMap: Map<CellSide, CellSideType> = new Map<CellSide, CellSideType>([
        [CellSide.Xpos, CellSideType.Undefined],
        [CellSide.Ypos, CellSideType.Undefined],
        [CellSide.Xneg, CellSideType.Undefined],
        [CellSide.Yneg, CellSideType.Undefined],
    ]);

    set(cellSide: CellSide, type: CellSideType) {
        this._sideMap[cellSide] = type;
    }

    get(cellSide: CellSide): CellSideType {
        return this._sideMap[cellSide];
    }

}

export enum CellSideType {
    Undefined = 0,
    External,
    Internal
}