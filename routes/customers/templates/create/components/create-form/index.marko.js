// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/customers/templates/create/components/create-form/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form action=\"/api/v1/customers\" method=\"post\"><fieldset><legend> Create Customer</legend><div><label>First Name: <input type=\"text\" name=\"first_name\" value=\"First Name\"></label></div><div><label>Last Name: <input type=\"text\" name=\"last_name\" value=\"Last Name\"></label></div><div><label>Email: <input type=\"text\" name=\"email\" value=\"Email\"></label></div><div><label>Address: <input type=\"text\" name=\"address\" value=\"Address\"></label></div><div><label>Phone Number: <input type=\"text\" name=\"phone_number\" value=\"Phone Number\"></label></div><div><label>Submit <input type=\"submit\"></label></div></fieldset></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/customers/templates/create/components/create-form/index.marko"
  };
