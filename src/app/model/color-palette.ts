export class ColorPalette {
    private COLORS: string[] = [
        '#59585e',
        '#b7caca',
        '#f5d8ad',
        '#be865c',
        '#b1a671'
    ];
    private currIndex: number = 0;

    public next(): string {
        var color = this.COLORS[this.currIndex];
        this.currIndex++;
        if(this.currIndex >= this.COLORS.length) {
            this.currIndex = 0;
        }
        return color;
    }

    public get(index: number) {
        return this.COLORS[index % this.COLORS.length];
    }

    public reset() {
        this.currIndex = 0;
    }
}