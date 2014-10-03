$(function() {
    var fileTemplate = "<p class=\"dragTarget\" draggable=\"true\">{{filename}}</p>";
    // var fileTemplate = "<div id=\"{{id}}\">";
    // fileTemplate += "<div class=\"progressbar\"></div>";
    // fileTemplate += "<div class=\"preview\"></div>";
    // fileTemplate += "<div class=\"filename\">{{filename}}</div>";
    // fileTemplate += "</div>";
    function slugify(text) {
        text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
        text = text.replace(/-/gi, "_");
        text = text.replace(/\s/gi, "-");
        return text;
    }
    $("#dropbox").html5Uploader({onClientLoadStart: function(e, file) {
            var upload = $("#upload");
            if (upload.is(":hidden")) {
                upload.show();
            }
            upload.append(fileTemplate.replace(/{{id}}/g, slugify(file.name)).replace(/{{filename}}/g, file.name));
        },onClientLoad: function(e, file) {
            // $("#" + slugify(file.name)).find(".preview").append("<img src=\"" + e.target.result + "\" alt=\"\">");
        },onServerLoadStart: function(e, file) {
            // $("#" + slugify(file.name)).find(".progressbar").progressbar({value: 0});
        },onServerProgress: function(e, file) {
            if (e.lengthComputable) {
                var percentComplete = (e.loaded / e.total) * 100;
                // $("#" + slugify(file.name)).find(".progressbar").progressbar({value: percentComplete});
            }
        },onServerLoad: function(e, file) {
            //$("#" + slugify(file.name)).find(".progressbar").progressbar({value: 100});
        }});
});
