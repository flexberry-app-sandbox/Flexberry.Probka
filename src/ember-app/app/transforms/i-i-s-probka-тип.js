import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипEnum from '../enums/i-i-s-probka-тип';

export default FlexberryEnum.extend({
  enum: ТипEnum,
  sourceType: 'IIS.Probka.Тип'
});
