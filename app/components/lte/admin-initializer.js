import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    jQuery.AdminLTE.init();
  },
  willDestroyElement() {
    let options = jQuery.AdminLTE.options;
    if (options.sidebarPushMenu) {
      $(document).off('click', options.sidebarToggleSelector);
    }
  }
});
