---
labels: ['angular', 'typescript', 'multi-select']
description: 'A `multi-select` component.'
---

# MultiSelect documentation

Import `MultiSelectModule` into your application:

```ts
import { MultiSelectModule } from './multi-select.module';

// add it to your module imports
@NgModule({
  imports: [
    MultiSelectModule
  ]
})
export class AppModule {}
```

Use `MultiSelectComponent` in your templates:

```html
<multi-select></multi-select>
```
