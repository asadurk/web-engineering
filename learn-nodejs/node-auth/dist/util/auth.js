"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.protect = exports.signin = exports.newToken = exports.signup = void 0;

var _user = require("../resources/user/user.mode");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signup =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var user, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body.email || !req.body.password) {
              res.status(400).send({
                message: 'need email and password'
              });
            }

            _context.prev = 1;
            _context.next = 4;
            return _user.User.create(req.body);

          case 4:
            user = _context.sent;
            token = newToken(user);
            return _context.abrupt("return", res.status(200).send({
              token: token
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).send({
              messge: _context.t0.message
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var newToken = function newToken(user) {
  return _jsonwebtoken["default"].sign({
    id: user.id
  }, _config["default"].jwt, {
    expiresIn: "3d"
  });
};

exports.newToken = newToken;

var signin =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var user, match, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(400).send({
              'message': 'Please provide email and password'
            }));

          case 2:
            _context2.prev = 2;
            console.log(req.body.password);
            _context2.next = 6;
            return _user.User.findOne({
              email: req.body.email
            }).select('email password').exec();

          case 6:
            user = _context2.sent;

            if (user) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(400).send({
              'message': 'invalid email or password'
            }));

          case 9:
            _context2.next = 11;
            return user.checkPassword(req.body.password);

          case 11:
            match = _context2.sent;

            if (match) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(400).send({
              'message': 'invalid email or password'
            }));

          case 14:
            token = newToken(user);
            return _context2.abrupt("return", res.status(200).send({
              token: token
            }));

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](2);
            console.error(_context2.t0);
            res.status(500).end();

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 18]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;

