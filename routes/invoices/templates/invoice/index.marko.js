// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/invoices/templates/invoice/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    invoice_single_template = marko_loadTemplate(require.resolve("./components/invoice-single")),
    invoice_single_tag = marko_loadTag(invoice_single_template),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  const invoice = data.invoice[0];

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Welcome | Page: Invoice</title></head><body>");

  component_globals_tag({}, out);

  invoice_single_tag({
      invoice: invoice
    }, out, __component, "5");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "6");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/invoices/templates/invoice/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "./components/invoice-single",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
