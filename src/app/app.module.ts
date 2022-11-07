import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './first/first.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { MyExceptionHandler } from '../GlobalErrorHandler';
import { SampleErrorComponent } from './sample-error/sample-error.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    UserComponent,
    HeaderComponent,
    FirstComponent,
    RxjsComponent,
    ParentComponent,
    ChildComponent,
    SampleErrorComponent,
    DirectivesComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: ErrorHandler, useClass: MyExceptionHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
