"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); // userSchema.pre('save', (next) => {
//     bcrypt.hash(this.password, 8, (err, hash) => {
//         if(err) return next(err);
//         this.password = hash;
//         next();
//     });
// });

userSchema.methods.checkPassword = function (password) {
  console.log('checkPassword');
  console.log(this);
  var userPassword = this.password;
  return new Promise(function (resolve, reject) {
    if (password == userPassword) resolve(true);else reject(false);
  });
};

var User = _mongoose["default"].model('user', userSchema);

exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvdXNlci91c2VyLm1vZGUuanMiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInRpbWVzdGFtcHMiLCJtZXRob2RzIiwiY2hlY2tQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyUGFzc3dvcmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIlVzZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLElBQUlDLHFCQUFTQyxNQUFiLENBQW9CO0FBQ25DQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsSUFBSSxFQUFFQyxNQURIO0FBRUhDLElBQUFBLFFBQVEsRUFBRSxJQUZQO0FBR0hDLElBQUFBLE1BQU0sRUFBRTtBQUhMLEdBRDRCO0FBTW5DQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkosSUFBQUEsSUFBSSxFQUFDQyxNQURDO0FBRU5DLElBQUFBLFFBQVEsRUFBRTtBQUZKO0FBTnlCLENBQXBCLEVBVWhCO0FBQUNHLEVBQUFBLFVBQVUsRUFBQztBQUFaLENBVmdCLENBQW5CLEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVQsVUFBVSxDQUFDVSxPQUFYLENBQW1CQyxhQUFuQixHQUFtQyxVQUFVSCxRQUFWLEVBQW9CO0FBQ25ESSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQSxNQUFNQyxZQUFZLEdBQUcsS0FBS04sUUFBMUI7QUFDQSxTQUFPLElBQUlPLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBR1QsUUFBUSxJQUFJTSxZQUFmLEVBQTZCRSxPQUFPLENBQUMsSUFBRCxDQUFQLENBQTdCLEtBQ0tDLE1BQU0sQ0FBQyxLQUFELENBQU47QUFDUixHQUhNLENBQVA7QUFLSCxDQVREOztBQVdPLElBQU1DLElBQUksR0FBR2pCLHFCQUFTa0IsS0FBVCxDQUFlLE1BQWYsRUFBdUJuQixVQUF2QixDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbn0sIHt0aW1lc3RhbXBzOnRydWV9KTtcclxuXHJcbi8vIHVzZXJTY2hlbWEucHJlKCdzYXZlJywgKG5leHQpID0+IHtcclxuLy8gICAgIGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDgsIChlcnIsIGhhc2gpID0+IHtcclxuLy8gICAgICAgICBpZihlcnIpIHJldHVybiBuZXh0KGVycik7XHJcbi8vICAgICAgICAgdGhpcy5wYXNzd29yZCA9IGhhc2g7XHJcbi8vICAgICAgICAgbmV4dCgpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxudXNlclNjaGVtYS5tZXRob2RzLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjaGVja1Bhc3N3b3JkJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmKHBhc3N3b3JkID09IHVzZXJQYXNzd29yZCkgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICBlbHNlIHJlamVjdChmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTsiXX0=