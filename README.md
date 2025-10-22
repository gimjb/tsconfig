

`@gimjb/tsconfig`
=================

A comprehensive TypeScript configuration for various project types.


Usage
-----

To use this TypeScript configuration in your project, extend it in your `tsconfig.json` file:

```jsonc
// tsconfig.json
{
  "extends": "@gimjb/tsconfig/node" // or "@gimjb/tsconfig/browser" based on your project type
}
```


> [!TIP]
> If you target an older version of JavaScript, consider installing [tslib] and
> enabling the `importHelpers` and `noEmitHelpers`:
>
> ```jsonc
> {
>   "compilerOptions": {
> 	"importHelpers": true,
> 	"noEmitHelpers": true
>   }
> }
> ```

[tslib]: https://www.npmjs.com/package/tslib
