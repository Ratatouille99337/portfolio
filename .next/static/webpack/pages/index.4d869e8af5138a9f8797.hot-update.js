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
/* harmony import */ var F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var defaultData = [{
  name: "AdMetrixPro",
  text: "Open Source Projects"
}, {
  name: "45",
  text: "Github Followers"
}, {
  name: "75",
  text: "Github Stars"
}];

var Acomplishments = function Acomplishments() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultData),
      data = _useState[0],
      setData = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    (0,F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_portfolio_Tanveer_Portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_6__.BoxText, {
            children: card.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_6__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, index, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGVmYXVsdERhdGEiLCJuYW1lIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImdldEZvbGxvd2VycyIsInVzZXJEYXRhIiwibmV3Rm9sbG93ZXJzIiwibWFwIiwib2JqIiwibnVtYmVyIiwiZm9sbG93ZXJzIiwiY2FyZCIsImluZGV4IiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsTUFBSSxFQUFFLGFBQVI7QUFBdUJDLE1BQUksRUFBRTtBQUE3QixDQURrQixFQUVsQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGa0IsRUFHbEI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSGtCLENBQXBCOztBQU1BLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNIQywrQ0FBUSxDQUFDSixXQUFELENBREw7QUFBQSxNQUNwQkssSUFEb0I7QUFBQSxNQUNkQyxPQURjOztBQUczQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2Qsa1FBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2tDQyxZQUFZLEVBRDlDOztBQUFBO0FBQUE7QUFDZUMsc0JBRGYsdUJBQ1NKLElBRFQ7O0FBRUM7QUFDQSxrQkFBSUksUUFBSixFQUFjO0FBQ05DLDRCQURNLEdBQ1NMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBUztBQUNyQyxzQkFBSUEsR0FBRyxDQUFDVixJQUFKLEtBQWEsa0JBQWpCLEVBQXFDO0FBQ25DLDJEQUFZVSxHQUFaO0FBQWlCQyw0QkFBTSxFQUFFSixRQUFRLENBQUNLO0FBQWxDO0FBQ0Q7O0FBQ0QseUJBQU9GLEdBQVA7QUFDRCxpQkFMb0IsQ0FEVDtBQU9aTix1QkFBTyxDQUFDSSxZQUFELENBQVA7QUFDRDs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBYUQsR0FkUSxFQWNOLEVBZE0sQ0FBVDtBQWdCQSxzQkFDRSw4REFBQyw2REFBRDtBQUFBLDRCQUVFLDhEQUFDLHdEQUFEO0FBQUEsZ0JBQ0dMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNJLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNSLDhEQUFDLHNEQUFEO0FBQUEsa0NBQ0UsOERBQUMsMERBQUQ7QUFBQSxzQkFBVUQsSUFBSSxDQUFDZDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLHNCQUFVYyxJQUFJLENBQUNiO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVVjLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFVRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWpDRDs7R0FBTWIsYzs7S0FBQUEsYztBQW1DTiwrREFBZUEsY0FBZjs7QUFFQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFNBQU9TLDhDQUFBLENBQ0wscUNBREssQ0FFTDtBQUZLLEdBQVA7QUFJRCxDQUxEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRkODY5ZThhZjUxMzhhOWY4Nzk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSBcIi4vQWNvbXBsaXNobWVudHNTdHlsZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdERhdGEgPSBbXHJcbiAgeyBuYW1lOiBcIkFkTWV0cml4UHJvXCIsIHRleHQ6IFwiT3BlbiBTb3VyY2UgUHJvamVjdHNcIiB9LFxyXG4gIHsgbmFtZTogXCI0NVwiLCB0ZXh0OiBcIkdpdGh1YiBGb2xsb3dlcnNcIiB9LFxyXG4gIHsgbmFtZTogXCI3NVwiLCB0ZXh0OiBcIkdpdGh1YiBTdGFyc1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBBY29tcGxpc2htZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShkZWZhdWx0RGF0YSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHVzZXJEYXRhIH0gPSBhd2FpdCBnZXRGb2xsb3dlcnMoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlckRhdGEpO1xyXG4gICAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgICBjb25zdCBuZXdGb2xsb3dlcnMgPSBkYXRhLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBpZiAob2JqLnRleHQgPT09IFwiR2l0aHViIEZvbGxvd2Vyc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLm9iaiwgbnVtYmVyOiB1c2VyRGF0YS5mb2xsb3dlcnMgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RGF0YShuZXdGb2xsb3dlcnMpO1xyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uPlxyXG5cclxuICAgICAgPEJveGVzPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxCb3hUZXh0PntjYXJkLm5hbWV9PC9Cb3hUZXh0PlxyXG4gICAgICAgICAgICA8Qm94VGV4dD57Y2FyZC50ZXh0fTwvQm94VGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JveGVzPlxyXG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNvbXBsaXNobWVudHM7XHJcblxyXG5jb25zdCBnZXRGb2xsb3dlcnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcclxuICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy90YW52MzNcIlxyXG4gICAgLy8gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3RhbnYzMy9mb2xsb3dlcnM/cGVyX3BhZ2U9MTAwXCJcclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9