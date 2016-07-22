import { test } from 'qunit';
import moduleForAcceptance from 'my-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | register');

test('visiting /register', function(assert) {
  visit('/register');

  andThen(function() {
    assert.equal(currentURL(), '/register');
  });
});

test('should render 3 input fields', function(assert) {
  visit('/register');

  andThen(function() {
    assert.equal(this.$('.register > form > input').length, 3);
  });
});

test('should render button', function(assert) {
  visit('/register');

  andThen(function() {
    assert.equal(this.$('.register > div > button').length, 1);
  });
});
