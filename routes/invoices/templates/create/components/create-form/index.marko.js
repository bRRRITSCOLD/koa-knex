// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/invoices/templates/create/components/create-form/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form action=\"/api/v1/invoices\" method=\"post\"><fieldset><legend> Create Invoice</legend><div><label>Customer ID: <input type=\"number\" step=\".01\" name=\"customer_id\"></label></div><div><label>Products Total (Before Tax): <input type=\"number\" step=\".01\" name=\"line_items_total\"></label></div><div><label>Additional Fees: <input type=\"number\" step=\".01\" name=\"additional_fees\"></label></div><div><label>Tax Rate: <input type=\"number\" step=\".01\" name=\"tax_rate\"></label></div><div><label>Sub-Total: <input type=\"number\" step=\".01\" name=\"sub_total\"></label></div><div><label>Submit <input type=\"submit\"></label></div></fieldset></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/invoices/templates/create/components/create-form/index.marko"
  };
