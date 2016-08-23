import Ember from 'ember';

export default Ember.Component.extend({
  validator: undefined,
  classNames:['form-group'],
  classNameBindings: ['shouldShow:has-error'],
  pressed: false,
  loading: false,
  keyPress: function () {
    this.set('pressed', true);
  },
  invalidMessage: Ember.computed('shouldShow', 'validator.message', function () {
    if (this.get('shouldShow')) {
      return this.get('validator.message');
    }
  }),
  shouldShow: Ember.computed('pressed', 'validator.isValid', 'modelValid', 'showErrorIfValue', 'loading', function () {
    return (this.get('pressed') || !this.get('modelValid') || this.get('showErrorIfValue')) && !this.get('validator.isValid') && !this.get('loading');
  }),
  formRefreshed: Ember.observer('refresh', function () {
    this.set('pressed', false);
  })
});
