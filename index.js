/*globals module, require, atom*/

var $ = require('atom').$;

module.exports = {
    setFileClasses: function () {
        'use strict';

        var editor = atom.workspace.getActiveEditor(),
            language,
            className;

        if (!editor) {
            return;
        }

        atom.workspaceView.on('editor:grammar-changed', function () {
            language = editor.getGrammar().name;
            className = language.toLowerCase();

            $('.editor:visible').addClass(className);
        });
    }
};
