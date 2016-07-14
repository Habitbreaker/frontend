import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('online-users', 'Integration | Component | online users', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{online-users}}`);

  assert.equal(this.$().text().trim(), 'User online:');

  // Template block usage:
  this.render(hbs`
    {{#online-users}}
      template block text
    {{/online-users}}
  `);

  assert.equal(this.$().text().trim(), 'User online:');
});
