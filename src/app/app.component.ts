import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PolyominoTypesComponent } from './polyomino-types/polyomino-types.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PolyominoTypesComponent]
})
export class AppComponent {
  title = 'Polyominoes';

  constructor() {

  }

  ngOnInit() {

  }
}
