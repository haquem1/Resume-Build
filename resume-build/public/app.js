$(function(){
    $('#download-pdf').click(function(e){
        //ajax post here
        var data = createData();

        //on ajax success, do window.location for get
        window.open('/makePDF', '_self');
        return true;
    });
});

function createData () {
  var data = {
    "name": "fullname",
    "email": "email",
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
