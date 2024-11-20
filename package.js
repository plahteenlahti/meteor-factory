Package.describe({
  name: "plahteenlahti:factory-next",
  summary: "Factories for Meteor, fork of dburles:factory",
  version: "1.5.1",
  git: "https://github.com/plahteenlahti/meteor-factory.git",
});

Package.onUse(function (api) {
  api.versionsFrom("1.2", "3.0");
  api.use([
    "ecmascript",
    "minimongo",
    "underscore",
    "ejson",
    "random",
  ]);
  api.addFiles("factory.js");
  api.export("Factory");
});

Package.onTest(function (api) {
  api.use(["ecmascript", "tinytest", "plahteenlahti:factory", "underscore"]);
  api.addFiles("factory_tests.js", "server");
});
