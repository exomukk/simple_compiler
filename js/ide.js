let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/python");
}

// function executeCode() {

//     $.ajax({

//         url: "/ide/app/compiler.php",

//         method: "POST",

//         data: {
//             language: $("#languages").val(),
//             code: editor.getSession().getValue()
//         },

//         success: function(response) {
//             $(".output").text(response)
//         }
//     })
// }