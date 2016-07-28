import Ember from 'ember';


export default Ember.Component.extend({
  widget: undefined,
  datetimeFormat: "YYYY-MM-DD",
  layoutName: 'components/lte/base-datetime-picker',
  inputClass: 'datetime-picker',
  intl: Ember.inject.service(),
  classNames: ['datetime-field'],
  inputSelector: Ember.computed('inputClass', function() {
    let inputClass = this.get('inputClass');
    return `.${inputClass}`;
  }),
  setWidget: function(widget) {
    this.set('widget', widget);
  },
  getConfig: function(startDate, endDate) {
    return {
      startDate: startDate,
      endDate: endDate,
      autoUpdateInput: false,
      timePicker24Hour: true,
      timePickerIncrement: 30,
      linkedCalendars: false,
      locale: {
        format: this.get('datetimeFormat'),
        cancelLabel: this.get('intl').t('components.cancel'),
        applyLabel: this.get('intl').t('components.apply'),
        customRangeLabel: this.get('intl').t('components.customDateRange')
      }
    };
  },
  willDestroyElement: function() {
    this.get('widget').data('daterangepicker').remove();
  },
  actions: {
    showPicker: function() {
      this.get('widget').click();
    }
  }
});
