$(function(){
    $('#download-pdf').click(function(e){
        e.preventDefault();
        console.log('select_link clicked');

			  var data = {
          name: "fullname",
          email: "email",
          phone: "phone",
          school: "school",
          major: "major",
          course: "course",
          awards: "award",
          experience: {
            job: "job title",
            company: "company",
            dateWorked: "dates worked",
            desc: "desc"
          }
        };


				$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/makePDF',
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });
                });
            });
