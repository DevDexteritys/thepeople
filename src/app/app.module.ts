import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LangingComponent } from './langing/langing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FirstBlockComponent } from './langing/first-block/first-block.component';
import { DotaneBlockComponent } from './langing/dotane-block/dotane-block.component';
import { ThirdBlockComponent } from './langing/third-block/third-block.component';
import { TeamComponent } from './langing/team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    LangingComponent,
    NavigationComponent,
    FirstBlockComponent,
    DotaneBlockComponent,
    ThirdBlockComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
