'use strict';
var cutil = require('./util');

/**
 * @constructor
 * @param {jQuery} $object A jQuery object with a length of exactly 1.
 * @param {string} name The modifier's base name. (ex.: block or element's name.)
 * @param {string} [prefix] A prefix. Default is: cutil.notation.modifier.prefix.
 * @throws If the jQuery object contains no or more than one elements.
 */
function Modifier($object, name, prefix) {
    if (typeof prefix !== 'string') {
        prefix = cutil.notation.modifier.prefix;
    }

    // Attributes
    this.modifier = {
        $object: $object,
        prefix: prefix,
        name: name,
        prefixedName: cutil.notation.modifier.prefix + name
    };

    try {
        cutil.validateJQueryObject($object, 1);
    } catch (e) {
        throw '[modifier: "' + name + '"]' + e;
    }
}

/**
 * Switches on a modifier.
 * @param  {string} name The modifier's name.
 * @return {Modifier} Returns the Modifier's reference.
 */
Modifier.prototype.on = function(name) {
    return this.set(name, true);
};

/**
 * Switches off a modifier.
 * @param {string} name The modifier's name.
 * @return {Modifier} Returns the Modifier's reference.
 */
Modifier.prototype.off = function(name) {
    return this.set(name, false);
};

/**
 * Toggles a modifier.
 * @param {string} name The modifier's name.
 * @return {Modifier} Returns the Modifier's reference.
 */
Modifier.prototype.toggle = function(name) {
    if (this.get(name)) {
        return this.set(name, false);
    }

    return this.set(name, true);
};

/**
 * Get's the value of a modifier.
 * @param {string} name The modifier's name.
 * @return {string} Returns the value.
 */
Modifier.prototype.get = function(name) {
    var modPrefix = this.typeID;
    var modifierClass = cutil.getModifierClass(this.modifier.prefixedName, name);

    var classes = cutil.getClassesByPrefix(modifierClass, this.modifier.$object);
    // Modifier not found
    if (classes.length === 0) {
        return false;
    }

    var value = classes[0].split(cutil.notation.modifier.valueSeparator);

    // Modifier found, but doesn't have a specific value
    if (typeof value[1] == 'undefined') {
        return true;
    }

    // Modifier found with a value
    return value[1];
};

/**
 * Set's a modifier to a given value.
 * @param {string} name The modifier's name.
 * @param {string} value The modifier's value.
 * @return {Modifier} Returns the Modifier's reference.
 */
Modifier.prototype.set = function(name, value) {
    if (
        typeof value != 'string' &&
        typeof value != 'boolean'
    ) {
        throw 'A BEM modifier value can only either be "string", or "boolean". The given value was of type "' + (typeof value) + '".';
    }

    var modifierClass = cutil.getModifierClass(this.modifier.prefixedName, name);
    cutil.removeClassesByPrefix(modifierClass, this.modifier.$object);
    if (value !== false) {
        modifierClass = cutil.getModifierClass(this.modifier.prefixedName, name, value);
        this.modifier.$object.addClass(modifierClass);
    }

    return this;
};

module.exports = Modifier;
