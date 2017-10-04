var allTestFiles = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/[Ss]pec\.js$/.test(file)) {
            allTestFiles.push(file);
        }
    }
}

require.config({
  baseUrl: '/base',

  paths: {
      'bytepushers': 'src/main/javascript/software.bytepushers.object.extensions'
  },

  shim: {
      bytepushers: {
          exports: 'BytePushers'
      }
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
