$(document).ready(function() {
  var counter = 2;
  $("#add").click(function() {
    // $("#datas").html($("#datas").html() + "<div id='d"+counter+"' ><label for='t2'> Textbox "+counter+"</label><input type='textbox' id='t"+counter+"' > </div>\n");
    $("#datas").html(
      $("#datas").html() +
        `<div id="${counter}">
      <div class="row">
        <div class="four columns">
          <label for="disease${counter}">Disease</label>
          <input class="u-full-width" type="text" placeholder="Disease" id="disease${counter}">
        </div>
        <div class="four columns">
          <label for="value${counter}">Value</label>
          <input class="u-full-width" type="text" placeholder="Value" id="value${counter}">
        </div>
        <div class="four columns">
          <label for="level${counter}">Level</label>
          <select class="u-full-width" id="level${counter}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

        </div>
        <label for="Comment${counter}">Comment</label>
<textarea class="u-full-width" name="Comment" id="Comment${counter}" placeholder="Comment"></textarea>
      </div>
      </div>`
    );

    ++counter;
  });

  // $("#remove").click(function () {
  // if(counter==1){
  //     alert("Can u see any boxes");
  //     return false;
  // }
  //     --counter;
  //     $("#d"+counter).remove();
  // });
});
