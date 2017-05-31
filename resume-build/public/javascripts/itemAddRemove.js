$(document).on("click", ".remove", function(e) { //user click on remove
    e.preventDefault();
    $(this).parent().fadeOut(300, function() { $(this).remove(); });
});

$(document).on("click", ".add-main", function(e) { //user click on add
    e.preventDefault();
    alert('hell');
    var section = $(this).parent().childNodes[0];
    if (section.hasClass('education')) {
      alert('hello');
    } else if (section.hasClass('experience')) {

    } else { //add skill

    }
    append();
});
