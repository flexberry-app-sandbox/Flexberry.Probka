import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probka-состав-расчета', 'Unit | Model | i-i-s-probka-состав-расчета', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probka-графики-отпуска',
    'model:i-i-s-probka-должности',
    'model:i-i-s-probka-отделы',
    'model:i-i-s-probka-расчетный-лист',
    'model:i-i-s-probka-согласие-на-опд',
    'model:i-i-s-probka-состав-расчета',
    'model:i-i-s-probka-сотрудники',
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
