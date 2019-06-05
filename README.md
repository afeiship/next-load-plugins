# next-load-plugins
> Like gulpLoadPlugins for any build system

## installation
```bash
npm install -S afeiship/next-load-plugins --registry=https://registry.npm.taobao.org
```

## default
```js
const DEFAULT_OPTIONS = {
  pattern: ['*-webpack-plugin', 'webpack-html-plugin'],
  renameFn: function(name) {
    return nxClassify(name);
  },
  postRequireTransforms: {
    CleanWebpackPlugin: function(inPostPluginName) {
      return inPostPluginName.CleanWebpackPlugin;
    }
  }
};
```


## apis
| api  | params      | description      |
| ---- | ----------- | ---------------- |
| load | (inOptions) | Load all plugins |

## usage
```js
import NxLoadPlugins from 'next-load-plugins';

// code goes here:
const $ = NxLoadPlugins.load();

// plugins:
[
  // ...
  new $.WebpackHtmlPlugin()
  // ...
]
```

## resources
- https://github.com/jackfranklin/gulp-load-plugins
