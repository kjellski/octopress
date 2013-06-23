// handlebars loading the html template and rendering in the content
var source   = $('#atopcontent-template').html();
var template = Handlebars.compile(source);
var renderTemplate = function (data) {
  return template(data);
}

var atops = [];
// check wether anyone is opened
var isAnyAtopOpen = function () {
    var anyOpenedAtop = false;
    for (var i = atops.length - 1; i >= 0; i--) {
        if (atops[i].stayOpen) {
            anyOpenedAtop = true;
        }
    };  
    return anyOpenedAtop;
}

// global to keep the complete control opened
var globalStayOpen = false;

// function that binds the toggle on the element that is used 
// to show and hide the atops area
// @selector binds the element that shows on hover and keeps open on click
// @data is the data to be shown in the format of this object:
//  {
//      name: 'twitter'
//      , items: [
//          { 
//              logo: image_url, // will be 28x28 px sized for each section to be shown
//              title: 'testtitle1', // will be cut after 15 characters or so
//              description: description // will be cut after 120 characters or so...
//          }
//     ]
// }
// this is checked for existence to ease the formatting 
var bindElementToAtopOpening = function (selector, data) {
    var contentContainer = $('#atop-content');
    contentContainer.hide();

    var elements = $(selector);
    if (elements.length > 1)
        throw new Error('binding to multiple elements is currently not supported.');

    createBindingWithToggleState(selector, data);
};

var createBindingWithToggleState = function (s, d) {
    // this is the one we'll keep arround to access its state etc
    var atop = {};
    // selector for the element that gets the click and hover fns
    atop.selector = s;
    // data to be displayed
    atop.data = d;
    atop.name = d.name;
    // parent element #atop-content, just to cache it
    atop.parent = $('#atop-content');
    // sections Id of the content, just to cache it 
    atop.sectionId = '#' + atop.name + '-atop-id';
    // the rendered template for the section
    atop.html = renderTemplate(d);
    // communication variable for tracking the opened state
    atop.stayOpen = false;

    atop.hoverFn = function() {
        console.log('hover: ', atop.selector);
        console.log('globalStayOpen: ', globalStayOpen);
        console.log('atop.stayOpen:  ', atop.stayOpen);

        if (!atop.stayOpen) {
            $(atop.sectionId).slideToggle();
        }

        // open up the whole thing, nothing is yet opened
        if (!globalStayOpen) {
            $('#atop-content').slideToggle();
        }
    };

    atop.clickFn = function() {
        console.log('click: ', atop.selector);
        // toggle the state for this section
        atop.stayOpen = !atop.stayOpen;
        
        // set the general seciont to open only if 
        // any of the sections is open as well.
        if (isAnyAtopOpen()) {
            globalStayOpen = true;
        } else {
            globalStayOpen = false;        
        }
    };

    // this variable is used to communicate the status of the
    // section throughout the hover and the click function
    $(atop.selector).click(atop.clickFn);
    $(atop.selector).hover(atop.hoverFn);

    // hide the elements the content is getting displayed in
    $('#atop-content').hide();
    // render the actual content in here
    $('#atop-content').append(atop.html);

    $(atop.sectionId).hide();
    atops.push(atop);
}

var lipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var github_data = {
    name: 'github'
    , items: [
        { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'GHLOGO', title: 'testtitle1', description: lipsum }
    ]
}

var twitter_data = {
    name: 'twitter'
    , items: [
        { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
        , { logo: 'TWITLOGO', title: 'testtitle1', description: lipsum }
    ]
}

var coderwall_data = {
    name: 'codewall'
    , items: [
        { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
        , { logo: 'CODERWALL', title: 'testtitle1', description: lipsum }
    ]
}

bindElementToAtopOpening('#github-social', github_data);
bindElementToAtopOpening('#twitter-social', twitter_data);
bindElementToAtopOpening('#coderwall-social', coderwall_data);

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