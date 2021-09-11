---
labels: ['angular', 'typescript', 'my-button']
description: 'A `my-button` component.'
---

# MyButton documentation

Import `MyButtonModule` into your application:

```ts
import { MyButtonModule } from './my-button.module';

// add it to your module imports
@NgModule({
  imports: [
    MyButtonModule
  ]
})
export class AppModule {}
```

Use `MyButtonComponent` in your templates:

```html
<my-button></my-button>
```
