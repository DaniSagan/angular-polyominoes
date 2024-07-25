import { Polyomino } from "./polyomino";
import { Transformation, Vec2 } from "./vec2";

export class PolyominoFamily {

    private _seed!: Polyomino;
    public get seed(): Polyomino {
        return this._seed;
    }

    private _familyMembers!: Map<Transformation, Polyomino>;
    public getFamilyMember(transformation: Transformation) {
        return this._familyMembers.get(transformation);
    }

    generate(seedPolyomino: Polyomino) {
        this._seed = seedPolyomino;
        this._familyMembers = new Map<Transformation, Polyomino>();
        let transformations = [
            Transformation.Identity,
            Transformation.Rotation90,
            Transformation.Rotation180,
            Transformation.Rotation270,
            Transformation.FlipHorizontal,
            Transformation.FlipVertical,
            Transformation.FlipMainDiagonal,
            Transformation.FlipSecondaryDiagonal
        ];
        for(let transformation of transformations) {
            this._familyMembers.set(transformation, seedPolyomino.transformed(transformation));
        }
    }
}

