function endEdit(e) {
    var input = $(e.target),
        label = input && input.prev();

    if (input.val() !== '') {
      label.text(input.val());
      input.attr('placeholder', input.val());
    }
    input.hide();
    label.show();

}

$('.clickedit').hide()
.focusout(endEdit)
.keyup(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        endEdit(e);
        return false;
    } else {
        return true;
    }
})
.prev().click(function () {
    $(this).hide();
    $(this).next().show().focus();
});
