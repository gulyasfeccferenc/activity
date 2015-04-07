'use strict';
/**
 * The module container.
 * @module container
 */
var $ = require('jquery');

module.exports = {
    modules: {},

    /**
     * Adding a clam module to the container.
     * @param {ClamModule} clam_module A clam module. 
     * @throws If a module is already registered in the container with the given
     * name.
     */
    add: function(clam_module) {
        var moduleName;
        if ($.isArray(clam_module)) {
            moduleName = clam_module[0].module.name;
        } else {
            moduleName = clam_module.module.name;
        }

        if (typeof this.modules[moduleName] !== 'undefined') {
            if ($.isArray(this.modules[moduleName]) && $.isArray(clam_module)) {
                $.merge(this.modules[moduleName], clam_module);
            } else {
                throw 'The "' + moduleName + '" key is already set in the container. Adding the module to the container failed.';
            }
        } else {
            this.modules[moduleName] = clam_module;
        }
    },

    /**
     * Gets a module by it's name.
     * @param {string} moduleName The module's name.
     * @throws If no module is registered in the container with the given name.
     * @return {ClamModule}
     */
    get: function(moduleName) {
        if (typeof this.modules[moduleName] === 'undefined') {
            throw 'Nothing is set under the "' + moduleName + '" key in the container.';
        }

        return this.modules[moduleName];
    },

    /**
     * Exposes the container to the global scope.
     */
    expose: function() {
        window.container = this;
        console.warn('The clam container is now exposed as "container".');
    }
    // ,

    // removeModule: function(module) {
    //     console.log(this.modules[module.module.name]);
    //     var modulesLength = this.modules[module.module.name].length;
    //     for (var i = modulesLength - 1; i >= 0; i--) {
    //         if (this.modules[module.module.name][i] === module) {
    //             console.log(this.modules[module.module.name][i]);
    //             delete this.modules[module.module.name][i];
    //             return;
    //         }
    //     }
    // },

    // clean: function(moduleName) {
    //     if (typeof this.modules[moduleName] === 'undefined') {
    //         return true;
    //     }


    //     if ($.isArray(this.modules[moduleName])) {
    //         var modulesLength = this.modules[moduleName].length;
    //         for (var i = modulesLength - 1; i >= 0; i--) {
    //             if (!$.contains(window.document, this.modules[moduleName][i].module.$object[0])) {
    //                 delete this.modules[moduleName][i];
    //             }
    //         }
    //     } else {
    //         if (!$.contains(window.document, this.modules[moduleName].module.$object[0])) {
    //             delete this.modules[moduleName];
    //         }
    //     }
    // }
};
