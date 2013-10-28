
PageController = RouteController.extend({
  before: function() {
    var page_slug = this.params.page;
    var page = Azimuth.collections.Pages.findOne({slug: page_slug});
    if (page) {
      this.template = page.template;
    }
    this.render();

    this.render({
      header: {to: 'header'},
      footer: {to: 'footer'}
    })
  },
  notFoundTemplate: '404',
  data: function() {
    return Azimuth.collections.Pages.findOne({slug: this.params.page});
  },
  template: 'sidebar_left'
});

PageEditController = RouteController.extend({
  before: function() {
    var page_slug = this.params.page;
    var page = Azimuth.collections.Pages.findOne({slug: page_slug});
    if (!page) return false;
    
    // Add common edit page events
    Template[page.template + '_edit'].events = {
      'submit #pageEditForm': events.savePage,
      'click #deletePage': events.showDeletePageModal,
      'click .delete-page': events.deletePage
    }

    if(Roles.userIsInRole(Meteor.user(), ['admin', 'author'])) {
      this.template = page.template + '_edit';
      this.render();
    } else {
      this.template = 'not_authorized'
      this.render();
    }

    this.render({
      header: {to: 'header'},
      footer: {to: 'footer'}
    })
  },
  notFoundTemplate: '404',
  data: function() {
    return Azimuth.collections.Pages.findOne({slug: this.params.page});
  },
  template: 'sidebar_left'
});

HomePageController = RouteController.extend({
  before: function() {
    var page_slug = utils.getSetting('indexPage');
    var page = Azimuth.collections.Pages.findOne({slug: page_slug});
    if(!page) {
      page = Azimuth.collections.Pages.findOne();
      if (!page) return '404';
      else page_slug = page.slug;
    }

    this.template = page.template;

    this.render();

    this.render({
      header: {to: 'header'},
      footer: {to: 'footer'}
    })
  },
  notFoundTemplate: '404',
  template: 'sidebar_left'
});

AdminController = RouteController.extend({
  before: function() {
    if(Roles.userIsInRole(Meteor.user(), ['admin', 'author'])) {
      this.render();
    } else {
      this.template = 'not_authorized'
      this.render();
    }
    this.render({
      header: {to: 'header'},
      footer: {to: 'footer'}
    })
  },
  notFoundTemplate: '404'
});
