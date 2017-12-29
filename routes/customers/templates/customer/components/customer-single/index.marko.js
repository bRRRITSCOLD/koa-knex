// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/customers/templates/customer/components/customer-single/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  const customer = input.customer;

  out.w("<div><ul><li>Name: " +
    marko_escapeXml((customer.first_name + " ") + customer.last_name) +
    "</li><li>Email: " +
    marko_escapeXml(customer.email) +
    "</li><li>Address: " +
    marko_escapeXml(customer.address) +
    "</li><li>Phone Number: " +
    marko_escapeXml(customer.phone_number) +
    "</li></ul></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/customers/templates/customer/components/customer-single/index.marko"
  };
