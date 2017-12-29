// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/products/templates/timestamp/components/timestamps-single/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  const timestamp = input.timestamp

  out.w("<div><ul><li>Product ID: " +
    marko_escapeXml(timestamp.product_id) +
    "</li><li>Created on: " +
    marko_escapeXml(timestamp.created_at) +
    "</li><li>Last Updated: " +
    marko_escapeXml(timestamp.updated_at) +
    "</li></ul></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/products/templates/timestamp/components/timestamps-single/index.marko"
  };
