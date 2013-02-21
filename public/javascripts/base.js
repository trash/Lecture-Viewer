//GLOBAL VARS
var pastTime = 0;

//time in seconds of how much info we want to keep on the screen (notes etc)
var timeWindow = 300;

var notes = {
    1: "This note corresponds to second 1.",
    3: "I'm all about second 3.",
    4: "What's good, second 4?",
    5: "Second 5 is the best!",
    20: "This application sure is great!"
};

var imgur = [
    "http://i.imgur.com/1vtt9kD.gif",
    "http://i.imgur.com/rTzKP.gif",
    "http://i.imgur.com/H0xRO.gif",
    "http://i.imgur.com/nWRgi.gif",
    "http://i.imgur.com/t59fs.gif",
    "http://i.imgur.com/7Qgpf.gif",
    "http://i.imgur.com/ns8f5.gif",
    "http://i.imgur.com/TvOeA.gif",
    "http://i.imgur.com/2nK30.gif",
    "http://i.imgur.com/gKKbO.gif",
    "http://i.imgur.com/Rhbx3.gif",
    "http://i.imgur.com/Q2ehm.gif",
    "http://i.imgur.com/l3f08.gif",
    "http://i.imgur.com/poUrb.gif",
    "http://i.imgur.com/VNHsi.gif",
    "http://i.imgur.com/nWA8K.gif",
    "http://i.imgur.com/XU8R8.gif",
    "http://i.imgur.com/pbhgB.gif",
    "http://i.imgur.com/LnpVg.gif",
    "http://i.imgur.com/U6hJx.gif",
    "http://i.imgur.com/7dB1u.gif",
    "http://i.imgur.com/rKADe.gif",
    "http://i.imgur.com/nWWd9.gif",
    "http://i.imgur.com/iyhsU.gif",
    "http://i.imgur.com/jHcNl.gif",
    "http://i.imgur.com/tbHyd.gif",
    "http://i.imgur.com/uXQtM.gif"
]

