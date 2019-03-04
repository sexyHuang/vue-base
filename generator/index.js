module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    dependencies: {
      qs: '^6.5.2',
      axios: '^0.18.0'
    }
  });
  api.render('./template');
};
