define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("part_editorCommon", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "  <button class=\"editor-common-sidebar-export action-secondary\">\r\n    <span class=\"editor-common-sidebar-export-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.export",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    <span class=\"editor-common-sidebar-exporting display-none\">\r\n      <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.exporting",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n  </button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n  <div class=\"editor-common-sidebar-preview-wrapper\">\r\n    <button class=\"editor-common-sidebar-preview action-primary\">\r\n      <span class=\"editor-common-sidebar-preview-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.preview",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n      <span class=\"editor-common-sidebar-previewing display-none\">\r\n        <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.previewing",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n    <div class=\"dropdown\">\r\n      <button class=\"\"><i class=\"fa fa-caret-down\"></i></button>\r\n      <ul>\r\n        <li>\r\n          <button class=\"editor-common-sidebar-preview-force\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.forcerebuild",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <button class=\"editor-common-sidebar-download action-secondary\">\r\n    <span class=\"editor-common-sidebar-download-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.download",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    <span class=\"editor-common-sidebar-downloading display-none\">\r\n      <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.downloading",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n  </button>\r\n\r\n"
    + ((stack1 = (helpers.ifHasPermissions || (depth0 && depth0.ifHasPermissions) || alias2).call(alias1,"*/*:create,*/*:read,*/*:update,*/*:delete",{"name":"ifHasPermissions","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  <div class=\"separator\" />\r\n\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"editor-common-sidebar-project\">\r\n      <span class=\"editor-common-sidebar-project-inner\">\r\n        <i class=\"fa fa-chevron-right primary-color\"/>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.editorsettings",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"editor-common-sidebar-config\">\r\n      <span class=\"editor-common-sidebar-config-inner\">\r\n        <i class=\"fa fa-chevron-right primary-color\"/>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.editorconfig",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"editor-common-sidebar-select-theme\">\r\n      <span class=\"editor-common-sidebar-select-theme-inner\">\r\n        <i class=\"fa fa-chevron-right primary-color\"/></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.editorselecttheme",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"editor-common-sidebar-menusettings\">\r\n      <span class=\"editor-common-sidebar-menusettings-inner\">\r\n        <i class=\"fa fa-chevron-right primary-color\"/></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.editormenusettings",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"editor-common-sidebar-extensions\">\r\n      <span class=\"editor-common-sidebar-extensions-inner\">\r\n        <i class=\"fa fa-chevron-right primary-color\"/></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.editorextensions",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n  <form id=\"downloadForm\" method=\"get\" action=\"\"></form>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("part_editorItemSidebar", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._movePositions : depth0)) != null ? stack1.left : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._movePositions : depth0)) != null ? stack1.right : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._movePositions : depth0)) != null ? stack1.full : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <button class=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-move "
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-move-left editor-move-page-element\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.layoutleft",{"name":"t","hash":{},"data":data}))
    + "\">\r\n          <i class=\"fa fa-long-arrow-left\"></i>\r\n        </button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <button class=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-move "
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-move-right editor-move-page-element\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.layoutright",{"name":"t","hash":{},"data":data}))
    + "\">\r\n          <i class=\"fa fa-long-arrow-right\"></i>\r\n        </button>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <button class=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-move "
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-move-full editor-move-page-element\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.layoutfull",{"name":"t","hash":{},"data":data}))
    + "\">\r\n          <i class=\"fa fa-arrows-h\"></i>\r\n        </button>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <button class=\"editor-collapse-"
    + alias3(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isCollapsed : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" title=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.collapsearticle",{"name":"t","hash":{},"data":data}))
    + "\">\r\n      <i class=\"fa fa-minus\"></i>\r\n    </button>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "iscollapsed";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"editor-item-settings handle\">\r\n  <div class=\"editor-item-settings-inner\">\r\n\r\n    <button class=\"open-context-icon open-context-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.clicktoedit",{"name":"t","hash":{},"data":data}))
    + "\">\r\n      <i class=\"fa fa-cog fa-fw\"></i>\r\n    </button>\r\n    <button class=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-delete editor-delete-page-element\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.clicktodelete",{"name":"t","hash":{},"data":data}))
    + "\">\r\n      <i class=\"fa fa-trash-o\"></i>\r\n    </button>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._movePositions : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-detail-inner editor-page-element-detail-inner\">\r\n      <h4 class=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-title title\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "</h4>\r\n    </div>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isCollapsible : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("part_editorMenu", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"editor-menu-options\">\r\n  <a class=\"page-add-link\" href=\"#\">Add new page</a>\r\n</div>\r\n<div class=\"editor-page-list\"></div>\r\n";
},"useData":true}));

Handlebars.registerPartial("part_settingsGeneral", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"editing-overlay-panel-content\">\r\n  <div class=\"editing-overlay-panel-content-inner\">\r\n\r\n    <form role=\"form\">\r\n      <div class=\"form-group\">\r\n        <label for=\"setting-title\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.title",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <input type=\"text\" class=\"form-control setting-title\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.title",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"setting-displaytitle\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.displaytitle",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <input type=\"text\" class=\"form-control setting-displaytitle\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.displaytitle",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper)))
    + "\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"setting-class\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.class",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <input type=\"text\" class=\"form-control setting-class\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.class",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"setting-body\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.bodytext",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <textarea class=\"text-editor form-control setting-body\" id=\"setting-body\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.bodytext",{"name":"t","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n";
},"useData":true}));

