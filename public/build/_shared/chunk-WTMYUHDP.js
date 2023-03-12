import {
  __commonJS
} from "/build/_shared/chunk-AZD5HR3D.js";

// node_modules/.pnpm/email-validator@2.0.4/node_modules/email-validator/index.js
var require_email_validator = __commonJS({
  "node_modules/.pnpm/email-validator@2.0.4/node_modules/email-validator/index.js"(exports) {
    "use strict";
    var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    exports.validate = function(email) {
      if (!email)
        return false;
      if (email.length > 254)
        return false;
      var valid = tester.test(email);
      if (!valid)
        return false;
      var parts = email.split("@");
      if (parts[0].length > 64)
        return false;
      var domainParts = parts[1].split(".");
      if (domainParts.some(function(part) {
        return part.length > 63;
      }))
        return false;
      return true;
    };
  }
});

export {
  require_email_validator
};
//# sourceMappingURL=/build/_shared/chunk-WTMYUHDP.js.map
