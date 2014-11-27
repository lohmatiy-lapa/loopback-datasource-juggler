var Types = {};
/**
 * Schema types
 */
Types.Text = function Text(value) {
  if (!(this instanceof Text)) {
    return value;
  }
  this.value = value;
}; // Text type

Types.Text.prototype.toObject = Types.Text.prototype.toJSON = function () {
  return this.value;
};

Types.JSON = function JSON(value) {
  if (!(this instanceof JSON)) {
    return value;
  }
  this.value = value;
}; // JSON Object
Types.JSON.prototype.toObject = Types.JSON.prototype.toJSON = function () {
  return this.value;
};

Types.Any = function Any(value) {
  if (!(this instanceof Any)) {
    return value;
  }
  this.value = value;
}; // Any Type
Types.Any.prototype.toObject = Types.Any.prototype.toJSON = function () {
  return this.value;
};

module.exports = function (modelTypes) {

  var GeoPoint = require('./geo').GeoPoint;

  for(var t in Types) {
    modelTypes[t] = Types[t];
  }

  modelTypes.schemaTypes = {};
  modelTypes.registerType = function (type, names) {
    names = names || [];
    if (type.name)
      names = names.concat([type.name]);
    for (var n = 0; n < names.length; n++) {
      this.schemaTypes[names[n].toLowerCase()] = type;
    }
  };

  modelTypes.registerType(Types.Text, ['Text']);
  modelTypes.registerType(Types.JSON, ['JSON']);
  modelTypes.registerType(Types.Any, ['Any']);

  modelTypes.registerType(String, ['String']);
  modelTypes.registerType(Number, ['Number']);
  modelTypes.registerType(Boolean, ['Boolean']);
  modelTypes.registerType(Date, ['Date']);
  modelTypes.registerType(Buffer, ['Binary', 'Buffer']);
  modelTypes.registerType(Array, ['Array']);
  modelTypes.registerType(GeoPoint, ['GeoPoint']);
  modelTypes.registerType(Object, ['Object']);
};

module.exports.Types = Types;