import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  calendarEvents: [],
  intl: Ember.inject.service(),
  didInsertElement: Ember.observer('calendarEvents', function() {
    let locale =  this.get('intl').get('locale');
    if (locale) {
      locale = locale[0];
    }
    let self = this;
    let calendar = $(this.$()).fullCalendar({
      header: {
        left: 'prev,next',
        center: 'title',
        right: ''
      },
      buttonText: {
        month: 'month'
      },
      height: 700,
      lang: locale,
      editable: false,
      eventClick: function(calendarEvent) {
        let route = calendarEvent.detailRoute;
        let object = calendarEvent.emberObject;
        if (route && object) {
          self.attrs.onClick(route, object);
        }
      }
    });
    calendar.fullCalendar('removeEvents');
    calendar.fullCalendar('addEventSource', this.get('calendarEvents'));
    calendar.fullCalendar('rerenderEvents');
  })
});
