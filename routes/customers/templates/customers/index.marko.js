// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/customers/templates/customers/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    customer_all_template = marko_loadTemplate(require.resolve("./components/customer-all")),
    customer_all_tag = marko_loadTag(customer_all_template),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  const customers = data.customers;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Welcome | Page: Customers</title></head><body>");

  component_globals_tag({}, out);

  customer_all_tag({
      customers: customers
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
    id: "/server$0.0.0/routes/customers/templates/customers/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "./components/customer-all",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
