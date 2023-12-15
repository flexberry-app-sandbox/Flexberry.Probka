import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probka-состав-расчета', 'Unit | Serializer | i-i-s-probka-состав-расчета', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probka-состав-расчета',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probka-тип',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
