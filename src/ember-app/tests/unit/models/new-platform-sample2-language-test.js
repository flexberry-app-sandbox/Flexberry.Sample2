import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-sample2-language', 'Unit | Model | new-platform-sample2-language', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-sample2-author',
    'model:new-platform-sample2-book',
    'model:new-platform-sample2-country',
    'model:new-platform-sample2-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
