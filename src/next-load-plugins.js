(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var loadPlugins = require('gulp-load-plugins');
  var nxClassify = nx.classify || require('next-classify');
  var DEFAULT_OPTIONS = {
    pattern: [
      '*-webpack-plugin',
      'webpack-html-plugin',
      'mini-css-extract-plugin'
    ],
    renameFn: function(name) {
      return nxClassify(name);
    },
    postRequireTransforms: {
      CleanWebpackPlugin: function(inPostPluginName) {
        return inPostPluginName.CleanWebpackPlugin;
      }
    }
  };

  var NxLoadPlugins = nx.declare('nx.LoadPlugins', {
    statics: {
      load: function(inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        return loadPlugins(options);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxLoadPlugins;
  }
})();
