import moment from 'moment';
import $ from 'jquery';
import DatetimePicker from './base-datetime-picker';


export default DatetimePicker.extend({
  didInsertElement: function() {
    let startDate = this.get('startDate');
    let endDate = this.get('endDate');
    if (startDate && endDate) {
      startDate = moment(startDate);
      endDate = moment(endDate);
      this.updateInputField(startDate, endDate);
    } else {
      startDate = undefined;
      endDate = undefined;
    }
    let widget = $(this.$(this.get('inputSelector'))).daterangepicker(
      this.getConfig(startDate, endDate),
      (start, end) => {
        this.updateInputField(start, end);
        this.attrs.setDateRange(start, end);
      }
    );
    this.setWidget(widget);
  },
  getConfig: function(startDate, endDate) {
    let config = this._super(startDate, endDate);
    config['ranges'] = {
      [this.get('intl').t('components.thisWeek')]: [moment().startOf('week'), moment().endOf('week')],
      [this.get('intl').t('components.nextWeek')]: [moment().endOf('week').add(1, 'days').startOf('week'), moment().endOf('week').add(1, 'days').endOf('week')],
      [this.get('intl').t('components.month')]: [moment(), moment().add(1, 'month')],
      [this.get('intl').t('components.year')]: [moment(), moment().add(1, 'year')]
    };
    return config;
  },
  updateInputField(start, end) {
    let format = this.get('datetimeFormat');
    let startString = start.format(format);
    let endString = end.format(format);
    this.$(this.get('inputSelector')).val(`${startString} - ${endString}`);
  }
});
