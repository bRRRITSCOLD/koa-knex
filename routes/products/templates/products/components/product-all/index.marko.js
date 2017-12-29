// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/products/templates/products/components/product-all/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  const products = input.products;

  out.w("<div>");

  marko_forEach(products, function(product) {
    out.w("<ul><li>Name: " +
      marko_escapeXml(product.name) +
      "</li><li>Cost: " +
      marko_escapeXml(product.cost) +
      "</li><li>Price: " +
      marko_escapeXml(product.price) +
      "</li><li>Category: " +
      marko_escapeXml(product.category) +
      "</li></ul>");
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/products/templates/products/components/product-all/index.marko"
  };
