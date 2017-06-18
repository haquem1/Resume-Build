$(function(){
    $('#download-pdf').click(function(e){
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
        education[i].school =  $('.education').find(".school:eq("+ i +")").text();
        education[i].major = $('.education').find(".major:eq("+ i +")").text();

        education[i].coursework = {};
        education[i].awards = {};

        for (j = 1; j < $('#activity-award-list li').length; j++) {
          education[i].coursework[j] = $('#activity-award-list').find("label:eq("+ j +")").text();
        }
        for (j = 1; j < $('#course-list li').length; j++) {
          education[i].awards[j] = $('#course-list').find("label:eq("+ j +")").text();
        }
      }
    } else if (k === 1) {
      for (i = 1; i < $('.experience article').length; i++) {

        experience[i] = {};
        experience[i].job =  $('.experience').find(".job:eq("+ i +")").text();
        experience[i].company =  $('.experience').find(".company:eq("+ i +")").text();
        experience[i].dateWorked =  $('.experience').find(".dates:eq("+ i +")").text();
        experience[i].desc =  $('.experience').find(".desc:eq("+ i +")").text();
      }
    } else {
      for (i = 1; i < $('.skill li').length; i++) {
        skills[i] =  $('.skill').find("label:eq("+ j +")").text();
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
