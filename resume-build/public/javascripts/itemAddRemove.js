$(document).on("click", ".remove", function(e) { //user click on remove
    e.preventDefault();
    $(this).parent().fadeOut(300, function() { $(this).remove(); });
});

$(document).on("click", ".add", function(e) { //user click on add
    e.preventDefault();
    var section = $(this).parent().parent().children('div:nth(1)');
    section.children('article:nth(0)').clone().appendTo(section).hide().fadeIn(300);
    if (section.hasClass('skill')) {
      section.children('ul:nth(0)').children('li:nth(0)').clone().
              appendTo(section.children('ul:nth(0)')).hide().fadeIn(300);
   } else if ($(this).hasClass('course')) {
     $('.hidden li:nth-child(1)').clone().appendTo('#course-list').hide().fadeIn(300);
   } else if ($(this).hasClass('activity-award')) {
     $('.hidden li:nth-child(2)').clone().appendTo('#activity-award-list').hide().fadeIn(300);
   }
});
