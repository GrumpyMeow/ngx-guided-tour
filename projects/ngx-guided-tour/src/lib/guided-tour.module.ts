import { CommonModule } from '@angular/common';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { GuidedTourComponent } from './guided-tour.component';
import { GuidedTourService } from './guided-tour.service';
import { WindowRefService } from './windowref.service';

@NgModule({
    declarations: [GuidedTourComponent],
    imports: [CommonModule],
    providers: [WindowRefService],
    exports: [GuidedTourComponent]
})
export class GuidedTourModule {
    public static forRoot(): ModuleWithProviders<GuidedTourModule> {
        return {
            ngModule: GuidedTourModule,
            providers: [ErrorHandler, GuidedTourService]
        };
    }
}