this["Handlebars"]["templates"]["actions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <option value=\"\" selected>\r\n        "
    + container.escapeExpression(((helper = (helper = helpers.placeholderText || (depth0 != null ? depth0.placeholderText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholderText","hash":{},"data":data}) : helper)))
    + "\r\n        </option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-apply=\""
    + alias4(((helper = (helper = helpers.applyButtonText || (depth0 != null ? depth0.applyButtonText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"applyButtonText","hash":{},"data":data}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n        </option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"actions-inner\">\r\n    <select class=\"actions-select\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.placeholderText : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n\r\n    <button class=\"btn actions-apply-button\">\r\n        <span class=\"actions-apply-button-original\">"
    + container.escapeExpression(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"actions-apply-button-apply display-none\"></span>\r\n    </button>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagement"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"asset-management-inner clearfix\">\r\n    <div class=\"asset-management-assets-container\">\r\n        <div class=\"asset-management-no-assets display-none\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.noassetsfound",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <div class=\"asset-management-assets-container-inner\">\r\n        </div>\r\n    </div>\r\n    <div class=\"asset-management-preview-container\">\r\n        <div class=\"asset-management-no-preview\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetpreviewinstruction",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <div class=\"asset-management-preview-container-inner\">\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementCollection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"asset-management-collection-inner clearfix\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementListItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"asset-management-list-item-deleted\">\r\n    <i class=\"fa fa-ban\"></i>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-image-o\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-audio-o\"></i>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-video-o\"></i>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-o\"></i>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.metadata : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"asset-management-list-item-image\" data-style=\"background-image:url(api/asset/thumb/"
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data}) : helper)))
    + ")\">\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"asset-management-list-item-image\">\r\n            <i class=\"fa fa-file-image-o\"></i>\r\n        </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.metadata : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"asset-management-list-item-image\" data-style=\"background-image:url(api/asset/thumb/"
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data}) : helper)))
    + ")\"}>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"asset-management-list-item-image\">\r\n            <i class=\"fa fa-file-video-o\"></i>\r\n        </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"asset-management-list-item-image\">\r\n        <i class=\"fa fa-file-audio-o\"></i>\r\n    </div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"asset-management-list-item-image\">\r\n        <i class=\"fa fa-file-o\"></i>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isDeleted : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<div class=\"asset-management-list-item-inner\">\r\n\r\n    <div class=\"asset-management-list-item-icon\">\r\n        <div class=\"asset-management-list-item-icon-inner\">\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"asset-management-list-item-details\">\r\n\r\n        <div class=\"asset-management-list-item-details-inner\">\r\n\r\n        <div class=\"asset-management-list-item-title\">\r\n            <h4 class=\"asset-management-list-item-title-inner\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\r\n        </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalAutofill"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<i class=\"fa fa-magic\"></i>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.autofill",{"name":"t","hash":{},"data":data}));
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalFilters"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<button class=\"asset-management-modal-add-asset\">\r\n    <span class=\"asset-management-modal-add-asset-inner\">\r\n        <i class=\"fa-upload fa\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.uploadnewasset",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n</button>\r\n\r\n<input type=\"text\" class=\"asset-management-modal-filter-search\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.search",{"name":"t","hash":{},"data":data}))
    + "\"/>\r\n<button class=\"sidebar-inline-input-button asset-management-modal-filter-clear-search\">\r\n    <i class=\"fa fa-times\"></i>\r\n</button>\r\n\r\n<button class=\"asset-management-modal-add-tag\">\r\n    <span class=\"asset-management-modal-add-tag-inner\">\r\n        <i class=\"fa-plus fa\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.addtag",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalNewAsset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"asset-management-new-asset-file\">\r\n                "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.fileuploaded",{"name":"t","hash":{},"data":data}))
    + "\r\n            </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <input type=\"file\" class=\"asset-file\" name=\"file\">\r\n            <div class=\"progress-container\">\r\n                <div class=\"progress-bar\">\r\n                    <div class=\"progress-percent\">0%</div>\r\n                </div>\r\n            </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<button class=\"asset-management-modal-new-asset-close\">\r\n    <i class=\"fa fa-times\"></i>\r\n</button>\r\n<div class=\"asset-management-modal-new-asset-inner\">\r\n    <!-- Begin upload form -->\r\n    <form class=\"asset-form forms asset-form\" action=\"api/asset\" method=\"post\">\r\n        <div class=\"form-group\">\r\n            <label for=\"file\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetfile",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n                <span class=\"error\"></span>\r\n            </label>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.path : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"title\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n                <span class=\"error\"></span>\r\n            </label>\r\n            <input type=\"text\" class=\"asset-title required\" name=\"title\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"off\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n                <span class=\"error\"></span>\r\n            </label>\r\n            <textarea class=\"asset-description required\" name=\"description\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group tags\">\r\n            <label for=\"tags_control\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n            <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"tags_control\" name=\"tags_control\" value=\""
    + alias3((helpers.pickCSV || (depth0 && depth0.pickCSV) || alias2).call(alias1,(depth0 != null ? depth0.tags : depth0),"title",{"name":"pickCSV","hash":{},"data":data}))
    + "\" />\r\n        </div>\r\n\r\n        <div class=\"\">\r\n            <button class=\"asset-management-modal-new-asset-upload btn secondary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.upload",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n        </div>\r\n        <input type=\"hidden\" name=\"tags\" id=\"tags\" />\r\n    </form>\r\n    <!-- end upload form -->\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalTags"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <button class=\"asset-management-modal-tags-item sidebar-filter-item\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"asset-management-modal-tags-item-inner\">\r\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isUsed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n                </div>\r\n            </button>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<i class=\"fa fa-check\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"asset-management-modal-tags-inner\">\r\n    <div class=\"asset-management-modal-tags-toolbar\">\r\n        <div class=\"asset-management-modal-tags-toolbar-inner clearfix\">\r\n            <div class=\"asset-management-modal-tags-toolbar-title sidebar-filter-toolbar-title\">\r\n                "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n            </div>\r\n            <div class=\"asset-management-modal-tags-toolbar-close sidebar-filter-toolbar-close\">\r\n                <button class=\"fa fa-times\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"asset-management-modal-tags-search sidebar-filter-search\">\r\n        <input type=\"text\" class=\"asset-management-modal-tags-search-input sidebar-filter-search-input\" />\r\n    </div>\r\n    <div class=\"asset-management-modal-tags-items sidebar-filter-items\">\r\n        <div class=\"asset-management-modal-tags-items-inner\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementNewAsset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"asset-management-new-asset-file\">\r\n                "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.fileuploaded",{"name":"t","hash":{},"data":data}))
    + "\r\n            </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <input type=\"file\" class=\"asset-file\" name=\"file\">\r\n            "
    + container.escapeExpression(((helper = (helper = helpers.maxUploadSize || (depth0 != null ? depth0.maxUploadSize : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxUploadSize","hash":{},"data":data}) : helper)))
    + "\r\n            <div class=\"progress-container\">\r\n                <div class=\"progress-bar\">\r\n                    <div class=\"progress-percent\">0%</div>\r\n                </div>\r\n            </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"asset-management-new-asset-inner inner\">\r\n    <!-- Begin upload form -->\r\n    <form class=\"asset-form forms asset-form\" action=\"api/asset\" method=\"post\">\r\n        <div class=\"form-group\">\r\n            <label for=\"file\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetfile",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n                <span class=\"error\"></span>\r\n            </label>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.path : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"title\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n                <span class=\"error\"></span>\r\n            </label>\r\n            <input type=\"text\" class=\"asset-title required\" name=\"title\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"off\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n                <span class=\"error\"></span>\r\n            </label>\r\n            <textarea class=\"asset-description required\" name=\"description\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group tags\">\r\n            <label for=\"tags\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n            <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"tags_control\" name=\"tags_control\" value=\""
    + alias3((helpers.pickCSV || (depth0 && depth0.pickCSV) || alias2).call(alias1,(depth0 != null ? depth0.tags : depth0),"title",{"name":"pickCSV","hash":{},"data":data}))
    + "\" />\r\n        </div>\r\n        <input type=\"hidden\" name=\"tags\" id=\"tags\" />\r\n    </form>\r\n    <!-- end upload form -->\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementNewAssetSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n    <div class=\"separator\"></div>\r\n\r\n    <button type=\"submit\" class=\"primary-color asset-management-new-sidebar-save-button action-primary\">\r\n        <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    </button>\r\n    <button type=\"button\" class=\"asset-management-new-sidebar-cancel-button action-secondary\">\r\n        <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    </button>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementPreview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <img src=\"api/asset/serve/"
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"/>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <video preload=\"auto\" controls width=\"640px\" height=\"360px\" poster=\"\" style=\"width:100%; height:100%;\">\r\n        <source src=\"api/asset/serve/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = helpers.mimeType || (depth0 != null ? depth0.mimeType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mimeType","hash":{},"data":data}) : helper)))
    + "\"/>\r\n      </video>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <i class=\"fa fa-file-audio-o\"></i>\r\n      <audio src=\"api/asset/serve/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = helpers.mimeType || (depth0 != null ? depth0.mimeType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mimeType","hash":{},"data":data}) : helper)))
    + "\" controls=\"controls\" style=\"width:100%;\"></audio>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <i class=\"fa fa-file-o\"></i>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    <div class=\"asset-duration break\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetduration",{"name":"t","hash":{},"data":data}))
    + ": "
    + ((stack1 = (helpers.formatDuration || (depth0 && depth0.formatDuration) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.duration : stack1),{"name":"formatDuration","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "    <div class=\"asset-height\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.assetdimensions",{"name":"t","hash":{},"data":data}))
    + ": "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.width : stack1), depth0)) != null ? stack1 : "")
    + " x "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.height : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"asset-tags\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data}))
    + ": "
    + alias3((helpers.renderTags || (depth0 && depth0.renderTags) || alias2).call(alias1,(depth0 != null ? depth0.tags : depth0),"title",{"name":"renderTags","hash":{},"data":data}))
    + "</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"assset-select\">\r\n   <a href=\"#\" class=\"btn primary confirm-select-asset\">Select</a>\r\n  </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"asset-preview-restore-button btn alert\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.restore",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <button class=\"asset-preview-edit-button btn primary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.edit",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    <button class=\"asset-preview-delete-button btn alert\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.delete",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"asset-preview-details text-centered\">\r\n  <div class=\"asset-preview-details-preview\">\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.assetType : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n\r\n  <h1 class=\"asset-preview-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n  <div class=\"asset-preview-description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"asset-size\">"
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetsize",{"name":"t","hash":{},"data":data}))
    + ": "
    + ((stack1 = (helpers.bytesToSize || (depth0 && depth0.bytesToSize) || alias2).call(alias1,(depth0 != null ? depth0.size : depth0),{"name":"bytesToSize","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.duration : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.height : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tags : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSelectable : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"asset-preview-edit\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isDeleted : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n\r\n\r\n    <div class=\"separator\"></div>\r\n\r\n    <button class=\"asset-management-sidebar-new action-primary\">\r\n        <span class=\"asset-management-sidebar-new-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.uploadnewasset",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n\r\n    <div class=\"separator\"></div>\r\n\r\n\r\n    <div class=\"sidebar-row sidebar-divide\">\r\n        <h3 class=\"sidebar-divide-inner\">\r\n            <i class=\"fa fa-filter\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetfilters",{"name":"t","hash":{},"data":data}))
    + "\r\n        </h3>\r\n    </div>\r\n\r\n    <div class=\"sidebar-row\">\r\n        <div class=\"sidebar-row-input\">\r\n            <input type=\"text\" class=\"asset-management-sidebar-filter-search\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.searchbyname",{"name":"t","hash":{},"data":data}))
    + "\"/>\r\n            <button class=\"sidebar-filter-clear\">\r\n                <i class=\"fa fa-times\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"sidebar-row\">\r\n        <button class=\"asset-management-sidebar-filter-image sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"image\">\r\n            <span class=\"asset-management-sidebar-filter-image-inner\">\r\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypeimage",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n            <span class=\"asset-management-sidebar-filter-image-icon\">\r\n                <i class=\"fa fa-image\"></i>\r\n            </span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"sidebar-row\">\r\n        <button class=\"asset-management-sidebar-filter-audio sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"audio\">\r\n            <span class=\"asset-management-sidebar-filter-audio-inner\">\r\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypeaudio",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n            <span class=\"asset-management-sidebar-filter-image-icon\">\r\n                <i class=\"fa fa-file-audio-o\"></i>\r\n            </span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"sidebar-row\">\r\n        <button class=\"asset-management-sidebar-filter-video sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"video\">\r\n            <span class=\"asset-management-sidebar-filter-video-inner\">\r\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypevideo",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n            <span class=\"asset-management-sidebar-filter-image-icon\">\r\n                <i class=\"fa fa-file-video-o\"></i>\r\n            </span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"sidebar-row\">\r\n        <button class=\"asset-management-sidebar-filter-other sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"other\">\r\n            <span class=\"asset-management-sidebar-filter-other-inner\">\r\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypeother",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n            <span class=\"asset-management-sidebar-filter-image-icon\">\r\n                <i class=\"fa fa-file-o\"></i>\r\n            </span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"sidebar-row sidebar-divide\">\r\n        <h3 class=\"sidebar-divide-inner\">\r\n            <i class=\"fa fa-tags\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data}))
    + "\r\n        </h3>\r\n    </div>\r\n\r\n        <button class=\"asset-management-sidebar-add-tag sidebar-filter-button sidebar-tag action-secondary\">\r\n            <span class=\"dashboard-sidebar-add-tag-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.searchbytag",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n        </button>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["assetPicker"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"asset-picker-filters\">\r\n    <label for=\"asset-picker-filter-search\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filter",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n    <input type=\"text\" name=\"asset-picker-filter-search\" class=\"asset-management-sidebar-filter-search\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.searchtitleordescription",{"name":"t","hash":{},"data":data}))
    + "\"/>\r\n    <button class=\"sidebar-inline-input-button asset-picker-sidebar-filter-clear-search\">\r\n        <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <button class=\"asset-picker-sidebar-filter-image asset-picker-sidebar-filter-button\" data-filter-type=\"image\">\r\n        <span class=\"asset-picker-sidebar-filter-image-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypeimage",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n\r\n    <button class=\"asset-picker-sidebar-filter-audio asset-picker-sidebar-filter-button\" data-filter-type=\"audio\">\r\n        <span class=\"asset-picker-sidebar-filter-audio-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypeaudio",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n\r\n    <button class=\"asset-picker-sidebar-filter-video asset-picker-sidebar-filter-button\" data-filter-type=\"video\">\r\n        <span class=\"asset-picker-sidebar-filter-video-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypevideo",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n\r\n    <button class=\"asset-picker-sidebar-filter-other asset-picker-sidebar-filter-button\" data-filter-type=\"other\">\r\n        <span class=\"asset-picker-sidebar-filter-other-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filetypeother",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n</div>\r\n\r\n\r\n<div class=\"asset-management-inner\">\r\n    <div class=\"asset-management-assets-container\">\r\n        <div class=\"asset-management-no-assets\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.noassetsfound",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <div class=\"asset-management-assets-container-inner\">\r\n        </div>\r\n    </div>\r\n    <div class=\"asset-management-preview-container\">\r\n        <div class=\"asset-management-no-preview\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetpreviewinstruction",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <div class=\"asset-management-preview-container-inner\">\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["colorLabelPopUpView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"color-item\" data-colorlabel="
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ">\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"colorlabel-inner\">\r\n    <div class=\"colorlabel-header\">\r\n        <div class=\"title\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.colourLabelTitle",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <div class=\"intro\">"
    + ((stack1 = (helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.colourLabelIntro",{"name":"t","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n    <div class=\"colors\">\r\n        <div class=\"colors-inner clearfix\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div class=\"footer-inner\">\r\n            <button class=\"btn warning reset\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.reset",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n            <button class=\"btn primary apply\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.apply",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n            <button class=\"btn secondary cancel\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["contentPane"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"contentPane-inner\">\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["contextMenu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"context-menu-pin\">\r\n</div>\r\n<div class=\"context-menu-inner\">\r\n    <div class=\"context-menu-holder\">\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["contextMenuItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"context-menu-item-open\" href=\"#\">\r\n    <div class=\"context-menu-item-title\">\r\n        <div class=\"context-menu-item-title-inner\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n    <div class=\"context-menu-item-description\">\r\n        <div class=\"context-menu-item-description-inner\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n</a>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorArticleEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"article-edit-inner form-container\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorArticleEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n    <div class=\"separator\"></div>\r\n    <button class=\"editor-article-edit-sidebar-save action-primary\">\r\n        <span class=\"editor-article-edit-sidebar-save-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n    <button class=\"editor-article-edit-sidebar-cancel action-secondary\">\r\n        <span class=\"editor-article-edit-sidebar-cancel-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n    <div class=\"separator\"></div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorBlockEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"block-edit-inner form-container\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorBlockEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n    <div class=\"separator\"></div>\r\n    <button class=\"editor-block-edit-sidebar-save action-primary\">\r\n        <span class=\"editor-block-edit-sidebar-save-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n    <button class=\"editor-block-edit-sidebar-cancel action-secondary\">\r\n        <span class=\"editor-block-edit-sidebar-cancel-inner\">\r\n            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n    </button>\r\n    <div class=\"separator\"></div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorComponentEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"component-edit-inner form-container\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorComponentEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n        <div class=\"separator\"></div>\r\n        <button class=\"editor-component-edit-sidebar-save action-primary\">\r\n            <span class=\"editor-component-edit-sidebar-save-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n        </button>\r\n        <button class=\"editor-component-edit-sidebar-cancel action-secondary\">\r\n            <span class=\"editor-component-edit-sidebar-cancel-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n        </button>\r\n        <div class=\"separator\"></div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorConfigEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"config-edit-inner form-container\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorConfigEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n  <div class=\"separator\"></div>\r\n  <button class=\"editor-config-edit-sidebar-save action-primary\">\r\n    <span class=\"editor-config-edit-sidebar-save-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n  <button class=\"editor-config-edit-sidebar-cancel action-secondary\">\r\n    <span class=\"editor-config-edit-sidebar-cancel-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n  <div class=\"separator\"></div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"editor-menu-inner clearfix\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-folder-o\"></i>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-file-o\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-parentId=\""
    + alias4(((helper = (helper = helpers._parentId || (depth0 != null ? depth0._parentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_parentId","hash":{},"data":data}) : helper)))
    + "\" class=\"editor-menu-item-inner clearfix no-select\">\r\n  <div class=\"editor-menu-item-settings handle\">\r\n    <div class=\"editor-menu-item-settings-inner\">\r\n      <button class=\"open-context-contentObject\"><i class=\"fa fa-cog fa-fw\"></i></button>\r\n      <button class=\"contentObject-delete editor-delete-contentobject-element\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.clicktodelete",{"name":"t","hash":{},"data":data}))
    + "\"><i class=\"fa fa-trash-o\"></i></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"editor-menu-item-content\">\r\n    <div class=\"editor-menu-item-icon "
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"menu",{"name":"ifValueEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"page",{"name":"ifValueEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"editor-menu-item-title\">\r\n      <h3 class=\"editor-menu-item-title-text\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"editor-menu-item-pin\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuLayer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"editor-menu-layer-controls clearfix\">\r\n  <div class=\"editor-menu-layer-actions add-control\">\r\n    <button class=\"editor-menu-layer-add-page btn primary\"><i class=\"fa fa-file\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.addpage",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    <button class=\"editor-menu-layer-add-menu btn primary-hollow\"><i class=\"fa fa-folder\"></i> "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.addsubmenu",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n  </div>\r\n  <div class=\"editor-menu-layer-actions paste-zone paste-zone-page\">\r\n    <button class=\"editor-menu-layer-paste btn secondary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.paste",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    <button class=\"editor-menu-layer-paste-cancel btn secondary-hollow\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"editor-menu-layer-inner\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.part_editorCommon,depth0,{"name":"part_editorCommon","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPage"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"page-inner\">\r\n  <div class=\"page-detail\">\r\n    <h4 class=\"page-name title\">\r\n      <button class=\"page-edit-button\" title=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.clicktoedit",{"name":"t","hash":{},"data":data}))
    + "\"><i class=\"fa fa-cog fa-fw\"></i></button>\r\n      "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n    </h4>\r\n    <div class=\"page-body\">"
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n\r\n  <div class=\"page-articles\"></div>\r\n\r\n  <div class=\"add-control\">\r\n    <button class=\"btn add-article\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.addarticle",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageArticle"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "      <div class=\""
    + container.escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-body\">"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"article-inner\">\r\n  <div class=\"article-detail no-select\">\r\n"
    + ((stack1 = container.invokePartial(partials.part_editorItemSidebar,depth0,{"name":"part_editorItemSidebar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"article-content\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"article-blocks\"></div>\r\n    <div class=\"add-control\">\r\n      <button class=\"btn add-block\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"app.addblock",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPageBlock"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    <div class=\""
    + container.escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "-body\">"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"add-control\">\r\n      <button class=\"btn add-component\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addcomponent",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = container.invokePartial(partials.part_editorItemSidebar,depth0,{"name":"part_editorItemSidebar","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<div class=\"block-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"page-components clearfix\"></div>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.layoutOptions : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPageComponent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"component-type\">"
    + container.escapeExpression(((helper = (helper = helpers._componentTypeDisplayName || (depth0 != null ? depth0._componentTypeDisplayName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_componentTypeDisplayName","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = container.invokePartial(partials.part_editorItemSidebar,depth0,{"name":"part_editorItemSidebar","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<div class=\"component-inner\">\r\n  <div class=\"component-detail no-select\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._componentTypeDisplayName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <h4 class=\"component-title\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</h4>\r\n    <div class=\"component-body\">"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPageComponentList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"editor-component-list-sidebar\">\r\n    <div class=\"editor-component-list-sidebar-inner\">\r\n\r\n        <div class=\"editor-component-list-sidebar-exit\">\r\n          <i class=\"fa fa-times\"></i>\r\n        </div>\r\n\r\n        <div class=\"editor-component-list-sidebar-header\">\r\n          <div class=\"editor-component-list-sidebar-title\">\r\n            <h2 class=\"editor-component-list-sidebar-title-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.addcomponent",{"name":"t","hash":{},"data":data}))
    + "</h2>\r\n          </div>\r\n          <div class=\"editor-component-list-sidebar-body\">\r\n              <div class=\"editor-component-list-sidebar-body-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.pleaseselectcomponent",{"name":"t","hash":{},"data":data}))
    + "\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"editor-component-list-sidebar-search\">\r\n            <div class=\"editor-component-list-sidebar-search-icon\">\r\n              <i class=\"fa fa-search\"></i>\r\n            </div>\r\n            <div class=\"editor-component-list-sidebar-search-field\">\r\n              <input type=\"search\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.typetofiltercomponents",{"name":"t","hash":{},"data":data}))
    + "\"/>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"editor-component-list-sidebar-list\"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"click-capture\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageComponentListItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"editor-component-list-item-details\">\r\n      <span class=\"editor-component-list-item-display-name\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "title=\""
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "\"";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <br/><span class=\"editor-component-list-item-description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "      <a class=\"btn primary editor-component-list-item-overlay-button editor-component-list-item-overlay-left\" data-position=\"left\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addtoleft",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "      <a class=\"btn primary editor-component-list-item-overlay-button editor-component-list-item-overlay-add\" data-position=\"full\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addfullwidth",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "      <a class=\"btn primary editor-component-list-item-overlay-button editor-component-list-item-overlay-right\" data-position=\"right\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addtoright",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"editor-component-list-item-inner\">\r\n  <div class=\"editor-component-list-item-icon "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayName : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"editor-component-list-item-overlay display-none\">\r\n  <div class=\"editor-component-list-item-overlay-inner clearfix\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.availablePositions : depth0)) != null ? stack1.left : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.availablePositions : depth0)) != null ? stack1.full : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.availablePositions : depth0)) != null ? stack1.right : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageComponentPasteZone"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"paste-zone-inner\">\r\n  <a href=\"#\" class=\"editor-paste-zone-paste paste-component btn secondary\" data-paste-layout=\""
    + alias3(((helper = (helper = helpers._pasteZoneLayout || (depth0 != null ? depth0._pasteZoneLayout : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_pasteZoneLayout","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.paste",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n  <a href=\"#\" class=\"editor-paste-zone-cancel paste-cancel btn secondary-hollow\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page-edit-inner form-container\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n  <div class=\"separator\"></div>\r\n  <button class=\"editor-page-edit-sidebar-save action-primary\">\r\n    <span class=\"editor-page-edit-sidebar-save-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n  <button class=\"editor-page-edit-sidebar-cancel action-secondary\">\r\n    <span class=\"editor-page-edit-sidebar-cancel-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n  <div class=\"separator\"></div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.part_editorCommon,depth0,{"name":"part_editorCommon","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorCourseEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"course-edit-inner form-container\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorCourseEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n        <div class=\"separator\"></div>\r\n        <button class=\"editor-project-edit-sidebar-save action-primary\">\r\n            <span class=\"editor-project-edit-sidebar-save-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n        </button>\r\n        <button class=\"editor-project-edit-sidebar-cancel action-secondary\">\r\n            <span class=\"editor-project-edit-sidebar-cancel-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n        </button>\r\n        <div class=\"separator\" />\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorExtensionsEdit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.enabledExtensions : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "        <div class=\"extension-management-plugin tb-row tb-row-"
    + alias3((helpers.odd || (depth0 && depth0.odd) || alias2).call(alias1,(data && data.index),{"name":"odd","hash":{},"data":data}))
    + "\">\r\n          <div class=\"extension-management-plugin-inner col-row\">\r\n            <div class=\"extension-management-plugin-title col-20\">\r\n              <h4 class=\"extension-management-plugin-title-inner tb-col-inner\">"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</h4>\r\n            </div>\r\n            <div class=\"extension-management-plugin-description col-60\">\r\n              <div class=\"extension-management-plugin-description-inner tb-col-inner\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n            </div>\r\n            <div class=\"extension-management-plugin-remove col-20 col-centered\">\r\n              <div class=\"extension-management-plugin-remove-inner tb-col-inner\">\r\n                <button class=\"btn alert remove-extension\" data-displayName=\""
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.remove",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"tb-row\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.noextensionsenabled",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.availableExtensions : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "        <div class=\"extension-management-plugin tb-row tb-row-"
    + alias3((helpers.odd || (depth0 && depth0.odd) || alias2).call(alias1,(data && data.index),{"name":"odd","hash":{},"data":data}))
    + "\">\r\n            <div class=\"extension-management-plugin-inner col-row\">\r\n                <div class=\"extension-management-plugin-title col-20\">\r\n                    <h4 class=\"extension-management-plugin-title-inner tb-col-inner\">"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</h4>\r\n                </div>\r\n\r\n                <div class=\"extension-management-plugin-description col-60\">\r\n                    <div class=\"extension-management-plugin-description-inner tb-col-inner\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n                </div>\r\n\r\n                <div class=\"extension-management-plugin-remove col-20 col-centered\">\r\n                    <div class=\"extension-management-plugin-remove-inner tb-col-inner\">\r\n                        <button class=\"btn secondary add-extension\" data-displayName=\""
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.add",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"tb-row\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.noextensionsavailable",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"extension-management-inner\">\r\n  <div class=\"extension-management-enabled-extensions-title tb-row tb-title\">\r\n    <h2>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.enabledextensions",{"name":"t","hash":{},"data":data}))
    + "</h2>\r\n  </div>\r\n\r\n  <div class=\"extension-management-heading col-row tb-row tb-heading\">\r\n    <div class=\"extension-management-heading extension-management-heading-title col-20\">\r\n      <h4 class=\"extension-management-heading-title-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.extension",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n    <div class=\"extension-management-heading extension-management-heading-description col-60\">\r\n      <h4 class=\"extension-management-heading-description-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.description",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n    <div class=\"extension-management-heading extension-management-heading-options col-20 col-centered\">\r\n      <h4 class=\"pluginType-heading-version-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.options",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"extension-management-plugins clearfix grid-layout\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enabledExtensions : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n\r\n  <div class=\"extension-management-enabled-extensions-title tb-row tb-title\">\r\n    <h2>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.availableextensions",{"name":"t","hash":{},"data":data}))
    + "</h2>\r\n  </div>\r\n  <div class=\"extension-management-heading tb-row col-row tb-heading\">\r\n    <div class=\"extension-management-heading extension-management-heading-title col-20\">\r\n      <h4 class=\"extension-management-heading-title-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.extension",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n    <div class=\"extension-management-heading extension-management-heading-description col-60\">\r\n      <h4 class=\"extension-management-heading-description-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.description",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n    <div class=\"extension-management-heading extension-management-heading-options col-20 col-centered\">\r\n      <h4 class=\"pluginType-heading-version-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.options",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"extension-management-plugins clearfix grid-layout\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.availableExtensions : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorExtensionsEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidebar-item-inner\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"editor-inner clearfix\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPasteZone"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"paste-zone-inner\">\r\n  <a href=\"#\" class=\"editor-paste-zone-paste paste-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " btn action-primary\" data-sort-order=\""
    + alias4(((helper = (helper = helpers._pasteZoneSortOrder || (depth0 != null ? depth0._pasteZoneSortOrder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_pasteZoneSortOrder","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.paste",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n  <a href=\"#\" class=\"editor-paste-zone-cancel paste-cancel btn action-secondary\">"
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSettingsEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"menu-settings-list clearfix\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSettingsEditSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidebar-item-inner\">\r\n  <button class=\"editor-menusettings-edit-sidebar-save action-primary\">\r\n    <span class=\"editor-menusettings-edit-sidebar-save-inner\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.save",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSettingsItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"menu-settings-list-item-inner\">\r\n  <div class=\"display-name\">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPresetEdit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "      <div class=\"preset\" data-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.displayName : stack1), depth0))
    + "\">\r\n        <div class=\"name\">\r\n          <div class=\"label\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.displayName : stack1), depth0))
    + "</div>\r\n          <button class=\"button edit btn secondary\">\r\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias4).call(alias3,"app.themepresetedit",{"name":"t","hash":{},"data":data}))
    + "\r\n          </button>\r\n          <button class=\"button delete btn alert\">\r\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias4).call(alias3,"app.themepresetdelete",{"name":"t","hash":{},"data":data}))
    + "\r\n          </button>\r\n        </div>\r\n        <div class=\"nameEdit\">\r\n          <div class=\"preset-error display-none\"></div>\r\n          <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.displayName : stack1), depth0))
    + "\">\r\n          <button class=\"button save btn secondary\">\r\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias4).call(alias3,"app.themepresetsave",{"name":"t","hash":{},"data":data}))
    + "\r\n          </button>\r\n          <button class=\"button cancel btn primary-hollow\">\r\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias4).call(alias3,"app.themepresetcancel",{"name":"t","hash":{},"data":data}))
    + "\r\n          </button>\r\n        </div>\r\n      </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"presetEdit-inner\">\r\n  <button class=\"button close\"><i class=\"fa fa-times\"></i></button>\r\n  <div class=\"title\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.presetedittitle",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n  <div class=\"description\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.preseteditdesc",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n  <div class=\"presets\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.presets : depth0)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n<div class=\"screenlock\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorTheming"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"theming-inner\">\r\n  <div class=\"error display-none\">\r\n  </div>\r\n  <div class=\"header\">\r\n    <div class=\"inner\">\r\n      <div class=\"title\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.choosethemetitle",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n      <div class=\"description editable-theme\">"
    + ((stack1 = (helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.choosethemedesc",{"name":"t","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n      <div class=\"empty-message description\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.themenoteditablebody",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n      <div class=\"theme-selector\">\r\n        <div class=\"theme tile\">\r\n          <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.themeselectlabel",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n          <select id=\"theme\" disabled=\"true\">\r\n            <option value=\"\" disabled selected>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.themeselectinstr",{"name":"t","hash":{},"data":data}))
    + "</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"preset tile editable-theme\">\r\n          <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.presetselectlabel",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n          <select id=\"preset\" disabled=\"true\">\r\n            <option value=\"\" disabled selected>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.presetselectinstr",{"name":"t","hash":{},"data":data}))
    + "</option>\r\n          </select>\r\n        </div>\r\n        <button class=\"edit btn secondary editable-theme\">\r\n          "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.presetedit",{"name":"t","hash":{},"data":data}))
    + "\r\n        </button>\r\n      </div>\r\n      <div class=\"tip editable-theme\">"
    + ((stack1 = (helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.themepresettip",{"name":"t","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"theme-customiser\">\r\n    <div class=\"form-container\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["editorThemingSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"separator\"></div>\r\n<div class=\"sidebar-item-inner\">\r\n  <button class=\"editor-theming-sidebar-save action-primary\">\r\n    <span>\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n  </button>\r\n  <button class=\"editor-theming-sidebar-savePreset short secondary-hollow action-btn\">\r\n    <span>\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.savepreset",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n  </button>\r\n  <button class=\"editor-theming-sidebar-reset short action-secondary\">\r\n    <span>\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.restorepreset",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n  </button>\r\n  <button class=\"editor-theming-sidebar-cancel action-secondary\">\r\n    <span>\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "\r\n    </span>\r\n  </button>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["typeAhead"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"typeahead-filter\">\r\n  	<input id=\"typeahead-input\" class=\"typeahead\" type=\"text\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeholderText || (depth0 != null ? depth0.placeholderText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholderText","hash":{},"data":data}) : helper)))
    + "\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImport"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"asset-management-new-asset-file\">\r\n          "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.importframeworkfileuploaded",{"name":"t","hash":{},"data":data}))
    + "\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <input type=\"file\" class=\"asset-file\" name=\"file\">\r\n        "
    + container.escapeExpression(((helper = (helper = helpers.maxUploadSize || (depth0 != null ? depth0.maxUploadSize : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxUploadSize","hash":{},"data":data}) : helper)))
    + "\r\n        <div class=\"progress-container\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"progress-percent\">0%</div>\r\n          </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div id=\"import_upload\" class=\"inner\">\r\n  <form class=\"frameworkImport forms\" action=\"importsourcecheck\" method=\"post\" autocomplete=\"off\">\r\n    <div class=\"form-group\">\r\n      <div class=\"field field-file\">\r\n        <label for=\"file\">\r\n          "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetfile",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n          <span class=\"error\"></span>\r\n        </label>\r\n        <div class=\"field-help\">\r\n          "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.importframeworkinstruction",{"name":"t","hash":{},"data":data}))
    + "\r\n        </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.path : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"field field-assets\">\r\n        <label for=\"tags\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.importassetfolderstitle",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <div class=\"field-help\">\r\n          "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.importassetfoldersinstruction",{"name":"t","hash":{},"data":data}))
    + "\r\n        </div>\r\n        <div>\r\n          <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"formAssetFolders\" name=\"formAssetFolders\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.importassetfoldersplaceholder",{"name":"t","hash":{},"data":data}))
    + "\" value=\"\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"field field-tags\">\r\n        <label for=\"tags\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"tags_control\" name=\"tags_control\" value=\""
    + alias3((helpers.pickCSV || (depth0 && depth0.pickCSV) || alias2).call(alias1,(depth0 != null ? depth0.tags : depth0),"title",{"name":"pickCSV","hash":{},"data":data}))
    + "\" />\r\n      </div>\r\n      <input type=\"hidden\" name=\"tags\" id=\"tags\" />\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div id=\"import_details\" class=\"display-none\">\r\n  <form class=\"frameworkImportDetails forms\" action=\"importsource\" method=\"post\" autocomplete=\"off\">\r\n    <div class=\"inner framework-versions display-none\"></div>\r\n    <div class=\"inner import-summary\">\r\n      <div class=\"title\"></div>\r\n      <div class=\"description\"></div>\r\n    </div>\r\n    <div class=\"inner plugin-list display-none\">\r\n      <div class=\"red key-field display-none\"><span class=\"key\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.pluginredlabel",{"name":"t","hash":{},"data":data}))
    + "</span> - "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.pluginredkey",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n      <div class=\"amber key-field display-none\"><span class=\"key\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.pluginamberlabel",{"name":"t","hash":{},"data":data}))
    + "</span> - "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.pluginamberkey",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n      <div class=\"green-update key-field display-none\"><span class=\"key\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.plugingreenupdatelabel",{"name":"t","hash":{},"data":data}))
    + "</span> - "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.plugingreenupdatekey",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n      <div class=\"green-install key-field display-none\"><span class=\"key\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.plugingreeninstalllabel",{"name":"t","hash":{},"data":data}))
    + "</span> - "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.plugingreeninstallkey",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImportPluginHeadingView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"frameworkImportPlugin-headings tb-heading col-row tb-row\">\r\n\r\n  <div class=\"frameworkImportPlugin-heading col-40\">\r\n    <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.name",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n  </div>\r\n\r\n  <div class=\"frameworkImportPlugin-heading col-20 col-centered\">\r\n    <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.importversion",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n  </div>\r\n\r\n  <div class=\"frameworkImportPlugin-heading col-20 col-centered\">\r\n    <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.atversion",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n  </div>\r\n\r\n  <div class=\"frameworkImportPlugin-heading col-20 col-centered\">\r\n    <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.action",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n  </div>\r\n\r\n</div>\r\n<ul class=\"frameworkImportPlugin-plugins clearfix grid-layout\"></ul>";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImportPluginView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"frameworkImport-inner\">\r\n  <div class=\"frameworkImport-description col-row tb-row "
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"col-40\">\r\n      "
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"col-20 col-centered import-version\">\r\n      "
    + alias4(((helper = (helper = helpers.importVersion || (depth0 != null ? depth0.importVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"importVersion","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"col-20 col-centered at-version\">\r\n      "
    + alias4(((helper = (helper = helpers.authoringToolVersion || (depth0 != null ? depth0.authoringToolVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authoringToolVersion","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"col-20 col-centered status\">\r\n      "
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImportSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"separator\"></div>\r\n<div class=\"sidebar-item-inner\">\r\n  <button type=\"submit\" class=\"action-primary framework-import-sidebar-save-button show-details\">\r\n    <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.importcourse",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n  <button type=\"button\" class=\"cancel action-secondary\">\r\n    <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["globalMenu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"global-menu-inner\">\r\n</div>\r\n<div class=\"global-menu-submenu\">\r\n    <div class=\"global-menu-submenu-inner\">\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["globalMenuItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"global-menu-item-inner\">\r\n    <div class=\"global-menu-item-icon\">\r\n        <span class=\"icon\"></span>\r\n    </div>\r\n    <div class=\"global-menu-item-text\">\r\n        <div class=\"global-menu-item-text-inner\"><i class=\"fa "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + " fa-fw\"></i>&nbsp;\r\n            "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n        </div>\r\n    </div>\r\n</a>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["locationTitle"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"breadcrumbs\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.breadcrumbs : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"item\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(data && data.last),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "              "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"separator unselectable\">&gt;</div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"titles\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.course : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"course\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"location-title-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.breadcrumbs : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"modal-popup-title\">\r\n      <h2 class=\"modal-popup-title-inner\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <button href=\"#\" class=\"modal-popup-done\">\r\n        <i class=\"fa fa-check\"></i>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.done",{"name":"t","hash":{},"data":data}))
    + "\r\n      </button>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <button href=\"#\" class=\"modal-popup-close\">\r\n        <i class=\"fa fa-times\"></i>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.cancel",{"name":"t","hash":{},"data":data}))
    + "\r\n      </button>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"modal-popup-body\">\r\n      <div class=\"modal-popup-body-inner\">\r\n        "
    + container.escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper)))
    + "\r\n      </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal-popup\">\r\n  <div class=\"modal-popup-toolbar clearfix\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"model-popup-toolbar-buttons\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldShowDoneButton : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldShowCancelButton : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n  <div class=\"modal-popup-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"modal-popup-content\">\r\n      <div class=\"modal-popup-content-inner\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <a href=\"#\" class=\"navigation-item navigation-global-menu\" data-event=\"globalMenu:toggle\">\r\n      <div id=\"global-menu-icon\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n    </a>\r\n    <div href=\"#\" class=\"navigation-item navigation-product-name\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.productname",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <a href=\"#\" class=\"navigation-item navigation-help\" data-event=\"help\">\r\n      <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.help",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    </a>\r\n    <a href=\"#\" class=\"navigation-item navigation-profile\" data-event=\"user:profile\">\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.loggedinas",{"name":"t","hash":{},"data":data}))
    + ": <span>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </a>\r\n    <a href=\"#\" class=\"navigation-item navigation-user-logout btn white-hollow\" data-event=\"user:logout\">\r\n      <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.logout",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"navigation-bg\"></div>\r\n<div class=\"navigation-inner clearfix\">\r\n  <div class=\"navigation-left\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAuthenticated : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"navigation-right\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAuthenticated : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["options"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"options-inner\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["optionsGroup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"options-group options-group-"
    + alias4(((helper = (helper = helpers.group || (depth0 != null ? depth0.group : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"group","hash":{},"data":data}) : helper)))
    + "\" data-group=\""
    + alias4(((helper = (helper = helpers.group || (depth0 != null ? depth0.group : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"group","hash":{},"data":data}) : helper)))
    + "\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["optionsItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<i class=\"fa fa-"
    + container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"option-value-item\">\r\n<button data-callback=\""
    + alias4(((helper = (helper = helpers.callbackEvent || (depth0 != null ? depth0.callbackEvent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callbackEvent","hash":{},"data":data}) : helper)))
    + "\" data-group=\""
    + alias4(((helper = (helper = helpers.group || (depth0 != null ? depth0.group : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"group","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"option-value-title\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n</button>\r\n</div\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagement"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"pluginType-heading pluginType-heading-addedDefault col-10 col-centered\">\r\n        <h4 class=\"pluginType-heading-addedDefault tb-col-inner\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addedDefault",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n      </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"pluginManagement-inner inner\">\r\n  <div class=\"pluginType-headings tb-heading col-row tb-row\">\r\n\r\n    <div class=\"pluginType-heading pluginType-heading-title col-20\">\r\n      <h4 class=\"pluginType-heading-title-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.name",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n\r\n    <div class=\"pluginType-heading pluginType-heading-description col-40\">\r\n      <h4 class=\"pluginType-heading-description-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.description",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n\r\n    <div class=\"pluginType-heading pluginType-heading-version col-10 col-centered\">\r\n      <h4 class=\"pluginType-heading-version-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.version",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n\r\n    <div class=\"pluginType-heading pluginType-heading-enabled col-10 col-centered\">\r\n      <h4 class=\"pluginType-heading-enabled-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.enabled",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"extension",{"name":"ifValueEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"pluginType-heading pluginType-heading-action col-10 col-centered\">\r\n      <h4 class=\"pluginType-heading-action-inner tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.action",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n    </div>\r\n\r\n  </div>\r\n  <ul class=\"pluginManagement-plugins clearfix grid-layout\">\r\n    <div class=\"pluginManagement-loading\">\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.loading",{"name":"t","hash":{},"data":data}))
    + "\r\n    </div>\r\n  </ul>\r\n\r\n  <div class=\"pluginType-bulk-actions tb-row\">\r\n    <div class=\"pluginType-action-buttons\">\r\n      <button class=\"btn tertiary-hollow refresh-all-plugins\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.refresh",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagementSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n    <div class=\"separator\"></div>\r\n    <button class=\"pluginManagement-sidebar-upload action-primary\">\r\n      <span class=\"plugin-management-sidebar-view-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.uploadplugin",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    </button>\r\n    <div class=\"separator\"></div>\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"pluginManagement-sidebar-extensions\">\r\n      <span class=\"pluginManagement-sidebar-extensions\">\r\n        <i class=\"fa fa-plug\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.extensions",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"pluginManagement-sidebar-components\">\r\n      <span class=\"pluginManagement-sidebar-components\">\r\n        <i class=\"fa fa-cubes\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.components",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"pluginManagement-sidebar-themes\">\r\n      <span class=\"pluginManagement-sidebar-themes\">\r\n        <i class=\"fa fa-image\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.themes",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  </div>\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"pluginManagement-sidebar-menus\">\r\n      <span class=\"pluginManagement-sidebar-menus\">\r\n        <i class=\"fa fa-sitemap\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.menus",{"name":"t","hash":{},"data":data}))
    + "\r\n      </span>\r\n    </button>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"sidebar-row\">\r\n    <button class=\"pluginManagement-sidebar-getPlugins\">\r\n      <i class=\"fa fa-external-link\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.getnewplugins",{"name":"t","hash":{},"data":data}))
    + "\r\n    </button>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagementUpload"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"inner\">\r\n  <form class=\"plugin-form forms plugin-form\" action=\"api/upload/contentplugin\" method=\"post\">\r\n    <div class=\"form-group\">\r\n      <label for=\"file\">\r\n        "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.pluginfile",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span>\r\n        <span class=\"field-error display-none\" data-error=\"\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.required",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n      </label>\r\n      <input type=\"file\" class=\"plugin-file\" name=\"file\">\r\n      "
    + alias3(((helper = (helper = helpers.maxUploadSize || (depth0 != null ? depth0.maxUploadSize : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"maxUploadSize","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n  </form>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagementUploadSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n\r\n  <div class=\"separator\"> </div>\r\n\r\n  <button type=\"submit\" class=\"pluginManagement-upload-sidebar-save-button action-primary\">\r\n    <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.upload",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n\r\n  <button type=\"button\" class=\"pluginManagement-upload-sidebar-cancel-button action-secondary\">\r\n    <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginType"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "row-disabled";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <a href=\""
    + alias3(((helper = (helper = helpers.homepage || (depth0 != null ? depth0.homepage : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"homepage","hash":{},"data":data}) : helper)))
    + "\" class=\"pluginType-homepage tb-col-inner\" target=\"_blank\">\r\n          <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.visitpluginhomepage",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n        </a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"pluginType-addedDefault col-10 col-centered\">\r\n        <input class=\"pluginType-addedDefault\" type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isAddedByDefault : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\r\n      </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "checked";
},"12":function(container,depth0,helpers,partials,data) {
    return "          <i title=\""
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.uploadedbyuser",{"name":"t","hash":{},"data":data}))
    + "\" class=\"user-uploaded fa fa-user\"></i>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "          <button title=\""
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.checkforupdates",{"name":"t","hash":{},"data":data}))
    + "\" class=\"plugin-update-check btn\"><i class=\"fa fa-refresh\"></i></button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pluginType-inner "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isAvailableInEditor : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n  <div class=\"pluginType-description col-row\">\r\n    <div class=\"pluginType-title col-20\">\r\n      <h4 class=\"pluginType-title-inner tb-col-inner\">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</h4>\r\n    </div>\r\n    <div class=\"pluginType-description col-40\">\r\n      <div class=\"pluginType-description-inner tb-col-inner\">\r\n        "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\r\n      </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.homepage : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"pluginType-version col-10 col-centered\">\r\n      <span class=\"pluginType-version-number tb-col-inner\">"
    + alias4(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"pluginType-active col-10 col-centered\">\r\n      <input class=\"pluginType-enabled\" type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isAvailableInEditor : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\r\n    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.extension : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"pluginType-update col-10 col-centered\">\r\n      <div class=\"pluginType-update-inner tb-col-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLocalPackage : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "          <button title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.remove",{"name":"t","hash":{},"data":data}))
    + "\" class=\"plugin-remove btn alert\"><i class=\"fa fa-trash-o\"></i></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["project"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"project-image\" style=\"background-image: url("
    + container.escapeExpression(((helper = (helper = helpers.heroImageURI || (depth0 != null ? depth0.heroImageURI : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"heroImageURI","hash":{},"data":data}) : helper)))
    + ");\">\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"project-image\">\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <div class=\"project-details-createdBy project-details-row\">\r\n          <div class=\"projects-details-label\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.createdBy",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n          <div class=\"projects-details-value\">"
    + alias3(((helper = (helper = helpers.creatorName || (depth0 != null ? depth0.creatorName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"creatorName","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <div class=\"project-details-tags project-details-row tags\">\r\n          <div class=\"projects-details-tags-button\">\r\n            <button class=\"btn secondary-hollow projects-details-tags-button-show\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.viewtags",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n          </div>\r\n          <div class=\"projects-details-value tag-container\">\r\n            <ul class=\"items tags\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\r\n            <button class=\"btn secondary-hollow projects-details-tags-button-hide\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.hidetags",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n          </div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "              <li class=\"item-row tag\" title=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\r\n                <span class=\"value-text\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\r\n              </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"project-inner clearfix no-select\" data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"project-header\">\r\n      <div class=\"project-header-inner\">\r\n\r\n        <div class=\"project-settings\">\r\n          <div class=\"project-settings-inner\">\r\n            <a href=\"#\" class=\"open-context-icon open-context-course\"><i class=\"fa fa-cog fa-fw\"></i></a>\r\n            <a href=\"#\" class=\"course-delete editor-delete-course-element\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.clicktodelete",{"name":"t","hash":{},"data":data}))
    + "\">\r\n                <i class=\"fa fa-trash-o\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.heroImage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"project-details\">\r\n      <div class=\"project-details-inner\">\r\n        <div class=\"project-detail-title\">\r\n          <h1 class=\"project-detail-title-inner\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\r\n        </div>\r\n\r\n        <div class=\"project-details-last-updated project-details-row\">\r\n          <div class=\"projects-details-label\">"
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.lastupdated",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n          <div class=\"projects-details-value\">"
    + alias4((helpers.momentFormat || (depth0 && depth0.momentFormat) || alias2).call(alias1,(depth0 != null ? depth0.updatedAt : depth0),"Do MMMM YYYY",{"name":"momentFormat","hash":{},"data":data}))
    + "</div>\r\n        </div>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.creatorName : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tags : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["projects"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"projects-inner\">\r\n	<div class=\"no-projects display-none\">\r\n		"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.noprojectstodisplay",{"name":"t","hash":{},"data":data}))
    + "\r\n	</div>\r\n  <ul class=\"projects-list clearfix grid-layout\"></ul>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["projectsSidebar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"projects-sidebar-import-course action-secondary\">\r\n      <span class=\"projects-sidebar-import-course-inner\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.importcourse",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n    </button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n\r\n  <div class=\"separator\"></div>\r\n\r\n  <button class=\"projects-sidebar-add-course action-primary\">\r\n    <span class=\"projects-sidebar-add-course-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.addnewproject",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n\r\n"
    + ((stack1 = (helpers.ifHasPermissions || (depth0 && depth0.ifHasPermissions) || alias2).call(alias1,"*/*:create,*/*:read,*/*:update,*/*:delete",{"name":"ifHasPermissions","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  <div class=\"separator\"></div>\r\n\r\n    <div class=\"sidebar-row\">\r\n      <button class=\"projects-sidebar-my-courses\">\r\n        <span class=\"projects-sidebar-my-courses-inner\">\r\n          <i class=\"fa fa-chevron-right primary-color\"/>\r\n          "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.myprojects",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"sidebar-row\">\r\n      <button class=\"projects-sidebar-shared-courses\">\r\n        <span class=\"projects-sidebar-shared-courses-inner\">\r\n          <i class=\"fa fa-chevron-right primary-color\"/>\r\n          "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.sharedprojects",{"name":"t","hash":{},"data":data}))
    + "\r\n        </span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"sidebar-search-tag\">\r\n      <div class=\"sidebar-row\">\r\n        <div class=\"sidebar-row-input\">\r\n          <input type=\"text\" class=\"projects-sidebar-filter-input projects-sidebar-filter-search-input\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.searchbyname",{"name":"t","hash":{},"data":data}))
    + "\"/>\r\n          <button class=\"sidebar-filter-clear\"><i class=\"fa fa-times\"></i></button>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"projects-sidebar-add-tag sidebar-filter-button action-secondary\">\r\n        <span class=\"projects-sidebar-add-tag-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.searchbytag",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n      </button>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["field"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " field-"
    + container.escapeExpression((helpers.stringToClassName || (depth0 && depth0.stringToClassName) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"stringToClassName","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.legend : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return " field-object field-object-"
    + container.escapeExpression((helpers.stringToClassName || (depth0 && depth0.stringToClassName) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.legend : depth0),{"name":"stringToClassName","hash":{},"data":data}));
},"6":function(container,depth0,helpers,partials,data) {
    return " is-default-value";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.inputType : depth0)) != null ? stack1.type : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputType","hash":{},"data":data}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <label for=\""
    + alias4(((helper = (helper = helpers.editorId || (depth0 != null ? depth0.editorId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"editorId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</label>\r\n  <div class=\"field-help\">\r\n    <i class=\"fa fa-info-circle\"></i>\r\n    <div class=\"tooltip\">\r\n      <div class=\"tooltip-key\">"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.help : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n  <button class=\"field-default\" data-action=\"default\" title=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.reset",{"name":"t","hash":{},"data":data}))
    + "\">\r\n    <i class=\"fa fa-undo\"></i>\r\n  </button>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"tooltip-help\">"
    + container.escapeExpression(((helper = (helper = helpers.help || (depth0 != null ? depth0.help : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"help","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.legend : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"legend\">\r\n    <legend>"
    + container.escapeExpression(((helper = (helper = helpers.legend || (depth0 != null ? depth0.legend : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"legend","hash":{},"data":data}) : helper)))
    + "</legend>\r\n  </div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.legend : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return " collapsed";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"field"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isDefaultValue : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-editor-id=\""
    + container.escapeExpression(((helper = (helper = helpers.editorId || (depth0 != null ? depth0.editorId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"editorId","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.inputType : depth0)) != null ? stack1.type : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "  <div class=\"field-editor"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"field-error\" data-error></div>\r\n    <span data-editor></span>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["fieldset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.stringToClassName || (depth0 && depth0.stringToClassName) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.legend : depth0),{"name":"stringToClassName","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return "object";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"legend\">\r\n    <legend>"
    + container.escapeExpression(((helper = (helper = helpers.legend || (depth0 != null ? depth0.legend : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"legend","hash":{},"data":data}) : helper)))
    + "</legend>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<fieldset class=\"fieldset-"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.legend : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-key=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" data-fields>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.legend : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</fieldset>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <button class=\"btn primary\" type=\"submit\">"
    + container.escapeExpression(((helper = (helper = helpers.submitButton || (depth0 != null ? depth0.submitButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"submitButton","hash":{},"data":data}) : helper)))
    + "</button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<form>\r\n  <div data-fieldsets></div>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.submitButton : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</form>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"list-items\">\r\n  <div data-items></div>\r\n  <button class=\"btn primary\" type=\"button\" data-action=\"add\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.add",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["listItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"list-item\">\r\n  <span data-editor></span>\r\n  <button class=\"btn secondary fa fa-clone\" type=\"button\" data-action=\"clone\"></button>\r\n  <button class=\"btn warning fa fa-close\" type=\"button\" data-action=\"remove\"></button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldAsset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  <div class=\"scaffold-asset-buttons\">\r\n    <button class=\"btn scaffold-asset-clear\">\r\n      <i class=\"fa fa-times-circle\"></i>\r\n"
    + ((stack1 = (helpers.ifAssetIsExternal || (depth0 && depth0.ifAssetIsExternal) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "    </button>\r\n  </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.thumbUrl : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <img class=\"scaffold-asset-preview\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.thumbUrl || (depth0 != null ? depth0.thumbUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thumbUrl","hash":{},"data":data}) : helper)))
    + "\"/>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <a class=\"scaffold-asset-preview\" title=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.nothumbnailforimage",{"name":"t","hash":{},"data":data}))
    + "\" href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n        <i class=\"fa fa-file-image-o fa-large\"></i>\r\n      </a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    <a class=\"scaffold-asset-preview\" href=\""
    + ((stack1 = (helpers.ifAssetIsExternal || (depth0 && depth0.ifAssetIsExternal) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "\" target=\"_blank\">\r\n      <i class=\"fa fa-file-o fa-large\"></i>\r\n      <div>"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </a>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifAssetIsExternal || (depth0 && depth0.ifAssetIsExternal) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.value : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <a class=\"scaffold-asset-preview\" href=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n        <i class=\"fa fa-file-movie-o fa-large\"></i>\r\n        <div>"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</div>\r\n      </a>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    <a class=\"scaffold-asset-preview\" href=\""
    + ((stack1 = (helpers.ifAssetIsExternal || (depth0 && depth0.ifAssetIsExternal) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "\" target=\"_blank\">\r\n      <i class=\"fa fa-file-audio-o fa-large\"></i>\r\n      <div>"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </a>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeexternalasset",{"name":"t","hash":{},"data":data}))
    + "\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeasset",{"name":"t","hash":{},"data":data}))
    + "\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\r\n  <div class=\"scaffold-asset-external-input display-none\">\r\n    <input type=\"text\" class=\"scaffold-asset-external-input-field\" />\r\n    <div class=\"scaffold-asset-external-input-buttons\">\r\n      <button class=\"btn primary scaffold-asset-external-input-save\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n      <button class=\"btn primary-hollow scaffold-asset-external-input-cancel\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"scaffold-asset-buttons\">\r\n    <button class=\"btn secondary scaffold-asset-picker\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.selectasset",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    <button class=\"btn secondary-hollow scaffold-asset-external\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.selectexternalasset",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n  </div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["scaffoldAssetItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n  <div class=\"scaffold-asset-item-img-holder\">\r\n    <img class=\"scaffold-asset-item-preview\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"/>\r\n  </div>\r\n\r\n  <div class=\"scaffold-asset-buttons\">\r\n    <button class=\"btn scaffold-asset-clear\">\r\n      <i class=\"fa fa-times-circle\"></i>\r\n"
    + ((stack1 = (helpers.ifAssetIsExternal || (depth0 && depth0.ifAssetIsExternal) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </button>\r\n    <button class=\"btn add-item\">"
    + alias4(((helper = (helper = helpers.addLabel || (depth0 != null ? depth0.addLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addLabel","hash":{},"data":data}) : helper)))
    + "</button>\r\n  </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeexternalasset",{"name":"t","hash":{},"data":data}))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeasset",{"name":"t","hash":{},"data":data}))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\r\n  <div class=\"scaffold-asset-external-input display-none\">\r\n    <input type=\"text\" class=\"scaffold-asset-external-input-field\" />\r\n    <div class=\"scaffold-asset-external-input-buttons\">\r\n      <button class=\"btn primary scaffold-asset-external-input-save\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n      <button class=\"btn primary-hollow scaffold-asset-external-input-cancel\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"scaffold-asset-buttons\">\r\n    <button class=\"btn secondary scaffold-asset-picker\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.selectasset",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    <button class=\"btn secondary-hollow scaffold-asset-external\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.selectexternalasset",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n  </div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["scaffoldDisplayTitle"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<input type=\"text\" autocomplete=\"off\">\r\n<button class=\"scaffold-display-title-lock\">\r\n  <i class=\"fa fa-lock\" title=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.titlelock",{"name":"t","hash":{},"data":data}))
    + "\"></i>\r\n  <i class=\"fa fa-unlink\" title=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.titleunlock",{"name":"t","hash":{},"data":data}))
    + "\"></i>\r\n</button>\r\n<button class=\"scaffold-display-title-clear\">\r\n  <i class=\"fa fa-times-circle\" title=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.delete",{"name":"t","hash":{},"data":data}))
    + "\"></i>\r\n</button>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldEditHtml"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"ql-edit-html-overlay-inner\" contenteditable=true></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldItemsModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"scaffold-items-modal-header\">\r\n      <h4>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"scaffold-items-modal-sidebar\">\r\n  <div class=\"scaffold-items-modal-sidebar-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"scaffold-items-modal-body\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"scaffold-items-modal-footer\">\r\n      <a href=\"#\" class=\"btn primary scaffold-items-modal-ok\" data-action=\"ok\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.ok",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n      <a href=\"#\" class=\"btn primary-hollow scaffold-items-modal-cancel\" data-action=\"cancel\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldModalOverlay"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"scaffold-modal-overlay\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldUsersOption"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <span class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <span class=\"email\">&lt;"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "&gt;</span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"name\">"
    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"option\" data-disabled="
    + container.escapeExpression(((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"disabled","hash":{},"data":data}) : helper)))
    + ">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["sidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidebar-inner\">\r\n	<div class=\"sidebar-breadcrumb\">\r\n	</div>\r\n	<div class=\"sidebar-item-container\">\r\n	</div>\r\n	<div class=\"sidebar-fieldset-container\">\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarBreadcrumb"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.backButtonRoute || (depth0 != null ? depth0.backButtonRoute : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backButtonRoute","hash":{},"data":data}) : helper)))
    + "\" class=\"sidebar-breadcrumb-inner\">\r\n    <i class=\"fa fa-chevron-left\"></i>"
    + alias4(((helper = (helper = helpers.backButtonText || (depth0 != null ? depth0.backButtonText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backButtonText","hash":{},"data":data}) : helper)))
    + "\r\n</a>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarDivide"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["Handlebars"]["templates"]["sidebarFieldsetFilter"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<button class=\"sidebar-fieldset-filter sidebar-fieldset-filter-"
    + alias3((helpers.stringToClassName || (depth0 && depth0.stringToClassName) || alias2).call(alias1,(depth0 != null ? depth0.legend : depth0),{"name":"stringToClassName","hash":{},"data":data}))
    + "\">\r\n	<span class=\"sidebar-fieldset-filter-inner\">\r\n		<i class=\"fa fa-toggle-off\"></i>\r\n		"
    + alias3(((helper = (helper = helpers.legend || (depth0 != null ? depth0.legend : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"legend","hash":{},"data":data}) : helper)))
    + "\r\n	</span>\r\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarFilter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <button class=\"sidebar-filter-item\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"sidebar-filter-item-inner\">\r\n                    "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n                </div>\r\n            </button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-filter-inner\">\r\n    <div class=\"sidebar-filter-toolbar\">\r\n        <div class=\"sidebar-filter-toolbar-inner clearfix\">\r\n            <div class=\"sidebar-filter-toolbar-title\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filterbytags",{"name":"t","hash":{},"data":data}))
    + "\r\n            </div>\r\n            <div class=\"sidebar-filter-toolbar-subtitle\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.pleaseselectcomponent",{"name":"t","hash":{},"data":data}))
    + ":\r\n            </div>\r\n            <div class=\"sidebar-filter-toolbar-close\">\r\n                <button class=\"fa fa-times\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"sidebar-filter-search\">\r\n        <input type=\"text\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.filterbytags",{"name":"t","hash":{},"data":data}))
    + "\" class=\"sidebar-filter-search-input\" />\r\n        <i class=\"fa fa-search\"></i>\r\n    </div>\r\n    <div class=\"sidebar-filter-items\">\r\n        <div class=\"sidebar-filter-items-inner\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["sidebarRowFilter"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"sidebar-row clearfix "
    + alias4(((helper = (helper = helpers.rowClasses || (depth0 != null ? depth0.rowClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rowClasses","hash":{},"data":data}) : helper)))
    + "\">\r\n    <span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\r\n    <button data-title=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" data-id=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.buttonClasses || (depth0 != null ? depth0.buttonClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonClasses","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-times\"></i></button>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarUpdateButton"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"sidebar-update-button\">\r\n    <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + container.escapeExpression(((helper = (helper = helpers.updateText || (depth0 != null ? depth0.updateText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"updateText","hash":{},"data":data}) : helper)))
    + "\r\n</span>";
},"useData":true});

this["Handlebars"]["templates"]["forgotPassword"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"login-logo\"></div>\r\n\r\n<div class=\"login-title\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.resetpassword",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n\r\n<div class=\"forgot-password-success display-none\">\r\n    "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.forgotpasswordsuccess",{"name":"t","hash":{},"data":data}))
    + "\r\n    <button class=\"return btn small secondary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.returnto",{"name":"t","hash":{},"data":data}))
    + " "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.login",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n</div>\r\n\r\n<div class=\"forgot-container\">\r\n  <div class=\"forgot-introduction\">\r\n    "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.forgotpasswordblurb",{"name":"t","hash":{},"data":data}))
    + "\r\n  </div>\r\n  <div class=\"forgot-form\">\r\n    <form class=\"forgot-password-form\">\r\n      <div id=\"loginError\" class=\"forgotError display-none\">\r\n        <i class=\"fa fa-times\"></i> "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.invalidusernameoremail",{"name":"t","hash":{},"data":data}))
    + "<span id=\"loginErrorMessage\"/>\r\n      </div>\r\n      <div class=\"forgot-login\">\r\n          <input type=\"email\" autocomplete=\"off\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data}))
    + "\" class=\"input-username-email\" tabindex=\"1\">\r\n      </div>\r\n      <button type=\"submit\" class=\"submit btn secondary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.continue",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n      <button class=\"cancel btn white-hollow\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </form>\r\n  </div>\r\n    <div class=\"forgot-footer\">\r\n    <strong>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.hasyouremailchanged",{"name":"t","hash":{},"data":data}))
    + "</strong> "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.forgotpasswordfooter",{"name":"t","hash":{},"data":data}))
    + "\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["login"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.alreadyloggedin",{"name":"t","hash":{},"data":data}))
    + "\r\n            <button class=\"dash btn small secondary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.gotodashboard",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, buffer = 
  "            <div class=\"login-fields\">\r\n                <div id=\"loginError\" class=\"display-none\">\r\n                    <i class=\"fa fa-times\"></i><span id=\"loginErrorMessage\"/>\r\n                </div>\r\n                <input type=\"email\" autocomplete=\"off\" class=\"login-input-username\" value=\"\" id=\"login-input-username\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"1\" />\r\n                <input type=\"password\" autocomplete=\"off\" class=\"login-input-password\" value=\"\" id=\"login-input-password\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.password",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"2\" />\r\n                <button type=\"submit\" class=\"btn secondary login-form-submit\" tabindex=\"3\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.login",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n            </div>\r\n            <div class=\"login-remember-me\">\r\n                <input id=\"remember-me\" class=\"remember-me-checkbox\" name=\"remember-me\" type=\"checkbox\"/>\r\n                <label for=\"remember-me\" class=\"remember-me-label\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.rememberme",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n            </div>\r\n";
  stack1 = ((helper = (helper = helpers.ifMailEnabled || (depth0 != null ? depth0.ifMailEnabled : depth0)) != null ? helper : alias2),(options={"name":"ifMailEnabled","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.ifMailEnabled) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"login-forgot-password\">\r\n                <a class=\"\" href=\"#user/forgot\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.forgotpassword",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n            </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"login-inner\">\r\n    <div class=\"login-logo\"></div>\r\n\r\n    <form class=\"login-form\" autocomplete=\"off\">\r\n        <div class=\"login-title\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"app.signin",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAuthenticated : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </form>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["resetPassword"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"inner\">\r\n  <div class=\"login-logo\"></div>\r\n\r\n  <div class=\"login-title\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.resetpassword",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n\r\n  <div class=\"reset-introduction\">\r\n    "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.passwordtip",{"name":"t","hash":{},"data":data}))
    + "\r\n  </div>\r\n\r\n  <div class=\"message\">\r\n    <div class=\"success display-none\">\r\n      <p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.resetpasswordsuccess",{"name":"t","hash":{},"data":data}))
    + "</p>\r\n      <button class=\"return btn small secondary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.returnto",{"name":"t","hash":{},"data":data}))
    + " "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.login",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </div>\r\n  </div>\r\n\r\n  <form class=\"form-reset-password forms\">\r\n    <div class=\"login-fields\">\r\n        <div id=\"loginError\" class=\"resetError display-none\">\r\n          <i class=\"fa fa-times\"></i><span id=\"loginErrorMessage\" class=\"message\"/>\r\n        </div>\r\n        <input type=\"password\" class=\"login-input-password\" id=\"password\" value=\"\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.newpassword",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\">\r\n        <div id=\"passwordStrength\"></div>\r\n        <input type=\"password\" class=\"login-input-password\" id=\"confirmPassword\" value=\"\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.confirmpassword",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\">\r\n        <button type=\"submit\" class=\"btn secondary\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.changepassword",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n        <button class=\"cancel btn white-hollow\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["userProfile"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div class=\"form-group\">\r\n              <label>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"app.role",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n              <dl>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rolesAsName : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </dl>\r\n            </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                  <dt>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</dt>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"change-password-section\">\r\n              <div class=\"form-group\">\r\n                <div class=\"inner display-none\">\r\n                  <label for=\"password\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.newpassword",{"name":"t","hash":{},"data":data}))
    + "\r\n                    <span class=\"req\">*</span>\r\n                    <span id=\"passwordError\" class=\"error feedback\"></span>\r\n                  </label>\r\n                  <input type=\"password\" class=\"width-15\" id=\"password\" value=\"\" autocomplete=\"off\">\r\n                  <input type=\"text\" class=\"width-15 display-none\" id=\"passwordText\" value=\"\" autocomplete=\"off\">\r\n                  <button href=\"#\" class=\"toggle-password display-none\"><i class=\"fa fa-eye\"></i></button>\r\n                </div>\r\n                <a href=\"#\" class=\"btn primary change-password\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.changepassword",{"name":"t","hash":{},"data":data}))
    + "</a>\r\n              </div>\r\n            </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"profile-inner\">\r\n  <div class=\"error-text display-none\">\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.fixerrors",{"name":"t","hash":{},"data":data}))
    + "\r\n  </div>\r\n  <div class=\"editing-overlay-panel form-container-style\">\r\n\r\n    <div class=\"editing-overlay-panel-content inner\">\r\n      <div class=\"intro-text\">\r\n        "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.editprofileinformation",{"name":"t","hash":{},"data":data}))
    + "\r\n      </div>\r\n      <div class=\"editing-overlay-panel-content-inner\">\r\n\r\n        <form class=\"forms\">\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rolesAsName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.email",{"name":"t","hash":{},"data":data}))
    + "\r\n              <span class=\"req\">*</span>\r\n              <span id=\"emailError\" class=\"error\"></span>\r\n            </label>\r\n            <input type=\"email\" class=\"width-30\" id=\"email\" value=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"off\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.firstname",{"name":"t","hash":{},"data":data}))
    + "\r\n              <span class=\"req\">*</span>\r\n              <span id=\"firstNameError\" class=\"error\"></span>\r\n            </label>\r\n            <input type=\"text\" class=\"width-30\" id=\"firstName\" value=\""
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"off\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.lastname",{"name":"t","hash":{},"data":data}))
    + "\r\n              <span class=\"req\">*</span>\r\n              <span id=\"lastNameError\" class=\"error\"></span>\r\n            </label>\r\n            <input type=\"text\" class=\"width-30\" id=\"lastName\" value=\""
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"off\">\r\n          </div>\r\n\r\n"
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || alias2).call(alias1,(depth0 != null ? depth0.auth : depth0),"local",{"name":"ifValueEquals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["userProfileSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"sidebar-item-inner\">\r\n        <div class=\"separator\"></div>\r\n        <button class=\"user-profile-edit-sidebar-save action-primary\">\r\n            <span class=\"user-profile-edit-sidebar-save-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n        </button>\r\n        <button class=\"user-profile-edit-sidebar-cancel action-secondary\">\r\n            <span class=\"user-profile-edit-sidebar-cancel-inner\">\r\n                "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "\r\n            </span>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["addUser"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "            <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0)) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.displayName : stack1), depth0))
    + "</option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "            <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0)) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"inner\">\r\n  <div class=\"title\">\r\n    "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.adduserformtitle",{"name":"t","hash":{},"data":data}))
    + "\r\n  </div>\r\n  <form class=\"addUser forms\" action=\"api/user\" method=\"post\" autocomplete=\"off\">\r\n      <div class=\"form-group\">\r\n        <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.firstname",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span></label>\r\n        <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.validationrequired",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <input type=\"text\" name=\"firstName\" autocomplete=\"off\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.lastname",{"name":"t","hash":{},"data":data}))
    + "<span class=\"req\">*</span></label>\r\n        <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.validationrequired",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <input type=\"text\" name=\"lastName\" autocomplete=\"off\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span></label>\r\n        <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.invalidusernameoremail",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n        <input type=\"email\" name=\"email\" autocomplete=\"off\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.password",{"name":"t","hash":{},"data":data}))
    + " <span class=\"req\">*</span></label>\r\n          <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.validationrequired",{"name":"t","hash":{},"data":data}))
    + "</div>\r\n          <input type=\"password\" name=\"password\" autocomplete=\"off\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tenant",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <select name=\"_tenantId\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.globalData : depth0)) != null ? stack1.allTenants : stack1)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.role",{"name":"t","hash":{},"data":data}))
    + "</label>\r\n        <select name=\"role\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.globalData : depth0)) != null ? stack1.allRoles : stack1)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n      </div>\r\n  </form>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["addUserSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"separator\"></div>\r\n<div class=\"sidebar-item-inner\">\r\n  <button type=\"submit\" class=\"action-primary save\">\r\n    <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n  <button type=\"button\" class=\"cancel action-secondary\">\r\n    <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data}))
    + "</span>\r\n  </button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["user"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isDeleted : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "\r\n          <a class=\"edit read edit-mode\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n          <div class=\"input-container write\">\r\n            <input class=\"input\" type=\"email\" data-modelKey=\"email\" autocomplete=\"off\">\r\n            <a class=\"save\"><i class=\"fa fa-check-square-o\"></i></a>\r\n            <a class=\"cancel\"><i class=\"fa fa-times\"></i></a>\r\n          </div>\r\n        ";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isDeleted : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n            <a class=\"edit read edit-mode\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n            <div class=\"write\">\r\n              <select class=\"input\" data-modelKey=\"_tenantId\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.globalData : depth0)) != null ? stack1.allTenants : stack1)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </select>\r\n              <a class=\"save\"><i class=\"fa fa-check-square-o\"></i></a>\r\n              <a class=\"cancel\"><i class=\"fa fa-times\"></i></a>\r\n            </div>\r\n        ";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda;

  return "                  <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0)) != null ? stack1 : "")
    + "\""
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? depths[1]._tenantId : depths[1])) != null ? stack1._id : stack1),((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1),{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.displayName : stack1), depth0))
    + "</option>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " selected";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"no-wrap\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isDeleted : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n            <a class=\"edit read edit-mode\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n            <div class=\"write\">\r\n              <select class=\"input\" data-modelKey=\"roles\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.globalData : depth0)) != null ? stack1.allRoles : stack1)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </select>\r\n              <a class=\"saveRoles\"><i class=\"fa fa-check-square-o\"></i></a>\r\n              <a class=\"cancel\"><i class=\"fa fa-times\"></i></a>\r\n            </div>\r\n        ";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda;

  return "                  <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0)) != null ? stack1 : "")
    + "\""
    + ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depths[1] != null ? depths[1].roles : depths[1])) != null ? stack1["0"] : stack1)) != null ? stack1._id : stack1),((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1),{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "</option>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "          <i class=\"fa fa-lock\"></i>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"group\">\r\n              "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.changeadminaccounts",{"name":"t","hash":{},"data":data}))
    + "\r\n            </div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), buffer = 
  "            <div class=\"group\">\r\n";
  stack1 = ((helper = (helper = helpers.ifMailEnabled || (depth0 != null ? depth0.ifMailEnabled : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"ifMailEnabled","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.ifMailEnabled) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.program(28, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <button class=\"btn primary invite\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.inviteuser",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n                <button class=\"btn primary resetPassword\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.resetpassword",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "                <button class=\"btn tertiary changePassword\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.changepassword",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"group\">\r\n                <button class=\"btn secondary unlock\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.unlockuser",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n              </div>\r\n";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.ifValueEquals || (depth0 && depth0.ifValueEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.failedLoginCount : depth0),0,{"name":"ifValueEquals","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(29, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"group\">\r\n                  <button class=\"btn secondary unlock\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.resetlogins",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n                </div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"group\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isDeleted : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "")
    + "              <hr>\r\n              <button class=\"btn alert edit-input delete\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.deleteuser",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n              <select name=\"delete-options\">\r\n                <option value=\"transfer\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.deleteusertransfer",{"name":"t","hash":{},"data":data}))
    + "</option>\r\n                <option value=\"delete\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.deleteuserdelete",{"name":"t","hash":{},"data":data}))
    + "</option>\r\n                <option value=\"share\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.deleteusershare",{"name":"t","hash":{},"data":data}))
    + "</option>\r\n              </select>\r\n            </div>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    return "                <button class=\"btn action-primary restore\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.restoreuser",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "                <button class=\"btn warning disable\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.disableuser",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"inner\">\r\n  <div class=\"col-row\">\r\n    <div class=\"col-25\">\r\n      <div class=\"tb-col-inner\">\r\n        <span class=\"read no-wrap\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\r\n        "
    + ((stack1 = (helpers.ifUserNotMe || (depth0 && depth0.ifUserNotMe) || alias2).call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"col-15\">\r\n      <div class=\"tb-col-inner\">\r\n        <span class=\"read no-wrap\">"
    + alias4(((helper = (helper = helpers.tenantName || (depth0 != null ? depth0.tenantName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tenantName","hash":{},"data":data}) : helper)))
    + "</span>\r\n        "
    + ((stack1 = (helpers.ifUserNotMe || (depth0 && depth0.ifUserNotMe) || alias2).call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"col-15\">\r\n      <div class=\"tb-col-inner\">\r\n        <div class=\"read\">\r\n          <ul>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.roleNames : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\r\n        </div>\r\n        "
    + ((stack1 = (helpers.ifUserNotMe || (depth0 && depth0.ifUserNotMe) || alias2).call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"col-15 col-centered\">\r\n      <div class=\"tb-col-inner\">\r\n        "
    + alias4(((helper = (helper = helpers.failedLoginCount || (depth0 != null ? depth0.failedLoginCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"failedLoginCount","hash":{},"data":data}) : helper)))
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n    <div class=\"col-15 col-centered\">\r\n      <div class=\"tb-col-inner no-wrap\">"
    + alias4((helpers.momentFormat || (depth0 && depth0.momentFormat) || alias2).call(alias1,(depth0 != null ? depth0.lastAccess : depth0),"DD MMM-YY",{"name":"momentFormat","hash":{},"data":data}))
    + "</div>\r\n    </div>\r\n    <div class=\"col-15\">\r\n      <div class=\"tb-col-inner\">\r\n        <div class=\"buttons edit-mode\">\r\n"
    + ((stack1 = (helpers.ifUserIsMe || (depth0 && depth0.ifUserIsMe) || alias2).call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"ifUserIsMe","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isDeleted : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifUserNotMe || (depth0 && depth0.ifUserNotMe) || alias2).call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["userManagement"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"container\">\r\n    <div class=\"inner\">\r\n        <div class=\"tb-heading col-row tb-row\">\r\n            <div class=\"col-25\">\r\n              <button data-sort=\"email\" class=\"active sort sort-down\">\r\n                <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n                <i class=\"fa\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-15\">\r\n              <button data-sort=\"tenantName\" class=\"sort sort-down\">\r\n                <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tenant",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n                <i class=\"fa\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-15\">\r\n              <button data-sort=\"roleNames\" class=\"sort sort-down\">\r\n                <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.role",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n                <i class=\"fa\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-15 col-centered\">\r\n              <button data-sort=\"failedLoginCount\" class=\"sort sort-down\">\r\n                <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.failedlogins",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n                <i class=\"fa\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-15 col-centered\">\r\n              <button data-sort=\"lastAccess\" class=\"sort sort-down\">\r\n                <h4 class=\"tb-col-inner\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.lastaccess",{"name":"t","hash":{},"data":data}))
    + "</h4>\r\n                <i class=\"fa\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-15\">\r\n            </div>\r\n        </div>\r\n        <ul class=\"users clearfix grid-layout\">\r\n        </ul>\r\n\r\n        <div class=\"action-buttons\">\r\n            <button class=\"btn tertiary-hollow refresh-all\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.refresh",{"name":"t","hash":{},"data":data}))
    + "</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["userManagementFilter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"sidebar-row\">\r\n    <label class=\"sidebar-tag\">\r\n      <span>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\r\n      <input type=\"checkbox\" name=\"roleNames\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n      <i class=\"fa fa-toggle-off\"></i>\r\n    </label>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"filter-inner\">\r\n  <div class=\"sidebar-row-input\">\r\n    <input placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.searchByMail",{"name":"t","hash":{},"data":data}))
    + "\" type=\"text\" class=\"search-email\">\r\n  </div>\r\n\r\n  <div class=\"sidebar-row sidebar-divide\">\r\n    <h3 class=\"sidebar-divide-inner\">\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.tenant",{"name":"t","hash":{},"data":data}))
    + "\r\n    </h3>\r\n  </div>\r\n  <div class=\"sidebar-row-input\">\r\n    <select name=\"tenantName\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tenants : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n  </div>\r\n  <div class=\"sidebar-row sidebar-divide\">\r\n    <h3 class=\"sidebar-divide-inner\">\r\n      "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.role",{"name":"t","hash":{},"data":data}))
    + "\r\n    </h3>\r\n  </div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.roles : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["userManagementSidebar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"separator\"></div>\r\n<div class=\"sidebar-item-inner\">\r\n  <button class=\"action-primary add\">\r\n    "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.addnewuser",{"name":"t","hash":{},"data":data}))
    + "\r\n  </button>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"sidebar-row sidebar-divide\">\r\n      <h3 class=\"sidebar-divide-inner\">\r\n          <i class=\"fa fa-filter\"></i>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"app.assetfilters",{"name":"t","hash":{},"data":data}))
    + "\r\n      </h3>\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

return this["Handlebars"];

});