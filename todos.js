//start...

function getDom(id){
    return document.getElementById(id);
}
var todoStringField = getDom('todoString');
todoStringField.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        var currentValue = todoStringField.value;
        todoStringField.value = '';

        var todoList = getDom('todoList');
        todoList.innerHTML += '<li>\
        <button class=\"delete\">×</button>\
        <input type=\"checkbox\" class=\"toggle-checked\">\
        <span class=\"text\">'+currentValue+'</span>\
        </li>';
    }
});



//var todoForm = getDom('todoForm');
//
//todoForm.addEventListener('submit', function(ev){
//    ev.preventDefault();
//    console.log(todoStringField, todoStringField.value);
//});







