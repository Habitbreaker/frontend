import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
normalizeFindRecordResponse(store, type, payload) {
  var response = {
    data: {
      id: payload[0].id,
      type: type.modelName,
      attributes: {
        username: payload[0].username,
        password: payload[0].password,
        status: payload[0].status
      }
    }
  };
  return response;
}
});
