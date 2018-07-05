var gpa = [];
var cgpa = [];
var un = [];
var stri = "";
var stri1 = "";
var gp = 0;
$(function(){
$('#sem').click(function(){
gpa.length=0;
un.length=0;
showAddCourse();
// var hold = '';

// hold += '<div class="container">';
//     hold += '<input class=" yinput" style="width: 60%; border: solid 1px #bbb; border-radius: 5px; background-color: #139da9; font-family:Arial Black;  padding:5px;"  onclick="showForm();" type="button"  value="Add Course" />';
// hold += '</div>';

// hold += '<br>';
// hold += '<div class="container">';
//     hold += '<input class=" yinput" style="width: 60%; border: solid 1px #bbb; border-radius: 5px; background-color: #4c89a2; font-family:Arial Black;  padding:5px;" type="button"   onclick="computeGp();" value="Compute GPA" />';
// hold += '</div>';

// $('#holder').empty();
// $(hold).appendTo($('#holder'));


});







});

function CopySemOnClick(){
	gpa.length=0;
un.length=0;

showAddCourse();


}



function showForm(){

var fm = '';

  fm +='<div class="form-group">';

   
    fm += '<input type ="number" class="form-control" value="" placeholder="Unit"  id="unit" />';

    

     fm +='</div>';
     fm +='<div class="form-group">';

   
    fm += '<input class="form-control" value="" placeholder="Grade" type="text" name="Grade" id="grade" />';

    

     fm +='</div>';
     fm += '<div class="container">';
    fm += '<input class=" yinput" style="width: 60%; border: solid 1px #bbb; border-radius: 5px; background-color: #4c89a2; font-family:Arial Black;  padding:5px;" type="button"   onclick="submitter();" value="Submit" />';
	fm += '</div>';

	$('#holder').empty();
$(fm).appendTo($('#holder'));


}


function submitter(){
if(($('#unit').val() !== null && $('#unit').val().trim() !== '') && ($('#grade').val() !== null && $('#grade').val().trim() !== '')){
var grade = checkGrade($('#grade').val().toUpperCase());
var unit = $('#unit').val();
if(grade === 10){

alert("Please Type in a valid grade")

} else {

	gpa.push(grade*unit);
	un.push(Number(unit));
	stri += '<div class=" pi-box pi-round pi-shadow-15 divider">Added Grade: '+grade+', Unit: '+unit+'</div></br>';
	showAddCourse();
	$('#disp').empty();
	$('#disp').append(stri);


}


} else {

alert("please fill in the form")


}


}


function showAddCourse(){

var old = '';

old += '<div class="container">';
    old += '<input class=" yinput" style="width: 60%; border: solid 1px #bbb; border-radius: 5px; background-color: #139da9; font-family:Arial Black;  padding:5px;"  onclick="showForm();" type="button"  value="Add Course" />';
old += '</div>';

old += '<br>';
old += '<div class="container">';
    old += '<input class=" yinput" style="width: 60%; border: solid 1px #bbb; border-radius: 5px; background-color: #4c89a2; font-family:Arial Black;  padding:5px;" type="button" onclick="computeGp();"  id="gp" value="Compute GPA" />';
old += '</div>';

$('#holder').empty();
$(old).appendTo($('#holder'));






}



function showAddSemester(){

var old = '';

old += '<div class="container">';
    old += '    <input class=" yinput" style="width: 60%; border: solid 1px #bbb; border-radius: 5px; background-color: #4c89a2; font-family:Arial Black;  padding:5px;"  onclick="CopySemOnClick();" type="button"  value="Add Semester" />';
old += '</div>';

old += '<br>';
old += '<div class="container">';
    old += '<input class=" yinput" style="width: 60%; border: solid 1px #bbb; border-radius: 5px; background-color: #139da9; font-family:Arial Black;  padding:5px;" type="button"   onclick="computeCgpa();" value="Compute CGPA" />';
old += '</div>';

$('#holder').empty();
$('#disp').empty();
$(old).appendTo($('#holder'));


	$('#disp').append(stri1);




}



function computeGp(){
var r = 0;
var j = 0;
for (var e in gpa){
r+=gpa[e];

}

for (var t in un){

j+=un[t];


}


console.log(r)
console.log(gpa)
 gp = parseFloat(r / j);
 cgpa.push(gp);
stri1 += '<div class=" pi-box pi-round pi-shadow-15 divider">Semester GPA: '+gp+'</div></br>';

showAddSemester();


}


function computeCgpa(){
if(cgpa === undefined || cgpa.length == 0){

	alert("Please do add a Semester");
} else {
	var pa = 0;
for (var cg in cgpa){
pa +=cgpa[cg];


}

var ansa = parseFloat(pa / cgpa.length);
$('#lisp').append('<div class=" pi-box pi-round pi-shadow-15 divider"><font size="3px" color="black">The CGPA is : '+ansa+'</font></div></br>');

}






}






function checkGrade(p){
var rvar;
switch (p){
	case "A":
		rvar=5;
		break;
	case "B":
		rvar=4;
		break;
	case "C":
		rvar=3;
		break;
	case "D":
		rvar=2;
		break;
	case "E":
		rvar=1;
		break;
	case "F":
		rvar=0;
		break;
	default:
		rvar=10;						

}

return rvar;

}