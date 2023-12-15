import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  взносы: DS.attr('decimal'),
  всего: DS.attr('decimal'),
  наименование: DS.attr('decimal'),
  ндфл: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  тип: DS.attr('i-i-s-probka-тип'),
  расчетныйЛист: DS.belongsTo('i-i-s-probka-расчетный-лист', { inverse: 'составРасчета', async: false })
});

export let ValidationRules = {
  взносы: {
    descriptionKey: 'models.i-i-s-probka-состав-расчета.validations.взносы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  всего: {
    descriptionKey: 'models.i-i-s-probka-состав-расчета.validations.всего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-probka-состав-расчета.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ндфл: {
    descriptionKey: 'models.i-i-s-probka-состав-расчета.validations.ндфл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-probka-состав-расчета.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-probka-состав-расчета.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетныйЛист: {
    descriptionKey: 'models.i-i-s-probka-состав-расчета.validations.расчетныйЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставРасчетаE', 'i-i-s-probka-состав-расчета', {
    тип: attr('Тип', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    ндфл: attr('Ндфл', { index: 3 }),
    взносы: attr('Взносы', { index: 4 }),
    всего: attr('Всего', { index: 5 })
  });
};
