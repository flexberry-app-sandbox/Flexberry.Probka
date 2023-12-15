import { Serializer as СоставРасчетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probka-состав-расчета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставРасчетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
