// handlebars loading the html template and rendering in the content
var source   = $('#atopcontent-template').html();
var template = Handlebars.compile(source);

var renderTemplate = function (data) {
  return template(data);
}

// function that binds the toggle on the element that is used 
// to show and hide the atops area
var bindElementToAtopOpening = function (selector, data) { //, jQueryEvent, jQueryAnimation) {
    var contentContainer = $('#atop-content');
    contentContainer.hide();

    var elements = $(selector);
    if (elements.length > 1)
        throw new Error('binding to multiple elements is currently not supported.');

    createBindingWithToggleState(selector, data);
};

var createBindingWithToggleState = function (selector, data) {
    var stayOpen;
    $('#atop-content').hide();
    stayOpen = false;

    //console.log('binding to: ', $(selector));

    $('#atop-content').html(renderTemplate(data));

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

var lipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var github_data = {
    items: [
        { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
    ]
}

var twitter_data = {
    items: [
        { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
    ]
}

var coderwall_data = {
    items: [
        { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
    ]
}

bindElementToAtopOpening('#github-social', github_data);
bindElementToAtopOpening('#twitter-social', twitter_data);
bindElementToAtopOpening('#codewall-social', coderwall_data);

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