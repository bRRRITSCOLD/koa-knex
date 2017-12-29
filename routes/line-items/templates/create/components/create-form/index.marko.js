// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/line-items/templates/create/components/create-form/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form action=\"/api/v1/line-items\" method=\"post\"><fieldset><legend> Create Line Item</legend><div><label>Invoice ID: <input type=\"number\" name=\"invoice_id\"></label></div><div><label>Product ID: <input type=\"number\" name=\"product_id\"></label></div><div><label>Quanity: <input type=\"number\" step=\".01\" name=\"quantity\"></label></div><div><label>Discount: <input type=\"number\" step=\".01\" name=\"discount\"></label></div><div><label>Total: <input type=\"number\" step=\".01\" name=\"total\"></label></div><div><label>Submit <input type=\"submit\"></label></div></fieldset></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/line-items/templates/create/components/create-form/index.marko"
  };
