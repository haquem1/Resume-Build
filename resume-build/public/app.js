$(function(){
    $('#download-pdf').click(function(e){
        //ajax post here
        var data = createData();
        // on ajax success, do window.location for get
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
              contentType: 'application/json',
                      url: '/pdf/save',
                      success: function(data) {
                          console.log(JSON.stringify(data));
                      }
        });
        return true;
    });
});

function createData () {
  // for loop to create json "array" for courses awards skills and jobs
  var data = {
    "name": $(".name").text(),
    "email": $(".email").text(),
    "phone": "phone",
    "school": "school",
    "major": "major",
    "course": "course",
    "awards": "award",
    "coursework": {
      "course":"course"
    },
    "experience": {
      "job": "job title",
      "company": "company",
      "dateWorked": "dates worked",
      "desc": "desc"
    }
  };
  return data;
}
