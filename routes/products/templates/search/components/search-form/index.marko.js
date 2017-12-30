// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/server$0.0.0/routes/products/templates/search/components/search-form/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><form action=\"/api/v1/products/search-query\" method=\"get\"><fieldset><legend>Search For Single Product</legend><div><label>By ID: <input type=\"number\" name=\"id\"></label></div><div><label>Search <input type=\"submit\"></label></div></fieldset></form><form action=\"/api/v1/products\" method=\"get\"><fieldset><legend>Search For All Products</legend><div><label>Search <input type=\"submit\"></label></div></fieldset></form></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/server$0.0.0/routes/products/templates/search/components/search-form/index.marko"
  };
