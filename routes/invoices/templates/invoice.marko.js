// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/invoices/templates/invoice.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><title>Invoice</title></head><body>");

  component_globals_tag({}, out);

  out.w("<p>Customer ID: " +
    marko_escapeXml(data.invoice[0].id) +
    "</p><p>Line Items Total: " +
    marko_escapeXml(data.invoice[0].line_items_total) +
    "</p><p>Additional Fees: " +
    marko_escapeXml(data.invoice[0].additional_fees) +
    "</p><p>Tax Rate: " +
    marko_escapeXml(data.invoice[0].tax_rate) +
    "</p><p>Sub Total: " +
    marko_escapeXml(data.invoice[0].sub_total) +
    "</p>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/invoices/templates/invoice.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
