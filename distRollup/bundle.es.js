import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index_container__1xwUL{background-color:#add8e6;font-family:sans-serif;-webkit-filter:brightness(150%);filter:brightness(150%)}";
var style = {"container":"index_container__1xwUL"};
styleInject(css);

function LibraryStudy(_ref) {
  var className = _ref.className;
  var classNames = style.container;
  classNames += className ? " ".concat(className) : "";
  return React.createElement("div", {
    className: classNames
  }, React.createElement("p", null, "This is the Component that I want to publish on NPM???"), React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi aperiam ipsam maiores blanditiis, beatae voluptatibus voluptatum ab expedita libero minus laboriosam! Omnis quaerat, facilis vel deserunt sapiente natus delectus. Teste"));
}

export default LibraryStudy;
//# sourceMappingURL=bundle.es.js.map
