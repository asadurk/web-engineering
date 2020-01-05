"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connect = function connect() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config["default"].dbUrl;
  return _mongoose["default"].connect(url, {});
};

exports.connect = connect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2RiLmpzIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJ1cmwiLCJvcHRpb25zIiwiZGJVcmwiLCJtb25nb29zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ08sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFDQyxHQUFELHVFQUFPQyxtQkFBUUMsS0FBZjtBQUFBLFNBQ25CQyxxQkFBU0osT0FBVCxDQUFpQkMsR0FBakIsRUFBc0IsRUFBdEIsQ0FEbUI7QUFBQSxDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vLi4vY29uZmlnJztcclxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSAodXJsID0gb3B0aW9ucy5kYlVybCkgPT4gXHJcbiAgICBtb25nb29zZS5jb25uZWN0KHVybCwge30pOyJdfQ==