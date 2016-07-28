import moment from 'moment';
import $ from 'jquery';
import DatetimePicker from './base-datetime-picker';


export default DatetimePicker.extend({
  didInsertElement: function() {
    let date = this.get('date');
    if (date) {
      date = moment(date);
      this.updateInputField(date);
    } else {
      date = undefined;
    }
    let widget = $(this.$(this.get('inputSelector'))).daterangepicker(
      this.getConfig(date, date),
      date => {
        this.updateInputField(date);
        this.attrs.setDate(date);
      }
    );
    this.setWidget(widget);
  },
  getConfig: function(startDate, endDate) {
    let config = this._super(startDate, endDate);
    config['singleDatePicker'] = true;
    return config;
  },
  updateInputField(date) {
    let format = this.get('datetimeFormat');
    let dateString = date.format(format);
    this.$(this.get('inputSelector')).val(dateString);
  }
});
