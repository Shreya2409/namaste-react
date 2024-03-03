namaste react

#parcel - the bundler

- Dev Build
- Local server
- HMR = hot module replacement
- File watching algorithm written using c++
- It is caching things to give faster builds under .parcel-cache folder so that next builds are developed faster
- Image Optimization
- Minification
- Bundling
- Compress removes whitespaces
- Consitent Hashing
- Code Splitting
- Differential Bundling - it makes app compatible with all the versions of browser(older browsers)
- Diagnostics of app on terminal
- Error Handling
- Can host app on https -> npx parcel index.html -https
- Tree Shaking - remove unused code
- if you want to run npx parcel build index.html
  then remove "main": "App.js" from package.json as it will conflic with the predefined entry point
- production build- it will build it inside dist folder
