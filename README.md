# css modules with flow typechecking

Using [css-modulesify](https://github.com/css-modules/css-modulesify/) and [flow](https://flowtype.org/)

Setup:

```
npm install
```

To build:

```
npm run build
```

Now open `index.html` in a browser to view the result.

## type checking

To see it in action try editing `src/index.js` so that it tries to apply a classname that doesn't exist.

Or edit one of the classnames in `src/index.css`.

When you next `npm run build` you'll see a flow error:

```
 10: <div class="${ styles.outer }">
                           ^^^^^ property `outer`. Property not found in
 10: <div class="${ styles.outer }">
                    ^^^^^^ object literal
```

Getting this to work is a little ad-hoc, and I'll write some more about it. We can also make a more seamless integration, with a few modifications to core.
