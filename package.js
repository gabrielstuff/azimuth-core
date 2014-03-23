Package.describe({
    summary: "Azimuth CMS core code"
});

Package.on_use(function (api) {
  // Include some core meteor smart packages
  api.use([ 'service-configuration', 'accounts-ui', 'accounts-base', 'accounts-password', 'underscore', 'jquery',
    'less', 'spiderable', 'standard-app-packages'], 'client');

  // Use the meteorite smart packages specified in smart.json
  api.use(['roles','iron-router','analyticsjs', 'collectionFS'], 'client');

  // And ensure we have the packages we need server-side available to the server
  api.use(['accounts-base', 'accounts-password', 'spiderable', 'roles', 'collectionFS', 'cfs-public-folder'], 'server');

  api.add_files([
    'server/server_init.js'
  ], 'server');

  api.add_files([
    'client/collections.js',
    'client/metadata_fields.js',
    'client/lib/vendor/jquery.nestable.js',
    'client/lib/vendor/noty/jquery.noty.js',
    'client/lib/vendor/noty/layouts/inline.js',
    'client/lib/vendor/noty/layouts/bottomRight.js',
    'client/lib/vendor/noty/themes/default.js',
    'client/css/vendor/jquery.cleditor.css',
    'client/lib/vendor/jquery.cleditor.js',
    'client/lib/vendor/jquery.cleditor.image.js',
    'client/lib/vendor/jquery.cleditor.file.js',
    'client/lib/vendor/jquery.selectize.js',
    'client/css/vendor/selectize.css',
    'client/css/vendor/selectize.default.css',
    'client/lib/helpers.js',
    'client/lib/registry.js',
    'client/lib/utils.js',
    'client/lib/admin_panel.js',
    'client/router.js',
    'client/css/vendor/nestable.css',
    'client/css/main.less',
    'client/css/admin_panel.less',
    'client/css/fonts/dripicons.eot',
    'client/css/fonts/dripicons.svg',
    'client/css/fonts/dripicons.ttf',
    'client/css/fonts/dripicons.woff',
    'client/css/dripicons.css',
    'client/blocks/four_column/four_column.js',
    'client/blocks/six_column/six_column.js',
    'client/blocks/three_column/three_column.js',
    'client/blocks/twelve_column/twelve_column.js',
    'client/blocks/two_column/two_column.js',
    'client/pages/home_page/home_page.js',
    'client/pages/page_default/page_default.js',
    'client/pages/sidebar_left/sidebar_left.js',
    'client/pages/sidebar_right/sidebar_right.js',
    'client/views/accounts/account_buttons.js',
    'client/views/accounts/error.js',
    'client/views/accounts/forgot_password.js',
    'client/views/accounts/login.js',
    'client/views/accounts/sign_up.js',
    'client/views/accounts/social.js',
    'client/views/admin/admin_users.html',
    'client/views/admin/admin_users.js',
    'client/views/admin/navigation.html',
    'client/views/admin/navigation.js',
    'client/views/admin/site_settings.html',
    'client/views/admin/site_settings.js',
    'client/views/admin/pages/page_settings.html',
    'client/views/admin/pages/page_settings.js',
    'client/views/admin/pages/new_page.html',
    'client/views/admin/pages/new_page.js',
    'client/views/admin/pages/page_template_selector.html',
    'client/views/admin/pages/page_template_selector.js',
    'client/views/admin/assets.html',
    'client/views/admin/assets.js',
    'client/views/admin/admin_panel.html',
    'client/views/admin/admin_panel.js',
    'client/views/admin/blocks/block_edit.html',
    'client/views/admin/blocks/block_edit.js',
    'client/views/admin/blocks/block_zone_edit.html',
    'client/views/admin/blocks/block_zone_edit.js',
    'client/views/block_set.html',
    'client/views/block_display.js',
    'client/views/footer.js',
    'client/views/form/wysiwyg.html',
    'client/views/form/wysiwyg.js',
    'client/views/form/tag.html',
    'client/views/form/tag.js',
    'client/views/form/metadata.html',
    'client/views/form/metadata.js',
    'client/views/form/text.html',
    'client/views/form/textarea.html',
    'client/views/header.js',
    'client/views/layout.js',
    'client/index.html',
    'img/azimuth-logo.png',
    'img/buttons.png',
    'img/toolbar.gif',
    'img/file.gif',
    'img/image.gif',
    'img/file-large.png',
    'img/loading.gif',
  ], 'client');
});

