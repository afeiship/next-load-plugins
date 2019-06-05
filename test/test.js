(function () {
  var nx = require('next-js-core2');
  var NxLoadPlugins = require('../src/next-load-plugins');

  describe('NxLoadPlugins.methods', function () {
    test('init', function () {
      var plugins = NxLoadPlugins.load();
      console.log(plugins);

      // console.log(rs1, rs2);

      // expect(rs1).toBe(true);

    });
  });
}());
