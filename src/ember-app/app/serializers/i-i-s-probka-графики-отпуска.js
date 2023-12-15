import { Serializer as ГрафикиОтпускаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probka-графики-отпуска';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрафикиОтпускаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
