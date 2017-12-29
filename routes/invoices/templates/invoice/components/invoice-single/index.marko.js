// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/invoices/templates/invoice/components/invoice-single/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  const invoice = input.invoice;

  out.w("<div><ul><li>Customer ID: " +
    marko_escapeXml(invoice.customer_id) +
    "</li><li>Line-Items Total: " +
    marko_escapeXml(invoice.line_items_total) +
    "</li><li>Additional Fees: " +
    marko_escapeXml(invoice.additional_fees) +
    "</li><li>Tax Rate: " +
    marko_escapeXml(invoice.tax_rate) +
    "</li><li>Sub-Total: " +
    marko_escapeXml(invoice.sub_total) +
    "</li></ul></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/invoices/templates/invoice/components/invoice-single/index.marko"
  };
