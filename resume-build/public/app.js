$(function(){
    $('#download-pdf').click(function(e){
      e.preventDefault(); // for testing
        // ajax post here
        var data = createData();
        // on ajax success
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
              contentType: 'application/json',
                      url: '/pdf/save',
                      success: function(data) {
                          console.log(JSON.stringify(data));
                      }
        });
        console.log(data);
        return true;
    });
});

function createData () {

  var length, i, j, k = 0;
  var education = {};
  var experience = {};
  var skills = {};

  // for loop to create json "array" for courses awards skills and jobs
  for (k = 0; k < 3; k++) {
    if (k === 0) {
      for (i = 1; i < $('.education article').length; i++) {
        education[i] = {};
        education[i].school =  $('.education').children(".school:eq("+ i +")").text();
        education[i].major = $('.education').children(".major:eq("+ i +")").text();
        education[i].awards = {};
        education[i].coursework = {};
        for (j = 1; j < $('#activity-award-list li').length; j++) {
          education[i].coursework[j] = $('#activity-award-list').children("label:eq("+ j +")").text();
        }
        for (j = 1; j < $('#course-list li').length; j++) {
          education[i].awards[j] = $('#course-list').children("label:eq("+ j +")").text();
        }
      }
    } else if (k === 1) {
        for (i = 1; i < $('.experience article').length; i++) {
          experience[i] = {};
          experience[i].job =  $('.experience').children(".job:eq("+ i +")").text();
          experience[i].company =  $('.experience').children(".company:eq("+ i +")").text();
          experience[i].dateWorked =  $('.experience').children(".dates:eq("+ i +")").text();
          experience[i].desc =  $('.experience').children(".desc:eq("+ i +")").text();
        }
    } else {
      for (i = 1; i < $('.skill li').length; i++) {
        skills[i] =  $('.skill').children("label:eq("+ j +")").text();
      }
    }
  }

  var data = {
    "name": $(".name").text(),
    "contact": $(".contact").text(),
    "education": education,
    "experience": experience,
    "skills": skills
  };

  return data;
}
