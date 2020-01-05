"use strict";

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _db = require("./util/db");

var _auth = require("./util/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();

var start =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db.connect)();

          case 2:
            app.listen(_config["default"].port, function () {
              return console.log('server is up and running at ' + _config["default"].port);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.post('/signup', _auth.signup);
app.post('/signin', _auth.signin);
app.use(_auth.protect);
app.get('/todo', function (req, res) {
  return res.sendFile(__dirname + '/public/todo.html');
});
start();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJzdGFydCIsImxpc3RlbiIsImNvbmZpZyIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwidXNlIiwiZXhwcmVzcyIsImpzb24iLCJwb3N0Iiwic2lnbnVwIiwic2lnbmluIiwicHJvdGVjdCIsImdldCIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwiX19kaXJuYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUNBLElBQU1BLEdBQUcsR0FBRywwQkFBWjs7QUFFQSxJQUFNQyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSixrQkFESTs7QUFBQTtBQUVWRCxZQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBV0MsbUJBQU9DLElBQWxCLEVBQXdCO0FBQUEscUJBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFpQ0gsbUJBQU9DLElBQXBELENBQU47QUFBQSxhQUF4Qjs7QUFGVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFMSCxLQUFLO0FBQUE7QUFBQTtBQUFBLEdBQVg7O0FBS0FELEdBQUcsQ0FBQ08sR0FBSixDQUFRLHVCQUFSO0FBQ0FQLEdBQUcsQ0FBQ08sR0FBSixDQUFRLHdCQUFPLEtBQVAsQ0FBUjtBQUNBUCxHQUFHLENBQUNPLEdBQUosQ0FBUUMsb0JBQVFDLElBQVIsRUFBUjtBQUVBVCxHQUFHLENBQUNVLElBQUosQ0FBUyxTQUFULEVBQW1CQyxZQUFuQjtBQUNBWCxHQUFHLENBQUNVLElBQUosQ0FBUyxTQUFULEVBQW9CRSxZQUFwQjtBQUVBWixHQUFHLENBQUNPLEdBQUosQ0FBUU0sYUFBUjtBQUNBYixHQUFHLENBQUNjLEdBQUosQ0FBUSxPQUFSLEVBQWlCLFVBQUNDLEdBQUQsRUFBS0MsR0FBTDtBQUFBLFNBQWFBLEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxTQUFTLEdBQUcsbUJBQXpCLENBQWI7QUFBQSxDQUFqQjtBQUdBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IGNvcnMgIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAnLi91dGlsL2RiJ1xyXG5pbXBvcnQgeyBzaWdudXAsIHNpZ25pbiwgcHJvdGVjdCB9IGZyb20gJy4vdXRpbC9hdXRoJztcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjb25uZWN0KCk7XHJcbiAgICBhcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAoKSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGlzIHVwIGFuZCBydW5uaW5nIGF0ICcgKyBjb25maWcucG9ydCkpXHJcbn1cclxuXHJcbmFwcC51c2UoY29ycygpKTtcclxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcblxyXG5hcHAucG9zdCgnL3NpZ251cCcsc2lnbnVwKTtcclxuYXBwLnBvc3QoJy9zaWduaW4nLCBzaWduaW4pO1xyXG5cclxuYXBwLnVzZShwcm90ZWN0KTtcclxuYXBwLmdldCgnL3RvZG8nLCAocmVxLHJlcykgPT4gcmVzLnNlbmRGaWxlKF9fZGlybmFtZSArICcvcHVibGljL3RvZG8uaHRtbCcpKTtcclxuXHJcblxyXG5zdGFydCgpOyJdfQ==