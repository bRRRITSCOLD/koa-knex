// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/invoices/templates/invoices.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  const invoices = data.invoices;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Invoices</title></head><body>");

  component_globals_tag({}, out);

  out.w("<div>");

  marko_forEach(invoices, function(invoice) {
    out.w("<ul><li>Customer ID: " +
      marko_escapeXml(invoice.customer_id) +
      "</li><li>Line-Items Total: " +
      marko_escapeXml(invoice.line_items_total) +
      "</li><li>Additional Fees: " +
      marko_escapeXml(invoice.additional_fees) +
      "</li><li>Tax Rate: " +
      marko_escapeXml(invoice.tax_rate) +
      "</li><li>Sub-Total: " +
      marko_escapeXml(invoice.sub_total) +
      "</li></ul>");
  });

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "12");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/invoices/templates/invoices.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
