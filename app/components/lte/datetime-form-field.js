import moment from 'moment';
import $ from 'jquery';
import DatetimePicker from './base-datetime-picker';

export default DatetimePicker.extend({
  datetimeFormat: "YYYY-MM-DD HH:mm Z",
  didInsertElement: function() {
    let datetime = this.get('datetime');
    if (datetime) {
      datetime = moment(datetime);
      this.updateInputField(datetime);
    } else {
      datetime = undefined;
    }
    let widget = $(this.$(this.get('inputSelector'))).daterangepicker(
      this.getConfig(datetime, datetime),
      datetime => {
        this.updateInputField(datetime);
        this.attrs.setDatetime(datetime);
      }
    );
    this.setWidget(widget);
  },
  getConfig: function(startDate, endDate) {
    let config = this._super(startDate, endDate);
    config['singleDatePicker'] = true;
    config['timePicker'] = true;
    config['minDate'] = moment();
    return config;
  },
  updateInputField(datetime) {
    let format = this.get('datetimeFormat');
    let dateTimeString = datetime.format(format);
    this.$(this.get('inputSelector')).val(dateTimeString);
  }
});
