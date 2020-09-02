


// function adds a new item to the list
$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
        $('ul').append(`<li>
        <span class="shopping-item">${userTextElement.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    
    });
    
// function permanently deletes existing or new item
$(function() {
    $('.shopping-list').on('click','.shopping-item-delete',function(event) {
        $(this).parent().parent().remove();
    });
  });
});

// function changes the item to completed or not
$(function() {
    $('.shopping-list').on('click','.shopping-item-toggle',function(){
        $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked')
    });
    });

























// $('.check').click(function(){
//     $('h2').toggleClass('js-checked')
// });


// function changeCompletion() {
//     $('.check').on('click', event => {
//       // save reference to this bulb,
//       const target-item = $(event.currentTarget);
//       // and reference to all other bulbs
//       const other = $('.check').not(targetItem);
      
//       // Remove 'bulb-on' class from other bulbs
//       otheritems.removeClass('bulb-on');
//       // toggle the presence of 'bulb-on' on this bulb; 
//       targetItem.toggleClass('js-checked');
//     });  
//   }
  
//   $(changeCompletion);

//  $(".check").click(function(){
//      event.preventDefault();
//     $("h2").toggleClass("js-checked");
//   });

//   $('.check').on('click', 'li', function(e) {
//     $('h2').toggleClass("js-checked"); //you can list several class names 
//     e.preventDefault();
//   });

//   $(function() {
//     $('.add-item-form').submit(event => {
//       // this stops the default form submission behavior
//       event.preventDefault();
//       const userTextElement = $(event.currentTarget).find('#item-search-text');
//       $("ul").append(`<li><div class="item"><h2>  ${userTextElement.val()} </h2>
//       <button class="check" onclick="addClass(this);">Check</button>
//       <button class="remove" onclick="removeDiv(this);">Delete</button>
//   </div></li>`);
//       userTextElement.val("");
//     });  
//   });

 
