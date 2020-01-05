"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var env = process.env.NODE_ENV || 'development';
var envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    break;

  case 'test':
  case 'testing':
    envConfig = require('./testing').config;
    break;

  default:
    envConfig = require('./dev').config;
}

var _default = envConfig;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvaW5kZXguanMiXSwibmFtZXMiOlsiZW52IiwicHJvY2VzcyIsIk5PREVfRU5WIiwiZW52Q29uZmlnIiwicmVxdWlyZSIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUNELEdBQVIsQ0FBWUUsUUFBWixJQUF3QixhQUFwQztBQUVBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxRQUFRSCxHQUFSO0FBQ0UsT0FBSyxLQUFMO0FBQ0EsT0FBSyxhQUFMO0FBQ0VHLElBQUFBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBUCxDQUFpQkMsTUFBN0I7QUFFQTs7QUFDRixPQUFLLE1BQUw7QUFDQSxPQUFLLFNBQUw7QUFDRUYsSUFBQUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUFQLENBQXFCQyxNQUFqQztBQUNBOztBQUNGO0FBQ0VGLElBQUFBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBUCxDQUFpQkMsTUFBN0I7QUFYSjs7ZUFhZUYsUyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCdcclxuXHJcbmxldCBlbnZDb25maWcgPSB7fVxyXG5cclxuc3dpdGNoIChlbnYpIHtcclxuICBjYXNlICdkZXYnOlxyXG4gIGNhc2UgJ2RldmVsb3BtZW50JzpcclxuICAgIGVudkNvbmZpZyA9IHJlcXVpcmUoJy4vZGV2JykuY29uZmlnO1xyXG4gICAgXHJcbiAgICBicmVha1xyXG4gIGNhc2UgJ3Rlc3QnOlxyXG4gIGNhc2UgJ3Rlc3RpbmcnOlxyXG4gICAgZW52Q29uZmlnID0gcmVxdWlyZSgnLi90ZXN0aW5nJykuY29uZmlnO1xyXG4gICAgYnJlYWtcclxuICBkZWZhdWx0OlxyXG4gICAgZW52Q29uZmlnID0gcmVxdWlyZSgnLi9kZXYnKS5jb25maWc7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZW52Q29uZmlnO1xyXG4iXX0=