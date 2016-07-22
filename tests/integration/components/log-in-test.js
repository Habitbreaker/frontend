import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('log-in', 'Integration | Component | log in', {
  integration: true
});


test('should render input fields', function(assert) {
  this.render(hbs`{{log-in loggedOut=true}}`);
  let username = 'admin@localhost.de';
  let password = '1234';
  this.set('username', username);
  this.set('pwd', password);
  assert.equal(this.get('username'), username);
  assert.equal(this.get('pwd'), password);
});

test('should render account panel', function(assert) {
  this.render(hbs`{{log-in loggedOut=false avatarURL='http://localhost:8080/avatar/Default.jpeg'}}`);
  assert.equal(this.$('p:first-of-type').text(),'Welcome back');
  assert.equal(this.$('a').text(),' Account Log me out');
  assert.equal(this.$('#avatar-img').attr('src'),'http://localhost:8080/avatar/Default.jpeg');
});
