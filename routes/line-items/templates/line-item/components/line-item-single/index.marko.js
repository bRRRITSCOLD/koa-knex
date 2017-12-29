// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/line-items/templates/line-item/components/line-item-single/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  const lineItem = input.lineItem;

  out.w("<div><ul><li>Invoice ID: " +
    marko_escapeXml(lineItem.invoice_id) +
    "</li><li>Product ID: " +
    marko_escapeXml(lineItem.product_id) +
    "</li><li>Quantity: " +
    marko_escapeXml(lineItem.quantity) +
    "</li><li>Discount: " +
    marko_escapeXml(lineItem.discount) +
    "</li><li>Total: " +
    marko_escapeXml(lineItem.total) +
    "</li></ul></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/line-items/templates/line-item/components/line-item-single/index.marko"
  };
