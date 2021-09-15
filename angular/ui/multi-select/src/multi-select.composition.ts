import { Component, NgModule } from '@angular/core';
import { MultiSelectModule } from './multi-select.module';

@Component({
  selector: 'multi-select-composition-cmp',
  template: `MultiSelect composition: <multi-select></multi-select>`
})
class MultiSelectCompositionComponent {}

@NgModule({
  declarations: [MultiSelectCompositionComponent],
  imports: [MultiSelectModule],
  bootstrap: [MultiSelectCompositionComponent]
})
export class MultiSelectCompositionModule {}
