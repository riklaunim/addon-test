import DateRangeField from './daterange-form-field';


export default DateRangeField.extend({
  datetimeFormat: "YYYY-MM-DD HH:mm Z",
  getConfig: function(startDate, endDate) {
    let config = this._super(startDate, endDate);
    config['timePicker'] = true;
    return config;
  }
});
