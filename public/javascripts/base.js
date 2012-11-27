// create popcorn instance
var pastTime = 0;
var notes = {
    1: "This note corresponds to second 1.",
    3: "I'm all about second 3.",
    4: "What's good, second 4?",
    5: "Second 5 is the best!"
};
var pictures = {
    1: "http://i.imgur.com/ALPTa.gif",
    3: "http://i.imgur.com/yjtrk.gif",
    5: "http://i.imgur.com/puS8V.gif"
};

var slides = {
    00000: 'slide0001.png',
    00004: 'slide0002.png',
    00126: 'slide0003.png',
    00214: 'slide0004.png',
    00226: 'slide0005.png',
    00228: 'slide0006.png',
    00229: 'slide0007.png',
    00306: 'slide0008.png',
    00362: 'slide0009.png',
    00373: 'slide0010.png'
};
var wboard = {
    0: 'rtBoard-000001L.png',
    92: 'rtBoard-000002L.png',
    102: 'rtBoard-000003L.png',
    107: 'rtBoard-000004L.png',
    112: 'rtBoard-000005L.png',
    123: 'rtBoard-000006L.png',
    130: 'rtBoard-000007L.png',
    134: 'rtBoard-000008L.png',
    139: 'rtBoard-000009L.png',
    147: 'rtBoard-000010L.png'
};

$(function(){
    $("a[rel=popover]").popover();
    $("a[rel=tooltip]").tooltip();

    $("#textbutton").click(function(){
        var text = $("#text").val();
        console.log(text);
        $("#output").html('<p>Text Input: ' + text + '</p>');
    });

    $("#lowRes").click(function(){
        $("video").attr("width",320);
        $("video").attr("height",240);
    });
    $("#midRes").click(function(){
        $("video").attr("width",640);
        $("video").attr("height",480);
    });
    $("#highRes").click(function(){
        $("video").attr("width",800);
        $("video").attr("height",600);
    });

    var $pop = Popcorn("#video");
    $("#video").draggable({ grid: [ 80, 80 ] });
    $("#slide").draggable({ grid: [ 40, 40 ] });
    $("#wboard").draggable({ grid: [ 40, 40 ] });

    if(slides[0]){
        var slide = '/images/slides/' + slides[0];
        $( "#slide" ).attr('src', slide);
    }
    if(wboard[0]){
        var wb = '/images/wbl/' + wboard[0];
        $( "#wboard" ).attr('src', wb);
    }
    for (var key in wboard){ //generate the sidebar of wboard slides
        $("#images").append('<div class="scroll-content-item"><img class="wboard thumbnail" id="wboard' + key + '" src="'+ '/images/wbl/thumbs/' + wboard[key] +'" height="102" width="170"/></div>')
    };
    $(".wboard").wrap('<a href="javascript:void(0) class="wboardLink" />');//attach the wboard class to the sidebar slides
    $(".wboard").click(function(event){
        console.log("Clicked a wboard image!");
        console.log(this.src);
        var keyTime = this.id.split('wboard')[1];
        $pop.currentTime(keyTime);
        var temp = 0;
        for (var key in slides){ //we have to update the slide to the most recent before the time jumped to
            if(parseInt(key) > parseInt(keyTime)) //parseInt because the weird key values were making comparisons fail
                break;
            console.log("key: " + key);
            temp = key;
        };
        console.log("temp: " + temp);
        if(temp != 0){
            var slide = '/images/slides/' + slides[temp];
            $( "#slide" ).attr('src', slide);
        };

    });

    $pop.on( "timeupdate", function() {
        //keep track every time a second passes
        if ( Math.abs(this.currentTime() - pastTime) > 1 ) {
            pastTime=this.roundTime();
            // trigger custom trigger
            this.emit( "secondInterval", {
                name: "secondInterval event",
                count: pastTime
            });
        }
    });

    // listen for custom listener
    $pop.on( "secondInterval", function( data ) {
        var output = "Wow, it's already been " + data.count +  " second(s) since the video began!";
        console.log( "A second has passed!" );
        console.log( "name: ", data.name );
        console.log( "currentTime(): ", data.count );
        $( "#test1" ).html(output);
        if (notes[data.count])
            $( "#test2" ).html('<p>Note: ' + notes[data.count] + '</p>');
        else
            $( "#test2" ).html("<p>Note: No note for this timestamp, I guess.</p>");
        if (slides[data.count]){
            var slide = '/images/slides/' + slides[data.count];
            $( "#slide" ).attr('src', slide);
        }
        if (wboard[data.count]){
            var wb = '/images/wbl/' + wboard[data.count];
            $( "#wboard" ).attr('src', wb);
        }       
    });

    //play
    $pop.play();


});