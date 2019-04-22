export enum Transformation {
    Identity,
    Rotation90,
    Rotation180,
    Rotation270,
    FlipHorizontal,
    FlipVertical,
    FlipMainDiagonal,
    FlipSecondaryDiagonal
}

export class Vec2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    loadFromObject(obj: any): Vec2 {
        this.x = obj["x"];
        this.y = obj["y"];
        return this;
    }

    add(v: Vec2): Vec2 {
        return new Vec2(this.x + v.x, this.y + v.y);
    }

    sub(v: Vec2): Vec2 {
        return new Vec2(this.x - v.x, this.y - v.y);
    }

    neg(): Vec2 {
        return new Vec2(-this.x, -this.y);
    }

    length(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    unit(): Vec2 {
        return this.scale(1.0 / this.length());
    }

    scale(value: number): Vec2 {
        return new Vec2(this.x * value, this.y * value);
    }

    equals(other: Vec2): boolean {
        return (this.x === other.x) && (this.y === other.y);
    }

    static get i(): Vec2 {
        return new Vec2(1, 0);
    }

    static get j(): Vec2 {
        return new Vec2(0, 1);
    }

    static get zero(): Vec2 {
        return new Vec2(0, 0);
    }

    static transformations: Map<Transformation, (v: Vec2) => Vec2> = new Map<Transformation, (v: Vec2) => Vec2>([
        [Transformation.Identity, (v: Vec2) => new Vec2(v.x, v.y)],
        [Transformation.Rotation90, (v: Vec2) => new Vec2(-v.y, v.x)],
        [Transformation.Rotation180, (v: Vec2) => new Vec2(-v.x, -v.y)],
        [Transformation.Rotation270, (v: Vec2) => new Vec2(v.y, -v.x)],
        [Transformation.FlipHorizontal, (v: Vec2) => new Vec2(v.x, -v.y)],
        [Transformation.FlipVertical, (v: Vec2) => new Vec2(-v.x, v.y)],
        [Transformation.FlipMainDiagonal, (v: Vec2) => new Vec2(v.y, v.x)],
        [Transformation.FlipSecondaryDiagonal, (v: Vec2) => new Vec2(-v.y, -v.x)],
    ]); 
}

