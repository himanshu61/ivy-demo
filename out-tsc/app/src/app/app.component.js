import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class AppComponent {
    constructor() {
        this.name = "Ivy";
    }
}
AppComponent.ngComponentDef = i0.ɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory() { return new AppComponent(); }, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵE(0, "div");
        i0.ɵE(1, "h1");
        i0.ɵT(2);
        i0.ɵe();
        i0.ɵe();
    } if (rf & 2) {
        i0.ɵt(2, i0.ɵi1(" Hello ", ctx.name, " "));
    } } });
//# sourceMappingURL=app.component.js.map