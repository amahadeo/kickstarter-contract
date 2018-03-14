webpackHotUpdate(5,{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(396);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/anthony/projects/kickstarter-contract/pages/index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;

                console.log(campaigns);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Campaigns Index!");
    }
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhbXBhaWduSW5kZXgiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiY2FtcGFpZ25zIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7Ozs7OztJQUVkLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBRXNCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7bUJBQXpEO0EscUNBRU47O3dCQUFBLEFBQVEsSUFBUixBQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR0wsQUFDUDs2QkFBTyxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs7QUFUeUIsQSxBQVk1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbnRob255L3Byb2plY3RzL2tpY2tzdGFydGVyLWNvbnRyYWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/anthony/projects/kickstarter-contract/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/anthony/projects/kickstarter-contract/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (true) {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file utils.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var _ = __webpack_require__(393);
var BN = __webpack_require__(395);
var numberToBN = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"number-to-bn\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var utf8 = __webpack_require__(410);
var Hash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"eth-lib/src/hash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/**
 * Returns true if object is BN, otherwise false
 *
 * @method isBN
 * @param {Object} object
 * @return {Boolean}
 */
var isBN = function (object) {
    return object instanceof BN ||
        (object && object.constructor && object.constructor.name === 'BN');
};

/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 * @param {Object} object
 * @return {Boolean}
 */
var isBigNumber = function (object) {
    return object && object.constructor && object.constructor.name === 'BigNumber';
};

/**
 * Takes an input and transforms it into an BN
 *
 * @method toBN
 * @param {Number|String|BN} number, string, HEX string or BN
 * @return {BN} BN
 */
var toBN = function(number){
    try {
        return numberToBN.apply(null, arguments);
    } catch(e) {
        throw new Error(e + ' Given value: "'+ number +'"');
    }
};


/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX address
 * @return {Boolean}
 */
var isAddress = function (address) {
    // check if it has the basic requirements of an address
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        return false;
        // If it's ALL lowercase or ALL upppercase
    } else if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
        return true;
        // Otherwise check each case
    } else {
        return checkAddressChecksum(address);
    }
};



/**
 * Checks if the given string is a checksummed address
 *
 * @method checkAddressChecksum
 * @param {String} address the given HEX address
 * @return {Boolean}
 */
var checkAddressChecksum = function (address) {
    // Check each case
    address = address.replace(/^0x/i,'');
    var addressHash = sha3(address.toLowerCase()).replace(/^0x/i,'');

    for (var i = 0; i < 40; i++ ) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
};

/**
 * Should be called to pad string to expected length
 *
 * @method leftPad
 * @param {String} string to be padded
 * @param {Number} chars that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
var leftPad = function (string, chars, sign) {
    var hasPrefix = /^0x/i.test(string) || typeof string === 'number';
    string = string.toString(16).replace(/^0x/i,'');

    var padding = (chars - string.length + 1 >= 0) ? chars - string.length + 1 : 0;

    return (hasPrefix ? '0x' : '') + new Array(padding).join(sign ? sign : "0") + string;
};

/**
 * Should be called to pad string to expected length
 *
 * @method rightPad
 * @param {String} string to be padded
 * @param {Number} chars that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
var rightPad = function (string, chars, sign) {
    var hasPrefix = /^0x/i.test(string) || typeof string === 'number';
    string = string.toString(16).replace(/^0x/i,'');

    var padding = (chars - string.length + 1 >= 0) ? chars - string.length + 1 : 0;

    return (hasPrefix ? '0x' : '') + string + (new Array(padding).join(sign ? sign : "0"));
};


/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method utf8ToHex
 * @param {String} str
 * @returns {String} hex representation of input string
 */
var utf8ToHex = function(str) {
    str = utf8.encode(str);
    var hex = "";

    // remove \u0000 padding from either side
    str = str.replace(/^(?:\u0000)*/,'');
    str = str.split("").reverse().join("");
    str = str.replace(/^(?:\u0000)*/,'');
    str = str.split("").reverse().join("");

    for(var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        // if (code !== 0) {
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
        // }
    }

    return "0x" + hex;
};

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method hexToUtf8
 * @param {String} hex
 * @returns {String} ascii string representation of hex value
 */
var hexToUtf8 = function(hex) {
    if (!isHex(hex))
        throw new Error('The parameter "'+ hex +'" must be a valid HEX string.');

    var str = "";
    var code = 0;
    hex = hex.replace(/^0x/i,'');

    // remove 00 padding from either side
    hex = hex.replace(/^(?:00)*/,'');
    hex = hex.split("").reverse().join("");
    hex = hex.replace(/^(?:00)*/,'');
    hex = hex.split("").reverse().join("");

    var l = hex.length;

    for (var i=0; i < l; i+=2) {
        code = parseInt(hex.substr(i, 2), 16);
        // if (code !== 0) {
        str += String.fromCharCode(code);
        // }
    }

    return utf8.decode(str);
};


/**
 * Converts value to it's number representation
 *
 * @method hexToNumber
 * @param {String|Number|BN} value
 * @return {String}
 */
var hexToNumber = function (value) {
    if (!value) {
        return value;
    }

    return toBN(value).toNumber();
};

/**
 * Converts value to it's decimal representation in string
 *
 * @method hexToNumberString
 * @param {String|Number|BN} value
 * @return {String}
 */
var hexToNumberString = function (value) {
    if (!value) return value;

    return toBN(value).toString(10);
};


/**
 * Converts value to it's hex representation
 *
 * @method numberToHex
 * @param {String|Number|BN} value
 * @return {String}
 */
var numberToHex = function (value) {
    if (!isFinite(value) && !_.isString(value)) {
        return value;
    }

    var number = toBN(value);
    var result = number.toString(16);

    return number.lt(new BN(0)) ? '-0x' + result.substr(1) : '0x' + result;
};


/**
 * Convert a byte array to a hex string
 *
 * Note: Implementation from crypto-js
 *
 * @method bytesToHex
 * @param {Array} bytes
 * @return {String} the hex string
 */
var bytesToHex = function(bytes) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
        /* jshint ignore:start */
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
        /* jshint ignore:end */
    }
    return '0x'+ hex.join("");
};

/**
 * Convert a hex string to a byte array
 *
 * Note: Implementation from crypto-js
 *
 * @method hexToBytes
 * @param {string} hex
 * @return {Array} the byte array
 */
var hexToBytes = function(hex) {
    hex = hex.toString(16);

    if (!isHex(hex)) {
        throw new Error('Given value "'+ hex +'" is not a valid hex string.');
    }

    hex = hex.replace(/^0x/i,'');

    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
};

/**
 * Auto converts any given value into it's hex representation.
 *
 * And even stringifys objects before.
 *
 * @method toHex
 * @param {String|Number|BN|Object} value
 * @param {Boolean} returnType
 * @return {String}
 */
var toHex = function (value, returnType) {
    /*jshint maxcomplexity: false */

    if (isAddress(value)) {
        return returnType ? 'address' : '0x'+ value.toLowerCase().replace(/^0x/i,'');
    }

    if (_.isBoolean(value)) {
        return returnType ? 'bool' : value ? '0x01' : '0x00';
    }


    if (_.isObject(value) && !isBigNumber(value) && !isBN(value)) {
        return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
    }

    // if its a negative number, pass it through numberToHex
    if (_.isString(value)) {
        if (value.indexOf('-0x') === 0 || value.indexOf('-0X') === 0) {
            return returnType ? 'int256' : numberToHex(value);
        } else if(value.indexOf('0x') === 0 || value.indexOf('0X') === 0) {
            return returnType ? 'bytes' : value;
        } else if (!isFinite(value)) {
            return returnType ? 'string' : utf8ToHex(value);
        }
    }

    return returnType ? (value < 0 ? 'int256' : 'uint256') : numberToHex(value);
};


/**
 * Check if string is HEX
 *
 * @method isHex
 * @param {String} hex to be checked
 * @returns {Boolean}
 */
var isHex = function (hex) {
    return ((_.isString(hex) || _.isNumber(hex)) && /^(-)?0x[0-9a-f]+$/i.test(hex));
};


/**
 * Returns true if given string is a valid Ethereum block header bloom.
 *
 * TODO UNDOCUMENTED
 *
 * @method isBloom
 * @param {String} hex encoded bloom filter
 * @return {Boolean}
 */
var isBloom = function (bloom) {
    if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
        return true;
    }
    return false;
};

/**
 * Returns true if given string is a valid log topic.
 *
 * TODO UNDOCUMENTED
 *
 * @method isTopic
 * @param {String} hex encoded topic
 * @return {Boolean}
 */
var isTopic = function (topic) {
    if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
        return true;
    }
    return false;
};


/**
 * Hashes values to a sha3 hash using keccak 256
 *
 * To hash a HEX string the hex must have 0x in front.
 *
 * @method sha3
 * @return {String} the sha3 string
 */
var SHA3_NULL_S = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';

var sha3 = function (value) {
    if (isHex(value) && /^0x/i.test((value).toString())) {
        value = hexToBytes(value);
    }

    var returnValue = Hash.keccak256(value); // jshint ignore:line

    if(returnValue === SHA3_NULL_S) {
        return null;
    } else {
        return returnValue;
    }
};
// expose the under the hood keccak256
sha3._Hash = Hash;


module.exports = {
    BN: BN,
    isBN: isBN,
    isBigNumber: isBigNumber,
    toBN: toBN,
    isAddress: isAddress,
    isBloom: isBloom, // TODO UNDOCUMENTED
    isTopic: isTopic, // TODO UNDOCUMENTED
    checkAddressChecksum: checkAddressChecksum,
    utf8ToHex: utf8ToHex,
    hexToUtf8: hexToUtf8,
    hexToNumber: hexToNumber,
    hexToNumberString: hexToNumberString,
    numberToHex: numberToHex,
    toHex: toHex,
    hexToBytes: hexToBytes,
    bytesToHex: bytesToHex,
    isHex: isHex,
    leftPad: leftPad,
    rightPad: rightPad,
    sha3: sha3
};


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    Buffer = __webpack_require__(409).Buffer;
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
    }

    if (base === 16) {
      this._parseHex(number, start);
    } else {
      this._parseBase(number, base, start);
    }

    if (number[0] === '-') {
      this.negative = 1;
    }

    this.strip();

    if (endian !== 'le') return;

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex (str, start, end) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r <<= 4;

      // 'a' - 'f'
      if (c >= 49 && c <= 54) {
        r |= c - 49 + 0xa;

      // 'A' - 'F'
      } else if (c >= 17 && c <= 22) {
        r |= c - 17 + 0xa;

      // '0' - '9'
      } else {
        r |= c & 0xf;
      }
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    // Scan 24-bit chunks and add them to the number
    var off = 0;
    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
      w = parseHex(number, i, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
    if (i + 6 !== start) {
      w = parseHex(number, start, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    }
    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      r.strip();
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})(typeof module === 'undefined' || module, this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)(module)))

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(397);

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = __webpack_require__(412);

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), "0xd279c61bE7C4C861597c9b25C0217A9e8aca01d2");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQURlLFlBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW50aG9ueS9wcm9qZWN0cy9raWNrc3RhcnRlci1jb250cmFjdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/anthony/projects/kickstarter-contract/ethereum/factory.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/anthony/projects/kickstarter-contract/ethereum/factory.js"); } } })();

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(398);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default(window.web3.currentProvider);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBTSxPQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFiLEFBRUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbnRob255L3Byb2plY3RzL2tpY2tzdGFydGVyLWNvbnRyYWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/anthony/projects/kickstarter-contract/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/anthony/projects/kickstarter-contract/ethereum/web3.js"); } } })();

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Gav Wood <gav@ethcore.io>
 *   Jeffrey Wilcke <jeffrey.wilcke@ethereum.org>
 *   Marek Kotewicz <marek@ethcore.io>
 *   Marian Oancea <marian@ethereum.org>
 * @date 2017
 */




var version = __webpack_require__(399);
var core = __webpack_require__(400);

var Eth = __webpack_require__(402);
var Net = __webpack_require__(404);
var Personal = __webpack_require__(405);
var Shh = __webpack_require__(406);
var Bzz = __webpack_require__(407);

var utils = __webpack_require__(408);



var Web3 = function Web3() {

    // sets _requestmanager etc
    core.packageInit(this, arguments);

    this.version = version.version;


    this.eth = new Eth(this);
    this.shh = new Shh(this);
    this.bzz = new Bzz(this);

    this.utils = utils;

    // overwrite package setProvider
    this.setProvider = function (provider, net) {
        this._requestManager.setProvider(provider, net);
        this._provider = this._requestManager.provider;

        this.eth.setProvider(provider, net);
        this.eth.net.setProvider(provider, net);
        this.eth.personal.setProvider(provider, net);

        this.shh.setProvider(provider, net);
        this.shh.net.setProvider(provider, net);

        this.bzz.setProvider(provider);

        return true;
    };
};

Web3.prototype.version = version.version;

core.addProviders(Web3);


Web3.modules = {
    Eth: Eth,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};



module.exports = Web3;



/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = {"version":"1.0.0-beta2","lerna":"2.0.0","packages":["packages/*"]}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */




var requestManager = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-requestManager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var extend = __webpack_require__(401);

module.exports = {
    packageInit: function (pkg, args) {
        args = Array.prototype.slice.call(args);

        if (!pkg) {
            throw new Error('You need to instantiate using the "new" keyword.');
        }

        // if (!args[0]) {
        //     throw new Error('You must pass in a provider as argument!');
        // }

        // make write only property of pkg.provider
        Object.defineProperty(pkg, 'currentProvider', {
            get: function () {
                return pkg._provider;
            },
            set: function () {
                return pkg._provider;
            },
            enumerable: true
        });

        // inherit from web3 umbrella package
        if (args[0] && args[0]._requestManager) {
            pkg._requestManager = new requestManager.Manager(args[0].currentProvider);

        // set requestmanager on package
        } else {
            pkg._requestManager = new requestManager.Manager();
            pkg._requestManager.setProvider(args[0], args[1]);
        }

        // add givenProvider
        pkg.givenProvider = requestManager.Manager.givenProvider;
        pkg.providers = requestManager.Manager.providers;

         pkg._provider =  pkg._requestManager.provider;

        // add SETPROVIDER function
        pkg.setProvider = function (provider, net) {
            pkg._requestManager.setProvider(provider, net);
            pkg._provider = pkg._requestManager.provider;
            return true;
        };

        // attach batch request creation
        pkg.BatchRequest = requestManager.BatchManager.bind(null, pkg._requestManager);

        // attach extend function
        pkg.extend = extend(pkg);
    },
    addProviders: function (pkg) {
        pkg.givenProvider = requestManager.Manager.givenProvider;
        pkg.providers = requestManager.Manager.providers;
    }
};



/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file extend.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */




var formatters = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-helpers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).formatters;
var Method = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-method\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


var extend = function (pckg) {
    /* jshint maxcomplexity:5 */
    var ex = function (extension) {

        var extendedObject;
        if (extension.property) {
            if (!pckg[extension.property]) {
                pckg[extension.property] = {};
            }
            extendedObject = pckg[extension.property];
        } else {
            extendedObject = pckg;
        }

        if (extension.methods) {
            extension.methods.forEach(function (method) {
                if(!(method instanceof Method)) {
                    method = new Method(method);
                }

                method.attachToObject(extendedObject);
                method.setRequestManager(pckg._requestManager);
            });
        }

        return pckg;
    };

    ex.formatters = formatters;
    ex.utils = utils;
    ex.Method = Method;

    return ex;
};



module.exports = extend;



/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */



var _ = __webpack_require__(393);
var core = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var helpers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-helpers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Subscriptions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-subscriptions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).subscriptions;
var Method = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-method\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Net = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-net\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var Personal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-eth-personal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Contract = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-eth-contract\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Iban = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-eth-iban\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Accounts = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-eth-accounts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var abi = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-eth-abi\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));



var getNetworkType = __webpack_require__(403);

var formatters = helpers.formatters;


var blockCall = function (args) {
    return (_.isString(args[0]) && args[0].indexOf('0x') === 0) ? "eth_getBlockByHash" : "eth_getBlockByNumber";
};

var transactionFromBlockCall = function (args) {
    return (_.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getTransactionByBlockHashAndIndex' : 'eth_getTransactionByBlockNumberAndIndex';
};

var uncleCall = function (args) {
    return (_.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleByBlockHashAndIndex' : 'eth_getUncleByBlockNumberAndIndex';
};

var getBlockTransactionCountCall = function (args) {
    return (_.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getBlockTransactionCountByHash' : 'eth_getBlockTransactionCountByNumber';
};

var uncleCountCall = function (args) {
    return (_.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleCountByBlockHash' : 'eth_getUncleCountByBlockNumber';
};


var Eth = function Eth() {
    var _this = this;

    // sets _requestmanager
    core.packageInit(this, arguments);

    this.clearSubscriptions = _this._requestManager.clearSubscriptions;

    methods().forEach(function(method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager, _this); // second param means is Eth (necessary for promiEvent)
    });

    // add net
    this.net = new Net(this.currentProvider);

    // add guess chain
    this.net.getNetworkType = getNetworkType.bind(this);


    // add accounts
    this.accounts = new Accounts(this);

    // add personal
    this.personal = new Personal(this.currentProvider);

    // add contract
    this.Contract = Contract;
    this.Contract.prototype._eth = this;

    // add IBAN
    this.Iban = Iban;

    // add ABI
    this.abi = abi;

};

core.addProviders(Eth);


Object.defineProperty(Eth.prototype, 'defaultBlock', {
    get: function () {
        return helpers.config.defaultBlock;
    },
    set: function (val) {
        helpers.config.defaultBlock = val;
        return val;
    },
    enumerable: true
});

Object.defineProperty(Eth.prototype, 'defaultAccount', {
    get: function () {
        return helpers.config.defaultAccount;
    },
    set: function (val) {
        helpers.config.defaultAccount = val;
        return val;
    },
    enumerable: true
});

var methods = function () {


    var getVersion = new Method({
        name: 'getProtocolVersion',
        call: 'eth_protocolVersion',
        params: 0
    });

    var getCoinbase = new Method({
        name: 'getCoinbase',
        call: 'eth_coinbase',
        params: 0
    });

    var getMining = new Method({
        name: 'isMining',
        call: 'eth_mining',
        params: 0
    });

    var getHashrate = new Method({
        name: 'getHashrate',
        call: 'eth_hashrate',
        params: 0,
        outputFormatter: utils.hexToNumber
    });

    var isSyncing = new Method({
        name: 'isSyncing',
        call: 'eth_syncing',
        params: 0,
        outputFormatter: formatters.outputSyncingFormatter
    });

    var getGasPrice = new Method({
        name: 'getGasPrice',
        call: 'eth_gasPrice',
        params: 0,
        outputFormatter: formatters.outputBigNumberFormatter
    });

    var getAccounts = new Method({
        name: 'getAccounts',
        call: 'eth_accounts',
        params: 0,
        outputFormatter: utils.toChecksumAddress
        });

    var getBlockNumber = new Method({
        name: 'getBlockNumber',
        call: 'eth_blockNumber',
        params: 0,
        outputFormatter: utils.hexToNumber
    });

    var getBalance = new Method({
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: formatters.outputBigNumberFormatter
    });

    var getStorageAt = new Method({
        name: 'getStorageAt',
        call: 'eth_getStorageAt',
        params: 3,
        inputFormatter: [formatters.inputAddressFormatter, utils.numberToHex, formatters.inputDefaultBlockNumberFormatter]
    });

    var getCode = new Method({
        name: 'getCode',
        call: 'eth_getCode',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter]
    });

    var getBlock = new Method({
        name: 'getBlock',
        call: blockCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, function (val) { return !!val; }],
        outputFormatter: formatters.outputBlockFormatter
    });

    var getUncle = new Method({
        name: 'getUncle',
        call: uncleCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, utils.numberToHex],
        outputFormatter: formatters.outputBlockFormatter,

    });

    var getBlockTransactionCount = new Method({
        name: 'getBlockTransactionCount',
        call: getBlockTransactionCountCall,
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter],
        outputFormatter: utils.hexToNumber
    });

    var getBlockUncleCount = new Method({
        name: 'getBlockUncleCount',
        call: uncleCountCall,
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter],
        outputFormatter: utils.hexToNumber
    });

    var getTransaction = new Method({
        name: 'getTransaction',
        call: 'eth_getTransactionByHash',
        params: 1,
        inputFormatter: [null],
        outputFormatter: formatters.outputTransactionFormatter
    });

    var getTransactionFromBlock = new Method({
        name: 'getTransactionFromBlock',
        call: transactionFromBlockCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, utils.numberToHex],
        outputFormatter: formatters.outputTransactionFormatter
    });

    var getTransactionReceipt = new Method({
        name: 'getTransactionReceipt',
        call: 'eth_getTransactionReceipt',
        params: 1,
        inputFormatter: [null],
        outputFormatter: formatters.outputTransactionReceiptFormatter
    });

    var getTransactionCount = new Method({
        name: 'getTransactionCount',
        call: 'eth_getTransactionCount',
        params: 2,
        inputFormatter: [null, formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: utils.hexToNumber
    });

    var sendSignedTransaction = new Method({
        name: 'sendSignedTransaction',
        call: 'eth_sendRawTransaction',
        params: 1,
        inputFormatter: [null]
    });

    var signTransaction = new Method({
        name: 'signTransaction',
        call: 'eth_signTransaction',
        params: 1,
        inputFormatter: [formatters.inputTransactionFormatter]
    });

    var sendTransaction = new Method({
        name: 'sendTransaction',
        call: 'eth_sendTransaction',
        params: 1,
        inputFormatter: [formatters.inputTransactionFormatter]
    });

    var sign = new Method({
        name: 'sign',
        call: 'eth_sign',
        params: 2,
        inputFormatter: [formatters.inputSignFormatter, formatters.inputAddressFormatter],
        transformPayload: function (payload) {
            payload.params.reverse();
            return payload;
        }
    });

    var call = new Method({
        name: 'call',
        call: 'eth_call',
        params: 2,
        inputFormatter: [formatters.inputCallFormatter, formatters.inputDefaultBlockNumberFormatter]
    });

    var estimateGas = new Method({
        name: 'estimateGas',
        call: 'eth_estimateGas',
        params: 1,
        inputFormatter: [formatters.inputCallFormatter],
        outputFormatter: utils.hexToNumber
    });

    var getCompilers = new Method({
        name: 'getCompilers',
        call: 'eth_getCompilers',
        params: 0
    });

    var compileSolidity = new Method({
        name: 'compile.solidity',
        call: 'eth_compileSolidity',
        params: 1
    });

    var compileLLL = new Method({
        name: 'compile.lll',
        call: 'eth_compileLLL',
        params: 1
    });

    var compileSerpent = new Method({
        name: 'compile.serpent',
        call: 'eth_compileSerpent',
        params: 1
    });

    var submitWork = new Method({
        name: 'submitWork',
        call: 'eth_submitWork',
        params: 3
    });

    var getWork = new Method({
        name: 'getWork',
        call: 'eth_getWork',
        params: 0
    });

    var getPastLogs = new Method({
        name: 'getPastLogs',
        call: 'eth_getLogs',
        params: 1,
        inputFormatter: [formatters.inputLogFormatter],
        outputFormatter: formatters.outputLogFormatter
    });


    // subscriptions
    var subscribe = new Subscriptions({
        name: 'subscribe',
        type: 'eth',
        subscriptions: {
            'newBlockHeaders': {
                // TODO change name on RPC side?
                subscriptionName: 'newHeads', // replace subscription with this name
                params: 0,
                outputFormatter: formatters.outputBlockFormatter
            },
            'pendingTransactions': {
                params: 0
                // outputFormatter: formatters.outputTransactionFormatter // returns only hash???
            },
            'logs': {
                params: 1,
                inputFormatter: [formatters.inputLogFormatter],
                outputFormatter: formatters.outputLogFormatter,
                // DUBLICATE, also in web3-eth-contract
                subscriptionHandler: function (output) {
                    if(output.removed) {
                        this.emit('changed', output);
                    } else {
                        this.emit('data', output);
                    }

                    if (_.isFunction(this.callback)) {
                        this.callback(null, output, this);
                    }
                }
            },
            'syncing': {
                params: 0,
                outputFormatter: formatters.outputSyncingFormatter,
                subscriptionHandler: function (output) {
                    var _this = this;

                    // fire TRUE at start
                    if(this._isSyncing !== true) {
                        this._isSyncing = true;
                        this.emit('changed', _this._isSyncing);

                        if (_.isFunction(this.callback)) {
                            this.callback(null, _this._isSyncing, this);
                        }

                        setTimeout(function () {
                            _this.emit('data', output);

                            if (_.isFunction(_this.callback)) {
                                _this.callback(null, output, _this);
                            }
                        }, 0);

                    // fire sync status
                    } else {
                        this.emit('data', output);
                        if (_.isFunction(_this.callback)) {
                            this.callback(null, output, this);
                        }

                        // wait for some time before fireing the FALSE
                        clearTimeout(this._isSyncingTimeout);
                        this._isSyncingTimeout = setTimeout(function () {
                            if(output.currentBlock > output.highestBlock - 200) {
                                _this._isSyncing = false;
                                _this.emit('changed', _this._isSyncing);

                                if (_.isFunction(_this.callback)) {
                                    _this.callback(null, _this._isSyncing, _this);
                                }
                            }
                        }, 500);
                    }
                }
            }
        }
    });


    return [
        getVersion,
        getCoinbase,
        getMining,
        getHashrate,
        isSyncing,
        getGasPrice,
        getAccounts,
        getBlockNumber,
        getBalance,
        getStorageAt,
        getCode,
        getBlock,
        getUncle,
        getCompilers,
        getBlockTransactionCount,
        getBlockUncleCount,
        getTransaction,
        getTransactionFromBlock,
        getTransactionReceipt,
        getTransactionCount,
        call,
        estimateGas,
        sendSignedTransaction,
        signTransaction,
        sendTransaction,
        sign,
        compileSolidity,
        compileLLL,
        compileSerpent,
        submitWork,
        getWork,
        getPastLogs,
        subscribe
    ];
};


module.exports = Eth;



/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file getNetworkType.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */



var _ = __webpack_require__(393);

var getNetworkType = function (callback) {
    var _this = this,
        id;


    return this.net.getId()
        .then(function (givenId) {

            id = givenId;

            return _this.getBlock(0);
        })
        .then(function (genesis) {
            var returnValue = 'private';

            if (genesis.hash === '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3' &&
                id === 1) {
                returnValue = 'main';
            }
            if (genesis.hash === '0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303' &&
                id === 2) {
                returnValue = 'morden';
            }
            if (genesis.hash === '0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d' &&
                id === 3) {
                returnValue = 'ropsten';
            }

            if (_.isFunction(callback)) {
                callback(null, returnValue);
            }

            return returnValue;
        })
        .catch(function (err) {
            if (_.isFunction(callback)) {
                callback(err);
            } else {
                throw err;
            }
        });
};

module.exports = getNetworkType;


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */



var core = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Method = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-method\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


var Net = function () {
    var _this = this;

    // sets _requestmanager
    core.packageInit(this, arguments);


    methods().forEach(function(method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });

};

core.addProviders(Net);


var methods = function () {

    return [
        new Method({
            name: 'getId',
            call: 'net_version',
            params: 0,
            outputFormatter: utils.hexToNumber
        }),
        new Method({
            name: 'isListening',
            call: 'net_listening',
            params: 0
        }),
        new Method({
            name: 'getPeerCount',
            call: 'net_peerCount',
            params: 0,
            outputFormatter: utils.hexToNumber
        })
    ];
};


module.exports = Net;




/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */



var core = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Method = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-method\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Net = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-net\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var formatters = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-helpers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).formatters;


var Personal = function Personal() {
    var _this = this;

    // sets _requestmanager
    core.packageInit(this, arguments);


    methods().forEach(function(method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });

    this.net = new Net(this.currentProvider);
};

core.addProviders(Personal);


var methods = function () {

    var getAccounts = new Method({
        name: 'getAccounts',
        call: 'personal_listAccounts',
        params: 0,
        outputFormatter: utils.toChecksumAddress
    });

    var newAccount = new Method({
        name: 'newAccount',
        call: 'personal_newAccount',
        params: 1,
        inputFormatter: [null],
        outputFormatter: utils.toChecksumAddress
    });

    var unlockAccount = new Method({
        name: 'unlockAccount',
        call: 'personal_unlockAccount',
        params: 3,
        inputFormatter: [formatters.inputAddressFormatter, null, null]
    });

    var lockAccount = new Method({
        name: 'lockAccount',
        call: 'personal_lockAccount',
        params: 1,
        inputFormatter: [formatters.inputAddressFormatter]
    });

    var importRawKey = new Method({
        name: 'importRawKey',
        call: 'personal_importRawKey',
        params: 2
    });

    var sendTransaction = new Method({
        name: 'sendTransaction',
        call: 'personal_sendTransaction',
        params: 2,
        inputFormatter: [formatters.inputTransactionFormatter, null]
    });

    var sign = new Method({
        name: 'sign',
        call: 'personal_sign',
        params: 3,
        inputFormatter: [formatters.inputSignFormatter, formatters.inputAddressFormatter, null]
    });

    var ecRecover = new Method({
        name: 'ecRecover',
        call: 'personal_ecRecover',
        params: 2,
        inputFormatter: [formatters.inputSignFormatter, null]
    });


    return [
        getAccounts,
        newAccount,
        unlockAccount,
        sendTransaction,
        lockAccount,
        importRawKey,
        sign,
        ecRecover
    ];
};


module.exports = Personal;




/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */



var core = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Subscriptions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-subscriptions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).subscriptions;
var Method = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-core-method\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
// var formatters = require('web3-core-helpers').formatters;
var Net = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"web3-net\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


var Shh = function Shh() {
    var _this = this;

    // sets _requestmanager
    core.packageInit(this, arguments);

    this.clearSubscriptions = _this._requestManager.clearSubscriptions;

    methods().forEach(function(method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });

    this.net = new Net(this.currentProvider);
};

core.addProviders(Shh);


var methods = function () {

    return [
        new Subscriptions({
            name: 'subscribe',
            type: 'shh',
            subscriptions: {
                'messages': {
                    params: 1
                    // inputFormatter: [formatters.inputPostFormatter],
                    // outputFormatter: formatters.outputPostFormatter
                }
            }
        }),

        new Method({
            name: 'getVersion',
            call: 'shh_version',
            params: 0
        }),
        new Method({
            name: 'getInfo',
            call: 'shh_info',
            params: 0
        }),
        new Method({
            name: 'setMaxMessageSize',
            call: 'shh_setMaxMessageSize',
            params: 1
        }),
        new Method({
            name: 'setMinPoW',
            call: 'shh_setMinPoW',
            params: 1
        }),
        new Method({
            name: 'markTrustedPeer',
            call: 'shh_markTrustedPeer',
            params: 1
        }),
        new Method({
            name: 'newKeyPair',
            call: 'shh_newKeyPair',
            params: 0
        }),
        new Method({
            name: 'addPrivateKey',
            call: 'shh_addPrivateKey',
            params: 1
        }),
        new Method({
            name: 'deleteKeyPair',
            call: 'shh_deleteKeyPair',
            params: 1
        }),
        new Method({
            name: 'hasKeyPair',
            call: 'shh_hasKeyPair',
            params: 1
        }),
        new Method({
            name: 'getPublicKey',
            call: 'shh_getPublicKey',
            params: 1
        }),
        new Method({
            name: 'getPrivateKey',
            call: 'shh_getPrivateKey',
            params: 1
        }),
        new Method({
            name: 'newSymKey',
            call: 'shh_newSymKey',
            params: 0
        }),
        new Method({
            name: 'addSymKey',
            call: 'shh_addSymKey',
            params: 1
        }),
        new Method({
            name: 'generateSymKeyFromPassword',
            call: 'shh_generateSymKeyFromPassword',
            params: 1
        }),
        new Method({
            name: 'hasSymKey',
            call: 'shh_hasSymKey',
            params: 1
        }),
        new Method({
            name: 'getSymKey',
            call: 'shh_getSymKey',
            params: 1
        }),
        new Method({
            name: 'deleteSymKey',
            call: 'shh_deleteSymKey',
            params: 1
        }),

        new Method({
            name: 'newMessageFilter',
            call: 'shh_newMessageFilter',
            params: 1
        }),
        new Method({
            name: 'getFilterMessages',
            call: 'shh_getFilterMessages',
            params: 1
        }),
        new Method({
            name: 'deleteMessageFilter',
            call: 'shh_deleteMessageFilter',
            params: 1
        }),

        new Method({
            name: 'post',
            call: 'shh_post',
            params: 1,
            inputFormatter: [null]
        })
    ];
};

module.exports = Shh;




/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */



var _ = __webpack_require__(393);
var swarm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"swarm-js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


var Bzz = function Bzz(provider) {

    this.givenProvider = Bzz.givenProvider;

    // if new Web3(provider), use the given provider
    if (provider && provider._requestManager) {
        provider = provider.currentProvider;
    }

    // only allow file picker when in browser
    if(typeof document !== 'undefined') {
        this.pick = swarm.pick;
    }

    this.setProvider(provider);
};

// set default ethereum provider
/* jshint ignore:start */
Bzz.givenProvider = null;
if(typeof ethereumProvider !== 'undefined' && ethereumProvider.bzz) {
    Bzz.givenProvider = ethereumProvider;
}
/* jshint ignore:end */

Bzz.prototype.setProvider = function(provider) {
    // is ethereum provider
    if(_.isObject(provider) && _.isString(provider.bzz)) {
        provider = provider.bzz;
    // is no string, set default
    } else if(!_.isString(provider)) {
        provider = 'http://swarm-gateways.net'; // default to gateway
    }


    if(_.isString(provider)) {
        this.currentProvider = provider;
    } else {
        return false;
    }

    // add functions
    this.download = swarm.at(provider).download;
    this.upload = swarm.at(provider).upload;
    this.isAvailable = swarm.at(provider).isAvailable;

    return true;
};


module.exports = Bzz;



/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file utils.js
 * @author Marek Kotewicz <marek@ethcore.io>
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */


var _ = __webpack_require__(393);
var ethjsUnit = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ethjs-unit\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var utils = __webpack_require__(394);
var soliditySha3 = __webpack_require__(411);
var randomHex = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"randomhex\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));



/**
 * Fires an error in an event emitter and callback and returns the eventemitter
 *
 * @method _fireError
 * @param {Object} error a string, a error, or an object with {message, data}
 * @param {Object} emitter
 * @param {Function} reject
 * @param {Function} callback
 * @return {Object} the emitter
 */
var _fireError = function (error, emitter, reject, callback) {
    /*jshint maxcomplexity: 10 */

    // add data if given
    if(_.isObject(error) && !(error instanceof Error) &&  error.data) {
        if(_.isObject(error.data) || _.isArray(error.data)) {
            error.data = JSON.stringify(error.data, null, 2);
        }

        error = error.message +"\n"+ error.data;
    }

    if(_.isString(error)) {
        error = new Error(error);
    }

    if (_.isFunction(callback)) {
        callback(error);
    }
    if (_.isFunction(reject)) {
        // suppress uncatched error if an error listener is present
        if(emitter &&
           _.isFunction(emitter.listeners) &&
           emitter.listeners('error').length &&
           _.isFunction(emitter.suppressUnhandledRejections)) {
            emitter.suppressUnhandledRejections();
        }
        reject(error);
    }

    if(emitter && _.isFunction(emitter.emit)) {
        emitter.emit('error', error);
        emitter.removeAllListeners();
    }

    return emitter;
};

/**
 * Should be used to create full function/event name from json abi
 *
 * @method _jsonInterfaceMethodToString
 * @param {Object} json
 * @return {String} full function/event name
 */
var _jsonInterfaceMethodToString = function (json) {
    if (_.isObject(json) && json.name && json.name.indexOf('(') !== -1) {
        return json.name;
    }

    var typeName = json.inputs.map(function(i){return i.type; }).join(',');
    return json.name + '(' + typeName + ')';
};



/**
 * Should be called to get ascii from it's hex representation
 *
 * @method hexToAscii
 * @param {String} hex
 * @returns {String} ascii string representation of hex value
 */
var hexToAscii = function(hex) {
    if (!utils.isHex(hex))
        throw new Error('The parameter must be a valid HEX string.');

    var str = "";
    var i = 0, l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i+=2) {
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }

    return str;
};

/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method asciiToHex
 * @param {String} str
 * @returns {String} hex representation of input string
 */
var asciiToHex = function(str) {
    var hex = "";
    for(var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
    }

    return "0x" + hex;
};



/**
 * Returns value of unit in Wei
 *
 * @method getUnitValue
 * @param {String} unit the unit to convert to, default ether
 * @returns {BN} value of the unit (in Wei)
 * @throws error if the unit is not correct:w
 */
var getUnitValue = function (unit) {
    unit = unit ? unit.toLowerCase() : 'ether';
    if (!ethjsUnit.unitMap[unit]) {
        throw new Error('This unit "'+ unit +'" doesn\'t exist, please use the one of the following units' + JSON.stringify(ethjsUnit.unitMap, null, 2));
    }
    return unit;
};

/**
 * Takes a number of wei and converts it to any other ether unit.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method fromWei
 * @param {Number|String} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert to, default ether
 * @return {String|Object} When given a BN object it returns one as well, otherwise a number
 */
var fromWei = function(number, unit) {
    unit = getUnitValue(unit);

    return utils.isBN(number) ? ethjsUnit.fromWei(number, unit) : ethjsUnit.fromWei(number, unit).toString(10);
};

/**
 * Takes a number of a unit and converts it to wei.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method toWei
 * @param {Number|String|BN} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert from, default ether
 * @return {String|Object} When given a BN object it returns one as well, otherwise a number
 */
var toWei = function(number, unit) {
    unit = getUnitValue(unit);

    return utils.isBN(number) ? ethjsUnit.toWei(number, unit) : ethjsUnit.toWei(number, unit).toString(10);
};




/**
 * Converts to a checksum address
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX address
 * @return {String}
 */
var toChecksumAddress = function (address) {
    if (typeof address === 'undefined') return '';

    if(!/^(0x)?[0-9a-f]{40}$/i.test(address))
        throw new Error('Given address "'+ address +'" is not a valid Ethereum address.');



    address = address.toLowerCase().replace(/^0x/i,'');
    var addressHash = utils.sha3(address).replace(/^0x/i,'');
    var checksumAddress = '0x';

    for (var i = 0; i < address.length; i++ ) {
        // If ith character is 9 to f then make it uppercase
        if (parseInt(addressHash[i], 16) > 7) {
            checksumAddress += address[i].toUpperCase();
        } else {
            checksumAddress += address[i];
        }
    }
    return checksumAddress;
};



module.exports = {
    _fireError: _fireError,
    _jsonInterfaceMethodToString: _jsonInterfaceMethodToString,
    // extractDisplayName: extractDisplayName,
    // extractTypeName: extractTypeName,
    randomHex: randomHex,
    _: _,
    BN: utils.BN,
    isBN: utils.isBN,
    isBigNumber: utils.isBigNumber,
    isHex: utils.isHex,
    sha3: utils.sha3,
    keccak256: utils.sha3,
    soliditySha3: soliditySha3,
    isAddress: utils.isAddress,
    checkAddressChecksum: utils.checkAddressChecksum,
    toChecksumAddress: toChecksumAddress,
    toHex: utils.toHex,
    toBN: utils.toBN,

    bytesToHex: utils.bytesToHex,
    hexToBytes: utils.hexToBytes,

    hexToNumberString: utils.hexToNumberString,

    hexToNumber: utils.hexToNumber,
    toDecimal: utils.hexToNumber, // alias

    numberToHex: utils.numberToHex,
    fromDecimal: utils.numberToHex, // alias

    hexToUtf8: utils.hexToUtf8,
    hexToString: utils.hexToUtf8,
    toUtf8: utils.hexToUtf8,

    utf8ToHex: utils.utf8ToHex,
    stringToHex: utils.utf8ToHex,
    fromUtf8: utils.utf8ToHex,

    hexToAscii: hexToAscii,
    toAscii: hexToAscii,
    asciiToHex: asciiToHex,
    fromAscii: asciiToHex,

    unitMap: ethjsUnit.unitMap,
    toWei: toWei,
    fromWei: fromWei,

    padLeft: utils.leftPad,
    leftPad: utils.leftPad,
    padRight: utils.rightPad,
    rightPad: utils.rightPad
};



/***/ }),

/***/ 409:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return utf8;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)(module), __webpack_require__(180)))

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file soliditySha3.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var _ = __webpack_require__(393);
var BN = __webpack_require__(395);
var utils = __webpack_require__(394);


var _elementaryName = function (name) {
    /*jshint maxcomplexity:false */

    if (name.startsWith('int[')) {
        return 'int256' + name.slice(3);
    } else if (name === 'int') {
        return 'int256';
    } else if (name.startsWith('uint[')) {
        return 'uint256' + name.slice(4);
    } else if (name === 'uint') {
        return 'uint256';
    } else if (name.startsWith('fixed[')) {
        return 'fixed128x128' + name.slice(5);
    } else if (name === 'fixed') {
        return 'fixed128x128';
    } else if (name.startsWith('ufixed[')) {
        return 'ufixed128x128' + name.slice(6);
    } else if (name === 'ufixed') {
        return 'ufixed128x128';
    }
    return name;
};

// Parse N from type<N>
var _parseTypeN = function (type) {
    var typesize = /^\D+(\d+).*$/.exec(type);
    return typesize ? parseInt(typesize[1], 10) : null;
};

// Parse N from type[<N>]
var _parseTypeNArray = function (type) {
    var arraySize = /^\D+\d*\[(\d+)\]$/.exec(type);
    return arraySize ? parseInt(arraySize[1], 10) : null;
};

var _parseNumber = function (arg) {
    var type = typeof arg;
    if (type === 'string') {
        if (utils.isHex(arg)) {
            return new BN(arg.replace(/0x/i,''), 16);
        } else {
            return new BN(arg, 10);
        }
    } else if (type === 'number') {
        return new BN(arg);
    } else if (utils.isBigNumber(arg)) {
        return new BN(arg.toString(10));
    } else if (utils.isBN(arg)) {
        return arg;
    } else {
        throw new Error(arg +' is not a number');
    }
};

var _solidityPack = function (type, value, arraySize) {
    /*jshint maxcomplexity:false */

    var size, num;
    type = _elementaryName(type);


    if (type === 'bytes') {

        if (value.replace(/^0x/i,'').length % 2 !== 0) {
            throw new Error('Invalid bytes characters '+ value.length);
        }

        return value;
    } else if (type === 'string') {
        return utils.utf8ToHex(value);
    } else if (type === 'bool') {
        return value ? '01' : '00';
    } else if (type.startsWith('address')) {
        if(arraySize) {
            size = 64;
        } else {
            size = 40;
        }

        if(!utils.isAddress(value)) {
            throw new Error(value +' is not a valid address, or the checksum is invalid.');
        }

        return utils.leftPad(value.toLowerCase(), size);
    }

    size = _parseTypeN(type);

    if (type.startsWith('bytes')) {

        if(!size) {
            throw new Error('bytes[] not yet supported in solidity');
        }

        // must be 32 byte slices when in an array
        if(arraySize) {
            size = 32;
        }

        if (size < 1 || size > 32 || size < value.replace(/^0x/i,'').length / 2 ) {
            throw new Error('Invalid bytes' + size +' for '+ value);
        }

        return utils.rightPad(value, size * 2);
    } else if (type.startsWith('uint')) {

        if ((size % 8) || (size < 8) || (size > 256)) {
            throw new Error('Invalid uint'+size+' size');
        }

        num = _parseNumber(value);
        if (num.bitLength() > size) {
            throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
        }

        if(num.lt(new BN(0))) {
            throw new Error('Supplied uint '+ num.toString() +' is negative');
        }

        return size ? utils.leftPad(num.toString('hex'), size/8 * 2) : num;
    } else if (type.startsWith('int')) {

        if ((size % 8) || (size < 8) || (size > 256)) {
            throw new Error('Invalid int'+size+' size');
        }

        num = _parseNumber(value);
        if (num.bitLength() > size) {
            throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
        }

        if(num.lt(new BN(0))) {
            return num.toTwos(size).toString('hex');
        } else {
            return size ? utils.leftPad(num.toString('hex'), size/8 * 2) : num;
        }

    } else {
        // FIXME: support all other types
        throw new Error('Unsupported or invalid type: ' + type);
    }
};


var _processSoliditySha3Args = function (arg) {
    /*jshint maxcomplexity:false */

    if(_.isArray(arg)) {
        throw new Error('Autodetection of array types is not supported.');
    }

    var type, value = '';
    var hexArg, arraySize;

    // if type is given
    if (_.isObject(arg) && (arg.hasOwnProperty('v') || arg.hasOwnProperty('t') || arg.hasOwnProperty('value') || arg.hasOwnProperty('type'))) {
        type = arg.t || arg.type;
        value = arg.v || arg.value;

    // otherwise try to guess the type
    } else {

        type = utils.toHex(arg, true);
        value = utils.toHex(arg);

        if (!type.startsWith('int') && !type.startsWith('uint')) {
            type = 'bytes';
        }
    }

    if ((type.startsWith('int') || type.startsWith('uint')) &&  typeof value === 'string' && !/^(-)?0x/i.test(value)) {
        value = new BN(value);
    }

    // get the array size
    if(_.isArray(value)) {
        arraySize = _parseTypeNArray(type);
        if(arraySize && value.length !== arraySize) {
            throw new Error(type +' is not matching the given array '+ JSON.stringify(value));
        } else {
            arraySize = value.length;
        }
    }


    if (_.isArray(value)) {
        hexArg = value.map(function (val) {
            return _solidityPack(type, val, arraySize).toString('hex').replace('0x','');
        });
        return hexArg.join('');
    } else {
        hexArg = _solidityPack(type, value, arraySize);
        return hexArg.toString('hex').replace('0x','');
    }

};

/**
 * Hashes solidity values to a sha3 hash using keccak 256
 *
 * @method soliditySha3
 * @return {Object} the sha3
 */
var soliditySha3 = function () {
    /*jshint maxcomplexity:false */

    var args = Array.prototype.slice.call(arguments);

    var hexArgs = _.map(args, _processSoliditySha3Args);

    // console.log(args, hexArgs);
    // console.log('0x'+ hexArgs.join(''));

    return utils.sha3('0x'+ hexArgs.join(''));
};


module.exports = soliditySha3;


/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = {"assembly":{".code":[{"begin":26,"end":373,"name":"PUSH","value":"60"},{"begin":26,"end":373,"name":"PUSH","value":"40"},{"begin":26,"end":373,"name":"MSTORE"},{"begin":26,"end":373,"name":"CALLVALUE"},{"begin":26,"end":373,"name":"ISZERO"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"1"},{"begin":26,"end":373,"name":"JUMPI"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"DUP1"},{"begin":26,"end":373,"name":"REVERT"},{"begin":26,"end":373,"name":"tag","value":"1"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":373,"name":"DUP1"},{"begin":26,"end":373,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"CODECOPY"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a72305820cc49ab2c76c59fa1e4899007e5c1a39eba9ff05df6a043f8caf8293c64ed39210029",".code":[{"begin":26,"end":373,"name":"PUSH","value":"60"},{"begin":26,"end":373,"name":"PUSH","value":"40"},{"begin":26,"end":373,"name":"MSTORE"},{"begin":26,"end":373,"name":"PUSH","value":"4"},{"begin":26,"end":373,"name":"CALLDATASIZE"},{"begin":26,"end":373,"name":"LT"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"1"},{"begin":26,"end":373,"name":"JUMPI"},{"begin":26,"end":373,"name":"PUSH","value":"FFFFFFFF"},{"begin":26,"end":373,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"CALLDATALOAD"},{"begin":26,"end":373,"name":"DIV"},{"begin":26,"end":373,"name":"AND"},{"begin":26,"end":373,"name":"PUSH","value":"339D50A5"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"EQ"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"2"},{"begin":26,"end":373,"name":"JUMPI"},{"begin":26,"end":373,"name":"DUP1"},{"begin":26,"end":373,"name":"PUSH","value":"4ACB9D4F"},{"begin":26,"end":373,"name":"EQ"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"3"},{"begin":26,"end":373,"name":"JUMPI"},{"begin":26,"end":373,"name":"DUP1"},{"begin":26,"end":373,"name":"PUSH","value":"A3303A75"},{"begin":26,"end":373,"name":"EQ"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"4"},{"begin":26,"end":373,"name":"JUMPI"},{"begin":26,"end":373,"name":"tag","value":"1"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"DUP1"},{"begin":26,"end":373,"name":"REVERT"},{"begin":57,"end":91,"name":"tag","value":"2"},{"begin":57,"end":91,"name":"JUMPDEST"},{"begin":57,"end":91,"name":"CALLVALUE"},{"begin":57,"end":91,"name":"ISZERO"},{"begin":57,"end":91,"name":"PUSH [tag]","value":"5"},{"begin":57,"end":91,"name":"JUMPI"},{"begin":57,"end":91,"name":"PUSH","value":"0"},{"begin":57,"end":91,"name":"DUP1"},{"begin":57,"end":91,"name":"REVERT"},{"begin":57,"end":91,"name":"tag","value":"5"},{"begin":57,"end":91,"name":"JUMPDEST"},{"begin":57,"end":91,"name":"PUSH [tag]","value":"6"},{"begin":57,"end":91,"name":"PUSH","value":"4"},{"begin":57,"end":91,"name":"CALLDATALOAD"},{"begin":57,"end":91,"name":"PUSH [tag]","value":"7"},{"begin":57,"end":91,"name":"JUMP"},{"begin":57,"end":91,"name":"tag","value":"6"},{"begin":57,"end":91,"name":"JUMPDEST"},{"begin":57,"end":91,"name":"PUSH","value":"40"},{"begin":57,"end":91,"name":"MLOAD"},{"begin":57,"end":91,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":57,"end":91,"name":"SWAP1"},{"begin":57,"end":91,"name":"SWAP2"},{"begin":57,"end":91,"name":"AND"},{"begin":57,"end":91,"name":"DUP2"},{"begin":57,"end":91,"name":"MSTORE"},{"begin":57,"end":91,"name":"PUSH","value":"20"},{"begin":57,"end":91,"name":"ADD"},{"begin":57,"end":91,"name":"PUSH","value":"40"},{"begin":57,"end":91,"name":"MLOAD"},{"begin":57,"end":91,"name":"DUP1"},{"begin":57,"end":91,"name":"SWAP2"},{"begin":57,"end":91,"name":"SUB"},{"begin":57,"end":91,"name":"SWAP1"},{"begin":57,"end":91,"name":"RETURN"},{"begin":266,"end":371,"name":"tag","value":"3"},{"begin":266,"end":371,"name":"JUMPDEST"},{"begin":266,"end":371,"name":"CALLVALUE"},{"begin":266,"end":371,"name":"ISZERO"},{"begin":266,"end":371,"name":"PUSH [tag]","value":"8"},{"begin":266,"end":371,"name":"JUMPI"},{"begin":266,"end":371,"name":"PUSH","value":"0"},{"begin":266,"end":371,"name":"DUP1"},{"begin":266,"end":371,"name":"REVERT"},{"begin":266,"end":371,"name":"tag","value":"8"},{"begin":266,"end":371,"name":"JUMPDEST"},{"begin":266,"end":371,"name":"PUSH [tag]","value":"9"},{"begin":266,"end":371,"name":"PUSH [tag]","value":"10"},{"begin":266,"end":371,"name":"JUMP"},{"begin":266,"end":371,"name":"tag","value":"9"},{"begin":266,"end":371,"name":"JUMPDEST"},{"begin":266,"end":371,"name":"PUSH","value":"40"},{"begin":266,"end":371,"name":"MLOAD"},{"begin":266,"end":371,"name":"PUSH","value":"20"},{"begin":266,"end":371,"name":"DUP1"},{"begin":266,"end":371,"name":"DUP3"},{"begin":266,"end":371,"name":"MSTORE"},{"begin":266,"end":371,"name":"DUP2"},{"begin":266,"end":371,"name":"SWAP1"},{"begin":266,"end":371,"name":"DUP2"},{"begin":266,"end":371,"name":"ADD"},{"begin":266,"end":371,"name":"DUP4"},{"begin":266,"end":371,"name":"DUP2"},{"begin":266,"end":371,"name":"DUP2"},{"begin":266,"end":371,"name":"MLOAD"},{"begin":266,"end":371,"name":"DUP2"},{"begin":266,"end":371,"name":"MSTORE"},{"begin":266,"end":371,"name":"PUSH","value":"20"},{"begin":266,"end":371,"name":"ADD"},{"begin":266,"end":371,"name":"SWAP2"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"DUP1"},{"begin":266,"end":371,"name":"MLOAD"},{"begin":266,"end":371,"name":"SWAP1"},{"begin":266,"end":371,"name":"PUSH","value":"20"},{"begin":266,"end":371,"name":"ADD"},{"begin":266,"end":371,"name":"SWAP1"},{"begin":266,"end":371,"name":"PUSH","value":"20"},{"begin":266,"end":371,"name":"MUL"},{"begin":266,"end":371,"name":"DUP1"},{"begin":266,"end":371,"name":"DUP4"},{"begin":266,"end":371,"name":"DUP4"},{"begin":23,"end":24,"name":"PUSH","value":"0"},{"begin":8,"end":108,"name":"tag","value":"11"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":33,"end":36,"name":"DUP4"},{"begin":30,"end":31,"name":"DUP2"},{"begin":27,"end":37,"name":"LT"},{"begin":8,"end":108,"name":"ISZERO"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"12"},{"begin":8,"end":108,"name":"JUMPI"},{"begin":99,"end":100,"name":"DUP1"},{"begin":94,"end":97,"name":"DUP3"},{"begin":90,"end":101,"name":"ADD"},{"begin":84,"end":102,"name":"MLOAD"},{"begin":71,"end":82,"name":"DUP4"},{"begin":71,"end":82,"name":"DUP3"},{"begin":71,"end":82,"name":"ADD"},{"begin":64,"end":103,"name":"MSTORE"},{"begin":52,"end":54,"name":"PUSH","value":"20"},{"begin":45,"end":55,"name":"ADD"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"11"},{"begin":8,"end":108,"name":"JUMP"},{"begin":8,"end":108,"name":"tag","value":"12"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":12,"end":26,"name":"POP"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"SWAP1"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"ADD"},{"begin":266,"end":371,"name":"SWAP3"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"POP"},{"begin":266,"end":371,"name":"PUSH","value":"40"},{"begin":266,"end":371,"name":"MLOAD"},{"begin":266,"end":371,"name":"DUP1"},{"begin":266,"end":371,"name":"SWAP2"},{"begin":266,"end":371,"name":"SUB"},{"begin":266,"end":371,"name":"SWAP1"},{"begin":266,"end":371,"name":"RETURN"},{"begin":98,"end":260,"name":"tag","value":"4"},{"begin":98,"end":260,"name":"JUMPDEST"},{"begin":98,"end":260,"name":"CALLVALUE"},{"begin":98,"end":260,"name":"ISZERO"},{"begin":98,"end":260,"name":"PUSH [tag]","value":"14"},{"begin":98,"end":260,"name":"JUMPI"},{"begin":98,"end":260,"name":"PUSH","value":"0"},{"begin":98,"end":260,"name":"DUP1"},{"begin":98,"end":260,"name":"REVERT"},{"begin":98,"end":260,"name":"tag","value":"14"},{"begin":98,"end":260,"name":"JUMPDEST"},{"begin":98,"end":260,"name":"PUSH [tag]","value":"15"},{"begin":98,"end":260,"name":"PUSH","value":"4"},{"begin":98,"end":260,"name":"CALLDATALOAD"},{"begin":98,"end":260,"name":"PUSH [tag]","value":"16"},{"begin":98,"end":260,"name":"JUMP"},{"begin":98,"end":260,"name":"tag","value":"15"},{"begin":98,"end":260,"name":"JUMPDEST"},{"begin":98,"end":260,"name":"STOP"},{"begin":57,"end":91,"name":"tag","value":"7"},{"begin":57,"end":91,"name":"JUMPDEST"},{"begin":57,"end":91,"name":"PUSH","value":"0"},{"begin":57,"end":91,"name":"DUP1"},{"begin":57,"end":91,"name":"SLOAD"},{"begin":57,"end":91,"name":"DUP3"},{"begin":57,"end":91,"name":"SWAP1"},{"begin":57,"end":91,"name":"DUP2"},{"begin":57,"end":91,"name":"LT"},{"begin":57,"end":91,"name":"PUSH [tag]","value":"17"},{"begin":57,"end":91,"name":"JUMPI"},{"begin":57,"end":91,"name":"INVALID"},{"begin":57,"end":91,"name":"tag","value":"17"},{"begin":57,"end":91,"name":"JUMPDEST"},{"begin":57,"end":91,"name":"PUSH","value":"0"},{"begin":57,"end":91,"name":"SWAP2"},{"begin":57,"end":91,"name":"DUP3"},{"begin":57,"end":91,"name":"MSTORE"},{"begin":57,"end":91,"name":"PUSH","value":"20"},{"begin":57,"end":91,"name":"SWAP1"},{"begin":57,"end":91,"name":"SWAP2"},{"begin":57,"end":91,"name":"KECCAK256"},{"begin":57,"end":91,"name":"ADD"},{"begin":57,"end":91,"name":"SLOAD"},{"begin":57,"end":91,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":57,"end":91,"name":"AND"},{"begin":57,"end":91,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"POP"},{"begin":57,"end":91,"name":"DUP2"},{"begin":57,"end":91,"name":"JUMP","value":"[out]"},{"begin":266,"end":371,"name":"tag","value":"10"},{"begin":266,"end":371,"name":"JUMPDEST"},{"begin":319,"end":328,"name":"PUSH [tag]","value":"19"},{"begin":319,"end":328,"name":"PUSH [tag]","value":"20"},{"begin":319,"end":328,"name":"JUMP","value":"[in]"},{"begin":319,"end":328,"name":"tag","value":"19"},{"begin":319,"end":328,"name":"JUMPDEST"},{"begin":347,"end":364,"name":"PUSH","value":"0"},{"begin":340,"end":364,"name":"DUP1"},{"begin":340,"end":364,"name":"SLOAD"},{"begin":340,"end":364,"name":"DUP1"},{"begin":340,"end":364,"name":"PUSH","value":"20"},{"begin":340,"end":364,"name":"MUL"},{"begin":340,"end":364,"name":"PUSH","value":"20"},{"begin":340,"end":364,"name":"ADD"},{"begin":340,"end":364,"name":"PUSH","value":"40"},{"begin":340,"end":364,"name":"MLOAD"},{"begin":340,"end":364,"name":"SWAP1"},{"begin":340,"end":364,"name":"DUP2"},{"begin":340,"end":364,"name":"ADD"},{"begin":340,"end":364,"name":"PUSH","value":"40"},{"begin":340,"end":364,"name":"MSTORE"},{"begin":340,"end":364,"name":"DUP1"},{"begin":340,"end":364,"name":"SWAP3"},{"begin":340,"end":364,"name":"SWAP2"},{"begin":340,"end":364,"name":"SWAP1"},{"begin":340,"end":364,"name":"DUP2"},{"begin":340,"end":364,"name":"DUP2"},{"begin":340,"end":364,"name":"MSTORE"},{"begin":340,"end":364,"name":"PUSH","value":"20"},{"begin":340,"end":364,"name":"ADD"},{"begin":340,"end":364,"name":"DUP3"},{"begin":340,"end":364,"name":"DUP1"},{"begin":340,"end":364,"name":"SLOAD"},{"begin":340,"end":364,"name":"DUP1"},{"begin":340,"end":364,"name":"ISZERO"},{"begin":340,"end":364,"name":"PUSH [tag]","value":"22"},{"begin":340,"end":364,"name":"JUMPI"},{"begin":340,"end":364,"name":"PUSH","value":"20"},{"begin":340,"end":364,"name":"MUL"},{"begin":340,"end":364,"name":"DUP3"},{"begin":340,"end":364,"name":"ADD"},{"begin":340,"end":364,"name":"SWAP2"},{"begin":340,"end":364,"name":"SWAP1"},{"begin":340,"end":364,"name":"PUSH","value":"0"},{"begin":340,"end":364,"name":"MSTORE"},{"begin":340,"end":364,"name":"PUSH","value":"20"},{"begin":340,"end":364,"name":"PUSH","value":"0"},{"begin":340,"end":364,"name":"KECCAK256"},{"begin":340,"end":364,"name":"SWAP1"},{"begin":340,"end":364,"name":"tag","value":"23"},{"begin":340,"end":364,"name":"JUMPDEST"},{"begin":340,"end":364,"name":"DUP2"},{"begin":340,"end":364,"name":"SLOAD"},{"begin":340,"end":364,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":340,"end":364,"name":"AND"},{"begin":340,"end":364,"name":"DUP2"},{"begin":340,"end":364,"name":"MSTORE"},{"begin":340,"end":364,"name":"PUSH","value":"1"},{"begin":340,"end":364,"name":"SWAP1"},{"begin":340,"end":364,"name":"SWAP2"},{"begin":340,"end":364,"name":"ADD"},{"begin":340,"end":364,"name":"SWAP1"},{"begin":340,"end":364,"name":"PUSH","value":"20"},{"begin":340,"end":364,"name":"ADD"},{"begin":340,"end":364,"name":"DUP1"},{"begin":340,"end":364,"name":"DUP4"},{"begin":340,"end":364,"name":"GT"},{"begin":340,"end":364,"name":"PUSH [tag]","value":"23"},{"begin":340,"end":364,"name":"JUMPI"},{"begin":340,"end":364,"name":"tag","value":"22"},{"begin":340,"end":364,"name":"JUMPDEST"},{"begin":340,"end":364,"name":"POP"},{"begin":340,"end":364,"name":"POP"},{"begin":340,"end":364,"name":"POP"},{"begin":340,"end":364,"name":"POP"},{"begin":340,"end":364,"name":"POP"},{"begin":340,"end":364,"name":"SWAP1"},{"begin":340,"end":364,"name":"POP"},{"begin":266,"end":371,"name":"tag","value":"21"},{"begin":266,"end":371,"name":"JUMPDEST"},{"begin":266,"end":371,"name":"SWAP1"},{"begin":266,"end":371,"name":"JUMP","value":"[out]"},{"begin":98,"end":260,"name":"tag","value":"16"},{"begin":98,"end":260,"name":"JUMPDEST"},{"begin":153,"end":172,"name":"PUSH","value":"0"},{"begin":188,"end":195,"name":"DUP2"},{"begin":197,"end":207,"name":"CALLER"},{"begin":175,"end":208,"name":"PUSH [tag]","value":"25"},{"begin":175,"end":208,"name":"PUSH [tag]","value":"26"},{"begin":175,"end":208,"name":"JUMP","value":"[in]"},{"begin":175,"end":208,"name":"tag","value":"25"},{"begin":175,"end":208,"name":"JUMPDEST"},{"begin":175,"end":208,"name":"SWAP2"},{"begin":175,"end":208,"name":"DUP3"},{"begin":175,"end":208,"name":"MSTORE"},{"begin":175,"end":208,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":175,"end":208,"name":"AND"},{"begin":175,"end":208,"name":"PUSH","value":"20"},{"begin":175,"end":208,"name":"DUP3"},{"begin":175,"end":208,"name":"ADD"},{"begin":175,"end":208,"name":"MSTORE"},{"begin":175,"end":208,"name":"PUSH","value":"40"},{"begin":175,"end":208,"name":"SWAP1"},{"begin":175,"end":208,"name":"DUP2"},{"begin":175,"end":208,"name":"ADD"},{"begin":175,"end":208,"name":"SWAP1"},{"begin":175,"end":208,"name":"MLOAD"},{"begin":175,"end":208,"name":"DUP1"},{"begin":175,"end":208,"name":"SWAP2"},{"begin":175,"end":208,"name":"SUB"},{"begin":175,"end":208,"name":"SWAP1"},{"begin":175,"end":208,"name":"PUSH","value":"0"},{"begin":175,"end":208,"name":"CREATE"},{"begin":175,"end":208,"name":"DUP1"},{"begin":175,"end":208,"name":"ISZERO"},{"begin":175,"end":208,"name":"ISZERO"},{"begin":175,"end":208,"name":"PUSH [tag]","value":"27"},{"begin":175,"end":208,"name":"JUMPI"},{"begin":175,"end":208,"name":"PUSH","value":"0"},{"begin":175,"end":208,"name":"DUP1"},{"begin":175,"end":208,"name":"REVERT"},{"begin":175,"end":208,"name":"tag","value":"27"},{"begin":175,"end":208,"name":"JUMPDEST"},{"begin":153,"end":208,"name":"SWAP1"},{"begin":153,"end":208,"name":"POP"},{"begin":218,"end":235,"name":"PUSH","value":"0"},{"begin":218,"end":253,"name":"DUP1"},{"begin":218,"end":253,"name":"SLOAD"},{"begin":218,"end":253,"name":"DUP1"},{"begin":218,"end":253,"name":"PUSH","value":"1"},{"begin":218,"end":253,"name":"ADD"},{"begin":218,"end":253,"name":"DUP3"},{"begin":218,"end":253,"name":"DUP2"},{"begin":218,"end":253,"name":"PUSH [tag]","value":"28"},{"begin":218,"end":253,"name":"SWAP2"},{"begin":218,"end":253,"name":"SWAP1"},{"begin":218,"end":253,"name":"PUSH [tag]","value":"29"},{"begin":218,"end":253,"name":"JUMP","value":"[in]"},{"begin":218,"end":253,"name":"tag","value":"28"},{"begin":218,"end":253,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":218,"end":253,"name":"PUSH","value":"0"},{"begin":218,"end":253,"name":"SWAP2"},{"begin":218,"end":253,"name":"DUP3"},{"begin":218,"end":253,"name":"MSTORE"},{"begin":218,"end":253,"name":"PUSH","value":"20"},{"begin":218,"end":253,"name":"SWAP1"},{"begin":218,"end":253,"name":"SWAP2"},{"begin":218,"end":253,"name":"KECCAK256"},{"begin":218,"end":253,"name":"ADD"},{"begin":218,"end":253,"name":"DUP1"},{"begin":218,"end":253,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":218,"end":253,"name":"AND"},{"begin":218,"end":253,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":218,"end":253,"name":"SWAP3"},{"begin":218,"end":253,"name":"SWAP1"},{"begin":218,"end":253,"name":"SWAP3"},{"begin":218,"end":253,"name":"AND"},{"begin":218,"end":253,"name":"SWAP2"},{"begin":218,"end":253,"name":"SWAP1"},{"begin":218,"end":253,"name":"SWAP2"},{"begin":218,"end":253,"name":"OR"},{"begin":218,"end":253,"name":"SWAP1"},{"begin":218,"end":253,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":98,"end":260,"name":"JUMP","value":"[out]"},{"begin":26,"end":373,"name":"tag","value":"20"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"PUSH","value":"20"},{"begin":26,"end":373,"name":"PUSH","value":"40"},{"begin":26,"end":373,"name":"MLOAD"},{"begin":26,"end":373,"name":"SWAP1"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"ADD"},{"begin":26,"end":373,"name":"PUSH","value":"40"},{"begin":26,"end":373,"name":"MSTORE"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"MSTORE"},{"begin":26,"end":373,"name":"SWAP1"},{"begin":26,"end":373,"name":"JUMP","value":"[out]"},{"begin":26,"end":373,"name":"tag","value":"26"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"PUSH","value":"40"},{"begin":26,"end":373,"name":"MLOAD"},{"begin":26,"end":373,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":373,"name":"DUP1"},{"begin":26,"end":373,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":373,"name":"DUP4"},{"begin":26,"end":373,"name":"CODECOPY"},{"begin":26,"end":373,"name":"ADD"},{"begin":26,"end":373,"name":"SWAP1"},{"begin":26,"end":373,"name":"JUMP","value":"[out]"},{"begin":26,"end":373,"name":"tag","value":"29"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"SLOAD"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"DUP4"},{"begin":26,"end":373,"name":"SSTORE"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"ISZERO"},{"begin":26,"end":373,"name":"GT"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"32"},{"begin":26,"end":373,"name":"JUMPI"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"DUP4"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"MSTORE"},{"begin":26,"end":373,"name":"PUSH","value":"20"},{"begin":26,"end":373,"name":"SWAP1"},{"begin":26,"end":373,"name":"KECCAK256"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"32"},{"begin":26,"end":373,"name":"SWAP2"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"ADD"},{"begin":26,"end":373,"name":"SWAP1"},{"begin":26,"end":373,"name":"DUP4"},{"begin":26,"end":373,"name":"ADD"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"33"},{"begin":26,"end":373,"name":"JUMP","value":"[in]"},{"begin":26,"end":373,"name":"tag","value":"32"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"POP"},{"begin":26,"end":373,"name":"POP"},{"begin":26,"end":373,"name":"POP"},{"begin":26,"end":373,"name":"JUMP","value":"[out]"},{"begin":26,"end":373,"name":"tag","value":"33"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"21"},{"begin":26,"end":373,"name":"SWAP2"},{"begin":26,"end":373,"name":"SWAP1"},{"begin":26,"end":373,"name":"tag","value":"35"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"DUP1"},{"begin":26,"end":373,"name":"DUP3"},{"begin":26,"end":373,"name":"GT"},{"begin":26,"end":373,"name":"ISZERO"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"36"},{"begin":26,"end":373,"name":"JUMPI"},{"begin":26,"end":373,"name":"PUSH","value":"0"},{"begin":26,"end":373,"name":"DUP2"},{"begin":26,"end":373,"name":"SSTORE"},{"begin":26,"end":373,"name":"PUSH","value":"1"},{"begin":26,"end":373,"name":"ADD"},{"begin":26,"end":373,"name":"PUSH [tag]","value":"35"},{"begin":26,"end":373,"name":"JUMP"},{"begin":26,"end":373,"name":"tag","value":"36"},{"begin":26,"end":373,"name":"JUMPDEST"},{"begin":26,"end":373,"name":"POP"},{"begin":26,"end":373,"name":"SWAP1"},{"begin":26,"end":373,"name":"JUMP"}],".data":{"0":{".code":[{"begin":375,"end":2634,"name":"PUSH","value":"60"},{"begin":375,"end":2634,"name":"PUSH","value":"40"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":859,"end":988,"name":"CALLVALUE"},{"begin":859,"end":988,"name":"ISZERO"},{"begin":859,"end":988,"name":"PUSH [tag]","value":"1"},{"begin":859,"end":988,"name":"JUMPI"},{"begin":859,"end":988,"name":"PUSH","value":"0"},{"begin":859,"end":988,"name":"DUP1"},{"begin":859,"end":988,"name":"REVERT"},{"begin":859,"end":988,"name":"tag","value":"1"},{"begin":859,"end":988,"name":"JUMPDEST"},{"begin":859,"end":988,"name":"PUSH","value":"40"},{"begin":859,"end":988,"name":"MLOAD"},{"begin":859,"end":988,"name":"PUSH","value":"40"},{"begin":859,"end":988,"name":"DUP1"},{"begin":859,"end":988,"name":"PUSHSIZE"},{"begin":859,"end":988,"name":"DUP4"},{"begin":859,"end":988,"name":"CODECOPY"},{"begin":859,"end":988,"name":"DUP2"},{"begin":859,"end":988,"name":"ADD"},{"begin":859,"end":988,"name":"PUSH","value":"40"},{"begin":859,"end":988,"name":"MSTORE"},{"begin":859,"end":988,"name":"DUP1"},{"begin":859,"end":988,"name":"DUP1"},{"begin":859,"end":988,"name":"MLOAD"},{"begin":859,"end":988,"name":"SWAP2"},{"begin":859,"end":988,"name":"SWAP1"},{"begin":859,"end":988,"name":"PUSH","value":"20"},{"begin":859,"end":988,"name":"ADD"},{"begin":859,"end":988,"name":"DUP1"},{"begin":859,"end":988,"name":"MLOAD"},{"begin":925,"end":932,"name":"PUSH","value":"1"},{"begin":925,"end":942,"name":"DUP1"},{"begin":925,"end":942,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":925,"end":942,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":925,"end":942,"name":"SWAP3"},{"begin":925,"end":942,"name":"SWAP1"},{"begin":925,"end":942,"name":"SWAP3"},{"begin":925,"end":942,"name":"AND"},{"begin":925,"end":942,"name":"SWAP2"},{"begin":925,"end":942,"name":"SWAP1"},{"begin":925,"end":942,"name":"SWAP2"},{"begin":925,"end":942,"name":"OR"},{"begin":925,"end":942,"name":"SWAP1"},{"begin":925,"end":942,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":952,"end":981,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"896"},{"begin":-1,"end":-1,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":-1,"end":-1,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"CODECOPY"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a7230582049e400593f7e6f3aeec31d83c643c071a7e480ceb82d44cabe80f4304ddf000b0029",".code":[{"begin":375,"end":2634,"name":"PUSH","value":"60"},{"begin":375,"end":2634,"name":"PUSH","value":"40"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"4"},{"begin":375,"end":2634,"name":"CALLDATASIZE"},{"begin":375,"end":2634,"name":"LT"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"1"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"PUSH","value":"FFFFFFFF"},{"begin":375,"end":2634,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"CALLDATALOAD"},{"begin":375,"end":2634,"name":"DIV"},{"begin":375,"end":2634,"name":"AND"},{"begin":375,"end":2634,"name":"PUSH","value":"3441006"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"2"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"A144391"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"3"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"481C6A75"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"4"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"81D12C58"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"5"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"82FDE093"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"6"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"8A9CFD55"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"7"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"937E09B1"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"8"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"D7BB99BA"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"9"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"D7D1BBDB"},{"begin":375,"end":2634,"name":"EQ"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"10"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"tag","value":"1"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"REVERT"},{"begin":2333,"end":2632,"name":"tag","value":"2"},{"begin":2333,"end":2632,"name":"JUMPDEST"},{"begin":2333,"end":2632,"name":"CALLVALUE"},{"begin":2333,"end":2632,"name":"ISZERO"},{"begin":2333,"end":2632,"name":"PUSH [tag]","value":"11"},{"begin":2333,"end":2632,"name":"JUMPI"},{"begin":2333,"end":2632,"name":"PUSH","value":"0"},{"begin":2333,"end":2632,"name":"DUP1"},{"begin":2333,"end":2632,"name":"REVERT"},{"begin":2333,"end":2632,"name":"tag","value":"11"},{"begin":2333,"end":2632,"name":"JUMPDEST"},{"begin":2333,"end":2632,"name":"PUSH [tag]","value":"12"},{"begin":2333,"end":2632,"name":"PUSH","value":"4"},{"begin":2333,"end":2632,"name":"CALLDATALOAD"},{"begin":2333,"end":2632,"name":"PUSH [tag]","value":"13"},{"begin":2333,"end":2632,"name":"JUMP"},{"begin":2333,"end":2632,"name":"tag","value":"12"},{"begin":2333,"end":2632,"name":"JUMPDEST"},{"begin":2333,"end":2632,"name":"STOP"},{"begin":693,"end":734,"name":"tag","value":"3"},{"begin":693,"end":734,"name":"JUMPDEST"},{"begin":693,"end":734,"name":"CALLVALUE"},{"begin":693,"end":734,"name":"ISZERO"},{"begin":693,"end":734,"name":"PUSH [tag]","value":"14"},{"begin":693,"end":734,"name":"JUMPI"},{"begin":693,"end":734,"name":"PUSH","value":"0"},{"begin":693,"end":734,"name":"DUP1"},{"begin":693,"end":734,"name":"REVERT"},{"begin":693,"end":734,"name":"tag","value":"14"},{"begin":693,"end":734,"name":"JUMPDEST"},{"begin":693,"end":734,"name":"PUSH [tag]","value":"15"},{"begin":693,"end":734,"name":"PUSH","value":"4"},{"begin":693,"end":734,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":693,"end":734,"name":"AND"},{"begin":693,"end":734,"name":"PUSH [tag]","value":"16"},{"begin":693,"end":734,"name":"JUMP"},{"begin":693,"end":734,"name":"tag","value":"15"},{"begin":693,"end":734,"name":"JUMPDEST"},{"begin":693,"end":734,"name":"PUSH","value":"40"},{"begin":693,"end":734,"name":"MLOAD"},{"begin":693,"end":734,"name":"SWAP1"},{"begin":693,"end":734,"name":"ISZERO"},{"begin":693,"end":734,"name":"ISZERO"},{"begin":693,"end":734,"name":"DUP2"},{"begin":693,"end":734,"name":"MSTORE"},{"begin":693,"end":734,"name":"PUSH","value":"20"},{"begin":693,"end":734,"name":"ADD"},{"begin":693,"end":734,"name":"PUSH","value":"40"},{"begin":693,"end":734,"name":"MLOAD"},{"begin":693,"end":734,"name":"DUP1"},{"begin":693,"end":734,"name":"SWAP2"},{"begin":693,"end":734,"name":"SUB"},{"begin":693,"end":734,"name":"SWAP1"},{"begin":693,"end":734,"name":"RETURN"},{"begin":628,"end":650,"name":"tag","value":"4"},{"begin":628,"end":650,"name":"JUMPDEST"},{"begin":628,"end":650,"name":"CALLVALUE"},{"begin":628,"end":650,"name":"ISZERO"},{"begin":628,"end":650,"name":"PUSH [tag]","value":"17"},{"begin":628,"end":650,"name":"JUMPI"},{"begin":628,"end":650,"name":"PUSH","value":"0"},{"begin":628,"end":650,"name":"DUP1"},{"begin":628,"end":650,"name":"REVERT"},{"begin":628,"end":650,"name":"tag","value":"17"},{"begin":628,"end":650,"name":"JUMPDEST"},{"begin":628,"end":650,"name":"PUSH [tag]","value":"18"},{"begin":628,"end":650,"name":"PUSH [tag]","value":"19"},{"begin":628,"end":650,"name":"JUMP"},{"begin":628,"end":650,"name":"tag","value":"18"},{"begin":628,"end":650,"name":"JUMPDEST"},{"begin":628,"end":650,"name":"PUSH","value":"40"},{"begin":628,"end":650,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":628,"end":650,"name":"SWAP2"},{"begin":628,"end":650,"name":"SWAP1"},{"begin":628,"end":650,"name":"SWAP2"},{"begin":628,"end":650,"name":"AND"},{"begin":628,"end":650,"name":"DUP2"},{"begin":628,"end":650,"name":"MSTORE"},{"begin":628,"end":650,"name":"PUSH","value":"20"},{"begin":628,"end":650,"name":"ADD"},{"begin":628,"end":650,"name":"PUSH","value":"40"},{"begin":628,"end":650,"name":"MLOAD"},{"begin":628,"end":650,"name":"DUP1"},{"begin":628,"end":650,"name":"SWAP2"},{"begin":628,"end":650,"name":"SUB"},{"begin":628,"end":650,"name":"SWAP1"},{"begin":628,"end":650,"name":"RETURN"},{"begin":597,"end":622,"name":"tag","value":"5"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"CALLVALUE"},{"begin":597,"end":622,"name":"ISZERO"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"20"},{"begin":597,"end":622,"name":"JUMPI"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"REVERT"},{"begin":597,"end":622,"name":"tag","value":"20"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"21"},{"begin":597,"end":622,"name":"PUSH","value":"4"},{"begin":597,"end":622,"name":"CALLDATALOAD"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"22"},{"begin":597,"end":622,"name":"JUMP"},{"begin":597,"end":622,"name":"tag","value":"21"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"PUSH","value":"40"},{"begin":597,"end":622,"name":"MLOAD"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"DUP6"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":597,"end":622,"name":"DUP5"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"PUSH","value":"40"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"ISZERO"},{"begin":597,"end":622,"name":"ISZERO"},{"begin":597,"end":622,"name":"PUSH","value":"60"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"PUSH","value":"80"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"DUP8"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"MLOAD"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"MLOAD"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"DUP4"},{"begin":597,"end":622,"name":"DUP4"},{"begin":23,"end":24,"name":"PUSH","value":"0"},{"begin":8,"end":108,"name":"tag","value":"23"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":33,"end":36,"name":"DUP4"},{"begin":30,"end":31,"name":"DUP2"},{"begin":27,"end":37,"name":"LT"},{"begin":8,"end":108,"name":"ISZERO"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"24"},{"begin":8,"end":108,"name":"JUMPI"},{"begin":99,"end":100,"name":"DUP1"},{"begin":94,"end":97,"name":"DUP3"},{"begin":90,"end":101,"name":"ADD"},{"begin":84,"end":102,"name":"MLOAD"},{"begin":71,"end":82,"name":"DUP4"},{"begin":71,"end":82,"name":"DUP3"},{"begin":71,"end":82,"name":"ADD"},{"begin":64,"end":103,"name":"MSTORE"},{"begin":52,"end":54,"name":"PUSH","value":"20"},{"begin":45,"end":55,"name":"ADD"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"23"},{"begin":8,"end":108,"name":"JUMP"},{"begin":8,"end":108,"name":"tag","value":"24"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":12,"end":26,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"PUSH","value":"1F"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"ISZERO"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"26"},{"begin":597,"end":622,"name":"JUMPI"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"SUB"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"MLOAD"},{"begin":597,"end":622,"name":"PUSH","value":"1"},{"begin":597,"end":622,"name":"DUP4"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"SUB"},{"begin":597,"end":622,"name":"PUSH","value":"100"},{"begin":597,"end":622,"name":"EXP"},{"begin":597,"end":622,"name":"SUB"},{"begin":597,"end":622,"name":"NOT"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"tag","value":"26"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"SWAP7"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"PUSH","value":"40"},{"begin":597,"end":622,"name":"MLOAD"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"SUB"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"RETURN"},{"begin":740,"end":766,"name":"tag","value":"6"},{"begin":740,"end":766,"name":"JUMPDEST"},{"begin":740,"end":766,"name":"CALLVALUE"},{"begin":740,"end":766,"name":"ISZERO"},{"begin":740,"end":766,"name":"PUSH [tag]","value":"27"},{"begin":740,"end":766,"name":"JUMPI"},{"begin":740,"end":766,"name":"PUSH","value":"0"},{"begin":740,"end":766,"name":"DUP1"},{"begin":740,"end":766,"name":"REVERT"},{"begin":740,"end":766,"name":"tag","value":"27"},{"begin":740,"end":766,"name":"JUMPDEST"},{"begin":740,"end":766,"name":"PUSH [tag]","value":"28"},{"begin":740,"end":766,"name":"PUSH [tag]","value":"29"},{"begin":740,"end":766,"name":"JUMP"},{"begin":740,"end":766,"name":"tag","value":"28"},{"begin":740,"end":766,"name":"JUMPDEST"},{"begin":740,"end":766,"name":"PUSH","value":"40"},{"begin":740,"end":766,"name":"MLOAD"},{"begin":740,"end":766,"name":"SWAP1"},{"begin":740,"end":766,"name":"DUP2"},{"begin":740,"end":766,"name":"MSTORE"},{"begin":740,"end":766,"name":"PUSH","value":"20"},{"begin":740,"end":766,"name":"ADD"},{"begin":740,"end":766,"name":"PUSH","value":"40"},{"begin":740,"end":766,"name":"MLOAD"},{"begin":740,"end":766,"name":"DUP1"},{"begin":740,"end":766,"name":"SWAP2"},{"begin":740,"end":766,"name":"SUB"},{"begin":740,"end":766,"name":"SWAP1"},{"begin":740,"end":766,"name":"RETURN"},{"begin":1159,"end":1962,"name":"tag","value":"7"},{"begin":1159,"end":1962,"name":"JUMPDEST"},{"begin":1159,"end":1962,"name":"CALLVALUE"},{"begin":1159,"end":1962,"name":"ISZERO"},{"begin":1159,"end":1962,"name":"PUSH [tag]","value":"30"},{"begin":1159,"end":1962,"name":"JUMPI"},{"begin":1159,"end":1962,"name":"PUSH","value":"0"},{"begin":1159,"end":1962,"name":"DUP1"},{"begin":1159,"end":1962,"name":"REVERT"},{"begin":1159,"end":1962,"name":"tag","value":"30"},{"begin":1159,"end":1962,"name":"JUMPDEST"},{"begin":1159,"end":1962,"name":"PUSH [tag]","value":"12"},{"begin":1159,"end":1962,"name":"PUSH","value":"4"},{"begin":1159,"end":1962,"name":"PUSH","value":"24"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"CALLDATALOAD"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"ADD"},{"begin":1159,"end":1962,"name":"SWAP1"},{"begin":1159,"end":1962,"name":"DUP4"},{"begin":1159,"end":1962,"name":"ADD"},{"begin":1159,"end":1962,"name":"CALLDATALOAD"},{"begin":1159,"end":1962,"name":"DUP1"},{"begin":1159,"end":1962,"name":"PUSH","value":"20"},{"begin":1159,"end":1962,"name":"PUSH","value":"1F"},{"begin":1159,"end":1962,"name":"DUP3"},{"begin":1159,"end":1962,"name":"ADD"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"SWAP1"},{"begin":1159,"end":1962,"name":"DIV"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"MUL"},{"begin":1159,"end":1962,"name":"ADD"},{"begin":1159,"end":1962,"name":"PUSH","value":"40"},{"begin":1159,"end":1962,"name":"MLOAD"},{"begin":1159,"end":1962,"name":"SWAP1"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"ADD"},{"begin":1159,"end":1962,"name":"PUSH","value":"40"},{"begin":1159,"end":1962,"name":"MSTORE"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"DUP2"},{"begin":1159,"end":1962,"name":"MSTORE"},{"begin":1159,"end":1962,"name":"SWAP3"},{"begin":1159,"end":1962,"name":"SWAP2"},{"begin":1159,"end":1962,"name":"SWAP1"},{"begin":1159,"end":1962,"name":"PUSH","value":"20"},{"begin":1159,"end":1962,"name":"DUP5"},{"begin":1159,"end":1962,"name":"ADD"},{"begin":1159,"end":1962,"name":"DUP4"},{"begin":1159,"end":1962,"name":"DUP4"},{"begin":1159,"end":1962,"name":"DUP1"},{"begin":1159,"end":1962,"name":"DUP3"},{"begin":1159,"end":1962,"name":"DUP5"},{"begin":1159,"end":1962,"name":"CALLDATACOPY"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1159,"end":1962,"name":"SWAP5"},{"begin":1159,"end":1962,"name":"SWAP7"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1159,"end":1962,"name":"DUP5"},{"begin":1159,"end":1962,"name":"CALLDATALOAD"},{"begin":1159,"end":1962,"name":"SWAP5"},{"begin":1159,"end":1962,"name":"PUSH","value":"20"},{"begin":1159,"end":1962,"name":"ADD"},{"begin":1159,"end":1962,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1159,"end":1962,"name":"AND"},{"begin":1159,"end":1962,"name":"SWAP4"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1159,"end":1962,"name":"PUSH [tag]","value":"32"},{"begin":1159,"end":1962,"name":"SWAP3"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1159,"end":1962,"name":"JUMP"},{"begin":656,"end":687,"name":"tag","value":"8"},{"begin":656,"end":687,"name":"JUMPDEST"},{"begin":656,"end":687,"name":"CALLVALUE"},{"begin":656,"end":687,"name":"ISZERO"},{"begin":656,"end":687,"name":"PUSH [tag]","value":"33"},{"begin":656,"end":687,"name":"JUMPI"},{"begin":656,"end":687,"name":"PUSH","value":"0"},{"begin":656,"end":687,"name":"DUP1"},{"begin":656,"end":687,"name":"REVERT"},{"begin":656,"end":687,"name":"tag","value":"33"},{"begin":656,"end":687,"name":"JUMPDEST"},{"begin":656,"end":687,"name":"PUSH [tag]","value":"28"},{"begin":656,"end":687,"name":"PUSH [tag]","value":"35"},{"begin":656,"end":687,"name":"JUMP"},{"begin":994,"end":1153,"name":"tag","value":"9"},{"begin":994,"end":1153,"name":"JUMPDEST"},{"begin":994,"end":1153,"name":"PUSH [tag]","value":"12"},{"begin":994,"end":1153,"name":"PUSH [tag]","value":"37"},{"begin":994,"end":1153,"name":"JUMP"},{"begin":1968,"end":2327,"name":"tag","value":"10"},{"begin":1968,"end":2327,"name":"JUMPDEST"},{"begin":1968,"end":2327,"name":"CALLVALUE"},{"begin":1968,"end":2327,"name":"ISZERO"},{"begin":1968,"end":2327,"name":"PUSH [tag]","value":"38"},{"begin":1968,"end":2327,"name":"JUMPI"},{"begin":1968,"end":2327,"name":"PUSH","value":"0"},{"begin":1968,"end":2327,"name":"DUP1"},{"begin":1968,"end":2327,"name":"REVERT"},{"begin":1968,"end":2327,"name":"tag","value":"38"},{"begin":1968,"end":2327,"name":"JUMPDEST"},{"begin":1968,"end":2327,"name":"PUSH [tag]","value":"12"},{"begin":1968,"end":2327,"name":"PUSH","value":"4"},{"begin":1968,"end":2327,"name":"CALLDATALOAD"},{"begin":1968,"end":2327,"name":"PUSH [tag]","value":"40"},{"begin":1968,"end":2327,"name":"JUMP"},{"begin":2333,"end":2632,"name":"tag","value":"13"},{"begin":2333,"end":2632,"name":"JUMPDEST"},{"begin":827,"end":834,"name":"PUSH","value":"1"},{"begin":827,"end":834,"name":"SLOAD"},{"begin":2398,"end":2421,"name":"PUSH","value":"0"},{"begin":2398,"end":2421,"name":"SWAP1"},{"begin":813,"end":823,"name":"CALLER"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":813,"end":834,"name":"SWAP1"},{"begin":813,"end":834,"name":"DUP2"},{"begin":813,"end":834,"name":"AND"},{"begin":827,"end":834,"name":"SWAP2"},{"begin":827,"end":834,"name":"AND"},{"begin":813,"end":834,"name":"EQ"},{"begin":805,"end":835,"name":"PUSH [tag]","value":"42"},{"begin":805,"end":835,"name":"JUMPI"},{"begin":805,"end":835,"name":"PUSH","value":"0"},{"begin":805,"end":835,"name":"DUP1"},{"begin":805,"end":835,"name":"REVERT"},{"begin":805,"end":835,"name":"tag","value":"42"},{"begin":805,"end":835,"name":"JUMPDEST"},{"begin":2424,"end":2432,"name":"PUSH","value":"0"},{"begin":2424,"end":2439,"name":"DUP1"},{"begin":2424,"end":2439,"name":"SLOAD"},{"begin":2433,"end":2438,"name":"DUP4"},{"begin":2433,"end":2438,"name":"SWAP1"},{"begin":2424,"end":2439,"name":"DUP2"},{"begin":2424,"end":2439,"name":"LT"},{"begin":2424,"end":2439,"name":"PUSH [tag]","value":"44"},{"begin":2424,"end":2439,"name":"JUMPI"},{"begin":2424,"end":2439,"name":"INVALID"},{"begin":2424,"end":2439,"name":"tag","value":"44"},{"begin":2424,"end":2439,"name":"JUMPDEST"},{"begin":2424,"end":2439,"name":"SWAP1"},{"begin":2424,"end":2439,"name":"PUSH","value":"0"},{"begin":2424,"end":2439,"name":"MSTORE"},{"begin":2424,"end":2439,"name":"PUSH","value":"20"},{"begin":2424,"end":2439,"name":"PUSH","value":"0"},{"begin":2424,"end":2439,"name":"KECCAK256"},{"begin":2424,"end":2439,"name":"SWAP1"},{"begin":2424,"end":2439,"name":"PUSH","value":"5"},{"begin":2424,"end":2439,"name":"MUL"},{"begin":2424,"end":2439,"name":"ADD"},{"begin":2398,"end":2439,"name":"SWAP1"},{"begin":2398,"end":2439,"name":"POP"},{"begin":2501,"end":2502,"name":"PUSH","value":"2"},{"begin":2484,"end":2498,"name":"PUSH","value":"4"},{"begin":2484,"end":2498,"name":"SLOAD"},{"begin":2484,"end":2502,"name":"DUP2"},{"begin":2484,"end":2502,"name":"ISZERO"},{"begin":2484,"end":2502,"name":"ISZERO"},{"begin":2484,"end":2502,"name":"PUSH [tag]","value":"46"},{"begin":2484,"end":2502,"name":"JUMPI"},{"begin":2484,"end":2502,"name":"INVALID"},{"begin":2484,"end":2502,"name":"tag","value":"46"},{"begin":2484,"end":2502,"name":"JUMPDEST"},{"begin":2484,"end":2502,"name":"DIV"},{"begin":2459,"end":2466,"name":"DUP2"},{"begin":2459,"end":2480,"name":"PUSH","value":"3"},{"begin":2459,"end":2480,"name":"ADD"},{"begin":2459,"end":2480,"name":"SLOAD"},{"begin":2459,"end":2503,"name":"GT"},{"begin":2451,"end":2504,"name":"ISZERO"},{"begin":2451,"end":2504,"name":"ISZERO"},{"begin":2451,"end":2504,"name":"PUSH [tag]","value":"47"},{"begin":2451,"end":2504,"name":"JUMPI"},{"begin":2451,"end":2504,"name":"PUSH","value":"0"},{"begin":2451,"end":2504,"name":"DUP1"},{"begin":2451,"end":2504,"name":"REVERT"},{"begin":2451,"end":2504,"name":"tag","value":"47"},{"begin":2451,"end":2504,"name":"JUMPDEST"},{"begin":2523,"end":2539,"name":"PUSH","value":"2"},{"begin":2523,"end":2539,"name":"DUP2"},{"begin":2523,"end":2539,"name":"ADD"},{"begin":2523,"end":2539,"name":"SLOAD"},{"begin":2523,"end":2539,"name":"PUSH","value":"10000000000000000000000000000000000000000"},{"begin":2523,"end":2539,"name":"SWAP1"},{"begin":2523,"end":2539,"name":"DIV"},{"begin":2523,"end":2539,"name":"PUSH","value":"FF"},{"begin":2523,"end":2539,"name":"AND"},{"begin":2522,"end":2539,"name":"ISZERO"},{"begin":2514,"end":2540,"name":"PUSH [tag]","value":"48"},{"begin":2514,"end":2540,"name":"JUMPI"},{"begin":2514,"end":2540,"name":"PUSH","value":"0"},{"begin":2514,"end":2540,"name":"DUP1"},{"begin":2514,"end":2540,"name":"REVERT"},{"begin":2514,"end":2540,"name":"tag","value":"48"},{"begin":2514,"end":2540,"name":"JUMPDEST"},{"begin":2551,"end":2568,"name":"PUSH","value":"2"},{"begin":2551,"end":2568,"name":"DUP2"},{"begin":2551,"end":2568,"name":"ADD"},{"begin":2551,"end":2568,"name":"SLOAD"},{"begin":2551,"end":2568,"name":"PUSH","value":"1"},{"begin":2578,"end":2591,"name":"DUP3"},{"begin":2578,"end":2591,"name":"ADD"},{"begin":2578,"end":2591,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2551,"end":2568,"name":"SWAP1"},{"begin":2551,"end":2568,"name":"SWAP2"},{"begin":2551,"end":2568,"name":"AND"},{"begin":2551,"end":2568,"name":"SWAP1"},{"begin":2551,"end":2592,"name":"PUSH","value":"8FC"},{"begin":2551,"end":2592,"name":"DUP2"},{"begin":2551,"end":2592,"name":"ISZERO"},{"begin":2551,"end":2592,"name":"MUL"},{"begin":2551,"end":2592,"name":"SWAP1"},{"begin":2551,"end":2592,"name":"PUSH","value":"40"},{"begin":2551,"end":2592,"name":"MLOAD"},{"begin":2551,"end":2592,"name":"PUSH","value":"0"},{"begin":2551,"end":2592,"name":"PUSH","value":"40"},{"begin":2551,"end":2592,"name":"MLOAD"},{"begin":2551,"end":2592,"name":"DUP1"},{"begin":2551,"end":2592,"name":"DUP4"},{"begin":2551,"end":2592,"name":"SUB"},{"begin":2551,"end":2592,"name":"DUP2"},{"begin":2551,"end":2592,"name":"DUP6"},{"begin":2551,"end":2592,"name":"DUP9"},{"begin":2551,"end":2592,"name":"DUP9"},{"begin":2551,"end":2592,"name":"CALL"},{"begin":2551,"end":2592,"name":"SWAP4"},{"begin":2551,"end":2592,"name":"POP"},{"begin":2551,"end":2592,"name":"POP"},{"begin":2551,"end":2592,"name":"POP"},{"begin":2551,"end":2592,"name":"POP"},{"begin":2551,"end":2592,"name":"ISZERO"},{"begin":2551,"end":2592,"name":"ISZERO"},{"begin":2551,"end":2592,"name":"PUSH [tag]","value":"49"},{"begin":2551,"end":2592,"name":"JUMPI"},{"begin":2551,"end":2592,"name":"PUSH","value":"0"},{"begin":2551,"end":2592,"name":"DUP1"},{"begin":2551,"end":2592,"name":"REVERT"},{"begin":2551,"end":2592,"name":"tag","value":"49"},{"begin":2551,"end":2592,"name":"JUMPDEST"},{"begin":2602,"end":2618,"name":"PUSH","value":"2"},{"begin":2602,"end":2618,"name":"ADD"},{"begin":2602,"end":2625,"name":"DUP1"},{"begin":2602,"end":2625,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF0000000000000000000000000000000000000000"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":2602,"end":2625,"name":"AND"},{"begin":2602,"end":2625,"name":"PUSH","value":"10000000000000000000000000000000000000000"},{"begin":2602,"end":2625,"name":"OR"},{"begin":2602,"end":2625,"name":"SWAP1"},{"begin":2602,"end":2625,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2333,"end":2632,"name":"JUMP","value":"[out]"},{"begin":693,"end":734,"name":"tag","value":"16"},{"begin":693,"end":734,"name":"JUMPDEST"},{"begin":693,"end":734,"name":"PUSH","value":"3"},{"begin":693,"end":734,"name":"PUSH","value":"20"},{"begin":693,"end":734,"name":"MSTORE"},{"begin":693,"end":734,"name":"PUSH","value":"0"},{"begin":693,"end":734,"name":"SWAP1"},{"begin":693,"end":734,"name":"DUP2"},{"begin":693,"end":734,"name":"MSTORE"},{"begin":693,"end":734,"name":"PUSH","value":"40"},{"begin":693,"end":734,"name":"SWAP1"},{"begin":693,"end":734,"name":"KECCAK256"},{"begin":693,"end":734,"name":"SLOAD"},{"begin":693,"end":734,"name":"PUSH","value":"FF"},{"begin":693,"end":734,"name":"AND"},{"begin":693,"end":734,"name":"DUP2"},{"begin":693,"end":734,"name":"JUMP","value":"[out]"},{"begin":628,"end":650,"name":"tag","value":"19"},{"begin":628,"end":650,"name":"JUMPDEST"},{"begin":628,"end":650,"name":"PUSH","value":"1"},{"begin":628,"end":650,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":628,"end":650,"name":"AND"},{"begin":628,"end":650,"name":"DUP2"},{"begin":628,"end":650,"name":"JUMP","value":"[out]"},{"begin":597,"end":622,"name":"tag","value":"22"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"LT"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"50"},{"begin":597,"end":622,"name":"JUMPI"},{"begin":597,"end":622,"name":"INVALID"},{"begin":597,"end":622,"name":"tag","value":"50"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"KECCAK256"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"PUSH","value":"5"},{"begin":597,"end":622,"name":"MUL"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"POP"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"PUSH","value":"1"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"PUSH","value":"1"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"ISZERO"},{"begin":597,"end":622,"name":"PUSH","value":"100"},{"begin":597,"end":622,"name":"MUL"},{"begin":597,"end":622,"name":"SUB"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"PUSH","value":"2"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DIV"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"PUSH","value":"1F"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"DIV"},{"begin":597,"end":622,"name":"MUL"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"PUSH","value":"40"},{"begin":597,"end":622,"name":"MLOAD"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"PUSH","value":"40"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"SWAP3"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"PUSH","value":"1"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"PUSH","value":"1"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"ISZERO"},{"begin":597,"end":622,"name":"PUSH","value":"100"},{"begin":597,"end":622,"name":"MUL"},{"begin":597,"end":622,"name":"SUB"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"PUSH","value":"2"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DIV"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"ISZERO"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"52"},{"begin":597,"end":622,"name":"JUMPI"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"PUSH","value":"1F"},{"begin":597,"end":622,"name":"LT"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"53"},{"begin":597,"end":622,"name":"JUMPI"},{"begin":597,"end":622,"name":"PUSH","value":"100"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"DUP4"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"DIV"},{"begin":597,"end":622,"name":"MUL"},{"begin":597,"end":622,"name":"DUP4"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"52"},{"begin":597,"end":622,"name":"JUMP"},{"begin":597,"end":622,"name":"tag","value":"53"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"PUSH","value":"0"},{"begin":597,"end":622,"name":"KECCAK256"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"tag","value":"54"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"DUP2"},{"begin":597,"end":622,"name":"MSTORE"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"PUSH","value":"1"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"PUSH","value":"20"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"DUP1"},{"begin":597,"end":622,"name":"DUP4"},{"begin":597,"end":622,"name":"GT"},{"begin":597,"end":622,"name":"PUSH [tag]","value":"54"},{"begin":597,"end":622,"name":"JUMPI"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"SUB"},{"begin":597,"end":622,"name":"PUSH","value":"1F"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"tag","value":"52"},{"begin":597,"end":622,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":597,"end":622,"name":"PUSH","value":"1"},{"begin":597,"end":622,"name":"DUP4"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"PUSH","value":"2"},{"begin":597,"end":622,"name":"DUP5"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"PUSH","value":"3"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"SWAP5"},{"begin":597,"end":622,"name":"ADD"},{"begin":597,"end":622,"name":"SLOAD"},{"begin":597,"end":622,"name":"SWAP3"},{"begin":597,"end":622,"name":"SWAP4"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"SWAP3"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":597,"end":622,"name":"DUP3"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"SWAP3"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"PUSH","value":"10000000000000000000000000000000000000000"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"SWAP2"},{"begin":597,"end":622,"name":"DIV"},{"begin":597,"end":622,"name":"PUSH","value":"FF"},{"begin":597,"end":622,"name":"AND"},{"begin":597,"end":622,"name":"SWAP1"},{"begin":597,"end":622,"name":"DUP6"},{"begin":597,"end":622,"name":"JUMP","value":"[out]"},{"begin":740,"end":766,"name":"tag","value":"29"},{"begin":740,"end":766,"name":"JUMPDEST"},{"begin":740,"end":766,"name":"PUSH","value":"4"},{"begin":740,"end":766,"name":"SLOAD"},{"begin":740,"end":766,"name":"DUP2"},{"begin":740,"end":766,"name":"JUMP","value":"[out]"},{"begin":1159,"end":1962,"name":"tag","value":"32"},{"begin":1159,"end":1962,"name":"JUMPDEST"},{"begin":1273,"end":1298,"name":"PUSH [tag]","value":"55"},{"begin":1273,"end":1298,"name":"PUSH [tag]","value":"56"},{"begin":1273,"end":1298,"name":"JUMP","value":"[in]"},{"begin":1273,"end":1298,"name":"tag","value":"55"},{"begin":1273,"end":1298,"name":"JUMPDEST"},{"begin":827,"end":834,"name":"PUSH","value":"1"},{"begin":827,"end":834,"name":"SLOAD"},{"begin":813,"end":823,"name":"CALLER"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":813,"end":834,"name":"SWAP1"},{"begin":813,"end":834,"name":"DUP2"},{"begin":813,"end":834,"name":"AND"},{"begin":827,"end":834,"name":"SWAP2"},{"begin":827,"end":834,"name":"AND"},{"begin":813,"end":834,"name":"EQ"},{"begin":805,"end":835,"name":"PUSH [tag]","value":"58"},{"begin":805,"end":835,"name":"JUMPI"},{"begin":805,"end":835,"name":"PUSH","value":"0"},{"begin":805,"end":835,"name":"DUP1"},{"begin":805,"end":835,"name":"REVERT"},{"begin":805,"end":835,"name":"tag","value":"58"},{"begin":805,"end":835,"name":"JUMPDEST"},{"begin":1301,"end":1806,"name":"PUSH","value":"A0"},{"begin":1301,"end":1806,"name":"PUSH","value":"40"},{"begin":1301,"end":1806,"name":"MLOAD"},{"begin":1301,"end":1806,"name":"SWAP1"},{"begin":1301,"end":1806,"name":"DUP2"},{"begin":1301,"end":1806,"name":"ADD"},{"begin":1301,"end":1806,"name":"PUSH","value":"40"},{"begin":1301,"end":1806,"name":"SWAP1"},{"begin":1301,"end":1806,"name":"DUP2"},{"begin":1301,"end":1806,"name":"MSTORE"},{"begin":1301,"end":1806,"name":"DUP6"},{"begin":1301,"end":1806,"name":"DUP3"},{"begin":1301,"end":1806,"name":"MSTORE"},{"begin":1301,"end":1806,"name":"PUSH","value":"20"},{"begin":1301,"end":1806,"name":"DUP3"},{"begin":1301,"end":1806,"name":"ADD"},{"begin":1301,"end":1806,"name":"DUP6"},{"begin":1301,"end":1806,"name":"SWAP1"},{"begin":1301,"end":1806,"name":"MSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1301,"end":1806,"name":"DUP5"},{"begin":1301,"end":1806,"name":"AND"},{"begin":1301,"end":1806,"name":"SWAP1"},{"begin":1301,"end":1806,"name":"DUP3"},{"begin":1301,"end":1806,"name":"ADD"},{"begin":1301,"end":1806,"name":"MSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"0"},{"begin":1301,"end":1806,"name":"PUSH","value":"60"},{"begin":1301,"end":1806,"name":"DUP3"},{"begin":1301,"end":1806,"name":"ADD"},{"begin":1301,"end":1806,"name":"DUP2"},{"begin":1301,"end":1806,"name":"SWAP1"},{"begin":1301,"end":1806,"name":"MSTORE"},{"begin":1301,"end":1806,"name":"PUSH","value":"80"},{"begin":1301,"end":1806,"name":"DUP3"},{"begin":1301,"end":1806,"name":"ADD"},{"begin":1301,"end":1806,"name":"DUP2"},{"begin":1301,"end":1806,"name":"SWAP1"},{"begin":1301,"end":1806,"name":"MSTORE"},{"begin":1930,"end":1955,"name":"DUP1"},{"begin":1930,"end":1955,"name":"SLOAD"},{"begin":1301,"end":1806,"name":"SWAP2"},{"begin":1301,"end":1806,"name":"SWAP3"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":1930,"end":1955,"name":"DUP2"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"PUSH [tag]","value":"60"},{"begin":-1,"end":-1,"name":"DUP4"},{"begin":1930,"end":1955,"name":"DUP3"},{"begin":1930,"end":1955,"name":"PUSH [tag]","value":"61"},{"begin":1930,"end":1955,"name":"JUMP","value":"[in]"},{"begin":1930,"end":1955,"name":"tag","value":"60"},{"begin":1930,"end":1955,"name":"JUMPDEST"},{"begin":1930,"end":1955,"name":"PUSH","value":"0"},{"begin":1930,"end":1955,"name":"SWAP3"},{"begin":1930,"end":1955,"name":"DUP4"},{"begin":1930,"end":1955,"name":"MSTORE"},{"begin":1930,"end":1955,"name":"PUSH","value":"20"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"SWAP3"},{"begin":1930,"end":1955,"name":"KECCAK256"},{"begin":1944,"end":1954,"name":"DUP4"},{"begin":1944,"end":1954,"name":"SWAP2"},{"begin":1930,"end":1955,"name":"PUSH","value":"5"},{"begin":1930,"end":1955,"name":"MUL"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1944,"end":1954,"name":"DUP2"},{"begin":1930,"end":1955,"name":"MLOAD"},{"begin":1930,"end":1955,"name":"DUP2"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"DUP1"},{"begin":1930,"end":1955,"name":"MLOAD"},{"begin":1930,"end":1955,"name":"PUSH [tag]","value":"63"},{"begin":1930,"end":1955,"name":"SWAP3"},{"begin":1930,"end":1955,"name":"SWAP2"},{"begin":1930,"end":1955,"name":"PUSH","value":"20"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"PUSH [tag]","value":"64"},{"begin":1930,"end":1955,"name":"JUMP","value":"[in]"},{"begin":1930,"end":1955,"name":"tag","value":"63"},{"begin":1930,"end":1955,"name":"JUMPDEST"},{"begin":1930,"end":1955,"name":"POP"},{"begin":1930,"end":1955,"name":"PUSH","value":"20"},{"begin":1930,"end":1955,"name":"DUP3"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"MLOAD"},{"begin":1930,"end":1955,"name":"DUP2"},{"begin":1930,"end":1955,"name":"PUSH","value":"1"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"SSTORE"},{"begin":1930,"end":1955,"name":"PUSH","value":"40"},{"begin":1930,"end":1955,"name":"DUP3"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"MLOAD"},{"begin":1930,"end":1955,"name":"PUSH","value":"2"},{"begin":1930,"end":1955,"name":"DUP3"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"DUP1"},{"begin":1930,"end":1955,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1930,"end":1955,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1930,"end":1955,"name":"SWAP3"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"SWAP3"},{"begin":1930,"end":1955,"name":"AND"},{"begin":1930,"end":1955,"name":"SWAP2"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"SWAP2"},{"begin":1930,"end":1955,"name":"OR"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"SSTORE"},{"begin":1930,"end":1955,"name":"PUSH","value":"60"},{"begin":1930,"end":1955,"name":"DUP3"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"MLOAD"},{"begin":1930,"end":1955,"name":"PUSH","value":"2"},{"begin":1930,"end":1955,"name":"DUP3"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"DUP1"},{"begin":1930,"end":1955,"name":"SLOAD"},{"begin":1930,"end":1955,"name":"SWAP2"},{"begin":1930,"end":1955,"name":"ISZERO"},{"begin":1930,"end":1955,"name":"ISZERO"},{"begin":1930,"end":1955,"name":"PUSH","value":"10000000000000000000000000000000000000000"},{"begin":1930,"end":1955,"name":"MUL"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF0000000000000000000000000000000000000000"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"SWAP3"},{"begin":1930,"end":1955,"name":"AND"},{"begin":1930,"end":1955,"name":"SWAP2"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"SWAP2"},{"begin":1930,"end":1955,"name":"OR"},{"begin":1930,"end":1955,"name":"SWAP1"},{"begin":1930,"end":1955,"name":"SSTORE"},{"begin":1930,"end":1955,"name":"PUSH","value":"80"},{"begin":1930,"end":1955,"name":"DUP3"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"MLOAD"},{"begin":1930,"end":1955,"name":"DUP2"},{"begin":1930,"end":1955,"name":"PUSH","value":"3"},{"begin":1930,"end":1955,"name":"ADD"},{"begin":1930,"end":1955,"name":"SSTORE"},{"begin":1930,"end":1955,"name":"POP"},{"begin":1930,"end":1955,"name":"POP"},{"begin":1930,"end":1955,"name":"POP"},{"begin":1159,"end":1962,"name":"POP"},{"begin":1159,"end":1962,"name":"POP"},{"begin":1159,"end":1962,"name":"POP"},{"begin":1159,"end":1962,"name":"POP"},{"begin":1159,"end":1962,"name":"JUMP","value":"[out]"},{"begin":656,"end":687,"name":"tag","value":"35"},{"begin":656,"end":687,"name":"JUMPDEST"},{"begin":656,"end":687,"name":"PUSH","value":"2"},{"begin":656,"end":687,"name":"SLOAD"},{"begin":656,"end":687,"name":"DUP2"},{"begin":656,"end":687,"name":"JUMP","value":"[out]"},{"begin":994,"end":1153,"name":"tag","value":"37"},{"begin":994,"end":1153,"name":"JUMPDEST"},{"begin":1061,"end":1080,"name":"PUSH","value":"2"},{"begin":1061,"end":1080,"name":"SLOAD"},{"begin":1049,"end":1058,"name":"CALLVALUE"},{"begin":1049,"end":1080,"name":"GT"},{"begin":1041,"end":1081,"name":"PUSH [tag]","value":"66"},{"begin":1041,"end":1081,"name":"JUMPI"},{"begin":1041,"end":1081,"name":"PUSH","value":"0"},{"begin":1041,"end":1081,"name":"DUP1"},{"begin":1041,"end":1081,"name":"REVERT"},{"begin":1041,"end":1081,"name":"tag","value":"66"},{"begin":1041,"end":1081,"name":"JUMPDEST"},{"begin":1102,"end":1112,"name":"CALLER"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1092,"end":1113,"name":"AND"},{"begin":1092,"end":1113,"name":"PUSH","value":"0"},{"begin":1092,"end":1113,"name":"SWAP1"},{"begin":1092,"end":1113,"name":"DUP2"},{"begin":1092,"end":1113,"name":"MSTORE"},{"begin":1092,"end":1101,"name":"PUSH","value":"3"},{"begin":1092,"end":1113,"name":"PUSH","value":"20"},{"begin":1092,"end":1113,"name":"MSTORE"},{"begin":1092,"end":1113,"name":"PUSH","value":"40"},{"begin":1092,"end":1113,"name":"SWAP1"},{"begin":1092,"end":1113,"name":"KECCAK256"},{"begin":1092,"end":1120,"name":"DUP1"},{"begin":1092,"end":1120,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1092,"end":1120,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":1092,"end":1120,"name":"SWAP1"},{"begin":1092,"end":1120,"name":"DUP2"},{"begin":1092,"end":1120,"name":"OR"},{"begin":1092,"end":1120,"name":"SWAP1"},{"begin":1092,"end":1120,"name":"SWAP2"},{"begin":1092,"end":1120,"name":"SSTORE"},{"begin":1130,"end":1144,"name":"PUSH","value":"4"},{"begin":1130,"end":1146,"name":"DUP1"},{"begin":1130,"end":1146,"name":"SLOAD"},{"begin":1130,"end":1146,"name":"SWAP1"},{"begin":1130,"end":1146,"name":"SWAP2"},{"begin":1130,"end":1146,"name":"ADD"},{"begin":1130,"end":1146,"name":"SWAP1"},{"begin":1130,"end":1146,"name":"SSTORE"},{"begin":994,"end":1153,"name":"JUMP","value":"[out]"},{"begin":1968,"end":2327,"name":"tag","value":"40"},{"begin":1968,"end":2327,"name":"JUMPDEST"},{"begin":2021,"end":2044,"name":"PUSH","value":"0"},{"begin":2047,"end":2055,"name":"DUP1"},{"begin":2056,"end":2061,"name":"DUP3"},{"begin":2047,"end":2062,"name":"DUP2"},{"begin":2047,"end":2062,"name":"SLOAD"},{"begin":2047,"end":2062,"name":"DUP2"},{"begin":2047,"end":2062,"name":"LT"},{"begin":2047,"end":2062,"name":"ISZERO"},{"begin":2047,"end":2062,"name":"ISZERO"},{"begin":2047,"end":2062,"name":"PUSH [tag]","value":"68"},{"begin":2047,"end":2062,"name":"JUMPI"},{"begin":2047,"end":2062,"name":"INVALID"},{"begin":2047,"end":2062,"name":"tag","value":"68"},{"begin":2047,"end":2062,"name":"JUMPDEST"},{"begin":2047,"end":2062,"name":"PUSH","value":"0"},{"begin":2047,"end":2062,"name":"SWAP2"},{"begin":2047,"end":2062,"name":"DUP3"},{"begin":2047,"end":2062,"name":"MSTORE"},{"begin":2047,"end":2062,"name":"PUSH","value":"20"},{"begin":2047,"end":2062,"name":"DUP1"},{"begin":2047,"end":2062,"name":"DUP4"},{"begin":2047,"end":2062,"name":"KECCAK256"},{"begin":2179,"end":2189,"name":"CALLER"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2169,"end":2190,"name":"AND"},{"begin":2169,"end":2190,"name":"DUP5"},{"begin":2169,"end":2190,"name":"MSTORE"},{"begin":2169,"end":2178,"name":"PUSH","value":"3"},{"begin":2169,"end":2190,"name":"SWAP1"},{"begin":2169,"end":2190,"name":"SWAP2"},{"begin":2169,"end":2190,"name":"MSTORE"},{"begin":2169,"end":2190,"name":"PUSH","value":"40"},{"begin":2169,"end":2190,"name":"SWAP1"},{"begin":2169,"end":2190,"name":"SWAP3"},{"begin":2169,"end":2190,"name":"KECCAK256"},{"begin":2169,"end":2190,"name":"SLOAD"},{"begin":2047,"end":2062,"name":"PUSH","value":"5"},{"begin":2047,"end":2062,"name":"SWAP2"},{"begin":2047,"end":2062,"name":"SWAP1"},{"begin":2047,"end":2062,"name":"SWAP2"},{"begin":2047,"end":2062,"name":"MUL"},{"begin":2047,"end":2062,"name":"SWAP1"},{"begin":2047,"end":2062,"name":"SWAP2"},{"begin":2047,"end":2062,"name":"ADD"},{"begin":2047,"end":2062,"name":"SWAP2"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2169,"end":2190,"name":"PUSH","value":"FF"},{"begin":2169,"end":2190,"name":"AND"},{"begin":2161,"end":2191,"name":"ISZERO"},{"begin":2161,"end":2191,"name":"ISZERO"},{"begin":2161,"end":2191,"name":"PUSH [tag]","value":"70"},{"begin":2161,"end":2191,"name":"JUMPI"},{"begin":2161,"end":2191,"name":"PUSH","value":"0"},{"begin":2161,"end":2191,"name":"DUP1"},{"begin":2161,"end":2191,"name":"REVERT"},{"begin":2161,"end":2191,"name":"tag","value":"70"},{"begin":2161,"end":2191,"name":"JUMPDEST"},{"begin":2228,"end":2238,"name":"CALLER"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2210,"end":2239,"name":"AND"},{"begin":2210,"end":2239,"name":"PUSH","value":"0"},{"begin":2210,"end":2239,"name":"SWAP1"},{"begin":2210,"end":2239,"name":"DUP2"},{"begin":2210,"end":2239,"name":"MSTORE"},{"begin":2210,"end":2227,"name":"PUSH","value":"4"},{"begin":2210,"end":2227,"name":"DUP3"},{"begin":2210,"end":2227,"name":"ADD"},{"begin":2210,"end":2239,"name":"PUSH","value":"20"},{"begin":2210,"end":2239,"name":"MSTORE"},{"begin":2210,"end":2239,"name":"PUSH","value":"40"},{"begin":2210,"end":2239,"name":"SWAP1"},{"begin":2210,"end":2239,"name":"KECCAK256"},{"begin":2210,"end":2239,"name":"SLOAD"},{"begin":2210,"end":2239,"name":"PUSH","value":"FF"},{"begin":2210,"end":2239,"name":"AND"},{"begin":2209,"end":2239,"name":"ISZERO"},{"begin":2201,"end":2240,"name":"PUSH [tag]","value":"71"},{"begin":2201,"end":2240,"name":"JUMPI"},{"begin":2201,"end":2240,"name":"PUSH","value":"0"},{"begin":2201,"end":2240,"name":"DUP1"},{"begin":2201,"end":2240,"name":"REVERT"},{"begin":2201,"end":2240,"name":"tag","value":"71"},{"begin":2201,"end":2240,"name":"JUMPDEST"},{"begin":2269,"end":2279,"name":"CALLER"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2251,"end":2280,"name":"AND"},{"begin":2251,"end":2280,"name":"PUSH","value":"0"},{"begin":2251,"end":2280,"name":"SWAP1"},{"begin":2251,"end":2280,"name":"DUP2"},{"begin":2251,"end":2280,"name":"MSTORE"},{"begin":2251,"end":2268,"name":"PUSH","value":"4"},{"begin":2251,"end":2268,"name":"DUP3"},{"begin":2251,"end":2268,"name":"ADD"},{"begin":2251,"end":2280,"name":"PUSH","value":"20"},{"begin":2251,"end":2280,"name":"MSTORE"},{"begin":2251,"end":2280,"name":"PUSH","value":"40"},{"begin":2251,"end":2280,"name":"SWAP1"},{"begin":2251,"end":2280,"name":"KECCAK256"},{"begin":2251,"end":2287,"name":"DUP1"},{"begin":2251,"end":2287,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":2251,"end":2287,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":2251,"end":2287,"name":"SWAP1"},{"begin":2251,"end":2287,"name":"DUP2"},{"begin":2251,"end":2287,"name":"OR"},{"begin":2251,"end":2287,"name":"SWAP1"},{"begin":2251,"end":2287,"name":"SWAP2"},{"begin":2251,"end":2287,"name":"SSTORE"},{"begin":2297,"end":2318,"name":"PUSH","value":"3"},{"begin":2297,"end":2318,"name":"SWAP1"},{"begin":2297,"end":2318,"name":"SWAP2"},{"begin":2297,"end":2318,"name":"ADD"},{"begin":2297,"end":2320,"name":"DUP1"},{"begin":2297,"end":2320,"name":"SLOAD"},{"begin":2297,"end":2320,"name":"SWAP1"},{"begin":2297,"end":2320,"name":"SWAP2"},{"begin":2297,"end":2320,"name":"ADD"},{"begin":2297,"end":2320,"name":"SWAP1"},{"begin":2297,"end":2320,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1968,"end":2327,"name":"JUMP","value":"[out]"},{"begin":375,"end":2634,"name":"tag","value":"56"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"PUSH","value":"A0"},{"begin":375,"end":2634,"name":"PUSH","value":"40"},{"begin":375,"end":2634,"name":"MLOAD"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH","value":"40"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"72"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"73"},{"begin":375,"end":2634,"name":"JUMP","value":"[in]"},{"begin":375,"end":2634,"name":"tag","value":"72"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"40"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"60"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"80"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"JUMP","value":"[out]"},{"begin":375,"end":2634,"name":"tag","value":"61"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"SLOAD"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"DUP4"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"ISZERO"},{"begin":375,"end":2634,"name":"GT"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"75"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"PUSH","value":"5"},{"begin":375,"end":2634,"name":"MUL"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"PUSH","value":"5"},{"begin":375,"end":2634,"name":"MUL"},{"begin":375,"end":2634,"name":"DUP4"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"KECCAK256"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"75"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"76"},{"begin":375,"end":2634,"name":"JUMP","value":"[in]"},{"begin":375,"end":2634,"name":"tag","value":"75"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"POP"},{"begin":375,"end":2634,"name":"POP"},{"begin":375,"end":2634,"name":"POP"},{"begin":375,"end":2634,"name":"JUMP","value":"[out]"},{"begin":375,"end":2634,"name":"tag","value":"64"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"SLOAD"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"AND"},{"begin":375,"end":2634,"name":"ISZERO"},{"begin":375,"end":2634,"name":"PUSH","value":"100"},{"begin":375,"end":2634,"name":"MUL"},{"begin":375,"end":2634,"name":"SUB"},{"begin":375,"end":2634,"name":"AND"},{"begin":375,"end":2634,"name":"PUSH","value":"2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"DIV"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"KECCAK256"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH","value":"1F"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"DIV"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"SWAP3"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"PUSH","value":"1F"},{"begin":375,"end":2634,"name":"LT"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"78"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"MLOAD"},{"begin":375,"end":2634,"name":"PUSH","value":"FF"},{"begin":375,"end":2634,"name":"NOT"},{"begin":375,"end":2634,"name":"AND"},{"begin":375,"end":2634,"name":"DUP4"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"OR"},{"begin":375,"end":2634,"name":"DUP6"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"80"},{"begin":375,"end":2634,"name":"JUMP"},{"begin":375,"end":2634,"name":"tag","value":"78"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"DUP6"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ISZERO"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"80"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"tag","value":"79"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"GT"},{"begin":375,"end":2634,"name":"ISZERO"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"80"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"MLOAD"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"79"},{"begin":375,"end":2634,"name":"JUMP"},{"begin":375,"end":2634,"name":"tag","value":"80"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"81"},{"begin":375,"end":2634,"name":"SWAP3"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":-1,"end":-1,"name":"POP"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"82"},{"begin":375,"end":2634,"name":"JUMP","value":"[in]"},{"begin":375,"end":2634,"name":"tag","value":"81"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"POP"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"JUMP","value":"[out]"},{"begin":375,"end":2634,"name":"tag","value":"73"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"PUSH","value":"40"},{"begin":375,"end":2634,"name":"MLOAD"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH","value":"40"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"JUMP","value":"[out]"},{"begin":375,"end":2634,"name":"tag","value":"76"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"83"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"tag","value":"84"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"GT"},{"begin":375,"end":2634,"name":"ISZERO"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"81"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"86"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"87"},{"begin":375,"end":2634,"name":"JUMP","value":"[in]"},{"begin":375,"end":2634,"name":"tag","value":"86"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"2"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":375,"end":2634,"name":"AND"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"3"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"5"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"84"},{"begin":375,"end":2634,"name":"JUMP"},{"begin":375,"end":2634,"name":"tag","value":"83"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"JUMP","value":"[out]"},{"begin":375,"end":2634,"name":"tag","value":"82"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"83"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"tag","value":"89"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"GT"},{"begin":375,"end":2634,"name":"ISZERO"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"81"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"89"},{"begin":375,"end":2634,"name":"JUMP"},{"begin":375,"end":2634,"name":"tag","value":"87"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"POP"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"SLOAD"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"PUSH","value":"1"},{"begin":375,"end":2634,"name":"AND"},{"begin":375,"end":2634,"name":"ISZERO"},{"begin":375,"end":2634,"name":"PUSH","value":"100"},{"begin":375,"end":2634,"name":"MUL"},{"begin":375,"end":2634,"name":"SUB"},{"begin":375,"end":2634,"name":"AND"},{"begin":375,"end":2634,"name":"PUSH","value":"2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"DIV"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"DUP3"},{"begin":375,"end":2634,"name":"SSTORE"},{"begin":375,"end":2634,"name":"DUP1"},{"begin":375,"end":2634,"name":"PUSH","value":"1F"},{"begin":375,"end":2634,"name":"LT"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"92"},{"begin":375,"end":2634,"name":"JUMPI"},{"begin":375,"end":2634,"name":"POP"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"93"},{"begin":375,"end":2634,"name":"JUMP"},{"begin":375,"end":2634,"name":"tag","value":"92"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"PUSH","value":"1F"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"DIV"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"MSTORE"},{"begin":375,"end":2634,"name":"PUSH","value":"20"},{"begin":375,"end":2634,"name":"PUSH","value":"0"},{"begin":375,"end":2634,"name":"KECCAK256"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"DUP2"},{"begin":375,"end":2634,"name":"ADD"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"93"},{"begin":375,"end":2634,"name":"SWAP2"},{"begin":375,"end":2634,"name":"SWAP1"},{"begin":375,"end":2634,"name":"PUSH [tag]","value":"82"},{"begin":375,"end":2634,"name":"JUMP","value":"[in]"},{"begin":375,"end":2634,"name":"tag","value":"93"},{"begin":375,"end":2634,"name":"JUMPDEST"},{"begin":375,"end":2634,"name":"POP"},{"begin":375,"end":2634,"name":"JUMP","value":"[out]"}]}}}}}}},"bytecode":"6060604052341561000f57600080fd5b610bec8061001e6000396000f3006060604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663339d50a5811461005b5780634acb9d4f1461009a578063a3303a7514610100575b600080fd5b341561006657600080fd5b610071600435610118565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34156100a557600080fd5b6100ad61014d565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100ec5780820151838201526020016100d4565b505050509050019250505060405180910390f35b341561010b57600080fd5b6101166004356101c3565b005b600080548290811061012657fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b610155610264565b60008054806020026020016040519081016040528092919081815260200182805480156101b857602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161018d575b505050505090505b90565b600081336101cf610276565b91825273ffffffffffffffffffffffffffffffffffffffff16602082015260409081019051809103906000f080151561020757600080fd5b90506000805480600101828161021d9190610286565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b60206040519081016040526000815290565b6040516108f3806102ce83390190565b8154818355818115116102aa576000838152602090206102aa9181019083016102af565b505050565b6101c091905b808211156102c957600081556001016102b5565b509056006060604052341561000f57600080fd5b6040516040806108f3833981016040528080519190602001805160018054600160a060020a031916600160a060020a039290921691909117905550506002556108968061005d6000396000f3006060604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166303441006811461009d5780630a144391146100b5578063481c6a75146100e857806381d12c581461011757806382fde093146101cd5780638a9cfd55146101f2578063937e09b114610253578063d7bb99ba14610266578063d7d1bbdb1461026e575b600080fd5b34156100a857600080fd5b6100b3600435610284565b005b34156100c057600080fd5b6100d4600160a060020a0360043516610380565b604051901515815260200160405180910390f35b34156100f357600080fd5b6100fb610395565b604051600160a060020a03909116815260200160405180910390f35b341561012257600080fd5b61012d6004356103a4565b60405160208101859052600160a060020a038416604082015282151560608201526080810182905260a08082528190810187818151815260200191508051906020019080838360005b8381101561018e578082015183820152602001610176565b50505050905090810190601f1680156101bb5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34156101d857600080fd5b6101e06104a2565b60405190815260200160405180910390f35b34156101fd57600080fd5b6100b360046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505084359460200135600160a060020a031693506104a892505050565b341561025e57600080fd5b6101e06105d1565b6100b36105d7565b341561027957600080fd5b6100b3600435610616565b60015460009033600160a060020a039081169116146102a257600080fd5b60008054839081106102b057fe5b9060005260206000209060050201905060026004548115156102ce57fe5b0481600301541115156102e057600080fd5b600281015474010000000000000000000000000000000000000000900460ff161561030a57600080fd5b60028101546001820154600160a060020a039091169080156108fc0290604051600060405180830381858888f19350505050151561034757600080fd5b600201805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000017905550565b60036020526000908152604090205460ff1681565b600154600160a060020a031681565b60008054829081106103b257fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b505050506001830154600284015460039094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b60045481565b6104b06106be565b60015433600160a060020a039081169116146104cb57600080fd5b60a06040519081016040528085815260200184815260200183600160a060020a03168152602001600015158152602001600081525090506000805480600101828161051691906106f4565b6000928352602090922083916005020181518190805161053a929160200190610725565b5060208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556060820151600282018054911515740100000000000000000000000000000000000000000274ff0000000000000000000000000000000000000000199092169190911790556080820151816003015550505050505050565b60025481565b60025434116105e557600080fd5b600160a060020a0333166000908152600360205260409020805460ff19166001908117909155600480549091019055565b6000808281548110151561062657fe5b60009182526020808320600160a060020a033316845260039091526040909220546005909102909101915060ff16151561065f57600080fd5b600160a060020a033316600090815260048201602052604090205460ff161561068757600080fd5b600160a060020a03331660009081526004820160205260409020805460ff1916600190811790915560039091018054909101905550565b60a0604051908101604052806106d26107a3565b8152600060208201819052604082018190526060820181905260809091015290565b8154818355818115116107205760050281600502836000526020600020918201910161072091906107b5565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061076657805160ff1916838001178555610793565b82800160010185558215610793579182015b82811115610793578251825591602001919060010190610778565b5061079f929150610809565b5090565b60206040519081016040526000815290565b61080691905b8082111561079f5760006107cf8282610823565b5060006001820181905560028201805474ffffffffffffffffffffffffffffffffffffffffff1916905560038201556005016107bb565b90565b61080691905b8082111561079f576000815560010161080f565b50805460018160011615610100020316600290046000825580601f106108495750610867565b601f0160209004906000526020600020908101906108679190610809565b505600a165627a7a7230582049e400593f7e6f3aeec31d83c643c071a7e480ceb82d44cabe80f4304ddf000b0029a165627a7a72305820cc49ab2c76c59fa1e4899007e5c1a39eba9ff05df6a043f8caf8293c64ed39210029","functionHashes":{"createCampaign(uint256)":"a3303a75","deployedCampaigns(uint256)":"339d50a5","getDeployedCampaigns()":"4acb9d4f"},"gasEstimates":{"creation":[640,610400],"external":{"createCampaign(uint256)":null,"deployedCampaigns(uint256)":688,"getDeployedCampaigns()":null},"internal":{}},"interface":"[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedCampaigns\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getDeployedCampaigns\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"minimum\",\"type\":\"uint256\"}],\"name\":\"createCampaign\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]","metadata":"{\"compiler\":{\"version\":\"0.4.21+commit.dfe3193c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedCampaigns\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getDeployedCampaigns\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"minimum\",\"type\":\"uint256\"}],\"name\":\"createCampaign\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"CampaignFactory\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x3f66e480f1883c42ee226bc97f651aea90e0aab3235b4c5dc78f6c059a87e23e\",\"urls\":[\"bzzr://1ae9d39de526d3f6756352f201ff43215ca45ea17b930c3d5e673d031df98d44\"]}},\"version\":1}","opcodes":"PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xBEC DUP1 PUSH2 0x1E PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x56 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x339D50A5 DUP2 EQ PUSH2 0x5B JUMPI DUP1 PUSH4 0x4ACB9D4F EQ PUSH2 0x9A JUMPI DUP1 PUSH4 0xA3303A75 EQ PUSH2 0x100 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x66 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x71 PUSH1 0x4 CALLDATALOAD PUSH2 0x118 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xA5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xAD PUSH2 0x14D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH1 0x20 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xEC JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xD4 JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x10B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x116 PUSH1 0x4 CALLDATALOAD PUSH2 0x1C3 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x126 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH2 0x155 PUSH2 0x264 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x1B8 JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x18D JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 CALLER PUSH2 0x1CF PUSH2 0x276 JUMP JUMPDEST SWAP2 DUP3 MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 SWAP1 DUP2 ADD SWAP1 MLOAD DUP1 SWAP2 SUB SWAP1 PUSH1 0x0 CREATE DUP1 ISZERO ISZERO PUSH2 0x207 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 POP PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x1 ADD DUP3 DUP2 PUSH2 0x21D SWAP2 SWAP1 PUSH2 0x286 JUMP JUMPDEST POP PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x0 DUP2 MSTORE SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x8F3 DUP1 PUSH2 0x2CE DUP4 CODECOPY ADD SWAP1 JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 ISZERO GT PUSH2 0x2AA JUMPI PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 SWAP1 KECCAK256 PUSH2 0x2AA SWAP2 DUP2 ADD SWAP1 DUP4 ADD PUSH2 0x2AF JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x1C0 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x2C9 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x2B5 JUMP JUMPDEST POP SWAP1 JUMP STOP PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0x8F3 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 DUP1 MLOAD SWAP2 SWAP1 PUSH1 0x20 ADD DUP1 MLOAD PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE POP POP PUSH1 0x2 SSTORE PUSH2 0x896 DUP1 PUSH2 0x5D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x98 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x3441006 DUP2 EQ PUSH2 0x9D JUMPI DUP1 PUSH4 0xA144391 EQ PUSH2 0xB5 JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0xE8 JUMPI DUP1 PUSH4 0x81D12C58 EQ PUSH2 0x117 JUMPI DUP1 PUSH4 0x82FDE093 EQ PUSH2 0x1CD JUMPI DUP1 PUSH4 0x8A9CFD55 EQ PUSH2 0x1F2 JUMPI DUP1 PUSH4 0x937E09B1 EQ PUSH2 0x253 JUMPI DUP1 PUSH4 0xD7BB99BA EQ PUSH2 0x266 JUMPI DUP1 PUSH4 0xD7D1BBDB EQ PUSH2 0x26E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0xA8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB3 PUSH1 0x4 CALLDATALOAD PUSH2 0x284 JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0xC0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD4 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x380 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xF3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xFB PUSH2 0x395 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x122 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x12D PUSH1 0x4 CALLDATALOAD PUSH2 0x3A4 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 ADD DUP6 SWAP1 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND PUSH1 0x40 DUP3 ADD MSTORE DUP3 ISZERO ISZERO PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0xA0 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP8 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x18E JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x176 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x1BB JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x1D8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1E0 PUSH2 0x4A2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x1FD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB3 PUSH1 0x4 PUSH1 0x24 DUP2 CALLDATALOAD DUP2 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP POP DUP5 CALLDATALOAD SWAP5 PUSH1 0x20 ADD CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP4 POP PUSH2 0x4A8 SWAP3 POP POP POP JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x25E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1E0 PUSH2 0x5D1 JUMP JUMPDEST PUSH2 0xB3 PUSH2 0x5D7 JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x279 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB3 PUSH1 0x4 CALLDATALOAD PUSH2 0x616 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x0 SWAP1 CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ PUSH2 0x2A2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP4 SWAP1 DUP2 LT PUSH2 0x2B0 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD SWAP1 POP PUSH1 0x2 PUSH1 0x4 SLOAD DUP2 ISZERO ISZERO PUSH2 0x2CE JUMPI INVALID JUMPDEST DIV DUP2 PUSH1 0x3 ADD SLOAD GT ISZERO ISZERO PUSH2 0x2E0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 DUP2 ADD SLOAD PUSH21 0x10000000000000000000000000000000000000000 SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0x30A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 DUP2 ADD SLOAD PUSH1 0x1 DUP3 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 DUP1 ISZERO PUSH2 0x8FC MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO ISZERO PUSH2 0x347 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 ADD DUP1 SLOAD PUSH21 0xFF0000000000000000000000000000000000000000 NOT AND PUSH21 0x10000000000000000000000000000000000000000 OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x3B2 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x45E JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x433 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x45E JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x441 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP PUSH1 0x1 DUP4 ADD SLOAD PUSH1 0x2 DUP5 ADD SLOAD PUSH1 0x3 SWAP1 SWAP5 ADD SLOAD SWAP3 SWAP4 SWAP1 SWAP3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND SWAP3 POP PUSH21 0x10000000000000000000000000000000000000000 SWAP1 SWAP2 DIV PUSH1 0xFF AND SWAP1 DUP6 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x4B0 PUSH2 0x6BE JUMP JUMPDEST PUSH1 0x1 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ PUSH2 0x4CB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0xA0 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE PUSH1 0x20 ADD DUP4 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 DUP2 MSTORE POP SWAP1 POP PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x1 ADD DUP3 DUP2 PUSH2 0x516 SWAP2 SWAP1 PUSH2 0x6F4 JUMP JUMPDEST PUSH1 0x0 SWAP3 DUP4 MSTORE PUSH1 0x20 SWAP1 SWAP3 KECCAK256 DUP4 SWAP2 PUSH1 0x5 MUL ADD DUP2 MLOAD DUP2 SWAP1 DUP1 MLOAD PUSH2 0x53A SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0x725 JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE PUSH1 0x40 DUP3 ADD MLOAD PUSH1 0x2 DUP3 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x60 DUP3 ADD MLOAD PUSH1 0x2 DUP3 ADD DUP1 SLOAD SWAP2 ISZERO ISZERO PUSH21 0x10000000000000000000000000000000000000000 MUL PUSH21 0xFF0000000000000000000000000000000000000000 NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x80 DUP3 ADD MLOAD DUP2 PUSH1 0x3 ADD SSTORE POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD CALLVALUE GT PUSH2 0x5E5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x4 DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x626 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND DUP5 MSTORE PUSH1 0x3 SWAP1 SWAP2 MSTORE PUSH1 0x40 SWAP1 SWAP3 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP2 MUL SWAP1 SWAP2 ADD SWAP2 POP PUSH1 0xFF AND ISZERO ISZERO PUSH2 0x65F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 DUP3 ADD PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x687 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 DUP3 ADD PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x3 SWAP1 SWAP2 ADD DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0xA0 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 PUSH2 0x6D2 PUSH2 0x7A3 JUMP JUMPDEST DUP2 MSTORE PUSH1 0x0 PUSH1 0x20 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x40 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x60 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x80 SWAP1 SWAP2 ADD MSTORE SWAP1 JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 ISZERO GT PUSH2 0x720 JUMPI PUSH1 0x5 MUL DUP2 PUSH1 0x5 MUL DUP4 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP2 DUP3 ADD SWAP2 ADD PUSH2 0x720 SWAP2 SWAP1 PUSH2 0x7B5 JUMP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x766 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x793 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x793 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x793 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x778 JUMP JUMPDEST POP PUSH2 0x79F SWAP3 SWAP2 POP PUSH2 0x809 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x0 DUP2 MSTORE SWAP1 JUMP JUMPDEST PUSH2 0x806 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x79F JUMPI PUSH1 0x0 PUSH2 0x7CF DUP3 DUP3 PUSH2 0x823 JUMP JUMPDEST POP PUSH1 0x0 PUSH1 0x1 DUP3 ADD DUP2 SWAP1 SSTORE PUSH1 0x2 DUP3 ADD DUP1 SLOAD PUSH21 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND SWAP1 SSTORE PUSH1 0x3 DUP3 ADD SSTORE PUSH1 0x5 ADD PUSH2 0x7BB JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x806 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x79F JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x80F JUMP JUMPDEST POP DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV PUSH1 0x0 DUP3 SSTORE DUP1 PUSH1 0x1F LT PUSH2 0x849 JUMPI POP PUSH2 0x867 JUMP JUMPDEST PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP1 PUSH2 0x867 SWAP2 SWAP1 PUSH2 0x809 JUMP JUMPDEST POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x49 0xe4 STOP MSIZE 0x3f PUSH31 0x6F3AEEC31D83C643C071A7E480CEB82D44CABE80F4304DDF000B0029A16562 PUSH27 0x7A72305820CC49AB2C76C59FA1E4899007E5C1A39EBA9FF05DF6A0 NUMBER 0xf8 0xca 0xf8 0x29 EXTCODECOPY PUSH5 0xED39210029 ","runtimeBytecode":"6060604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663339d50a5811461005b5780634acb9d4f1461009a578063a3303a7514610100575b600080fd5b341561006657600080fd5b610071600435610118565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34156100a557600080fd5b6100ad61014d565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100ec5780820151838201526020016100d4565b505050509050019250505060405180910390f35b341561010b57600080fd5b6101166004356101c3565b005b600080548290811061012657fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b610155610264565b60008054806020026020016040519081016040528092919081815260200182805480156101b857602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161018d575b505050505090505b90565b600081336101cf610276565b91825273ffffffffffffffffffffffffffffffffffffffff16602082015260409081019051809103906000f080151561020757600080fd5b90506000805480600101828161021d9190610286565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b60206040519081016040526000815290565b6040516108f3806102ce83390190565b8154818355818115116102aa576000838152602090206102aa9181019083016102af565b505050565b6101c091905b808211156102c957600081556001016102b5565b509056006060604052341561000f57600080fd5b6040516040806108f3833981016040528080519190602001805160018054600160a060020a031916600160a060020a039290921691909117905550506002556108968061005d6000396000f3006060604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166303441006811461009d5780630a144391146100b5578063481c6a75146100e857806381d12c581461011757806382fde093146101cd5780638a9cfd55146101f2578063937e09b114610253578063d7bb99ba14610266578063d7d1bbdb1461026e575b600080fd5b34156100a857600080fd5b6100b3600435610284565b005b34156100c057600080fd5b6100d4600160a060020a0360043516610380565b604051901515815260200160405180910390f35b34156100f357600080fd5b6100fb610395565b604051600160a060020a03909116815260200160405180910390f35b341561012257600080fd5b61012d6004356103a4565b60405160208101859052600160a060020a038416604082015282151560608201526080810182905260a08082528190810187818151815260200191508051906020019080838360005b8381101561018e578082015183820152602001610176565b50505050905090810190601f1680156101bb5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34156101d857600080fd5b6101e06104a2565b60405190815260200160405180910390f35b34156101fd57600080fd5b6100b360046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505084359460200135600160a060020a031693506104a892505050565b341561025e57600080fd5b6101e06105d1565b6100b36105d7565b341561027957600080fd5b6100b3600435610616565b60015460009033600160a060020a039081169116146102a257600080fd5b60008054839081106102b057fe5b9060005260206000209060050201905060026004548115156102ce57fe5b0481600301541115156102e057600080fd5b600281015474010000000000000000000000000000000000000000900460ff161561030a57600080fd5b60028101546001820154600160a060020a039091169080156108fc0290604051600060405180830381858888f19350505050151561034757600080fd5b600201805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000017905550565b60036020526000908152604090205460ff1681565b600154600160a060020a031681565b60008054829081106103b257fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b505050506001830154600284015460039094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b60045481565b6104b06106be565b60015433600160a060020a039081169116146104cb57600080fd5b60a06040519081016040528085815260200184815260200183600160a060020a03168152602001600015158152602001600081525090506000805480600101828161051691906106f4565b6000928352602090922083916005020181518190805161053a929160200190610725565b5060208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556060820151600282018054911515740100000000000000000000000000000000000000000274ff0000000000000000000000000000000000000000199092169190911790556080820151816003015550505050505050565b60025481565b60025434116105e557600080fd5b600160a060020a0333166000908152600360205260409020805460ff19166001908117909155600480549091019055565b6000808281548110151561062657fe5b60009182526020808320600160a060020a033316845260039091526040909220546005909102909101915060ff16151561065f57600080fd5b600160a060020a033316600090815260048201602052604090205460ff161561068757600080fd5b600160a060020a03331660009081526004820160205260409020805460ff1916600190811790915560039091018054909101905550565b60a0604051908101604052806106d26107a3565b8152600060208201819052604082018190526060820181905260809091015290565b8154818355818115116107205760050281600502836000526020600020918201910161072091906107b5565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061076657805160ff1916838001178555610793565b82800160010185558215610793579182015b82811115610793578251825591602001919060010190610778565b5061079f929150610809565b5090565b60206040519081016040526000815290565b61080691905b8082111561079f5760006107cf8282610823565b5060006001820181905560028201805474ffffffffffffffffffffffffffffffffffffffffff1916905560038201556005016107bb565b90565b61080691905b8082111561079f576000815560010161080f565b50805460018160011615610100020316600290046000825580601f106108495750610867565b601f0160209004906000526020600020908101906108679190610809565b505600a165627a7a7230582049e400593f7e6f3aeec31d83c643c071a7e480ceb82d44cabe80f4304ddf000b0029a165627a7a72305820cc49ab2c76c59fa1e4899007e5c1a39eba9ff05df6a043f8caf8293c64ed39210029","srcmap":"26:347:0:-;;;;;;;;;;;;;;;;;","srcmapRuntime":"26:347:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;57:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;266:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;266:105:0;;;;;;;;;;;;;;;;;98:162;;;;;;;;;;;;;;;;57:34;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;57:34:0;:::o;266:105::-;319:9;;:::i;:::-;347:17;340:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;266:105;;:::o;98:162::-;153:19;188:7;197:10;175:33;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;153:55;;218:17;:35;;;;;;;;;;;:::i;:::-;-1:-1:-1;218:35:0;;;;;;;;;;;-1:-1:-1;;218:35:0;;;;;;;;;;;;-1:-1:-1;98:162:0:o;26:347::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;"}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41MjE0N2Q2N2VmYTNkMmY5OTExNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDNkNDZhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy11dGlscy9zcmMvdXRpbHMuanM/MDNkNDZhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm4uanMvbGliL2JuLmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vZmFjdG9yeS5qcz8wM2Q0NmFhIiwid2VicGFjazovLy8uL2V0aGVyZXVtL3dlYjMuanM/MDNkNDZhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViMy9zcmMvaW5kZXguanM/MDNkNDZhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViMy9sZXJuYS5qc29uPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1jb3JlL3NyYy9pbmRleC5qcz8wM2Q0NmFhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWIzL3BhY2thZ2VzL3dlYjMtY29yZS9zcmMvZXh0ZW5kLmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1ldGgvc3JjL2luZGV4LmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1ldGgvc3JjL2dldE5ldHdvcmtUeXBlLmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1uZXQvc3JjL2luZGV4LmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1ldGgtcGVyc29uYWwvc3JjL2luZGV4LmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1zaGgvc3JjL2luZGV4LmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1ienovc3JjL2luZGV4LmpzPzAzZDQ2YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy11dGlscy9zcmMvaW5kZXguanM/MDNkNDZhYSIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT8wM2Q0NmFhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGY4L3V0ZjguanM/MDNkNDZhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViMy9wYWNrYWdlcy93ZWIzLXV0aWxzL3NyYy9zb2xpZGl0eVNoYTMuanM/MDNkNDZhYSIsIndlYnBhY2s6Ly8vLi9ldGhlcmV1bS9idWlsZC9DYW1wYWlnbkZhY3RvcnkuanNvbj8wM2Q0NmFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PkNhbXBhaWducyBJbmRleCE8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS42LjBcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCBpbiB0aGUgYnJvd3Nlciwgb3IgYGV4cG9ydHNgIG9uIHRoZSBzZXJ2ZXIuXG4gIHZhciByb290ID0gdGhpcztcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIEVzdGFibGlzaCB0aGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCB0byBicmVhayBvdXQgb2YgYSBsb29wIGl0ZXJhdGlvbi5cbiAgdmFyIGJyZWFrZXIgPSB7fTtcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgY29uY2F0ICAgICAgICAgICA9IEFycmF5UHJvdG8uY29uY2F0LFxuICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVGb3JFYWNoICAgICAgPSBBcnJheVByb3RvLmZvckVhY2gsXG4gICAgbmF0aXZlTWFwICAgICAgICAgID0gQXJyYXlQcm90by5tYXAsXG4gICAgbmF0aXZlUmVkdWNlICAgICAgID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgbmF0aXZlUmVkdWNlUmlnaHQgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodCxcbiAgICBuYXRpdmVGaWx0ZXIgICAgICAgPSBBcnJheVByb3RvLmZpbHRlcixcbiAgICBuYXRpdmVFdmVyeSAgICAgICAgPSBBcnJheVByb3RvLmV2ZXJ5LFxuICAgIG5hdGl2ZVNvbWUgICAgICAgICA9IEFycmF5UHJvdG8uc29tZSxcbiAgICBuYXRpdmVJbmRleE9mICAgICAgPSBBcnJheVByb3RvLmluZGV4T2YsXG4gICAgbmF0aXZlTGFzdEluZGV4T2YgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZixcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kO1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdCB2aWEgYSBzdHJpbmcgaWRlbnRpZmllcixcbiAgLy8gZm9yIENsb3N1cmUgQ29tcGlsZXIgXCJhZHZhbmNlZFwiIG1vZGUuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuNi4wJztcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZvckVhY2hgIGlmIGF2YWlsYWJsZS5cbiAgdmFyIGVhY2ggPSBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgIGlmIChuYXRpdmVGb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBuYXRpdmVGb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0b3IgdG8gZWFjaCBlbGVtZW50LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbWFwYCBpZiBhdmFpbGFibGUuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlTWFwICYmIG9iai5tYXAgPT09IG5hdGl2ZU1hcCkgcmV0dXJuIG9iai5tYXAoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHZhciByZWR1Y2VFcnJvciA9ICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2UgJiYgb2JqLnJlZHVjZSA9PT0gbmF0aXZlUmVkdWNlKSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2UoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IHZhbHVlO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZVJpZ2h0YCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlUmlnaHQgJiYgb2JqLnJlZHVjZVJpZ2h0ID09PSBuYXRpdmVSZWR1Y2VSaWdodCkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvcik7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09ICtsZW5ndGgpIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaW5kZXggPSBrZXlzID8ga2V5c1stLWxlbmd0aF0gOiAtLWxlbmd0aDtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gb2JqW2luZGV4XTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCBvYmpbaW5kZXhdLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZpbHRlcmAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZUZpbHRlciAmJiBvYmouZmlsdGVyID09PSBuYXRpdmVGaWx0ZXIpIHJldHVybiBvYmouZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuICFwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgIH0sIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZXZlcnlgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlRXZlcnkgJiYgb2JqLmV2ZXJ5ID09PSBuYXRpdmVFdmVyeSkgcmV0dXJuIG9iai5ldmVyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghKHJlc3VsdCA9IHJlc3VsdCAmJiBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID0gXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlU29tZSAmJiBvYmouc29tZSA9PT0gbmF0aXZlU29tZSkgcmV0dXJuIG9iai5zb21lKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHJlc3VsdCB8fCAocmVzdWx0ID0gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIHZhbHVlICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBvYmouaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIG9iai5pbmRleE9mKHRhcmdldCkgIT0gLTE7XG4gICAgcmV0dXJuIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRhcmdldDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIChpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdKS5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgXy5wcm9wZXJ0eShrZXkpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5tYXRjaGVzKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maW5kKG9iaiwgXy5tYXRjaGVzKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgb3IgKGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICAvLyBDYW4ndCBvcHRpbWl6ZSBhcnJheXMgb2YgaW50ZWdlcnMgbG9uZ2VyIHRoYW4gNjUsNTM1IGVsZW1lbnRzLlxuICAvLyBTZWUgW1dlYktpdCBCdWcgODA3OTddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MDc5NylcbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBpZiAoY29tcHV0ZWQgPiBsYXN0Q29tcHV0ZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhbiBhcnJheSwgdXNpbmcgdGhlIG1vZGVybiB2ZXJzaW9uIG9mIHRoZVxuICAvLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByYW5kO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNodWZmbGVkID0gW107XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oaW5kZXgrKyk7XG4gICAgICBzaHVmZmxlZFtpbmRleCAtIDFdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbi5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKG9iai5sZW5ndGggIT09ICtvYmoubGVuZ3RoKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gXy5zaHVmZmxlKG9iaikuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGxvb2t1cCBpdGVyYXRvcnMuXG4gIHZhciBsb29rdXBJdGVyYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBfLmlkZW50aXR5O1xuICAgIGlmIChfLmlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIF8ucHJvcGVydHkodmFsdWUpO1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRvci5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBpdGVyYXRvciA9IGxvb2t1cEl0ZXJhdG9yKGl0ZXJhdG9yKTtcbiAgICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSkgOiByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICBfLmhhcyhyZXN1bHQsIGtleSkgPyByZXN1bHRba2V5XSsrIDogcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gKGxvdyArIGhpZ2gpID4+PiAxO1xuICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVttaWRdKSA8IHZhbHVlID8gbG93ID0gbWlkICsgMSA6IGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICBpZiAobiA8IDApIHJldHVybiBbXTtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aFxuICAvLyBgXy5tYXBgLlxuICBfLmluaXRpYWwgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gKChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgTWF0aC5tYXgoYXJyYXkubGVuZ3RoIC0gbiwgMCkpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqXG4gIC8vIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgb3V0cHV0KSB7XG4gICAgaWYgKHNoYWxsb3cgJiYgXy5ldmVyeShpbnB1dCwgXy5pc0FycmF5KSkge1xuICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseShvdXRwdXQsIGlucHV0KTtcbiAgICB9XG4gICAgZWFjaChpbnB1dCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSB7XG4gICAgICAgIHNoYWxsb3cgPyBwdXNoLmFwcGx5KG91dHB1dCwgdmFsdWUpIDogZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgb3V0cHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciBqdXN0IG9uZSBsZXZlbC5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgW10pO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgLy8gU3BsaXQgYW4gYXJyYXkgaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHNhdGlzZnkgdGhlIGdpdmVuXG4gIC8vIHByZWRpY2F0ZSwgYW5kIG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgZG8gbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZS5cbiAgXy5wYXJ0aXRpb24gPSBmdW5jdGlvbihhcnJheSwgcHJlZGljYXRlKSB7XG4gICAgdmFyIHBhc3MgPSBbXSwgZmFpbCA9IFtdO1xuICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgIChwcmVkaWNhdGUoZWxlbSkgPyBwYXNzIDogZmFpbCkucHVzaChlbGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3Bhc3MsIGZhaWxdO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRvcjtcbiAgICAgIGl0ZXJhdG9yID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbCA9IGl0ZXJhdG9yID8gXy5tYXAoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSA6IGFycmF5O1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICBlYWNoKGluaXRpYWwsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgaWYgKGlzU29ydGVkID8gKCFpbmRleCB8fCBzZWVuW3NlZW4ubGVuZ3RoIC0gMV0gIT09IHZhbHVlKSA6ICFfLmNvbnRhaW5zKHNlZW4sIHZhbHVlKSkge1xuICAgICAgICBzZWVuLnB1c2godmFsdWUpO1xuICAgICAgICByZXN1bHRzLnB1c2goYXJyYXlbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKF8uZmxhdHRlbihhcmd1bWVudHMsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoXy51bmlxKGFycmF5KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF8uZXZlcnkocmVzdCwgZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIF8uY29udGFpbnMob3RoZXIsIGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7IH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IF8ubWF4KF8ucGx1Y2soYXJndW1lbnRzLCAnbGVuZ3RoJykuY29uY2F0KDApKTtcbiAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdHNbaV0gPSBfLnBsdWNrKGFyZ3VtZW50cywgJycgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIGlmIChsaXN0ID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBseSB1cyB3aXRoIGluZGV4T2YgKEknbSBsb29raW5nIGF0IHlvdSwgKipNU0lFKiopLFxuICAvLyB3ZSBuZWVkIHRoaXMgZnVuY3Rpb24uIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW5cbiAgLy8gaXRlbSBpbiBhbiBhcnJheSwgb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpc1NvcnRlZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICBpZiAodHlwZW9mIGlzU29ydGVkID09ICdudW1iZXInKSB7XG4gICAgICAgIGkgPSAoaXNTb3J0ZWQgPCAwID8gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaXNTb3J0ZWQpIDogaXNTb3J0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IF8uc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaV0gPT09IGl0ZW0gPyBpIDogLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0sIGlzU29ydGVkKTtcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbGFzdEluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgXy5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBmcm9tKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaGFzSW5kZXggPSBmcm9tICE9IG51bGw7XG4gICAgaWYgKG5hdGl2ZUxhc3RJbmRleE9mICYmIGFycmF5Lmxhc3RJbmRleE9mID09PSBuYXRpdmVMYXN0SW5kZXhPZikge1xuICAgICAgcmV0dXJuIGhhc0luZGV4ID8gYXJyYXkubGFzdEluZGV4T2YoaXRlbSwgZnJvbSkgOiBhcnJheS5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgdmFyIGkgPSAoaGFzSW5kZXggPyBmcm9tIDogYXJyYXkubGVuZ3RoKTtcbiAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gYXJndW1lbnRzWzJdIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciByYW5nZSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUoaWR4IDwgbGVuZ3RoKSB7XG4gICAgICByYW5nZVtpZHgrK10gPSBzdGFydDtcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV1c2FibGUgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIHByb3RvdHlwZSBzZXR0aW5nLlxuICB2YXIgY3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICB2YXIgYXJncywgYm91bmQ7XG4gICAgaWYgKG5hdGl2ZUJpbmQgJiYgZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kKSByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yO1xuICAgIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgYm91bmQpKSByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gZnVuYy5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VsZiA9IG5ldyBjdG9yO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkoc2VsZiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmUgcHJlLWZpbGxlZC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gMDtcbiAgICAgIHZhciBhcmdzID0gYm91bmRBcmdzLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYXJncy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJnc1tpXSA9PT0gXykgYXJnc1tpXSA9IGFyZ3VtZW50c1twb3NpdGlvbisrXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGFyZ3VtZW50cy5sZW5ndGgpIGFyZ3MucHVzaChhcmd1bWVudHNbcG9zaXRpb24rK10pO1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGZ1bmNzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIGVhY2goZnVuY3MsIGZ1bmN0aW9uKGYpIHsgb2JqW2ZdID0gXy5iaW5kKG9ialtmXSwgb2JqKTsgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtbyA9IHt9O1xuICAgIGhhc2hlciB8fCAoaGFzaGVyID0gXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF8uaGFzKG1lbW8sIGtleSkgPyBtZW1vW2tleV0gOiAobWVtb1trZXldID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpOyB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gXy5kZWxheS5hcHBseShfLCBbZnVuYywgMV0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogXy5ub3coKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBfLm5vdygpO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYXN0ID0gXy5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgIGlmIChsYXN0IDwgd2FpdCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdGltZXN0YW1wID0gXy5ub3coKTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIHJhbiA9IGZhbHNlLCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyYW4pIHJldHVybiBtZW1vO1xuICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZ1bmNzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgZm9yICh2YXIgaSA9IGZ1bmNzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFyZ3MgPSBbZnVuY3NbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYWZ0ZXIgYmVpbmcgY2FsbGVkIE4gdGltZXMuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgXy52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICBfLnBhaXJzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHBhaXJzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBlYWNoKGtleXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSBpbiBvYmopIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghXy5jb250YWlucyhrZXlzLCBrZXkpKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAob2JqW3Byb3BdID09PSB2b2lkIDApIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PSAxIC8gYjtcbiAgICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS4gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvclxuICAgICAgICAvLyBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuIGEgIT0gK2EgPyBiICE9ICtiIDogKGEgPT0gMCA/IDEgLyBhID09IDEgLyBiIDogYSA9PSArYik7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT0gK2I7XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb21wYXJlZCBieSB0aGVpciBzb3VyY2UgcGF0dGVybnMgYW5kIGZsYWdzLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgICAgcmV0dXJuIGEuc291cmNlID09IGIuc291cmNlICYmXG4gICAgICAgICAgICAgICBhLmdsb2JhbCA9PSBiLmdsb2JhbCAmJlxuICAgICAgICAgICAgICAgYS5tdWx0aWxpbmUgPT0gYi5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgICAgIGEuaWdub3JlQ2FzZSA9PSBiLmlnbm9yZUNhc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PSBiO1xuICAgIH1cbiAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiAoYUN0b3IgaW5zdGFuY2VvZiBhQ3RvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiAoYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuICAgIHZhciBzaXplID0gMCwgcmVzdWx0ID0gdHJ1ZTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoY2xhc3NOYW1lID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgc2l6ZSA9IGEubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2l6ZSA9PSBiLmxlbmd0aDtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgICAgd2hpbGUgKHNpemUtLSkge1xuICAgICAgICAgIGlmICghKHJlc3VsdCA9IGVxKGFbc2l6ZV0sIGJbc2l6ZV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKF8uaGFzKGEsIGtleSkpIHtcbiAgICAgICAgICAvLyBDb3VudCB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlci5cbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICBpZiAoXy5oYXMoYiwga2V5KSAmJiAhKHNpemUtLSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9ICFzaXplO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgW10sIFtdKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLlxuICBlYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiAhIShvYmogJiYgXy5oYXMob2JqLCAnY2FsbGVlJykpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuXG4gIGlmICh0eXBlb2YgKC8uLykgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPSArb2JqO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdG9ycy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF8uY29uc3RhbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLnByb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLm1hdGNoZXMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmIChvYmogPT09IGF0dHJzKSByZXR1cm4gdHJ1ZTsgLy9hdm9pZCBjb21wYXJpbmcgYW4gb2JqZWN0IHRvIGl0c2VsZi5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgICBpZiAoYXR0cnNba2V5XSAhPT0gb2JqW2tleV0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShNYXRoLm1heCgwLCBuKSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBpKTtcbiAgICByZXR1cm4gYWNjdW07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKS5cbiAgXy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIGlmIChtYXggPT0gbnVsbCkge1xuICAgICAgbWF4ID0gbWluO1xuICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG4gIH07XG5cbiAgLy8gQSAocG9zc2libHkgZmFzdGVyKSB3YXkgdG8gZ2V0IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiBpbnRlZ2VyLlxuICBfLm5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICBlc2NhcGU6IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIFwiJ1wiOiAnJiN4Mjc7J1xuICAgIH1cbiAgfTtcbiAgZW50aXR5TWFwLnVuZXNjYXBlID0gXy5pbnZlcnQoZW50aXR5TWFwLmVzY2FwZSk7XG5cbiAgLy8gUmVnZXhlcyBjb250YWluaW5nIHRoZSBrZXlzIGFuZCB2YWx1ZXMgbGlzdGVkIGltbWVkaWF0ZWx5IGFib3ZlLlxuICB2YXIgZW50aXR5UmVnZXhlcyA9IHtcbiAgICBlc2NhcGU6ICAgbmV3IFJlZ0V4cCgnWycgKyBfLmtleXMoZW50aXR5TWFwLmVzY2FwZSkuam9pbignJykgKyAnXScsICdnJyksXG4gICAgdW5lc2NhcGU6IG5ldyBSZWdFeHAoJygnICsgXy5rZXlzKGVudGl0eU1hcC51bmVzY2FwZSkuam9pbignfCcpICsgJyknLCAnZycpXG4gIH07XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICBfLmVhY2goWydlc2NhcGUnLCAndW5lc2NhcGUnXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgX1ttZXRob2RdID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoc3RyaW5nID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIHJldHVybiAoJycgKyBzdHJpbmcpLnJlcGxhY2UoZW50aXR5UmVnZXhlc1ttZXRob2RdLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gZW50aXR5TWFwW21ldGhvZF1bbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx0JzogICAgICd0JyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx0fFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBkYXRhLCBzZXR0aW5ncykge1xuICAgIHZhciByZW5kZXI7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICAgICAgLnJlcGxhY2UoZXNjYXBlciwgZnVuY3Rpb24obWF0Y2gpIHsgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdOyB9KTtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArIFwicmV0dXJuIF9fcDtcXG5cIjtcblxuICAgIHRyeSB7XG4gICAgICByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHJldHVybiByZW5kZXIoZGF0YSwgXyk7XG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBmdW5jdGlvbiBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyAoc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicpICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZXIuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXyhvYmopLmNoYWluKCk7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0aGlzLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09ICdzaGlmdCcgfHwgbmFtZSA9PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKF8ucHJvdG90eXBlLCB7XG5cbiAgICAvLyBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gICAgY2hhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fY2hhaW4gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBBTUQgcmVnaXN0cmF0aW9uIGhhcHBlbnMgYXQgdGhlIGVuZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFNRCBsb2FkZXJzXG4gIC8vIHRoYXQgbWF5IG5vdCBlbmZvcmNlIG5leHQtdHVybiBzZW1hbnRpY3Mgb24gbW9kdWxlcy4gRXZlbiB0aG91Z2ggZ2VuZXJhbFxuICAvLyBwcmFjdGljZSBmb3IgQU1EIHJlZ2lzdHJhdGlvbiBpcyB0byBiZSBhbm9ueW1vdXMsIHVuZGVyc2NvcmUgcmVnaXN0ZXJzXG4gIC8vIGFzIGEgbmFtZWQgbW9kdWxlIGJlY2F1c2UsIGxpa2UgalF1ZXJ5LCBpdCBpcyBhIGJhc2UgbGlicmFyeSB0aGF0IGlzXG4gIC8vIHBvcHVsYXIgZW5vdWdoIHRvIGJlIGJ1bmRsZWQgaW4gYSB0aGlyZCBwYXJ0eSBsaWIsIGJ1dCBub3QgYmUgcGFydCBvZlxuICAvLyBhbiBBTUQgbG9hZCByZXF1ZXN0LiBUaG9zZSBjYXNlcyBjb3VsZCBnZW5lcmF0ZSBhbiBlcnJvciB3aGVuIGFuXG4gIC8vIGFub255bW91cyBkZWZpbmUoKSBpcyBjYWxsZWQgb3V0c2lkZSBvZiBhIGxvYWRlciByZXF1ZXN0LlxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCd1bmRlcnNjb3JlJywgW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF87XG4gICAgfSk7XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKlxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogQGZpbGUgdXRpbHMuanNcbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCTiA9IHJlcXVpcmUoJ2JuLmpzJyk7XG52YXIgbnVtYmVyVG9CTiA9IHJlcXVpcmUoJ251bWJlci10by1ibicpO1xudmFyIHV0ZjggPSByZXF1aXJlKCd1dGY4Jyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoXCJldGgtbGliL3NyYy9oYXNoXCIpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iamVjdCBpcyBCTiwgb3RoZXJ3aXNlIGZhbHNlXG4gKlxuICogQG1ldGhvZCBpc0JOXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG52YXIgaXNCTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgQk4gfHxcbiAgICAgICAgKG9iamVjdCAmJiBvYmplY3QuY29uc3RydWN0b3IgJiYgb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdCTicpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqZWN0IGlzIEJpZ051bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKlxuICogQG1ldGhvZCBpc0JpZ051bWJlclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xudmFyIGlzQmlnTnVtYmVyID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgJiYgb2JqZWN0LmNvbnN0cnVjdG9yICYmIG9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQmlnTnVtYmVyJztcbn07XG5cbi8qKlxuICogVGFrZXMgYW4gaW5wdXQgYW5kIHRyYW5zZm9ybXMgaXQgaW50byBhbiBCTlxuICpcbiAqIEBtZXRob2QgdG9CTlxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfEJOfSBudW1iZXIsIHN0cmluZywgSEVYIHN0cmluZyBvciBCTlxuICogQHJldHVybiB7Qk59IEJOXG4gKi9cbnZhciB0b0JOID0gZnVuY3Rpb24obnVtYmVyKXtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbnVtYmVyVG9CTi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSArICcgR2l2ZW4gdmFsdWU6IFwiJysgbnVtYmVyICsnXCInKTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBzdHJpbmcgaXMgYW4gYWRkcmVzc1xuICpcbiAqIEBtZXRob2QgaXNBZGRyZXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyB0aGUgZ2l2ZW4gSEVYIGFkZHJlc3NcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnZhciBpc0FkZHJlc3MgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgIC8vIGNoZWNrIGlmIGl0IGhhcyB0aGUgYmFzaWMgcmVxdWlyZW1lbnRzIG9mIGFuIGFkZHJlc3NcbiAgICBpZiAoIS9eKDB4KT9bMC05YS1mXXs0MH0kL2kudGVzdChhZGRyZXNzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIElmIGl0J3MgQUxMIGxvd2VyY2FzZSBvciBBTEwgdXBwcGVyY2FzZVxuICAgIH0gZWxzZSBpZiAoL14oMHh8MFgpP1swLTlhLWZdezQwfSQvLnRlc3QoYWRkcmVzcykgfHwgL14oMHh8MFgpP1swLTlBLUZdezQwfSQvLnRlc3QoYWRkcmVzcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIE90aGVyd2lzZSBjaGVjayBlYWNoIGNhc2VcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hlY2tBZGRyZXNzQ2hlY2tzdW0oYWRkcmVzcyk7XG4gICAgfVxufTtcblxuXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSBjaGVja3N1bW1lZCBhZGRyZXNzXG4gKlxuICogQG1ldGhvZCBjaGVja0FkZHJlc3NDaGVja3N1bVxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgdGhlIGdpdmVuIEhFWCBhZGRyZXNzXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG52YXIgY2hlY2tBZGRyZXNzQ2hlY2tzdW0gPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgIC8vIENoZWNrIGVhY2ggY2FzZVxuICAgIGFkZHJlc3MgPSBhZGRyZXNzLnJlcGxhY2UoL14weC9pLCcnKTtcbiAgICB2YXIgYWRkcmVzc0hhc2ggPSBzaGEzKGFkZHJlc3MudG9Mb3dlckNhc2UoKSkucmVwbGFjZSgvXjB4L2ksJycpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0MDsgaSsrICkge1xuICAgICAgICAvLyB0aGUgbnRoIGxldHRlciBzaG91bGQgYmUgdXBwZXJjYXNlIGlmIHRoZSBudGggZGlnaXQgb2YgY2FzZW1hcCBpcyAxXG4gICAgICAgIGlmICgocGFyc2VJbnQoYWRkcmVzc0hhc2hbaV0sIDE2KSA+IDcgJiYgYWRkcmVzc1tpXS50b1VwcGVyQ2FzZSgpICE9PSBhZGRyZXNzW2ldKSB8fCAocGFyc2VJbnQoYWRkcmVzc0hhc2hbaV0sIDE2KSA8PSA3ICYmIGFkZHJlc3NbaV0udG9Mb3dlckNhc2UoKSAhPT0gYWRkcmVzc1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogU2hvdWxkIGJlIGNhbGxlZCB0byBwYWQgc3RyaW5nIHRvIGV4cGVjdGVkIGxlbmd0aFxuICpcbiAqIEBtZXRob2QgbGVmdFBhZFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyB0byBiZSBwYWRkZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaGFycyB0aGF0IHJlc3VsdCBzdHJpbmcgc2hvdWxkIGhhdmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzaWduLCBieSBkZWZhdWx0IDBcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHJpZ2h0IGFsaWduZWQgc3RyaW5nXG4gKi9cbnZhciBsZWZ0UGFkID0gZnVuY3Rpb24gKHN0cmluZywgY2hhcnMsIHNpZ24pIHtcbiAgICB2YXIgaGFzUHJlZml4ID0gL14weC9pLnRlc3Qoc3RyaW5nKSB8fCB0eXBlb2Ygc3RyaW5nID09PSAnbnVtYmVyJztcbiAgICBzdHJpbmcgPSBzdHJpbmcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14weC9pLCcnKTtcblxuICAgIHZhciBwYWRkaW5nID0gKGNoYXJzIC0gc3RyaW5nLmxlbmd0aCArIDEgPj0gMCkgPyBjaGFycyAtIHN0cmluZy5sZW5ndGggKyAxIDogMDtcblxuICAgIHJldHVybiAoaGFzUHJlZml4ID8gJzB4JyA6ICcnKSArIG5ldyBBcnJheShwYWRkaW5nKS5qb2luKHNpZ24gPyBzaWduIDogXCIwXCIpICsgc3RyaW5nO1xufTtcblxuLyoqXG4gKiBTaG91bGQgYmUgY2FsbGVkIHRvIHBhZCBzdHJpbmcgdG8gZXhwZWN0ZWQgbGVuZ3RoXG4gKlxuICogQG1ldGhvZCByaWdodFBhZFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyB0byBiZSBwYWRkZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaGFycyB0aGF0IHJlc3VsdCBzdHJpbmcgc2hvdWxkIGhhdmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzaWduLCBieSBkZWZhdWx0IDBcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHJpZ2h0IGFsaWduZWQgc3RyaW5nXG4gKi9cbnZhciByaWdodFBhZCA9IGZ1bmN0aW9uIChzdHJpbmcsIGNoYXJzLCBzaWduKSB7XG4gICAgdmFyIGhhc1ByZWZpeCA9IC9eMHgvaS50ZXN0KHN0cmluZykgfHwgdHlwZW9mIHN0cmluZyA9PT0gJ251bWJlcic7XG4gICAgc3RyaW5nID0gc3RyaW5nLnRvU3RyaW5nKDE2KS5yZXBsYWNlKC9eMHgvaSwnJyk7XG5cbiAgICB2YXIgcGFkZGluZyA9IChjaGFycyAtIHN0cmluZy5sZW5ndGggKyAxID49IDApID8gY2hhcnMgLSBzdHJpbmcubGVuZ3RoICsgMSA6IDA7XG5cbiAgICByZXR1cm4gKGhhc1ByZWZpeCA/ICcweCcgOiAnJykgKyBzdHJpbmcgKyAobmV3IEFycmF5KHBhZGRpbmcpLmpvaW4oc2lnbiA/IHNpZ24gOiBcIjBcIikpO1xufTtcblxuXG4vKipcbiAqIFNob3VsZCBiZSBjYWxsZWQgdG8gZ2V0IGhleCByZXByZXNlbnRhdGlvbiAocHJlZml4ZWQgYnkgMHgpIG9mIHV0Zjggc3RyaW5nXG4gKlxuICogQG1ldGhvZCB1dGY4VG9IZXhcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGhleCByZXByZXNlbnRhdGlvbiBvZiBpbnB1dCBzdHJpbmdcbiAqL1xudmFyIHV0ZjhUb0hleCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHN0ciA9IHV0ZjguZW5jb2RlKHN0cik7XG4gICAgdmFyIGhleCA9IFwiXCI7XG5cbiAgICAvLyByZW1vdmUgXFx1MDAwMCBwYWRkaW5nIGZyb20gZWl0aGVyIHNpZGVcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXig/OlxcdTAwMDApKi8sJycpO1xuICAgIHN0ciA9IHN0ci5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXig/OlxcdTAwMDApKi8sJycpO1xuICAgIHN0ciA9IHN0ci5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gaWYgKGNvZGUgIT09IDApIHtcbiAgICAgICAgdmFyIG4gPSBjb2RlLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaGV4ICs9IG4ubGVuZ3RoIDwgMiA/ICcwJyArIG4gOiBuO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiMHhcIiArIGhleDtcbn07XG5cbi8qKlxuICogU2hvdWxkIGJlIGNhbGxlZCB0byBnZXQgdXRmOCBmcm9tIGl0J3MgaGV4IHJlcHJlc2VudGF0aW9uXG4gKlxuICogQG1ldGhvZCBoZXhUb1V0ZjhcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZXhcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGFzY2lpIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBoZXggdmFsdWVcbiAqL1xudmFyIGhleFRvVXRmOCA9IGZ1bmN0aW9uKGhleCkge1xuICAgIGlmICghaXNIZXgoaGV4KSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGFyYW1ldGVyIFwiJysgaGV4ICsnXCIgbXVzdCBiZSBhIHZhbGlkIEhFWCBzdHJpbmcuJyk7XG5cbiAgICB2YXIgc3RyID0gXCJcIjtcbiAgICB2YXIgY29kZSA9IDA7XG4gICAgaGV4ID0gaGV4LnJlcGxhY2UoL14weC9pLCcnKTtcblxuICAgIC8vIHJlbW92ZSAwMCBwYWRkaW5nIGZyb20gZWl0aGVyIHNpZGVcbiAgICBoZXggPSBoZXgucmVwbGFjZSgvXig/OjAwKSovLCcnKTtcbiAgICBoZXggPSBoZXguc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gICAgaGV4ID0gaGV4LnJlcGxhY2UoL14oPzowMCkqLywnJyk7XG4gICAgaGV4ID0gaGV4LnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuXG4gICAgdmFyIGwgPSBoZXgubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaT0wOyBpIDwgbDsgaSs9Mikge1xuICAgICAgICBjb2RlID0gcGFyc2VJbnQoaGV4LnN1YnN0cihpLCAyKSwgMTYpO1xuICAgICAgICAvLyBpZiAoY29kZSAhPT0gMCkge1xuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHJldHVybiB1dGY4LmRlY29kZShzdHIpO1xufTtcblxuXG4vKipcbiAqIENvbnZlcnRzIHZhbHVlIHRvIGl0J3MgbnVtYmVyIHJlcHJlc2VudGF0aW9uXG4gKlxuICogQG1ldGhvZCBoZXhUb051bWJlclxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfEJOfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG52YXIgaGV4VG9OdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9CTih2YWx1ZSkudG9OdW1iZXIoKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdmFsdWUgdG8gaXQncyBkZWNpbWFsIHJlcHJlc2VudGF0aW9uIGluIHN0cmluZ1xuICpcbiAqIEBtZXRob2QgaGV4VG9OdW1iZXJTdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxCTn0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xudmFyIGhleFRvTnVtYmVyU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgcmV0dXJuIHRvQk4odmFsdWUpLnRvU3RyaW5nKDEwKTtcbn07XG5cblxuLyoqXG4gKiBDb252ZXJ0cyB2YWx1ZSB0byBpdCdzIGhleCByZXByZXNlbnRhdGlvblxuICpcbiAqIEBtZXRob2QgbnVtYmVyVG9IZXhcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxCTn0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xudmFyIG51bWJlclRvSGV4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkgJiYgIV8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgbnVtYmVyID0gdG9CTih2YWx1ZSk7XG4gICAgdmFyIHJlc3VsdCA9IG51bWJlci50b1N0cmluZygxNik7XG5cbiAgICByZXR1cm4gbnVtYmVyLmx0KG5ldyBCTigwKSkgPyAnLTB4JyArIHJlc3VsdC5zdWJzdHIoMSkgOiAnMHgnICsgcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgaGV4IHN0cmluZ1xuICpcbiAqIE5vdGU6IEltcGxlbWVudGF0aW9uIGZyb20gY3J5cHRvLWpzXG4gKlxuICogQG1ldGhvZCBieXRlc1RvSGV4XG4gKiBAcGFyYW0ge0FycmF5fSBieXRlc1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaGV4IHN0cmluZ1xuICovXG52YXIgYnl0ZXNUb0hleCA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgZm9yICh2YXIgaGV4ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSAmIDB4RikudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgLyoganNoaW50IGlnbm9yZTplbmQgKi9cbiAgICB9XG4gICAgcmV0dXJuICcweCcrIGhleC5qb2luKFwiXCIpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgaGV4IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAqXG4gKiBOb3RlOiBJbXBsZW1lbnRhdGlvbiBmcm9tIGNyeXB0by1qc1xuICpcbiAqIEBtZXRob2QgaGV4VG9CeXRlc1xuICogQHBhcmFtIHtzdHJpbmd9IGhleFxuICogQHJldHVybiB7QXJyYXl9IHRoZSBieXRlIGFycmF5XG4gKi9cbnZhciBoZXhUb0J5dGVzID0gZnVuY3Rpb24oaGV4KSB7XG4gICAgaGV4ID0gaGV4LnRvU3RyaW5nKDE2KTtcblxuICAgIGlmICghaXNIZXgoaGV4KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dpdmVuIHZhbHVlIFwiJysgaGV4ICsnXCIgaXMgbm90IGEgdmFsaWQgaGV4IHN0cmluZy4nKTtcbiAgICB9XG5cbiAgICBoZXggPSBoZXgucmVwbGFjZSgvXjB4L2ksJycpO1xuXG4gICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYyA9IDA7IGMgPCBoZXgubGVuZ3RoOyBjICs9IDIpXG4gICAgICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LnN1YnN0cihjLCAyKSwgMTYpKTtcbiAgICByZXR1cm4gYnl0ZXM7XG59O1xuXG4vKipcbiAqIEF1dG8gY29udmVydHMgYW55IGdpdmVuIHZhbHVlIGludG8gaXQncyBoZXggcmVwcmVzZW50YXRpb24uXG4gKlxuICogQW5kIGV2ZW4gc3RyaW5naWZ5cyBvYmplY3RzIGJlZm9yZS5cbiAqXG4gKiBAbWV0aG9kIHRvSGV4XG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ8Qk58T2JqZWN0fSB2YWx1ZVxuICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5UeXBlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnZhciB0b0hleCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmV0dXJuVHlwZSkge1xuICAgIC8qanNoaW50IG1heGNvbXBsZXhpdHk6IGZhbHNlICovXG5cbiAgICBpZiAoaXNBZGRyZXNzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuVHlwZSA/ICdhZGRyZXNzJyA6ICcweCcrIHZhbHVlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXjB4L2ksJycpO1xuICAgIH1cblxuICAgIGlmIChfLmlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblR5cGUgPyAnYm9vbCcgOiB2YWx1ZSA/ICcweDAxJyA6ICcweDAwJztcbiAgICB9XG5cblxuICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNCaWdOdW1iZXIodmFsdWUpICYmICFpc0JOKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuVHlwZSA/ICdzdHJpbmcnIDogdXRmOFRvSGV4KEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXRzIGEgbmVnYXRpdmUgbnVtYmVyLCBwYXNzIGl0IHRocm91Z2ggbnVtYmVyVG9IZXhcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJy0weCcpID09PSAwIHx8IHZhbHVlLmluZGV4T2YoJy0wWCcpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVHlwZSA/ICdpbnQyNTYnIDogbnVtYmVyVG9IZXgodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYodmFsdWUuaW5kZXhPZignMHgnKSA9PT0gMCB8fCB2YWx1ZS5pbmRleE9mKCcwWCcpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVHlwZSA/ICdieXRlcycgOiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVHlwZSA/ICdzdHJpbmcnIDogdXRmOFRvSGV4KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5UeXBlID8gKHZhbHVlIDwgMCA/ICdpbnQyNTYnIDogJ3VpbnQyNTYnKSA6IG51bWJlclRvSGV4KHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBDaGVjayBpZiBzdHJpbmcgaXMgSEVYXG4gKlxuICogQG1ldGhvZCBpc0hleFxuICogQHBhcmFtIHtTdHJpbmd9IGhleCB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xudmFyIGlzSGV4ID0gZnVuY3Rpb24gKGhleCkge1xuICAgIHJldHVybiAoKF8uaXNTdHJpbmcoaGV4KSB8fCBfLmlzTnVtYmVyKGhleCkpICYmIC9eKC0pPzB4WzAtOWEtZl0rJC9pLnRlc3QoaGV4KSk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIEV0aGVyZXVtIGJsb2NrIGhlYWRlciBibG9vbS5cbiAqXG4gKiBUT0RPIFVORE9DVU1FTlRFRFxuICpcbiAqIEBtZXRob2QgaXNCbG9vbVxuICogQHBhcmFtIHtTdHJpbmd9IGhleCBlbmNvZGVkIGJsb29tIGZpbHRlclxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xudmFyIGlzQmxvb20gPSBmdW5jdGlvbiAoYmxvb20pIHtcbiAgICBpZiAoIS9eKDB4KT9bMC05YS1mXXs1MTJ9JC9pLnRlc3QoYmxvb20pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKC9eKDB4KT9bMC05YS1mXXs1MTJ9JC8udGVzdChibG9vbSkgfHwgL14oMHgpP1swLTlBLUZdezUxMn0kLy50ZXN0KGJsb29tKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgbG9nIHRvcGljLlxuICpcbiAqIFRPRE8gVU5ET0NVTUVOVEVEXG4gKlxuICogQG1ldGhvZCBpc1RvcGljXG4gKiBAcGFyYW0ge1N0cmluZ30gaGV4IGVuY29kZWQgdG9waWNcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnZhciBpc1RvcGljID0gZnVuY3Rpb24gKHRvcGljKSB7XG4gICAgaWYgKCEvXigweCk/WzAtOWEtZl17NjR9JC9pLnRlc3QodG9waWMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKC9eKDB4KT9bMC05YS1mXXs2NH0kLy50ZXN0KHRvcGljKSB8fCAvXigweCk/WzAtOUEtRl17NjR9JC8udGVzdCh0b3BpYykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBIYXNoZXMgdmFsdWVzIHRvIGEgc2hhMyBoYXNoIHVzaW5nIGtlY2NhayAyNTZcbiAqXG4gKiBUbyBoYXNoIGEgSEVYIHN0cmluZyB0aGUgaGV4IG11c3QgaGF2ZSAweCBpbiBmcm9udC5cbiAqXG4gKiBAbWV0aG9kIHNoYTNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHNoYTMgc3RyaW5nXG4gKi9cbnZhciBTSEEzX05VTExfUyA9ICcweGM1ZDI0NjAxODZmNzIzM2M5MjdlN2RiMmRjYzcwM2MwZTUwMGI2NTNjYTgyMjczYjdiZmFkODA0NWQ4NWE0NzAnO1xuXG52YXIgc2hhMyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChpc0hleCh2YWx1ZSkgJiYgL14weC9pLnRlc3QoKHZhbHVlKS50b1N0cmluZygpKSkge1xuICAgICAgICB2YWx1ZSA9IGhleFRvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5WYWx1ZSA9IEhhc2gua2VjY2FrMjU2KHZhbHVlKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICBpZihyZXR1cm5WYWx1ZSA9PT0gU0hBM19OVUxMX1MpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbn07XG4vLyBleHBvc2UgdGhlIHVuZGVyIHRoZSBob29kIGtlY2NhazI1Nlxuc2hhMy5fSGFzaCA9IEhhc2g7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQk46IEJOLFxuICAgIGlzQk46IGlzQk4sXG4gICAgaXNCaWdOdW1iZXI6IGlzQmlnTnVtYmVyLFxuICAgIHRvQk46IHRvQk4sXG4gICAgaXNBZGRyZXNzOiBpc0FkZHJlc3MsXG4gICAgaXNCbG9vbTogaXNCbG9vbSwgLy8gVE9ETyBVTkRPQ1VNRU5URURcbiAgICBpc1RvcGljOiBpc1RvcGljLCAvLyBUT0RPIFVORE9DVU1FTlRFRFxuICAgIGNoZWNrQWRkcmVzc0NoZWNrc3VtOiBjaGVja0FkZHJlc3NDaGVja3N1bSxcbiAgICB1dGY4VG9IZXg6IHV0ZjhUb0hleCxcbiAgICBoZXhUb1V0Zjg6IGhleFRvVXRmOCxcbiAgICBoZXhUb051bWJlcjogaGV4VG9OdW1iZXIsXG4gICAgaGV4VG9OdW1iZXJTdHJpbmc6IGhleFRvTnVtYmVyU3RyaW5nLFxuICAgIG51bWJlclRvSGV4OiBudW1iZXJUb0hleCxcbiAgICB0b0hleDogdG9IZXgsXG4gICAgaGV4VG9CeXRlczogaGV4VG9CeXRlcyxcbiAgICBieXRlc1RvSGV4OiBieXRlc1RvSGV4LFxuICAgIGlzSGV4OiBpc0hleCxcbiAgICBsZWZ0UGFkOiBsZWZ0UGFkLFxuICAgIHJpZ2h0UGFkOiByaWdodFBhZCxcbiAgICBzaGEzOiBzaGEzXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2ViMy9wYWNrYWdlcy93ZWIzLXV0aWxzL3NyYy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMzk0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIihmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBVdGlsc1xuICBmdW5jdGlvbiBhc3NlcnQgKHZhbCwgbXNnKSB7XG4gICAgaWYgKCF2YWwpIHRocm93IG5ldyBFcnJvcihtc2cgfHwgJ0Fzc2VydGlvbiBmYWlsZWQnKTtcbiAgfVxuXG4gIC8vIENvdWxkIHVzZSBgaW5oZXJpdHNgIG1vZHVsZSwgYnV0IGRvbid0IHdhbnQgdG8gbW92ZSBmcm9tIHNpbmdsZSBmaWxlXG4gIC8vIGFyY2hpdGVjdHVyZSB5ZXQuXG4gIGZ1bmN0aW9uIGluaGVyaXRzIChjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvcjtcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlO1xuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKCk7XG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yO1xuICB9XG5cbiAgLy8gQk5cblxuICBmdW5jdGlvbiBCTiAobnVtYmVyLCBiYXNlLCBlbmRpYW4pIHtcbiAgICBpZiAoQk4uaXNCTihudW1iZXIpKSB7XG4gICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cblxuICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgIHRoaXMud29yZHMgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIC8vIFJlZHVjdGlvbiBjb250ZXh0XG4gICAgdGhpcy5yZWQgPSBudWxsO1xuXG4gICAgaWYgKG51bWJlciAhPT0gbnVsbCkge1xuICAgICAgaWYgKGJhc2UgPT09ICdsZScgfHwgYmFzZSA9PT0gJ2JlJykge1xuICAgICAgICBlbmRpYW4gPSBiYXNlO1xuICAgICAgICBiYXNlID0gMTA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXQobnVtYmVyIHx8IDAsIGJhc2UgfHwgMTAsIGVuZGlhbiB8fCAnYmUnKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBCTjtcbiAgfSBlbHNlIHtcbiAgICBleHBvcnRzLkJOID0gQk47XG4gIH1cblxuICBCTi5CTiA9IEJOO1xuICBCTi53b3JkU2l6ZSA9IDI2O1xuXG4gIHZhciBCdWZmZXI7XG4gIHRyeSB7XG4gICAgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cblxuICBCTi5pc0JOID0gZnVuY3Rpb24gaXNCTiAobnVtKSB7XG4gICAgaWYgKG51bSBpbnN0YW5jZW9mIEJOKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtICE9PSBudWxsICYmIHR5cGVvZiBudW0gPT09ICdvYmplY3QnICYmXG4gICAgICBudW0uY29uc3RydWN0b3Iud29yZFNpemUgPT09IEJOLndvcmRTaXplICYmIEFycmF5LmlzQXJyYXkobnVtLndvcmRzKTtcbiAgfTtcblxuICBCTi5tYXggPSBmdW5jdGlvbiBtYXggKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQuY21wKHJpZ2h0KSA+IDApIHJldHVybiBsZWZ0O1xuICAgIHJldHVybiByaWdodDtcbiAgfTtcblxuICBCTi5taW4gPSBmdW5jdGlvbiBtaW4gKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQuY21wKHJpZ2h0KSA8IDApIHJldHVybiBsZWZ0O1xuICAgIHJldHVybiByaWdodDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiBpbml0IChudW1iZXIsIGJhc2UsIGVuZGlhbikge1xuICAgIGlmICh0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXROdW1iZXIobnVtYmVyLCBiYXNlLCBlbmRpYW4pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbnVtYmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRBcnJheShudW1iZXIsIGJhc2UsIGVuZGlhbik7XG4gICAgfVxuXG4gICAgaWYgKGJhc2UgPT09ICdoZXgnKSB7XG4gICAgICBiYXNlID0gMTY7XG4gICAgfVxuICAgIGFzc2VydChiYXNlID09PSAoYmFzZSB8IDApICYmIGJhc2UgPj0gMiAmJiBiYXNlIDw9IDM2KTtcblxuICAgIG51bWJlciA9IG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xccysvZywgJycpO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgaWYgKG51bWJlclswXSA9PT0gJy0nKSB7XG4gICAgICBzdGFydCsrO1xuICAgIH1cblxuICAgIGlmIChiYXNlID09PSAxNikge1xuICAgICAgdGhpcy5fcGFyc2VIZXgobnVtYmVyLCBzdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcnNlQmFzZShudW1iZXIsIGJhc2UsIHN0YXJ0KTtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyWzBdID09PSAnLScpIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgIH1cblxuICAgIHRoaXMuc3RyaXAoKTtcblxuICAgIGlmIChlbmRpYW4gIT09ICdsZScpIHJldHVybjtcblxuICAgIHRoaXMuX2luaXRBcnJheSh0aGlzLnRvQXJyYXkoKSwgYmFzZSwgZW5kaWFuKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX2luaXROdW1iZXIgPSBmdW5jdGlvbiBfaW5pdE51bWJlciAobnVtYmVyLCBiYXNlLCBlbmRpYW4pIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyIDwgMHg0MDAwMDAwKSB7XG4gICAgICB0aGlzLndvcmRzID0gWyBudW1iZXIgJiAweDNmZmZmZmYgXTtcbiAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IDB4MTAwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXG4gICAgICAgIG51bWJlciAmIDB4M2ZmZmZmZixcbiAgICAgICAgKG51bWJlciAvIDB4NDAwMDAwMCkgJiAweDNmZmZmZmZcbiAgICAgIF07XG4gICAgICB0aGlzLmxlbmd0aCA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydChudW1iZXIgPCAweDIwMDAwMDAwMDAwMDAwKTsgLy8gMiBeIDUzICh1bnNhZmUpXG4gICAgICB0aGlzLndvcmRzID0gW1xuICAgICAgICBudW1iZXIgJiAweDNmZmZmZmYsXG4gICAgICAgIChudW1iZXIgLyAweDQwMDAwMDApICYgMHgzZmZmZmZmLFxuICAgICAgICAxXG4gICAgICBdO1xuICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgIH1cblxuICAgIGlmIChlbmRpYW4gIT09ICdsZScpIHJldHVybjtcblxuICAgIC8vIFJldmVyc2UgdGhlIGJ5dGVzXG4gICAgdGhpcy5faW5pdEFycmF5KHRoaXMudG9BcnJheSgpLCBiYXNlLCBlbmRpYW4pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5faW5pdEFycmF5ID0gZnVuY3Rpb24gX2luaXRBcnJheSAobnVtYmVyLCBiYXNlLCBlbmRpYW4pIHtcbiAgICAvLyBQZXJoYXBzIGEgVWludDhBcnJheVxuICAgIGFzc2VydCh0eXBlb2YgbnVtYmVyLmxlbmd0aCA9PT0gJ251bWJlcicpO1xuICAgIGlmIChudW1iZXIubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMud29yZHMgPSBbIDAgXTtcbiAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5jZWlsKG51bWJlci5sZW5ndGggLyAzKTtcbiAgICB0aGlzLndvcmRzID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMud29yZHNbaV0gPSAwO1xuICAgIH1cblxuICAgIHZhciBqLCB3O1xuICAgIHZhciBvZmYgPSAwO1xuICAgIGlmIChlbmRpYW4gPT09ICdiZScpIHtcbiAgICAgIGZvciAoaSA9IG51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpIC09IDMpIHtcbiAgICAgICAgdyA9IG51bWJlcltpXSB8IChudW1iZXJbaSAtIDFdIDw8IDgpIHwgKG51bWJlcltpIC0gMl0gPDwgMTYpO1xuICAgICAgICB0aGlzLndvcmRzW2pdIHw9ICh3IDw8IG9mZikgJiAweDNmZmZmZmY7XG4gICAgICAgIHRoaXMud29yZHNbaiArIDFdID0gKHcgPj4+ICgyNiAtIG9mZikpICYgMHgzZmZmZmZmO1xuICAgICAgICBvZmYgKz0gMjQ7XG4gICAgICAgIGlmIChvZmYgPj0gMjYpIHtcbiAgICAgICAgICBvZmYgLT0gMjY7XG4gICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbmRpYW4gPT09ICdsZScpIHtcbiAgICAgIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIHcgPSBudW1iZXJbaV0gfCAobnVtYmVyW2kgKyAxXSA8PCA4KSB8IChudW1iZXJbaSArIDJdIDw8IDE2KTtcbiAgICAgICAgdGhpcy53b3Jkc1tqXSB8PSAodyA8PCBvZmYpICYgMHgzZmZmZmZmO1xuICAgICAgICB0aGlzLndvcmRzW2ogKyAxXSA9ICh3ID4+PiAoMjYgLSBvZmYpKSAmIDB4M2ZmZmZmZjtcbiAgICAgICAgb2ZmICs9IDI0O1xuICAgICAgICBpZiAob2ZmID49IDI2KSB7XG4gICAgICAgICAgb2ZmIC09IDI2O1xuICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBhcnNlSGV4IChzdHIsIHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IDA7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKHN0ci5sZW5ndGgsIGVuZCk7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSkgLSA0ODtcblxuICAgICAgciA8PD0gNDtcblxuICAgICAgLy8gJ2EnIC0gJ2YnXG4gICAgICBpZiAoYyA+PSA0OSAmJiBjIDw9IDU0KSB7XG4gICAgICAgIHIgfD0gYyAtIDQ5ICsgMHhhO1xuXG4gICAgICAvLyAnQScgLSAnRidcbiAgICAgIH0gZWxzZSBpZiAoYyA+PSAxNyAmJiBjIDw9IDIyKSB7XG4gICAgICAgIHIgfD0gYyAtIDE3ICsgMHhhO1xuXG4gICAgICAvLyAnMCcgLSAnOSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHIgfD0gYyAmIDB4ZjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICBCTi5wcm90b3R5cGUuX3BhcnNlSGV4ID0gZnVuY3Rpb24gX3BhcnNlSGV4IChudW1iZXIsIHN0YXJ0KSB7XG4gICAgLy8gQ3JlYXRlIHBvc3NpYmx5IGJpZ2dlciBhcnJheSB0byBlbnN1cmUgdGhhdCBpdCBmaXRzIHRoZSBudW1iZXJcbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguY2VpbCgobnVtYmVyLmxlbmd0aCAtIHN0YXJ0KSAvIDYpO1xuICAgIHRoaXMud29yZHMgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGosIHc7XG4gICAgLy8gU2NhbiAyNC1iaXQgY2h1bmtzIGFuZCBhZGQgdGhlbSB0byB0aGUgbnVtYmVyXG4gICAgdmFyIG9mZiA9IDA7XG4gICAgZm9yIChpID0gbnVtYmVyLmxlbmd0aCAtIDYsIGogPSAwOyBpID49IHN0YXJ0OyBpIC09IDYpIHtcbiAgICAgIHcgPSBwYXJzZUhleChudW1iZXIsIGksIGkgKyA2KTtcbiAgICAgIHRoaXMud29yZHNbal0gfD0gKHcgPDwgb2ZmKSAmIDB4M2ZmZmZmZjtcbiAgICAgIC8vIE5PVEU6IGAweDNmZmZmZmAgaXMgaW50ZW50aW9uYWwgaGVyZSwgMjZiaXRzIG1heCBzaGlmdCArIDI0Yml0IGhleCBsaW1iXG4gICAgICB0aGlzLndvcmRzW2ogKyAxXSB8PSB3ID4+PiAoMjYgLSBvZmYpICYgMHgzZmZmZmY7XG4gICAgICBvZmYgKz0gMjQ7XG4gICAgICBpZiAob2ZmID49IDI2KSB7XG4gICAgICAgIG9mZiAtPSAyNjtcbiAgICAgICAgaisrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSArIDYgIT09IHN0YXJ0KSB7XG4gICAgICB3ID0gcGFyc2VIZXgobnVtYmVyLCBzdGFydCwgaSArIDYpO1xuICAgICAgdGhpcy53b3Jkc1tqXSB8PSAodyA8PCBvZmYpICYgMHgzZmZmZmZmO1xuICAgICAgdGhpcy53b3Jkc1tqICsgMV0gfD0gdyA+Pj4gKDI2IC0gb2ZmKSAmIDB4M2ZmZmZmO1xuICAgIH1cbiAgICB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGFyc2VCYXNlIChzdHIsIHN0YXJ0LCBlbmQsIG11bCkge1xuICAgIHZhciByID0gMDtcbiAgICB2YXIgbGVuID0gTWF0aC5taW4oc3RyLmxlbmd0aCwgZW5kKTtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKSAtIDQ4O1xuXG4gICAgICByICo9IG11bDtcblxuICAgICAgLy8gJ2EnXG4gICAgICBpZiAoYyA+PSA0OSkge1xuICAgICAgICByICs9IGMgLSA0OSArIDB4YTtcblxuICAgICAgLy8gJ0EnXG4gICAgICB9IGVsc2UgaWYgKGMgPj0gMTcpIHtcbiAgICAgICAgciArPSBjIC0gMTcgKyAweGE7XG5cbiAgICAgIC8vICcwJyAtICc5J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgciArPSBjO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIEJOLnByb3RvdHlwZS5fcGFyc2VCYXNlID0gZnVuY3Rpb24gX3BhcnNlQmFzZSAobnVtYmVyLCBiYXNlLCBzdGFydCkge1xuICAgIC8vIEluaXRpYWxpemUgYXMgemVyb1xuICAgIHRoaXMud29yZHMgPSBbIDAgXTtcbiAgICB0aGlzLmxlbmd0aCA9IDE7XG5cbiAgICAvLyBGaW5kIGxlbmd0aCBvZiBsaW1iIGluIGJhc2VcbiAgICBmb3IgKHZhciBsaW1iTGVuID0gMCwgbGltYlBvdyA9IDE7IGxpbWJQb3cgPD0gMHgzZmZmZmZmOyBsaW1iUG93ICo9IGJhc2UpIHtcbiAgICAgIGxpbWJMZW4rKztcbiAgICB9XG4gICAgbGltYkxlbi0tO1xuICAgIGxpbWJQb3cgPSAobGltYlBvdyAvIGJhc2UpIHwgMDtcblxuICAgIHZhciB0b3RhbCA9IG51bWJlci5sZW5ndGggLSBzdGFydDtcbiAgICB2YXIgbW9kID0gdG90YWwgJSBsaW1iTGVuO1xuICAgIHZhciBlbmQgPSBNYXRoLm1pbih0b3RhbCwgdG90YWwgLSBtb2QpICsgc3RhcnQ7XG5cbiAgICB2YXIgd29yZCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IGxpbWJMZW4pIHtcbiAgICAgIHdvcmQgPSBwYXJzZUJhc2UobnVtYmVyLCBpLCBpICsgbGltYkxlbiwgYmFzZSk7XG5cbiAgICAgIHRoaXMuaW11bG4obGltYlBvdyk7XG4gICAgICBpZiAodGhpcy53b3Jkc1swXSArIHdvcmQgPCAweDQwMDAwMDApIHtcbiAgICAgICAgdGhpcy53b3Jkc1swXSArPSB3b3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faWFkZG4od29yZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1vZCAhPT0gMCkge1xuICAgICAgdmFyIHBvdyA9IDE7XG4gICAgICB3b3JkID0gcGFyc2VCYXNlKG51bWJlciwgaSwgbnVtYmVyLmxlbmd0aCwgYmFzZSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBtb2Q7IGkrKykge1xuICAgICAgICBwb3cgKj0gYmFzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbXVsbihwb3cpO1xuICAgICAgaWYgKHRoaXMud29yZHNbMF0gKyB3b3JkIDwgMHg0MDAwMDAwKSB7XG4gICAgICAgIHRoaXMud29yZHNbMF0gKz0gd29yZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lhZGRuKHdvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBCTi5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKGRlc3QpIHtcbiAgICBkZXN0LndvcmRzID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc3Qud29yZHNbaV0gPSB0aGlzLndvcmRzW2ldO1xuICAgIH1cbiAgICBkZXN0Lmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIGRlc3QubmVnYXRpdmUgPSB0aGlzLm5lZ2F0aXZlO1xuICAgIGRlc3QucmVkID0gdGhpcy5yZWQ7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gY2xvbmUgKCkge1xuICAgIHZhciByID0gbmV3IEJOKG51bGwpO1xuICAgIHRoaXMuY29weShyKTtcbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX2V4cGFuZCA9IGZ1bmN0aW9uIF9leHBhbmQgKHNpemUpIHtcbiAgICB3aGlsZSAodGhpcy5sZW5ndGggPCBzaXplKSB7XG4gICAgICB0aGlzLndvcmRzW3RoaXMubGVuZ3RoKytdID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gUmVtb3ZlIGxlYWRpbmcgYDBgIGZyb20gYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5zdHJpcCA9IGZ1bmN0aW9uIHN0cmlwICgpIHtcbiAgICB3aGlsZSAodGhpcy5sZW5ndGggPiAxICYmIHRoaXMud29yZHNbdGhpcy5sZW5ndGggLSAxXSA9PT0gMCkge1xuICAgICAgdGhpcy5sZW5ndGgtLTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25vcm1TaWduKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9ub3JtU2lnbiA9IGZ1bmN0aW9uIF9ub3JtU2lnbiAoKSB7XG4gICAgLy8gLTAgPSAwXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxICYmIHRoaXMud29yZHNbMF0gPT09IDApIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICAgIHJldHVybiAodGhpcy5yZWQgPyAnPEJOLVI6ICcgOiAnPEJOOiAnKSArIHRoaXMudG9TdHJpbmcoMTYpICsgJz4nO1xuICB9O1xuXG4gIC8qXG5cbiAgdmFyIHplcm9zID0gW107XG4gIHZhciBncm91cFNpemVzID0gW107XG4gIHZhciBncm91cEJhc2VzID0gW107XG5cbiAgdmFyIHMgPSAnJztcbiAgdmFyIGkgPSAtMTtcbiAgd2hpbGUgKCsraSA8IEJOLndvcmRTaXplKSB7XG4gICAgemVyb3NbaV0gPSBzO1xuICAgIHMgKz0gJzAnO1xuICB9XG4gIGdyb3VwU2l6ZXNbMF0gPSAwO1xuICBncm91cFNpemVzWzFdID0gMDtcbiAgZ3JvdXBCYXNlc1swXSA9IDA7XG4gIGdyb3VwQmFzZXNbMV0gPSAwO1xuICB2YXIgYmFzZSA9IDIgLSAxO1xuICB3aGlsZSAoKytiYXNlIDwgMzYgKyAxKSB7XG4gICAgdmFyIGdyb3VwU2l6ZSA9IDA7XG4gICAgdmFyIGdyb3VwQmFzZSA9IDE7XG4gICAgd2hpbGUgKGdyb3VwQmFzZSA8ICgxIDw8IEJOLndvcmRTaXplKSAvIGJhc2UpIHtcbiAgICAgIGdyb3VwQmFzZSAqPSBiYXNlO1xuICAgICAgZ3JvdXBTaXplICs9IDE7XG4gICAgfVxuICAgIGdyb3VwU2l6ZXNbYmFzZV0gPSBncm91cFNpemU7XG4gICAgZ3JvdXBCYXNlc1tiYXNlXSA9IGdyb3VwQmFzZTtcbiAgfVxuXG4gICovXG5cbiAgdmFyIHplcm9zID0gW1xuICAgICcnLFxuICAgICcwJyxcbiAgICAnMDAnLFxuICAgICcwMDAnLFxuICAgICcwMDAwJyxcbiAgICAnMDAwMDAnLFxuICAgICcwMDAwMDAnLFxuICAgICcwMDAwMDAwJyxcbiAgICAnMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwJyxcbiAgICAnMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwJyxcbiAgICAnMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwJyxcbiAgICAnMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwJyxcbiAgICAnMDAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJyxcbiAgICAnMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJ1xuICBdO1xuXG4gIHZhciBncm91cFNpemVzID0gW1xuICAgIDAsIDAsXG4gICAgMjUsIDE2LCAxMiwgMTEsIDEwLCA5LCA4LFxuICAgIDgsIDcsIDcsIDcsIDcsIDYsIDYsXG4gICAgNiwgNiwgNiwgNiwgNiwgNSwgNSxcbiAgICA1LCA1LCA1LCA1LCA1LCA1LCA1LFxuICAgIDUsIDUsIDUsIDUsIDUsIDUsIDVcbiAgXTtcblxuICB2YXIgZ3JvdXBCYXNlcyA9IFtcbiAgICAwLCAwLFxuICAgIDMzNTU0NDMyLCA0MzA0NjcyMSwgMTY3NzcyMTYsIDQ4ODI4MTI1LCA2MDQ2NjE3NiwgNDAzNTM2MDcsIDE2Nzc3MjE2LFxuICAgIDQzMDQ2NzIxLCAxMDAwMDAwMCwgMTk0ODcxNzEsIDM1ODMxODA4LCA2Mjc0ODUxNywgNzUyOTUzNiwgMTEzOTA2MjUsXG4gICAgMTY3NzcyMTYsIDI0MTM3NTY5LCAzNDAxMjIyNCwgNDcwNDU4ODEsIDY0MDAwMDAwLCA0MDg0MTAxLCA1MTUzNjMyLFxuICAgIDY0MzYzNDMsIDc5NjI2MjQsIDk3NjU2MjUsIDExODgxMzc2LCAxNDM0ODkwNywgMTcyMTAzNjgsIDIwNTExMTQ5LFxuICAgIDI0MzAwMDAwLCAyODYyOTE1MSwgMzM1NTQ0MzIsIDM5MTM1MzkzLCA0NTQzNTQyNCwgNTI1MjE4NzUsIDYwNDY2MTc2XG4gIF07XG5cbiAgQk4ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKGJhc2UsIHBhZGRpbmcpIHtcbiAgICBiYXNlID0gYmFzZSB8fCAxMDtcbiAgICBwYWRkaW5nID0gcGFkZGluZyB8IDAgfHwgMTtcblxuICAgIHZhciBvdXQ7XG4gICAgaWYgKGJhc2UgPT09IDE2IHx8IGJhc2UgPT09ICdoZXgnKSB7XG4gICAgICBvdXQgPSAnJztcbiAgICAgIHZhciBvZmYgPSAwO1xuICAgICAgdmFyIGNhcnJ5ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdyA9IHRoaXMud29yZHNbaV07XG4gICAgICAgIHZhciB3b3JkID0gKCgodyA8PCBvZmYpIHwgY2FycnkpICYgMHhmZmZmZmYpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY2FycnkgPSAodyA+Pj4gKDI0IC0gb2ZmKSkgJiAweGZmZmZmZjtcbiAgICAgICAgaWYgKGNhcnJ5ICE9PSAwIHx8IGkgIT09IHRoaXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIG91dCA9IHplcm9zWzYgLSB3b3JkLmxlbmd0aF0gKyB3b3JkICsgb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dCA9IHdvcmQgKyBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgb2ZmICs9IDI7XG4gICAgICAgIGlmIChvZmYgPj0gMjYpIHtcbiAgICAgICAgICBvZmYgLT0gMjY7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FycnkgIT09IDApIHtcbiAgICAgICAgb3V0ID0gY2FycnkudG9TdHJpbmcoMTYpICsgb3V0O1xuICAgICAgfVxuICAgICAgd2hpbGUgKG91dC5sZW5ndGggJSBwYWRkaW5nICE9PSAwKSB7XG4gICAgICAgIG91dCA9ICcwJyArIG91dDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICAgIG91dCA9ICctJyArIG91dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgaWYgKGJhc2UgPT09IChiYXNlIHwgMCkgJiYgYmFzZSA+PSAyICYmIGJhc2UgPD0gMzYpIHtcbiAgICAgIC8vIHZhciBncm91cFNpemUgPSBNYXRoLmZsb29yKEJOLndvcmRTaXplICogTWF0aC5MTjIgLyBNYXRoLmxvZyhiYXNlKSk7XG4gICAgICB2YXIgZ3JvdXBTaXplID0gZ3JvdXBTaXplc1tiYXNlXTtcbiAgICAgIC8vIHZhciBncm91cEJhc2UgPSBNYXRoLnBvdyhiYXNlLCBncm91cFNpemUpO1xuICAgICAgdmFyIGdyb3VwQmFzZSA9IGdyb3VwQmFzZXNbYmFzZV07XG4gICAgICBvdXQgPSAnJztcbiAgICAgIHZhciBjID0gdGhpcy5jbG9uZSgpO1xuICAgICAgYy5uZWdhdGl2ZSA9IDA7XG4gICAgICB3aGlsZSAoIWMuaXNaZXJvKCkpIHtcbiAgICAgICAgdmFyIHIgPSBjLm1vZG4oZ3JvdXBCYXNlKS50b1N0cmluZyhiYXNlKTtcbiAgICAgICAgYyA9IGMuaWRpdm4oZ3JvdXBCYXNlKTtcblxuICAgICAgICBpZiAoIWMuaXNaZXJvKCkpIHtcbiAgICAgICAgICBvdXQgPSB6ZXJvc1tncm91cFNpemUgLSByLmxlbmd0aF0gKyByICsgb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dCA9IHIgKyBvdXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICAgIG91dCA9ICcwJyArIG91dDtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChvdXQubGVuZ3RoICUgcGFkZGluZyAhPT0gMCkge1xuICAgICAgICBvdXQgPSAnMCcgKyBvdXQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgICBvdXQgPSAnLScgKyBvdXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIGFzc2VydChmYWxzZSwgJ0Jhc2Ugc2hvdWxkIGJlIGJldHdlZW4gMiBhbmQgMzYnKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudG9OdW1iZXIgPSBmdW5jdGlvbiB0b051bWJlciAoKSB7XG4gICAgdmFyIHJldCA9IHRoaXMud29yZHNbMF07XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXQgKz0gdGhpcy53b3Jkc1sxXSAqIDB4NDAwMDAwMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSAzICYmIHRoaXMud29yZHNbMl0gPT09IDB4MDEpIHtcbiAgICAgIC8vIE5PVEU6IGF0IHRoaXMgc3RhZ2UgaXQgaXMga25vd24gdGhhdCB0aGUgdG9wIGJpdCBpcyBzZXRcbiAgICAgIHJldCArPSAweDEwMDAwMDAwMDAwMDAwICsgKHRoaXMud29yZHNbMV0gKiAweDQwMDAwMDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPiAyKSB7XG4gICAgICBhc3NlcnQoZmFsc2UsICdOdW1iZXIgY2FuIG9ubHkgc2FmZWx5IHN0b3JlIHVwIHRvIDUzIGJpdHMnKTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLm5lZ2F0aXZlICE9PSAwKSA/IC1yZXQgOiByZXQ7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoMTYpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS50b0J1ZmZlciA9IGZ1bmN0aW9uIHRvQnVmZmVyIChlbmRpYW4sIGxlbmd0aCkge1xuICAgIGFzc2VydCh0eXBlb2YgQnVmZmVyICE9PSAndW5kZWZpbmVkJyk7XG4gICAgcmV0dXJuIHRoaXMudG9BcnJheUxpa2UoQnVmZmVyLCBlbmRpYW4sIGxlbmd0aCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5IChlbmRpYW4sIGxlbmd0aCkge1xuICAgIHJldHVybiB0aGlzLnRvQXJyYXlMaWtlKEFycmF5LCBlbmRpYW4sIGxlbmd0aCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnRvQXJyYXlMaWtlID0gZnVuY3Rpb24gdG9BcnJheUxpa2UgKEFycmF5VHlwZSwgZW5kaWFuLCBsZW5ndGgpIHtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IHRoaXMuYnl0ZUxlbmd0aCgpO1xuICAgIHZhciByZXFMZW5ndGggPSBsZW5ndGggfHwgTWF0aC5tYXgoMSwgYnl0ZUxlbmd0aCk7XG4gICAgYXNzZXJ0KGJ5dGVMZW5ndGggPD0gcmVxTGVuZ3RoLCAnYnl0ZSBhcnJheSBsb25nZXIgdGhhbiBkZXNpcmVkIGxlbmd0aCcpO1xuICAgIGFzc2VydChyZXFMZW5ndGggPiAwLCAnUmVxdWVzdGVkIGFycmF5IGxlbmd0aCA8PSAwJyk7XG5cbiAgICB0aGlzLnN0cmlwKCk7XG4gICAgdmFyIGxpdHRsZUVuZGlhbiA9IGVuZGlhbiA9PT0gJ2xlJztcbiAgICB2YXIgcmVzID0gbmV3IEFycmF5VHlwZShyZXFMZW5ndGgpO1xuXG4gICAgdmFyIGIsIGk7XG4gICAgdmFyIHEgPSB0aGlzLmNsb25lKCk7XG4gICAgaWYgKCFsaXR0bGVFbmRpYW4pIHtcbiAgICAgIC8vIEFzc3VtZSBiaWctZW5kaWFuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcmVxTGVuZ3RoIC0gYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc1tpXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7ICFxLmlzWmVybygpOyBpKyspIHtcbiAgICAgICAgYiA9IHEuYW5kbG4oMHhmZik7XG4gICAgICAgIHEuaXVzaHJuKDgpO1xuXG4gICAgICAgIHJlc1tyZXFMZW5ndGggLSBpIC0gMV0gPSBiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyAhcS5pc1plcm8oKTsgaSsrKSB7XG4gICAgICAgIGIgPSBxLmFuZGxuKDB4ZmYpO1xuICAgICAgICBxLml1c2hybig4KTtcblxuICAgICAgICByZXNbaV0gPSBiO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaSA8IHJlcUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc1tpXSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBpZiAoTWF0aC5jbHozMikge1xuICAgIEJOLnByb3RvdHlwZS5fY291bnRCaXRzID0gZnVuY3Rpb24gX2NvdW50Qml0cyAodykge1xuICAgICAgcmV0dXJuIDMyIC0gTWF0aC5jbHozMih3KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIEJOLnByb3RvdHlwZS5fY291bnRCaXRzID0gZnVuY3Rpb24gX2NvdW50Qml0cyAodykge1xuICAgICAgdmFyIHQgPSB3O1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgaWYgKHQgPj0gMHgxMDAwKSB7XG4gICAgICAgIHIgKz0gMTM7XG4gICAgICAgIHQgPj4+PSAxMztcbiAgICAgIH1cbiAgICAgIGlmICh0ID49IDB4NDApIHtcbiAgICAgICAgciArPSA3O1xuICAgICAgICB0ID4+Pj0gNztcbiAgICAgIH1cbiAgICAgIGlmICh0ID49IDB4OCkge1xuICAgICAgICByICs9IDQ7XG4gICAgICAgIHQgPj4+PSA0O1xuICAgICAgfVxuICAgICAgaWYgKHQgPj0gMHgwMikge1xuICAgICAgICByICs9IDI7XG4gICAgICAgIHQgPj4+PSAyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHIgKyB0O1xuICAgIH07XG4gIH1cblxuICBCTi5wcm90b3R5cGUuX3plcm9CaXRzID0gZnVuY3Rpb24gX3plcm9CaXRzICh3KSB7XG4gICAgLy8gU2hvcnQtY3V0XG4gICAgaWYgKHcgPT09IDApIHJldHVybiAyNjtcblxuICAgIHZhciB0ID0gdztcbiAgICB2YXIgciA9IDA7XG4gICAgaWYgKCh0ICYgMHgxZmZmKSA9PT0gMCkge1xuICAgICAgciArPSAxMztcbiAgICAgIHQgPj4+PSAxMztcbiAgICB9XG4gICAgaWYgKCh0ICYgMHg3ZikgPT09IDApIHtcbiAgICAgIHIgKz0gNztcbiAgICAgIHQgPj4+PSA3O1xuICAgIH1cbiAgICBpZiAoKHQgJiAweGYpID09PSAwKSB7XG4gICAgICByICs9IDQ7XG4gICAgICB0ID4+Pj0gNDtcbiAgICB9XG4gICAgaWYgKCh0ICYgMHgzKSA9PT0gMCkge1xuICAgICAgciArPSAyO1xuICAgICAgdCA+Pj49IDI7XG4gICAgfVxuICAgIGlmICgodCAmIDB4MSkgPT09IDApIHtcbiAgICAgIHIrKztcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgLy8gUmV0dXJuIG51bWJlciBvZiB1c2VkIGJpdHMgaW4gYSBCTlxuICBCTi5wcm90b3R5cGUuYml0TGVuZ3RoID0gZnVuY3Rpb24gYml0TGVuZ3RoICgpIHtcbiAgICB2YXIgdyA9IHRoaXMud29yZHNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgaGkgPSB0aGlzLl9jb3VudEJpdHModyk7XG4gICAgcmV0dXJuICh0aGlzLmxlbmd0aCAtIDEpICogMjYgKyBoaTtcbiAgfTtcblxuICBmdW5jdGlvbiB0b0JpdEFycmF5IChudW0pIHtcbiAgICB2YXIgdyA9IG5ldyBBcnJheShudW0uYml0TGVuZ3RoKCkpO1xuXG4gICAgZm9yICh2YXIgYml0ID0gMDsgYml0IDwgdy5sZW5ndGg7IGJpdCsrKSB7XG4gICAgICB2YXIgb2ZmID0gKGJpdCAvIDI2KSB8IDA7XG4gICAgICB2YXIgd2JpdCA9IGJpdCAlIDI2O1xuXG4gICAgICB3W2JpdF0gPSAobnVtLndvcmRzW29mZl0gJiAoMSA8PCB3Yml0KSkgPj4+IHdiaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHc7XG4gIH1cblxuICAvLyBOdW1iZXIgb2YgdHJhaWxpbmcgemVybyBiaXRzXG4gIEJOLnByb3RvdHlwZS56ZXJvQml0cyA9IGZ1bmN0aW9uIHplcm9CaXRzICgpIHtcbiAgICBpZiAodGhpcy5pc1plcm8oKSkgcmV0dXJuIDA7XG5cbiAgICB2YXIgciA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYiA9IHRoaXMuX3plcm9CaXRzKHRoaXMud29yZHNbaV0pO1xuICAgICAgciArPSBiO1xuICAgICAgaWYgKGIgIT09IDI2KSBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiBieXRlTGVuZ3RoICgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuYml0TGVuZ3RoKCkgLyA4KTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudG9Ud29zID0gZnVuY3Rpb24gdG9Ud29zICh3aWR0aCkge1xuICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5hYnMoKS5pbm90bih3aWR0aCkuaWFkZG4oMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsb25lKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmZyb21Ud29zID0gZnVuY3Rpb24gZnJvbVR3b3MgKHdpZHRoKSB7XG4gICAgaWYgKHRoaXMudGVzdG4od2lkdGggLSAxKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm90bih3aWR0aCkuaWFkZG4oMSkuaW5lZygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5pc05lZyA9IGZ1bmN0aW9uIGlzTmVnICgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGl2ZSAhPT0gMDtcbiAgfTtcblxuICAvLyBSZXR1cm4gbmVnYXRpdmUgY2xvbmUgb2YgYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5uZWcgPSBmdW5jdGlvbiBuZWcgKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaW5lZygpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5pbmVnID0gZnVuY3Rpb24gaW5lZyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzWmVybygpKSB7XG4gICAgICB0aGlzLm5lZ2F0aXZlIF49IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gT3IgYG51bWAgd2l0aCBgdGhpc2AgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLml1b3IgPSBmdW5jdGlvbiBpdW9yIChudW0pIHtcbiAgICB3aGlsZSAodGhpcy5sZW5ndGggPCBudW0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLndvcmRzW3RoaXMubGVuZ3RoKytdID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHRoaXMud29yZHNbaV0gfCBudW0ud29yZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaW9yID0gZnVuY3Rpb24gaW9yIChudW0pIHtcbiAgICBhc3NlcnQoKHRoaXMubmVnYXRpdmUgfCBudW0ubmVnYXRpdmUpID09PSAwKTtcbiAgICByZXR1cm4gdGhpcy5pdW9yKG51bSk7XG4gIH07XG5cbiAgLy8gT3IgYG51bWAgd2l0aCBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gb3IgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaW9yKG51bSk7XG4gICAgcmV0dXJuIG51bS5jbG9uZSgpLmlvcih0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudW9yID0gZnVuY3Rpb24gdW9yIChudW0pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSByZXR1cm4gdGhpcy5jbG9uZSgpLml1b3IobnVtKTtcbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaXVvcih0aGlzKTtcbiAgfTtcblxuICAvLyBBbmQgYG51bWAgd2l0aCBgdGhpc2AgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLml1YW5kID0gZnVuY3Rpb24gaXVhbmQgKG51bSkge1xuICAgIC8vIGIgPSBtaW4tbGVuZ3RoKG51bSwgdGhpcylcbiAgICB2YXIgYjtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSB7XG4gICAgICBiID0gbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBiID0gdGhpcztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMud29yZHNbaV0gPSB0aGlzLndvcmRzW2ldICYgbnVtLndvcmRzW2ldO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gYi5sZW5ndGg7XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5pYW5kID0gZnVuY3Rpb24gaWFuZCAobnVtKSB7XG4gICAgYXNzZXJ0KCh0aGlzLm5lZ2F0aXZlIHwgbnVtLm5lZ2F0aXZlKSA9PT0gMCk7XG4gICAgcmV0dXJuIHRoaXMuaXVhbmQobnVtKTtcbiAgfTtcblxuICAvLyBBbmQgYG51bWAgd2l0aCBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uIGFuZCAobnVtKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkgcmV0dXJuIHRoaXMuY2xvbmUoKS5pYW5kKG51bSk7XG4gICAgcmV0dXJuIG51bS5jbG9uZSgpLmlhbmQodGhpcyk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnVhbmQgPSBmdW5jdGlvbiB1YW5kIChudW0pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSByZXR1cm4gdGhpcy5jbG9uZSgpLml1YW5kKG51bSk7XG4gICAgcmV0dXJuIG51bS5jbG9uZSgpLml1YW5kKHRoaXMpO1xuICB9O1xuXG4gIC8vIFhvciBgbnVtYCB3aXRoIGB0aGlzYCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaXV4b3IgPSBmdW5jdGlvbiBpdXhvciAobnVtKSB7XG4gICAgLy8gYS5sZW5ndGggPiBiLmxlbmd0aFxuICAgIHZhciBhO1xuICAgIHZhciBiO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHtcbiAgICAgIGEgPSB0aGlzO1xuICAgICAgYiA9IG51bTtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IG51bTtcbiAgICAgIGIgPSB0aGlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IGEud29yZHNbaV0gXiBiLndvcmRzW2ldO1xuICAgIH1cblxuICAgIGlmICh0aGlzICE9PSBhKSB7XG4gICAgICBmb3IgKDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSA9IGEud29yZHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBhLmxlbmd0aDtcblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLml4b3IgPSBmdW5jdGlvbiBpeG9yIChudW0pIHtcbiAgICBhc3NlcnQoKHRoaXMubmVnYXRpdmUgfCBudW0ubmVnYXRpdmUpID09PSAwKTtcbiAgICByZXR1cm4gdGhpcy5pdXhvcihudW0pO1xuICB9O1xuXG4gIC8vIFhvciBgbnVtYCB3aXRoIGB0aGlzYFxuICBCTi5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24geG9yIChudW0pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSByZXR1cm4gdGhpcy5jbG9uZSgpLml4b3IobnVtKTtcbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaXhvcih0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudXhvciA9IGZ1bmN0aW9uIHV4b3IgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaXV4b3IobnVtKTtcbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaXV4b3IodGhpcyk7XG4gIH07XG5cbiAgLy8gTm90IGBgdGhpc2BgIHdpdGggYGB3aWR0aGBgIGJpdHdpZHRoXG4gIEJOLnByb3RvdHlwZS5pbm90biA9IGZ1bmN0aW9uIGlub3RuICh3aWR0aCkge1xuICAgIGFzc2VydCh0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInICYmIHdpZHRoID49IDApO1xuXG4gICAgdmFyIGJ5dGVzTmVlZGVkID0gTWF0aC5jZWlsKHdpZHRoIC8gMjYpIHwgMDtcbiAgICB2YXIgYml0c0xlZnQgPSB3aWR0aCAlIDI2O1xuXG4gICAgLy8gRXh0ZW5kIHRoZSBidWZmZXIgd2l0aCBsZWFkaW5nIHplcm9lc1xuICAgIHRoaXMuX2V4cGFuZChieXRlc05lZWRlZCk7XG5cbiAgICBpZiAoYml0c0xlZnQgPiAwKSB7XG4gICAgICBieXRlc05lZWRlZC0tO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBjb21wbGV0ZSB3b3Jkc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXNOZWVkZWQ7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IH50aGlzLndvcmRzW2ldICYgMHgzZmZmZmZmO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSB0aGUgcmVzaWR1ZVxuICAgIGlmIChiaXRzTGVmdCA+IDApIHtcbiAgICAgIHRoaXMud29yZHNbaV0gPSB+dGhpcy53b3Jkc1tpXSAmICgweDNmZmZmZmYgPj4gKDI2IC0gYml0c0xlZnQpKTtcbiAgICB9XG5cbiAgICAvLyBBbmQgcmVtb3ZlIGxlYWRpbmcgemVyb2VzXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubm90biA9IGZ1bmN0aW9uIG5vdG4gKHdpZHRoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pbm90bih3aWR0aCk7XG4gIH07XG5cbiAgLy8gU2V0IGBiaXRgIG9mIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuc2V0biA9IGZ1bmN0aW9uIHNldG4gKGJpdCwgdmFsKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiaXQgPT09ICdudW1iZXInICYmIGJpdCA+PSAwKTtcblxuICAgIHZhciBvZmYgPSAoYml0IC8gMjYpIHwgMDtcbiAgICB2YXIgd2JpdCA9IGJpdCAlIDI2O1xuXG4gICAgdGhpcy5fZXhwYW5kKG9mZiArIDEpO1xuXG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy53b3Jkc1tvZmZdID0gdGhpcy53b3Jkc1tvZmZdIHwgKDEgPDwgd2JpdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHNbb2ZmXSA9IHRoaXMud29yZHNbb2ZmXSAmIH4oMSA8PCB3Yml0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIC8vIEFkZCBgbnVtYCB0byBgdGhpc2AgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLmlhZGQgPSBmdW5jdGlvbiBpYWRkIChudW0pIHtcbiAgICB2YXIgcjtcblxuICAgIC8vIG5lZ2F0aXZlICsgcG9zaXRpdmVcbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCAmJiBudW0ubmVnYXRpdmUgPT09IDApIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgICAgciA9IHRoaXMuaXN1YihudW0pO1xuICAgICAgdGhpcy5uZWdhdGl2ZSBePSAxO1xuICAgICAgcmV0dXJuIHRoaXMuX25vcm1TaWduKCk7XG5cbiAgICAvLyBwb3NpdGl2ZSArIG5lZ2F0aXZlXG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0aXZlID09PSAwICYmIG51bS5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgbnVtLm5lZ2F0aXZlID0gMDtcbiAgICAgIHIgPSB0aGlzLmlzdWIobnVtKTtcbiAgICAgIG51bS5uZWdhdGl2ZSA9IDE7XG4gICAgICByZXR1cm4gci5fbm9ybVNpZ24oKTtcbiAgICB9XG5cbiAgICAvLyBhLmxlbmd0aCA+IGIubGVuZ3RoXG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkge1xuICAgICAgYSA9IHRoaXM7XG4gICAgICBiID0gbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBhID0gbnVtO1xuICAgICAgYiA9IHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHIgPSAoYS53b3Jkc1tpXSB8IDApICsgKGIud29yZHNbaV0gfCAwKSArIGNhcnJ5O1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHIgJiAweDNmZmZmZmY7XG4gICAgICBjYXJyeSA9IHIgPj4+IDI2O1xuICAgIH1cbiAgICBmb3IgKDsgY2FycnkgIT09IDAgJiYgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHIgPSAoYS53b3Jkc1tpXSB8IDApICsgY2Fycnk7XG4gICAgICB0aGlzLndvcmRzW2ldID0gciAmIDB4M2ZmZmZmZjtcbiAgICAgIGNhcnJ5ID0gciA+Pj4gMjY7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBhLmxlbmd0aDtcbiAgICBpZiAoY2FycnkgIT09IDApIHtcbiAgICAgIHRoaXMud29yZHNbdGhpcy5sZW5ndGhdID0gY2Fycnk7XG4gICAgICB0aGlzLmxlbmd0aCsrO1xuICAgIC8vIENvcHkgdGhlIHJlc3Qgb2YgdGhlIHdvcmRzXG4gICAgfSBlbHNlIGlmIChhICE9PSB0aGlzKSB7XG4gICAgICBmb3IgKDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSA9IGEud29yZHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gQWRkIGBudW1gIHRvIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChudW0pIHtcbiAgICB2YXIgcmVzO1xuICAgIGlmIChudW0ubmVnYXRpdmUgIT09IDAgJiYgdGhpcy5uZWdhdGl2ZSA9PT0gMCkge1xuICAgICAgbnVtLm5lZ2F0aXZlID0gMDtcbiAgICAgIHJlcyA9IHRoaXMuc3ViKG51bSk7XG4gICAgICBudW0ubmVnYXRpdmUgXj0gMTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSBlbHNlIGlmIChudW0ubmVnYXRpdmUgPT09IDAgJiYgdGhpcy5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICByZXMgPSBudW0uc3ViKHRoaXMpO1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaWFkZChudW0pO1xuXG4gICAgcmV0dXJuIG51bS5jbG9uZSgpLmlhZGQodGhpcyk7XG4gIH07XG5cbiAgLy8gU3VidHJhY3QgYG51bWAgZnJvbSBgdGhpc2AgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLmlzdWIgPSBmdW5jdGlvbiBpc3ViIChudW0pIHtcbiAgICAvLyB0aGlzIC0gKC1udW0pID0gdGhpcyArIG51bVxuICAgIGlmIChudW0ubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIG51bS5uZWdhdGl2ZSA9IDA7XG4gICAgICB2YXIgciA9IHRoaXMuaWFkZChudW0pO1xuICAgICAgbnVtLm5lZ2F0aXZlID0gMTtcbiAgICAgIHJldHVybiByLl9ub3JtU2lnbigpO1xuXG4gICAgLy8gLXRoaXMgLSBudW0gPSAtKHRoaXMgKyBudW0pXG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMDtcbiAgICAgIHRoaXMuaWFkZChudW0pO1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG4gICAgICByZXR1cm4gdGhpcy5fbm9ybVNpZ24oKTtcbiAgICB9XG5cbiAgICAvLyBBdCB0aGlzIHBvaW50IGJvdGggbnVtYmVycyBhcmUgcG9zaXRpdmVcbiAgICB2YXIgY21wID0gdGhpcy5jbXAobnVtKTtcblxuICAgIC8vIE9wdGltaXphdGlvbiAtIHplcm9pZnlcbiAgICBpZiAoY21wID09PSAwKSB7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMDtcbiAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICAgIHRoaXMud29yZHNbMF0gPSAwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gYSA+IGJcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoY21wID4gMCkge1xuICAgICAgYSA9IHRoaXM7XG4gICAgICBiID0gbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBhID0gbnVtO1xuICAgICAgYiA9IHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHIgPSAoYS53b3Jkc1tpXSB8IDApIC0gKGIud29yZHNbaV0gfCAwKSArIGNhcnJ5O1xuICAgICAgY2FycnkgPSByID4+IDI2O1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHIgJiAweDNmZmZmZmY7XG4gICAgfVxuICAgIGZvciAoOyBjYXJyeSAhPT0gMCAmJiBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgciA9IChhLndvcmRzW2ldIHwgMCkgKyBjYXJyeTtcbiAgICAgIGNhcnJ5ID0gciA+PiAyNjtcbiAgICAgIHRoaXMud29yZHNbaV0gPSByICYgMHgzZmZmZmZmO1xuICAgIH1cblxuICAgIC8vIENvcHkgcmVzdCBvZiB0aGUgd29yZHNcbiAgICBpZiAoY2FycnkgPT09IDAgJiYgaSA8IGEubGVuZ3RoICYmIGEgIT09IHRoaXMpIHtcbiAgICAgIGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gYS53b3Jkc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGgubWF4KHRoaXMubGVuZ3RoLCBpKTtcblxuICAgIGlmIChhICE9PSB0aGlzKSB7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIC8vIFN1YnRyYWN0IGBudW1gIGZyb20gYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbiBzdWIgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaXN1YihudW0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNtYWxsTXVsVG8gKHNlbGYsIG51bSwgb3V0KSB7XG4gICAgb3V0Lm5lZ2F0aXZlID0gbnVtLm5lZ2F0aXZlIF4gc2VsZi5uZWdhdGl2ZTtcbiAgICB2YXIgbGVuID0gKHNlbGYubGVuZ3RoICsgbnVtLmxlbmd0aCkgfCAwO1xuICAgIG91dC5sZW5ndGggPSBsZW47XG4gICAgbGVuID0gKGxlbiAtIDEpIHwgMDtcblxuICAgIC8vIFBlZWwgb25lIGl0ZXJhdGlvbiAoY29tcGlsZXIgY2FuJ3QgZG8gaXQsIGJlY2F1c2Ugb2YgY29kZSBjb21wbGV4aXR5KVxuICAgIHZhciBhID0gc2VsZi53b3Jkc1swXSB8IDA7XG4gICAgdmFyIGIgPSBudW0ud29yZHNbMF0gfCAwO1xuICAgIHZhciByID0gYSAqIGI7XG5cbiAgICB2YXIgbG8gPSByICYgMHgzZmZmZmZmO1xuICAgIHZhciBjYXJyeSA9IChyIC8gMHg0MDAwMDAwKSB8IDA7XG4gICAgb3V0LndvcmRzWzBdID0gbG87XG5cbiAgICBmb3IgKHZhciBrID0gMTsgayA8IGxlbjsgaysrKSB7XG4gICAgICAvLyBTdW0gYWxsIHdvcmRzIHdpdGggdGhlIHNhbWUgYGkgKyBqID0ga2AgYW5kIGFjY3VtdWxhdGUgYG5jYXJyeWAsXG4gICAgICAvLyBub3RlIHRoYXQgbmNhcnJ5IGNvdWxkIGJlID49IDB4M2ZmZmZmZlxuICAgICAgdmFyIG5jYXJyeSA9IGNhcnJ5ID4+PiAyNjtcbiAgICAgIHZhciByd29yZCA9IGNhcnJ5ICYgMHgzZmZmZmZmO1xuICAgICAgdmFyIG1heEogPSBNYXRoLm1pbihrLCBudW0ubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBqID0gTWF0aC5tYXgoMCwgayAtIHNlbGYubGVuZ3RoICsgMSk7IGogPD0gbWF4SjsgaisrKSB7XG4gICAgICAgIHZhciBpID0gKGsgLSBqKSB8IDA7XG4gICAgICAgIGEgPSBzZWxmLndvcmRzW2ldIHwgMDtcbiAgICAgICAgYiA9IG51bS53b3Jkc1tqXSB8IDA7XG4gICAgICAgIHIgPSBhICogYiArIHJ3b3JkO1xuICAgICAgICBuY2FycnkgKz0gKHIgLyAweDQwMDAwMDApIHwgMDtcbiAgICAgICAgcndvcmQgPSByICYgMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgb3V0LndvcmRzW2tdID0gcndvcmQgfCAwO1xuICAgICAgY2FycnkgPSBuY2FycnkgfCAwO1xuICAgIH1cbiAgICBpZiAoY2FycnkgIT09IDApIHtcbiAgICAgIG91dC53b3Jkc1trXSA9IGNhcnJ5IHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0Lmxlbmd0aC0tO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQuc3RyaXAoKTtcbiAgfVxuXG4gIC8vIFRPRE8oaW5kdXRueSk6IGl0IG1heSBiZSByZWFzb25hYmxlIHRvIG9taXQgaXQgZm9yIHVzZXJzIHdobyBkb24ndCBuZWVkXG4gIC8vIHRvIHdvcmsgd2l0aCAyNTYtYml0IG51bWJlcnMsIG90aGVyd2lzZSBpdCBnaXZlcyAyMCUgaW1wcm92ZW1lbnQgZm9yIDI1Ni1iaXRcbiAgLy8gbXVsdGlwbGljYXRpb24gKGxpa2UgZWxsaXB0aWMgc2VjcDI1NmsxKS5cbiAgdmFyIGNvbWIxME11bFRvID0gZnVuY3Rpb24gY29tYjEwTXVsVG8gKHNlbGYsIG51bSwgb3V0KSB7XG4gICAgdmFyIGEgPSBzZWxmLndvcmRzO1xuICAgIHZhciBiID0gbnVtLndvcmRzO1xuICAgIHZhciBvID0gb3V0LndvcmRzO1xuICAgIHZhciBjID0gMDtcbiAgICB2YXIgbG87XG4gICAgdmFyIG1pZDtcbiAgICB2YXIgaGk7XG4gICAgdmFyIGEwID0gYVswXSB8IDA7XG4gICAgdmFyIGFsMCA9IGEwICYgMHgxZmZmO1xuICAgIHZhciBhaDAgPSBhMCA+Pj4gMTM7XG4gICAgdmFyIGExID0gYVsxXSB8IDA7XG4gICAgdmFyIGFsMSA9IGExICYgMHgxZmZmO1xuICAgIHZhciBhaDEgPSBhMSA+Pj4gMTM7XG4gICAgdmFyIGEyID0gYVsyXSB8IDA7XG4gICAgdmFyIGFsMiA9IGEyICYgMHgxZmZmO1xuICAgIHZhciBhaDIgPSBhMiA+Pj4gMTM7XG4gICAgdmFyIGEzID0gYVszXSB8IDA7XG4gICAgdmFyIGFsMyA9IGEzICYgMHgxZmZmO1xuICAgIHZhciBhaDMgPSBhMyA+Pj4gMTM7XG4gICAgdmFyIGE0ID0gYVs0XSB8IDA7XG4gICAgdmFyIGFsNCA9IGE0ICYgMHgxZmZmO1xuICAgIHZhciBhaDQgPSBhNCA+Pj4gMTM7XG4gICAgdmFyIGE1ID0gYVs1XSB8IDA7XG4gICAgdmFyIGFsNSA9IGE1ICYgMHgxZmZmO1xuICAgIHZhciBhaDUgPSBhNSA+Pj4gMTM7XG4gICAgdmFyIGE2ID0gYVs2XSB8IDA7XG4gICAgdmFyIGFsNiA9IGE2ICYgMHgxZmZmO1xuICAgIHZhciBhaDYgPSBhNiA+Pj4gMTM7XG4gICAgdmFyIGE3ID0gYVs3XSB8IDA7XG4gICAgdmFyIGFsNyA9IGE3ICYgMHgxZmZmO1xuICAgIHZhciBhaDcgPSBhNyA+Pj4gMTM7XG4gICAgdmFyIGE4ID0gYVs4XSB8IDA7XG4gICAgdmFyIGFsOCA9IGE4ICYgMHgxZmZmO1xuICAgIHZhciBhaDggPSBhOCA+Pj4gMTM7XG4gICAgdmFyIGE5ID0gYVs5XSB8IDA7XG4gICAgdmFyIGFsOSA9IGE5ICYgMHgxZmZmO1xuICAgIHZhciBhaDkgPSBhOSA+Pj4gMTM7XG4gICAgdmFyIGIwID0gYlswXSB8IDA7XG4gICAgdmFyIGJsMCA9IGIwICYgMHgxZmZmO1xuICAgIHZhciBiaDAgPSBiMCA+Pj4gMTM7XG4gICAgdmFyIGIxID0gYlsxXSB8IDA7XG4gICAgdmFyIGJsMSA9IGIxICYgMHgxZmZmO1xuICAgIHZhciBiaDEgPSBiMSA+Pj4gMTM7XG4gICAgdmFyIGIyID0gYlsyXSB8IDA7XG4gICAgdmFyIGJsMiA9IGIyICYgMHgxZmZmO1xuICAgIHZhciBiaDIgPSBiMiA+Pj4gMTM7XG4gICAgdmFyIGIzID0gYlszXSB8IDA7XG4gICAgdmFyIGJsMyA9IGIzICYgMHgxZmZmO1xuICAgIHZhciBiaDMgPSBiMyA+Pj4gMTM7XG4gICAgdmFyIGI0ID0gYls0XSB8IDA7XG4gICAgdmFyIGJsNCA9IGI0ICYgMHgxZmZmO1xuICAgIHZhciBiaDQgPSBiNCA+Pj4gMTM7XG4gICAgdmFyIGI1ID0gYls1XSB8IDA7XG4gICAgdmFyIGJsNSA9IGI1ICYgMHgxZmZmO1xuICAgIHZhciBiaDUgPSBiNSA+Pj4gMTM7XG4gICAgdmFyIGI2ID0gYls2XSB8IDA7XG4gICAgdmFyIGJsNiA9IGI2ICYgMHgxZmZmO1xuICAgIHZhciBiaDYgPSBiNiA+Pj4gMTM7XG4gICAgdmFyIGI3ID0gYls3XSB8IDA7XG4gICAgdmFyIGJsNyA9IGI3ICYgMHgxZmZmO1xuICAgIHZhciBiaDcgPSBiNyA+Pj4gMTM7XG4gICAgdmFyIGI4ID0gYls4XSB8IDA7XG4gICAgdmFyIGJsOCA9IGI4ICYgMHgxZmZmO1xuICAgIHZhciBiaDggPSBiOCA+Pj4gMTM7XG4gICAgdmFyIGI5ID0gYls5XSB8IDA7XG4gICAgdmFyIGJsOSA9IGI5ICYgMHgxZmZmO1xuICAgIHZhciBiaDkgPSBiOSA+Pj4gMTM7XG5cbiAgICBvdXQubmVnYXRpdmUgPSBzZWxmLm5lZ2F0aXZlIF4gbnVtLm5lZ2F0aXZlO1xuICAgIG91dC5sZW5ndGggPSAxOTtcbiAgICAvKiBrID0gMCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsMCwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWwwLCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWgwLCBiaDApO1xuICAgIHZhciB3MCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzAgPj4+IDI2KSkgfCAwO1xuICAgIHcwICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsMSwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWwxLCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWgxLCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMCwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwwLCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDAsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDAsIGJoMSkpIHwgMDtcbiAgICB2YXIgdzEgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxID4+PiAyNikpIHwgMDtcbiAgICB3MSAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDIgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDIsIGJsMCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsMiwgYmgwKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMiwgYmwwKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoMiwgYmgwKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmgxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDEpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDEpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmwyKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmgyKSkgfCAwO1xuICAgIHZhciB3MiA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzIgPj4+IDI2KSkgfCAwO1xuICAgIHcyICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMyAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsMywgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWwzLCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgzLCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWgzLCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmgzKSkgfCAwO1xuICAgIHZhciB3MyA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzMgPj4+IDI2KSkgfCAwO1xuICAgIHczICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gNCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsNCwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw0LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg0LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwxLCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDEsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMSwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMSwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMCwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwwLCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDAsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDAsIGJoNCkpIHwgMDtcbiAgICB2YXIgdzQgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHc0ID4+PiAyNikpIHwgMDtcbiAgICB3NCAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDUgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDUsIGJsMCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsNSwgYmgwKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNSwgYmwwKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoNSwgYmgwKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmgxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDEpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDEpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmwyKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmgyKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmwzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsMykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoMykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDQpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDQpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw1KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg1KSkgfCAwO1xuICAgIHZhciB3NSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzUgPj4+IDI2KSkgfCAwO1xuICAgIHc1ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gNiAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsNiwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw2LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg2LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg2LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg2KSkgfCAwO1xuICAgIHZhciB3NiA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzYgPj4+IDI2KSkgfCAwO1xuICAgIHc2ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gNyAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsNywgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw3LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg3LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwxLCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDEsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMSwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMSwgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMCwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwwLCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDAsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDAsIGJoNykpIHwgMDtcbiAgICB2YXIgdzcgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHc3ID4+PiAyNikpIHwgMDtcbiAgICB3NyAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDggKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDgsIGJsMCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOCwgYmgwKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOCwgYmwwKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOCwgYmgwKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmgxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDEpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDEpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmwyKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmgyKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmwzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsMykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoMykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDQpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDQpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw1KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg1KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsNikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoNikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDcpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDcpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw4KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg4KSkgfCAwO1xuICAgIHZhciB3OCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzggPj4+IDI2KSkgfCAwO1xuICAgIHc4ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gOSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg5KSkgfCAwO1xuICAgIHZhciB3OSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzkgPj4+IDI2KSkgfCAwO1xuICAgIHc5ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTAgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsMSk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmgxKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmwxKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmgxKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwxLCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDEsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMSwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMSwgYmg5KSkgfCAwO1xuICAgIHZhciB3MTAgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxMCA+Pj4gMjYpKSB8IDA7XG4gICAgdzEwICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTEgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsMik7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmgyKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmwyKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmgyKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDMpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg0KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxMSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzExID4+PiAyNikpIHwgMDtcbiAgICB3MTEgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxMiAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmwzKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDMpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDMpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDMpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg5KSkgfCAwO1xuICAgIHZhciB3MTIgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxMiA+Pj4gMjYpKSB8IDA7XG4gICAgdzEyICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTMgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsNCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg0KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw0KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg0KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmg5KSkgfCAwO1xuICAgIHZhciB3MTMgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxMyA+Pj4gMjYpKSB8IDA7XG4gICAgdzEzICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTQgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsNSk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg1KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw1KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg1KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxNCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzE0ID4+PiAyNikpIHwgMDtcbiAgICB3MTQgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxNSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw2KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDYpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDYpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDYpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg5KSkgfCAwO1xuICAgIHZhciB3MTUgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxNSA+Pj4gMjYpKSB8IDA7XG4gICAgdzE1ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTYgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsNyk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg3KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw3KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg3KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg5KSkgfCAwO1xuICAgIHZhciB3MTYgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxNiA+Pj4gMjYpKSB8IDA7XG4gICAgdzE2ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTcgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsOCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg4KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw4KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg4KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxNyA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzE3ID4+PiAyNikpIHwgMDtcbiAgICB3MTcgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxOCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw5KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDkpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDkpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDkpO1xuICAgIHZhciB3MTggPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxOCA+Pj4gMjYpKSB8IDA7XG4gICAgdzE4ICY9IDB4M2ZmZmZmZjtcbiAgICBvWzBdID0gdzA7XG4gICAgb1sxXSA9IHcxO1xuICAgIG9bMl0gPSB3MjtcbiAgICBvWzNdID0gdzM7XG4gICAgb1s0XSA9IHc0O1xuICAgIG9bNV0gPSB3NTtcbiAgICBvWzZdID0gdzY7XG4gICAgb1s3XSA9IHc3O1xuICAgIG9bOF0gPSB3ODtcbiAgICBvWzldID0gdzk7XG4gICAgb1sxMF0gPSB3MTA7XG4gICAgb1sxMV0gPSB3MTE7XG4gICAgb1sxMl0gPSB3MTI7XG4gICAgb1sxM10gPSB3MTM7XG4gICAgb1sxNF0gPSB3MTQ7XG4gICAgb1sxNV0gPSB3MTU7XG4gICAgb1sxNl0gPSB3MTY7XG4gICAgb1sxN10gPSB3MTc7XG4gICAgb1sxOF0gPSB3MTg7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIG9bMTldID0gYztcbiAgICAgIG91dC5sZW5ndGgrKztcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICAvLyBQb2x5ZmlsbCBjb21iXG4gIGlmICghTWF0aC5pbXVsKSB7XG4gICAgY29tYjEwTXVsVG8gPSBzbWFsbE11bFRvO1xuICB9XG5cbiAgZnVuY3Rpb24gYmlnTXVsVG8gKHNlbGYsIG51bSwgb3V0KSB7XG4gICAgb3V0Lm5lZ2F0aXZlID0gbnVtLm5lZ2F0aXZlIF4gc2VsZi5uZWdhdGl2ZTtcbiAgICBvdXQubGVuZ3RoID0gc2VsZi5sZW5ndGggKyBudW0ubGVuZ3RoO1xuXG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICB2YXIgaG5jYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBvdXQubGVuZ3RoIC0gMTsgaysrKSB7XG4gICAgICAvLyBTdW0gYWxsIHdvcmRzIHdpdGggdGhlIHNhbWUgYGkgKyBqID0ga2AgYW5kIGFjY3VtdWxhdGUgYG5jYXJyeWAsXG4gICAgICAvLyBub3RlIHRoYXQgbmNhcnJ5IGNvdWxkIGJlID49IDB4M2ZmZmZmZlxuICAgICAgdmFyIG5jYXJyeSA9IGhuY2Fycnk7XG4gICAgICBobmNhcnJ5ID0gMDtcbiAgICAgIHZhciByd29yZCA9IGNhcnJ5ICYgMHgzZmZmZmZmO1xuICAgICAgdmFyIG1heEogPSBNYXRoLm1pbihrLCBudW0ubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBqID0gTWF0aC5tYXgoMCwgayAtIHNlbGYubGVuZ3RoICsgMSk7IGogPD0gbWF4SjsgaisrKSB7XG4gICAgICAgIHZhciBpID0gayAtIGo7XG4gICAgICAgIHZhciBhID0gc2VsZi53b3Jkc1tpXSB8IDA7XG4gICAgICAgIHZhciBiID0gbnVtLndvcmRzW2pdIHwgMDtcbiAgICAgICAgdmFyIHIgPSBhICogYjtcblxuICAgICAgICB2YXIgbG8gPSByICYgMHgzZmZmZmZmO1xuICAgICAgICBuY2FycnkgPSAobmNhcnJ5ICsgKChyIC8gMHg0MDAwMDAwKSB8IDApKSB8IDA7XG4gICAgICAgIGxvID0gKGxvICsgcndvcmQpIHwgMDtcbiAgICAgICAgcndvcmQgPSBsbyAmIDB4M2ZmZmZmZjtcbiAgICAgICAgbmNhcnJ5ID0gKG5jYXJyeSArIChsbyA+Pj4gMjYpKSB8IDA7XG5cbiAgICAgICAgaG5jYXJyeSArPSBuY2FycnkgPj4+IDI2O1xuICAgICAgICBuY2FycnkgJj0gMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgb3V0LndvcmRzW2tdID0gcndvcmQ7XG4gICAgICBjYXJyeSA9IG5jYXJyeTtcbiAgICAgIG5jYXJyeSA9IGhuY2Fycnk7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgb3V0LndvcmRzW2tdID0gY2Fycnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dC5sZW5ndGgtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0LnN0cmlwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBqdW1ib011bFRvIChzZWxmLCBudW0sIG91dCkge1xuICAgIHZhciBmZnRtID0gbmV3IEZGVE0oKTtcbiAgICByZXR1cm4gZmZ0bS5tdWxwKHNlbGYsIG51bSwgb3V0KTtcbiAgfVxuXG4gIEJOLnByb3RvdHlwZS5tdWxUbyA9IGZ1bmN0aW9uIG11bFRvIChudW0sIG91dCkge1xuICAgIHZhciByZXM7XG4gICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoICsgbnVtLmxlbmd0aDtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEwICYmIG51bS5sZW5ndGggPT09IDEwKSB7XG4gICAgICByZXMgPSBjb21iMTBNdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gICAgfSBlbHNlIGlmIChsZW4gPCA2Mykge1xuICAgICAgcmVzID0gc21hbGxNdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gICAgfSBlbHNlIGlmIChsZW4gPCAxMDI0KSB7XG4gICAgICByZXMgPSBiaWdNdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IGp1bWJvTXVsVG8odGhpcywgbnVtLCBvdXQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgLy8gQ29vbGV5LVR1a2V5IGFsZ29yaXRobSBmb3IgRkZUXG4gIC8vIHNsaWdodGx5IHJldmlzaXRlZCB0byByZWx5IG9uIGxvb3BpbmcgaW5zdGVhZCBvZiByZWN1cnNpb25cblxuICBmdW5jdGlvbiBGRlRNICh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgRkZUTS5wcm90b3R5cGUubWFrZVJCVCA9IGZ1bmN0aW9uIG1ha2VSQlQgKE4pIHtcbiAgICB2YXIgdCA9IG5ldyBBcnJheShOKTtcbiAgICB2YXIgbCA9IEJOLnByb3RvdHlwZS5fY291bnRCaXRzKE4pIC0gMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgdFtpXSA9IHRoaXMucmV2QmluKGksIGwsIE4pO1xuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYmluYXJ5LXJldmVyc2VkIHJlcHJlc2VudGF0aW9uIG9mIGB4YFxuICBGRlRNLnByb3RvdHlwZS5yZXZCaW4gPSBmdW5jdGlvbiByZXZCaW4gKHgsIGwsIE4pIHtcbiAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSBOIC0gMSkgcmV0dXJuIHg7XG5cbiAgICB2YXIgcmIgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICByYiB8PSAoeCAmIDEpIDw8IChsIC0gaSAtIDEpO1xuICAgICAgeCA+Pj0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmI7XG4gIH07XG5cbiAgLy8gUGVyZm9ybXMgXCJ0d2VlZGxpbmdcIiBwaGFzZSwgdGhlcmVmb3JlICdlbXVsYXRpbmcnXG4gIC8vIGJlaGF2aW91ciBvZiB0aGUgcmVjdXJzaXZlIGFsZ29yaXRobVxuICBGRlRNLnByb3RvdHlwZS5wZXJtdXRlID0gZnVuY3Rpb24gcGVybXV0ZSAocmJ0LCByd3MsIGl3cywgcnR3cywgaXR3cywgTikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBydHdzW2ldID0gcndzW3JidFtpXV07XG4gICAgICBpdHdzW2ldID0gaXdzW3JidFtpXV07XG4gICAgfVxuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybSAocndzLCBpd3MsIHJ0d3MsIGl0d3MsIE4sIHJidCkge1xuICAgIHRoaXMucGVybXV0ZShyYnQsIHJ3cywgaXdzLCBydHdzLCBpdHdzLCBOKTtcblxuICAgIGZvciAodmFyIHMgPSAxOyBzIDwgTjsgcyA8PD0gMSkge1xuICAgICAgdmFyIGwgPSBzIDw8IDE7XG5cbiAgICAgIHZhciBydHdkZiA9IE1hdGguY29zKDIgKiBNYXRoLlBJIC8gbCk7XG4gICAgICB2YXIgaXR3ZGYgPSBNYXRoLnNpbigyICogTWF0aC5QSSAvIGwpO1xuXG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IE47IHAgKz0gbCkge1xuICAgICAgICB2YXIgcnR3ZGZfID0gcnR3ZGY7XG4gICAgICAgIHZhciBpdHdkZl8gPSBpdHdkZjtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHM7IGorKykge1xuICAgICAgICAgIHZhciByZSA9IHJ0d3NbcCArIGpdO1xuICAgICAgICAgIHZhciBpZSA9IGl0d3NbcCArIGpdO1xuXG4gICAgICAgICAgdmFyIHJvID0gcnR3c1twICsgaiArIHNdO1xuICAgICAgICAgIHZhciBpbyA9IGl0d3NbcCArIGogKyBzXTtcblxuICAgICAgICAgIHZhciByeCA9IHJ0d2RmXyAqIHJvIC0gaXR3ZGZfICogaW87XG5cbiAgICAgICAgICBpbyA9IHJ0d2RmXyAqIGlvICsgaXR3ZGZfICogcm87XG4gICAgICAgICAgcm8gPSByeDtcblxuICAgICAgICAgIHJ0d3NbcCArIGpdID0gcmUgKyBybztcbiAgICAgICAgICBpdHdzW3AgKyBqXSA9IGllICsgaW87XG5cbiAgICAgICAgICBydHdzW3AgKyBqICsgc10gPSByZSAtIHJvO1xuICAgICAgICAgIGl0d3NbcCArIGogKyBzXSA9IGllIC0gaW87XG5cbiAgICAgICAgICAvKiBqc2hpbnQgbWF4ZGVwdGggOiBmYWxzZSAqL1xuICAgICAgICAgIGlmIChqICE9PSBsKSB7XG4gICAgICAgICAgICByeCA9IHJ0d2RmICogcnR3ZGZfIC0gaXR3ZGYgKiBpdHdkZl87XG5cbiAgICAgICAgICAgIGl0d2RmXyA9IHJ0d2RmICogaXR3ZGZfICsgaXR3ZGYgKiBydHdkZl87XG4gICAgICAgICAgICBydHdkZl8gPSByeDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUuZ3Vlc3NMZW4xM2IgPSBmdW5jdGlvbiBndWVzc0xlbjEzYiAobiwgbSkge1xuICAgIHZhciBOID0gTWF0aC5tYXgobSwgbikgfCAxO1xuICAgIHZhciBvZGQgPSBOICYgMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yIChOID0gTiAvIDIgfCAwOyBOOyBOID0gTiA+Pj4gMSkge1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiAxIDw8IGkgKyAxICsgb2RkO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLmNvbmp1Z2F0ZSA9IGZ1bmN0aW9uIGNvbmp1Z2F0ZSAocndzLCBpd3MsIE4pIHtcbiAgICBpZiAoTiA8PSAxKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE4gLyAyOyBpKyspIHtcbiAgICAgIHZhciB0ID0gcndzW2ldO1xuXG4gICAgICByd3NbaV0gPSByd3NbTiAtIGkgLSAxXTtcbiAgICAgIHJ3c1tOIC0gaSAtIDFdID0gdDtcblxuICAgICAgdCA9IGl3c1tpXTtcblxuICAgICAgaXdzW2ldID0gLWl3c1tOIC0gaSAtIDFdO1xuICAgICAgaXdzW04gLSBpIC0gMV0gPSAtdDtcbiAgICB9XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUubm9ybWFsaXplMTNiID0gZnVuY3Rpb24gbm9ybWFsaXplMTNiICh3cywgTikge1xuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOIC8gMjsgaSsrKSB7XG4gICAgICB2YXIgdyA9IE1hdGgucm91bmQod3NbMiAqIGkgKyAxXSAvIE4pICogMHgyMDAwICtcbiAgICAgICAgTWF0aC5yb3VuZCh3c1syICogaV0gLyBOKSArXG4gICAgICAgIGNhcnJ5O1xuXG4gICAgICB3c1tpXSA9IHcgJiAweDNmZmZmZmY7XG5cbiAgICAgIGlmICh3IDwgMHg0MDAwMDAwKSB7XG4gICAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcnJ5ID0gdyAvIDB4NDAwMDAwMCB8IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdzO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLmNvbnZlcnQxM2IgPSBmdW5jdGlvbiBjb252ZXJ0MTNiICh3cywgbGVuLCByd3MsIE4pIHtcbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNhcnJ5ID0gY2FycnkgKyAod3NbaV0gfCAwKTtcblxuICAgICAgcndzWzIgKiBpXSA9IGNhcnJ5ICYgMHgxZmZmOyBjYXJyeSA9IGNhcnJ5ID4+PiAxMztcbiAgICAgIHJ3c1syICogaSArIDFdID0gY2FycnkgJiAweDFmZmY7IGNhcnJ5ID0gY2FycnkgPj4+IDEzO1xuICAgIH1cblxuICAgIC8vIFBhZCB3aXRoIHplcm9lc1xuICAgIGZvciAoaSA9IDIgKiBsZW47IGkgPCBOOyArK2kpIHtcbiAgICAgIHJ3c1tpXSA9IDA7XG4gICAgfVxuXG4gICAgYXNzZXJ0KGNhcnJ5ID09PSAwKTtcbiAgICBhc3NlcnQoKGNhcnJ5ICYgfjB4MWZmZikgPT09IDApO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLnN0dWIgPSBmdW5jdGlvbiBzdHViIChOKSB7XG4gICAgdmFyIHBoID0gbmV3IEFycmF5KE4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBwaFtpXSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBoO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLm11bHAgPSBmdW5jdGlvbiBtdWxwICh4LCB5LCBvdXQpIHtcbiAgICB2YXIgTiA9IDIgKiB0aGlzLmd1ZXNzTGVuMTNiKHgubGVuZ3RoLCB5Lmxlbmd0aCk7XG5cbiAgICB2YXIgcmJ0ID0gdGhpcy5tYWtlUkJUKE4pO1xuXG4gICAgdmFyIF8gPSB0aGlzLnN0dWIoTik7XG5cbiAgICB2YXIgcndzID0gbmV3IEFycmF5KE4pO1xuICAgIHZhciByd3N0ID0gbmV3IEFycmF5KE4pO1xuICAgIHZhciBpd3N0ID0gbmV3IEFycmF5KE4pO1xuXG4gICAgdmFyIG5yd3MgPSBuZXcgQXJyYXkoTik7XG4gICAgdmFyIG5yd3N0ID0gbmV3IEFycmF5KE4pO1xuICAgIHZhciBuaXdzdCA9IG5ldyBBcnJheShOKTtcblxuICAgIHZhciBybXdzID0gb3V0LndvcmRzO1xuICAgIHJtd3MubGVuZ3RoID0gTjtcblxuICAgIHRoaXMuY29udmVydDEzYih4LndvcmRzLCB4Lmxlbmd0aCwgcndzLCBOKTtcbiAgICB0aGlzLmNvbnZlcnQxM2IoeS53b3JkcywgeS5sZW5ndGgsIG5yd3MsIE4pO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0ocndzLCBfLCByd3N0LCBpd3N0LCBOLCByYnQpO1xuICAgIHRoaXMudHJhbnNmb3JtKG5yd3MsIF8sIG5yd3N0LCBuaXdzdCwgTiwgcmJ0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICB2YXIgcnggPSByd3N0W2ldICogbnJ3c3RbaV0gLSBpd3N0W2ldICogbml3c3RbaV07XG4gICAgICBpd3N0W2ldID0gcndzdFtpXSAqIG5pd3N0W2ldICsgaXdzdFtpXSAqIG5yd3N0W2ldO1xuICAgICAgcndzdFtpXSA9IHJ4O1xuICAgIH1cblxuICAgIHRoaXMuY29uanVnYXRlKHJ3c3QsIGl3c3QsIE4pO1xuICAgIHRoaXMudHJhbnNmb3JtKHJ3c3QsIGl3c3QsIHJtd3MsIF8sIE4sIHJidCk7XG4gICAgdGhpcy5jb25qdWdhdGUocm13cywgXywgTik7XG4gICAgdGhpcy5ub3JtYWxpemUxM2Iocm13cywgTik7XG5cbiAgICBvdXQubmVnYXRpdmUgPSB4Lm5lZ2F0aXZlIF4geS5uZWdhdGl2ZTtcbiAgICBvdXQubGVuZ3RoID0geC5sZW5ndGggKyB5Lmxlbmd0aDtcbiAgICByZXR1cm4gb3V0LnN0cmlwKCk7XG4gIH07XG5cbiAgLy8gTXVsdGlwbHkgYHRoaXNgIGJ5IGBudW1gXG4gIEJOLnByb3RvdHlwZS5tdWwgPSBmdW5jdGlvbiBtdWwgKG51bSkge1xuICAgIHZhciBvdXQgPSBuZXcgQk4obnVsbCk7XG4gICAgb3V0LndvcmRzID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoICsgbnVtLmxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXMubXVsVG8obnVtLCBvdXQpO1xuICB9O1xuXG4gIC8vIE11bHRpcGx5IGVtcGxveWluZyBGRlRcbiAgQk4ucHJvdG90eXBlLm11bGYgPSBmdW5jdGlvbiBtdWxmIChudW0pIHtcbiAgICB2YXIgb3V0ID0gbmV3IEJOKG51bGwpO1xuICAgIG91dC53b3JkcyA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCArIG51bS5sZW5ndGgpO1xuICAgIHJldHVybiBqdW1ib011bFRvKHRoaXMsIG51bSwgb3V0KTtcbiAgfTtcblxuICAvLyBJbi1wbGFjZSBNdWx0aXBsaWNhdGlvblxuICBCTi5wcm90b3R5cGUuaW11bCA9IGZ1bmN0aW9uIGltdWwgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubXVsVG8obnVtLCB0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaW11bG4gPSBmdW5jdGlvbiBpbXVsbiAobnVtKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICBhc3NlcnQobnVtIDwgMHg0MDAwMDAwKTtcblxuICAgIC8vIENhcnJ5XG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB3ID0gKHRoaXMud29yZHNbaV0gfCAwKSAqIG51bTtcbiAgICAgIHZhciBsbyA9ICh3ICYgMHgzZmZmZmZmKSArIChjYXJyeSAmIDB4M2ZmZmZmZik7XG4gICAgICBjYXJyeSA+Pj0gMjY7XG4gICAgICBjYXJyeSArPSAodyAvIDB4NDAwMDAwMCkgfCAwO1xuICAgICAgLy8gTk9URTogbG8gaXMgMjdiaXQgbWF4aW11bVxuICAgICAgY2FycnkgKz0gbG8gPj4+IDI2O1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IGxvICYgMHgzZmZmZmZmO1xuICAgIH1cblxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IGNhcnJ5O1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubXVsbiA9IGZ1bmN0aW9uIG11bG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaW11bG4obnVtKTtcbiAgfTtcblxuICAvLyBgdGhpc2AgKiBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLnNxciA9IGZ1bmN0aW9uIHNxciAoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsKHRoaXMpO1xuICB9O1xuXG4gIC8vIGB0aGlzYCAqIGB0aGlzYCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaXNxciA9IGZ1bmN0aW9uIGlzcXIgKCkge1xuICAgIHJldHVybiB0aGlzLmltdWwodGhpcy5jbG9uZSgpKTtcbiAgfTtcblxuICAvLyBNYXRoLnBvdyhgdGhpc2AsIGBudW1gKVxuICBCTi5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gcG93IChudW0pIHtcbiAgICB2YXIgdyA9IHRvQml0QXJyYXkobnVtKTtcbiAgICBpZiAody5sZW5ndGggPT09IDApIHJldHVybiBuZXcgQk4oMSk7XG5cbiAgICAvLyBTa2lwIGxlYWRpbmcgemVyb2VzXG4gICAgdmFyIHJlcyA9IHRoaXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3Lmxlbmd0aDsgaSsrLCByZXMgPSByZXMuc3FyKCkpIHtcbiAgICAgIGlmICh3W2ldICE9PSAwKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoKytpIDwgdy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHEgPSByZXMuc3FyKCk7IGkgPCB3Lmxlbmd0aDsgaSsrLCBxID0gcS5zcXIoKSkge1xuICAgICAgICBpZiAod1tpXSA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgcmVzID0gcmVzLm11bChxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8vIFNoaWZ0LWxlZnQgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLml1c2hsbiA9IGZ1bmN0aW9uIGl1c2hsbiAoYml0cykge1xuICAgIGFzc2VydCh0eXBlb2YgYml0cyA9PT0gJ251bWJlcicgJiYgYml0cyA+PSAwKTtcbiAgICB2YXIgciA9IGJpdHMgJSAyNjtcbiAgICB2YXIgcyA9IChiaXRzIC0gcikgLyAyNjtcbiAgICB2YXIgY2FycnlNYXNrID0gKDB4M2ZmZmZmZiA+Pj4gKDI2IC0gcikpIDw8ICgyNiAtIHIpO1xuICAgIHZhciBpO1xuXG4gICAgaWYgKHIgIT09IDApIHtcbiAgICAgIHZhciBjYXJyeSA9IDA7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuZXdDYXJyeSA9IHRoaXMud29yZHNbaV0gJiBjYXJyeU1hc2s7XG4gICAgICAgIHZhciBjID0gKCh0aGlzLndvcmRzW2ldIHwgMCkgLSBuZXdDYXJyeSkgPDwgcjtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSA9IGMgfCBjYXJyeTtcbiAgICAgICAgY2FycnkgPSBuZXdDYXJyeSA+Pj4gKDI2IC0gcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYXJyeSkge1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gY2Fycnk7XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHMgIT09IDApIHtcbiAgICAgIGZvciAoaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpICsgc10gPSB0aGlzLndvcmRzW2ldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICAgIHRoaXMud29yZHNbaV0gPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxlbmd0aCArPSBzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzaGxuID0gZnVuY3Rpb24gaXNobG4gKGJpdHMpIHtcbiAgICAvLyBUT0RPKGluZHV0bnkpOiBpbXBsZW1lbnQgbWVcbiAgICBhc3NlcnQodGhpcy5uZWdhdGl2ZSA9PT0gMCk7XG4gICAgcmV0dXJuIHRoaXMuaXVzaGxuKGJpdHMpO1xuICB9O1xuXG4gIC8vIFNoaWZ0LXJpZ2h0IGluLXBsYWNlXG4gIC8vIE5PVEU6IGBoaW50YCBpcyBhIGxvd2VzdCBiaXQgYmVmb3JlIHRyYWlsaW5nIHplcm9lc1xuICAvLyBOT1RFOiBpZiBgZXh0ZW5kZWRgIGlzIHByZXNlbnQgLSBpdCB3aWxsIGJlIGZpbGxlZCB3aXRoIGRlc3Ryb3llZCBiaXRzXG4gIEJOLnByb3RvdHlwZS5pdXNocm4gPSBmdW5jdGlvbiBpdXNocm4gKGJpdHMsIGhpbnQsIGV4dGVuZGVkKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiaXRzID09PSAnbnVtYmVyJyAmJiBiaXRzID49IDApO1xuICAgIHZhciBoO1xuICAgIGlmIChoaW50KSB7XG4gICAgICBoID0gKGhpbnQgLSAoaGludCAlIDI2KSkgLyAyNjtcbiAgICB9IGVsc2Uge1xuICAgICAgaCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHIgPSBiaXRzICUgMjY7XG4gICAgdmFyIHMgPSBNYXRoLm1pbigoYml0cyAtIHIpIC8gMjYsIHRoaXMubGVuZ3RoKTtcbiAgICB2YXIgbWFzayA9IDB4M2ZmZmZmZiBeICgoMHgzZmZmZmZmID4+PiByKSA8PCByKTtcbiAgICB2YXIgbWFza2VkV29yZHMgPSBleHRlbmRlZDtcblxuICAgIGggLT0gcztcbiAgICBoID0gTWF0aC5tYXgoMCwgaCk7XG5cbiAgICAvLyBFeHRlbmRlZCBtb2RlLCBjb3B5IG1hc2tlZCBwYXJ0XG4gICAgaWYgKG1hc2tlZFdvcmRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgICBtYXNrZWRXb3Jkcy53b3Jkc1tpXSA9IHRoaXMud29yZHNbaV07XG4gICAgICB9XG4gICAgICBtYXNrZWRXb3Jkcy5sZW5ndGggPSBzO1xuICAgIH1cblxuICAgIGlmIChzID09PSAwKSB7XG4gICAgICAvLyBOby1vcCwgd2Ugc2hvdWxkIG5vdCBtb3ZlIGFueXRoaW5nIGF0IGFsbFxuICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPiBzKSB7XG4gICAgICB0aGlzLmxlbmd0aCAtPSBzO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSA9IHRoaXMud29yZHNbaSArIHNdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmRzWzBdID0gMDtcbiAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICB9XG5cbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAoaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwICYmIChjYXJyeSAhPT0gMCB8fCBpID49IGgpOyBpLS0pIHtcbiAgICAgIHZhciB3b3JkID0gdGhpcy53b3Jkc1tpXSB8IDA7XG4gICAgICB0aGlzLndvcmRzW2ldID0gKGNhcnJ5IDw8ICgyNiAtIHIpKSB8ICh3b3JkID4+PiByKTtcbiAgICAgIGNhcnJ5ID0gd29yZCAmIG1hc2s7XG4gICAgfVxuXG4gICAgLy8gUHVzaCBjYXJyaWVkIGJpdHMgYXMgYSBtYXNrXG4gICAgaWYgKG1hc2tlZFdvcmRzICYmIGNhcnJ5ICE9PSAwKSB7XG4gICAgICBtYXNrZWRXb3Jkcy53b3Jkc1ttYXNrZWRXb3Jkcy5sZW5ndGgrK10gPSBjYXJyeTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMud29yZHNbMF0gPSAwO1xuICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzaHJuID0gZnVuY3Rpb24gaXNocm4gKGJpdHMsIGhpbnQsIGV4dGVuZGVkKSB7XG4gICAgLy8gVE9ETyhpbmR1dG55KTogaW1wbGVtZW50IG1lXG4gICAgYXNzZXJ0KHRoaXMubmVnYXRpdmUgPT09IDApO1xuICAgIHJldHVybiB0aGlzLml1c2hybihiaXRzLCBoaW50LCBleHRlbmRlZCk7XG4gIH07XG5cbiAgLy8gU2hpZnQtbGVmdFxuICBCTi5wcm90b3R5cGUuc2hsbiA9IGZ1bmN0aW9uIHNobG4gKGJpdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmlzaGxuKGJpdHMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51c2hsbiA9IGZ1bmN0aW9uIHVzaGxuIChiaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pdXNobG4oYml0cyk7XG4gIH07XG5cbiAgLy8gU2hpZnQtcmlnaHRcbiAgQk4ucHJvdG90eXBlLnNocm4gPSBmdW5jdGlvbiBzaHJuIChiaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pc2hybihiaXRzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudXNocm4gPSBmdW5jdGlvbiB1c2hybiAoYml0cykge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaXVzaHJuKGJpdHMpO1xuICB9O1xuXG4gIC8vIFRlc3QgaWYgbiBiaXQgaXMgc2V0XG4gIEJOLnByb3RvdHlwZS50ZXN0biA9IGZ1bmN0aW9uIHRlc3RuIChiaXQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJpdCA9PT0gJ251bWJlcicgJiYgYml0ID49IDApO1xuICAgIHZhciByID0gYml0ICUgMjY7XG4gICAgdmFyIHMgPSAoYml0IC0gcikgLyAyNjtcbiAgICB2YXIgcSA9IDEgPDwgcjtcblxuICAgIC8vIEZhc3QgY2FzZTogYml0IGlzIG11Y2ggaGlnaGVyIHRoYW4gYWxsIGV4aXN0aW5nIHdvcmRzXG4gICAgaWYgKHRoaXMubGVuZ3RoIDw9IHMpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIENoZWNrIGJpdCBhbmQgcmV0dXJuXG4gICAgdmFyIHcgPSB0aGlzLndvcmRzW3NdO1xuXG4gICAgcmV0dXJuICEhKHcgJiBxKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gb25seSBsb3dlcnMgYml0cyBvZiBudW1iZXIgKGluLXBsYWNlKVxuICBCTi5wcm90b3R5cGUuaW1hc2tuID0gZnVuY3Rpb24gaW1hc2tuIChiaXRzKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiaXRzID09PSAnbnVtYmVyJyAmJiBiaXRzID49IDApO1xuICAgIHZhciByID0gYml0cyAlIDI2O1xuICAgIHZhciBzID0gKGJpdHMgLSByKSAvIDI2O1xuXG4gICAgYXNzZXJ0KHRoaXMubmVnYXRpdmUgPT09IDAsICdpbWFza24gd29ya3Mgb25seSB3aXRoIHBvc2l0aXZlIG51bWJlcnMnKTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA8PSBzKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAociAhPT0gMCkge1xuICAgICAgcysrO1xuICAgIH1cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGgubWluKHMsIHRoaXMubGVuZ3RoKTtcblxuICAgIGlmIChyICE9PSAwKSB7XG4gICAgICB2YXIgbWFzayA9IDB4M2ZmZmZmZiBeICgoMHgzZmZmZmZmID4+PiByKSA8PCByKTtcbiAgICAgIHRoaXMud29yZHNbdGhpcy5sZW5ndGggLSAxXSAmPSBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIG9ubHkgbG93ZXJzIGJpdHMgb2YgbnVtYmVyXG4gIEJOLnByb3RvdHlwZS5tYXNrbiA9IGZ1bmN0aW9uIG1hc2tuIChiaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pbWFza24oYml0cyk7XG4gIH07XG5cbiAgLy8gQWRkIHBsYWluIG51bWJlciBgbnVtYCB0byBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLmlhZGRuID0gZnVuY3Rpb24gaWFkZG4gKG51bSkge1xuICAgIGFzc2VydCh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyk7XG4gICAgYXNzZXJ0KG51bSA8IDB4NDAwMDAwMCk7XG4gICAgaWYgKG51bSA8IDApIHJldHVybiB0aGlzLmlzdWJuKC1udW0pO1xuXG4gICAgLy8gUG9zc2libGUgc2lnbiBjaGFuZ2VcbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAxICYmICh0aGlzLndvcmRzWzBdIHwgMCkgPCBudW0pIHtcbiAgICAgICAgdGhpcy53b3Jkc1swXSA9IG51bSAtICh0aGlzLndvcmRzWzBdIHwgMCk7XG4gICAgICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICB0aGlzLmlzdWJuKG51bSk7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRob3V0IGNoZWNrc1xuICAgIHJldHVybiB0aGlzLl9pYWRkbihudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5faWFkZG4gPSBmdW5jdGlvbiBfaWFkZG4gKG51bSkge1xuICAgIHRoaXMud29yZHNbMF0gKz0gbnVtO1xuXG4gICAgLy8gQ2FycnlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoICYmIHRoaXMud29yZHNbaV0gPj0gMHg0MDAwMDAwOyBpKyspIHtcbiAgICAgIHRoaXMud29yZHNbaV0gLT0gMHg0MDAwMDAwO1xuICAgICAgaWYgKGkgPT09IHRoaXMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLndvcmRzW2kgKyAxXSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndvcmRzW2kgKyAxXSsrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGgubWF4KHRoaXMubGVuZ3RoLCBpICsgMSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBTdWJ0cmFjdCBwbGFpbiBudW1iZXIgYG51bWAgZnJvbSBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLmlzdWJuID0gZnVuY3Rpb24gaXN1Ym4gKG51bSkge1xuICAgIGFzc2VydCh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyk7XG4gICAgYXNzZXJ0KG51bSA8IDB4NDAwMDAwMCk7XG4gICAgaWYgKG51bSA8IDApIHJldHVybiB0aGlzLmlhZGRuKC1udW0pO1xuXG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgICAgdGhpcy5pYWRkbihudW0pO1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLndvcmRzWzBdIC09IG51bTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSAmJiB0aGlzLndvcmRzWzBdIDwgMCkge1xuICAgICAgdGhpcy53b3Jkc1swXSA9IC10aGlzLndvcmRzWzBdO1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENhcnJ5XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoICYmIHRoaXMud29yZHNbaV0gPCAwOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSArPSAweDQwMDAwMDA7XG4gICAgICAgIHRoaXMud29yZHNbaSArIDFdIC09IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuYWRkbiA9IGZ1bmN0aW9uIGFkZG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaWFkZG4obnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuc3VibiA9IGZ1bmN0aW9uIHN1Ym4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaXN1Ym4obnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaWFicyA9IGZ1bmN0aW9uIGlhYnMgKCkge1xuICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uIGFicyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pYWJzKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9pc2hsbnN1Ym11bCA9IGZ1bmN0aW9uIF9pc2hsbnN1Ym11bCAobnVtLCBtdWwsIHNoaWZ0KSB7XG4gICAgdmFyIGxlbiA9IG51bS5sZW5ndGggKyBzaGlmdDtcbiAgICB2YXIgaTtcblxuICAgIHRoaXMuX2V4cGFuZChsZW4pO1xuXG4gICAgdmFyIHc7XG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3ID0gKHRoaXMud29yZHNbaSArIHNoaWZ0XSB8IDApICsgY2Fycnk7XG4gICAgICB2YXIgcmlnaHQgPSAobnVtLndvcmRzW2ldIHwgMCkgKiBtdWw7XG4gICAgICB3IC09IHJpZ2h0ICYgMHgzZmZmZmZmO1xuICAgICAgY2FycnkgPSAodyA+PiAyNikgLSAoKHJpZ2h0IC8gMHg0MDAwMDAwKSB8IDApO1xuICAgICAgdGhpcy53b3Jkc1tpICsgc2hpZnRdID0gdyAmIDB4M2ZmZmZmZjtcbiAgICB9XG4gICAgZm9yICg7IGkgPCB0aGlzLmxlbmd0aCAtIHNoaWZ0OyBpKyspIHtcbiAgICAgIHcgPSAodGhpcy53b3Jkc1tpICsgc2hpZnRdIHwgMCkgKyBjYXJyeTtcbiAgICAgIGNhcnJ5ID0gdyA+PiAyNjtcbiAgICAgIHRoaXMud29yZHNbaSArIHNoaWZ0XSA9IHcgJiAweDNmZmZmZmY7XG4gICAgfVxuXG4gICAgaWYgKGNhcnJ5ID09PSAwKSByZXR1cm4gdGhpcy5zdHJpcCgpO1xuXG4gICAgLy8gU3VidHJhY3Rpb24gb3ZlcmZsb3dcbiAgICBhc3NlcnQoY2FycnkgPT09IC0xKTtcbiAgICBjYXJyeSA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHcgPSAtKHRoaXMud29yZHNbaV0gfCAwKSArIGNhcnJ5O1xuICAgICAgY2FycnkgPSB3ID4+IDI2O1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHcgJiAweDNmZmZmZmY7XG4gICAgfVxuICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX3dvcmREaXYgPSBmdW5jdGlvbiBfd29yZERpdiAobnVtLCBtb2RlKSB7XG4gICAgdmFyIHNoaWZ0ID0gdGhpcy5sZW5ndGggLSBudW0ubGVuZ3RoO1xuXG4gICAgdmFyIGEgPSB0aGlzLmNsb25lKCk7XG4gICAgdmFyIGIgPSBudW07XG5cbiAgICAvLyBOb3JtYWxpemVcbiAgICB2YXIgYmhpID0gYi53b3Jkc1tiLmxlbmd0aCAtIDFdIHwgMDtcbiAgICB2YXIgYmhpQml0cyA9IHRoaXMuX2NvdW50Qml0cyhiaGkpO1xuICAgIHNoaWZ0ID0gMjYgLSBiaGlCaXRzO1xuICAgIGlmIChzaGlmdCAhPT0gMCkge1xuICAgICAgYiA9IGIudXNobG4oc2hpZnQpO1xuICAgICAgYS5pdXNobG4oc2hpZnQpO1xuICAgICAgYmhpID0gYi53b3Jkc1tiLmxlbmd0aCAtIDFdIHwgMDtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIHF1b3RpZW50XG4gICAgdmFyIG0gPSBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICAgIHZhciBxO1xuXG4gICAgaWYgKG1vZGUgIT09ICdtb2QnKSB7XG4gICAgICBxID0gbmV3IEJOKG51bGwpO1xuICAgICAgcS5sZW5ndGggPSBtICsgMTtcbiAgICAgIHEud29yZHMgPSBuZXcgQXJyYXkocS5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHEud29yZHNbaV0gPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkaWZmID0gYS5jbG9uZSgpLl9pc2hsbnN1Ym11bChiLCAxLCBtKTtcbiAgICBpZiAoZGlmZi5uZWdhdGl2ZSA9PT0gMCkge1xuICAgICAgYSA9IGRpZmY7XG4gICAgICBpZiAocSkge1xuICAgICAgICBxLndvcmRzW21dID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gbSAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICB2YXIgcWogPSAoYS53b3Jkc1tiLmxlbmd0aCArIGpdIHwgMCkgKiAweDQwMDAwMDAgK1xuICAgICAgICAoYS53b3Jkc1tiLmxlbmd0aCArIGogLSAxXSB8IDApO1xuXG4gICAgICAvLyBOT1RFOiAocWogLyBiaGkpIGlzICgweDNmZmZmZmYgKiAweDQwMDAwMDAgKyAweDNmZmZmZmYpIC8gMHgyMDAwMDAwIG1heFxuICAgICAgLy8gKDB4N2ZmZmZmZilcbiAgICAgIHFqID0gTWF0aC5taW4oKHFqIC8gYmhpKSB8IDAsIDB4M2ZmZmZmZik7XG5cbiAgICAgIGEuX2lzaGxuc3VibXVsKGIsIHFqLCBqKTtcbiAgICAgIHdoaWxlIChhLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICAgIHFqLS07XG4gICAgICAgIGEubmVnYXRpdmUgPSAwO1xuICAgICAgICBhLl9pc2hsbnN1Ym11bChiLCAxLCBqKTtcbiAgICAgICAgaWYgKCFhLmlzWmVybygpKSB7XG4gICAgICAgICAgYS5uZWdhdGl2ZSBePSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocSkge1xuICAgICAgICBxLndvcmRzW2pdID0gcWo7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChxKSB7XG4gICAgICBxLnN0cmlwKCk7XG4gICAgfVxuICAgIGEuc3RyaXAoKTtcblxuICAgIC8vIERlbm9ybWFsaXplXG4gICAgaWYgKG1vZGUgIT09ICdkaXYnICYmIHNoaWZ0ICE9PSAwKSB7XG4gICAgICBhLml1c2hybihzaGlmdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpdjogcSB8fCBudWxsLFxuICAgICAgbW9kOiBhXG4gICAgfTtcbiAgfTtcblxuICAvLyBOT1RFOiAxKSBgbW9kZWAgY2FuIGJlIHNldCB0byBgbW9kYCB0byByZXF1ZXN0IG1vZCBvbmx5LFxuICAvLyAgICAgICB0byBgZGl2YCB0byByZXF1ZXN0IGRpdiBvbmx5LCBvciBiZSBhYnNlbnQgdG9cbiAgLy8gICAgICAgcmVxdWVzdCBib3RoIGRpdiAmIG1vZFxuICAvLyAgICAgICAyKSBgcG9zaXRpdmVgIGlzIHRydWUgaWYgdW5zaWduZWQgbW9kIGlzIHJlcXVlc3RlZFxuICBCTi5wcm90b3R5cGUuZGl2bW9kID0gZnVuY3Rpb24gZGl2bW9kIChudW0sIG1vZGUsIHBvc2l0aXZlKSB7XG4gICAgYXNzZXJ0KCFudW0uaXNaZXJvKCkpO1xuXG4gICAgaWYgKHRoaXMuaXNaZXJvKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpdjogbmV3IEJOKDApLFxuICAgICAgICBtb2Q6IG5ldyBCTigwKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgZGl2LCBtb2QsIHJlcztcbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCAmJiBudW0ubmVnYXRpdmUgPT09IDApIHtcbiAgICAgIHJlcyA9IHRoaXMubmVnKCkuZGl2bW9kKG51bSwgbW9kZSk7XG5cbiAgICAgIGlmIChtb2RlICE9PSAnbW9kJykge1xuICAgICAgICBkaXYgPSByZXMuZGl2Lm5lZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kZSAhPT0gJ2RpdicpIHtcbiAgICAgICAgbW9kID0gcmVzLm1vZC5uZWcoKTtcbiAgICAgICAgaWYgKHBvc2l0aXZlICYmIG1vZC5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgICAgIG1vZC5pYWRkKG51bSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGl2OiBkaXYsXG4gICAgICAgIG1vZDogbW9kXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5lZ2F0aXZlID09PSAwICYmIG51bS5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgcmVzID0gdGhpcy5kaXZtb2QobnVtLm5lZygpLCBtb2RlKTtcblxuICAgICAgaWYgKG1vZGUgIT09ICdtb2QnKSB7XG4gICAgICAgIGRpdiA9IHJlcy5kaXYubmVnKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpdjogZGl2LFxuICAgICAgICBtb2Q6IHJlcy5tb2RcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLm5lZ2F0aXZlICYgbnVtLm5lZ2F0aXZlKSAhPT0gMCkge1xuICAgICAgcmVzID0gdGhpcy5uZWcoKS5kaXZtb2QobnVtLm5lZygpLCBtb2RlKTtcblxuICAgICAgaWYgKG1vZGUgIT09ICdkaXYnKSB7XG4gICAgICAgIG1vZCA9IHJlcy5tb2QubmVnKCk7XG4gICAgICAgIGlmIChwb3NpdGl2ZSAmJiBtb2QubmVnYXRpdmUgIT09IDApIHtcbiAgICAgICAgICBtb2QuaXN1YihudW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpdjogcmVzLmRpdixcbiAgICAgICAgbW9kOiBtb2RcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQm90aCBudW1iZXJzIGFyZSBwb3NpdGl2ZSBhdCB0aGlzIHBvaW50XG5cbiAgICAvLyBTdHJpcCBib3RoIG51bWJlcnMgdG8gYXBwcm94aW1hdGUgc2hpZnQgdmFsdWVcbiAgICBpZiAobnVtLmxlbmd0aCA+IHRoaXMubGVuZ3RoIHx8IHRoaXMuY21wKG51bSkgPCAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXY6IG5ldyBCTigwKSxcbiAgICAgICAgbW9kOiB0aGlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZlcnkgc2hvcnQgcmVkdWN0aW9uXG4gICAgaWYgKG51bS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChtb2RlID09PSAnZGl2Jykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRpdjogdGhpcy5kaXZuKG51bS53b3Jkc1swXSksXG4gICAgICAgICAgbW9kOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RlID09PSAnbW9kJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRpdjogbnVsbCxcbiAgICAgICAgICBtb2Q6IG5ldyBCTih0aGlzLm1vZG4obnVtLndvcmRzWzBdKSlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGl2OiB0aGlzLmRpdm4obnVtLndvcmRzWzBdKSxcbiAgICAgICAgbW9kOiBuZXcgQk4odGhpcy5tb2RuKG51bS53b3Jkc1swXSkpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl93b3JkRGl2KG51bSwgbW9kZSk7XG4gIH07XG5cbiAgLy8gRmluZCBgdGhpc2AgLyBgbnVtYFxuICBCTi5wcm90b3R5cGUuZGl2ID0gZnVuY3Rpb24gZGl2IChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5kaXZtb2QobnVtLCAnZGl2JywgZmFsc2UpLmRpdjtcbiAgfTtcblxuICAvLyBGaW5kIGB0aGlzYCAlIGBudW1gXG4gIEJOLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbiBtb2QgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmRpdm1vZChudW0sICdtb2QnLCBmYWxzZSkubW9kO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51bW9kID0gZnVuY3Rpb24gdW1vZCAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2bW9kKG51bSwgJ21vZCcsIHRydWUpLm1vZDtcbiAgfTtcblxuICAvLyBGaW5kIFJvdW5kKGB0aGlzYCAvIGBudW1gKVxuICBCTi5wcm90b3R5cGUuZGl2Um91bmQgPSBmdW5jdGlvbiBkaXZSb3VuZCAobnVtKSB7XG4gICAgdmFyIGRtID0gdGhpcy5kaXZtb2QobnVtKTtcblxuICAgIC8vIEZhc3QgY2FzZSAtIGV4YWN0IGRpdmlzaW9uXG4gICAgaWYgKGRtLm1vZC5pc1plcm8oKSkgcmV0dXJuIGRtLmRpdjtcblxuICAgIHZhciBtb2QgPSBkbS5kaXYubmVnYXRpdmUgIT09IDAgPyBkbS5tb2QuaXN1YihudW0pIDogZG0ubW9kO1xuXG4gICAgdmFyIGhhbGYgPSBudW0udXNocm4oMSk7XG4gICAgdmFyIHIyID0gbnVtLmFuZGxuKDEpO1xuICAgIHZhciBjbXAgPSBtb2QuY21wKGhhbGYpO1xuXG4gICAgLy8gUm91bmQgZG93blxuICAgIGlmIChjbXAgPCAwIHx8IHIyID09PSAxICYmIGNtcCA9PT0gMCkgcmV0dXJuIGRtLmRpdjtcblxuICAgIC8vIFJvdW5kIHVwXG4gICAgcmV0dXJuIGRtLmRpdi5uZWdhdGl2ZSAhPT0gMCA/IGRtLmRpdi5pc3VibigxKSA6IGRtLmRpdi5pYWRkbigxKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubW9kbiA9IGZ1bmN0aW9uIG1vZG4gKG51bSkge1xuICAgIGFzc2VydChudW0gPD0gMHgzZmZmZmZmKTtcbiAgICB2YXIgcCA9ICgxIDw8IDI2KSAlIG51bTtcblxuICAgIHZhciBhY2MgPSAwO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBhY2MgPSAocCAqIGFjYyArICh0aGlzLndvcmRzW2ldIHwgMCkpICUgbnVtO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH07XG5cbiAgLy8gSW4tcGxhY2UgZGl2aXNpb24gYnkgbnVtYmVyXG4gIEJOLnByb3RvdHlwZS5pZGl2biA9IGZ1bmN0aW9uIGlkaXZuIChudW0pIHtcbiAgICBhc3NlcnQobnVtIDw9IDB4M2ZmZmZmZik7XG5cbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgdyA9ICh0aGlzLndvcmRzW2ldIHwgMCkgKyBjYXJyeSAqIDB4NDAwMDAwMDtcbiAgICAgIHRoaXMud29yZHNbaV0gPSAodyAvIG51bSkgfCAwO1xuICAgICAgY2FycnkgPSB3ICUgbnVtO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmRpdm4gPSBmdW5jdGlvbiBkaXZuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmlkaXZuKG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmVnY2QgPSBmdW5jdGlvbiBlZ2NkIChwKSB7XG4gICAgYXNzZXJ0KHAubmVnYXRpdmUgPT09IDApO1xuICAgIGFzc2VydCghcC5pc1plcm8oKSk7XG5cbiAgICB2YXIgeCA9IHRoaXM7XG4gICAgdmFyIHkgPSBwLmNsb25lKCk7XG5cbiAgICBpZiAoeC5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgeCA9IHgudW1vZChwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IHguY2xvbmUoKTtcbiAgICB9XG5cbiAgICAvLyBBICogeCArIEIgKiB5ID0geFxuICAgIHZhciBBID0gbmV3IEJOKDEpO1xuICAgIHZhciBCID0gbmV3IEJOKDApO1xuXG4gICAgLy8gQyAqIHggKyBEICogeSA9IHlcbiAgICB2YXIgQyA9IG5ldyBCTigwKTtcbiAgICB2YXIgRCA9IG5ldyBCTigxKTtcblxuICAgIHZhciBnID0gMDtcblxuICAgIHdoaWxlICh4LmlzRXZlbigpICYmIHkuaXNFdmVuKCkpIHtcbiAgICAgIHguaXVzaHJuKDEpO1xuICAgICAgeS5pdXNocm4oMSk7XG4gICAgICArK2c7XG4gICAgfVxuXG4gICAgdmFyIHlwID0geS5jbG9uZSgpO1xuICAgIHZhciB4cCA9IHguY2xvbmUoKTtcblxuICAgIHdoaWxlICgheC5pc1plcm8oKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGltID0gMTsgKHgud29yZHNbMF0gJiBpbSkgPT09IDAgJiYgaSA8IDI2OyArK2ksIGltIDw8PSAxKTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICB4Lml1c2hybihpKTtcbiAgICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgICBpZiAoQS5pc09kZCgpIHx8IEIuaXNPZGQoKSkge1xuICAgICAgICAgICAgQS5pYWRkKHlwKTtcbiAgICAgICAgICAgIEIuaXN1Yih4cCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQS5pdXNocm4oMSk7XG4gICAgICAgICAgQi5pdXNocm4oMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaiA9IDAsIGptID0gMTsgKHkud29yZHNbMF0gJiBqbSkgPT09IDAgJiYgaiA8IDI2OyArK2osIGptIDw8PSAxKTtcbiAgICAgIGlmIChqID4gMCkge1xuICAgICAgICB5Lml1c2hybihqKTtcbiAgICAgICAgd2hpbGUgKGotLSA+IDApIHtcbiAgICAgICAgICBpZiAoQy5pc09kZCgpIHx8IEQuaXNPZGQoKSkge1xuICAgICAgICAgICAgQy5pYWRkKHlwKTtcbiAgICAgICAgICAgIEQuaXN1Yih4cCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQy5pdXNocm4oMSk7XG4gICAgICAgICAgRC5pdXNocm4oMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHguY21wKHkpID49IDApIHtcbiAgICAgICAgeC5pc3ViKHkpO1xuICAgICAgICBBLmlzdWIoQyk7XG4gICAgICAgIEIuaXN1YihEKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHkuaXN1Yih4KTtcbiAgICAgICAgQy5pc3ViKEEpO1xuICAgICAgICBELmlzdWIoQik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGE6IEMsXG4gICAgICBiOiBELFxuICAgICAgZ2NkOiB5Lml1c2hsbihnKVxuICAgIH07XG4gIH07XG5cbiAgLy8gVGhpcyBpcyByZWR1Y2VkIGluY2FybmF0aW9uIG9mIHRoZSBiaW5hcnkgRUVBXG4gIC8vIGFib3ZlLCBkZXNpZ25hdGVkIHRvIGludmVydCBtZW1iZXJzIG9mIHRoZVxuICAvLyBfcHJpbWVfIGZpZWxkcyBGKHApIGF0IGEgbWF4aW1hbCBzcGVlZFxuICBCTi5wcm90b3R5cGUuX2ludm1wID0gZnVuY3Rpb24gX2ludm1wIChwKSB7XG4gICAgYXNzZXJ0KHAubmVnYXRpdmUgPT09IDApO1xuICAgIGFzc2VydCghcC5pc1plcm8oKSk7XG5cbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgdmFyIGIgPSBwLmNsb25lKCk7XG5cbiAgICBpZiAoYS5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgYSA9IGEudW1vZChwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IGEuY2xvbmUoKTtcbiAgICB9XG5cbiAgICB2YXIgeDEgPSBuZXcgQk4oMSk7XG4gICAgdmFyIHgyID0gbmV3IEJOKDApO1xuXG4gICAgdmFyIGRlbHRhID0gYi5jbG9uZSgpO1xuXG4gICAgd2hpbGUgKGEuY21wbigxKSA+IDAgJiYgYi5jbXBuKDEpID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGltID0gMTsgKGEud29yZHNbMF0gJiBpbSkgPT09IDAgJiYgaSA8IDI2OyArK2ksIGltIDw8PSAxKTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBhLml1c2hybihpKTtcbiAgICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgICBpZiAoeDEuaXNPZGQoKSkge1xuICAgICAgICAgICAgeDEuaWFkZChkZWx0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeDEuaXVzaHJuKDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGogPSAwLCBqbSA9IDE7IChiLndvcmRzWzBdICYgam0pID09PSAwICYmIGogPCAyNjsgKytqLCBqbSA8PD0gMSk7XG4gICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgYi5pdXNocm4oaik7XG4gICAgICAgIHdoaWxlIChqLS0gPiAwKSB7XG4gICAgICAgICAgaWYgKHgyLmlzT2RkKCkpIHtcbiAgICAgICAgICAgIHgyLmlhZGQoZGVsdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHgyLml1c2hybigxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYS5jbXAoYikgPj0gMCkge1xuICAgICAgICBhLmlzdWIoYik7XG4gICAgICAgIHgxLmlzdWIoeDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYi5pc3ViKGEpO1xuICAgICAgICB4Mi5pc3ViKHgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzO1xuICAgIGlmIChhLmNtcG4oMSkgPT09IDApIHtcbiAgICAgIHJlcyA9IHgxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSB4MjtcbiAgICB9XG5cbiAgICBpZiAocmVzLmNtcG4oMCkgPCAwKSB7XG4gICAgICByZXMuaWFkZChwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5nY2QgPSBmdW5jdGlvbiBnY2QgKG51bSkge1xuICAgIGlmICh0aGlzLmlzWmVybygpKSByZXR1cm4gbnVtLmFicygpO1xuICAgIGlmIChudW0uaXNaZXJvKCkpIHJldHVybiB0aGlzLmFicygpO1xuXG4gICAgdmFyIGEgPSB0aGlzLmNsb25lKCk7XG4gICAgdmFyIGIgPSBudW0uY2xvbmUoKTtcbiAgICBhLm5lZ2F0aXZlID0gMDtcbiAgICBiLm5lZ2F0aXZlID0gMDtcblxuICAgIC8vIFJlbW92ZSBjb21tb24gZmFjdG9yIG9mIHR3b1xuICAgIGZvciAodmFyIHNoaWZ0ID0gMDsgYS5pc0V2ZW4oKSAmJiBiLmlzRXZlbigpOyBzaGlmdCsrKSB7XG4gICAgICBhLml1c2hybigxKTtcbiAgICAgIGIuaXVzaHJuKDEpO1xuICAgIH1cblxuICAgIGRvIHtcbiAgICAgIHdoaWxlIChhLmlzRXZlbigpKSB7XG4gICAgICAgIGEuaXVzaHJuKDEpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGIuaXNFdmVuKCkpIHtcbiAgICAgICAgYi5pdXNocm4oMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByID0gYS5jbXAoYik7XG4gICAgICBpZiAociA8IDApIHtcbiAgICAgICAgLy8gU3dhcCBgYWAgYW5kIGBiYCB0byBtYWtlIGBhYCBhbHdheXMgYmlnZ2VyIHRoYW4gYGJgXG4gICAgICAgIHZhciB0ID0gYTtcbiAgICAgICAgYSA9IGI7XG4gICAgICAgIGIgPSB0O1xuICAgICAgfSBlbHNlIGlmIChyID09PSAwIHx8IGIuY21wbigxKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgYS5pc3ViKGIpO1xuICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgcmV0dXJuIGIuaXVzaGxuKHNoaWZ0KTtcbiAgfTtcblxuICAvLyBJbnZlcnQgbnVtYmVyIGluIHRoZSBmaWVsZCBGKG51bSlcbiAgQk4ucHJvdG90eXBlLmludm0gPSBmdW5jdGlvbiBpbnZtIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5lZ2NkKG51bSkuYS51bW9kKG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uIGlzRXZlbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLndvcmRzWzBdICYgMSkgPT09IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gaXNPZGQgKCkge1xuICAgIHJldHVybiAodGhpcy53b3Jkc1swXSAmIDEpID09PSAxO1xuICB9O1xuXG4gIC8vIEFuZCBmaXJzdCB3b3JkIGFuZCBudW1cbiAgQk4ucHJvdG90eXBlLmFuZGxuID0gZnVuY3Rpb24gYW5kbG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLndvcmRzWzBdICYgbnVtO1xuICB9O1xuXG4gIC8vIEluY3JlbWVudCBhdCB0aGUgYml0IHBvc2l0aW9uIGluLWxpbmVcbiAgQk4ucHJvdG90eXBlLmJpbmNuID0gZnVuY3Rpb24gYmluY24gKGJpdCkge1xuICAgIGFzc2VydCh0eXBlb2YgYml0ID09PSAnbnVtYmVyJyk7XG4gICAgdmFyIHIgPSBiaXQgJSAyNjtcbiAgICB2YXIgcyA9IChiaXQgLSByKSAvIDI2O1xuICAgIHZhciBxID0gMSA8PCByO1xuXG4gICAgLy8gRmFzdCBjYXNlOiBiaXQgaXMgbXVjaCBoaWdoZXIgdGhhbiBhbGwgZXhpc3Rpbmcgd29yZHNcbiAgICBpZiAodGhpcy5sZW5ndGggPD0gcykge1xuICAgICAgdGhpcy5fZXhwYW5kKHMgKyAxKTtcbiAgICAgIHRoaXMud29yZHNbc10gfD0gcTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEFkZCBiaXQgYW5kIHByb3BhZ2F0ZSwgaWYgbmVlZGVkXG4gICAgdmFyIGNhcnJ5ID0gcTtcbiAgICBmb3IgKHZhciBpID0gczsgY2FycnkgIT09IDAgJiYgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB3ID0gdGhpcy53b3Jkc1tpXSB8IDA7XG4gICAgICB3ICs9IGNhcnJ5O1xuICAgICAgY2FycnkgPSB3ID4+PiAyNjtcbiAgICAgIHcgJj0gMHgzZmZmZmZmO1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHc7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IGNhcnJ5O1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uIGlzWmVybyAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAxICYmIHRoaXMud29yZHNbMF0gPT09IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmNtcG4gPSBmdW5jdGlvbiBjbXBuIChudW0pIHtcbiAgICB2YXIgbmVnYXRpdmUgPSBudW0gPCAwO1xuXG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDAgJiYgIW5lZ2F0aXZlKSByZXR1cm4gLTE7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgPT09IDAgJiYgbmVnYXRpdmUpIHJldHVybiAxO1xuXG4gICAgdGhpcy5zdHJpcCgpO1xuXG4gICAgdmFyIHJlcztcbiAgICBpZiAodGhpcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXMgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmVnYXRpdmUpIHtcbiAgICAgICAgbnVtID0gLW51bTtcbiAgICAgIH1cblxuICAgICAgYXNzZXJ0KG51bSA8PSAweDNmZmZmZmYsICdOdW1iZXIgaXMgdG9vIGJpZycpO1xuXG4gICAgICB2YXIgdyA9IHRoaXMud29yZHNbMF0gfCAwO1xuICAgICAgcmVzID0gdyA9PT0gbnVtID8gMCA6IHcgPCBudW0gPyAtMSA6IDE7XG4gICAgfVxuICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwKSByZXR1cm4gLXJlcyB8IDA7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvLyBDb21wYXJlIHR3byBudW1iZXJzIGFuZCByZXR1cm46XG4gIC8vIDEgLSBpZiBgdGhpc2AgPiBgbnVtYFxuICAvLyAwIC0gaWYgYHRoaXNgID09IGBudW1gXG4gIC8vIC0xIC0gaWYgYHRoaXNgIDwgYG51bWBcbiAgQk4ucHJvdG90eXBlLmNtcCA9IGZ1bmN0aW9uIGNtcCAobnVtKSB7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDAgJiYgbnVtLm5lZ2F0aXZlID09PSAwKSByZXR1cm4gLTE7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgPT09IDAgJiYgbnVtLm5lZ2F0aXZlICE9PSAwKSByZXR1cm4gMTtcblxuICAgIHZhciByZXMgPSB0aGlzLnVjbXAobnVtKTtcbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkgcmV0dXJuIC1yZXMgfCAwO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgLy8gVW5zaWduZWQgY29tcGFyaXNvblxuICBCTi5wcm90b3R5cGUudWNtcCA9IGZ1bmN0aW9uIHVjbXAgKG51bSkge1xuICAgIC8vIEF0IHRoaXMgcG9pbnQgYm90aCBudW1iZXJzIGhhdmUgdGhlIHNhbWUgc2lnblxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiAxO1xuICAgIGlmICh0aGlzLmxlbmd0aCA8IG51bS5sZW5ndGgpIHJldHVybiAtMTtcblxuICAgIHZhciByZXMgPSAwO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgYSA9IHRoaXMud29yZHNbaV0gfCAwO1xuICAgICAgdmFyIGIgPSBudW0ud29yZHNbaV0gfCAwO1xuXG4gICAgICBpZiAoYSA9PT0gYikgY29udGludWU7XG4gICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmVzID0gLTE7XG4gICAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJlcyA9IDE7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZ3RuID0gZnVuY3Rpb24gZ3RuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXBuKG51bSkgPT09IDE7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmd0ID0gZnVuY3Rpb24gZ3QgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcChudW0pID09PSAxO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5ndGVuID0gZnVuY3Rpb24gZ3RlbiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wbihudW0pID49IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmd0ZSA9IGZ1bmN0aW9uIGd0ZSAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wKG51bSkgPj0gMDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubHRuID0gZnVuY3Rpb24gbHRuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXBuKG51bSkgPT09IC0xO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5sdCA9IGZ1bmN0aW9uIGx0IChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXAobnVtKSA9PT0gLTE7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmx0ZW4gPSBmdW5jdGlvbiBsdGVuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXBuKG51bSkgPD0gMDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubHRlID0gZnVuY3Rpb24gbHRlIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXAobnVtKSA8PSAwO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5lcW4gPSBmdW5jdGlvbiBlcW4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcG4obnVtKSA9PT0gMDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZXEgPSBmdW5jdGlvbiBlcSAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wKG51bSkgPT09IDA7XG4gIH07XG5cbiAgLy9cbiAgLy8gQSByZWR1Y2UgY29udGV4dCwgY291bGQgYmUgdXNpbmcgbW9udGdvbWVyeSBvciBzb21ldGhpbmcgYmV0dGVyLCBkZXBlbmRpbmdcbiAgLy8gb24gdGhlIGBtYCBpdHNlbGYuXG4gIC8vXG4gIEJOLnJlZCA9IGZ1bmN0aW9uIHJlZCAobnVtKSB7XG4gICAgcmV0dXJuIG5ldyBSZWQobnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudG9SZWQgPSBmdW5jdGlvbiB0b1JlZCAoY3R4KSB7XG4gICAgYXNzZXJ0KCF0aGlzLnJlZCwgJ0FscmVhZHkgYSBudW1iZXIgaW4gcmVkdWN0aW9uIGNvbnRleHQnKTtcbiAgICBhc3NlcnQodGhpcy5uZWdhdGl2ZSA9PT0gMCwgJ3JlZCB3b3JrcyBvbmx5IHdpdGggcG9zaXRpdmVzJyk7XG4gICAgcmV0dXJuIGN0eC5jb252ZXJ0VG8odGhpcykuX2ZvcmNlUmVkKGN0eCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmZyb21SZWQgPSBmdW5jdGlvbiBmcm9tUmVkICgpIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdmcm9tUmVkIHdvcmtzIG9ubHkgd2l0aCBudW1iZXJzIGluIHJlZHVjdGlvbiBjb250ZXh0Jyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLmNvbnZlcnRGcm9tKHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5fZm9yY2VSZWQgPSBmdW5jdGlvbiBfZm9yY2VSZWQgKGN0eCkge1xuICAgIHRoaXMucmVkID0gY3R4O1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5mb3JjZVJlZCA9IGZ1bmN0aW9uIGZvcmNlUmVkIChjdHgpIHtcbiAgICBhc3NlcnQoIXRoaXMucmVkLCAnQWxyZWFkeSBhIG51bWJlciBpbiByZWR1Y3Rpb24gY29udGV4dCcpO1xuICAgIHJldHVybiB0aGlzLl9mb3JjZVJlZChjdHgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRBZGQgPSBmdW5jdGlvbiByZWRBZGQgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZEFkZCB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuYWRkKHRoaXMsIG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZElBZGQgPSBmdW5jdGlvbiByZWRJQWRkIChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRJQWRkIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHJldHVybiB0aGlzLnJlZC5pYWRkKHRoaXMsIG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZFN1YiA9IGZ1bmN0aW9uIHJlZFN1YiAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkU3ViIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHJldHVybiB0aGlzLnJlZC5zdWIodGhpcywgbnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkSVN1YiA9IGZ1bmN0aW9uIHJlZElTdWIgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZElTdWIgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLmlzdWIodGhpcywgbnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkU2hsID0gZnVuY3Rpb24gcmVkU2hsIChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRTaGwgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLnNobCh0aGlzLCBudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRNdWwgPSBmdW5jdGlvbiByZWRNdWwgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZE11bCB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5Mih0aGlzLCBudW0pO1xuICAgIHJldHVybiB0aGlzLnJlZC5tdWwodGhpcywgbnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkSU11bCA9IGZ1bmN0aW9uIHJlZElNdWwgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZE11bCB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5Mih0aGlzLCBudW0pO1xuICAgIHJldHVybiB0aGlzLnJlZC5pbXVsKHRoaXMsIG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZFNxciA9IGZ1bmN0aW9uIHJlZFNxciAoKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkU3FyIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkxKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnJlZC5zcXIodGhpcyk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZElTcXIgPSBmdW5jdGlvbiByZWRJU3FyICgpIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRJU3FyIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkxKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnJlZC5pc3FyKHRoaXMpO1xuICB9O1xuXG4gIC8vIFNxdWFyZSByb290IG92ZXIgcFxuICBCTi5wcm90b3R5cGUucmVkU3FydCA9IGZ1bmN0aW9uIHJlZFNxcnQgKCkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZFNxcnQgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTEodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLnNxcnQodGhpcyk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZEludm0gPSBmdW5jdGlvbiByZWRJbnZtICgpIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRJbnZtIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkxKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnJlZC5pbnZtKHRoaXMpO1xuICB9O1xuXG4gIC8vIFJldHVybiBuZWdhdGl2ZSBjbG9uZSBvZiBgdGhpc2AgJSBgcmVkIG1vZHVsb2BcbiAgQk4ucHJvdG90eXBlLnJlZE5lZyA9IGZ1bmN0aW9uIHJlZE5lZyAoKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkTmVnIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkxKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnJlZC5uZWcodGhpcyk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZFBvdyA9IGZ1bmN0aW9uIHJlZFBvdyAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkICYmICFudW0ucmVkLCAncmVkUG93KG5vcm1hbE51bSknKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5MSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5yZWQucG93KHRoaXMsIG51bSk7XG4gIH07XG5cbiAgLy8gUHJpbWUgbnVtYmVycyB3aXRoIGVmZmljaWVudCByZWR1Y3Rpb25cbiAgdmFyIHByaW1lcyA9IHtcbiAgICBrMjU2OiBudWxsLFxuICAgIHAyMjQ6IG51bGwsXG4gICAgcDE5MjogbnVsbCxcbiAgICBwMjU1MTk6IG51bGxcbiAgfTtcblxuICAvLyBQc2V1ZG8tTWVyc2VubmUgcHJpbWVcbiAgZnVuY3Rpb24gTVByaW1lIChuYW1lLCBwKSB7XG4gICAgLy8gUCA9IDIgXiBOIC0gS1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wID0gbmV3IEJOKHAsIDE2KTtcbiAgICB0aGlzLm4gPSB0aGlzLnAuYml0TGVuZ3RoKCk7XG4gICAgdGhpcy5rID0gbmV3IEJOKDEpLml1c2hsbih0aGlzLm4pLmlzdWIodGhpcy5wKTtcblxuICAgIHRoaXMudG1wID0gdGhpcy5fdG1wKCk7XG4gIH1cblxuICBNUHJpbWUucHJvdG90eXBlLl90bXAgPSBmdW5jdGlvbiBfdG1wICgpIHtcbiAgICB2YXIgdG1wID0gbmV3IEJOKG51bGwpO1xuICAgIHRtcC53b3JkcyA9IG5ldyBBcnJheShNYXRoLmNlaWwodGhpcy5uIC8gMTMpKTtcbiAgICByZXR1cm4gdG1wO1xuICB9O1xuXG4gIE1QcmltZS5wcm90b3R5cGUuaXJlZHVjZSA9IGZ1bmN0aW9uIGlyZWR1Y2UgKG51bSkge1xuICAgIC8vIEFzc3VtZXMgdGhhdCBgbnVtYCBpcyBsZXNzIHRoYW4gYFBeMmBcbiAgICAvLyBudW0gPSBISSAqICgyIF4gTiAtIEspICsgSEkgKiBLICsgTE8gPSBISSAqIEsgKyBMTyAobW9kIFApXG4gICAgdmFyIHIgPSBudW07XG4gICAgdmFyIHJsZW47XG5cbiAgICBkbyB7XG4gICAgICB0aGlzLnNwbGl0KHIsIHRoaXMudG1wKTtcbiAgICAgIHIgPSB0aGlzLmltdWxLKHIpO1xuICAgICAgciA9IHIuaWFkZCh0aGlzLnRtcCk7XG4gICAgICBybGVuID0gci5iaXRMZW5ndGgoKTtcbiAgICB9IHdoaWxlIChybGVuID4gdGhpcy5uKTtcblxuICAgIHZhciBjbXAgPSBybGVuIDwgdGhpcy5uID8gLTEgOiByLnVjbXAodGhpcy5wKTtcbiAgICBpZiAoY21wID09PSAwKSB7XG4gICAgICByLndvcmRzWzBdID0gMDtcbiAgICAgIHIubGVuZ3RoID0gMTtcbiAgICB9IGVsc2UgaWYgKGNtcCA+IDApIHtcbiAgICAgIHIuaXN1Yih0aGlzLnApO1xuICAgIH0gZWxzZSB7XG4gICAgICByLnN0cmlwKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgTVByaW1lLnByb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uIHNwbGl0IChpbnB1dCwgb3V0KSB7XG4gICAgaW5wdXQuaXVzaHJuKHRoaXMubiwgMCwgb3V0KTtcbiAgfTtcblxuICBNUHJpbWUucHJvdG90eXBlLmltdWxLID0gZnVuY3Rpb24gaW11bEsgKG51bSkge1xuICAgIHJldHVybiBudW0uaW11bCh0aGlzLmspO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEsyNTYgKCkge1xuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICdrMjU2JyxcbiAgICAgICdmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZSBmZmZmZmMyZicpO1xuICB9XG4gIGluaGVyaXRzKEsyNTYsIE1QcmltZSk7XG5cbiAgSzI1Ni5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiBzcGxpdCAoaW5wdXQsIG91dHB1dCkge1xuICAgIC8vIDI1NiA9IDkgKiAyNiArIDIyXG4gICAgdmFyIG1hc2sgPSAweDNmZmZmZjtcblxuICAgIHZhciBvdXRMZW4gPSBNYXRoLm1pbihpbnB1dC5sZW5ndGgsIDkpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0TGVuOyBpKyspIHtcbiAgICAgIG91dHB1dC53b3Jkc1tpXSA9IGlucHV0LndvcmRzW2ldO1xuICAgIH1cbiAgICBvdXRwdXQubGVuZ3RoID0gb3V0TGVuO1xuXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA8PSA5KSB7XG4gICAgICBpbnB1dC53b3Jkc1swXSA9IDA7XG4gICAgICBpbnB1dC5sZW5ndGggPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNoaWZ0IGJ5IDkgbGltYnNcbiAgICB2YXIgcHJldiA9IGlucHV0LndvcmRzWzldO1xuICAgIG91dHB1dC53b3Jkc1tvdXRwdXQubGVuZ3RoKytdID0gcHJldiAmIG1hc2s7XG5cbiAgICBmb3IgKGkgPSAxMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbmV4dCA9IGlucHV0LndvcmRzW2ldIHwgMDtcbiAgICAgIGlucHV0LndvcmRzW2kgLSAxMF0gPSAoKG5leHQgJiBtYXNrKSA8PCA0KSB8IChwcmV2ID4+PiAyMik7XG4gICAgICBwcmV2ID0gbmV4dDtcbiAgICB9XG4gICAgcHJldiA+Pj49IDIyO1xuICAgIGlucHV0LndvcmRzW2kgLSAxMF0gPSBwcmV2O1xuICAgIGlmIChwcmV2ID09PSAwICYmIGlucHV0Lmxlbmd0aCA+IDEwKSB7XG4gICAgICBpbnB1dC5sZW5ndGggLT0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0Lmxlbmd0aCAtPSA5O1xuICAgIH1cbiAgfTtcblxuICBLMjU2LnByb3RvdHlwZS5pbXVsSyA9IGZ1bmN0aW9uIGltdWxLIChudW0pIHtcbiAgICAvLyBLID0gMHgxMDAwMDAzZDEgPSBbIDB4NDAsIDB4M2QxIF1cbiAgICBudW0ud29yZHNbbnVtLmxlbmd0aF0gPSAwO1xuICAgIG51bS53b3Jkc1tudW0ubGVuZ3RoICsgMV0gPSAwO1xuICAgIG51bS5sZW5ndGggKz0gMjtcblxuICAgIC8vIGJvdW5kZWQgYXQ6IDB4NDAgKiAweDNmZmZmZmYgKyAweDNkMCA9IDB4MTAwMDAwMzkwXG4gICAgdmFyIGxvID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHcgPSBudW0ud29yZHNbaV0gfCAwO1xuICAgICAgbG8gKz0gdyAqIDB4M2QxO1xuICAgICAgbnVtLndvcmRzW2ldID0gbG8gJiAweDNmZmZmZmY7XG4gICAgICBsbyA9IHcgKiAweDQwICsgKChsbyAvIDB4NDAwMDAwMCkgfCAwKTtcbiAgICB9XG5cbiAgICAvLyBGYXN0IGxlbmd0aCByZWR1Y3Rpb25cbiAgICBpZiAobnVtLndvcmRzW251bS5sZW5ndGggLSAxXSA9PT0gMCkge1xuICAgICAgbnVtLmxlbmd0aC0tO1xuICAgICAgaWYgKG51bS53b3Jkc1tudW0ubGVuZ3RoIC0gMV0gPT09IDApIHtcbiAgICAgICAgbnVtLmxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVtO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFAyMjQgKCkge1xuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICdwMjI0JyxcbiAgICAgICdmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMScpO1xuICB9XG4gIGluaGVyaXRzKFAyMjQsIE1QcmltZSk7XG5cbiAgZnVuY3Rpb24gUDE5MiAoKSB7XG4gICAgTVByaW1lLmNhbGwoXG4gICAgICB0aGlzLFxuICAgICAgJ3AxOTInLFxuICAgICAgJ2ZmZmZmZmZmIGZmZmZmZmZmIGZmZmZmZmZmIGZmZmZmZmZlIGZmZmZmZmZmIGZmZmZmZmZmJyk7XG4gIH1cbiAgaW5oZXJpdHMoUDE5MiwgTVByaW1lKTtcblxuICBmdW5jdGlvbiBQMjU1MTkgKCkge1xuICAgIC8vIDIgXiAyNTUgLSAxOVxuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICcyNTUxOScsXG4gICAgICAnN2ZmZmZmZmZmZmZmZmZmZiBmZmZmZmZmZmZmZmZmZmZmIGZmZmZmZmZmZmZmZmZmZmYgZmZmZmZmZmZmZmZmZmZlZCcpO1xuICB9XG4gIGluaGVyaXRzKFAyNTUxOSwgTVByaW1lKTtcblxuICBQMjU1MTkucHJvdG90eXBlLmltdWxLID0gZnVuY3Rpb24gaW11bEsgKG51bSkge1xuICAgIC8vIEsgPSAweDEzXG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhpID0gKG51bS53b3Jkc1tpXSB8IDApICogMHgxMyArIGNhcnJ5O1xuICAgICAgdmFyIGxvID0gaGkgJiAweDNmZmZmZmY7XG4gICAgICBoaSA+Pj49IDI2O1xuXG4gICAgICBudW0ud29yZHNbaV0gPSBsbztcbiAgICAgIGNhcnJ5ID0gaGk7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgbnVtLndvcmRzW251bS5sZW5ndGgrK10gPSBjYXJyeTtcbiAgICB9XG4gICAgcmV0dXJuIG51bTtcbiAgfTtcblxuICAvLyBFeHBvcnRlZCBtb3N0bHkgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHVzZSBwbGFpbiBuYW1lIGluc3RlYWRcbiAgQk4uX3ByaW1lID0gZnVuY3Rpb24gcHJpbWUgKG5hbWUpIHtcbiAgICAvLyBDYWNoZWQgdmVyc2lvbiBvZiBwcmltZVxuICAgIGlmIChwcmltZXNbbmFtZV0pIHJldHVybiBwcmltZXNbbmFtZV07XG5cbiAgICB2YXIgcHJpbWU7XG4gICAgaWYgKG5hbWUgPT09ICdrMjU2Jykge1xuICAgICAgcHJpbWUgPSBuZXcgSzI1NigpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3AyMjQnKSB7XG4gICAgICBwcmltZSA9IG5ldyBQMjI0KCk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAncDE5MicpIHtcbiAgICAgIHByaW1lID0gbmV3IFAxOTIoKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwMjU1MTknKSB7XG4gICAgICBwcmltZSA9IG5ldyBQMjU1MTkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHByaW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgcHJpbWVzW25hbWVdID0gcHJpbWU7XG5cbiAgICByZXR1cm4gcHJpbWU7XG4gIH07XG5cbiAgLy9cbiAgLy8gQmFzZSByZWR1Y3Rpb24gZW5naW5lXG4gIC8vXG4gIGZ1bmN0aW9uIFJlZCAobSkge1xuICAgIGlmICh0eXBlb2YgbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcmltZSA9IEJOLl9wcmltZShtKTtcbiAgICAgIHRoaXMubSA9IHByaW1lLnA7XG4gICAgICB0aGlzLnByaW1lID0gcHJpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydChtLmd0bigxKSwgJ21vZHVsdXMgbXVzdCBiZSBncmVhdGVyIHRoYW4gMScpO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMucHJpbWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIFJlZC5wcm90b3R5cGUuX3ZlcmlmeTEgPSBmdW5jdGlvbiBfdmVyaWZ5MSAoYSkge1xuICAgIGFzc2VydChhLm5lZ2F0aXZlID09PSAwLCAncmVkIHdvcmtzIG9ubHkgd2l0aCBwb3NpdGl2ZXMnKTtcbiAgICBhc3NlcnQoYS5yZWQsICdyZWQgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5fdmVyaWZ5MiA9IGZ1bmN0aW9uIF92ZXJpZnkyIChhLCBiKSB7XG4gICAgYXNzZXJ0KChhLm5lZ2F0aXZlIHwgYi5uZWdhdGl2ZSkgPT09IDAsICdyZWQgd29ya3Mgb25seSB3aXRoIHBvc2l0aXZlcycpO1xuICAgIGFzc2VydChhLnJlZCAmJiBhLnJlZCA9PT0gYi5yZWQsXG4gICAgICAncmVkIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuaW1vZCA9IGZ1bmN0aW9uIGltb2QgKGEpIHtcbiAgICBpZiAodGhpcy5wcmltZSkgcmV0dXJuIHRoaXMucHJpbWUuaXJlZHVjZShhKS5fZm9yY2VSZWQodGhpcyk7XG4gICAgcmV0dXJuIGEudW1vZCh0aGlzLm0pLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLm5lZyA9IGZ1bmN0aW9uIG5lZyAoYSkge1xuICAgIGlmIChhLmlzWmVybygpKSB7XG4gICAgICByZXR1cm4gYS5jbG9uZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm0uc3ViKGEpLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG5cbiAgICB2YXIgcmVzID0gYS5hZGQoYik7XG4gICAgaWYgKHJlcy5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMuaXN1Yih0aGlzLm0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmlhZGQgPSBmdW5jdGlvbiBpYWRkIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcblxuICAgIHZhciByZXMgPSBhLmlhZGQoYik7XG4gICAgaWYgKHJlcy5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMuaXN1Yih0aGlzLm0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gc3ViIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcblxuICAgIHZhciByZXMgPSBhLnN1YihiKTtcbiAgICBpZiAocmVzLmNtcG4oMCkgPCAwKSB7XG4gICAgICByZXMuaWFkZCh0aGlzLm0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmlzdWIgPSBmdW5jdGlvbiBpc3ViIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcblxuICAgIHZhciByZXMgPSBhLmlzdWIoYik7XG4gICAgaWYgKHJlcy5jbXBuKDApIDwgMCkge1xuICAgICAgcmVzLmlhZGQodGhpcy5tKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLnNobCA9IGZ1bmN0aW9uIHNobCAoYSwgbnVtKSB7XG4gICAgdGhpcy5fdmVyaWZ5MShhKTtcbiAgICByZXR1cm4gdGhpcy5pbW9kKGEudXNobG4obnVtKSk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5pbXVsID0gZnVuY3Rpb24gaW11bCAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG4gICAgcmV0dXJuIHRoaXMuaW1vZChhLmltdWwoYikpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUubXVsID0gZnVuY3Rpb24gbXVsIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcbiAgICByZXR1cm4gdGhpcy5pbW9kKGEubXVsKGIpKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmlzcXIgPSBmdW5jdGlvbiBpc3FyIChhKSB7XG4gICAgcmV0dXJuIHRoaXMuaW11bChhLCBhLmNsb25lKCkpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuc3FyID0gZnVuY3Rpb24gc3FyIChhKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsKGEsIGEpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuc3FydCA9IGZ1bmN0aW9uIHNxcnQgKGEpIHtcbiAgICBpZiAoYS5pc1plcm8oKSkgcmV0dXJuIGEuY2xvbmUoKTtcblxuICAgIHZhciBtb2QzID0gdGhpcy5tLmFuZGxuKDMpO1xuICAgIGFzc2VydChtb2QzICUgMiA9PT0gMSk7XG5cbiAgICAvLyBGYXN0IGNhc2VcbiAgICBpZiAobW9kMyA9PT0gMykge1xuICAgICAgdmFyIHBvdyA9IHRoaXMubS5hZGQobmV3IEJOKDEpKS5pdXNocm4oMik7XG4gICAgICByZXR1cm4gdGhpcy5wb3coYSwgcG93KTtcbiAgICB9XG5cbiAgICAvLyBUb25lbGxpLVNoYW5rcyBhbGdvcml0aG0gKFRvdGFsbHkgdW5vcHRpbWl6ZWQgYW5kIHNsb3cpXG4gICAgLy9cbiAgICAvLyBGaW5kIFEgYW5kIFMsIHRoYXQgUSAqIDIgXiBTID0gKFAgLSAxKVxuICAgIHZhciBxID0gdGhpcy5tLnN1Ym4oMSk7XG4gICAgdmFyIHMgPSAwO1xuICAgIHdoaWxlICghcS5pc1plcm8oKSAmJiBxLmFuZGxuKDEpID09PSAwKSB7XG4gICAgICBzKys7XG4gICAgICBxLml1c2hybigxKTtcbiAgICB9XG4gICAgYXNzZXJ0KCFxLmlzWmVybygpKTtcblxuICAgIHZhciBvbmUgPSBuZXcgQk4oMSkudG9SZWQodGhpcyk7XG4gICAgdmFyIG5PbmUgPSBvbmUucmVkTmVnKCk7XG5cbiAgICAvLyBGaW5kIHF1YWRyYXRpYyBub24tcmVzaWR1ZVxuICAgIC8vIE5PVEU6IE1heCBpcyBzdWNoIGJlY2F1c2Ugb2YgZ2VuZXJhbGl6ZWQgUmllbWFubiBoeXBvdGhlc2lzLlxuICAgIHZhciBscG93ID0gdGhpcy5tLnN1Ym4oMSkuaXVzaHJuKDEpO1xuICAgIHZhciB6ID0gdGhpcy5tLmJpdExlbmd0aCgpO1xuICAgIHogPSBuZXcgQk4oMiAqIHogKiB6KS50b1JlZCh0aGlzKTtcblxuICAgIHdoaWxlICh0aGlzLnBvdyh6LCBscG93KS5jbXAobk9uZSkgIT09IDApIHtcbiAgICAgIHoucmVkSUFkZChuT25lKTtcbiAgICB9XG5cbiAgICB2YXIgYyA9IHRoaXMucG93KHosIHEpO1xuICAgIHZhciByID0gdGhpcy5wb3coYSwgcS5hZGRuKDEpLml1c2hybigxKSk7XG4gICAgdmFyIHQgPSB0aGlzLnBvdyhhLCBxKTtcbiAgICB2YXIgbSA9IHM7XG4gICAgd2hpbGUgKHQuY21wKG9uZSkgIT09IDApIHtcbiAgICAgIHZhciB0bXAgPSB0O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IHRtcC5jbXAob25lKSAhPT0gMDsgaSsrKSB7XG4gICAgICAgIHRtcCA9IHRtcC5yZWRTcXIoKTtcbiAgICAgIH1cbiAgICAgIGFzc2VydChpIDwgbSk7XG4gICAgICB2YXIgYiA9IHRoaXMucG93KGMsIG5ldyBCTigxKS5pdXNobG4obSAtIGkgLSAxKSk7XG5cbiAgICAgIHIgPSByLnJlZE11bChiKTtcbiAgICAgIGMgPSBiLnJlZFNxcigpO1xuICAgICAgdCA9IHQucmVkTXVsKGMpO1xuICAgICAgbSA9IGk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5pbnZtID0gZnVuY3Rpb24gaW52bSAoYSkge1xuICAgIHZhciBpbnYgPSBhLl9pbnZtcCh0aGlzLm0pO1xuICAgIGlmIChpbnYubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIGludi5uZWdhdGl2ZSA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5pbW9kKGludikucmVkTmVnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmltb2QoaW52KTtcbiAgICB9XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiBwb3cgKGEsIG51bSkge1xuICAgIGlmIChudW0uaXNaZXJvKCkpIHJldHVybiBuZXcgQk4oMSkudG9SZWQodGhpcyk7XG4gICAgaWYgKG51bS5jbXBuKDEpID09PSAwKSByZXR1cm4gYS5jbG9uZSgpO1xuXG4gICAgdmFyIHdpbmRvd1NpemUgPSA0O1xuICAgIHZhciB3bmQgPSBuZXcgQXJyYXkoMSA8PCB3aW5kb3dTaXplKTtcbiAgICB3bmRbMF0gPSBuZXcgQk4oMSkudG9SZWQodGhpcyk7XG4gICAgd25kWzFdID0gYTtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHduZC5sZW5ndGg7IGkrKykge1xuICAgICAgd25kW2ldID0gdGhpcy5tdWwod25kW2kgLSAxXSwgYSk7XG4gICAgfVxuXG4gICAgdmFyIHJlcyA9IHduZFswXTtcbiAgICB2YXIgY3VycmVudCA9IDA7XG4gICAgdmFyIGN1cnJlbnRMZW4gPSAwO1xuICAgIHZhciBzdGFydCA9IG51bS5iaXRMZW5ndGgoKSAlIDI2O1xuICAgIGlmIChzdGFydCA9PT0gMCkge1xuICAgICAgc3RhcnQgPSAyNjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBudW0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciB3b3JkID0gbnVtLndvcmRzW2ldO1xuICAgICAgZm9yICh2YXIgaiA9IHN0YXJ0IC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgdmFyIGJpdCA9ICh3b3JkID4+IGopICYgMTtcbiAgICAgICAgaWYgKHJlcyAhPT0gd25kWzBdKSB7XG4gICAgICAgICAgcmVzID0gdGhpcy5zcXIocmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiaXQgPT09IDAgJiYgY3VycmVudCA9PT0gMCkge1xuICAgICAgICAgIGN1cnJlbnRMZW4gPSAwO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudCA8PD0gMTtcbiAgICAgICAgY3VycmVudCB8PSBiaXQ7XG4gICAgICAgIGN1cnJlbnRMZW4rKztcbiAgICAgICAgaWYgKGN1cnJlbnRMZW4gIT09IHdpbmRvd1NpemUgJiYgKGkgIT09IDAgfHwgaiAhPT0gMCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIHJlcyA9IHRoaXMubXVsKHJlcywgd25kW2N1cnJlbnRdKTtcbiAgICAgICAgY3VycmVudExlbiA9IDA7XG4gICAgICAgIGN1cnJlbnQgPSAwO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAyNjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuY29udmVydFRvID0gZnVuY3Rpb24gY29udmVydFRvIChudW0pIHtcbiAgICB2YXIgciA9IG51bS51bW9kKHRoaXMubSk7XG5cbiAgICByZXR1cm4gciA9PT0gbnVtID8gci5jbG9uZSgpIDogcjtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmNvbnZlcnRGcm9tID0gZnVuY3Rpb24gY29udmVydEZyb20gKG51bSkge1xuICAgIHZhciByZXMgPSBudW0uY2xvbmUoKTtcbiAgICByZXMucmVkID0gbnVsbDtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8vXG4gIC8vIE1vbnRnb21lcnkgbWV0aG9kIGVuZ2luZVxuICAvL1xuXG4gIEJOLm1vbnQgPSBmdW5jdGlvbiBtb250IChudW0pIHtcbiAgICByZXR1cm4gbmV3IE1vbnQobnVtKTtcbiAgfTtcblxuICBmdW5jdGlvbiBNb250IChtKSB7XG4gICAgUmVkLmNhbGwodGhpcywgbSk7XG5cbiAgICB0aGlzLnNoaWZ0ID0gdGhpcy5tLmJpdExlbmd0aCgpO1xuICAgIGlmICh0aGlzLnNoaWZ0ICUgMjYgIT09IDApIHtcbiAgICAgIHRoaXMuc2hpZnQgKz0gMjYgLSAodGhpcy5zaGlmdCAlIDI2KTtcbiAgICB9XG5cbiAgICB0aGlzLnIgPSBuZXcgQk4oMSkuaXVzaGxuKHRoaXMuc2hpZnQpO1xuICAgIHRoaXMucjIgPSB0aGlzLmltb2QodGhpcy5yLnNxcigpKTtcbiAgICB0aGlzLnJpbnYgPSB0aGlzLnIuX2ludm1wKHRoaXMubSk7XG5cbiAgICB0aGlzLm1pbnYgPSB0aGlzLnJpbnYubXVsKHRoaXMucikuaXN1Ym4oMSkuZGl2KHRoaXMubSk7XG4gICAgdGhpcy5taW52ID0gdGhpcy5taW52LnVtb2QodGhpcy5yKTtcbiAgICB0aGlzLm1pbnYgPSB0aGlzLnIuc3ViKHRoaXMubWludik7XG4gIH1cbiAgaW5oZXJpdHMoTW9udCwgUmVkKTtcblxuICBNb250LnByb3RvdHlwZS5jb252ZXJ0VG8gPSBmdW5jdGlvbiBjb252ZXJ0VG8gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmltb2QobnVtLnVzaGxuKHRoaXMuc2hpZnQpKTtcbiAgfTtcblxuICBNb250LnByb3RvdHlwZS5jb252ZXJ0RnJvbSA9IGZ1bmN0aW9uIGNvbnZlcnRGcm9tIChudW0pIHtcbiAgICB2YXIgciA9IHRoaXMuaW1vZChudW0ubXVsKHRoaXMucmludikpO1xuICAgIHIucmVkID0gbnVsbDtcbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICBNb250LnByb3RvdHlwZS5pbXVsID0gZnVuY3Rpb24gaW11bCAoYSwgYikge1xuICAgIGlmIChhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpIHtcbiAgICAgIGEud29yZHNbMF0gPSAwO1xuICAgICAgYS5sZW5ndGggPSAxO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgdmFyIHQgPSBhLmltdWwoYik7XG4gICAgdmFyIGMgPSB0Lm1hc2tuKHRoaXMuc2hpZnQpLm11bCh0aGlzLm1pbnYpLmltYXNrbih0aGlzLnNoaWZ0KS5tdWwodGhpcy5tKTtcbiAgICB2YXIgdSA9IHQuaXN1YihjKS5pdXNocm4odGhpcy5zaGlmdCk7XG4gICAgdmFyIHJlcyA9IHU7XG5cbiAgICBpZiAodS5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMgPSB1LmlzdWIodGhpcy5tKTtcbiAgICB9IGVsc2UgaWYgKHUuY21wbigwKSA8IDApIHtcbiAgICAgIHJlcyA9IHUuaWFkZCh0aGlzLm0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuX2ZvcmNlUmVkKHRoaXMpO1xuICB9O1xuXG4gIE1vbnQucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uIG11bCAoYSwgYikge1xuICAgIGlmIChhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpIHJldHVybiBuZXcgQk4oMCkuX2ZvcmNlUmVkKHRoaXMpO1xuXG4gICAgdmFyIHQgPSBhLm11bChiKTtcbiAgICB2YXIgYyA9IHQubWFza24odGhpcy5zaGlmdCkubXVsKHRoaXMubWludikuaW1hc2tuKHRoaXMuc2hpZnQpLm11bCh0aGlzLm0pO1xuICAgIHZhciB1ID0gdC5pc3ViKGMpLml1c2hybih0aGlzLnNoaWZ0KTtcbiAgICB2YXIgcmVzID0gdTtcbiAgICBpZiAodS5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMgPSB1LmlzdWIodGhpcy5tKTtcbiAgICB9IGVsc2UgaWYgKHUuY21wbigwKSA8IDApIHtcbiAgICAgIHJlcyA9IHUuaWFkZCh0aGlzLm0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuX2ZvcmNlUmVkKHRoaXMpO1xuICB9O1xuXG4gIE1vbnQucHJvdG90eXBlLmludm0gPSBmdW5jdGlvbiBpbnZtIChhKSB7XG4gICAgLy8gKEFSKV4tMSAqIFJeMiA9IChBXi0xICogUl4tMSkgKiBSXjIgPSBBXi0xICogUlxuICAgIHZhciByZXMgPSB0aGlzLmltb2QoYS5faW52bXAodGhpcy5tKS5tdWwodGhpcy5yMikpO1xuICAgIHJldHVybiByZXMuX2ZvcmNlUmVkKHRoaXMpO1xuICB9O1xufSkodHlwZW9mIG1vZHVsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbW9kdWxlLCB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JuLmpzL2xpYi9ibi5qc1xuLy8gbW9kdWxlIGlkID0gMzk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB3ZWIzIGZyb20gXCIuL3dlYjNcIjtcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSBcIi4vYnVpbGQvQ2FtcGFpZ25GYWN0b3J5Lmpzb25cIjtcblxuY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gIEpTT04ucGFyc2UoQ2FtcGFpZ25GYWN0b3J5LmludGVyZmFjZSksXG4gIFwiMHhkMjc5YzYxYkU3QzRDODYxNTk3YzliMjVDMDIxN0E5ZThhY2EwMWQyXCJcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vZmFjdG9yeS5qcyIsImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyIsIi8qXG4gICAgVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuICAgIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICAgIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICAgIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gICAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICAgIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAgICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICAgIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAgICBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuICAgIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICAgIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiovXG4vKipcbiAqIEBmaWxlIGluZGV4LmpzXG4gKiBAYXV0aG9yczpcbiAqICAgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqICAgR2F2IFdvb2QgPGdhdkBldGhjb3JlLmlvPlxuICogICBKZWZmcmV5IFdpbGNrZSA8amVmZnJleS53aWxja2VAZXRoZXJldW0ub3JnPlxuICogICBNYXJlayBLb3Rld2ljeiA8bWFyZWtAZXRoY29yZS5pbz5cbiAqICAgTWFyaWFuIE9hbmNlYSA8bWFyaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL2xlcm5hLmpzb24nKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vcGFja2FnZXMvd2ViMy1jb3JlJyk7XG5cbnZhciBFdGggPSByZXF1aXJlKCcuLi9wYWNrYWdlcy93ZWIzLWV0aCcpO1xudmFyIE5ldCA9IHJlcXVpcmUoJy4uL3BhY2thZ2VzL3dlYjMtbmV0Jyk7XG52YXIgUGVyc29uYWwgPSByZXF1aXJlKCcuLi9wYWNrYWdlcy93ZWIzLWV0aC1wZXJzb25hbCcpO1xudmFyIFNoaCA9IHJlcXVpcmUoJy4uL3BhY2thZ2VzL3dlYjMtc2hoJyk7XG52YXIgQnp6ID0gcmVxdWlyZSgnLi4vcGFja2FnZXMvd2ViMy1ienonKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vcGFja2FnZXMvd2ViMy11dGlscycpO1xuXG5cblxudmFyIFdlYjMgPSBmdW5jdGlvbiBXZWIzKCkge1xuXG4gICAgLy8gc2V0cyBfcmVxdWVzdG1hbmFnZXIgZXRjXG4gICAgY29yZS5wYWNrYWdlSW5pdCh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuXG5cbiAgICB0aGlzLmV0aCA9IG5ldyBFdGgodGhpcyk7XG4gICAgdGhpcy5zaGggPSBuZXcgU2hoKHRoaXMpO1xuICAgIHRoaXMuYnp6ID0gbmV3IEJ6eih0aGlzKTtcblxuICAgIHRoaXMudXRpbHMgPSB1dGlscztcblxuICAgIC8vIG92ZXJ3cml0ZSBwYWNrYWdlIHNldFByb3ZpZGVyXG4gICAgdGhpcy5zZXRQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlciwgbmV0KSB7XG4gICAgICAgIHRoaXMuX3JlcXVlc3RNYW5hZ2VyLnNldFByb3ZpZGVyKHByb3ZpZGVyLCBuZXQpO1xuICAgICAgICB0aGlzLl9wcm92aWRlciA9IHRoaXMuX3JlcXVlc3RNYW5hZ2VyLnByb3ZpZGVyO1xuXG4gICAgICAgIHRoaXMuZXRoLnNldFByb3ZpZGVyKHByb3ZpZGVyLCBuZXQpO1xuICAgICAgICB0aGlzLmV0aC5uZXQuc2V0UHJvdmlkZXIocHJvdmlkZXIsIG5ldCk7XG4gICAgICAgIHRoaXMuZXRoLnBlcnNvbmFsLnNldFByb3ZpZGVyKHByb3ZpZGVyLCBuZXQpO1xuXG4gICAgICAgIHRoaXMuc2hoLnNldFByb3ZpZGVyKHByb3ZpZGVyLCBuZXQpO1xuICAgICAgICB0aGlzLnNoaC5uZXQuc2V0UHJvdmlkZXIocHJvdmlkZXIsIG5ldCk7XG5cbiAgICAgICAgdGhpcy5ienouc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59O1xuXG5XZWIzLnByb3RvdHlwZS52ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuXG5jb3JlLmFkZFByb3ZpZGVycyhXZWIzKTtcblxuXG5XZWIzLm1vZHVsZXMgPSB7XG4gICAgRXRoOiBFdGgsXG4gICAgTmV0OiBOZXQsXG4gICAgUGVyc29uYWw6IFBlcnNvbmFsLFxuICAgIFNoaDogU2hoLFxuICAgIEJ6ejogQnp6XG59O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBXZWIzO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93ZWIzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1widmVyc2lvblwiOlwiMS4wLjAtYmV0YTJcIixcImxlcm5hXCI6XCIyLjAuMFwiLFwicGFja2FnZXNcIjpbXCJwYWNrYWdlcy8qXCJdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3dlYjMvbGVybmEuanNvblxuLy8gbW9kdWxlIGlkID0gMzk5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qXG4gICAgVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuICAgIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICAgIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICAgIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gICAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICAgIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAgICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICAgIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAgICBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuICAgIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICAgIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiovXG4vKipcbiAqIEBmaWxlIGluZGV4LmpzXG4gKiBAYXV0aG9yIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiBAZGF0ZSAyMDE3XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHJlcXVlc3RNYW5hZ2VyID0gcmVxdWlyZSgnd2ViMy1yZXF1ZXN0TWFuYWdlcicpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4vZXh0ZW5kLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHBhY2thZ2VJbml0OiBmdW5jdGlvbiAocGtnLCBhcmdzKSB7XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBpbnN0YW50aWF0ZSB1c2luZyB0aGUgXCJuZXdcIiBrZXl3b3JkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKCFhcmdzWzBdKSB7XG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHBhc3MgaW4gYSBwcm92aWRlciBhcyBhcmd1bWVudCEnKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIG1ha2Ugd3JpdGUgb25seSBwcm9wZXJ0eSBvZiBwa2cucHJvdmlkZXJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBrZywgJ2N1cnJlbnRQcm92aWRlcicsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwa2cuX3Byb3ZpZGVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwa2cuX3Byb3ZpZGVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW5oZXJpdCBmcm9tIHdlYjMgdW1icmVsbGEgcGFja2FnZVxuICAgICAgICBpZiAoYXJnc1swXSAmJiBhcmdzWzBdLl9yZXF1ZXN0TWFuYWdlcikge1xuICAgICAgICAgICAgcGtnLl9yZXF1ZXN0TWFuYWdlciA9IG5ldyByZXF1ZXN0TWFuYWdlci5NYW5hZ2VyKGFyZ3NbMF0uY3VycmVudFByb3ZpZGVyKTtcblxuICAgICAgICAvLyBzZXQgcmVxdWVzdG1hbmFnZXIgb24gcGFja2FnZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGtnLl9yZXF1ZXN0TWFuYWdlciA9IG5ldyByZXF1ZXN0TWFuYWdlci5NYW5hZ2VyKCk7XG4gICAgICAgICAgICBwa2cuX3JlcXVlc3RNYW5hZ2VyLnNldFByb3ZpZGVyKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGdpdmVuUHJvdmlkZXJcbiAgICAgICAgcGtnLmdpdmVuUHJvdmlkZXIgPSByZXF1ZXN0TWFuYWdlci5NYW5hZ2VyLmdpdmVuUHJvdmlkZXI7XG4gICAgICAgIHBrZy5wcm92aWRlcnMgPSByZXF1ZXN0TWFuYWdlci5NYW5hZ2VyLnByb3ZpZGVycztcblxuICAgICAgICAgcGtnLl9wcm92aWRlciA9ICBwa2cuX3JlcXVlc3RNYW5hZ2VyLnByb3ZpZGVyO1xuXG4gICAgICAgIC8vIGFkZCBTRVRQUk9WSURFUiBmdW5jdGlvblxuICAgICAgICBwa2cuc2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvdmlkZXIsIG5ldCkge1xuICAgICAgICAgICAgcGtnLl9yZXF1ZXN0TWFuYWdlci5zZXRQcm92aWRlcihwcm92aWRlciwgbmV0KTtcbiAgICAgICAgICAgIHBrZy5fcHJvdmlkZXIgPSBwa2cuX3JlcXVlc3RNYW5hZ2VyLnByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYXR0YWNoIGJhdGNoIHJlcXVlc3QgY3JlYXRpb25cbiAgICAgICAgcGtnLkJhdGNoUmVxdWVzdCA9IHJlcXVlc3RNYW5hZ2VyLkJhdGNoTWFuYWdlci5iaW5kKG51bGwsIHBrZy5fcmVxdWVzdE1hbmFnZXIpO1xuXG4gICAgICAgIC8vIGF0dGFjaCBleHRlbmQgZnVuY3Rpb25cbiAgICAgICAgcGtnLmV4dGVuZCA9IGV4dGVuZChwa2cpO1xuICAgIH0sXG4gICAgYWRkUHJvdmlkZXJzOiBmdW5jdGlvbiAocGtnKSB7XG4gICAgICAgIHBrZy5naXZlblByb3ZpZGVyID0gcmVxdWVzdE1hbmFnZXIuTWFuYWdlci5naXZlblByb3ZpZGVyO1xuICAgICAgICBwa2cucHJvdmlkZXJzID0gcmVxdWVzdE1hbmFnZXIuTWFuYWdlci5wcm92aWRlcnM7XG4gICAgfVxufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2ViMy9wYWNrYWdlcy93ZWIzLWNvcmUvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLypcbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG4vKipcbiAqIEBmaWxlIGV4dGVuZC5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBmb3JtYXR0ZXJzID0gcmVxdWlyZSgnd2ViMy1jb3JlLWhlbHBlcnMnKS5mb3JtYXR0ZXJzO1xudmFyIE1ldGhvZCA9IHJlcXVpcmUoJ3dlYjMtY29yZS1tZXRob2QnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJ3dlYjMtdXRpbHMnKTtcblxuXG52YXIgZXh0ZW5kID0gZnVuY3Rpb24gKHBja2cpIHtcbiAgICAvKiBqc2hpbnQgbWF4Y29tcGxleGl0eTo1ICovXG4gICAgdmFyIGV4ID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xuXG4gICAgICAgIHZhciBleHRlbmRlZE9iamVjdDtcbiAgICAgICAgaWYgKGV4dGVuc2lvbi5wcm9wZXJ0eSkge1xuICAgICAgICAgICAgaWYgKCFwY2tnW2V4dGVuc2lvbi5wcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBwY2tnW2V4dGVuc2lvbi5wcm9wZXJ0eV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4dGVuZGVkT2JqZWN0ID0gcGNrZ1tleHRlbnNpb24ucHJvcGVydHldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXh0ZW5kZWRPYmplY3QgPSBwY2tnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dGVuc2lvbi5tZXRob2RzKSB7XG4gICAgICAgICAgICBleHRlbnNpb24ubWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZighKG1ldGhvZCBpbnN0YW5jZW9mIE1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gbmV3IE1ldGhvZChtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1ldGhvZC5hdHRhY2hUb09iamVjdChleHRlbmRlZE9iamVjdCk7XG4gICAgICAgICAgICAgICAgbWV0aG9kLnNldFJlcXVlc3RNYW5hZ2VyKHBja2cuX3JlcXVlc3RNYW5hZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBja2c7XG4gICAgfTtcblxuICAgIGV4LmZvcm1hdHRlcnMgPSBmb3JtYXR0ZXJzO1xuICAgIGV4LnV0aWxzID0gdXRpbHM7XG4gICAgZXguTWV0aG9kID0gTWV0aG9kO1xuXG4gICAgcmV0dXJuIGV4O1xufTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93ZWIzL3BhY2thZ2VzL3dlYjMtY29yZS9zcmMvZXh0ZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLypcbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG4vKipcbiAqIEBmaWxlIGluZGV4LmpzXG4gKiBAYXV0aG9yIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiBAZGF0ZSAyMDE3XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIGNvcmUgPSByZXF1aXJlKCd3ZWIzLWNvcmUnKTtcbnZhciBoZWxwZXJzID0gcmVxdWlyZSgnd2ViMy1jb3JlLWhlbHBlcnMnKTtcbnZhciBTdWJzY3JpcHRpb25zID0gcmVxdWlyZSgnd2ViMy1jb3JlLXN1YnNjcmlwdGlvbnMnKS5zdWJzY3JpcHRpb25zO1xudmFyIE1ldGhvZCA9IHJlcXVpcmUoJ3dlYjMtY29yZS1tZXRob2QnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJ3dlYjMtdXRpbHMnKTtcbnZhciBOZXQgPSByZXF1aXJlKCd3ZWIzLW5ldCcpO1xuXG52YXIgUGVyc29uYWwgPSByZXF1aXJlKCd3ZWIzLWV0aC1wZXJzb25hbCcpO1xudmFyIENvbnRyYWN0ID0gcmVxdWlyZSgnd2ViMy1ldGgtY29udHJhY3QnKTtcbnZhciBJYmFuID0gcmVxdWlyZSgnd2ViMy1ldGgtaWJhbicpO1xudmFyIEFjY291bnRzID0gcmVxdWlyZSgnd2ViMy1ldGgtYWNjb3VudHMnKTtcbnZhciBhYmkgPSByZXF1aXJlKCd3ZWIzLWV0aC1hYmknKTtcblxuXG5cbnZhciBnZXROZXR3b3JrVHlwZSA9IHJlcXVpcmUoJy4vZ2V0TmV0d29ya1R5cGUuanMnKTtcblxudmFyIGZvcm1hdHRlcnMgPSBoZWxwZXJzLmZvcm1hdHRlcnM7XG5cblxudmFyIGJsb2NrQ2FsbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIChfLmlzU3RyaW5nKGFyZ3NbMF0pICYmIGFyZ3NbMF0uaW5kZXhPZignMHgnKSA9PT0gMCkgPyBcImV0aF9nZXRCbG9ja0J5SGFzaFwiIDogXCJldGhfZ2V0QmxvY2tCeU51bWJlclwiO1xufTtcblxudmFyIHRyYW5zYWN0aW9uRnJvbUJsb2NrQ2FsbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIChfLmlzU3RyaW5nKGFyZ3NbMF0pICYmIGFyZ3NbMF0uaW5kZXhPZignMHgnKSA9PT0gMCkgPyAnZXRoX2dldFRyYW5zYWN0aW9uQnlCbG9ja0hhc2hBbmRJbmRleCcgOiAnZXRoX2dldFRyYW5zYWN0aW9uQnlCbG9ja051bWJlckFuZEluZGV4Jztcbn07XG5cbnZhciB1bmNsZUNhbGwgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiAoXy5pc1N0cmluZyhhcmdzWzBdKSAmJiBhcmdzWzBdLmluZGV4T2YoJzB4JykgPT09IDApID8gJ2V0aF9nZXRVbmNsZUJ5QmxvY2tIYXNoQW5kSW5kZXgnIDogJ2V0aF9nZXRVbmNsZUJ5QmxvY2tOdW1iZXJBbmRJbmRleCc7XG59O1xuXG52YXIgZ2V0QmxvY2tUcmFuc2FjdGlvbkNvdW50Q2FsbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIChfLmlzU3RyaW5nKGFyZ3NbMF0pICYmIGFyZ3NbMF0uaW5kZXhPZignMHgnKSA9PT0gMCkgPyAnZXRoX2dldEJsb2NrVHJhbnNhY3Rpb25Db3VudEJ5SGFzaCcgOiAnZXRoX2dldEJsb2NrVHJhbnNhY3Rpb25Db3VudEJ5TnVtYmVyJztcbn07XG5cbnZhciB1bmNsZUNvdW50Q2FsbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIChfLmlzU3RyaW5nKGFyZ3NbMF0pICYmIGFyZ3NbMF0uaW5kZXhPZignMHgnKSA9PT0gMCkgPyAnZXRoX2dldFVuY2xlQ291bnRCeUJsb2NrSGFzaCcgOiAnZXRoX2dldFVuY2xlQ291bnRCeUJsb2NrTnVtYmVyJztcbn07XG5cblxudmFyIEV0aCA9IGZ1bmN0aW9uIEV0aCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gc2V0cyBfcmVxdWVzdG1hbmFnZXJcbiAgICBjb3JlLnBhY2thZ2VJbml0KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmNsZWFyU3Vic2NyaXB0aW9ucyA9IF90aGlzLl9yZXF1ZXN0TWFuYWdlci5jbGVhclN1YnNjcmlwdGlvbnM7XG5cbiAgICBtZXRob2RzKCkuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgbWV0aG9kLmF0dGFjaFRvT2JqZWN0KF90aGlzKTtcbiAgICAgICAgbWV0aG9kLnNldFJlcXVlc3RNYW5hZ2VyKF90aGlzLl9yZXF1ZXN0TWFuYWdlciwgX3RoaXMpOyAvLyBzZWNvbmQgcGFyYW0gbWVhbnMgaXMgRXRoIChuZWNlc3NhcnkgZm9yIHByb21pRXZlbnQpXG4gICAgfSk7XG5cbiAgICAvLyBhZGQgbmV0XG4gICAgdGhpcy5uZXQgPSBuZXcgTmV0KHRoaXMuY3VycmVudFByb3ZpZGVyKTtcblxuICAgIC8vIGFkZCBndWVzcyBjaGFpblxuICAgIHRoaXMubmV0LmdldE5ldHdvcmtUeXBlID0gZ2V0TmV0d29ya1R5cGUuYmluZCh0aGlzKTtcblxuXG4gICAgLy8gYWRkIGFjY291bnRzXG4gICAgdGhpcy5hY2NvdW50cyA9IG5ldyBBY2NvdW50cyh0aGlzKTtcblxuICAgIC8vIGFkZCBwZXJzb25hbFxuICAgIHRoaXMucGVyc29uYWwgPSBuZXcgUGVyc29uYWwodGhpcy5jdXJyZW50UHJvdmlkZXIpO1xuXG4gICAgLy8gYWRkIGNvbnRyYWN0XG4gICAgdGhpcy5Db250cmFjdCA9IENvbnRyYWN0O1xuICAgIHRoaXMuQ29udHJhY3QucHJvdG90eXBlLl9ldGggPSB0aGlzO1xuXG4gICAgLy8gYWRkIElCQU5cbiAgICB0aGlzLkliYW4gPSBJYmFuO1xuXG4gICAgLy8gYWRkIEFCSVxuICAgIHRoaXMuYWJpID0gYWJpO1xuXG59O1xuXG5jb3JlLmFkZFByb3ZpZGVycyhFdGgpO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdGgucHJvdG90eXBlLCAnZGVmYXVsdEJsb2NrJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGVscGVycy5jb25maWcuZGVmYXVsdEJsb2NrO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGhlbHBlcnMuY29uZmlnLmRlZmF1bHRCbG9jayA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXRoLnByb3RvdHlwZSwgJ2RlZmF1bHRBY2NvdW50Jywge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGVscGVycy5jb25maWcuZGVmYXVsdEFjY291bnQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaGVscGVycy5jb25maWcuZGVmYXVsdEFjY291bnQgPSB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG59KTtcblxudmFyIG1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgIHZhciBnZXRWZXJzaW9uID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdnZXRQcm90b2NvbFZlcnNpb24nLFxuICAgICAgICBjYWxsOiAnZXRoX3Byb3RvY29sVmVyc2lvbicsXG4gICAgICAgIHBhcmFtczogMFxuICAgIH0pO1xuXG4gICAgdmFyIGdldENvaW5iYXNlID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdnZXRDb2luYmFzZScsXG4gICAgICAgIGNhbGw6ICdldGhfY29pbmJhc2UnLFxuICAgICAgICBwYXJhbXM6IDBcbiAgICB9KTtcblxuICAgIHZhciBnZXRNaW5pbmcgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2lzTWluaW5nJyxcbiAgICAgICAgY2FsbDogJ2V0aF9taW5pbmcnLFxuICAgICAgICBwYXJhbXM6IDBcbiAgICB9KTtcblxuICAgIHZhciBnZXRIYXNocmF0ZSA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnZ2V0SGFzaHJhdGUnLFxuICAgICAgICBjYWxsOiAnZXRoX2hhc2hyYXRlJyxcbiAgICAgICAgcGFyYW1zOiAwLFxuICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IHV0aWxzLmhleFRvTnVtYmVyXG4gICAgfSk7XG5cbiAgICB2YXIgaXNTeW5jaW5nID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdpc1N5bmNpbmcnLFxuICAgICAgICBjYWxsOiAnZXRoX3N5bmNpbmcnLFxuICAgICAgICBwYXJhbXM6IDAsXG4gICAgICAgIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRTeW5jaW5nRm9ybWF0dGVyXG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0R2FzUHJpY2UgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldEdhc1ByaWNlJyxcbiAgICAgICAgY2FsbDogJ2V0aF9nYXNQcmljZScsXG4gICAgICAgIHBhcmFtczogMCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBmb3JtYXR0ZXJzLm91dHB1dEJpZ051bWJlckZvcm1hdHRlclxuICAgIH0pO1xuXG4gICAgdmFyIGdldEFjY291bnRzID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdnZXRBY2NvdW50cycsXG4gICAgICAgIGNhbGw6ICdldGhfYWNjb3VudHMnLFxuICAgICAgICBwYXJhbXM6IDAsXG4gICAgICAgIG91dHB1dEZvcm1hdHRlcjogdXRpbHMudG9DaGVja3N1bUFkZHJlc3NcbiAgICAgICAgfSk7XG5cbiAgICB2YXIgZ2V0QmxvY2tOdW1iZXIgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldEJsb2NrTnVtYmVyJyxcbiAgICAgICAgY2FsbDogJ2V0aF9ibG9ja051bWJlcicsXG4gICAgICAgIHBhcmFtczogMCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiB1dGlscy5oZXhUb051bWJlclxuICAgIH0pO1xuXG4gICAgdmFyIGdldEJhbGFuY2UgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldEJhbGFuY2UnLFxuICAgICAgICBjYWxsOiAnZXRoX2dldEJhbGFuY2UnLFxuICAgICAgICBwYXJhbXM6IDIsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dEFkZHJlc3NGb3JtYXR0ZXIsIGZvcm1hdHRlcnMuaW5wdXREZWZhdWx0QmxvY2tOdW1iZXJGb3JtYXR0ZXJdLFxuICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IGZvcm1hdHRlcnMub3V0cHV0QmlnTnVtYmVyRm9ybWF0dGVyXG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0U3RvcmFnZUF0ID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdnZXRTdG9yYWdlQXQnLFxuICAgICAgICBjYWxsOiAnZXRoX2dldFN0b3JhZ2VBdCcsXG4gICAgICAgIHBhcmFtczogMyxcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtmb3JtYXR0ZXJzLmlucHV0QWRkcmVzc0Zvcm1hdHRlciwgdXRpbHMubnVtYmVyVG9IZXgsIGZvcm1hdHRlcnMuaW5wdXREZWZhdWx0QmxvY2tOdW1iZXJGb3JtYXR0ZXJdXG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0Q29kZSA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnZ2V0Q29kZScsXG4gICAgICAgIGNhbGw6ICdldGhfZ2V0Q29kZScsXG4gICAgICAgIHBhcmFtczogMixcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtmb3JtYXR0ZXJzLmlucHV0QWRkcmVzc0Zvcm1hdHRlciwgZm9ybWF0dGVycy5pbnB1dERlZmF1bHRCbG9ja051bWJlckZvcm1hdHRlcl1cbiAgICB9KTtcblxuICAgIHZhciBnZXRCbG9jayA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnZ2V0QmxvY2snLFxuICAgICAgICBjYWxsOiBibG9ja0NhbGwsXG4gICAgICAgIHBhcmFtczogMixcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtmb3JtYXR0ZXJzLmlucHV0QmxvY2tOdW1iZXJGb3JtYXR0ZXIsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuICEhdmFsOyB9XSxcbiAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBmb3JtYXR0ZXJzLm91dHB1dEJsb2NrRm9ybWF0dGVyXG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0VW5jbGUgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldFVuY2xlJyxcbiAgICAgICAgY2FsbDogdW5jbGVDYWxsLFxuICAgICAgICBwYXJhbXM6IDIsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dEJsb2NrTnVtYmVyRm9ybWF0dGVyLCB1dGlscy5udW1iZXJUb0hleF0sXG4gICAgICAgIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRCbG9ja0Zvcm1hdHRlcixcblxuICAgIH0pO1xuXG4gICAgdmFyIGdldEJsb2NrVHJhbnNhY3Rpb25Db3VudCA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnZ2V0QmxvY2tUcmFuc2FjdGlvbkNvdW50JyxcbiAgICAgICAgY2FsbDogZ2V0QmxvY2tUcmFuc2FjdGlvbkNvdW50Q2FsbCxcbiAgICAgICAgcGFyYW1zOiAxLFxuICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRCbG9ja051bWJlckZvcm1hdHRlcl0sXG4gICAgICAgIG91dHB1dEZvcm1hdHRlcjogdXRpbHMuaGV4VG9OdW1iZXJcbiAgICB9KTtcblxuICAgIHZhciBnZXRCbG9ja1VuY2xlQ291bnQgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldEJsb2NrVW5jbGVDb3VudCcsXG4gICAgICAgIGNhbGw6IHVuY2xlQ291bnRDYWxsLFxuICAgICAgICBwYXJhbXM6IDEsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dEJsb2NrTnVtYmVyRm9ybWF0dGVyXSxcbiAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiB1dGlscy5oZXhUb051bWJlclxuICAgIH0pO1xuXG4gICAgdmFyIGdldFRyYW5zYWN0aW9uID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdnZXRUcmFuc2FjdGlvbicsXG4gICAgICAgIGNhbGw6ICdldGhfZ2V0VHJhbnNhY3Rpb25CeUhhc2gnLFxuICAgICAgICBwYXJhbXM6IDEsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbbnVsbF0sXG4gICAgICAgIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRUcmFuc2FjdGlvbkZvcm1hdHRlclxuICAgIH0pO1xuXG4gICAgdmFyIGdldFRyYW5zYWN0aW9uRnJvbUJsb2NrID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdnZXRUcmFuc2FjdGlvbkZyb21CbG9jaycsXG4gICAgICAgIGNhbGw6IHRyYW5zYWN0aW9uRnJvbUJsb2NrQ2FsbCxcbiAgICAgICAgcGFyYW1zOiAyLFxuICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRCbG9ja051bWJlckZvcm1hdHRlciwgdXRpbHMubnVtYmVyVG9IZXhdLFxuICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IGZvcm1hdHRlcnMub3V0cHV0VHJhbnNhY3Rpb25Gb3JtYXR0ZXJcbiAgICB9KTtcblxuICAgIHZhciBnZXRUcmFuc2FjdGlvblJlY2VpcHQgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldFRyYW5zYWN0aW9uUmVjZWlwdCcsXG4gICAgICAgIGNhbGw6ICdldGhfZ2V0VHJhbnNhY3Rpb25SZWNlaXB0JyxcbiAgICAgICAgcGFyYW1zOiAxLFxuICAgICAgICBpbnB1dEZvcm1hdHRlcjogW251bGxdLFxuICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IGZvcm1hdHRlcnMub3V0cHV0VHJhbnNhY3Rpb25SZWNlaXB0Rm9ybWF0dGVyXG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0VHJhbnNhY3Rpb25Db3VudCA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnZ2V0VHJhbnNhY3Rpb25Db3VudCcsXG4gICAgICAgIGNhbGw6ICdldGhfZ2V0VHJhbnNhY3Rpb25Db3VudCcsXG4gICAgICAgIHBhcmFtczogMixcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtudWxsLCBmb3JtYXR0ZXJzLmlucHV0RGVmYXVsdEJsb2NrTnVtYmVyRm9ybWF0dGVyXSxcbiAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiB1dGlscy5oZXhUb051bWJlclxuICAgIH0pO1xuXG4gICAgdmFyIHNlbmRTaWduZWRUcmFuc2FjdGlvbiA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnc2VuZFNpZ25lZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgY2FsbDogJ2V0aF9zZW5kUmF3VHJhbnNhY3Rpb24nLFxuICAgICAgICBwYXJhbXM6IDEsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbbnVsbF1cbiAgICB9KTtcblxuICAgIHZhciBzaWduVHJhbnNhY3Rpb24gPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ3NpZ25UcmFuc2FjdGlvbicsXG4gICAgICAgIGNhbGw6ICdldGhfc2lnblRyYW5zYWN0aW9uJyxcbiAgICAgICAgcGFyYW1zOiAxLFxuICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRUcmFuc2FjdGlvbkZvcm1hdHRlcl1cbiAgICB9KTtcblxuICAgIHZhciBzZW5kVHJhbnNhY3Rpb24gPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ3NlbmRUcmFuc2FjdGlvbicsXG4gICAgICAgIGNhbGw6ICdldGhfc2VuZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgcGFyYW1zOiAxLFxuICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRUcmFuc2FjdGlvbkZvcm1hdHRlcl1cbiAgICB9KTtcblxuICAgIHZhciBzaWduID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdzaWduJyxcbiAgICAgICAgY2FsbDogJ2V0aF9zaWduJyxcbiAgICAgICAgcGFyYW1zOiAyLFxuICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRTaWduRm9ybWF0dGVyLCBmb3JtYXR0ZXJzLmlucHV0QWRkcmVzc0Zvcm1hdHRlcl0sXG4gICAgICAgIHRyYW5zZm9ybVBheWxvYWQ6IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgICAgICBwYXlsb2FkLnBhcmFtcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNhbGwgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2NhbGwnLFxuICAgICAgICBjYWxsOiAnZXRoX2NhbGwnLFxuICAgICAgICBwYXJhbXM6IDIsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dENhbGxGb3JtYXR0ZXIsIGZvcm1hdHRlcnMuaW5wdXREZWZhdWx0QmxvY2tOdW1iZXJGb3JtYXR0ZXJdXG4gICAgfSk7XG5cbiAgICB2YXIgZXN0aW1hdGVHYXMgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2VzdGltYXRlR2FzJyxcbiAgICAgICAgY2FsbDogJ2V0aF9lc3RpbWF0ZUdhcycsXG4gICAgICAgIHBhcmFtczogMSxcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtmb3JtYXR0ZXJzLmlucHV0Q2FsbEZvcm1hdHRlcl0sXG4gICAgICAgIG91dHB1dEZvcm1hdHRlcjogdXRpbHMuaGV4VG9OdW1iZXJcbiAgICB9KTtcblxuICAgIHZhciBnZXRDb21waWxlcnMgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldENvbXBpbGVycycsXG4gICAgICAgIGNhbGw6ICdldGhfZ2V0Q29tcGlsZXJzJyxcbiAgICAgICAgcGFyYW1zOiAwXG4gICAgfSk7XG5cbiAgICB2YXIgY29tcGlsZVNvbGlkaXR5ID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdjb21waWxlLnNvbGlkaXR5JyxcbiAgICAgICAgY2FsbDogJ2V0aF9jb21waWxlU29saWRpdHknLFxuICAgICAgICBwYXJhbXM6IDFcbiAgICB9KTtcblxuICAgIHZhciBjb21waWxlTExMID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdjb21waWxlLmxsbCcsXG4gICAgICAgIGNhbGw6ICdldGhfY29tcGlsZUxMTCcsXG4gICAgICAgIHBhcmFtczogMVxuICAgIH0pO1xuXG4gICAgdmFyIGNvbXBpbGVTZXJwZW50ID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdjb21waWxlLnNlcnBlbnQnLFxuICAgICAgICBjYWxsOiAnZXRoX2NvbXBpbGVTZXJwZW50JyxcbiAgICAgICAgcGFyYW1zOiAxXG4gICAgfSk7XG5cbiAgICB2YXIgc3VibWl0V29yayA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnc3VibWl0V29yaycsXG4gICAgICAgIGNhbGw6ICdldGhfc3VibWl0V29yaycsXG4gICAgICAgIHBhcmFtczogM1xuICAgIH0pO1xuXG4gICAgdmFyIGdldFdvcmsgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldFdvcmsnLFxuICAgICAgICBjYWxsOiAnZXRoX2dldFdvcmsnLFxuICAgICAgICBwYXJhbXM6IDBcbiAgICB9KTtcblxuICAgIHZhciBnZXRQYXN0TG9ncyA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnZ2V0UGFzdExvZ3MnLFxuICAgICAgICBjYWxsOiAnZXRoX2dldExvZ3MnLFxuICAgICAgICBwYXJhbXM6IDEsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dExvZ0Zvcm1hdHRlcl0sXG4gICAgICAgIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRMb2dGb3JtYXR0ZXJcbiAgICB9KTtcblxuXG4gICAgLy8gc3Vic2NyaXB0aW9uc1xuICAgIHZhciBzdWJzY3JpYmUgPSBuZXcgU3Vic2NyaXB0aW9ucyh7XG4gICAgICAgIG5hbWU6ICdzdWJzY3JpYmUnLFxuICAgICAgICB0eXBlOiAnZXRoJyxcbiAgICAgICAgc3Vic2NyaXB0aW9uczoge1xuICAgICAgICAgICAgJ25ld0Jsb2NrSGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPIGNoYW5nZSBuYW1lIG9uIFJQQyBzaWRlP1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbk5hbWU6ICduZXdIZWFkcycsIC8vIHJlcGxhY2Ugc3Vic2NyaXB0aW9uIHdpdGggdGhpcyBuYW1lXG4gICAgICAgICAgICAgICAgcGFyYW1zOiAwLFxuICAgICAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRCbG9ja0Zvcm1hdHRlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwZW5kaW5nVHJhbnNhY3Rpb25zJzoge1xuICAgICAgICAgICAgICAgIHBhcmFtczogMFxuICAgICAgICAgICAgICAgIC8vIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRUcmFuc2FjdGlvbkZvcm1hdHRlciAvLyByZXR1cm5zIG9ubHkgaGFzaD8/P1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdsb2dzJzoge1xuICAgICAgICAgICAgICAgIHBhcmFtczogMSxcbiAgICAgICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRMb2dGb3JtYXR0ZXJdLFxuICAgICAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRMb2dGb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgLy8gRFVCTElDQVRFLCBhbHNvIGluIHdlYjMtZXRoLWNvbnRyYWN0XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uSGFuZGxlcjogZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBpZihvdXRwdXQucmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkJywgb3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMuY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKG51bGwsIG91dHB1dCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3N5bmNpbmcnOiB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiAwLFxuICAgICAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogZm9ybWF0dGVycy5vdXRwdXRTeW5jaW5nRm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJlIFRSVUUgYXQgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5faXNTeW5jaW5nICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1N5bmNpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkJywgX3RoaXMuX2lzU3luY2luZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5jYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKG51bGwsIF90aGlzLl9pc1N5bmNpbmcsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdkYXRhJywgb3V0cHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oX3RoaXMuY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrKG51bGwsIG91dHB1dCwgX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpcmUgc3luYyBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKF90aGlzLmNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sobnVsbCwgb3V0cHV0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3Igc29tZSB0aW1lIGJlZm9yZSBmaXJlaW5nIHRoZSBGQUxTRVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2lzU3luY2luZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTeW5jaW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG91dHB1dC5jdXJyZW50QmxvY2sgPiBvdXRwdXQuaGlnaGVzdEJsb2NrIC0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9pc1N5bmNpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnY2hhbmdlZCcsIF90aGlzLl9pc1N5bmNpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oX3RoaXMuY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxsYmFjayhudWxsLCBfdGhpcy5faXNTeW5jaW5nLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBbXG4gICAgICAgIGdldFZlcnNpb24sXG4gICAgICAgIGdldENvaW5iYXNlLFxuICAgICAgICBnZXRNaW5pbmcsXG4gICAgICAgIGdldEhhc2hyYXRlLFxuICAgICAgICBpc1N5bmNpbmcsXG4gICAgICAgIGdldEdhc1ByaWNlLFxuICAgICAgICBnZXRBY2NvdW50cyxcbiAgICAgICAgZ2V0QmxvY2tOdW1iZXIsXG4gICAgICAgIGdldEJhbGFuY2UsXG4gICAgICAgIGdldFN0b3JhZ2VBdCxcbiAgICAgICAgZ2V0Q29kZSxcbiAgICAgICAgZ2V0QmxvY2ssXG4gICAgICAgIGdldFVuY2xlLFxuICAgICAgICBnZXRDb21waWxlcnMsXG4gICAgICAgIGdldEJsb2NrVHJhbnNhY3Rpb25Db3VudCxcbiAgICAgICAgZ2V0QmxvY2tVbmNsZUNvdW50LFxuICAgICAgICBnZXRUcmFuc2FjdGlvbixcbiAgICAgICAgZ2V0VHJhbnNhY3Rpb25Gcm9tQmxvY2ssXG4gICAgICAgIGdldFRyYW5zYWN0aW9uUmVjZWlwdCxcbiAgICAgICAgZ2V0VHJhbnNhY3Rpb25Db3VudCxcbiAgICAgICAgY2FsbCxcbiAgICAgICAgZXN0aW1hdGVHYXMsXG4gICAgICAgIHNlbmRTaWduZWRUcmFuc2FjdGlvbixcbiAgICAgICAgc2lnblRyYW5zYWN0aW9uLFxuICAgICAgICBzZW5kVHJhbnNhY3Rpb24sXG4gICAgICAgIHNpZ24sXG4gICAgICAgIGNvbXBpbGVTb2xpZGl0eSxcbiAgICAgICAgY29tcGlsZUxMTCxcbiAgICAgICAgY29tcGlsZVNlcnBlbnQsXG4gICAgICAgIHN1Ym1pdFdvcmssXG4gICAgICAgIGdldFdvcmssXG4gICAgICAgIGdldFBhc3RMb2dzLFxuICAgICAgICBzdWJzY3JpYmVcbiAgICBdO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEV0aDtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2ViMy9wYWNrYWdlcy93ZWIzLWV0aC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKlxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogQGZpbGUgZ2V0TmV0d29ya1R5cGUuanNcbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbnZhciBnZXROZXR3b3JrVHlwZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIGlkO1xuXG5cbiAgICByZXR1cm4gdGhpcy5uZXQuZ2V0SWQoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZ2l2ZW5JZCkge1xuXG4gICAgICAgICAgICBpZCA9IGdpdmVuSWQ7XG5cbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRCbG9jaygwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGdlbmVzaXMpIHtcbiAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZSA9ICdwcml2YXRlJztcblxuICAgICAgICAgICAgaWYgKGdlbmVzaXMuaGFzaCA9PT0gJzB4ZDRlNTY3NDBmODc2YWVmOGMwMTBiODZhNDBkNWY1Njc0NWExMThkMDkwNmEzNGU2OWFlYzhjMGRiMWNiOGZhMycgJiZcbiAgICAgICAgICAgICAgICBpZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gJ21haW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdlbmVzaXMuaGFzaCA9PT0gJzBjZDc4NmEyNDI1ZDE2ZjE1MmM2NTgzMTZjNDIzZTZjZTExODFlMTVjMzI5NTgyNmQ3Yzk5MDRjYmE5Y2UzMDMnICYmXG4gICAgICAgICAgICAgICAgaWQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9ICdtb3JkZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdlbmVzaXMuaGFzaCA9PT0gJzB4NDE5NDEwMjM2ODA5MjNlMGZlNGQ3NGEzNGJkYWM4MTQxZjI1NDBlM2FlOTA2MjM3MThlNDdkNjZkMWNhNGEyZCcgJiZcbiAgICAgICAgICAgICAgICBpZCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gJ3JvcHN0ZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXROZXR3b3JrVHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1ldGgvc3JjL2dldE5ldHdvcmtUeXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLypcbiAgICBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gICAgd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gICAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gICAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAgICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gICAgd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICAgIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gICAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICAgIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gICAgYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuKi9cbi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNvcmUgPSByZXF1aXJlKCd3ZWIzLWNvcmUnKTtcbnZhciBNZXRob2QgPSByZXF1aXJlKCd3ZWIzLWNvcmUtbWV0aG9kJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCd3ZWIzLXV0aWxzJyk7XG5cblxudmFyIE5ldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gc2V0cyBfcmVxdWVzdG1hbmFnZXJcbiAgICBjb3JlLnBhY2thZ2VJbml0KHRoaXMsIGFyZ3VtZW50cyk7XG5cblxuICAgIG1ldGhvZHMoKS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICBtZXRob2QuYXR0YWNoVG9PYmplY3QoX3RoaXMpO1xuICAgICAgICBtZXRob2Quc2V0UmVxdWVzdE1hbmFnZXIoX3RoaXMuX3JlcXVlc3RNYW5hZ2VyKTtcbiAgICB9KTtcblxufTtcblxuY29yZS5hZGRQcm92aWRlcnMoTmV0KTtcblxuXG52YXIgbWV0aG9kcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldElkJyxcbiAgICAgICAgICAgIGNhbGw6ICduZXRfdmVyc2lvbicsXG4gICAgICAgICAgICBwYXJhbXM6IDAsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IHV0aWxzLmhleFRvTnVtYmVyXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdpc0xpc3RlbmluZycsXG4gICAgICAgICAgICBjYWxsOiAnbmV0X2xpc3RlbmluZycsXG4gICAgICAgICAgICBwYXJhbXM6IDBcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldFBlZXJDb3VudCcsXG4gICAgICAgICAgICBjYWxsOiAnbmV0X3BlZXJDb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IDAsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IHV0aWxzLmhleFRvTnVtYmVyXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBOZXQ7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2ViMy9wYWNrYWdlcy93ZWIzLW5ldC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKlxuICAgIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiAgICB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICAgIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAgICB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gICAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAgICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gICAgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAgICBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4qL1xuLyoqXG4gKiBAZmlsZSBpbmRleC5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ3dlYjMtY29yZScpO1xudmFyIE1ldGhvZCA9IHJlcXVpcmUoJ3dlYjMtY29yZS1tZXRob2QnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJ3dlYjMtdXRpbHMnKTtcbnZhciBOZXQgPSByZXF1aXJlKCd3ZWIzLW5ldCcpO1xuXG52YXIgZm9ybWF0dGVycyA9IHJlcXVpcmUoJ3dlYjMtY29yZS1oZWxwZXJzJykuZm9ybWF0dGVycztcblxuXG52YXIgUGVyc29uYWwgPSBmdW5jdGlvbiBQZXJzb25hbCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gc2V0cyBfcmVxdWVzdG1hbmFnZXJcbiAgICBjb3JlLnBhY2thZ2VJbml0KHRoaXMsIGFyZ3VtZW50cyk7XG5cblxuICAgIG1ldGhvZHMoKS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICBtZXRob2QuYXR0YWNoVG9PYmplY3QoX3RoaXMpO1xuICAgICAgICBtZXRob2Quc2V0UmVxdWVzdE1hbmFnZXIoX3RoaXMuX3JlcXVlc3RNYW5hZ2VyKTtcbiAgICB9KTtcblxuICAgIHRoaXMubmV0ID0gbmV3IE5ldCh0aGlzLmN1cnJlbnRQcm92aWRlcik7XG59O1xuXG5jb3JlLmFkZFByb3ZpZGVycyhQZXJzb25hbCk7XG5cblxudmFyIG1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZ2V0QWNjb3VudHMgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ2dldEFjY291bnRzJyxcbiAgICAgICAgY2FsbDogJ3BlcnNvbmFsX2xpc3RBY2NvdW50cycsXG4gICAgICAgIHBhcmFtczogMCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiB1dGlscy50b0NoZWNrc3VtQWRkcmVzc1xuICAgIH0pO1xuXG4gICAgdmFyIG5ld0FjY291bnQgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ25ld0FjY291bnQnLFxuICAgICAgICBjYWxsOiAncGVyc29uYWxfbmV3QWNjb3VudCcsXG4gICAgICAgIHBhcmFtczogMSxcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtudWxsXSxcbiAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiB1dGlscy50b0NoZWNrc3VtQWRkcmVzc1xuICAgIH0pO1xuXG4gICAgdmFyIHVubG9ja0FjY291bnQgPSBuZXcgTWV0aG9kKHtcbiAgICAgICAgbmFtZTogJ3VubG9ja0FjY291bnQnLFxuICAgICAgICBjYWxsOiAncGVyc29uYWxfdW5sb2NrQWNjb3VudCcsXG4gICAgICAgIHBhcmFtczogMyxcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtmb3JtYXR0ZXJzLmlucHV0QWRkcmVzc0Zvcm1hdHRlciwgbnVsbCwgbnVsbF1cbiAgICB9KTtcblxuICAgIHZhciBsb2NrQWNjb3VudCA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnbG9ja0FjY291bnQnLFxuICAgICAgICBjYWxsOiAncGVyc29uYWxfbG9ja0FjY291bnQnLFxuICAgICAgICBwYXJhbXM6IDEsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dEFkZHJlc3NGb3JtYXR0ZXJdXG4gICAgfSk7XG5cbiAgICB2YXIgaW1wb3J0UmF3S2V5ID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdpbXBvcnRSYXdLZXknLFxuICAgICAgICBjYWxsOiAncGVyc29uYWxfaW1wb3J0UmF3S2V5JyxcbiAgICAgICAgcGFyYW1zOiAyXG4gICAgfSk7XG5cbiAgICB2YXIgc2VuZFRyYW5zYWN0aW9uID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdzZW5kVHJhbnNhY3Rpb24nLFxuICAgICAgICBjYWxsOiAncGVyc29uYWxfc2VuZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgcGFyYW1zOiAyLFxuICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRUcmFuc2FjdGlvbkZvcm1hdHRlciwgbnVsbF1cbiAgICB9KTtcblxuICAgIHZhciBzaWduID0gbmV3IE1ldGhvZCh7XG4gICAgICAgIG5hbWU6ICdzaWduJyxcbiAgICAgICAgY2FsbDogJ3BlcnNvbmFsX3NpZ24nLFxuICAgICAgICBwYXJhbXM6IDMsXG4gICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dFNpZ25Gb3JtYXR0ZXIsIGZvcm1hdHRlcnMuaW5wdXRBZGRyZXNzRm9ybWF0dGVyLCBudWxsXVxuICAgIH0pO1xuXG4gICAgdmFyIGVjUmVjb3ZlciA9IG5ldyBNZXRob2Qoe1xuICAgICAgICBuYW1lOiAnZWNSZWNvdmVyJyxcbiAgICAgICAgY2FsbDogJ3BlcnNvbmFsX2VjUmVjb3ZlcicsXG4gICAgICAgIHBhcmFtczogMixcbiAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtmb3JtYXR0ZXJzLmlucHV0U2lnbkZvcm1hdHRlciwgbnVsbF1cbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgZ2V0QWNjb3VudHMsXG4gICAgICAgIG5ld0FjY291bnQsXG4gICAgICAgIHVubG9ja0FjY291bnQsXG4gICAgICAgIHNlbmRUcmFuc2FjdGlvbixcbiAgICAgICAgbG9ja0FjY291bnQsXG4gICAgICAgIGltcG9ydFJhd0tleSxcbiAgICAgICAgc2lnbixcbiAgICAgICAgZWNSZWNvdmVyXG4gICAgXTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25hbDtcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93ZWIzL3BhY2thZ2VzL3dlYjMtZXRoLXBlcnNvbmFsL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qXG4gICAgVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuICAgIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICAgIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICAgIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gICAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICAgIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAgICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICAgIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAgICBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuICAgIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICAgIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiovXG4vKipcbiAqIEBmaWxlIGluZGV4LmpzXG4gKiBAYXV0aG9yIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiBAZGF0ZSAyMDE3XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnd2ViMy1jb3JlJyk7XG52YXIgU3Vic2NyaXB0aW9ucyA9IHJlcXVpcmUoJ3dlYjMtY29yZS1zdWJzY3JpcHRpb25zJykuc3Vic2NyaXB0aW9ucztcbnZhciBNZXRob2QgPSByZXF1aXJlKCd3ZWIzLWNvcmUtbWV0aG9kJyk7XG4vLyB2YXIgZm9ybWF0dGVycyA9IHJlcXVpcmUoJ3dlYjMtY29yZS1oZWxwZXJzJykuZm9ybWF0dGVycztcbnZhciBOZXQgPSByZXF1aXJlKCd3ZWIzLW5ldCcpO1xuXG5cbnZhciBTaGggPSBmdW5jdGlvbiBTaGgoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIHNldHMgX3JlcXVlc3RtYW5hZ2VyXG4gICAgY29yZS5wYWNrYWdlSW5pdCh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5jbGVhclN1YnNjcmlwdGlvbnMgPSBfdGhpcy5fcmVxdWVzdE1hbmFnZXIuY2xlYXJTdWJzY3JpcHRpb25zO1xuXG4gICAgbWV0aG9kcygpLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgIG1ldGhvZC5hdHRhY2hUb09iamVjdChfdGhpcyk7XG4gICAgICAgIG1ldGhvZC5zZXRSZXF1ZXN0TWFuYWdlcihfdGhpcy5fcmVxdWVzdE1hbmFnZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uZXQgPSBuZXcgTmV0KHRoaXMuY3VycmVudFByb3ZpZGVyKTtcbn07XG5cbmNvcmUuYWRkUHJvdmlkZXJzKFNoaCk7XG5cblxudmFyIG1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBuZXcgU3Vic2NyaXB0aW9ucyh7XG4gICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICAgIHR5cGU6ICdzaGgnLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uczoge1xuICAgICAgICAgICAgICAgICdtZXNzYWdlcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dFBvc3RGb3JtYXR0ZXJdLFxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRwdXRGb3JtYXR0ZXI6IGZvcm1hdHRlcnMub3V0cHV0UG9zdEZvcm1hdHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG5cbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0VmVyc2lvbicsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX3ZlcnNpb24nLFxuICAgICAgICAgICAgcGFyYW1zOiAwXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRJbmZvJyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfaW5mbycsXG4gICAgICAgICAgICBwYXJhbXM6IDBcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ3NldE1heE1lc3NhZ2VTaXplJyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfc2V0TWF4TWVzc2FnZVNpemUnLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdzZXRNaW5Qb1cnLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9zZXRNaW5Qb1cnLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdtYXJrVHJ1c3RlZFBlZXInLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9tYXJrVHJ1c3RlZFBlZXInLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICduZXdLZXlQYWlyJyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfbmV3S2V5UGFpcicsXG4gICAgICAgICAgICBwYXJhbXM6IDBcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2FkZFByaXZhdGVLZXknLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9hZGRQcml2YXRlS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlS2V5UGFpcicsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2RlbGV0ZUtleVBhaXInLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdoYXNLZXlQYWlyJyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfaGFzS2V5UGFpcicsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldFB1YmxpY0tleScsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2dldFB1YmxpY0tleScsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldFByaXZhdGVLZXknLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9nZXRQcml2YXRlS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnbmV3U3ltS2V5JyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfbmV3U3ltS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnYWRkU3ltS2V5JyxcbiAgICAgICAgICAgIGNhbGw6ICdzaGhfYWRkU3ltS2V5JyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZ2VuZXJhdGVTeW1LZXlGcm9tUGFzc3dvcmQnLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9nZW5lcmF0ZVN5bUtleUZyb21QYXNzd29yZCcsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2hhc1N5bUtleScsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2hhc1N5bUtleScsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldFN5bUtleScsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2dldFN5bUtleScsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZVN5bUtleScsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2RlbGV0ZVN5bUtleScsXG4gICAgICAgICAgICBwYXJhbXM6IDFcbiAgICAgICAgfSksXG5cbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnbmV3TWVzc2FnZUZpbHRlcicsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX25ld01lc3NhZ2VGaWx0ZXInLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRGaWx0ZXJNZXNzYWdlcycsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2dldEZpbHRlck1lc3NhZ2VzJyxcbiAgICAgICAgICAgIHBhcmFtczogMVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlTWVzc2FnZUZpbHRlcicsXG4gICAgICAgICAgICBjYWxsOiAnc2hoX2RlbGV0ZU1lc3NhZ2VGaWx0ZXInLFxuICAgICAgICAgICAgcGFyYW1zOiAxXG4gICAgICAgIH0pLFxuXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ3Bvc3QnLFxuICAgICAgICAgICAgY2FsbDogJ3NoaF9wb3N0JyxcbiAgICAgICAgICAgIHBhcmFtczogMSxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbbnVsbF1cbiAgICAgICAgfSlcbiAgICBdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGg7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2ViMy9wYWNrYWdlcy93ZWIzLXNoaC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKlxuICAgIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiAgICB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICAgIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAgICB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gICAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAgICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gICAgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAgICBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4qL1xuLyoqXG4gKiBAZmlsZSBpbmRleC5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBzd2FybSA9IHJlcXVpcmUoXCJzd2FybS1qc1wiKTtcblxuXG52YXIgQnp6ID0gZnVuY3Rpb24gQnp6KHByb3ZpZGVyKSB7XG5cbiAgICB0aGlzLmdpdmVuUHJvdmlkZXIgPSBCenouZ2l2ZW5Qcm92aWRlcjtcblxuICAgIC8vIGlmIG5ldyBXZWIzKHByb3ZpZGVyKSwgdXNlIHRoZSBnaXZlbiBwcm92aWRlclxuICAgIGlmIChwcm92aWRlciAmJiBwcm92aWRlci5fcmVxdWVzdE1hbmFnZXIpIHtcbiAgICAgICAgcHJvdmlkZXIgPSBwcm92aWRlci5jdXJyZW50UHJvdmlkZXI7XG4gICAgfVxuXG4gICAgLy8gb25seSBhbGxvdyBmaWxlIHBpY2tlciB3aGVuIGluIGJyb3dzZXJcbiAgICBpZih0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGljayA9IHN3YXJtLnBpY2s7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcm92aWRlcihwcm92aWRlcik7XG59O1xuXG4vLyBzZXQgZGVmYXVsdCBldGhlcmV1bSBwcm92aWRlclxuLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuQnp6LmdpdmVuUHJvdmlkZXIgPSBudWxsO1xuaWYodHlwZW9mIGV0aGVyZXVtUHJvdmlkZXIgIT09ICd1bmRlZmluZWQnICYmIGV0aGVyZXVtUHJvdmlkZXIuYnp6KSB7XG4gICAgQnp6LmdpdmVuUHJvdmlkZXIgPSBldGhlcmV1bVByb3ZpZGVyO1xufVxuLyoganNoaW50IGlnbm9yZTplbmQgKi9cblxuQnp6LnByb3RvdHlwZS5zZXRQcm92aWRlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgLy8gaXMgZXRoZXJldW0gcHJvdmlkZXJcbiAgICBpZihfLmlzT2JqZWN0KHByb3ZpZGVyKSAmJiBfLmlzU3RyaW5nKHByb3ZpZGVyLmJ6eikpIHtcbiAgICAgICAgcHJvdmlkZXIgPSBwcm92aWRlci5ieno7XG4gICAgLy8gaXMgbm8gc3RyaW5nLCBzZXQgZGVmYXVsdFxuICAgIH0gZWxzZSBpZighXy5pc1N0cmluZyhwcm92aWRlcikpIHtcbiAgICAgICAgcHJvdmlkZXIgPSAnaHR0cDovL3N3YXJtLWdhdGV3YXlzLm5ldCc7IC8vIGRlZmF1bHQgdG8gZ2F0ZXdheVxuICAgIH1cblxuXG4gICAgaWYoXy5pc1N0cmluZyhwcm92aWRlcikpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gYWRkIGZ1bmN0aW9uc1xuICAgIHRoaXMuZG93bmxvYWQgPSBzd2FybS5hdChwcm92aWRlcikuZG93bmxvYWQ7XG4gICAgdGhpcy51cGxvYWQgPSBzd2FybS5hdChwcm92aWRlcikudXBsb2FkO1xuICAgIHRoaXMuaXNBdmFpbGFibGUgPSBzd2FybS5hdChwcm92aWRlcikuaXNBdmFpbGFibGU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCeno7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy1ienovc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MDdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLypcbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG4vKipcbiAqIEBmaWxlIHV0aWxzLmpzXG4gKiBAYXV0aG9yIE1hcmVrIEtvdGV3aWN6IDxtYXJla0BldGhjb3JlLmlvPlxuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cblxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgZXRoanNVbml0ID0gcmVxdWlyZSgnZXRoanMtdW5pdCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xudmFyIHNvbGlkaXR5U2hhMyA9IHJlcXVpcmUoJy4vc29saWRpdHlTaGEzLmpzJyk7XG52YXIgcmFuZG9tSGV4ID0gcmVxdWlyZSgncmFuZG9taGV4Jyk7XG5cblxuXG4vKipcbiAqIEZpcmVzIGFuIGVycm9yIGluIGFuIGV2ZW50IGVtaXR0ZXIgYW5kIGNhbGxiYWNrIGFuZCByZXR1cm5zIHRoZSBldmVudGVtaXR0ZXJcbiAqXG4gKiBAbWV0aG9kIF9maXJlRXJyb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvciBhIHN0cmluZywgYSBlcnJvciwgb3IgYW4gb2JqZWN0IHdpdGgge21lc3NhZ2UsIGRhdGF9XG4gKiBAcGFyYW0ge09iamVjdH0gZW1pdHRlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fSB0aGUgZW1pdHRlclxuICovXG52YXIgX2ZpcmVFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgZW1pdHRlciwgcmVqZWN0LCBjYWxsYmFjaykge1xuICAgIC8qanNoaW50IG1heGNvbXBsZXhpdHk6IDEwICovXG5cbiAgICAvLyBhZGQgZGF0YSBpZiBnaXZlblxuICAgIGlmKF8uaXNPYmplY3QoZXJyb3IpICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgJiYgIGVycm9yLmRhdGEpIHtcbiAgICAgICAgaWYoXy5pc09iamVjdChlcnJvci5kYXRhKSB8fCBfLmlzQXJyYXkoZXJyb3IuZGF0YSkpIHtcbiAgICAgICAgICAgIGVycm9yLmRhdGEgPSBKU09OLnN0cmluZ2lmeShlcnJvci5kYXRhLCBudWxsLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yID0gZXJyb3IubWVzc2FnZSArXCJcXG5cIisgZXJyb3IuZGF0YTtcbiAgICB9XG5cbiAgICBpZihfLmlzU3RyaW5nKGVycm9yKSkge1xuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKF8uaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH1cbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHJlamVjdCkpIHtcbiAgICAgICAgLy8gc3VwcHJlc3MgdW5jYXRjaGVkIGVycm9yIGlmIGFuIGVycm9yIGxpc3RlbmVyIGlzIHByZXNlbnRcbiAgICAgICAgaWYoZW1pdHRlciAmJlxuICAgICAgICAgICBfLmlzRnVuY3Rpb24oZW1pdHRlci5saXN0ZW5lcnMpICYmXG4gICAgICAgICAgIGVtaXR0ZXIubGlzdGVuZXJzKCdlcnJvcicpLmxlbmd0aCAmJlxuICAgICAgICAgICBfLmlzRnVuY3Rpb24oZW1pdHRlci5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMpKSB7XG4gICAgICAgICAgICBlbWl0dGVyLnN1cHByZXNzVW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYoZW1pdHRlciAmJiBfLmlzRnVuY3Rpb24oZW1pdHRlci5lbWl0KSkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiBlbWl0dGVyO1xufTtcblxuLyoqXG4gKiBTaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgZnVsbCBmdW5jdGlvbi9ldmVudCBuYW1lIGZyb20ganNvbiBhYmlcbiAqXG4gKiBAbWV0aG9kIF9qc29uSW50ZXJmYWNlTWV0aG9kVG9TdHJpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBqc29uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGZ1bGwgZnVuY3Rpb24vZXZlbnQgbmFtZVxuICovXG52YXIgX2pzb25JbnRlcmZhY2VNZXRob2RUb1N0cmluZyA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgaWYgKF8uaXNPYmplY3QoanNvbikgJiYganNvbi5uYW1lICYmIGpzb24ubmFtZS5pbmRleE9mKCcoJykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBqc29uLm5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVOYW1lID0ganNvbi5pbnB1dHMubWFwKGZ1bmN0aW9uKGkpe3JldHVybiBpLnR5cGU7IH0pLmpvaW4oJywnKTtcbiAgICByZXR1cm4ganNvbi5uYW1lICsgJygnICsgdHlwZU5hbWUgKyAnKSc7XG59O1xuXG5cblxuLyoqXG4gKiBTaG91bGQgYmUgY2FsbGVkIHRvIGdldCBhc2NpaSBmcm9tIGl0J3MgaGV4IHJlcHJlc2VudGF0aW9uXG4gKlxuICogQG1ldGhvZCBoZXhUb0FzY2lpXG4gKiBAcGFyYW0ge1N0cmluZ30gaGV4XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhc2NpaSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgaGV4IHZhbHVlXG4gKi9cbnZhciBoZXhUb0FzY2lpID0gZnVuY3Rpb24oaGV4KSB7XG4gICAgaWYgKCF1dGlscy5pc0hleChoZXgpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYXJhbWV0ZXIgbXVzdCBiZSBhIHZhbGlkIEhFWCBzdHJpbmcuJyk7XG5cbiAgICB2YXIgc3RyID0gXCJcIjtcbiAgICB2YXIgaSA9IDAsIGwgPSBoZXgubGVuZ3RoO1xuICAgIGlmIChoZXguc3Vic3RyaW5nKDAsIDIpID09PSAnMHgnKSB7XG4gICAgICAgIGkgPSAyO1xuICAgIH1cbiAgICBmb3IgKDsgaSA8IGw7IGkrPTIpIHtcbiAgICAgICAgdmFyIGNvZGUgPSBwYXJzZUludChoZXguc3Vic3RyKGksIDIpLCAxNik7XG4gICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFNob3VsZCBiZSBjYWxsZWQgdG8gZ2V0IGhleCByZXByZXNlbnRhdGlvbiAocHJlZml4ZWQgYnkgMHgpIG9mIGFzY2lpIHN0cmluZ1xuICpcbiAqIEBtZXRob2QgYXNjaWlUb0hleFxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ30gaGV4IHJlcHJlc2VudGF0aW9uIG9mIGlucHV0IHN0cmluZ1xuICovXG52YXIgYXNjaWlUb0hleCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBoZXggPSBcIlwiO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIG4gPSBjb2RlLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaGV4ICs9IG4ubGVuZ3RoIDwgMiA/ICcwJyArIG4gOiBuO1xuICAgIH1cblxuICAgIHJldHVybiBcIjB4XCIgKyBoZXg7XG59O1xuXG5cblxuLyoqXG4gKiBSZXR1cm5zIHZhbHVlIG9mIHVuaXQgaW4gV2VpXG4gKlxuICogQG1ldGhvZCBnZXRVbml0VmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB1bml0IHRoZSB1bml0IHRvIGNvbnZlcnQgdG8sIGRlZmF1bHQgZXRoZXJcbiAqIEByZXR1cm5zIHtCTn0gdmFsdWUgb2YgdGhlIHVuaXQgKGluIFdlaSlcbiAqIEB0aHJvd3MgZXJyb3IgaWYgdGhlIHVuaXQgaXMgbm90IGNvcnJlY3Q6d1xuICovXG52YXIgZ2V0VW5pdFZhbHVlID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgICB1bml0ID0gdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6ICdldGhlcic7XG4gICAgaWYgKCFldGhqc1VuaXQudW5pdE1hcFt1bml0XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgdW5pdCBcIicrIHVuaXQgKydcIiBkb2VzblxcJ3QgZXhpc3QsIHBsZWFzZSB1c2UgdGhlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHVuaXRzJyArIEpTT04uc3RyaW5naWZ5KGV0aGpzVW5pdC51bml0TWFwLCBudWxsLCAyKSk7XG4gICAgfVxuICAgIHJldHVybiB1bml0O1xufTtcblxuLyoqXG4gKiBUYWtlcyBhIG51bWJlciBvZiB3ZWkgYW5kIGNvbnZlcnRzIGl0IHRvIGFueSBvdGhlciBldGhlciB1bml0LlxuICpcbiAqIFBvc3NpYmxlIHVuaXRzIGFyZTpcbiAqICAgU0kgU2hvcnQgICBTSSBGdWxsICAgICAgICBFZmZpZ3kgICAgICAgT3RoZXJcbiAqIC0ga3dlaSAgICAgICBmZW10b2V0aGVyICAgICBiYWJiYWdlXG4gKiAtIG13ZWkgICAgICAgcGljb2V0aGVyICAgICAgbG92ZWxhY2VcbiAqIC0gZ3dlaSAgICAgICBuYW5vZXRoZXIgICAgICBzaGFubm9uICAgICAgbmFub1xuICogLSAtLSAgICAgICAgIG1pY3JvZXRoZXIgICAgIHN6YWJvICAgICAgICBtaWNyb1xuICogLSAtLSAgICAgICAgIG1pbGxpZXRoZXIgICAgIGZpbm5leSAgICAgICBtaWxsaVxuICogLSBldGhlciAgICAgIC0tICAgICAgICAgICAgIC0tXG4gKiAtIGtldGhlciAgICAgICAgICAgICAgICAgICAgLS0gICAgICAgICAgIGdyYW5kXG4gKiAtIG1ldGhlclxuICogLSBnZXRoZXJcbiAqIC0gdGV0aGVyXG4gKlxuICogQG1ldGhvZCBmcm9tV2VpXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG51bWJlciBjYW4gYmUgYSBudW1iZXIsIG51bWJlciBzdHJpbmcgb3IgYSBIRVggb2YgYSBkZWNpbWFsXG4gKiBAcGFyYW0ge1N0cmluZ30gdW5pdCB0aGUgdW5pdCB0byBjb252ZXJ0IHRvLCBkZWZhdWx0IGV0aGVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8T2JqZWN0fSBXaGVuIGdpdmVuIGEgQk4gb2JqZWN0IGl0IHJldHVybnMgb25lIGFzIHdlbGwsIG90aGVyd2lzZSBhIG51bWJlclxuICovXG52YXIgZnJvbVdlaSA9IGZ1bmN0aW9uKG51bWJlciwgdW5pdCkge1xuICAgIHVuaXQgPSBnZXRVbml0VmFsdWUodW5pdCk7XG5cbiAgICByZXR1cm4gdXRpbHMuaXNCTihudW1iZXIpID8gZXRoanNVbml0LmZyb21XZWkobnVtYmVyLCB1bml0KSA6IGV0aGpzVW5pdC5mcm9tV2VpKG51bWJlciwgdW5pdCkudG9TdHJpbmcoMTApO1xufTtcblxuLyoqXG4gKiBUYWtlcyBhIG51bWJlciBvZiBhIHVuaXQgYW5kIGNvbnZlcnRzIGl0IHRvIHdlaS5cbiAqXG4gKiBQb3NzaWJsZSB1bml0cyBhcmU6XG4gKiAgIFNJIFNob3J0ICAgU0kgRnVsbCAgICAgICAgRWZmaWd5ICAgICAgIE90aGVyXG4gKiAtIGt3ZWkgICAgICAgZmVtdG9ldGhlciAgICAgYmFiYmFnZVxuICogLSBtd2VpICAgICAgIHBpY29ldGhlciAgICAgIGxvdmVsYWNlXG4gKiAtIGd3ZWkgICAgICAgbmFub2V0aGVyICAgICAgc2hhbm5vbiAgICAgIG5hbm9cbiAqIC0gLS0gICAgICAgICBtaWNyb2V0aGVyICAgICBzemFibyAgICAgICAgbWljcm9cbiAqIC0gLS0gICAgICAgICBtaWNyb2V0aGVyICAgICBzemFibyAgICAgICAgbWljcm9cbiAqIC0gLS0gICAgICAgICBtaWxsaWV0aGVyICAgICBmaW5uZXkgICAgICAgbWlsbGlcbiAqIC0gZXRoZXIgICAgICAtLSAgICAgICAgICAgICAtLVxuICogLSBrZXRoZXIgICAgICAgICAgICAgICAgICAgIC0tICAgICAgICAgICBncmFuZFxuICogLSBtZXRoZXJcbiAqIC0gZ2V0aGVyXG4gKiAtIHRldGhlclxuICpcbiAqIEBtZXRob2QgdG9XZWlcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xCTn0gbnVtYmVyIGNhbiBiZSBhIG51bWJlciwgbnVtYmVyIHN0cmluZyBvciBhIEhFWCBvZiBhIGRlY2ltYWxcbiAqIEBwYXJhbSB7U3RyaW5nfSB1bml0IHRoZSB1bml0IHRvIGNvbnZlcnQgZnJvbSwgZGVmYXVsdCBldGhlclxuICogQHJldHVybiB7U3RyaW5nfE9iamVjdH0gV2hlbiBnaXZlbiBhIEJOIG9iamVjdCBpdCByZXR1cm5zIG9uZSBhcyB3ZWxsLCBvdGhlcndpc2UgYSBudW1iZXJcbiAqL1xudmFyIHRvV2VpID0gZnVuY3Rpb24obnVtYmVyLCB1bml0KSB7XG4gICAgdW5pdCA9IGdldFVuaXRWYWx1ZSh1bml0KTtcblxuICAgIHJldHVybiB1dGlscy5pc0JOKG51bWJlcikgPyBldGhqc1VuaXQudG9XZWkobnVtYmVyLCB1bml0KSA6IGV0aGpzVW5pdC50b1dlaShudW1iZXIsIHVuaXQpLnRvU3RyaW5nKDEwKTtcbn07XG5cblxuXG5cbi8qKlxuICogQ29udmVydHMgdG8gYSBjaGVja3N1bSBhZGRyZXNzXG4gKlxuICogQG1ldGhvZCB0b0NoZWNrc3VtQWRkcmVzc1xuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgdGhlIGdpdmVuIEhFWCBhZGRyZXNzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnZhciB0b0NoZWNrc3VtQWRkcmVzcyA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgaWYgKHR5cGVvZiBhZGRyZXNzID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xuXG4gICAgaWYoIS9eKDB4KT9bMC05YS1mXXs0MH0kL2kudGVzdChhZGRyZXNzKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHaXZlbiBhZGRyZXNzIFwiJysgYWRkcmVzcyArJ1wiIGlzIG5vdCBhIHZhbGlkIEV0aGVyZXVtIGFkZHJlc3MuJyk7XG5cblxuXG4gICAgYWRkcmVzcyA9IGFkZHJlc3MudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eMHgvaSwnJyk7XG4gICAgdmFyIGFkZHJlc3NIYXNoID0gdXRpbHMuc2hhMyhhZGRyZXNzKS5yZXBsYWNlKC9eMHgvaSwnJyk7XG4gICAgdmFyIGNoZWNrc3VtQWRkcmVzcyA9ICcweCc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFkZHJlc3MubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIC8vIElmIGl0aCBjaGFyYWN0ZXIgaXMgOSB0byBmIHRoZW4gbWFrZSBpdCB1cHBlcmNhc2VcbiAgICAgICAgaWYgKHBhcnNlSW50KGFkZHJlc3NIYXNoW2ldLCAxNikgPiA3KSB7XG4gICAgICAgICAgICBjaGVja3N1bUFkZHJlc3MgKz0gYWRkcmVzc1tpXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tzdW1BZGRyZXNzICs9IGFkZHJlc3NbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrc3VtQWRkcmVzcztcbn07XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBfZmlyZUVycm9yOiBfZmlyZUVycm9yLFxuICAgIF9qc29uSW50ZXJmYWNlTWV0aG9kVG9TdHJpbmc6IF9qc29uSW50ZXJmYWNlTWV0aG9kVG9TdHJpbmcsXG4gICAgLy8gZXh0cmFjdERpc3BsYXlOYW1lOiBleHRyYWN0RGlzcGxheU5hbWUsXG4gICAgLy8gZXh0cmFjdFR5cGVOYW1lOiBleHRyYWN0VHlwZU5hbWUsXG4gICAgcmFuZG9tSGV4OiByYW5kb21IZXgsXG4gICAgXzogXyxcbiAgICBCTjogdXRpbHMuQk4sXG4gICAgaXNCTjogdXRpbHMuaXNCTixcbiAgICBpc0JpZ051bWJlcjogdXRpbHMuaXNCaWdOdW1iZXIsXG4gICAgaXNIZXg6IHV0aWxzLmlzSGV4LFxuICAgIHNoYTM6IHV0aWxzLnNoYTMsXG4gICAga2VjY2FrMjU2OiB1dGlscy5zaGEzLFxuICAgIHNvbGlkaXR5U2hhMzogc29saWRpdHlTaGEzLFxuICAgIGlzQWRkcmVzczogdXRpbHMuaXNBZGRyZXNzLFxuICAgIGNoZWNrQWRkcmVzc0NoZWNrc3VtOiB1dGlscy5jaGVja0FkZHJlc3NDaGVja3N1bSxcbiAgICB0b0NoZWNrc3VtQWRkcmVzczogdG9DaGVja3N1bUFkZHJlc3MsXG4gICAgdG9IZXg6IHV0aWxzLnRvSGV4LFxuICAgIHRvQk46IHV0aWxzLnRvQk4sXG5cbiAgICBieXRlc1RvSGV4OiB1dGlscy5ieXRlc1RvSGV4LFxuICAgIGhleFRvQnl0ZXM6IHV0aWxzLmhleFRvQnl0ZXMsXG5cbiAgICBoZXhUb051bWJlclN0cmluZzogdXRpbHMuaGV4VG9OdW1iZXJTdHJpbmcsXG5cbiAgICBoZXhUb051bWJlcjogdXRpbHMuaGV4VG9OdW1iZXIsXG4gICAgdG9EZWNpbWFsOiB1dGlscy5oZXhUb051bWJlciwgLy8gYWxpYXNcblxuICAgIG51bWJlclRvSGV4OiB1dGlscy5udW1iZXJUb0hleCxcbiAgICBmcm9tRGVjaW1hbDogdXRpbHMubnVtYmVyVG9IZXgsIC8vIGFsaWFzXG5cbiAgICBoZXhUb1V0Zjg6IHV0aWxzLmhleFRvVXRmOCxcbiAgICBoZXhUb1N0cmluZzogdXRpbHMuaGV4VG9VdGY4LFxuICAgIHRvVXRmODogdXRpbHMuaGV4VG9VdGY4LFxuXG4gICAgdXRmOFRvSGV4OiB1dGlscy51dGY4VG9IZXgsXG4gICAgc3RyaW5nVG9IZXg6IHV0aWxzLnV0ZjhUb0hleCxcbiAgICBmcm9tVXRmODogdXRpbHMudXRmOFRvSGV4LFxuXG4gICAgaGV4VG9Bc2NpaTogaGV4VG9Bc2NpaSxcbiAgICB0b0FzY2lpOiBoZXhUb0FzY2lpLFxuICAgIGFzY2lpVG9IZXg6IGFzY2lpVG9IZXgsXG4gICAgZnJvbUFzY2lpOiBhc2NpaVRvSGV4LFxuXG4gICAgdW5pdE1hcDogZXRoanNVbml0LnVuaXRNYXAsXG4gICAgdG9XZWk6IHRvV2VpLFxuICAgIGZyb21XZWk6IGZyb21XZWksXG5cbiAgICBwYWRMZWZ0OiB1dGlscy5sZWZ0UGFkLFxuICAgIGxlZnRQYWQ6IHV0aWxzLmxlZnRQYWQsXG4gICAgcGFkUmlnaHQ6IHV0aWxzLnJpZ2h0UGFkLFxuICAgIHJpZ2h0UGFkOiB1dGlscy5yaWdodFBhZFxufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2ViMy9wYWNrYWdlcy93ZWIzLXV0aWxzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGJ1ZmZlciAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDQwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3V0ZjhqcyB2Mi4xLjIgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlcyBgZXhwb3J0c2Bcblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cztcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYFxuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0bW9kdWxlLmV4cG9ydHMgPT0gZnJlZUV4cG9ydHMgJiYgbW9kdWxlO1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgLCBmcm9tIE5vZGUuanMgb3IgQnJvd3NlcmlmaWVkIGNvZGUsXG5cdC8vIGFuZCB1c2UgaXQgYXMgYHJvb3RgXG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cblx0Ly8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0dmFyIGNvdW50ZXIgPSAwO1xuXHRcdHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXHRcdHZhciB2YWx1ZTtcblx0XHR2YXIgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0Ly8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcblx0ZnVuY3Rpb24gdWNzMmVuY29kZShhcnJheSkge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIGluZGV4ID0gLTE7XG5cdFx0dmFyIHZhbHVlO1xuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBhcnJheVtpbmRleF07XG5cdFx0XHRpZiAodmFsdWUgPiAweEZGRkYpIHtcblx0XHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHRcdHZhbHVlID0gMHhEQzAwIHwgdmFsdWUgJiAweDNGRjtcblx0XHRcdH1cblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQpIHtcblx0XHRpZiAoY29kZVBvaW50ID49IDB4RDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhERkZGKSB7XG5cdFx0XHR0aHJvdyBFcnJvcihcblx0XHRcdFx0J0xvbmUgc3Vycm9nYXRlIFUrJyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdCcgaXMgbm90IGEgc2NhbGFyIHZhbHVlJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0ZnVuY3Rpb24gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIHNoaWZ0KSB7XG5cdFx0cmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiBzaGlmdCkgJiAweDNGKSB8IDB4ODApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5jb2RlQ29kZVBvaW50KGNvZGVQb2ludCkge1xuXHRcdGlmICgoY29kZVBvaW50ICYgMHhGRkZGRkY4MCkgPT0gMCkgeyAvLyAxLWJ5dGUgc2VxdWVuY2Vcblx0XHRcdHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcblx0XHR9XG5cdFx0dmFyIHN5bWJvbCA9ICcnO1xuXHRcdGlmICgoY29kZVBvaW50ICYgMHhGRkZGRjgwMCkgPT0gMCkgeyAvLyAyLWJ5dGUgc2VxdWVuY2Vcblx0XHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiA2KSAmIDB4MUYpIHwgMHhDMCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRkYwMDAwKSA9PSAwKSB7IC8vIDMtYnl0ZSBzZXF1ZW5jZVxuXHRcdFx0Y2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQpO1xuXHRcdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDEyKSAmIDB4MEYpIHwgMHhFMCk7XG5cdFx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDYpO1xuXHRcdH1cblx0XHRlbHNlIGlmICgoY29kZVBvaW50ICYgMHhGRkUwMDAwMCkgPT0gMCkgeyAvLyA0LWJ5dGUgc2VxdWVuY2Vcblx0XHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4RjApO1xuXHRcdFx0c3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCAxMik7XG5cdFx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDYpO1xuXHRcdH1cblx0XHRzeW1ib2wgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKChjb2RlUG9pbnQgJiAweDNGKSB8IDB4ODApO1xuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cblxuXHRmdW5jdGlvbiB1dGY4ZW5jb2RlKHN0cmluZykge1xuXHRcdHZhciBjb2RlUG9pbnRzID0gdWNzMmRlY29kZShzdHJpbmcpO1xuXHRcdHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcblx0XHR2YXIgaW5kZXggPSAtMTtcblx0XHR2YXIgY29kZVBvaW50O1xuXHRcdHZhciBieXRlU3RyaW5nID0gJyc7XG5cdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRcdGNvZGVQb2ludCA9IGNvZGVQb2ludHNbaW5kZXhdO1xuXHRcdFx0Ynl0ZVN0cmluZyArPSBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ5dGVTdHJpbmc7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHRmdW5jdGlvbiByZWFkQ29udGludWF0aW9uQnl0ZSgpIHtcblx0XHRpZiAoYnl0ZUluZGV4ID49IGJ5dGVDb3VudCkge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuXHRcdH1cblxuXHRcdHZhciBjb250aW51YXRpb25CeXRlID0gYnl0ZUFycmF5W2J5dGVJbmRleF0gJiAweEZGO1xuXHRcdGJ5dGVJbmRleCsrO1xuXG5cdFx0aWYgKChjb250aW51YXRpb25CeXRlICYgMHhDMCkgPT0gMHg4MCkge1xuXHRcdFx0cmV0dXJuIGNvbnRpbnVhdGlvbkJ5dGUgJiAweDNGO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGVuZCB1cCBoZXJlLCBpdOKAmXMgbm90IGEgY29udGludWF0aW9uIGJ5dGVcblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlU3ltYm9sKCkge1xuXHRcdHZhciBieXRlMTtcblx0XHR2YXIgYnl0ZTI7XG5cdFx0dmFyIGJ5dGUzO1xuXHRcdHZhciBieXRlNDtcblx0XHR2YXIgY29kZVBvaW50O1xuXG5cdFx0aWYgKGJ5dGVJbmRleCA+IGJ5dGVDb3VudCkge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuXHRcdH1cblxuXHRcdGlmIChieXRlSW5kZXggPT0gYnl0ZUNvdW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gUmVhZCBmaXJzdCBieXRlXG5cdFx0Ynl0ZTEgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdFx0Ynl0ZUluZGV4Kys7XG5cblx0XHQvLyAxLWJ5dGUgc2VxdWVuY2UgKG5vIGNvbnRpbnVhdGlvbiBieXRlcylcblx0XHRpZiAoKGJ5dGUxICYgMHg4MCkgPT0gMCkge1xuXHRcdFx0cmV0dXJuIGJ5dGUxO1xuXHRcdH1cblxuXHRcdC8vIDItYnl0ZSBzZXF1ZW5jZVxuXHRcdGlmICgoYnl0ZTEgJiAweEUwKSA9PSAweEMwKSB7XG5cdFx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgxRikgPDwgNikgfCBieXRlMjtcblx0XHRcdGlmIChjb2RlUG9pbnQgPj0gMHg4MCkge1xuXHRcdFx0XHRyZXR1cm4gY29kZVBvaW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAzLWJ5dGUgc2VxdWVuY2UgKG1heSBpbmNsdWRlIHVucGFpcmVkIHN1cnJvZ2F0ZXMpXG5cdFx0aWYgKChieXRlMSAmIDB4RjApID09IDB4RTApIHtcblx0XHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDBGKSA8PCAxMikgfCAoYnl0ZTIgPDwgNikgfCBieXRlMztcblx0XHRcdGlmIChjb2RlUG9pbnQgPj0gMHgwODAwKSB7XG5cdFx0XHRcdGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50KTtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gNC1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKChieXRlMSAmIDB4RjgpID09IDB4RjApIHtcblx0XHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGJ5dGU0ID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDA3KSA8PCAweDEyKSB8IChieXRlMiA8PCAweDBDKSB8XG5cdFx0XHRcdChieXRlMyA8PCAweDA2KSB8IGJ5dGU0O1xuXHRcdFx0aWYgKGNvZGVQb2ludCA+PSAweDAxMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgxMEZGRkYpIHtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBVVEYtOCBkZXRlY3RlZCcpO1xuXHR9XG5cblx0dmFyIGJ5dGVBcnJheTtcblx0dmFyIGJ5dGVDb3VudDtcblx0dmFyIGJ5dGVJbmRleDtcblx0ZnVuY3Rpb24gdXRmOGRlY29kZShieXRlU3RyaW5nKSB7XG5cdFx0Ynl0ZUFycmF5ID0gdWNzMmRlY29kZShieXRlU3RyaW5nKTtcblx0XHRieXRlQ291bnQgPSBieXRlQXJyYXkubGVuZ3RoO1xuXHRcdGJ5dGVJbmRleCA9IDA7XG5cdFx0dmFyIGNvZGVQb2ludHMgPSBbXTtcblx0XHR2YXIgdG1wO1xuXHRcdHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKCkpICE9PSBmYWxzZSkge1xuXHRcdFx0Y29kZVBvaW50cy5wdXNoKHRtcCk7XG5cdFx0fVxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIHV0ZjggPSB7XG5cdFx0J3ZlcnNpb24nOiAnMi4xLjInLFxuXHRcdCdlbmNvZGUnOiB1dGY4ZW5jb2RlLFxuXHRcdCdkZWNvZGUnOiB1dGY4ZGVjb2RlXG5cdH07XG5cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdXRmODtcblx0XHR9KTtcblx0fVx0ZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgIWZyZWVFeHBvcnRzLm5vZGVUeXBlKSB7XG5cdFx0aWYgKGZyZWVNb2R1bGUpIHsgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IHV0Zjg7XG5cdFx0fSBlbHNlIHsgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdHZhciBvYmplY3QgPSB7fTtcblx0XHRcdHZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcblx0XHRcdGZvciAodmFyIGtleSBpbiB1dGY4KSB7XG5cdFx0XHRcdGhhc093blByb3BlcnR5LmNhbGwodXRmOCwga2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHV0Zjhba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgeyAvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC51dGY4ID0gdXRmODtcblx0fVxuXG59KHRoaXMpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0ZjgvdXRmOC5qc1xuLy8gbW9kdWxlIGlkID0gNDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLyoqXG4gKiBAZmlsZSBzb2xpZGl0eVNoYTMuanNcbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCTiA9IHJlcXVpcmUoJ2JuLmpzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG5cblxudmFyIF9lbGVtZW50YXJ5TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgLypqc2hpbnQgbWF4Y29tcGxleGl0eTpmYWxzZSAqL1xuXG4gICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnaW50WycpKSB7XG4gICAgICAgIHJldHVybiAnaW50MjU2JyArIG5hbWUuc2xpY2UoMyk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnaW50Jykge1xuICAgICAgICByZXR1cm4gJ2ludDI1Nic7XG4gICAgfSBlbHNlIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ3VpbnRbJykpIHtcbiAgICAgICAgcmV0dXJuICd1aW50MjU2JyArIG5hbWUuc2xpY2UoNCk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAndWludCcpIHtcbiAgICAgICAgcmV0dXJuICd1aW50MjU2JztcbiAgICB9IGVsc2UgaWYgKG5hbWUuc3RhcnRzV2l0aCgnZml4ZWRbJykpIHtcbiAgICAgICAgcmV0dXJuICdmaXhlZDEyOHgxMjgnICsgbmFtZS5zbGljZSg1KTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgcmV0dXJuICdmaXhlZDEyOHgxMjgnO1xuICAgIH0gZWxzZSBpZiAobmFtZS5zdGFydHNXaXRoKCd1Zml4ZWRbJykpIHtcbiAgICAgICAgcmV0dXJuICd1Zml4ZWQxMjh4MTI4JyArIG5hbWUuc2xpY2UoNik7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAndWZpeGVkJykge1xuICAgICAgICByZXR1cm4gJ3VmaXhlZDEyOHgxMjgnO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbn07XG5cbi8vIFBhcnNlIE4gZnJvbSB0eXBlPE4+XG52YXIgX3BhcnNlVHlwZU4gPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIHZhciB0eXBlc2l6ZSA9IC9eXFxEKyhcXGQrKS4qJC8uZXhlYyh0eXBlKTtcbiAgICByZXR1cm4gdHlwZXNpemUgPyBwYXJzZUludCh0eXBlc2l6ZVsxXSwgMTApIDogbnVsbDtcbn07XG5cbi8vIFBhcnNlIE4gZnJvbSB0eXBlWzxOPl1cbnZhciBfcGFyc2VUeXBlTkFycmF5ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICB2YXIgYXJyYXlTaXplID0gL15cXEQrXFxkKlxcWyhcXGQrKVxcXSQvLmV4ZWModHlwZSk7XG4gICAgcmV0dXJuIGFycmF5U2l6ZSA/IHBhcnNlSW50KGFycmF5U2l6ZVsxXSwgMTApIDogbnVsbDtcbn07XG5cbnZhciBfcGFyc2VOdW1iZXIgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYXJnO1xuICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodXRpbHMuaXNIZXgoYXJnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCTihhcmcucmVwbGFjZSgvMHgvaSwnJyksIDE2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQk4oYXJnLCAxMCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBuZXcgQk4oYXJnKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQmlnTnVtYmVyKGFyZykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCTihhcmcudG9TdHJpbmcoMTApKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQk4oYXJnKSkge1xuICAgICAgICByZXR1cm4gYXJnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihhcmcgKycgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgfVxufTtcblxudmFyIF9zb2xpZGl0eVBhY2sgPSBmdW5jdGlvbiAodHlwZSwgdmFsdWUsIGFycmF5U2l6ZSkge1xuICAgIC8qanNoaW50IG1heGNvbXBsZXhpdHk6ZmFsc2UgKi9cblxuICAgIHZhciBzaXplLCBudW07XG4gICAgdHlwZSA9IF9lbGVtZW50YXJ5TmFtZSh0eXBlKTtcblxuXG4gICAgaWYgKHR5cGUgPT09ICdieXRlcycpIHtcblxuICAgICAgICBpZiAodmFsdWUucmVwbGFjZSgvXjB4L2ksJycpLmxlbmd0aCAlIDIgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBieXRlcyBjaGFyYWN0ZXJzICcrIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXRpbHMudXRmOFRvSGV4KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib29sJykge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyAnMDEnIDogJzAwJztcbiAgICB9IGVsc2UgaWYgKHR5cGUuc3RhcnRzV2l0aCgnYWRkcmVzcycpKSB7XG4gICAgICAgIGlmKGFycmF5U2l6ZSkge1xuICAgICAgICAgICAgc2l6ZSA9IDY0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZSA9IDQwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXV0aWxzLmlzQWRkcmVzcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih2YWx1ZSArJyBpcyBub3QgYSB2YWxpZCBhZGRyZXNzLCBvciB0aGUgY2hlY2tzdW0gaXMgaW52YWxpZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5sZWZ0UGFkKHZhbHVlLnRvTG93ZXJDYXNlKCksIHNpemUpO1xuICAgIH1cblxuICAgIHNpemUgPSBfcGFyc2VUeXBlTih0eXBlKTtcblxuICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ2J5dGVzJykpIHtcblxuICAgICAgICBpZighc2l6ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdieXRlc1tdIG5vdCB5ZXQgc3VwcG9ydGVkIGluIHNvbGlkaXR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdXN0IGJlIDMyIGJ5dGUgc2xpY2VzIHdoZW4gaW4gYW4gYXJyYXlcbiAgICAgICAgaWYoYXJyYXlTaXplKSB7XG4gICAgICAgICAgICBzaXplID0gMzI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2l6ZSA8IDEgfHwgc2l6ZSA+IDMyIHx8IHNpemUgPCB2YWx1ZS5yZXBsYWNlKC9eMHgvaSwnJykubGVuZ3RoIC8gMiApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBieXRlcycgKyBzaXplICsnIGZvciAnKyB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMucmlnaHRQYWQodmFsdWUsIHNpemUgKiAyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuc3RhcnRzV2l0aCgndWludCcpKSB7XG5cbiAgICAgICAgaWYgKChzaXplICUgOCkgfHwgKHNpemUgPCA4KSB8fCAoc2l6ZSA+IDI1NikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB1aW50JytzaXplKycgc2l6ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbnVtID0gX3BhcnNlTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKG51bS5iaXRMZW5ndGgoKSA+IHNpemUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3VwcGxpZWQgdWludCBleGNlZWRzIHdpZHRoOiAnICsgc2l6ZSArICcgdnMgJyArIG51bS5iaXRMZW5ndGgoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihudW0ubHQobmV3IEJOKDApKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdXBwbGllZCB1aW50ICcrIG51bS50b1N0cmluZygpICsnIGlzIG5lZ2F0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2l6ZSA/IHV0aWxzLmxlZnRQYWQobnVtLnRvU3RyaW5nKCdoZXgnKSwgc2l6ZS84ICogMikgOiBudW07XG4gICAgfSBlbHNlIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ2ludCcpKSB7XG5cbiAgICAgICAgaWYgKChzaXplICUgOCkgfHwgKHNpemUgPCA4KSB8fCAoc2l6ZSA+IDI1NikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpbnQnK3NpemUrJyBzaXplJyk7XG4gICAgICAgIH1cblxuICAgICAgICBudW0gPSBfcGFyc2VOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAobnVtLmJpdExlbmd0aCgpID4gc2l6ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdXBwbGllZCBpbnQgZXhjZWVkcyB3aWR0aDogJyArIHNpemUgKyAnIHZzICcgKyBudW0uYml0TGVuZ3RoKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobnVtLmx0KG5ldyBCTigwKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW0udG9Ud29zKHNpemUpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzaXplID8gdXRpbHMubGVmdFBhZChudW0udG9TdHJpbmcoJ2hleCcpLCBzaXplLzggKiAyKSA6IG51bTtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRklYTUU6IHN1cHBvcnQgYWxsIG90aGVyIHR5cGVzXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgb3IgaW52YWxpZCB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxufTtcblxuXG52YXIgX3Byb2Nlc3NTb2xpZGl0eVNoYTNBcmdzID0gZnVuY3Rpb24gKGFyZykge1xuICAgIC8qanNoaW50IG1heGNvbXBsZXhpdHk6ZmFsc2UgKi9cblxuICAgIGlmKF8uaXNBcnJheShhcmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXV0b2RldGVjdGlvbiBvZiBhcnJheSB0eXBlcyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlLCB2YWx1ZSA9ICcnO1xuICAgIHZhciBoZXhBcmcsIGFycmF5U2l6ZTtcblxuICAgIC8vIGlmIHR5cGUgaXMgZ2l2ZW5cbiAgICBpZiAoXy5pc09iamVjdChhcmcpICYmIChhcmcuaGFzT3duUHJvcGVydHkoJ3YnKSB8fCBhcmcuaGFzT3duUHJvcGVydHkoJ3QnKSB8fCBhcmcuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgfHwgYXJnLmhhc093blByb3BlcnR5KCd0eXBlJykpKSB7XG4gICAgICAgIHR5cGUgPSBhcmcudCB8fCBhcmcudHlwZTtcbiAgICAgICAgdmFsdWUgPSBhcmcudiB8fCBhcmcudmFsdWU7XG5cbiAgICAvLyBvdGhlcndpc2UgdHJ5IHRvIGd1ZXNzIHRoZSB0eXBlXG4gICAgfSBlbHNlIHtcblxuICAgICAgICB0eXBlID0gdXRpbHMudG9IZXgoYXJnLCB0cnVlKTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy50b0hleChhcmcpO1xuXG4gICAgICAgIGlmICghdHlwZS5zdGFydHNXaXRoKCdpbnQnKSAmJiAhdHlwZS5zdGFydHNXaXRoKCd1aW50JykpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnYnl0ZXMnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCh0eXBlLnN0YXJ0c1dpdGgoJ2ludCcpIHx8IHR5cGUuc3RhcnRzV2l0aCgndWludCcpKSAmJiAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhL14oLSk/MHgvaS50ZXN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IG5ldyBCTih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHRoZSBhcnJheSBzaXplXG4gICAgaWYoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBhcnJheVNpemUgPSBfcGFyc2VUeXBlTkFycmF5KHR5cGUpO1xuICAgICAgICBpZihhcnJheVNpemUgJiYgdmFsdWUubGVuZ3RoICE9PSBhcnJheVNpemUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0eXBlICsnIGlzIG5vdCBtYXRjaGluZyB0aGUgZ2l2ZW4gYXJyYXkgJysgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5U2l6ZSA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaGV4QXJnID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBfc29saWRpdHlQYWNrKHR5cGUsIHZhbCwgYXJyYXlTaXplKS50b1N0cmluZygnaGV4JykucmVwbGFjZSgnMHgnLCcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoZXhBcmcuam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGV4QXJnID0gX3NvbGlkaXR5UGFjayh0eXBlLCB2YWx1ZSwgYXJyYXlTaXplKTtcbiAgICAgICAgcmV0dXJuIGhleEFyZy50b1N0cmluZygnaGV4JykucmVwbGFjZSgnMHgnLCcnKTtcbiAgICB9XG5cbn07XG5cbi8qKlxuICogSGFzaGVzIHNvbGlkaXR5IHZhbHVlcyB0byBhIHNoYTMgaGFzaCB1c2luZyBrZWNjYWsgMjU2XG4gKlxuICogQG1ldGhvZCBzb2xpZGl0eVNoYTNcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNoYTNcbiAqL1xudmFyIHNvbGlkaXR5U2hhMyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKmpzaGludCBtYXhjb21wbGV4aXR5OmZhbHNlICovXG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgaGV4QXJncyA9IF8ubWFwKGFyZ3MsIF9wcm9jZXNzU29saWRpdHlTaGEzQXJncyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhhcmdzLCBoZXhBcmdzKTtcbiAgICAvLyBjb25zb2xlLmxvZygnMHgnKyBoZXhBcmdzLmpvaW4oJycpKTtcblxuICAgIHJldHVybiB1dGlscy5zaGEzKCcweCcrIGhleEFyZ3Muam9pbignJykpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNvbGlkaXR5U2hhMztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3dlYjMvcGFja2FnZXMvd2ViMy11dGlscy9zcmMvc29saWRpdHlTaGEzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhc3NlbWJseVwiOntcIi5jb2RlXCI6W3tcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJDQUxMVkFMVUVcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCAjWyRdXCIsXCJ2YWx1ZVwiOlwiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCBbJF1cIixcInZhbHVlXCI6XCIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiQ09ERUNPUFlcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJSRVRVUk5cIn1dLFwiLmRhdGFcIjp7XCIwXCI6e1wiLmF1eGRhdGFcIjpcImExNjU2MjdhN2E3MjMwNTgyMGNjNDlhYjJjNzZjNTlmYTFlNDg5OTAwN2U1YzFhMzllYmE5ZmYwNWRmNmEwNDNmOGNhZjgyOTNjNjRlZDM5MjEwMDI5XCIsXCIuY29kZVwiOlt7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjRcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkNBTExEQVRBU0laRVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiTFRcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGRkZGRkZGXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJESVZcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjMzOUQ1MEE1XCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJFUVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNEFDQjlENEZcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiM1wifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMzMwM0E3NVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRVFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI0XCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJDQUxMVkFMVUVcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI1XCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjVcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjZcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjRcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI3XCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNlwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlJFVFVSTlwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjNcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkNBTExWQUxVRVwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI4XCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI4XCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiOVwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxMFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI5XCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJNTE9BRFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIk1VTFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjIzLFwiZW5kXCI6MjQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjgsXCJlbmRcIjoxMDgsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIxMVwifSx7XCJiZWdpblwiOjgsXCJlbmRcIjoxMDgsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjMzLFwiZW5kXCI6MzYsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6MzAsXCJlbmRcIjozMSxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoyNyxcImVuZFwiOjM3LFwibmFtZVwiOlwiTFRcIn0se1wiYmVnaW5cIjo4LFwiZW5kXCI6MTA4LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxMlwifSx7XCJiZWdpblwiOjgsXCJlbmRcIjoxMDgsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjk5LFwiZW5kXCI6MTAwLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjk0LFwiZW5kXCI6OTcsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6OTAsXCJlbmRcIjoxMDEsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo4NCxcImVuZFwiOjEwMixcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6NzEsXCJlbmRcIjo4MixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjo3MSxcImVuZFwiOjgyLFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjcxLFwiZW5kXCI6ODIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo2NCxcImVuZFwiOjEwMyxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjUyLFwiZW5kXCI6NTQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjo0NSxcImVuZFwiOjU1LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxMVwifSx7XCJiZWdpblwiOjgsXCJlbmRcIjoxMDgsXCJuYW1lXCI6XCJKVU1QXCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MTIsXCJlbmRcIjoyNixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJNTE9BRFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiUkVUVVJOXCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI0XCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjk4LFwiZW5kXCI6MjYwLFwibmFtZVwiOlwiQ0FMTFZBTFVFXCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo5OCxcImVuZFwiOjI2MCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxNFwifSx7XCJiZWdpblwiOjk4LFwiZW5kXCI6MjYwLFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjo5OCxcImVuZFwiOjI2MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjo5OCxcImVuZFwiOjI2MCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjE0XCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjk4LFwiZW5kXCI6MjYwLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJiZWdpblwiOjk4LFwiZW5kXCI6MjYwLFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1wiYmVnaW5cIjo5OCxcImVuZFwiOjI2MCxcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjo5OCxcImVuZFwiOjI2MCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjE1XCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjk4LFwiZW5kXCI6MjYwLFwibmFtZVwiOlwiU1RPUFwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI3XCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkxUXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxN1wifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJJTlZBTElEXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjE3XCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJLRUNDQUsyNTZcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGXCJ9LHtcImJlZ2luXCI6NTcsXCJlbmRcIjo5MSxcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjo1NyxcImVuZFwiOjkxLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjU3LFwiZW5kXCI6OTEsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW291dF1cIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIxMFwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MzE5LFwiZW5kXCI6MzI4LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjE5XCJ9LHtcImJlZ2luXCI6MzE5LFwiZW5kXCI6MzI4LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MzE5LFwiZW5kXCI6MzI4LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltpbl1cIn0se1wiYmVnaW5cIjozMTksXCJlbmRcIjozMjgsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIxOVwifSx7XCJiZWdpblwiOjMxOSxcImVuZFwiOjMyOCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MzQ3LFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiTVVMXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIyMlwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiTVVMXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiS0VDQ0FLMjU2XCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIyM1wifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIkdUXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjIzXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIyMlwifSx7XCJiZWdpblwiOjM0MCxcImVuZFwiOjM2NCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MzQwLFwiZW5kXCI6MzY0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNDAsXCJlbmRcIjozNjQsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIyMVwifSx7XCJiZWdpblwiOjI2NixcImVuZFwiOjM3MSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjY2LFwiZW5kXCI6MzcxLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyNjYsXCJlbmRcIjozNzEsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW291dF1cIn0se1wiYmVnaW5cIjo5OCxcImVuZFwiOjI2MCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjE2XCJ9LHtcImJlZ2luXCI6OTgsXCJlbmRcIjoyNjAsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjE1MyxcImVuZFwiOjE3MixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MTg4LFwiZW5kXCI6MTk1LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjE5NyxcImVuZFwiOjIwNyxcIm5hbWVcIjpcIkNBTExFUlwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIyNVwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIyNlwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbaW5dXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1wiYmVnaW5cIjoxNzUsXCJlbmRcIjoyMDgsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoxNzUsXCJlbmRcIjoyMDgsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjoxNzUsXCJlbmRcIjoyMDgsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjoxNzUsXCJlbmRcIjoyMDgsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiQ1JFQVRFXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIyN1wifSx7XCJiZWdpblwiOjE3NSxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoxNzUsXCJlbmRcIjoyMDgsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6MTc1LFwiZW5kXCI6MjA4LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMjdcIn0se1wiYmVnaW5cIjoxNzUsXCJlbmRcIjoyMDgsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjE1MyxcImVuZFwiOjIwOCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTUzLFwiZW5kXCI6MjA4LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjM1LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIyOFwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjlcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW2luXVwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjI4XCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiS0VDQ0FLMjU2XCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIk5PVFwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlNXQVAzXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MjE4LFwiZW5kXCI6MjUzLFwibmFtZVwiOlwiT1JcIn0se1wiYmVnaW5cIjoyMTgsXCJlbmRcIjoyNTMsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIxOCxcImVuZFwiOjI1MyxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjo5OCxcImVuZFwiOjI2MCxcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltvdXRdXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIyNlwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0ggI1skXVwiLFwidmFsdWVcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0ggWyRdXCIsXCJ2YWx1ZVwiOlwiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiQ09ERUNPUFlcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMjlcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiU1NUT1JFXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkdUXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJLRUNDQUsyNTZcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIzMlwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjMzXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW2luXVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW291dF1cIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjMzXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjIxXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjM1XCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiR1RcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjM2XCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjM1XCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJKVU1QXCJ9LHtcImJlZ2luXCI6MjYsXCJlbmRcIjozNzMsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIzNlwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjI2LFwiZW5kXCI6MzczLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyNixcImVuZFwiOjM3MyxcIm5hbWVcIjpcIkpVTVBcIn1dLFwiLmRhdGFcIjp7XCIwXCI6e1wiLmNvZGVcIjpbe1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJDQUxMVkFMVUVcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjg1OSxcImVuZFwiOjk4OCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjg1OSxcImVuZFwiOjk4OCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiUFVTSFNJWkVcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiQ09ERUNPUFlcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjg1OSxcImVuZFwiOjk4OCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJNTE9BRFwifSx7XCJiZWdpblwiOjg1OSxcImVuZFwiOjk4OCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo4NTksXCJlbmRcIjo5ODgsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6ODU5LFwiZW5kXCI6OTg4LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo5MjUsXCJlbmRcIjo5MzIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjkyNSxcImVuZFwiOjk0MixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo5MjUsXCJlbmRcIjo5NDIsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJOT1RcIn0se1wiYmVnaW5cIjo5MjUsXCJlbmRcIjo5NDIsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZcIn0se1wiYmVnaW5cIjo5MjUsXCJlbmRcIjo5NDIsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOjkyNSxcImVuZFwiOjk0MixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6OTI1LFwiZW5kXCI6OTQyLFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjo5MjUsXCJlbmRcIjo5NDIsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjo5MjUsXCJlbmRcIjo5NDIsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjkyNSxcImVuZFwiOjk0MixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6OTI1LFwiZW5kXCI6OTQyLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo5MjUsXCJlbmRcIjo5NDIsXCJuYW1lXCI6XCJPUlwifSx7XCJiZWdpblwiOjkyNSxcImVuZFwiOjk0MixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6OTI1LFwiZW5kXCI6OTQyLFwibmFtZVwiOlwiU1NUT1JFXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjo5NTIsXCJlbmRcIjo5ODEsXCJuYW1lXCI6XCJTU1RPUkVcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjg5NlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggWyRdXCIsXCJ2YWx1ZVwiOlwiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJDT0RFQ09QWVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJSRVRVUk5cIn1dLFwiLmRhdGFcIjp7XCIwXCI6e1wiLmF1eGRhdGFcIjpcImExNjU2MjdhN2E3MjMwNTgyMDQ5ZTQwMDU5M2Y3ZTZmM2FlZWMzMWQ4M2M2NDNjMDcxYTdlNDgwY2ViODJkNDRjYWJlODBmNDMwNGRkZjAwMGIwMDI5XCIsXCIuY29kZVwiOlt7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJDQUxMREFUQVNJWkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiTFRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGRkZGRkZGXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRJVlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjM0NDEwMDZcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJFUVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMTQ0MzkxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQ4MUM2QTc1XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI0XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjgxRDEyQzU4XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI1XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjgyRkRFMDkzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI2XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjhBOUNGRDU1XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI3XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjkzN0UwOUIxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI4XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkQ3QkI5OUJBXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI5XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkQ3RDFCQkRCXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjIzMzMsXCJlbmRcIjoyNjMyLFwibmFtZVwiOlwiQ0FMTFZBTFVFXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjoyMzMzLFwiZW5kXCI6MjYzMixcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxMVwifSx7XCJiZWdpblwiOjIzMzMsXCJlbmRcIjoyNjMyLFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjoyMzMzLFwiZW5kXCI6MjYzMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjoyMzMzLFwiZW5kXCI6MjYzMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjExXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjIzMzMsXCJlbmRcIjoyNjMyLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJiZWdpblwiOjIzMzMsXCJlbmRcIjoyNjMyLFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMTNcIn0se1wiYmVnaW5cIjoyMzMzLFwiZW5kXCI6MjYzMixcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjoyMzMzLFwiZW5kXCI6MjYzMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjIzMzMsXCJlbmRcIjoyNjMyLFwibmFtZVwiOlwiU1RPUFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjNcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIkNBTExWQUxVRVwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxNFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxNVwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0XCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJFWFBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiSlVNUFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjE1XCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJNTE9BRFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJSRVRVUk5cIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI0XCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJDQUxMVkFMVUVcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMTdcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlJFVkVSVFwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjE3XCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMThcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMTlcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJKVU1QXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMThcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJFWFBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJSRVRVUk5cIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI1XCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJDQUxMVkFMVUVcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlJFVkVSVFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkNBTExEQVRBTE9BRFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIyMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIyMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQNlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJFWFBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQNVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI4MFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkEwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQOFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6MjMsXCJlbmRcIjoyNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjIzXCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MzMsXCJlbmRcIjozNixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjozMCxcImVuZFwiOjMxLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI3LFwiZW5kXCI6MzcsXCJuYW1lXCI6XCJMVFwifSx7XCJiZWdpblwiOjgsXCJlbmRcIjoxMDgsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo4LFwiZW5kXCI6MTA4LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6OTksXCJlbmRcIjoxMDAsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6OTQsXCJlbmRcIjo5NyxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjo5MCxcImVuZFwiOjEwMSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjg0LFwiZW5kXCI6MTAyLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo3MSxcImVuZFwiOjgyLFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjcxLFwiZW5kXCI6ODIsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6NzEsXCJlbmRcIjo4MixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjY0LFwiZW5kXCI6MTAzLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NTIsXCJlbmRcIjo1NCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjQ1LFwiZW5kXCI6NTUsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo4LFwiZW5kXCI6MTA4LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjIzXCJ9LHtcImJlZ2luXCI6OCxcImVuZFwiOjEwOCxcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjo4LFwiZW5kXCI6MTA4LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1wiYmVnaW5cIjo4LFwiZW5kXCI6MTA4LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoxMixcImVuZFwiOjI2LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxRlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjZcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjEwMFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkVYUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIk5PVFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjI2XCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQN1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJSRVRVUk5cIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI2XCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJDQUxMVkFMVUVcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjdcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcIlJFVkVSVFwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjI3XCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjhcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjlcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJKVU1QXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMjhcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcIlJFVFVSTlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiN1wifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkNBTExWQUxVRVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIzMFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxMlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjRcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyNFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkNBTExEQVRBTE9BRFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMUZcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkRJVlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiTVVMXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlNXQVAzXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiRFVQNVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJEVVA1XCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJDQUxMREFUQUNPUFlcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJTV0FQNVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiU1dBUDdcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiRFVQNVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiQ0FMTERBVEFMT0FEXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJTV0FQNVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkNBTExEQVRBTE9BRFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiQTBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiRVhQXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJTV0FQNFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIzMlwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI4XCJ9LHtcImJlZ2luXCI6NjU2LFwiZW5kXCI6Njg3LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJDQUxMVkFMVUVcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMzNcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjY1NixcImVuZFwiOjY4NyxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NjU2LFwiZW5kXCI6Njg3LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjY1NixcImVuZFwiOjY4NyxcIm5hbWVcIjpcIlJFVkVSVFwifSx7XCJiZWdpblwiOjY1NixcImVuZFwiOjY4NyxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjMzXCJ9LHtcImJlZ2luXCI6NjU2LFwiZW5kXCI6Njg3LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMjhcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMzVcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJKVU1QXCJ9LHtcImJlZ2luXCI6OTk0LFwiZW5kXCI6MTE1MyxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjlcIn0se1wiYmVnaW5cIjo5OTQsXCJlbmRcIjoxMTUzLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo5OTQsXCJlbmRcIjoxMTUzLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcImJlZ2luXCI6OTk0LFwiZW5kXCI6MTE1MyxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIzN1wifSx7XCJiZWdpblwiOjk5NCxcImVuZFwiOjExNTMsXCJuYW1lXCI6XCJKVU1QXCJ9LHtcImJlZ2luXCI6MTk2OCxcImVuZFwiOjIzMjcsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIxMFwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoxOTY4LFwiZW5kXCI6MjMyNyxcIm5hbWVcIjpcIkNBTExWQUxVRVwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6MTk2OCxcImVuZFwiOjIzMjcsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiMzhcIn0se1wiYmVnaW5cIjoxOTY4LFwiZW5kXCI6MjMyNyxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MTk2OCxcImVuZFwiOjIzMjcsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6MTk2OCxcImVuZFwiOjIzMjcsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIzOFwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoxOTY4LFwiZW5kXCI6MjMyNyxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCIxMlwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjRcIn0se1wiYmVnaW5cIjoxOTY4LFwiZW5kXCI6MjMyNyxcIm5hbWVcIjpcIkNBTExEQVRBTE9BRFwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6MTk2OCxcImVuZFwiOjIzMjcsXCJuYW1lXCI6XCJKVU1QXCJ9LHtcImJlZ2luXCI6MjMzMyxcImVuZFwiOjI2MzIsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIxM1wifSx7XCJiZWdpblwiOjIzMzMsXCJlbmRcIjoyNjMyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo4MjcsXCJlbmRcIjo4MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjgyNyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6MjM5OCxcImVuZFwiOjI0MjEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjIzOTgsXCJlbmRcIjoyNDIxLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo4MTMsXCJlbmRcIjo4MjMsXCJuYW1lXCI6XCJDQUxMRVJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkEwXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIkVYUFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjo4MTMsXCJlbmRcIjo4MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjgxMyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo4MTMsXCJlbmRcIjo4MzQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjo4MjcsXCJlbmRcIjo4MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjgyNyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjgxMyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6ODA1LFwiZW5kXCI6ODM1LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjQyXCJ9LHtcImJlZ2luXCI6ODA1LFwiZW5kXCI6ODM1LFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjo4MDUsXCJlbmRcIjo4MzUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjgwNSxcImVuZFwiOjgzNSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo4MDUsXCJlbmRcIjo4MzUsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjo4MDUsXCJlbmRcIjo4MzUsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI0MlwifSx7XCJiZWdpblwiOjgwNSxcImVuZFwiOjgzNSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjQyNCxcImVuZFwiOjI0MzIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjoyNDMzLFwiZW5kXCI6MjQzOCxcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjoyNDMzLFwiZW5kXCI6MjQzOCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjQyNCxcImVuZFwiOjI0MzksXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjQyNCxcImVuZFwiOjI0MzksXCJuYW1lXCI6XCJMVFwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjQ0XCJ9LHtcImJlZ2luXCI6MjQyNCxcImVuZFwiOjI0MzksXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiSU5WQUxJRFwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNDRcIn0se1wiYmVnaW5cIjoyNDI0LFwiZW5kXCI6MjQzOSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjQyNCxcImVuZFwiOjI0MzksXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoyNDI0LFwiZW5kXCI6MjQzOSxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MjQyNCxcImVuZFwiOjI0MzksXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiS0VDQ0FLMjU2XCJ9LHtcImJlZ2luXCI6MjQyNCxcImVuZFwiOjI0MzksXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjVcIn0se1wiYmVnaW5cIjoyNDI0LFwiZW5kXCI6MjQzOSxcIm5hbWVcIjpcIk1VTFwifSx7XCJiZWdpblwiOjI0MjQsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MjM5OCxcImVuZFwiOjI0MzksXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIzOTgsXCJlbmRcIjoyNDM5LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjUwMSxcImVuZFwiOjI1MDIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjI0ODQsXCJlbmRcIjoyNDk4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjRcIn0se1wiYmVnaW5cIjoyNDg0LFwiZW5kXCI6MjQ5OCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6MjQ4NCxcImVuZFwiOjI1MDIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjQ4NCxcImVuZFwiOjI1MDIsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjoyNDg0LFwiZW5kXCI6MjUwMixcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjI0ODQsXCJlbmRcIjoyNTAyLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjQ2XCJ9LHtcImJlZ2luXCI6MjQ4NCxcImVuZFwiOjI1MDIsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjI0ODQsXCJlbmRcIjoyNTAyLFwibmFtZVwiOlwiSU5WQUxJRFwifSx7XCJiZWdpblwiOjI0ODQsXCJlbmRcIjoyNTAyLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNDZcIn0se1wiYmVnaW5cIjoyNDg0LFwiZW5kXCI6MjUwMixcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjQ4NCxcImVuZFwiOjI1MDIsXCJuYW1lXCI6XCJESVZcIn0se1wiYmVnaW5cIjoyNDU5LFwiZW5kXCI6MjQ2NixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoyNDU5LFwiZW5kXCI6MjQ4MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIzXCJ9LHtcImJlZ2luXCI6MjQ1OSxcImVuZFwiOjI0ODAsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoyNDU5LFwiZW5kXCI6MjQ4MCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6MjQ1OSxcImVuZFwiOjI1MDMsXCJuYW1lXCI6XCJHVFwifSx7XCJiZWdpblwiOjI0NTEsXCJlbmRcIjoyNTA0LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6MjQ1MSxcImVuZFwiOjI1MDQsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjoyNDUxLFwiZW5kXCI6MjUwNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI0N1wifSx7XCJiZWdpblwiOjI0NTEsXCJlbmRcIjoyNTA0LFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjoyNDUxLFwiZW5kXCI6MjUwNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjQ1MSxcImVuZFwiOjI1MDQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjQ1MSxcImVuZFwiOjI1MDQsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjoyNDUxLFwiZW5kXCI6MjUwNCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjQ3XCJ9LHtcImJlZ2luXCI6MjQ1MSxcImVuZFwiOjI1MDQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjI1MjMsXCJlbmRcIjoyNTM5LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjoyNTIzLFwiZW5kXCI6MjUzOSxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoyNTIzLFwiZW5kXCI6MjUzOSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI1MjMsXCJlbmRcIjoyNTM5LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjoyNTIzLFwiZW5kXCI6MjUzOSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwifSx7XCJiZWdpblwiOjI1MjMsXCJlbmRcIjoyNTM5LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyNTIzLFwiZW5kXCI6MjUzOSxcIm5hbWVcIjpcIkRJVlwifSx7XCJiZWdpblwiOjI1MjMsXCJlbmRcIjoyNTM5LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGXCJ9LHtcImJlZ2luXCI6MjUyMyxcImVuZFwiOjI1MzksXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjoyNTIyLFwiZW5kXCI6MjUzOSxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjI1MTQsXCJlbmRcIjoyNTQwLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjQ4XCJ9LHtcImJlZ2luXCI6MjUxNCxcImVuZFwiOjI1NDAsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjI1MTQsXCJlbmRcIjoyNTQwLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoyNTE0LFwiZW5kXCI6MjU0MCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNTE0LFwiZW5kXCI6MjU0MCxcIm5hbWVcIjpcIlJFVkVSVFwifSx7XCJiZWdpblwiOjI1MTQsXCJlbmRcIjoyNTQwLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNDhcIn0se1wiYmVnaW5cIjoyNTE0LFwiZW5kXCI6MjU0MCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1NjgsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTY4LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTY4LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1NjgsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTY4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjoyNTc4LFwiZW5kXCI6MjU5MSxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoyNTc4LFwiZW5kXCI6MjU5MSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjI1NzgsXCJlbmRcIjoyNTkxLFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkEwXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIkVYUFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU2OCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1NjgsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTY4LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1NjgsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjhGQ1wifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJNVUxcIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU5MixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU5MixcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJNTE9BRFwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJEVVA2XCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJEVVA5XCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJEVVA5XCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJDQUxMXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJTV0FQNFwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU5MixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU5MixcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjQ5XCJ9LHtcImJlZ2luXCI6MjU1MSxcImVuZFwiOjI1OTIsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU5MixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU5MixcIm5hbWVcIjpcIlJFVkVSVFwifSx7XCJiZWdpblwiOjI1NTEsXCJlbmRcIjoyNTkyLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNDlcIn0se1wiYmVnaW5cIjoyNTUxLFwiZW5kXCI6MjU5MixcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MjYwMixcImVuZFwiOjI2MTgsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjI2MDIsXCJlbmRcIjoyNjE4LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MjYwMixcImVuZFwiOjI2MjUsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjYwMixcImVuZFwiOjI2MjUsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiRkYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIk5PVFwifSx7XCJiZWdpblwiOjI2MDIsXCJlbmRcIjoyNjI1LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MjYwMixcImVuZFwiOjI2MjUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIn0se1wiYmVnaW5cIjoyNjAyLFwiZW5kXCI6MjYyNSxcIm5hbWVcIjpcIk9SXCJ9LHtcImJlZ2luXCI6MjYwMixcImVuZFwiOjI2MjUsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjI2MDIsXCJlbmRcIjoyNjI1LFwibmFtZVwiOlwiU1NUT1JFXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjIzMzMsXCJlbmRcIjoyNjMyLFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltvdXRdXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIzXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjo2OTMsXCJlbmRcIjo3MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIktFQ0NBSzI1NlwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6NjkzLFwiZW5kXCI6NzM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjY5MyxcImVuZFwiOjczNCxcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjE5XCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo2MjgsXCJlbmRcIjo2NTAsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJFWFBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6NjI4LFwiZW5kXCI6NjUwLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjYyOCxcImVuZFwiOjY1MCxcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjIyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJMVFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI1MFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSU5WQUxJRFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjUwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJLRUNDQUsyNTZcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI1XCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTVVMXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTVVMXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRJVlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMUZcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJESVZcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNVUxcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNTE9BRFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxMDBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNVUxcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRElWXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI1MlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxRlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkxUXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjUzXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRJVlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIk1VTFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjUyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjUzXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJLRUNDQUsyNTZcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjU0XCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJHVFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI1NFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFGXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNTJcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQNVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjNcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVA1XCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVA0XCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiQTBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiRVhQXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjo1OTcsXCJlbmRcIjo2MjIsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkRJVlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJGRlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6NTk3LFwiZW5kXCI6NjIyLFwibmFtZVwiOlwiRFVQNlwifSx7XCJiZWdpblwiOjU5NyxcImVuZFwiOjYyMixcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjI5XCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjo3NDAsXCJlbmRcIjo3NjYsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6NzQwLFwiZW5kXCI6NzY2LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjc0MCxcImVuZFwiOjc2NixcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MTI3MyxcImVuZFwiOjEyOTgsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiNTVcIn0se1wiYmVnaW5cIjoxMjczLFwiZW5kXCI6MTI5OCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI1NlwifSx7XCJiZWdpblwiOjEyNzMsXCJlbmRcIjoxMjk4LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltpbl1cIn0se1wiYmVnaW5cIjoxMjczLFwiZW5kXCI6MTI5OCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjU1XCJ9LHtcImJlZ2luXCI6MTI3MyxcImVuZFwiOjEyOTgsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjgyNyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6ODI3LFwiZW5kXCI6ODM0LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjo4MTMsXCJlbmRcIjo4MjMsXCJuYW1lXCI6XCJDQUxMRVJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkEwXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIkVYUFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjo4MTMsXCJlbmRcIjo4MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjgxMyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo4MTMsXCJlbmRcIjo4MzQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjo4MjcsXCJlbmRcIjo4MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjgyNyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjgxMyxcImVuZFwiOjgzNCxcIm5hbWVcIjpcIkVRXCJ9LHtcImJlZ2luXCI6ODA1LFwiZW5kXCI6ODM1LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjU4XCJ9LHtcImJlZ2luXCI6ODA1LFwiZW5kXCI6ODM1LFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjo4MDUsXCJlbmRcIjo4MzUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjgwNSxcImVuZFwiOjgzNSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjo4MDUsXCJlbmRcIjo4MzUsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjo4MDUsXCJlbmRcIjo4MzUsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI1OFwifSx7XCJiZWdpblwiOjgwNSxcImVuZFwiOjgzNSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiQTBcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiRFVQNlwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiRFVQNlwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiQTBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiRVhQXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiRFVQNVwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI2MFwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiODBcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjEzMDEsXCJlbmRcIjoxODA2LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjoxMzAxLFwiZW5kXCI6MTgwNixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTMwMSxcImVuZFwiOjE4MDYsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI2MVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltpbl1cIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjYwXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNXQVAzXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNXQVAzXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJLRUNDQUsyNTZcIn0se1wiYmVnaW5cIjoxOTQ0LFwiZW5kXCI6MTk1NCxcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjoxOTQ0LFwiZW5kXCI6MTk1NCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiTVVMXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxOTQ0LFwiZW5kXCI6MTk1NCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI2M1wifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI2NFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltpbl1cIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjYzXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJOT1RcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiQTBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiRVhQXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJPUlwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIk1VTFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiRkYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIk5PVFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNXQVAzXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIk9SXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiU1NUT1JFXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiODBcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIzXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjE5MzAsXCJlbmRcIjoxOTU1LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MTkzMCxcImVuZFwiOjE5NTUsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoxOTMwLFwiZW5kXCI6MTk1NSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjoxMTU5LFwiZW5kXCI6MTk2MixcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjExNTksXCJlbmRcIjoxOTYyLFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6MTE1OSxcImVuZFwiOjE5NjIsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW291dF1cIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCIzNVwifSx7XCJiZWdpblwiOjY1NixcImVuZFwiOjY4NyxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6NjU2LFwiZW5kXCI6Njg3LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjY1NixcImVuZFwiOjY4NyxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjo2NTYsXCJlbmRcIjo2ODcsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW291dF1cIn0se1wiYmVnaW5cIjo5OTQsXCJlbmRcIjoxMTUzLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiMzdcIn0se1wiYmVnaW5cIjo5OTQsXCJlbmRcIjoxMTUzLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoxMDYxLFwiZW5kXCI6MTA4MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6MTA2MSxcImVuZFwiOjEwODAsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjEwNDksXCJlbmRcIjoxMDU4LFwibmFtZVwiOlwiQ0FMTFZBTFVFXCJ9LHtcImJlZ2luXCI6MTA0OSxcImVuZFwiOjEwODAsXCJuYW1lXCI6XCJHVFwifSx7XCJiZWdpblwiOjEwNDEsXCJlbmRcIjoxMDgxLFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjY2XCJ9LHtcImJlZ2luXCI6MTA0MSxcImVuZFwiOjEwODEsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjEwNDEsXCJlbmRcIjoxMDgxLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoxMDQxLFwiZW5kXCI6MTA4MSxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoxMDQxLFwiZW5kXCI6MTA4MSxcIm5hbWVcIjpcIlJFVkVSVFwifSx7XCJiZWdpblwiOjEwNDEsXCJlbmRcIjoxMDgxLFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNjZcIn0se1wiYmVnaW5cIjoxMDQxLFwiZW5kXCI6MTA4MSxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6MTEwMixcImVuZFwiOjExMTIsXCJuYW1lXCI6XCJDQUxMRVJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkEwXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIkVYUFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjoxMDkyLFwiZW5kXCI6MTExMyxcIm5hbWVcIjpcIkFORFwifSx7XCJiZWdpblwiOjEwOTIsXCJlbmRcIjoxMTEzLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjoxMDkyLFwiZW5kXCI6MTExMyxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMTMsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMTMsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjoxMDkyLFwiZW5kXCI6MTEwMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIzXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMTMsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoxMDkyLFwiZW5kXCI6MTExMyxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjEwOTIsXCJlbmRcIjoxMTEzLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMTMsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjEwOTIsXCJlbmRcIjoxMTEzLFwibmFtZVwiOlwiS0VDQ0FLMjU2XCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMjAsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMjAsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiRkZcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiTk9UXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMjAsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjoxMDkyLFwiZW5kXCI6MTEyMCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMjAsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMjAsXCJuYW1lXCI6XCJPUlwifSx7XCJiZWdpblwiOjEwOTIsXCJlbmRcIjoxMTIwLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxMDkyLFwiZW5kXCI6MTEyMCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTA5MixcImVuZFwiOjExMjAsXCJuYW1lXCI6XCJTU1RPUkVcIn0se1wiYmVnaW5cIjoxMTMwLFwiZW5kXCI6MTE0NCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0XCJ9LHtcImJlZ2luXCI6MTEzMCxcImVuZFwiOjExNDYsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MTEzMCxcImVuZFwiOjExNDYsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjExMzAsXCJlbmRcIjoxMTQ2LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoxMTMwLFwiZW5kXCI6MTE0NixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MTEzMCxcImVuZFwiOjExNDYsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoxMTMwLFwiZW5kXCI6MTE0NixcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MTEzMCxcImVuZFwiOjExNDYsXCJuYW1lXCI6XCJTU1RPUkVcIn0se1wiYmVnaW5cIjo5OTQsXCJlbmRcIjoxMTUzLFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltvdXRdXCJ9LHtcImJlZ2luXCI6MTk2OCxcImVuZFwiOjIzMjcsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyMDIxLFwiZW5kXCI6MjA0NCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNTUsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjA1NixcImVuZFwiOjIwNjEsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiTFRcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiNjhcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJJTlZBTElEXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI2OFwifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIkRVUDRcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIktFQ0NBSzI1NlwifSx7XCJiZWdpblwiOjIxNzksXCJlbmRcIjoyMTg5LFwibmFtZVwiOlwiQ0FMTEVSXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJFWFBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6MjE2OSxcImVuZFwiOjIxOTAsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjoyMTY5LFwiZW5kXCI6MjE5MCxcIm5hbWVcIjpcIkRVUDVcIn0se1wiYmVnaW5cIjoyMTY5LFwiZW5kXCI6MjE5MCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjIxNjksXCJlbmRcIjoyMTc4LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjNcIn0se1wiYmVnaW5cIjoyMTY5LFwiZW5kXCI6MjE5MCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjE2OSxcImVuZFwiOjIxOTAsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjIxNjksXCJlbmRcIjoyMTkwLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjE2OSxcImVuZFwiOjIxOTAsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjoyMTY5LFwiZW5kXCI6MjE5MCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjE2OSxcImVuZFwiOjIxOTAsXCJuYW1lXCI6XCJTV0FQM1wifSx7XCJiZWdpblwiOjIxNjksXCJlbmRcIjoyMTkwLFwibmFtZVwiOlwiS0VDQ0FLMjU2XCJ9LHtcImJlZ2luXCI6MjE2OSxcImVuZFwiOjIxOTAsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjVcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIk1VTFwifSx7XCJiZWdpblwiOjIwNDcsXCJlbmRcIjoyMDYyLFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MjA0NyxcImVuZFwiOjIwNjIsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjoyMDQ3LFwiZW5kXCI6MjA2MixcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjIxNjksXCJlbmRcIjoyMTkwLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGXCJ9LHtcImJlZ2luXCI6MjE2OSxcImVuZFwiOjIxOTAsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjoyMTYxLFwiZW5kXCI6MjE5MSxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjIxNjEsXCJlbmRcIjoyMTkxLFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6MjE2MSxcImVuZFwiOjIxOTEsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiNzBcIn0se1wiYmVnaW5cIjoyMTYxLFwiZW5kXCI6MjE5MSxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6MjE2MSxcImVuZFwiOjIxOTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjIxNjEsXCJlbmRcIjoyMTkxLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjIxNjEsXCJlbmRcIjoyMTkxLFwibmFtZVwiOlwiUkVWRVJUXCJ9LHtcImJlZ2luXCI6MjE2MSxcImVuZFwiOjIxOTEsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI3MFwifSx7XCJiZWdpblwiOjIxNjEsXCJlbmRcIjoyMTkxLFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjoyMjI4LFwiZW5kXCI6MjIzOCxcIm5hbWVcIjpcIkNBTExFUlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiQTBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiRVhQXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjIyMTAsXCJlbmRcIjoyMjM5LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MjIxMCxcImVuZFwiOjIyMzksXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjIyMTAsXCJlbmRcIjoyMjM5LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyMjEwLFwiZW5kXCI6MjIzOSxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjoyMjEwLFwiZW5kXCI6MjIzOSxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjIyMTAsXCJlbmRcIjoyMjI3LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjRcIn0se1wiYmVnaW5cIjoyMjEwLFwiZW5kXCI6MjIyNyxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjoyMjEwLFwiZW5kXCI6MjIyNyxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjIyMTAsXCJlbmRcIjoyMjM5LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6MjIxMCxcImVuZFwiOjIyMzksXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjoyMjEwLFwiZW5kXCI6MjIzOSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjIyMTAsXCJlbmRcIjoyMjM5LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyMjEwLFwiZW5kXCI6MjIzOSxcIm5hbWVcIjpcIktFQ0NBSzI1NlwifSx7XCJiZWdpblwiOjIyMTAsXCJlbmRcIjoyMjM5LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjoyMjEwLFwiZW5kXCI6MjIzOSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJGRlwifSx7XCJiZWdpblwiOjIyMTAsXCJlbmRcIjoyMjM5LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6MjIwOSxcImVuZFwiOjIyMzksXCJuYW1lXCI6XCJJU1pFUk9cIn0se1wiYmVnaW5cIjoyMjAxLFwiZW5kXCI6MjI0MCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI3MVwifSx7XCJiZWdpblwiOjIyMDEsXCJlbmRcIjoyMjQwLFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjoyMjAxLFwiZW5kXCI6MjI0MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjIwMSxcImVuZFwiOjIyNDAsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjIwMSxcImVuZFwiOjIyNDAsXCJuYW1lXCI6XCJSRVZFUlRcIn0se1wiYmVnaW5cIjoyMjAxLFwiZW5kXCI6MjI0MCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjcxXCJ9LHtcImJlZ2luXCI6MjIwMSxcImVuZFwiOjIyNDAsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjIyNjksXCJlbmRcIjoyMjc5LFwibmFtZVwiOlwiQ0FMTEVSXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJFWFBcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiU1VCXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODAsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjoyMjUxLFwiZW5kXCI6MjI4MCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODAsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIyNTEsXCJlbmRcIjoyMjgwLFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjIyNTEsXCJlbmRcIjoyMjgwLFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyNjgsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJiZWdpblwiOjIyNTEsXCJlbmRcIjoyMjY4LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjIyNTEsXCJlbmRcIjoyMjY4LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODAsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjoyMjUxLFwiZW5kXCI6MjI4MCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjIyNTEsXCJlbmRcIjoyMjgwLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODAsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIyNTEsXCJlbmRcIjoyMjgwLFwibmFtZVwiOlwiS0VDQ0FLMjU2XCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODcsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODcsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiRkZcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiTk9UXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODcsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjotMSxcImVuZFwiOi0xLFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjoyMjUxLFwiZW5kXCI6MjI4NyxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODcsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODcsXCJuYW1lXCI6XCJPUlwifSx7XCJiZWdpblwiOjIyNTEsXCJlbmRcIjoyMjg3LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjoyMjUxLFwiZW5kXCI6MjI4NyxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6MjI1MSxcImVuZFwiOjIyODcsXCJuYW1lXCI6XCJTU1RPUkVcIn0se1wiYmVnaW5cIjoyMjk3LFwiZW5kXCI6MjMxOCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIzXCJ9LHtcImJlZ2luXCI6MjI5NyxcImVuZFwiOjIzMTgsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIyOTcsXCJlbmRcIjoyMzE4LFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjoyMjk3LFwiZW5kXCI6MjMxOCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjIyOTcsXCJlbmRcIjoyMzIwLFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjIyOTcsXCJlbmRcIjoyMzIwLFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjoyMjk3LFwiZW5kXCI6MjMyMCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6MjI5NyxcImVuZFwiOjIzMjAsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjIyOTcsXCJlbmRcIjoyMzIwLFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6MjI5NyxcImVuZFwiOjIzMjAsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjIyOTcsXCJlbmRcIjoyMzIwLFwibmFtZVwiOlwiU1NUT1JFXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjE5NjgsXCJlbmRcIjoyMzI3LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltvdXRdXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjU2XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCJBMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI3MlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiNzNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltpbl1cIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNzJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiTVNUT1JFXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjgwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltvdXRdXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjYxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVA0XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkdUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI3NVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNVUxcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNVUxcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIktFQ0NBSzI1NlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjc1XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI3NlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW2luXVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI3NVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW291dF1cIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNjRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNMT0FEXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIk1VTFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTVUJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQU5EXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRJVlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIktFQ0NBSzI1NlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMUZcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIyMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJESVZcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMUZcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiTFRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjc4XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBJXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiTUxPQURcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIkZGXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIk5PVFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQNFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJPUlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVA2XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiODBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI3OFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVA2XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiODBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiNzlcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkdUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIklTWkVST1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiODBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUElcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNTE9BRFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiNzlcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI4MFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjgxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAyXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIlBPUFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiODJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltpbl1cIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiODFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI3M1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIk1MT0FEXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCI0MFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJNU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltvdXRdXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjc2XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI4M1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI4NFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiR1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI4MVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiODZcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI4N1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QXCIsXCJ2YWx1ZVwiOlwiW2luXVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI4NlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTU1RPUkVcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQM1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTTE9BRFwifSx7XCJiZWdpblwiOi0xLFwiZW5kXCI6LTEsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGXCJ9LHtcImJlZ2luXCI6LTEsXCJlbmRcIjotMSxcIm5hbWVcIjpcIk5PVFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1NUT1JFXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjg0XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiODNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltvdXRdXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcInRhZ1wiLFwidmFsdWVcIjpcIjgyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBERVNUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI4M1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJ0YWdcIixcInZhbHVlXCI6XCI4OVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QREVTVFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiR1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI4MVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJEVVAyXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNTVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBRERcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjg5XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiODdcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU0xPQURcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRFVQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSVNaRVJPXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIxMDBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiTVVMXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNVQlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJBTkRcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRElWXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1NUT1JFXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFGXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkxUXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI5MlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJKVU1QSVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQT1BcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSCBbdGFnXVwiLFwidmFsdWVcIjpcIjkzXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiOTJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjFGXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkFERFwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiU1dBUDFcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiRElWXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0hcIixcInZhbHVlXCI6XCIwXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIk1TVE9SRVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUFVTSFwiLFwidmFsdWVcIjpcIjBcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiS0VDQ0FLMjU2XCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkRVUDJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiQUREXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlNXQVAxXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIlBVU0ggW3RhZ11cIixcInZhbHVlXCI6XCI5M1wifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMlwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJTV0FQMVwifSx7XCJiZWdpblwiOjM3NSxcImVuZFwiOjI2MzQsXCJuYW1lXCI6XCJQVVNIIFt0YWddXCIsXCJ2YWx1ZVwiOlwiODJcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUFwiLFwidmFsdWVcIjpcIltpbl1cIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwidGFnXCIsXCJ2YWx1ZVwiOlwiOTNcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiSlVNUERFU1RcIn0se1wiYmVnaW5cIjozNzUsXCJlbmRcIjoyNjM0LFwibmFtZVwiOlwiUE9QXCJ9LHtcImJlZ2luXCI6Mzc1LFwiZW5kXCI6MjYzNCxcIm5hbWVcIjpcIkpVTVBcIixcInZhbHVlXCI6XCJbb3V0XVwifV19fX19fX19LFwiYnl0ZWNvZGVcIjpcIjYwNjA2MDQwNTIzNDE1NjEwMDBmNTc2MDAwODBmZDViNjEwYmVjODA2MTAwMWU2MDAwMzk2MDAwZjMwMDYwNjA2MDQwNTI2MDA0MzYxMDYxMDA1NjU3NjNmZmZmZmZmZjdjMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDAzNTA0MTY2MzMzOWQ1MGE1ODExNDYxMDA1YjU3ODA2MzRhY2I5ZDRmMTQ2MTAwOWE1NzgwNjNhMzMwM2E3NTE0NjEwMTAwNTc1YjYwMDA4MGZkNWIzNDE1NjEwMDY2NTc2MDAwODBmZDViNjEwMDcxNjAwNDM1NjEwMTE4NTY1YjYwNDA1MTczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjkwOTExNjgxNTI2MDIwMDE2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMGE1NTc2MDAwODBmZDViNjEwMGFkNjEwMTRkNTY1YjYwNDA1MTYwMjA4MDgyNTI4MTkwODEwMTgzODE4MTUxODE1MjYwMjAwMTkxNTA4MDUxOTA2MDIwMDE5MDYwMjAwMjgwODM4MzYwMDA1YjgzODExMDE1NjEwMGVjNTc4MDgyMDE1MTgzODIwMTUyNjAyMDAxNjEwMGQ0NTY1YjUwNTA1MDUwOTA1MDAxOTI1MDUwNTA2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMTBiNTc2MDAwODBmZDViNjEwMTE2NjAwNDM1NjEwMWMzNTY1YjAwNWI2MDAwODA1NDgyOTA4MTEwNjEwMTI2NTdmZTViNjAwMDkxODI1MjYwMjA5MDkxMjAwMTU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY5MDUwODE1NjViNjEwMTU1NjEwMjY0NTY1YjYwMDA4MDU0ODA2MDIwMDI2MDIwMDE2MDQwNTE5MDgxMDE2MDQwNTI4MDkyOTE5MDgxODE1MjYwMjAwMTgyODA1NDgwMTU2MTAxYjg1NzYwMjAwMjgyMDE5MTkwNjAwMDUyNjAyMDYwMDAyMDkwNWI4MTU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY4MTUyNjAwMTkwOTEwMTkwNjAyMDAxODA4MzExNjEwMThkNTc1YjUwNTA1MDUwNTA5MDUwNWI5MDU2NWI2MDAwODEzMzYxMDFjZjYxMDI3NjU2NWI5MTgyNTI3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjYwMjA4MjAxNTI2MDQwOTA4MTAxOTA1MTgwOTEwMzkwNjAwMGYwODAxNTE1NjEwMjA3NTc2MDAwODBmZDViOTA1MDYwMDA4MDU0ODA2MDAxMDE4MjgxNjEwMjFkOTE5MDYxMDI4NjU2NWI1MDYwMDA5MTgyNTI2MDIwOTA5MTIwMDE4MDU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTkxNjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjkyOTA5MjE2OTE5MDkxMTc5MDU1NTA1NjViNjAyMDYwNDA1MTkwODEwMTYwNDA1MjYwMDA4MTUyOTA1NjViNjA0MDUxNjEwOGYzODA2MTAyY2U4MzM5MDE5MDU2NWI4MTU0ODE4MzU1ODE4MTE1MTE2MTAyYWE1NzYwMDA4MzgxNTI2MDIwOTAyMDYxMDJhYTkxODEwMTkwODMwMTYxMDJhZjU2NWI1MDUwNTA1NjViNjEwMWMwOTE5MDViODA4MjExMTU2MTAyYzk1NzYwMDA4MTU1NjAwMTAxNjEwMmI1NTY1YjUwOTA1NjAwNjA2MDYwNDA1MjM0MTU2MTAwMGY1NzYwMDA4MGZkNWI2MDQwNTE2MDQwODA2MTA4ZjM4MzM5ODEwMTYwNDA1MjgwODA1MTkxOTA2MDIwMDE4MDUxNjAwMTgwNTQ2MDAxNjBhMDYwMDIwYTAzMTkxNjYwMDE2MGEwNjAwMjBhMDM5MjkwOTIxNjkxOTA5MTE3OTA1NTUwNTA2MDAyNTU2MTA4OTY4MDYxMDA1ZDYwMDAzOTYwMDBmMzAwNjA2MDYwNDA1MjYwMDQzNjEwNjEwMDk4NTc2M2ZmZmZmZmZmN2MwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwMDM1MDQxNjYzMDM0NDEwMDY4MTE0NjEwMDlkNTc4MDYzMGExNDQzOTExNDYxMDBiNTU3ODA2MzQ4MWM2YTc1MTQ2MTAwZTg1NzgwNjM4MWQxMmM1ODE0NjEwMTE3NTc4MDYzODJmZGUwOTMxNDYxMDFjZDU3ODA2MzhhOWNmZDU1MTQ2MTAxZjI1NzgwNjM5MzdlMDliMTE0NjEwMjUzNTc4MDYzZDdiYjk5YmExNDYxMDI2NjU3ODA2M2Q3ZDFiYmRiMTQ2MTAyNmU1NzViNjAwMDgwZmQ1YjM0MTU2MTAwYTg1NzYwMDA4MGZkNWI2MTAwYjM2MDA0MzU2MTAyODQ1NjViMDA1YjM0MTU2MTAwYzA1NzYwMDA4MGZkNWI2MTAwZDQ2MDAxNjBhMDYwMDIwYTAzNjAwNDM1MTY2MTAzODA1NjViNjA0MDUxOTAxNTE1ODE1MjYwMjAwMTYwNDA1MTgwOTEwMzkwZjM1YjM0MTU2MTAwZjM1NzYwMDA4MGZkNWI2MTAwZmI2MTAzOTU1NjViNjA0MDUxNjAwMTYwYTA2MDAyMGEwMzkwOTExNjgxNTI2MDIwMDE2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMTIyNTc2MDAwODBmZDViNjEwMTJkNjAwNDM1NjEwM2E0NTY1YjYwNDA1MTYwMjA4MTAxODU5MDUyNjAwMTYwYTA2MDAyMGEwMzg0MTY2MDQwODIwMTUyODIxNTE1NjA2MDgyMDE1MjYwODA4MTAxODI5MDUyNjBhMDgwODI1MjgxOTA4MTAxODc4MTgxNTE4MTUyNjAyMDAxOTE1MDgwNTE5MDYwMjAwMTkwODA4MzgzNjAwMDViODM4MTEwMTU2MTAxOGU1NzgwODIwMTUxODM4MjAxNTI2MDIwMDE2MTAxNzY1NjViNTA1MDUwNTA5MDUwOTA4MTAxOTA2MDFmMTY4MDE1NjEwMWJiNTc4MDgyMDM4MDUxNjAwMTgzNjAyMDAzNjEwMTAwMGEwMzE5MTY4MTUyNjAyMDAxOTE1MDViNTA5NjUwNTA1MDUwNTA1MDUwNjA0MDUxODA5MTAzOTBmMzViMzQxNTYxMDFkODU3NjAwMDgwZmQ1YjYxMDFlMDYxMDRhMjU2NWI2MDQwNTE5MDgxNTI2MDIwMDE2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMWZkNTc2MDAwODBmZDViNjEwMGIzNjAwNDYwMjQ4MTM1ODE4MTAxOTA4MzAxMzU4MDYwMjA2MDFmODIwMTgxOTAwNDgxMDIwMTYwNDA1MTkwODEwMTYwNDA1MjgxODE1MjkyOTE5MDYwMjA4NDAxODM4MzgwODI4NDM3NTA5NDk2NTA1MDg0MzU5NDYwMjAwMTM1NjAwMTYwYTA2MDAyMGEwMzE2OTM1MDYxMDRhODkyNTA1MDUwNTY1YjM0MTU2MTAyNWU1NzYwMDA4MGZkNWI2MTAxZTA2MTA1ZDE1NjViNjEwMGIzNjEwNWQ3NTY1YjM0MTU2MTAyNzk1NzYwMDA4MGZkNWI2MTAwYjM2MDA0MzU2MTA2MTY1NjViNjAwMTU0NjAwMDkwMzM2MDAxNjBhMDYwMDIwYTAzOTA4MTE2OTExNjE0NjEwMmEyNTc2MDAwODBmZDViNjAwMDgwNTQ4MzkwODExMDYxMDJiMDU3ZmU1YjkwNjAwMDUyNjAyMDYwMDAyMDkwNjAwNTAyMDE5MDUwNjAwMjYwMDQ1NDgxMTUxNTYxMDJjZTU3ZmU1YjA0ODE2MDAzMDE1NDExMTUxNTYxMDJlMDU3NjAwMDgwZmQ1YjYwMDI4MTAxNTQ3NDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDQ2MGZmMTYxNTYxMDMwYTU3NjAwMDgwZmQ1YjYwMDI4MTAxNTQ2MDAxODIwMTU0NjAwMTYwYTA2MDAyMGEwMzkwOTExNjkwODAxNTYxMDhmYzAyOTA2MDQwNTE2MDAwNjA0MDUxODA4MzAzODE4NTg4ODhmMTkzNTA1MDUwNTAxNTE1NjEwMzQ3NTc2MDAwODBmZDViNjAwMjAxODA1NDc0ZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTkxNjc0MDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTc5MDU1NTA1NjViNjAwMzYwMjA1MjYwMDA5MDgxNTI2MDQwOTAyMDU0NjBmZjE2ODE1NjViNjAwMTU0NjAwMTYwYTA2MDAyMGEwMzE2ODE1NjViNjAwMDgwNTQ4MjkwODExMDYxMDNiMjU3ZmU1YjkwNjAwMDUyNjAyMDYwMDAyMDkwNjAwNTAyMDE2MDAwOTE1MDkwNTA4MDYwMDAwMTgwNTQ2MDAxODE2MDAxMTYxNTYxMDEwMDAyMDMxNjYwMDI5MDA0ODA2MDFmMDE2MDIwODA5MTA0MDI2MDIwMDE2MDQwNTE5MDgxMDE2MDQwNTI4MDkyOTE5MDgxODE1MjYwMjAwMTgyODA1NDYwMDE4MTYwMDExNjE1NjEwMTAwMDIwMzE2NjAwMjkwMDQ4MDE1NjEwNDVlNTc4MDYwMWYxMDYxMDQzMzU3NjEwMTAwODA4MzU0MDQwMjgzNTI5MTYwMjAwMTkxNjEwNDVlNTY1YjgyMDE5MTkwNjAwMDUyNjAyMDYwMDAyMDkwNWI4MTU0ODE1MjkwNjAwMTAxOTA2MDIwMDE4MDgzMTE2MTA0NDE1NzgyOTAwMzYwMWYxNjgyMDE5MTViNTA1MDUwNTA2MDAxODMwMTU0NjAwMjg0MDE1NDYwMDM5MDk0MDE1NDkyOTM5MDkyNjAwMTYwYTA2MDAyMGEwMzgyMTY5MjUwNzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDkxMDQ2MGZmMTY5MDg1NTY1YjYwMDQ1NDgxNTY1YjYxMDRiMDYxMDZiZTU2NWI2MDAxNTQzMzYwMDE2MGEwNjAwMjBhMDM5MDgxMTY5MTE2MTQ2MTA0Y2I1NzYwMDA4MGZkNWI2MGEwNjA0MDUxOTA4MTAxNjA0MDUyODA4NTgxNTI2MDIwMDE4NDgxNTI2MDIwMDE4MzYwMDE2MGEwNjAwMjBhMDMxNjgxNTI2MDIwMDE2MDAwMTUxNTgxNTI2MDIwMDE2MDAwODE1MjUwOTA1MDYwMDA4MDU0ODA2MDAxMDE4MjgxNjEwNTE2OTE5MDYxMDZmNDU2NWI2MDAwOTI4MzUyNjAyMDkwOTIyMDgzOTE2MDA1MDIwMTgxNTE4MTkwODA1MTYxMDUzYTkyOTE2MDIwMDE5MDYxMDcyNTU2NWI1MDYwMjA4MjAxNTE4MTYwMDEwMTU1NjA0MDgyMDE1MTYwMDI4MjAxODA1NDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE5MTY2MDAxNjBhMDYwMDIwYTAzOTI5MDkyMTY5MTkwOTExNzkwNTU2MDYwODIwMTUxNjAwMjgyMDE4MDU0OTExNTE1NzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjc0ZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTk5MDkyMTY5MTkwOTExNzkwNTU2MDgwODIwMTUxODE2MDAzMDE1NTUwNTA1MDUwNTA1MDUwNTY1YjYwMDI1NDgxNTY1YjYwMDI1NDM0MTE2MTA1ZTU1NzYwMDA4MGZkNWI2MDAxNjBhMDYwMDIwYTAzMzMxNjYwMDA5MDgxNTI2MDAzNjAyMDUyNjA0MDkwMjA4MDU0NjBmZjE5MTY2MDAxOTA4MTE3OTA5MTU1NjAwNDgwNTQ5MDkxMDE5MDU1NTY1YjYwMDA4MDgyODE1NDgxMTAxNTE1NjEwNjI2NTdmZTViNjAwMDkxODI1MjYwMjA4MDgzMjA2MDAxNjBhMDYwMDIwYTAzMzMxNjg0NTI2MDAzOTA5MTUyNjA0MDkwOTIyMDU0NjAwNTkwOTEwMjkwOTEwMTkxNTA2MGZmMTYxNTE1NjEwNjVmNTc2MDAwODBmZDViNjAwMTYwYTA2MDAyMGEwMzMzMTY2MDAwOTA4MTUyNjAwNDgyMDE2MDIwNTI2MDQwOTAyMDU0NjBmZjE2MTU2MTA2ODc1NzYwMDA4MGZkNWI2MDAxNjBhMDYwMDIwYTAzMzMxNjYwMDA5MDgxNTI2MDA0ODIwMTYwMjA1MjYwNDA5MDIwODA1NDYwZmYxOTE2NjAwMTkwODExNzkwOTE1NTYwMDM5MDkxMDE4MDU0OTA5MTAxOTA1NTUwNTY1YjYwYTA2MDQwNTE5MDgxMDE2MDQwNTI4MDYxMDZkMjYxMDdhMzU2NWI4MTUyNjAwMDYwMjA4MjAxODE5MDUyNjA0MDgyMDE4MTkwNTI2MDYwODIwMTgxOTA1MjYwODA5MDkxMDE1MjkwNTY1YjgxNTQ4MTgzNTU4MTgxMTUxMTYxMDcyMDU3NjAwNTAyODE2MDA1MDI4MzYwMDA1MjYwMjA2MDAwMjA5MTgyMDE5MTAxNjEwNzIwOTE5MDYxMDdiNTU2NWI1MDUwNTA1NjViODI4MDU0NjAwMTgxNjAwMTE2MTU2MTAxMDAwMjAzMTY2MDAyOTAwNDkwNjAwMDUyNjAyMDYwMDAyMDkwNjAxZjAxNjAyMDkwMDQ4MTAxOTI4MjYwMWYxMDYxMDc2NjU3ODA1MTYwZmYxOTE2ODM4MDAxMTc4NTU1NjEwNzkzNTY1YjgyODAwMTYwMDEwMTg1NTU4MjE1NjEwNzkzNTc5MTgyMDE1YjgyODExMTE1NjEwNzkzNTc4MjUxODI1NTkxNjAyMDAxOTE5MDYwMDEwMTkwNjEwNzc4NTY1YjUwNjEwNzlmOTI5MTUwNjEwODA5NTY1YjUwOTA1NjViNjAyMDYwNDA1MTkwODEwMTYwNDA1MjYwMDA4MTUyOTA1NjViNjEwODA2OTE5MDViODA4MjExMTU2MTA3OWY1NzYwMDA2MTA3Y2Y4MjgyNjEwODIzNTY1YjUwNjAwMDYwMDE4MjAxODE5MDU1NjAwMjgyMDE4MDU0NzRmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxOTE2OTA1NTYwMDM4MjAxNTU2MDA1MDE2MTA3YmI1NjViOTA1NjViNjEwODA2OTE5MDViODA4MjExMTU2MTA3OWY1NzYwMDA4MTU1NjAwMTAxNjEwODBmNTY1YjUwODA1NDYwMDE4MTYwMDExNjE1NjEwMTAwMDIwMzE2NjAwMjkwMDQ2MDAwODI1NTgwNjAxZjEwNjEwODQ5NTc1MDYxMDg2NzU2NWI2MDFmMDE2MDIwOTAwNDkwNjAwMDUyNjAyMDYwMDAyMDkwODEwMTkwNjEwODY3OTE5MDYxMDgwOTU2NWI1MDU2MDBhMTY1NjI3YTdhNzIzMDU4MjA0OWU0MDA1OTNmN2U2ZjNhZWVjMzFkODNjNjQzYzA3MWE3ZTQ4MGNlYjgyZDQ0Y2FiZTgwZjQzMDRkZGYwMDBiMDAyOWExNjU2MjdhN2E3MjMwNTgyMGNjNDlhYjJjNzZjNTlmYTFlNDg5OTAwN2U1YzFhMzllYmE5ZmYwNWRmNmEwNDNmOGNhZjgyOTNjNjRlZDM5MjEwMDI5XCIsXCJmdW5jdGlvbkhhc2hlc1wiOntcImNyZWF0ZUNhbXBhaWduKHVpbnQyNTYpXCI6XCJhMzMwM2E3NVwiLFwiZGVwbG95ZWRDYW1wYWlnbnModWludDI1NilcIjpcIjMzOWQ1MGE1XCIsXCJnZXREZXBsb3llZENhbXBhaWducygpXCI6XCI0YWNiOWQ0ZlwifSxcImdhc0VzdGltYXRlc1wiOntcImNyZWF0aW9uXCI6WzY0MCw2MTA0MDBdLFwiZXh0ZXJuYWxcIjp7XCJjcmVhdGVDYW1wYWlnbih1aW50MjU2KVwiOm51bGwsXCJkZXBsb3llZENhbXBhaWducyh1aW50MjU2KVwiOjY4OCxcImdldERlcGxveWVkQ2FtcGFpZ25zKClcIjpudWxsfSxcImludGVybmFsXCI6e319LFwiaW50ZXJmYWNlXCI6XCJbe1xcXCJjb25zdGFudFxcXCI6dHJ1ZSxcXFwiaW5wdXRzXFxcIjpbe1xcXCJuYW1lXFxcIjpcXFwiXFxcIixcXFwidHlwZVxcXCI6XFxcInVpbnQyNTZcXFwifV0sXFxcIm5hbWVcXFwiOlxcXCJkZXBsb3llZENhbXBhaWduc1xcXCIsXFxcIm91dHB1dHNcXFwiOlt7XFxcIm5hbWVcXFwiOlxcXCJcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiYWRkcmVzc1xcXCJ9XSxcXFwicGF5YWJsZVxcXCI6ZmFsc2UsXFxcInN0YXRlTXV0YWJpbGl0eVxcXCI6XFxcInZpZXdcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifSx7XFxcImNvbnN0YW50XFxcIjp0cnVlLFxcXCJpbnB1dHNcXFwiOltdLFxcXCJuYW1lXFxcIjpcXFwiZ2V0RGVwbG95ZWRDYW1wYWlnbnNcXFwiLFxcXCJvdXRwdXRzXFxcIjpbe1xcXCJuYW1lXFxcIjpcXFwiXFxcIixcXFwidHlwZVxcXCI6XFxcImFkZHJlc3NbXVxcXCJ9XSxcXFwicGF5YWJsZVxcXCI6ZmFsc2UsXFxcInN0YXRlTXV0YWJpbGl0eVxcXCI6XFxcInZpZXdcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifSx7XFxcImNvbnN0YW50XFxcIjpmYWxzZSxcXFwiaW5wdXRzXFxcIjpbe1xcXCJuYW1lXFxcIjpcXFwibWluaW11bVxcXCIsXFxcInR5cGVcXFwiOlxcXCJ1aW50MjU2XFxcIn1dLFxcXCJuYW1lXFxcIjpcXFwiY3JlYXRlQ2FtcGFpZ25cXFwiLFxcXCJvdXRwdXRzXFxcIjpbXSxcXFwicGF5YWJsZVxcXCI6ZmFsc2UsXFxcInN0YXRlTXV0YWJpbGl0eVxcXCI6XFxcIm5vbnBheWFibGVcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifV1cIixcIm1ldGFkYXRhXCI6XCJ7XFxcImNvbXBpbGVyXFxcIjp7XFxcInZlcnNpb25cXFwiOlxcXCIwLjQuMjErY29tbWl0LmRmZTMxOTNjXFxcIn0sXFxcImxhbmd1YWdlXFxcIjpcXFwiU29saWRpdHlcXFwiLFxcXCJvdXRwdXRcXFwiOntcXFwiYWJpXFxcIjpbe1xcXCJjb25zdGFudFxcXCI6dHJ1ZSxcXFwiaW5wdXRzXFxcIjpbe1xcXCJuYW1lXFxcIjpcXFwiXFxcIixcXFwidHlwZVxcXCI6XFxcInVpbnQyNTZcXFwifV0sXFxcIm5hbWVcXFwiOlxcXCJkZXBsb3llZENhbXBhaWduc1xcXCIsXFxcIm91dHB1dHNcXFwiOlt7XFxcIm5hbWVcXFwiOlxcXCJcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiYWRkcmVzc1xcXCJ9XSxcXFwicGF5YWJsZVxcXCI6ZmFsc2UsXFxcInN0YXRlTXV0YWJpbGl0eVxcXCI6XFxcInZpZXdcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifSx7XFxcImNvbnN0YW50XFxcIjp0cnVlLFxcXCJpbnB1dHNcXFwiOltdLFxcXCJuYW1lXFxcIjpcXFwiZ2V0RGVwbG95ZWRDYW1wYWlnbnNcXFwiLFxcXCJvdXRwdXRzXFxcIjpbe1xcXCJuYW1lXFxcIjpcXFwiXFxcIixcXFwidHlwZVxcXCI6XFxcImFkZHJlc3NbXVxcXCJ9XSxcXFwicGF5YWJsZVxcXCI6ZmFsc2UsXFxcInN0YXRlTXV0YWJpbGl0eVxcXCI6XFxcInZpZXdcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifSx7XFxcImNvbnN0YW50XFxcIjpmYWxzZSxcXFwiaW5wdXRzXFxcIjpbe1xcXCJuYW1lXFxcIjpcXFwibWluaW11bVxcXCIsXFxcInR5cGVcXFwiOlxcXCJ1aW50MjU2XFxcIn1dLFxcXCJuYW1lXFxcIjpcXFwiY3JlYXRlQ2FtcGFpZ25cXFwiLFxcXCJvdXRwdXRzXFxcIjpbXSxcXFwicGF5YWJsZVxcXCI6ZmFsc2UsXFxcInN0YXRlTXV0YWJpbGl0eVxcXCI6XFxcIm5vbnBheWFibGVcXFwiLFxcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifV0sXFxcImRldmRvY1xcXCI6e1xcXCJtZXRob2RzXFxcIjp7fX0sXFxcInVzZXJkb2NcXFwiOntcXFwibWV0aG9kc1xcXCI6e319fSxcXFwic2V0dGluZ3NcXFwiOntcXFwiY29tcGlsYXRpb25UYXJnZXRcXFwiOntcXFwiXFxcIjpcXFwiQ2FtcGFpZ25GYWN0b3J5XFxcIn0sXFxcImV2bVZlcnNpb25cXFwiOlxcXCJieXphbnRpdW1cXFwiLFxcXCJsaWJyYXJpZXNcXFwiOnt9LFxcXCJvcHRpbWl6ZXJcXFwiOntcXFwiZW5hYmxlZFxcXCI6dHJ1ZSxcXFwicnVuc1xcXCI6MjAwfSxcXFwicmVtYXBwaW5nc1xcXCI6W119LFxcXCJzb3VyY2VzXFxcIjp7XFxcIlxcXCI6e1xcXCJrZWNjYWsyNTZcXFwiOlxcXCIweDNmNjZlNDgwZjE4ODNjNDJlZTIyNmJjOTdmNjUxYWVhOTBlMGFhYjMyMzViNGM1ZGM3OGY2YzA1OWE4N2UyM2VcXFwiLFxcXCJ1cmxzXFxcIjpbXFxcImJ6enI6Ly8xYWU5ZDM5ZGU1MjZkM2Y2NzU2MzUyZjIwMWZmNDMyMTVjYTQ1ZWExN2I5MzBjM2Q1ZTY3M2QwMzFkZjk4ZDQ0XFxcIl19fSxcXFwidmVyc2lvblxcXCI6MX1cIixcIm9wY29kZXNcIjpcIlBVU0gxIDB4NjAgUFVTSDEgMHg0MCBNU1RPUkUgQ0FMTFZBTFVFIElTWkVSTyBQVVNIMiAweEYgSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFBVU0gyIDB4QkVDIERVUDEgUFVTSDIgMHgxRSBQVVNIMSAweDAgQ09ERUNPUFkgUFVTSDEgMHgwIFJFVFVSTiBTVE9QIFBVU0gxIDB4NjAgUFVTSDEgMHg0MCBNU1RPUkUgUFVTSDEgMHg0IENBTExEQVRBU0laRSBMVCBQVVNIMiAweDU2IEpVTVBJIFBVU0g0IDB4RkZGRkZGRkYgUFVTSDI5IDB4MTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIFBVU0gxIDB4MCBDQUxMREFUQUxPQUQgRElWIEFORCBQVVNINCAweDMzOUQ1MEE1IERVUDIgRVEgUFVTSDIgMHg1QiBKVU1QSSBEVVAxIFBVU0g0IDB4NEFDQjlENEYgRVEgUFVTSDIgMHg5QSBKVU1QSSBEVVAxIFBVU0g0IDB4QTMzMDNBNzUgRVEgUFVTSDIgMHgxMDAgSlVNUEkgSlVNUERFU1QgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIENBTExWQUxVRSBJU1pFUk8gUFVTSDIgMHg2NiBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDIgMHg3MSBQVVNIMSAweDQgQ0FMTERBVEFMT0FEIFBVU0gyIDB4MTE4IEpVTVAgSlVNUERFU1QgUFVTSDEgMHg0MCBNTE9BRCBQVVNIMjAgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGIFNXQVAxIFNXQVAyIEFORCBEVVAyIE1TVE9SRSBQVVNIMSAweDIwIEFERCBQVVNIMSAweDQwIE1MT0FEIERVUDEgU1dBUDIgU1VCIFNXQVAxIFJFVFVSTiBKVU1QREVTVCBDQUxMVkFMVUUgSVNaRVJPIFBVU0gyIDB4QTUgSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFBVU0gyIDB4QUQgUFVTSDIgMHgxNEQgSlVNUCBKVU1QREVTVCBQVVNIMSAweDQwIE1MT0FEIFBVU0gxIDB4MjAgRFVQMSBEVVAzIE1TVE9SRSBEVVAyIFNXQVAxIERVUDIgQUREIERVUDQgRFVQMiBEVVAyIE1MT0FEIERVUDIgTVNUT1JFIFBVU0gxIDB4MjAgQUREIFNXQVAyIFBPUCBEVVAxIE1MT0FEIFNXQVAxIFBVU0gxIDB4MjAgQUREIFNXQVAxIFBVU0gxIDB4MjAgTVVMIERVUDEgRFVQNCBEVVA0IFBVU0gxIDB4MCBKVU1QREVTVCBEVVA0IERVUDIgTFQgSVNaRVJPIFBVU0gyIDB4RUMgSlVNUEkgRFVQMSBEVVAzIEFERCBNTE9BRCBEVVA0IERVUDMgQUREIE1TVE9SRSBQVVNIMSAweDIwIEFERCBQVVNIMiAweEQ0IEpVTVAgSlVNUERFU1QgUE9QIFBPUCBQT1AgUE9QIFNXQVAxIFBPUCBBREQgU1dBUDMgUE9QIFBPUCBQT1AgUFVTSDEgMHg0MCBNTE9BRCBEVVAxIFNXQVAyIFNVQiBTV0FQMSBSRVRVUk4gSlVNUERFU1QgQ0FMTFZBTFVFIElTWkVSTyBQVVNIMiAweDEwQiBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDIgMHgxMTYgUFVTSDEgMHg0IENBTExEQVRBTE9BRCBQVVNIMiAweDFDMyBKVU1QIEpVTVBERVNUIFNUT1AgSlVNUERFU1QgUFVTSDEgMHgwIERVUDEgU0xPQUQgRFVQMyBTV0FQMSBEVVAyIExUIFBVU0gyIDB4MTI2IEpVTVBJIElOVkFMSUQgSlVNUERFU1QgUFVTSDEgMHgwIFNXQVAyIERVUDMgTVNUT1JFIFBVU0gxIDB4MjAgU1dBUDEgU1dBUDIgS0VDQ0FLMjU2IEFERCBTTE9BRCBQVVNIMjAgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGIEFORCBTV0FQMSBQT1AgRFVQMiBKVU1QIEpVTVBERVNUIFBVU0gyIDB4MTU1IFBVU0gyIDB4MjY0IEpVTVAgSlVNUERFU1QgUFVTSDEgMHgwIERVUDEgU0xPQUQgRFVQMSBQVVNIMSAweDIwIE1VTCBQVVNIMSAweDIwIEFERCBQVVNIMSAweDQwIE1MT0FEIFNXQVAxIERVUDIgQUREIFBVU0gxIDB4NDAgTVNUT1JFIERVUDEgU1dBUDMgU1dBUDIgU1dBUDEgRFVQMiBEVVAyIE1TVE9SRSBQVVNIMSAweDIwIEFERCBEVVAzIERVUDEgU0xPQUQgRFVQMSBJU1pFUk8gUFVTSDIgMHgxQjggSlVNUEkgUFVTSDEgMHgyMCBNVUwgRFVQMyBBREQgU1dBUDIgU1dBUDEgUFVTSDEgMHgwIE1TVE9SRSBQVVNIMSAweDIwIFBVU0gxIDB4MCBLRUNDQUsyNTYgU1dBUDEgSlVNUERFU1QgRFVQMiBTTE9BRCBQVVNIMjAgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGIEFORCBEVVAyIE1TVE9SRSBQVVNIMSAweDEgU1dBUDEgU1dBUDIgQUREIFNXQVAxIFBVU0gxIDB4MjAgQUREIERVUDEgRFVQNCBHVCBQVVNIMiAweDE4RCBKVU1QSSBKVU1QREVTVCBQT1AgUE9QIFBPUCBQT1AgUE9QIFNXQVAxIFBPUCBKVU1QREVTVCBTV0FQMSBKVU1QIEpVTVBERVNUIFBVU0gxIDB4MCBEVVAyIENBTExFUiBQVVNIMiAweDFDRiBQVVNIMiAweDI3NiBKVU1QIEpVTVBERVNUIFNXQVAyIERVUDMgTVNUT1JFIFBVU0gyMCAweEZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYgQU5EIFBVU0gxIDB4MjAgRFVQMyBBREQgTVNUT1JFIFBVU0gxIDB4NDAgU1dBUDEgRFVQMiBBREQgU1dBUDEgTUxPQUQgRFVQMSBTV0FQMiBTVUIgU1dBUDEgUFVTSDEgMHgwIENSRUFURSBEVVAxIElTWkVSTyBJU1pFUk8gUFVTSDIgMHgyMDcgSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFNXQVAxIFBPUCBQVVNIMSAweDAgRFVQMSBTTE9BRCBEVVAxIFBVU0gxIDB4MSBBREQgRFVQMyBEVVAyIFBVU0gyIDB4MjFEIFNXQVAyIFNXQVAxIFBVU0gyIDB4Mjg2IEpVTVAgSlVNUERFU1QgUE9QIFBVU0gxIDB4MCBTV0FQMiBEVVAzIE1TVE9SRSBQVVNIMSAweDIwIFNXQVAxIFNXQVAyIEtFQ0NBSzI1NiBBREQgRFVQMSBTTE9BRCBQVVNIMjAgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGIE5PVCBBTkQgUFVTSDIwIDB4RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiBTV0FQMyBTV0FQMSBTV0FQMyBBTkQgU1dBUDIgU1dBUDEgU1dBUDIgT1IgU1dBUDEgU1NUT1JFIFBPUCBKVU1QIEpVTVBERVNUIFBVU0gxIDB4MjAgUFVTSDEgMHg0MCBNTE9BRCBTV0FQMSBEVVAyIEFERCBQVVNIMSAweDQwIE1TVE9SRSBQVVNIMSAweDAgRFVQMiBNU1RPUkUgU1dBUDEgSlVNUCBKVU1QREVTVCBQVVNIMSAweDQwIE1MT0FEIFBVU0gyIDB4OEYzIERVUDEgUFVTSDIgMHgyQ0UgRFVQNCBDT0RFQ09QWSBBREQgU1dBUDEgSlVNUCBKVU1QREVTVCBEVVAyIFNMT0FEIERVUDIgRFVQNCBTU1RPUkUgRFVQMiBEVVAyIElTWkVSTyBHVCBQVVNIMiAweDJBQSBKVU1QSSBQVVNIMSAweDAgRFVQNCBEVVAyIE1TVE9SRSBQVVNIMSAweDIwIFNXQVAxIEtFQ0NBSzI1NiBQVVNIMiAweDJBQSBTV0FQMiBEVVAyIEFERCBTV0FQMSBEVVA0IEFERCBQVVNIMiAweDJBRiBKVU1QIEpVTVBERVNUIFBPUCBQT1AgUE9QIEpVTVAgSlVNUERFU1QgUFVTSDIgMHgxQzAgU1dBUDIgU1dBUDEgSlVNUERFU1QgRFVQMSBEVVAzIEdUIElTWkVSTyBQVVNIMiAweDJDOSBKVU1QSSBQVVNIMSAweDAgRFVQMiBTU1RPUkUgUFVTSDEgMHgxIEFERCBQVVNIMiAweDJCNSBKVU1QIEpVTVBERVNUIFBPUCBTV0FQMSBKVU1QIFNUT1AgUFVTSDEgMHg2MCBQVVNIMSAweDQwIE1TVE9SRSBDQUxMVkFMVUUgSVNaRVJPIFBVU0gyIDB4RiBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDEgMHg0MCBNTE9BRCBQVVNIMSAweDQwIERVUDEgUFVTSDIgMHg4RjMgRFVQNCBDT0RFQ09QWSBEVVAyIEFERCBQVVNIMSAweDQwIE1TVE9SRSBEVVAxIERVUDEgTUxPQUQgU1dBUDIgU1dBUDEgUFVTSDEgMHgyMCBBREQgRFVQMSBNTE9BRCBQVVNIMSAweDEgRFVQMSBTTE9BRCBQVVNIMSAweDEgUFVTSDEgMHhBMCBQVVNIMSAweDIgRVhQIFNVQiBOT1QgQU5EIFBVU0gxIDB4MSBQVVNIMSAweEEwIFBVU0gxIDB4MiBFWFAgU1VCIFNXQVAzIFNXQVAxIFNXQVAzIEFORCBTV0FQMiBTV0FQMSBTV0FQMiBPUiBTV0FQMSBTU1RPUkUgUE9QIFBPUCBQVVNIMSAweDIgU1NUT1JFIFBVU0gyIDB4ODk2IERVUDEgUFVTSDIgMHg1RCBQVVNIMSAweDAgQ09ERUNPUFkgUFVTSDEgMHgwIFJFVFVSTiBTVE9QIFBVU0gxIDB4NjAgUFVTSDEgMHg0MCBNU1RPUkUgUFVTSDEgMHg0IENBTExEQVRBU0laRSBMVCBQVVNIMiAweDk4IEpVTVBJIFBVU0g0IDB4RkZGRkZGRkYgUFVTSDI5IDB4MTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIFBVU0gxIDB4MCBDQUxMREFUQUxPQUQgRElWIEFORCBQVVNINCAweDM0NDEwMDYgRFVQMiBFUSBQVVNIMiAweDlEIEpVTVBJIERVUDEgUFVTSDQgMHhBMTQ0MzkxIEVRIFBVU0gyIDB4QjUgSlVNUEkgRFVQMSBQVVNINCAweDQ4MUM2QTc1IEVRIFBVU0gyIDB4RTggSlVNUEkgRFVQMSBQVVNINCAweDgxRDEyQzU4IEVRIFBVU0gyIDB4MTE3IEpVTVBJIERVUDEgUFVTSDQgMHg4MkZERTA5MyBFUSBQVVNIMiAweDFDRCBKVU1QSSBEVVAxIFBVU0g0IDB4OEE5Q0ZENTUgRVEgUFVTSDIgMHgxRjIgSlVNUEkgRFVQMSBQVVNINCAweDkzN0UwOUIxIEVRIFBVU0gyIDB4MjUzIEpVTVBJIERVUDEgUFVTSDQgMHhEN0JCOTlCQSBFUSBQVVNIMiAweDI2NiBKVU1QSSBEVVAxIFBVU0g0IDB4RDdEMUJCREIgRVEgUFVTSDIgMHgyNkUgSlVNUEkgSlVNUERFU1QgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIENBTExWQUxVRSBJU1pFUk8gUFVTSDIgMHhBOCBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDIgMHhCMyBQVVNIMSAweDQgQ0FMTERBVEFMT0FEIFBVU0gyIDB4Mjg0IEpVTVAgSlVNUERFU1QgU1RPUCBKVU1QREVTVCBDQUxMVkFMVUUgSVNaRVJPIFBVU0gyIDB4QzAgSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFBVU0gyIDB4RDQgUFVTSDEgMHgxIFBVU0gxIDB4QTAgUFVTSDEgMHgyIEVYUCBTVUIgUFVTSDEgMHg0IENBTExEQVRBTE9BRCBBTkQgUFVTSDIgMHgzODAgSlVNUCBKVU1QREVTVCBQVVNIMSAweDQwIE1MT0FEIFNXQVAxIElTWkVSTyBJU1pFUk8gRFVQMiBNU1RPUkUgUFVTSDEgMHgyMCBBREQgUFVTSDEgMHg0MCBNTE9BRCBEVVAxIFNXQVAyIFNVQiBTV0FQMSBSRVRVUk4gSlVNUERFU1QgQ0FMTFZBTFVFIElTWkVSTyBQVVNIMiAweEYzIEpVTVBJIFBVU0gxIDB4MCBEVVAxIFJFVkVSVCBKVU1QREVTVCBQVVNIMiAweEZCIFBVU0gyIDB4Mzk1IEpVTVAgSlVNUERFU1QgUFVTSDEgMHg0MCBNTE9BRCBQVVNIMSAweDEgUFVTSDEgMHhBMCBQVVNIMSAweDIgRVhQIFNVQiBTV0FQMSBTV0FQMiBBTkQgRFVQMiBNU1RPUkUgUFVTSDEgMHgyMCBBREQgUFVTSDEgMHg0MCBNTE9BRCBEVVAxIFNXQVAyIFNVQiBTV0FQMSBSRVRVUk4gSlVNUERFU1QgQ0FMTFZBTFVFIElTWkVSTyBQVVNIMiAweDEyMiBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDIgMHgxMkQgUFVTSDEgMHg0IENBTExEQVRBTE9BRCBQVVNIMiAweDNBNCBKVU1QIEpVTVBERVNUIFBVU0gxIDB4NDAgTUxPQUQgUFVTSDEgMHgyMCBEVVAyIEFERCBEVVA2IFNXQVAxIE1TVE9SRSBQVVNIMSAweDEgUFVTSDEgMHhBMCBQVVNIMSAweDIgRVhQIFNVQiBEVVA1IEFORCBQVVNIMSAweDQwIERVUDMgQUREIE1TVE9SRSBEVVAzIElTWkVSTyBJU1pFUk8gUFVTSDEgMHg2MCBEVVAzIEFERCBNU1RPUkUgUFVTSDEgMHg4MCBEVVAyIEFERCBEVVAzIFNXQVAxIE1TVE9SRSBQVVNIMSAweEEwIERVUDEgRFVQMyBNU1RPUkUgRFVQMiBTV0FQMSBEVVAyIEFERCBEVVA4IERVUDIgRFVQMiBNTE9BRCBEVVAyIE1TVE9SRSBQVVNIMSAweDIwIEFERCBTV0FQMiBQT1AgRFVQMSBNTE9BRCBTV0FQMSBQVVNIMSAweDIwIEFERCBTV0FQMSBEVVAxIERVUDQgRFVQNCBQVVNIMSAweDAgSlVNUERFU1QgRFVQNCBEVVAyIExUIElTWkVSTyBQVVNIMiAweDE4RSBKVU1QSSBEVVAxIERVUDMgQUREIE1MT0FEIERVUDQgRFVQMyBBREQgTVNUT1JFIFBVU0gxIDB4MjAgQUREIFBVU0gyIDB4MTc2IEpVTVAgSlVNUERFU1QgUE9QIFBPUCBQT1AgUE9QIFNXQVAxIFBPUCBTV0FQMSBEVVAyIEFERCBTV0FQMSBQVVNIMSAweDFGIEFORCBEVVAxIElTWkVSTyBQVVNIMiAweDFCQiBKVU1QSSBEVVAxIERVUDMgU1VCIERVUDEgTUxPQUQgUFVTSDEgMHgxIERVUDQgUFVTSDEgMHgyMCBTVUIgUFVTSDIgMHgxMDAgRVhQIFNVQiBOT1QgQU5EIERVUDIgTVNUT1JFIFBVU0gxIDB4MjAgQUREIFNXQVAyIFBPUCBKVU1QREVTVCBQT1AgU1dBUDcgUE9QIFBPUCBQT1AgUE9QIFBPUCBQT1AgUE9QIFBVU0gxIDB4NDAgTUxPQUQgRFVQMSBTV0FQMiBTVUIgU1dBUDEgUkVUVVJOIEpVTVBERVNUIENBTExWQUxVRSBJU1pFUk8gUFVTSDIgMHgxRDggSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFBVU0gyIDB4MUUwIFBVU0gyIDB4NEEyIEpVTVAgSlVNUERFU1QgUFVTSDEgMHg0MCBNTE9BRCBTV0FQMSBEVVAyIE1TVE9SRSBQVVNIMSAweDIwIEFERCBQVVNIMSAweDQwIE1MT0FEIERVUDEgU1dBUDIgU1VCIFNXQVAxIFJFVFVSTiBKVU1QREVTVCBDQUxMVkFMVUUgSVNaRVJPIFBVU0gyIDB4MUZEIEpVTVBJIFBVU0gxIDB4MCBEVVAxIFJFVkVSVCBKVU1QREVTVCBQVVNIMiAweEIzIFBVU0gxIDB4NCBQVVNIMSAweDI0IERVUDIgQ0FMTERBVEFMT0FEIERVUDIgRFVQMiBBREQgU1dBUDEgRFVQNCBBREQgQ0FMTERBVEFMT0FEIERVUDEgUFVTSDEgMHgyMCBQVVNIMSAweDFGIERVUDMgQUREIERVUDIgU1dBUDEgRElWIERVUDIgTVVMIEFERCBQVVNIMSAweDQwIE1MT0FEIFNXQVAxIERVUDIgQUREIFBVU0gxIDB4NDAgTVNUT1JFIERVUDIgRFVQMiBNU1RPUkUgU1dBUDMgU1dBUDIgU1dBUDEgUFVTSDEgMHgyMCBEVVA1IEFERCBEVVA0IERVUDQgRFVQMSBEVVAzIERVUDUgQ0FMTERBVEFDT1BZIFBPUCBTV0FQNSBTV0FQNyBQT1AgUE9QIERVUDUgQ0FMTERBVEFMT0FEIFNXQVA1IFBVU0gxIDB4MjAgQUREIENBTExEQVRBTE9BRCBQVVNIMSAweDEgUFVTSDEgMHhBMCBQVVNIMSAweDIgRVhQIFNVQiBBTkQgU1dBUDQgUE9QIFBVU0gyIDB4NEE4IFNXQVAzIFBPUCBQT1AgUE9QIEpVTVAgSlVNUERFU1QgQ0FMTFZBTFVFIElTWkVSTyBQVVNIMiAweDI1RSBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDIgMHgxRTAgUFVTSDIgMHg1RDEgSlVNUCBKVU1QREVTVCBQVVNIMiAweEIzIFBVU0gyIDB4NUQ3IEpVTVAgSlVNUERFU1QgQ0FMTFZBTFVFIElTWkVSTyBQVVNIMiAweDI3OSBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDIgMHhCMyBQVVNIMSAweDQgQ0FMTERBVEFMT0FEIFBVU0gyIDB4NjE2IEpVTVAgSlVNUERFU1QgUFVTSDEgMHgxIFNMT0FEIFBVU0gxIDB4MCBTV0FQMSBDQUxMRVIgUFVTSDEgMHgxIFBVU0gxIDB4QTAgUFVTSDEgMHgyIEVYUCBTVUIgU1dBUDEgRFVQMiBBTkQgU1dBUDIgQU5EIEVRIFBVU0gyIDB4MkEyIEpVTVBJIFBVU0gxIDB4MCBEVVAxIFJFVkVSVCBKVU1QREVTVCBQVVNIMSAweDAgRFVQMSBTTE9BRCBEVVA0IFNXQVAxIERVUDIgTFQgUFVTSDIgMHgyQjAgSlVNUEkgSU5WQUxJRCBKVU1QREVTVCBTV0FQMSBQVVNIMSAweDAgTVNUT1JFIFBVU0gxIDB4MjAgUFVTSDEgMHgwIEtFQ0NBSzI1NiBTV0FQMSBQVVNIMSAweDUgTVVMIEFERCBTV0FQMSBQT1AgUFVTSDEgMHgyIFBVU0gxIDB4NCBTTE9BRCBEVVAyIElTWkVSTyBJU1pFUk8gUFVTSDIgMHgyQ0UgSlVNUEkgSU5WQUxJRCBKVU1QREVTVCBESVYgRFVQMiBQVVNIMSAweDMgQUREIFNMT0FEIEdUIElTWkVSTyBJU1pFUk8gUFVTSDIgMHgyRTAgSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFBVU0gxIDB4MiBEVVAyIEFERCBTTE9BRCBQVVNIMjEgMHgxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCBTV0FQMSBESVYgUFVTSDEgMHhGRiBBTkQgSVNaRVJPIFBVU0gyIDB4MzBBIEpVTVBJIFBVU0gxIDB4MCBEVVAxIFJFVkVSVCBKVU1QREVTVCBQVVNIMSAweDIgRFVQMiBBREQgU0xPQUQgUFVTSDEgMHgxIERVUDMgQUREIFNMT0FEIFBVU0gxIDB4MSBQVVNIMSAweEEwIFBVU0gxIDB4MiBFWFAgU1VCIFNXQVAxIFNXQVAyIEFORCBTV0FQMSBEVVAxIElTWkVSTyBQVVNIMiAweDhGQyBNVUwgU1dBUDEgUFVTSDEgMHg0MCBNTE9BRCBQVVNIMSAweDAgUFVTSDEgMHg0MCBNTE9BRCBEVVAxIERVUDQgU1VCIERVUDIgRFVQNiBEVVA5IERVUDkgQ0FMTCBTV0FQNCBQT1AgUE9QIFBPUCBQT1AgSVNaRVJPIElTWkVSTyBQVVNIMiAweDM0NyBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDEgMHgyIEFERCBEVVAxIFNMT0FEIFBVU0gyMSAweEZGMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCBOT1QgQU5EIFBVU0gyMSAweDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIE9SIFNXQVAxIFNTVE9SRSBQT1AgSlVNUCBKVU1QREVTVCBQVVNIMSAweDMgUFVTSDEgMHgyMCBNU1RPUkUgUFVTSDEgMHgwIFNXQVAxIERVUDIgTVNUT1JFIFBVU0gxIDB4NDAgU1dBUDEgS0VDQ0FLMjU2IFNMT0FEIFBVU0gxIDB4RkYgQU5EIERVUDIgSlVNUCBKVU1QREVTVCBQVVNIMSAweDEgU0xPQUQgUFVTSDEgMHgxIFBVU0gxIDB4QTAgUFVTSDEgMHgyIEVYUCBTVUIgQU5EIERVUDIgSlVNUCBKVU1QREVTVCBQVVNIMSAweDAgRFVQMSBTTE9BRCBEVVAzIFNXQVAxIERVUDIgTFQgUFVTSDIgMHgzQjIgSlVNUEkgSU5WQUxJRCBKVU1QREVTVCBTV0FQMSBQVVNIMSAweDAgTVNUT1JFIFBVU0gxIDB4MjAgUFVTSDEgMHgwIEtFQ0NBSzI1NiBTV0FQMSBQVVNIMSAweDUgTVVMIEFERCBQVVNIMSAweDAgU1dBUDIgUE9QIFNXQVAxIFBPUCBEVVAxIFBVU0gxIDB4MCBBREQgRFVQMSBTTE9BRCBQVVNIMSAweDEgRFVQMiBQVVNIMSAweDEgQU5EIElTWkVSTyBQVVNIMiAweDEwMCBNVUwgU1VCIEFORCBQVVNIMSAweDIgU1dBUDEgRElWIERVUDEgUFVTSDEgMHgxRiBBREQgUFVTSDEgMHgyMCBEVVAxIFNXQVAyIERJViBNVUwgUFVTSDEgMHgyMCBBREQgUFVTSDEgMHg0MCBNTE9BRCBTV0FQMSBEVVAyIEFERCBQVVNIMSAweDQwIE1TVE9SRSBEVVAxIFNXQVAzIFNXQVAyIFNXQVAxIERVUDIgRFVQMiBNU1RPUkUgUFVTSDEgMHgyMCBBREQgRFVQMyBEVVAxIFNMT0FEIFBVU0gxIDB4MSBEVVAyIFBVU0gxIDB4MSBBTkQgSVNaRVJPIFBVU0gyIDB4MTAwIE1VTCBTVUIgQU5EIFBVU0gxIDB4MiBTV0FQMSBESVYgRFVQMSBJU1pFUk8gUFVTSDIgMHg0NUUgSlVNUEkgRFVQMSBQVVNIMSAweDFGIExUIFBVU0gyIDB4NDMzIEpVTVBJIFBVU0gyIDB4MTAwIERVUDEgRFVQNCBTTE9BRCBESVYgTVVMIERVUDQgTVNUT1JFIFNXQVAyIFBVU0gxIDB4MjAgQUREIFNXQVAyIFBVU0gyIDB4NDVFIEpVTVAgSlVNUERFU1QgRFVQMyBBREQgU1dBUDIgU1dBUDEgUFVTSDEgMHgwIE1TVE9SRSBQVVNIMSAweDIwIFBVU0gxIDB4MCBLRUNDQUsyNTYgU1dBUDEgSlVNUERFU1QgRFVQMiBTTE9BRCBEVVAyIE1TVE9SRSBTV0FQMSBQVVNIMSAweDEgQUREIFNXQVAxIFBVU0gxIDB4MjAgQUREIERVUDEgRFVQNCBHVCBQVVNIMiAweDQ0MSBKVU1QSSBEVVAzIFNXQVAxIFNVQiBQVVNIMSAweDFGIEFORCBEVVAzIEFERCBTV0FQMiBKVU1QREVTVCBQT1AgUE9QIFBPUCBQT1AgUFVTSDEgMHgxIERVUDQgQUREIFNMT0FEIFBVU0gxIDB4MiBEVVA1IEFERCBTTE9BRCBQVVNIMSAweDMgU1dBUDEgU1dBUDUgQUREIFNMT0FEIFNXQVAzIFNXQVA0IFNXQVAxIFNXQVAzIFBVU0gxIDB4MSBQVVNIMSAweEEwIFBVU0gxIDB4MiBFWFAgU1VCIERVUDMgQU5EIFNXQVAzIFBPUCBQVVNIMjEgMHgxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCBTV0FQMSBTV0FQMiBESVYgUFVTSDEgMHhGRiBBTkQgU1dBUDEgRFVQNiBKVU1QIEpVTVBERVNUIFBVU0gxIDB4NCBTTE9BRCBEVVAyIEpVTVAgSlVNUERFU1QgUFVTSDIgMHg0QjAgUFVTSDIgMHg2QkUgSlVNUCBKVU1QREVTVCBQVVNIMSAweDEgU0xPQUQgQ0FMTEVSIFBVU0gxIDB4MSBQVVNIMSAweEEwIFBVU0gxIDB4MiBFWFAgU1VCIFNXQVAxIERVUDIgQU5EIFNXQVAyIEFORCBFUSBQVVNIMiAweDRDQiBKVU1QSSBQVVNIMSAweDAgRFVQMSBSRVZFUlQgSlVNUERFU1QgUFVTSDEgMHhBMCBQVVNIMSAweDQwIE1MT0FEIFNXQVAxIERVUDIgQUREIFBVU0gxIDB4NDAgTVNUT1JFIERVUDEgRFVQNiBEVVAyIE1TVE9SRSBQVVNIMSAweDIwIEFERCBEVVA1IERVUDIgTVNUT1JFIFBVU0gxIDB4MjAgQUREIERVUDQgUFVTSDEgMHgxIFBVU0gxIDB4QTAgUFVTSDEgMHgyIEVYUCBTVUIgQU5EIERVUDIgTVNUT1JFIFBVU0gxIDB4MjAgQUREIFBVU0gxIDB4MCBJU1pFUk8gSVNaRVJPIERVUDIgTVNUT1JFIFBVU0gxIDB4MjAgQUREIFBVU0gxIDB4MCBEVVAyIE1TVE9SRSBQT1AgU1dBUDEgUE9QIFBVU0gxIDB4MCBEVVAxIFNMT0FEIERVUDEgUFVTSDEgMHgxIEFERCBEVVAzIERVUDIgUFVTSDIgMHg1MTYgU1dBUDIgU1dBUDEgUFVTSDIgMHg2RjQgSlVNUCBKVU1QREVTVCBQVVNIMSAweDAgU1dBUDMgRFVQNCBNU1RPUkUgUFVTSDEgMHgyMCBTV0FQMSBTV0FQMyBLRUNDQUsyNTYgRFVQNCBTV0FQMiBQVVNIMSAweDUgTVVMIEFERCBEVVAyIE1MT0FEIERVUDIgU1dBUDEgRFVQMSBNTE9BRCBQVVNIMiAweDUzQSBTV0FQMyBTV0FQMiBQVVNIMSAweDIwIEFERCBTV0FQMSBQVVNIMiAweDcyNSBKVU1QIEpVTVBERVNUIFBPUCBQVVNIMSAweDIwIERVUDMgQUREIE1MT0FEIERVUDIgUFVTSDEgMHgxIEFERCBTU1RPUkUgUFVTSDEgMHg0MCBEVVAzIEFERCBNTE9BRCBQVVNIMSAweDIgRFVQMyBBREQgRFVQMSBTTE9BRCBQVVNIMjAgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGIE5PVCBBTkQgUFVTSDEgMHgxIFBVU0gxIDB4QTAgUFVTSDEgMHgyIEVYUCBTVUIgU1dBUDMgU1dBUDEgU1dBUDMgQU5EIFNXQVAyIFNXQVAxIFNXQVAyIE9SIFNXQVAxIFNTVE9SRSBQVVNIMSAweDYwIERVUDMgQUREIE1MT0FEIFBVU0gxIDB4MiBEVVAzIEFERCBEVVAxIFNMT0FEIFNXQVAyIElTWkVSTyBJU1pFUk8gUFVTSDIxIDB4MTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgTVVMIFBVU0gyMSAweEZGMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCBOT1QgU1dBUDEgU1dBUDMgQU5EIFNXQVAyIFNXQVAxIFNXQVAyIE9SIFNXQVAxIFNTVE9SRSBQVVNIMSAweDgwIERVUDMgQUREIE1MT0FEIERVUDIgUFVTSDEgMHgzIEFERCBTU1RPUkUgUE9QIFBPUCBQT1AgUE9QIFBPUCBQT1AgUE9QIEpVTVAgSlVNUERFU1QgUFVTSDEgMHgyIFNMT0FEIERVUDIgSlVNUCBKVU1QREVTVCBQVVNIMSAweDIgU0xPQUQgQ0FMTFZBTFVFIEdUIFBVU0gyIDB4NUU1IEpVTVBJIFBVU0gxIDB4MCBEVVAxIFJFVkVSVCBKVU1QREVTVCBQVVNIMSAweDEgUFVTSDEgMHhBMCBQVVNIMSAweDIgRVhQIFNVQiBDQUxMRVIgQU5EIFBVU0gxIDB4MCBTV0FQMSBEVVAyIE1TVE9SRSBQVVNIMSAweDMgUFVTSDEgMHgyMCBNU1RPUkUgUFVTSDEgMHg0MCBTV0FQMSBLRUNDQUsyNTYgRFVQMSBTTE9BRCBQVVNIMSAweEZGIE5PVCBBTkQgUFVTSDEgMHgxIFNXQVAxIERVUDIgT1IgU1dBUDEgU1dBUDIgU1NUT1JFIFBVU0gxIDB4NCBEVVAxIFNMT0FEIFNXQVAxIFNXQVAyIEFERCBTV0FQMSBTU1RPUkUgSlVNUCBKVU1QREVTVCBQVVNIMSAweDAgRFVQMSBEVVAzIERVUDIgU0xPQUQgRFVQMiBMVCBJU1pFUk8gSVNaRVJPIFBVU0gyIDB4NjI2IEpVTVBJIElOVkFMSUQgSlVNUERFU1QgUFVTSDEgMHgwIFNXQVAyIERVUDMgTVNUT1JFIFBVU0gxIDB4MjAgRFVQMSBEVVA0IEtFQ0NBSzI1NiBQVVNIMSAweDEgUFVTSDEgMHhBMCBQVVNIMSAweDIgRVhQIFNVQiBDQUxMRVIgQU5EIERVUDUgTVNUT1JFIFBVU0gxIDB4MyBTV0FQMSBTV0FQMiBNU1RPUkUgUFVTSDEgMHg0MCBTV0FQMSBTV0FQMyBLRUNDQUsyNTYgU0xPQUQgUFVTSDEgMHg1IFNXQVAxIFNXQVAyIE1VTCBTV0FQMSBTV0FQMiBBREQgU1dBUDIgUE9QIFBVU0gxIDB4RkYgQU5EIElTWkVSTyBJU1pFUk8gUFVTSDIgMHg2NUYgSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFBVU0gxIDB4MSBQVVNIMSAweEEwIFBVU0gxIDB4MiBFWFAgU1VCIENBTExFUiBBTkQgUFVTSDEgMHgwIFNXQVAxIERVUDIgTVNUT1JFIFBVU0gxIDB4NCBEVVAzIEFERCBQVVNIMSAweDIwIE1TVE9SRSBQVVNIMSAweDQwIFNXQVAxIEtFQ0NBSzI1NiBTTE9BRCBQVVNIMSAweEZGIEFORCBJU1pFUk8gUFVTSDIgMHg2ODcgSlVNUEkgUFVTSDEgMHgwIERVUDEgUkVWRVJUIEpVTVBERVNUIFBVU0gxIDB4MSBQVVNIMSAweEEwIFBVU0gxIDB4MiBFWFAgU1VCIENBTExFUiBBTkQgUFVTSDEgMHgwIFNXQVAxIERVUDIgTVNUT1JFIFBVU0gxIDB4NCBEVVAzIEFERCBQVVNIMSAweDIwIE1TVE9SRSBQVVNIMSAweDQwIFNXQVAxIEtFQ0NBSzI1NiBEVVAxIFNMT0FEIFBVU0gxIDB4RkYgTk9UIEFORCBQVVNIMSAweDEgU1dBUDEgRFVQMiBPUiBTV0FQMSBTV0FQMiBTU1RPUkUgUFVTSDEgMHgzIFNXQVAxIFNXQVAyIEFERCBEVVAxIFNMT0FEIFNXQVAxIFNXQVAyIEFERCBTV0FQMSBTU1RPUkUgUE9QIEpVTVAgSlVNUERFU1QgUFVTSDEgMHhBMCBQVVNIMSAweDQwIE1MT0FEIFNXQVAxIERVUDIgQUREIFBVU0gxIDB4NDAgTVNUT1JFIERVUDEgUFVTSDIgMHg2RDIgUFVTSDIgMHg3QTMgSlVNUCBKVU1QREVTVCBEVVAyIE1TVE9SRSBQVVNIMSAweDAgUFVTSDEgMHgyMCBEVVAzIEFERCBEVVAyIFNXQVAxIE1TVE9SRSBQVVNIMSAweDQwIERVUDMgQUREIERVUDIgU1dBUDEgTVNUT1JFIFBVU0gxIDB4NjAgRFVQMyBBREQgRFVQMiBTV0FQMSBNU1RPUkUgUFVTSDEgMHg4MCBTV0FQMSBTV0FQMiBBREQgTVNUT1JFIFNXQVAxIEpVTVAgSlVNUERFU1QgRFVQMiBTTE9BRCBEVVAyIERVUDQgU1NUT1JFIERVUDIgRFVQMiBJU1pFUk8gR1QgUFVTSDIgMHg3MjAgSlVNUEkgUFVTSDEgMHg1IE1VTCBEVVAyIFBVU0gxIDB4NSBNVUwgRFVQNCBQVVNIMSAweDAgTVNUT1JFIFBVU0gxIDB4MjAgUFVTSDEgMHgwIEtFQ0NBSzI1NiBTV0FQMiBEVVAzIEFERCBTV0FQMiBBREQgUFVTSDIgMHg3MjAgU1dBUDIgU1dBUDEgUFVTSDIgMHg3QjUgSlVNUCBKVU1QREVTVCBQT1AgUE9QIFBPUCBKVU1QIEpVTVBERVNUIERVUDMgRFVQMSBTTE9BRCBQVVNIMSAweDEgRFVQMiBQVVNIMSAweDEgQU5EIElTWkVSTyBQVVNIMiAweDEwMCBNVUwgU1VCIEFORCBQVVNIMSAweDIgU1dBUDEgRElWIFNXQVAxIFBVU0gxIDB4MCBNU1RPUkUgUFVTSDEgMHgyMCBQVVNIMSAweDAgS0VDQ0FLMjU2IFNXQVAxIFBVU0gxIDB4MUYgQUREIFBVU0gxIDB4MjAgU1dBUDEgRElWIERVUDIgQUREIFNXQVAzIERVUDMgUFVTSDEgMHgxRiBMVCBQVVNIMiAweDc2NiBKVU1QSSBEVVAxIE1MT0FEIFBVU0gxIDB4RkYgTk9UIEFORCBEVVA0IERVUDEgQUREIE9SIERVUDYgU1NUT1JFIFBVU0gyIDB4NzkzIEpVTVAgSlVNUERFU1QgRFVQMyBEVVAxIEFERCBQVVNIMSAweDEgQUREIERVUDYgU1NUT1JFIERVUDMgSVNaRVJPIFBVU0gyIDB4NzkzIEpVTVBJIFNXQVAyIERVUDMgQUREIEpVTVBERVNUIERVUDMgRFVQMiBHVCBJU1pFUk8gUFVTSDIgMHg3OTMgSlVNUEkgRFVQMyBNTE9BRCBEVVAzIFNTVE9SRSBTV0FQMiBQVVNIMSAweDIwIEFERCBTV0FQMiBTV0FQMSBQVVNIMSAweDEgQUREIFNXQVAxIFBVU0gyIDB4Nzc4IEpVTVAgSlVNUERFU1QgUE9QIFBVU0gyIDB4NzlGIFNXQVAzIFNXQVAyIFBPUCBQVVNIMiAweDgwOSBKVU1QIEpVTVBERVNUIFBPUCBTV0FQMSBKVU1QIEpVTVBERVNUIFBVU0gxIDB4MjAgUFVTSDEgMHg0MCBNTE9BRCBTV0FQMSBEVVAyIEFERCBQVVNIMSAweDQwIE1TVE9SRSBQVVNIMSAweDAgRFVQMiBNU1RPUkUgU1dBUDEgSlVNUCBKVU1QREVTVCBQVVNIMiAweDgwNiBTV0FQMiBTV0FQMSBKVU1QREVTVCBEVVAxIERVUDMgR1QgSVNaRVJPIFBVU0gyIDB4NzlGIEpVTVBJIFBVU0gxIDB4MCBQVVNIMiAweDdDRiBEVVAzIERVUDMgUFVTSDIgMHg4MjMgSlVNUCBKVU1QREVTVCBQT1AgUFVTSDEgMHgwIFBVU0gxIDB4MSBEVVAzIEFERCBEVVAyIFNXQVAxIFNTVE9SRSBQVVNIMSAweDIgRFVQMyBBREQgRFVQMSBTTE9BRCBQVVNIMjEgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYgTk9UIEFORCBTV0FQMSBTU1RPUkUgUFVTSDEgMHgzIERVUDMgQUREIFNTVE9SRSBQVVNIMSAweDUgQUREIFBVU0gyIDB4N0JCIEpVTVAgSlVNUERFU1QgU1dBUDEgSlVNUCBKVU1QREVTVCBQVVNIMiAweDgwNiBTV0FQMiBTV0FQMSBKVU1QREVTVCBEVVAxIERVUDMgR1QgSVNaRVJPIFBVU0gyIDB4NzlGIEpVTVBJIFBVU0gxIDB4MCBEVVAyIFNTVE9SRSBQVVNIMSAweDEgQUREIFBVU0gyIDB4ODBGIEpVTVAgSlVNUERFU1QgUE9QIERVUDEgU0xPQUQgUFVTSDEgMHgxIERVUDIgUFVTSDEgMHgxIEFORCBJU1pFUk8gUFVTSDIgMHgxMDAgTVVMIFNVQiBBTkQgUFVTSDEgMHgyIFNXQVAxIERJViBQVVNIMSAweDAgRFVQMyBTU1RPUkUgRFVQMSBQVVNIMSAweDFGIExUIFBVU0gyIDB4ODQ5IEpVTVBJIFBPUCBQVVNIMiAweDg2NyBKVU1QIEpVTVBERVNUIFBVU0gxIDB4MUYgQUREIFBVU0gxIDB4MjAgU1dBUDEgRElWIFNXQVAxIFBVU0gxIDB4MCBNU1RPUkUgUFVTSDEgMHgyMCBQVVNIMSAweDAgS0VDQ0FLMjU2IFNXQVAxIERVUDIgQUREIFNXQVAxIFBVU0gyIDB4ODY3IFNXQVAyIFNXQVAxIFBVU0gyIDB4ODA5IEpVTVAgSlVNUERFU1QgUE9QIEpVTVAgU1RPUCBMT0cxIFBVU0g2IDB4NjI3QTdBNzIzMDU4IEtFQ0NBSzI1NiAweDQ5IDB4ZTQgU1RPUCBNU0laRSAweDNmIFBVU0gzMSAweDZGM0FFRUMzMUQ4M0M2NDNDMDcxQTdFNDgwQ0VCODJENDRDQUJFODBGNDMwNERERjAwMEIwMDI5QTE2NTYyIFBVU0gyNyAweDdBNzIzMDU4MjBDQzQ5QUIyQzc2QzU5RkExRTQ4OTkwMDdFNUMxQTM5RUJBOUZGMDVERjZBMCBOVU1CRVIgMHhmOCAweGNhIDB4ZjggMHgyOSBFWFRDT0RFQ09QWSBQVVNINSAweEVEMzkyMTAwMjkgXCIsXCJydW50aW1lQnl0ZWNvZGVcIjpcIjYwNjA2MDQwNTI2MDA0MzYxMDYxMDA1NjU3NjNmZmZmZmZmZjdjMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDAzNTA0MTY2MzMzOWQ1MGE1ODExNDYxMDA1YjU3ODA2MzRhY2I5ZDRmMTQ2MTAwOWE1NzgwNjNhMzMwM2E3NTE0NjEwMTAwNTc1YjYwMDA4MGZkNWIzNDE1NjEwMDY2NTc2MDAwODBmZDViNjEwMDcxNjAwNDM1NjEwMTE4NTY1YjYwNDA1MTczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjkwOTExNjgxNTI2MDIwMDE2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMGE1NTc2MDAwODBmZDViNjEwMGFkNjEwMTRkNTY1YjYwNDA1MTYwMjA4MDgyNTI4MTkwODEwMTgzODE4MTUxODE1MjYwMjAwMTkxNTA4MDUxOTA2MDIwMDE5MDYwMjAwMjgwODM4MzYwMDA1YjgzODExMDE1NjEwMGVjNTc4MDgyMDE1MTgzODIwMTUyNjAyMDAxNjEwMGQ0NTY1YjUwNTA1MDUwOTA1MDAxOTI1MDUwNTA2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMTBiNTc2MDAwODBmZDViNjEwMTE2NjAwNDM1NjEwMWMzNTY1YjAwNWI2MDAwODA1NDgyOTA4MTEwNjEwMTI2NTdmZTViNjAwMDkxODI1MjYwMjA5MDkxMjAwMTU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY5MDUwODE1NjViNjEwMTU1NjEwMjY0NTY1YjYwMDA4MDU0ODA2MDIwMDI2MDIwMDE2MDQwNTE5MDgxMDE2MDQwNTI4MDkyOTE5MDgxODE1MjYwMjAwMTgyODA1NDgwMTU2MTAxYjg1NzYwMjAwMjgyMDE5MTkwNjAwMDUyNjAyMDYwMDAyMDkwNWI4MTU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY4MTUyNjAwMTkwOTEwMTkwNjAyMDAxODA4MzExNjEwMThkNTc1YjUwNTA1MDUwNTA5MDUwNWI5MDU2NWI2MDAwODEzMzYxMDFjZjYxMDI3NjU2NWI5MTgyNTI3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjYwMjA4MjAxNTI2MDQwOTA4MTAxOTA1MTgwOTEwMzkwNjAwMGYwODAxNTE1NjEwMjA3NTc2MDAwODBmZDViOTA1MDYwMDA4MDU0ODA2MDAxMDE4MjgxNjEwMjFkOTE5MDYxMDI4NjU2NWI1MDYwMDA5MTgyNTI2MDIwOTA5MTIwMDE4MDU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTkxNjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjkyOTA5MjE2OTE5MDkxMTc5MDU1NTA1NjViNjAyMDYwNDA1MTkwODEwMTYwNDA1MjYwMDA4MTUyOTA1NjViNjA0MDUxNjEwOGYzODA2MTAyY2U4MzM5MDE5MDU2NWI4MTU0ODE4MzU1ODE4MTE1MTE2MTAyYWE1NzYwMDA4MzgxNTI2MDIwOTAyMDYxMDJhYTkxODEwMTkwODMwMTYxMDJhZjU2NWI1MDUwNTA1NjViNjEwMWMwOTE5MDViODA4MjExMTU2MTAyYzk1NzYwMDA4MTU1NjAwMTAxNjEwMmI1NTY1YjUwOTA1NjAwNjA2MDYwNDA1MjM0MTU2MTAwMGY1NzYwMDA4MGZkNWI2MDQwNTE2MDQwODA2MTA4ZjM4MzM5ODEwMTYwNDA1MjgwODA1MTkxOTA2MDIwMDE4MDUxNjAwMTgwNTQ2MDAxNjBhMDYwMDIwYTAzMTkxNjYwMDE2MGEwNjAwMjBhMDM5MjkwOTIxNjkxOTA5MTE3OTA1NTUwNTA2MDAyNTU2MTA4OTY4MDYxMDA1ZDYwMDAzOTYwMDBmMzAwNjA2MDYwNDA1MjYwMDQzNjEwNjEwMDk4NTc2M2ZmZmZmZmZmN2MwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwMDM1MDQxNjYzMDM0NDEwMDY4MTE0NjEwMDlkNTc4MDYzMGExNDQzOTExNDYxMDBiNTU3ODA2MzQ4MWM2YTc1MTQ2MTAwZTg1NzgwNjM4MWQxMmM1ODE0NjEwMTE3NTc4MDYzODJmZGUwOTMxNDYxMDFjZDU3ODA2MzhhOWNmZDU1MTQ2MTAxZjI1NzgwNjM5MzdlMDliMTE0NjEwMjUzNTc4MDYzZDdiYjk5YmExNDYxMDI2NjU3ODA2M2Q3ZDFiYmRiMTQ2MTAyNmU1NzViNjAwMDgwZmQ1YjM0MTU2MTAwYTg1NzYwMDA4MGZkNWI2MTAwYjM2MDA0MzU2MTAyODQ1NjViMDA1YjM0MTU2MTAwYzA1NzYwMDA4MGZkNWI2MTAwZDQ2MDAxNjBhMDYwMDIwYTAzNjAwNDM1MTY2MTAzODA1NjViNjA0MDUxOTAxNTE1ODE1MjYwMjAwMTYwNDA1MTgwOTEwMzkwZjM1YjM0MTU2MTAwZjM1NzYwMDA4MGZkNWI2MTAwZmI2MTAzOTU1NjViNjA0MDUxNjAwMTYwYTA2MDAyMGEwMzkwOTExNjgxNTI2MDIwMDE2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMTIyNTc2MDAwODBmZDViNjEwMTJkNjAwNDM1NjEwM2E0NTY1YjYwNDA1MTYwMjA4MTAxODU5MDUyNjAwMTYwYTA2MDAyMGEwMzg0MTY2MDQwODIwMTUyODIxNTE1NjA2MDgyMDE1MjYwODA4MTAxODI5MDUyNjBhMDgwODI1MjgxOTA4MTAxODc4MTgxNTE4MTUyNjAyMDAxOTE1MDgwNTE5MDYwMjAwMTkwODA4MzgzNjAwMDViODM4MTEwMTU2MTAxOGU1NzgwODIwMTUxODM4MjAxNTI2MDIwMDE2MTAxNzY1NjViNTA1MDUwNTA5MDUwOTA4MTAxOTA2MDFmMTY4MDE1NjEwMWJiNTc4MDgyMDM4MDUxNjAwMTgzNjAyMDAzNjEwMTAwMGEwMzE5MTY4MTUyNjAyMDAxOTE1MDViNTA5NjUwNTA1MDUwNTA1MDUwNjA0MDUxODA5MTAzOTBmMzViMzQxNTYxMDFkODU3NjAwMDgwZmQ1YjYxMDFlMDYxMDRhMjU2NWI2MDQwNTE5MDgxNTI2MDIwMDE2MDQwNTE4MDkxMDM5MGYzNWIzNDE1NjEwMWZkNTc2MDAwODBmZDViNjEwMGIzNjAwNDYwMjQ4MTM1ODE4MTAxOTA4MzAxMzU4MDYwMjA2MDFmODIwMTgxOTAwNDgxMDIwMTYwNDA1MTkwODEwMTYwNDA1MjgxODE1MjkyOTE5MDYwMjA4NDAxODM4MzgwODI4NDM3NTA5NDk2NTA1MDg0MzU5NDYwMjAwMTM1NjAwMTYwYTA2MDAyMGEwMzE2OTM1MDYxMDRhODkyNTA1MDUwNTY1YjM0MTU2MTAyNWU1NzYwMDA4MGZkNWI2MTAxZTA2MTA1ZDE1NjViNjEwMGIzNjEwNWQ3NTY1YjM0MTU2MTAyNzk1NzYwMDA4MGZkNWI2MTAwYjM2MDA0MzU2MTA2MTY1NjViNjAwMTU0NjAwMDkwMzM2MDAxNjBhMDYwMDIwYTAzOTA4MTE2OTExNjE0NjEwMmEyNTc2MDAwODBmZDViNjAwMDgwNTQ4MzkwODExMDYxMDJiMDU3ZmU1YjkwNjAwMDUyNjAyMDYwMDAyMDkwNjAwNTAyMDE5MDUwNjAwMjYwMDQ1NDgxMTUxNTYxMDJjZTU3ZmU1YjA0ODE2MDAzMDE1NDExMTUxNTYxMDJlMDU3NjAwMDgwZmQ1YjYwMDI4MTAxNTQ3NDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDQ2MGZmMTYxNTYxMDMwYTU3NjAwMDgwZmQ1YjYwMDI4MTAxNTQ2MDAxODIwMTU0NjAwMTYwYTA2MDAyMGEwMzkwOTExNjkwODAxNTYxMDhmYzAyOTA2MDQwNTE2MDAwNjA0MDUxODA4MzAzODE4NTg4ODhmMTkzNTA1MDUwNTAxNTE1NjEwMzQ3NTc2MDAwODBmZDViNjAwMjAxODA1NDc0ZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTkxNjc0MDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTc5MDU1NTA1NjViNjAwMzYwMjA1MjYwMDA5MDgxNTI2MDQwOTAyMDU0NjBmZjE2ODE1NjViNjAwMTU0NjAwMTYwYTA2MDAyMGEwMzE2ODE1NjViNjAwMDgwNTQ4MjkwODExMDYxMDNiMjU3ZmU1YjkwNjAwMDUyNjAyMDYwMDAyMDkwNjAwNTAyMDE2MDAwOTE1MDkwNTA4MDYwMDAwMTgwNTQ2MDAxODE2MDAxMTYxNTYxMDEwMDAyMDMxNjYwMDI5MDA0ODA2MDFmMDE2MDIwODA5MTA0MDI2MDIwMDE2MDQwNTE5MDgxMDE2MDQwNTI4MDkyOTE5MDgxODE1MjYwMjAwMTgyODA1NDYwMDE4MTYwMDExNjE1NjEwMTAwMDIwMzE2NjAwMjkwMDQ4MDE1NjEwNDVlNTc4MDYwMWYxMDYxMDQzMzU3NjEwMTAwODA4MzU0MDQwMjgzNTI5MTYwMjAwMTkxNjEwNDVlNTY1YjgyMDE5MTkwNjAwMDUyNjAyMDYwMDAyMDkwNWI4MTU0ODE1MjkwNjAwMTAxOTA2MDIwMDE4MDgzMTE2MTA0NDE1NzgyOTAwMzYwMWYxNjgyMDE5MTViNTA1MDUwNTA2MDAxODMwMTU0NjAwMjg0MDE1NDYwMDM5MDk0MDE1NDkyOTM5MDkyNjAwMTYwYTA2MDAyMGEwMzgyMTY5MjUwNzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDkxMDQ2MGZmMTY5MDg1NTY1YjYwMDQ1NDgxNTY1YjYxMDRiMDYxMDZiZTU2NWI2MDAxNTQzMzYwMDE2MGEwNjAwMjBhMDM5MDgxMTY5MTE2MTQ2MTA0Y2I1NzYwMDA4MGZkNWI2MGEwNjA0MDUxOTA4MTAxNjA0MDUyODA4NTgxNTI2MDIwMDE4NDgxNTI2MDIwMDE4MzYwMDE2MGEwNjAwMjBhMDMxNjgxNTI2MDIwMDE2MDAwMTUxNTgxNTI2MDIwMDE2MDAwODE1MjUwOTA1MDYwMDA4MDU0ODA2MDAxMDE4MjgxNjEwNTE2OTE5MDYxMDZmNDU2NWI2MDAwOTI4MzUyNjAyMDkwOTIyMDgzOTE2MDA1MDIwMTgxNTE4MTkwODA1MTYxMDUzYTkyOTE2MDIwMDE5MDYxMDcyNTU2NWI1MDYwMjA4MjAxNTE4MTYwMDEwMTU1NjA0MDgyMDE1MTYwMDI4MjAxODA1NDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE5MTY2MDAxNjBhMDYwMDIwYTAzOTI5MDkyMTY5MTkwOTExNzkwNTU2MDYwODIwMTUxNjAwMjgyMDE4MDU0OTExNTE1NzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjc0ZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTk5MDkyMTY5MTkwOTExNzkwNTU2MDgwODIwMTUxODE2MDAzMDE1NTUwNTA1MDUwNTA1MDUwNTY1YjYwMDI1NDgxNTY1YjYwMDI1NDM0MTE2MTA1ZTU1NzYwMDA4MGZkNWI2MDAxNjBhMDYwMDIwYTAzMzMxNjYwMDA5MDgxNTI2MDAzNjAyMDUyNjA0MDkwMjA4MDU0NjBmZjE5MTY2MDAxOTA4MTE3OTA5MTU1NjAwNDgwNTQ5MDkxMDE5MDU1NTY1YjYwMDA4MDgyODE1NDgxMTAxNTE1NjEwNjI2NTdmZTViNjAwMDkxODI1MjYwMjA4MDgzMjA2MDAxNjBhMDYwMDIwYTAzMzMxNjg0NTI2MDAzOTA5MTUyNjA0MDkwOTIyMDU0NjAwNTkwOTEwMjkwOTEwMTkxNTA2MGZmMTYxNTE1NjEwNjVmNTc2MDAwODBmZDViNjAwMTYwYTA2MDAyMGEwMzMzMTY2MDAwOTA4MTUyNjAwNDgyMDE2MDIwNTI2MDQwOTAyMDU0NjBmZjE2MTU2MTA2ODc1NzYwMDA4MGZkNWI2MDAxNjBhMDYwMDIwYTAzMzMxNjYwMDA5MDgxNTI2MDA0ODIwMTYwMjA1MjYwNDA5MDIwODA1NDYwZmYxOTE2NjAwMTkwODExNzkwOTE1NTYwMDM5MDkxMDE4MDU0OTA5MTAxOTA1NTUwNTY1YjYwYTA2MDQwNTE5MDgxMDE2MDQwNTI4MDYxMDZkMjYxMDdhMzU2NWI4MTUyNjAwMDYwMjA4MjAxODE5MDUyNjA0MDgyMDE4MTkwNTI2MDYwODIwMTgxOTA1MjYwODA5MDkxMDE1MjkwNTY1YjgxNTQ4MTgzNTU4MTgxMTUxMTYxMDcyMDU3NjAwNTAyODE2MDA1MDI4MzYwMDA1MjYwMjA2MDAwMjA5MTgyMDE5MTAxNjEwNzIwOTE5MDYxMDdiNTU2NWI1MDUwNTA1NjViODI4MDU0NjAwMTgxNjAwMTE2MTU2MTAxMDAwMjAzMTY2MDAyOTAwNDkwNjAwMDUyNjAyMDYwMDAyMDkwNjAxZjAxNjAyMDkwMDQ4MTAxOTI4MjYwMWYxMDYxMDc2NjU3ODA1MTYwZmYxOTE2ODM4MDAxMTc4NTU1NjEwNzkzNTY1YjgyODAwMTYwMDEwMTg1NTU4MjE1NjEwNzkzNTc5MTgyMDE1YjgyODExMTE1NjEwNzkzNTc4MjUxODI1NTkxNjAyMDAxOTE5MDYwMDEwMTkwNjEwNzc4NTY1YjUwNjEwNzlmOTI5MTUwNjEwODA5NTY1YjUwOTA1NjViNjAyMDYwNDA1MTkwODEwMTYwNDA1MjYwMDA4MTUyOTA1NjViNjEwODA2OTE5MDViODA4MjExMTU2MTA3OWY1NzYwMDA2MTA3Y2Y4MjgyNjEwODIzNTY1YjUwNjAwMDYwMDE4MjAxODE5MDU1NjAwMjgyMDE4MDU0NzRmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxOTE2OTA1NTYwMDM4MjAxNTU2MDA1MDE2MTA3YmI1NjViOTA1NjViNjEwODA2OTE5MDViODA4MjExMTU2MTA3OWY1NzYwMDA4MTU1NjAwMTAxNjEwODBmNTY1YjUwODA1NDYwMDE4MTYwMDExNjE1NjEwMTAwMDIwMzE2NjAwMjkwMDQ2MDAwODI1NTgwNjAxZjEwNjEwODQ5NTc1MDYxMDg2NzU2NWI2MDFmMDE2MDIwOTAwNDkwNjAwMDUyNjAyMDYwMDAyMDkwODEwMTkwNjEwODY3OTE5MDYxMDgwOTU2NWI1MDU2MDBhMTY1NjI3YTdhNzIzMDU4MjA0OWU0MDA1OTNmN2U2ZjNhZWVjMzFkODNjNjQzYzA3MWE3ZTQ4MGNlYjgyZDQ0Y2FiZTgwZjQzMDRkZGYwMDBiMDAyOWExNjU2MjdhN2E3MjMwNTgyMGNjNDlhYjJjNzZjNTlmYTFlNDg5OTAwN2U1YzFhMzllYmE5ZmYwNWRmNmEwNDNmOGNhZjgyOTNjNjRlZDM5MjEwMDI5XCIsXCJzcmNtYXBcIjpcIjI2OjM0NzowOi07Ozs7Ozs7Ozs7Ozs7Ozs7O1wiLFwic3JjbWFwUnVudGltZVwiOlwiMjY6MzQ3OjA6LTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzU3OjM0Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyNjY6MTA1Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyMzoxOi0xOzg6MTAwOzMzOjM7MzA6MTsyNzoxMDs4OjEwMDs7Ozk5OjE7OTQ6Mzs5MDoxMTs4NDoxODs3MToxMTs7OzY0OjM5OzUyOjI7NDU6MTA7ODoxMDA7OzsxMjoxNDsyNjY6MTA1OjA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozk4OjE2Mjs7Ozs7Ozs7Ozs7Ozs7Ozs1NzozNDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzstMTotMTotMTs1NzozNDowOzo6Om87MjY2OjEwNTo6LTszMTk6OTs7Ojo6aTs6OjotOzM0NzoxNzszNDA6MjQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyNjY6MTA1Ozs6OjpvOzk4OjE2Mjo6LTsxNTM6MTk7MTg4Ojc7MTk3OjEwOzE3NTozMzs7Ojo6aTs6OjotOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzE1Mzo1NTs7MjE4OjE3OzozNTs7Ozs7Ozs7Ozs7Ojo6aTs6OjotOy0xOi0xOi0xOzIxODozNTowOzs7Ozs7Ozs7OzstMTotMTotMTs7MjE4OjM1OjA7Ozs7Ozs7Ozs7OzstMTotMTotMTs5ODoxNjI6MDpvOzI2OjM0Nzo6LTs7Ozs7Ozs7Ozs7Ozs6OjpvOzo6Oi07Ozs7Ozs7Ozs7Ojo6bzs6OjotOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ojo6aTs6OjotOzs7Ozo6Om87Ojo6LTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1wifVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZXRoZXJldW0vYnVpbGQvQ2FtcGFpZ25GYWN0b3J5Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDQxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOXpDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsMkdBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0ZBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3U0E7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcFBBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=