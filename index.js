/*globals module, require, atom*/

var $ = require('atom').$;

module.exports = {
    setFileClasses: function () {
        'use strict';

        atom.workspaceView.on('editor:grammar-changed', function () {
            var editor = atom.workspace.getActiveEditor(),
                language = editor.getGrammar().name,
                className = language.toLowerCase();

            $('.editor:visible').addClass(className);
        });
    }
};
