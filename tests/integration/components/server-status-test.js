import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('server-status', 'Integration | Component | server status', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{server-status}}`);

  assert.notEqual(this.$().text().length, 0);

  // Template block usage:
  this.render(hbs`
    {{#server-status}}
      template block text
    {{/server-status}}
  `);

  assert.notEqual(this.$().text().trim(), 'template block text');
});
