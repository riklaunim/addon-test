import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lte.daterange-form-field', 'Integration | Component | daterange form field', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lte.daterange-form-field}}`);

  assert.equal(this.$().find('.datetime-picker').length, 1);
});
