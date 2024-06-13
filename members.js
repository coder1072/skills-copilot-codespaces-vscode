function skillsMember() {
  // Get the member ID from the URL
  var memberID = getParameterByName('memberID');
  // Get the skills for the member
  $.getJSON('api/members/' + memberID + '/skills', function(data) {
    // Create a list of skills
    var skills = $('<ul>');
    $.each(data, function() {
      skills.append($('<li>').text(this.skill));
    });
    // Add the skills to the page
    $('#skills').append(skills);
  });
}