import { CommonModule } from '@angular/common';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { GuidedTourComponent } from './guided-tour.component';
import { GuidedTourService } from './guided-tour.service';

@NgModule({
    declarations: [
        GuidedTourComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GuidedTourComponent
    ]
})
export class NgxGuidedTourModule {
    public static forRoot(): ModuleWithProviders<NgxGuidedTourModule> {
        return {
            ngModule: NgxGuidedTourModule,
            providers: [
                ErrorHandler,
                GuidedTourService
            ]
        };
    }
}
