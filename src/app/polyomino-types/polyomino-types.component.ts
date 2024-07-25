import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PolyominoType } from '../model/polyomino-type'
import { POLYOMINOES } from '../mock-polyominoes'
import { PolyominoService } from '../polyomino.service';
import { PolyominoTypeDetailComponent } from '../polyomino-type-detail/polyomino-type-detail.component';
import { Polyomino } from '../model/polyomino';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-polyomino-types',
  templateUrl: './polyomino-types.component.html',
  styleUrls: ['./polyomino-types.component.css'],
  imports: [PolyominoTypeDetailComponent, NgFor]
})
export class PolyominoTypesComponent implements OnInit {

  polyominoTypes!: PolyominoType[];
  @ViewChild('detail') polyominoTypeDetailElement!: PolyominoTypeDetailComponent;

  private _selectedPolyominoType!: PolyominoType;
  get selectedPolyominoType(): PolyominoType {
    return this._selectedPolyominoType;
  }
  @Input()
  set selectedPolyominoType(polyominoType: PolyominoType) {
    this._selectedPolyominoType = polyominoType;
  }

  constructor(private polyominoService: PolyominoService) {

  }

  ngOnInit() {
    this.polyominoService.getPolyominoes().subscribe(
      data =>
      {
        this.polyominoTypes = data.map(x => new PolyominoType().loadFromObject(x))
        /*this.polyominoTypes = data.map(x =>
        {
          const polyominoType = new PolyominoType();
          polyominoType.name = x.name;
          polyominoType.type = x.type;
          polyominoType.items = x.items.map(i => {
            const polyomino = new Polyomino();
            polyomino.type = i.type;
            polyomino.cells = i.cells;
            return polyomino;
          });
          return polyominoType;
        });*/
      }
    );
  }

  onSelect(polyominoType: PolyominoType) {
    this.selectedPolyominoType = polyominoType;
  }

}