var protect =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var bearer, token, payload, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bearer = req.headers.authorization;
            console.log('1');

            if (!(!bearer || !bearer.startsWith('Bearer '))) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", res.status(401).end());

          case 4:
            token = bearer.split('Bearer ')[1].trim();
            console.log('2');
            _context3.prev = 6;
            _context3.next = 9;
            return verifyToken(token);

          case 9:
            payload = _context3.sent;
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](6);
            return _context3.abrupt("return", res.status(401).end());

          case 15:
            console.log(payload);
            _context3.next = 18;
            return _user.User.findById(payload.id).select('-password').lean().exec();

          case 18:
            user = _context3.sent;

            if (user) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt("return", res.status(401).end());

          case 21:
            req.user = user;
            console.log('4');
            next();

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[6, 12]]);
  }));

  return function protect(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.protect = protect;

var verifyToken = function verifyToken(token) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].verify(token, _config["default"].jwt, function (err, payload) {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

exports.verifyToken = verifyToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2F1dGguanMiXSwibmFtZXMiOlsic2lnbnVwIiwicmVxIiwicmVzIiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsIlVzZXIiLCJjcmVhdGUiLCJ1c2VyIiwidG9rZW4iLCJuZXdUb2tlbiIsIm1lc3NnZSIsImp3dCIsInNpZ24iLCJpZCIsImVudkNvbmZpZyIsImV4cGlyZXNJbiIsInNpZ25pbiIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwic2VsZWN0IiwiZXhlYyIsImNoZWNrUGFzc3dvcmQiLCJtYXRjaCIsImVycm9yIiwiZW5kIiwicHJvdGVjdCIsIm5leHQiLCJiZWFyZXIiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsInRyaW0iLCJ2ZXJpZnlUb2tlbiIsInBheWxvYWQiLCJmaW5kQnlJZCIsImxlYW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInZlcmlmeSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUlPLElBQU1BLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCLGdCQUFHLENBQUNELEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxLQUFWLElBQW1CLENBQUNILEdBQUcsQ0FBQ0UsSUFBSixDQUFTRSxRQUFoQyxFQUEwQztBQUN0Q0gsY0FBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZ0JBQUFBLE9BQU8sRUFBRTtBQUFWLGVBQXJCO0FBQ0g7O0FBSGlCO0FBQUE7QUFBQSxtQkFLS0MsV0FBS0MsTUFBTCxDQUFZVCxHQUFHLENBQUNFLElBQWhCLENBTEw7O0FBQUE7QUFLUlEsWUFBQUEsSUFMUTtBQU1SQyxZ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Q0FTLFlBQUFBLElBQUk7O0FBM0JlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBELE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7OztBQThCQSxJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBMUIsS0FBSztBQUFBLFNBQzlCLElBQUk4QixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQy9CN0IsNkJBQUk4QixNQUFKLENBQVdqQyxLQUFYLEVBQWtCTSxtQkFBVUgsR0FBNUIsRUFBaUMsVUFBQytCLEdBQUQsRUFBTVAsT0FBTixFQUFrQjtBQUNqRCxVQUFJTyxHQUFKLEVBQVMsT0FBT0YsTUFBTSxDQUFDRSxHQUFELENBQWI7QUFDVEgsTUFBQUEsT0FBTyxDQUFDSixPQUFELENBQVA7QUFDRCxLQUhEO0FBSUQsR0FMRCxDQUQ4QjtBQUFBLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvdXNlci91c2VyLm1vZGVcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBlbnZDb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZighcmVxLmJvZHkuZW1haWwgfHwgIXJlcS5ib2R5LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe21lc3NhZ2U6ICduZWVkIGVtYWlsIGFuZCBwYXNzd29yZCd9KTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IG5ld1Rva2VuKHVzZXIpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7dG9rZW59KTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2dlOmUubWVzc2FnZX0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3VG9rZW4gPSB1c2VyID0+IHtcclxuICAgIHJldHVybiBqd3Quc2lnbih7aWQ6dXNlci5pZH0sIGVudkNvbmZpZy5qd3QsIHtleHBpcmVzSW46XCIzZFwifSApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbmluID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZighcmVxLmJvZHkuZW1haWwgfHwgISByZXEuYm9keS5wYXNzd29yZClcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeydtZXNzYWdlJzogJ1BsZWFzZSBwcm92aWRlIGVtYWlsIGFuZCBwYXNzd29yZCd9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkucGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCAgVXNlci5maW5kT25lKHtlbWFpbDpyZXEuYm9keS5lbWFpbH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdCgnZW1haWwgcGFzc3dvcmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leGVjKCk7XHJcbiAgICAgICAgaWYoIXVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsnbWVzc2FnZSc6ICdpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHVzZXIuY2hlY2tQYXNzd29yZChyZXEuYm9keS5wYXNzd29yZCk7XHJcbiAgICAgICAgaWYoIW1hdGNoKSBcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsnbWVzc2FnZSc6ICdpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJ30pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbmV3VG9rZW4odXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHt0b2tlbn0pO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvdGVjdCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgYmVhcmVyID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuICAgIGNvbnNvbGUubG9nKCcxJyk7XHJcbiAgICBpZiAoIWJlYXJlciB8fCAhYmVhcmVyLnN0YXJ0c1dpdGgoJ0JlYXJlciAnKSkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuZW5kKClcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB0b2tlbiA9IGJlYXJlci5zcGxpdCgnQmVhcmVyICcpWzFdLnRyaW0oKVxyXG4gICAgbGV0IHBheWxvYWRcclxuICAgIGNvbnNvbGUubG9nKCcyJyk7XHJcbiAgICB0cnkge1xyXG4gICAgcGF5bG9hZCA9IGF3YWl0IHZlcmlmeVRva2VuKHRva2VuKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5lbmQoKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChwYXlsb2FkLmlkKVxyXG4gICAgLnNlbGVjdCgnLXBhc3N3b3JkJylcclxuICAgIC5sZWFuKClcclxuICAgIC5leGVjKClcclxuICAgIFxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmVuZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVxLnVzZXIgPSB1c2VyXHJcbiAgICBjb25zb2xlLmxvZygnNCcpO1xyXG4gICAgbmV4dCgpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJpZnlUb2tlbiA9IHRva2VuID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgand0LnZlcmlmeSh0b2tlbiwgZW52Q29uZmlnLmp3dCwgKGVyciwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcclxuICAgICAgcmVzb2x2ZShwYXlsb2FkKVxyXG4gICAgfSlcclxuICB9KSJdfQ==