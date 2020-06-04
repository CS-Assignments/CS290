(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['twitCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"twit\">\r\n    <div class=\"twit-icon\">\r\n        <i class=\"fa fa-bullhorn\"></i>\r\n    </div>\r\n    <div class=\"twit-content\">\r\n        <p class=\"twit-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":20}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"twit-author\">\r\n            <a href=\"#\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":26}}}) : helper)))
    + "\r\n            </a>\r\n        </p>\r\n    </div>\r\n</article>";
},"useData":true});
templates['addTwitModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button type=\"button\" id=\"create-twit-button\"><i class=\"fas fa-bullhorn\"></i></button>\r\n\r\n<div id=\"modal-backdrop\" class=\"hidden\"></div>\r\n<div id=\"create-twit-modal\" class=\"hidden\">\r\n    <div class=\"modal-dialog\">\r\n\r\n    <div class=\"modal-header\">\r\n        <h3>Create a Twit</h3>\r\n        <button type=\"button\" class=\"modal-close-button\">&times;</button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n        <div class=\"twit-input-element\">\r\n        <label for=\"twit-text-input\">Twit text</label>\r\n        <textarea id=\"twit-text-input\"></textarea>\r\n        </div>\r\n        <div class=\"twit-input-element\">\r\n        <label for=\"twit-author-input\">Author</label>\r\n        <input type=\"text\" id=\"twit-author-input\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"modal-cancel-button\">Cancel</button>\r\n        <button type=\"button\" class=\"modal-accept-button\">Create Twit</button>\r\n    </div>\r\n\r\n    </div>\r\n</div>";
},"useData":true});
templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\r\n    <a href=\"#\"><h1 class=\"site-title\"><i class=\"far fa-hand-lizard\"></i> tweeter</h1></a>\r\n\r\n    <nav class=\"navbar\">\r\n    <ul class=\"navlist\">\r\n        <li class=\"navitem navlink active\"><a href=\"#\">Home</a></li>\r\n        <li class=\"navitem navlink\"><a href=\"#\">Trending</a></li>\r\n        <li class=\"navitem navlink\"><a href=\"#\">People</a></li>\r\n        <li class=\"navitem navbar-search\">\r\n        <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Search...\">\r\n        <button type=\"button\" id=\"navbar-search-button\"><i class=\"fas fa-search\"></i></button>\r\n        </li>\r\n    </ul>\r\n    </nav>\r\n</header>";
},"useData":true});
})();