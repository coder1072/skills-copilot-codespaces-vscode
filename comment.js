// Create web server
// 1. Create a new file, comment.js in the public folder with the following code:
function commentsMember() {
  // Get the member ID from the URL
  var memberID = getParameterByName('memberID');
  // Get the comments for the member
  $.getJSON('api/members/' + memberID + '/comments', function(data) {
    // Create a list of comments
    var comments = $('<ul>');
    $.each(data, function() {
      comments.append($('<li>').text(this.comment));
    });
    // Add the comments to the page
    $('#comments').append(comments);
  });
}
// 2. In the public/index.html file, include the comment.js file after the member.js file:
// <script src="member.js"></script>
// <script src="comment.js"></script>
// 3. In the public/index.html file, create a new div with the ID comments:
// <div id="comments"></div>
// 4. In the public/index.html file, call the commentsMember function after the skillsMember function:
// <script>
//   $(document).ready(function() {
//     skillsMember();
//     commentsMember();
//   });
// </script>
// 5. Start the web server and navigate to the member page. You should now see a list of comments for the member.