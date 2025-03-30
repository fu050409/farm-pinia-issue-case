# Pinia build issue

This is a minimal reproduction of an issue with Pinia and Farm.

## Steps to reproduce

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`

   Until now, everything works as expected.

4. Run `pnpm build`
5. Run `pnpm preview` and open the application in your browser

   The application will fail to load.

   The error is:

   ```error
   Uncaught TypeError: `target` argument of Proxy must be an object, got undefined
    e index_911b.1247ab2f.js:1
    require (index):1
    o index_fb87.7f486e62.js:1
    require (index):1
    e index_44f8.729e37c2.js:5
    require (index):1
    a App.vue:6
    require (index):1
    <anonymous> (index):5
   ```
