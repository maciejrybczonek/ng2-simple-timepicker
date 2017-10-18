export default {
  input: 'dist/ng2-simple-timepicker.js',
  sourceMap: false,
  output: {
    format: 'umd',
    file: 'dist/bundles/ng2-simple-timepicker.umd.js',
  },
  name: 'ng2.simple.timepicker',
  globals: {
    'reflect-metadata': 'Reflect.metadata',
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/common': 'ng.common',
    //'rxjs/Observable': 'Rx',
    //'rxjs/ReplaySubject': 'Rx',
    //'rxjs/add/operator/map': 'Rx.Observable.prototype',
    //'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    //'rxjs/add/observable/fromEvent': 'Rx.Observable',
    //'rxjs/add/observable/of': 'Rx.Observable'
  },
  external: ['@angular/core', '@angular/forms', '@angular/common', 'reflect-metadata']
}