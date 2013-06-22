// handlebars loading the html template and rendering in the content
var source   = $('#atopcontent-template').html();
var template = Handlebars.compile(source);

var github_data = {
    items: [
        {
            logo: 'GHLOGO',
            title: 'testtitle1',
            description: 'lorem ipsum dolore no idea how that continues right now...1'
        }
    ]
}

var renderTemplate = function (data) {
  return template(github_data);
}

var html = renderTemplate(github_data);
$('#atop-content').html(html);

// function that binds the toggle on the element that is used 
// to show and hide the atops area
var bindElementToAtopOpening = function (selector) { //, jQueryEvent, jQueryAnimation) {
    var contentContainer = $('#atop-content');
    contentContainer.hide();

    var elements = $(selector);
    for (var i = elements.length - 1; i >= 0; i--) {
        createBindingWithToggleState(elements[i],selector);
    }
};

var createBindingWithToggleState = function (element, selector) {
    var stayOpen;
    $('#atop-content').hide();
    stayOpen = false;

    $(selector).click(function() {
        if (stayOpen) {
            stayOpen = false;
        } else {
            stayOpen = true;
        }
        
        if ($('#atop-content').is(':hidden')) {
            return $('#atop-content').slideUp();
        } else {
            return $('#atop-content').slideDown();
        }
    });

    $(selector).hover(function() {
        if (!stayOpen) {
            return $('#atop-content').slideToggle();
        }
    });
}

bindElementToAtopOpening('.social>a'); //, 'hover', 'slideToggle');


var github_data = {
    items: [
        {
            logo: 'GHLOGO',
            title: 'testtitle1',
            description: 'lorem ipsum dolore no idea how that continues right now...1'
        }
    ]
}

var twitter_data = {
    items: [
        {
            logo: 'TWITLOGO',
            title: 'testtitle1',
            description: 'lorem ipsum dolore no idea how that continues right now...1'
        }
        , {
            logo: 'TWITLOGO',
            title: 'testtitle2',
            description: 'lorem ipsum dolore no idea how that continues right now...2'
        }
        , {
            logo: 'TWITLOGO',
            title: 'testtitle3',
            description: 'lorem ipsum dolore no idea how that continues right now...3'
        }
    ]
}

var coderwall_data = {
    items: [
        {
            logo: 'CODERWALL',
            title: 'testtitle1',
            description: 'lorem ipsum dolore no idea how that continues right now...1'
        }
        , {
            logo: 'CODERWALL',
            title: 'testtitle2',
            description: 'lorem ipsum dolore no idea how that continues right now...2'
        }
        , {
            logo: 'CODERWALL',
            title: 'testtitle3',
            description: 'lorem ipsum dolore no idea how that continues right now...3'
        }
    ]
}

// // all credits go here: http://web.enavu.com/demos/carousel.html
// $(document).ready(function() {
//     //move he last list item before the first item. The purpose of this is if the user clicks to slide left he will be able to see the last item.
//     $('#carousel_ul li:first').before($('#carousel_ul li:last')); 
    
//     //when user clicks the image for sliding right        
//     $('#right_scroll img').click(function(){

//         //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
//         var item_width = $('#carousel_ul li').outerWidth() + 10;
        
//         //calculae the new left indent of the unordered list
//         var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
        
//         //make the sliding effect using jquery's anumate function '
//         $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    

//             //get the first list item and put it after the last list item (that's how the infinite effects is made) '
//             $('#carousel_ul li:last').after($('#carousel_ul li:first')); 
            
//             //and get the left indent to the default -210px
//             $('#carousel_ul').css({'left' : '-210px'});
//         }); 
//     });
    
//     //when user clicks the image for sliding left
//     $('#left_scroll img').click(function(){

//         var item_width = $('#carousel_ul li').outerWidth() + 10;
        
//         /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
//         var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
        
//         $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    

//             /* when sliding to left we are moving the last item before the first list item */            
//             $('#carousel_ul li:first').before($('#carousel_ul li:last')); 

//             /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
//             $('#carousel_ul').css({'left' : '-210px'});
//         });
        
        
//     });
// });