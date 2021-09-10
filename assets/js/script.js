var splat1 = $("#splat01");
var splat2 = $("#splat02");
var cnccalc = $("#cnc_table");
var form = $("<form>");
var table = $("<table class='table'>");
var lbl_array_1 = ["Style Number","Style Name","Customer","Type"];
var hdwd_tbl_head = ["Part Number","Qty", "Style Name", "Part Name","Length", "Width", "Notes"];

splat1.attr("style","width:fit-content;height:fit-content;border:2px solid grey; border-radius:25px;align-items:flex-start;justify-content:left")
splat2.attr("style", "width:fit-content;height:fit-content;border:2px solid grey; border-radius:25px;");


function infobox(){
  for (i = 0; i < lbl_array_1.length; i++) {
      var form_group = $("<div class='input-group'>");
      var input_id = lbl_array_1[i] + "id"
      var label = $("<label for='"+ input_id +"' class='input-group-prepend'>");
      label.text(lbl_array_1[i]);
      var input = $("<input type='text' class='form-control' id='"+ input_id + "' placeholder='Enter Here' style='height:20px;'>");
      form_group.append(label);
      form_group.append(input);
      form.append(form_group);
  };
  //form.attr("style", "border: 2px solid black");
  splat1.append(form);
};


function hdwd_table(){
  var tableHead = $("<thead>");
  var tr = $("<tr id='tablehead'>");
  for (i=0; i<hdwd_tbl_head.length; i++){
    var th = $("<th>");    
    th.text(hdwd_tbl_head[i]);

    var column_id = hdwd_tbl_head[i];

    if (column_id === "Qty"){
      th.attr("style","height:20px;width:30px");
    } else if(column_id === "Notes"){
      th.attr("style","height:20px;width:200px");
    } else
      th.attr("style","height:20px;width:100px");
    
    tr.append(th);
    tableHead.append(tr);
  };
  table.append(tableHead);
  var rows = 10;
  var tableBody = $("<tbody>");
  for (b = 0; b < rows; b++){
    addRow();
  };

  
  splat2.append(table);
  };

function addRow(){
  var tr = $("<tr id='tablerow'>")

  for (i=0; i < hdwd_tbl_head.length; i++){
    var td = $("<td>");
    var hdwd_input = $("<input type='text' class='form-control'>");
    var column_id = hdwd_tbl_head[i];

    if (column_id === "Qty"){
      hdwd_input.attr("style","height:20px;width:30px");
    } else if(column_id === "Notes"){
      hdwd_input.attr("style","height:20px;width:200px");
    } else {
      hdwd_input.attr("style","height:20px;width:100px");
    };

    td.append(hdwd_input);
    tr.append(td);
  };
table.append(tr);
};


function cnc_tbl(){
 // cnccalc.append($("<h2>").text("CNC Chart"));
  var yield_row =
  splat1.append(yield_row);
  
};



infobox();
hdwd_table();