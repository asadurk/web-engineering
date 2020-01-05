"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var config = {
  dbUrl: process.env.DEV_DB_URL,
  jwt: process.env.DEV_JWT,
  port: process.env.DEV_PORT
};
exports.config = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZGV2LmpzIl0sIm5hbWVzIjpbImRvdGVudiIsImNvbmZpZyIsImRiVXJsIiwicHJvY2VzcyIsImVudiIsIkRFVl9EQl9VUkwiLCJqd3QiLCJERVZfSldUIiwicG9ydCIsIkRFVl9QT1JUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQUEsbUJBQU9DLE1BQVA7O0FBQ08sSUFBTUEsTUFBTSxHQUFHO0FBQ3BCQyxFQUFBQSxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQURDO0FBRXBCQyxFQUFBQSxHQUFHLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUZHO0FBR3BCQyxFQUFBQSxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSztBQUhFLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmRvdGVudi5jb25maWcoKTtcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBkYlVybDogcHJvY2Vzcy5lbnYuREVWX0RCX1VSTCxcclxuICBqd3Q6IHByb2Nlc3MuZW52LkRFVl9KV1QsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuREVWX1BPUlRcclxufVxyXG4iXX0=