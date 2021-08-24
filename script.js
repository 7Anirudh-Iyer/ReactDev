import $ from 'jquery'
let showPs = true

$('document').ready(function(){
    $("input").on({
        hover: function(){
            console.log('however')
        },
        focus: function(){
            $(this).css({
                backgroundColor: "black",
                color: "white"
            })
        },
        blur: function(){
            $(this).css("background-color", "yellow")
            let searchQuery  = $(this).val()
            searchQuery = "google.com/search?q="+searchQuery
            $("iframe").attr({
                "src": "https://www.w3schools.com/jquery/"
            })
        },
    })
    $("p").click(function(){
        $(this).prepend("This is an example of appended text", "Some more appended text", "Yeah body")
    })
    $("body").keypress(function(){
        $("p").remove(".intro")
    })
})