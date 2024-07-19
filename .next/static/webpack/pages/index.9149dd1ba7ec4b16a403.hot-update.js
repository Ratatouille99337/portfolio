self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "F:\\portfolio\\Tanveer-Portfolio\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var defaultData = [(0,F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({
  text: "AdMetrixPro"
}, "text", "Open Source Projects"), {
  number: 45,
  text: "Github Followers"
}, {
  number: 75,
  text: "Github Stars"
}];

var Acomplishments = function Acomplishments() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultData),
      data = _useState[0],
      setData = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    (0,F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _yield$getFollowers, userData, newFollowers;

      return F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getFollowers();

            case 2:
              _yield$getFollowers = _context.sent;
              userData = _yield$getFollowers.data;

              // console.log(userData);
              if (userData) {
                newFollowers = data.map(function (obj) {
                  if (obj.text === "Github Followers") {
                    return _objectSpread(_objectSpread({}, obj), {}, {
                      number: userData.followers
                    });
                  }

                  return obj;
                });
                setData(newFollowers);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_6__.Boxes, {
      children: data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_6__.Box, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_6__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(Acomplishments, "87tOMxDyrXjhvx/2R56y0S2mjEo=");

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var getFollowers = function getFollowers() {
  return axios__WEBPACK_IMPORTED_MODULE_7__.default.get("https://api.github.com/users/tanv33" // "https://api.github.com/users/tanv33/followers?per_page=100"
  );
};

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGVmYXVsdERhdGEiLCJ0ZXh0IiwibnVtYmVyIiwiQWNvbXBsaXNobWVudHMiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZ2V0Rm9sbG93ZXJzIiwidXNlckRhdGEiLCJuZXdGb2xsb3dlcnMiLCJtYXAiLCJvYmoiLCJmb2xsb3dlcnMiLCJjYXJkIiwiaW5kZXgiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUFDO0FBQ2pCQyxNQUFJLEVBQUU7QUFEVSxXQUNXLHNCQURYLEdBRWxCO0FBQUVDLFFBQU0sRUFBRSxFQUFWO0FBQWNELE1BQUksRUFBRTtBQUFwQixDQUZrQixFQUdsQjtBQUFFQyxRQUFNLEVBQUUsRUFBVjtBQUFjRCxNQUFJLEVBQUU7QUFBcEIsQ0FIa0IsQ0FBcEI7O0FBTUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLENBQUNKLFdBQUQsQ0FETDtBQUFBLE1BQ3BCSyxJQURvQjtBQUFBLE1BQ2RDLE9BRGM7O0FBRzNCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxrUUFBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDa0NDLFlBQVksRUFEOUM7O0FBQUE7QUFBQTtBQUNlQyxzQkFEZix1QkFDU0osSUFEVDs7QUFFQztBQUNBLGtCQUFJSSxRQUFKLEVBQWM7QUFDTkMsNEJBRE0sR0FDU0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ3JDLHNCQUFJQSxHQUFHLENBQUNYLElBQUosS0FBYSxrQkFBakIsRUFBcUM7QUFDbkMsMkRBQVlXLEdBQVo7QUFBaUJWLDRCQUFNLEVBQUVPLFFBQVEsQ0FBQ0k7QUFBbEM7QUFDRDs7QUFDRCx5QkFBT0QsR0FBUDtBQUNELGlCQUxvQixDQURUO0FBT1pOLHVCQUFPLENBQUNJLFlBQUQsQ0FBUDtBQUNEOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFhRCxHQWRRLEVBY04sRUFkTSxDQUFUO0FBZ0JBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQUEsNEJBRUUsOERBQUMsd0RBQUQ7QUFBQSxnQkFDR0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0csSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ1IsOERBQUMsc0RBQUQ7QUFBQSxpQ0FFRSw4REFBQywwREFBRDtBQUFBLHNCQUFVRCxJQUFJLENBQUNiO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFdBQVVjLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFVRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWpDRDs7R0FBTVosYzs7S0FBQUEsYztBQW1DTiwrREFBZUEsY0FBZjs7QUFFQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFNBQU9RLDhDQUFBLENBQ0wscUNBREssQ0FFTDtBQUZLLEdBQVA7QUFJRCxDQUxEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxNDlkZDFiYTdlYzRiMTZhNDAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSBcIi4vQWNvbXBsaXNobWVudHNTdHlsZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdERhdGEgPSBbXHJcbiAgeyB0ZXh0OiBcIkFkTWV0cml4UHJvXCIsIHRleHQ6IFwiT3BlbiBTb3VyY2UgUHJvamVjdHNcIiB9LFxyXG4gIHsgbnVtYmVyOiA0NSwgdGV4dDogXCJHaXRodWIgRm9sbG93ZXJzXCIgfSxcclxuICB7IG51bWJlcjogNzUsIHRleHQ6IFwiR2l0aHViIFN0YXJzXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGRlZmF1bHREYXRhKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogdXNlckRhdGEgfSA9IGF3YWl0IGdldEZvbGxvd2VycygpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XHJcbiAgICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0ZvbGxvd2VycyA9IGRhdGEubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGlmIChvYmoudGV4dCA9PT0gXCJHaXRodWIgRm9sbG93ZXJzXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4ub2JqLCBudW1iZXI6IHVzZXJEYXRhLmZvbGxvd2VycyB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXREYXRhKG5ld0ZvbGxvd2Vycyk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24+XHJcblxyXG4gICAgICA8Qm94ZXM+XHJcbiAgICAgICAge2RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94ZXM+XHJcbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcclxuXHJcbmNvbnN0IGdldEZvbGxvd2VycyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFxyXG4gICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3RhbnYzM1wiXHJcbiAgICAvLyBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvdGFudjMzL2ZvbGxvd2Vycz9wZXJfcGFnZT0xMDBcIlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=