function toggleclass(el, classname){
    if(el.classList) {
        el.classList.toggle(classname);

    }else{
        var classes = el.classname.split(' ');
        var existingIndex= classes.indexOf(classname);

        if (existingIndex >=0)
            classes.splice(existingIndex,1 );
        else
            classes.push(classname);

        el.classname = classes.join(' ');
    }
}

var menu = document.querySelector("#offcanvas"),
    container = document.querySelector(".container");

menu.addEventListener("click", function(e){
        e.preventDefault();
        toggleclass(menu,"active");
        toggleclass(container, "active");
}
);