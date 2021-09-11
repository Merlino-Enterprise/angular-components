import { Component, NgModule } from '@angular/core';
import { MyButtonModule } from '../my-button.module';

@Component({
  selector: 'my-button-composition-cmp',
  template: `MyButton composition: <my-button></my-button>`
})
class MyButtonCompositionComponent {}

@NgModule({
  declarations: [MyButtonCompositionComponent],
  imports: [MyButtonModule],
  bootstrap: [MyButtonCompositionComponent]
})
export class MyButtonCompositionModule {}
