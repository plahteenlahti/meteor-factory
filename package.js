Package.describe({
  name: "plahteenlahti:factory",
  summary: "Factories for Meteor",
  version: "1.5.1",
  git: "https://github.com/plahteenlahti/meteor-factory.git",
});

Package.onUse(function (api) {
  api.versionsFrom("1.2");
  api.use([
    "ecmascript",
    "minimongo@~2.0.1", // Specify compatible version
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
