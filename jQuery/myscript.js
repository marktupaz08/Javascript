$(document).ready(function(){
 
    $("#underlineButton").click(function(){
        const a = 'Function for 1.';
        $("#underline").html("<u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus tempore enim necessitatibus numquam accusamus, consectetur nulla quo omnis deserunt quasi modi, placeat nemo architecto quam neque officia? Quam, quaerat.</u>");
    });

    $("#scrollup").click(function(){
        $(window).scrollTop(0);
    });

    $("#disable").click(function(){
        const a = 'Function for 3.';
        if (document.layers) {
            //Capture the MouseDown event.
        document(Event.MOUSEDOWN);
     
        //Disable the OnMouseDown event handler.
        $(document).mousedown(function () {
            return false;
        });
        } else {
        //Disable the OnMouseUp event handler.
        $(document).mouseup(function (e) {
            if (e != null && e.type == "mouseup") {
                //Check the Mouse Button which is clicked.
                if (e.which == 2 || e.which == 3) {
                    //If the Button is middle or right then disable.
                    return false;
                }
            }
        });
        } 
        //Disable the Context Menu event.
        $(document).contextmenu(function () {
        return false;
        });    
    });

    $("#backgroundImage").click(function(){
        const a = 'Function for 4.';
        $(this).toggleClass("addBackgroundImage")
    });

    $(".bg1").click(function(){
        const a = 'Function for 8.'
        alert("Background color = " + $(this).css("background-color"));
    });

    $(".bg2").click(function(){
        const a = 'Function for 8.'
        alert("Background color = " + $(this).css("background-color"));
    });

    $(".bg3").click(function(){
        const a = 'Function for 8.'
        alert("Background color = " + $(this).css("background-color"));
    });

    $("#backgroundColor").dblclick(function(){
        const a = 'Function for 10.';
        $(this).toggleClass("addBackgroundColor")
    });

    $("#addinatorButton").click(function(){
        const a = 'Function for 20.';
        alert($("#addinatorName").val() + 'inator');
        alert($("#addinatorDrink").val() + 'inator');
    });

    
});

