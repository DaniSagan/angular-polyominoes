import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PolyominoTypesComponent } from './polyomino-types/polyomino-types.component';
import { PolyominoDetailComponent } from './polyomino-detail/polyomino-detail.component';
import { PolyominoTypeDetailComponent } from './polyomino-type-detail/polyomino-type-detail.component';
import { PolyominoTypeDetailItemComponent } from './polyomino-type-detail-item/polyomino-type-detail-item.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: []
})
export class AppModule { }
