System.register(["./module.js"], function (exports_1, context_1) {
    "use strict";
    var sname, hhh, module_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (module_js_1_1) {
                module_js_1 = module_js_1_1;
            }
        ],
        execute: function () {
            console.log("hahha");
            sname = "jone";
            hhh = "asas";
            module_js_1.default.test(23);
        }
    };
});
