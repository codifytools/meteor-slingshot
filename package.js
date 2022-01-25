Package.describe({
  name: 'codifytools:slingshot',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use('ecmascript');
  api.use(['underscore', 'check']);
  api.use(['tracker', 'reactive-var'], 'client');

  api.addFiles([
    'lib/restrictions.js',
    'lib/validators.js'
  ]);

  api.addFiles('lib/upload.js', 'client');

  api.addFiles([
    'lib/directive.js',
    'lib/storage-policy.js',
    'services/aws-s3.js',
  ], 'client');

  api.export('Slingshot');
});