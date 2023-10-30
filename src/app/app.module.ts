import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnderweartListComponent } from './components/underweart.list/underweart.list.component';
import { UnderweartItemComponent } from './components/underweart.item/underweart.item.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderweartListComponent,
    UnderweartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