//lists of the content being displayed, this is used to grab the images from either a local dir or remotely
//time: filename
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
    var wboard = {};
    for(var i = 0; i < imgur.length; i++){
        wboard[i*190] = imgur[i];
    }

    $("a[rel=popover]").popover();
    $("a[rel=tooltip]").tooltip();

    var image_toggle_old = '<i class="icon-chevron-up"></i> Hide <i class="icon-chevron-up"></i>';
    var image_toggle_new = '<i class="icon-chevron-down"></i> Show <i class="icon-chevron-down"></i>';
    $("#hide-images").toggle(function() {
            $("#images").toggle("fast");
            $("#hide-images").html(image_toggle_new);
        }, 
            function() {
                $("#images").toggle("fast");
                $("#hide-images").html(image_toggle_old);
        });
    
    //press enter on text input -> save note
    $("#text").keypress(function(event) {
         if ( event.which == 13 ) {
            if (!event.shiftKey){
                event.preventDefault();
                var current = Math.floor($pop.currentTime());
                if (notes[current] === undefined) {
                    var text = $("#text").val();
                    $("#text").val('');
                    notes[current] = text;
                    updateOutput();
                }
                else
                    $("#alert-overwrite").show();
            }
        }
    });

    //overwrite a note in the warning alert
    $("#btn-overwrite-note").click(function() {
        var current = Math.floor($pop.currentTime());
        var text = $("#text").val();
        $("#text").val('');
        notes[current] = text;
        updateOutput();
        $("#alert-overwrite").hide();
    });

    //cancel overwrite note
    $(".close-overwrite").click(function() {
        $("#alert-overwrite").hide();
        $("#text").focus();
    });

    //Settings resolution change buttons
    $("#lowRes").click(function(){
        $("video").attr("width",320);
        $("video").attr("height",240);
    });
    $("#midRes").click(function(){
        $("video").attr("width",640);
        $("video").attr("height",480);
    });
    $("#720Res").click(function(){
        $("#video").attr("width",720);
        $("#video").attr("height",540);
    });
    $("#highRes").click(function(){
        $("video").attr("width",800);
        $("video").attr("height",600);
    });

    $("#slowRes").click(function(){
        $("#slide").attr("width",320);
        $("#slide").attr("height",240);
    });
    $("#smidRes").click(function(){
        $("#slide").attr("width",640);
        $("#slide").attr("height",480);
    });
    $("#shighRes").click(function(){
        $("#slide").attr("width",800);
        $("#slide").attr("height",600);
    });

    //popcorn instance
    var $pop = Popcorn("#video");
    $("#video").draggable({ grid: [ 80, 80 ] });
    $("#slide").draggable({ grid: [ 40, 40 ] });
    $("#wboard").draggable({ grid: [ 40, 40 ] });

    var lastswitch = 0;
    $('#slide').click(function(event) {
        console.log('clicked big slide');
        $('#video').animate({
            top: $('.item1:eq(1)').css('top'),
            left: $('.item1:eq(1)').css('left')
        }, 500);

        $('#slide').animate({
            top: $('.item1:eq(0)').css('top'),
            left: $('.item1:eq(0)').css('left')
        }, 500);
        lastswitch = 1;
    });


    $('#wboard').click(function(event) {
        console.log('clicked big board');
        $('#video').animate({
            top: $('.item2:eq(1)').css('top'),
            left: $('.item2:eq(1)').css('left')
        }, 500);

        $('#wboard').animate({
            top: $('.item2:eq(0)').css('top'),
            left: $('.item2:eq(0)').css('left')
        }, 500);
        lastswitch = 2;
    });

    $('#video').click(function(event) {
        $('#video').animate({
            top: $('.item'+lastswitch+':eq(1)').css('top'),
            left: $('.item'+lastswitch+':eq(1)').css('left')
        }, 500);

        var boardorslide = '';
        if(lastswitch==1)
            boardorslide='slide';
        else
            boardorslide='wboard';
        $('#'+boardorslide).animate({
            top: $('.item'+lastswitch+':eq(0)').css('top'),
            left: $('.item'+lastswitch+':eq(0)').css('left')
        }, 500);
    });

    if(slides[0]){
        var slide = 'http://prussian.cs.umass.edu/media/S11/CompSci453/20110302103319/scr/' + slides[0];
        $( "#slide" ).attr('src', slide);
    }
    if(wboard[0]){
        //var wb = '/images/wbl/' + wboard[0]; //local
        var wb = wboard[0];//'http://prussian.cs.umass.edu/media/S11/CompSci453/20110302103319/wbl/' + wboard[0]; //remote
        $( "#wboard" ).attr('src', wb);
    }
    for (var key in wboard){ //generate the sidebar of wboard slides
        $("#images").append('<img class="wboard thumbnail" id="wboard' + key + '" src="'+ wboard[key] + '" height="250" width="150"/>')
        //'http://prussian.cs.umass.edu/media/S11/CompSci453/20110302103319/wbl/preview/' + wboard[key] +'
    };
    
    //When a wboard image is selected, we update the rest of the content so that it is synced
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
            var slide = 'http://prussian.cs.umass.edu/media/S11/CompSci453/20110302103319/scr/' + slides[temp];
            $( "#slide" ).attr('src', slide);
        };

    });

    var formatTime = function(time) {
        var hours = Math.floor(time / 3600);
        var mins = Math.floor(time / 60);
        var secs = time % 60;
        var output = '';
        if (hours>0){
            mins = mins - hours*60;
            output = output.concat(hours+'h');
        }
        if (mins>0)
            output = output.concat(mins+'m');
        if (secs>0)
            output = output.concat(secs+'s');

        return output;
    }

    var updateOutput = function() {
        $("#output").html('');
        var current = Math.floor($pop.currentTime());
        console.log(current);
        //displays notes from the timeWindow before the current time
        var start = current-timeWindow;
        if (start < 0)
            start = 0;
        for (var i = start; i <= current; i++){
            if (notes[i]){
                console.log("note found");
                var output = formatTime(i);
                $( "#output" ).append('<p><code>'+output+':</code> ' + notes[i] + '</p>');
            }
        }
    };

    //trigger a custom event on time interval updates
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

    //if the person seeks we update relevant info
    $pop.on( "seeked", function() {
        console.log("seeked");
        updateOutput();
    });

    // listen for custom event and update content
    $pop.on( "secondInterval", function( data ) {
        //$( "#output" ).html(output);
        updateOutput();
        if (slides[data.count]){
            var slide = 'http://prussian.cs.umass.edu/media/S11/CompSci453/20110302103319/scr/' + slides[data.count];
            $( "#slide" ).attr('src', slide);
        }
        if (wboard[data.count]){
            var wb = 'http://prussian.cs.umass.edu/media/S11/CompSci453/20110302103319/wbl/' + wboard[data.count];
            $( "#wboard" ).attr('src', wb);
        }       
    });

    //play
    $pop.play();


});