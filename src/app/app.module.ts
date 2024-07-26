import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GuidedTourModule } from 'projects/ngx-guided-tour/src/lib/guided-tour.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GuidedTourModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
