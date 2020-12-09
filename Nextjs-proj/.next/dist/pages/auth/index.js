'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _User = require('../../components/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexAuth = function indexAuth(props) {
    return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'The Auth Index page ', props.appname), _react2.default.createElement(_User2.default, { name: 'Max', age: 28 }));
};

indexAuth.getInitialProps = function (context) {

    console.log(context);
    var promise = new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
            resolve({ appname: 'Super App hello' });
        }, 1000);
    });
    return promise;
};

exports.default = indexAuth;