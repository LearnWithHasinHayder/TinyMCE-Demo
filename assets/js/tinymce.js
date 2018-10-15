;(function () {
    tinyMCE.PluginManager.add('tmcd_plugin', function (editor, url) {
        // alert(url);
        editor.addButton('tmcd_button_one', {
            // text:'B1',
            // icon:'drop',
            image: url + "/../images/cart.png",
            onclick: function () {
                editor.insertContent("[gmap]content[/gmap]");
            }
        });
        editor.addButton('tmcd_button_two', {
             text:'B1',
            // icon:'drop',
            // image: url + "/../images/cart.png",
            onclick: function () {
                editor.insertContent("Hello World");
            }
        });
    });
})();