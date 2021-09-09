var splat1 = $("#splat01");
var splat2 = $("#splat02");
var cnccalc = $("#cnc_table");
var form = $("<form>");
var table = $("<table class='table'>");
var lbl_array_1 = ["Style Number","Style Name","Customer","Type"];
var hdwd_tbl_head = ["Part Number","Qty", "Style Name", "Part Name","Length", "Width", "Notes"];

function infobox(){
  for (i = 0; i < lbl_array_1.length; i++) {
      var form_group = $("<div class='input-group'>");
      var input_id = lbl_array_1[i] + "id"
      var label = $("<label for='"+ input_id +"' class='input-group-prepend'>");
      label.text(lbl_array_1[i]);
      var input = $("<input type='text' class='form-control' id='"+ input_id + "' placeholder='Enter Here'>");
      form_group.append(label);
      form_group.append(input);
      form.append(form_group);
  };
  form.attr("style", "border: 2px solid black");
  splat1.append(form);
};


function hdwd_table(){
  var tableHead = $("<thead>");
  var tr = $("<tr id='tablehead'>");
  for (i=0; i<hdwd_tbl_head.length; i++){
    var th = $("<th>");    
    th.text(hdwd_tbl_head[i]);
    tr.append(th);
    tableHead.append(tr);
  };
  table.append(tableHead);
  var rows = 10;
  var tableBody = $("<tbody>");
  for (b = 0; b < rows; b++){
    addRow();
  }
  
  splat2.append(table);
  };

function addRow(){
  var tr = $("<tr id='tablerow'>")

  for (i=0; i < hdwd_tbl_head.length; i++){
    var td = $("<td>");
    var hdwd_input = $("<input type='text' class='form-control'>");
    td.append(hdwd_input);
    tr.append(td);
  };
table.append(tr);
};


function cnc_tbl(){
 // cnccalc.append($("<h2>").text("CNC Chart"));
  var yield_row = ""+
  "<h2>1<h2>"+
  "<input type='text' class='form-control'> <input type='text' class='form-control'>"+
  "<input type='text' class='form-control'>"
  cnccalc.append(yield_row);
  
}
infobox();
hdwd_table();
cnc_tbl();
/*addRow();
/* <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form> */

/* <table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</table> */