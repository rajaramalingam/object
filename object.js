var student={
	address:{},
	education:{
		ug:{
			address:{},
		},
		pg:{
			address:{},
		},
	},
};
function myFunc() {
	student.name = document.getElementById("sname").value;
	student.age = document.getElementById("sage").value;
	student.address.city=document.getElementById("pcity").value;
	student.address.state=document.getElementById("pstate").value;
	student.address.country=document.getElementById("pcountry").value;
	student.education.ug.ugdegree=document.getElementById("ugdegree").value;
	student.education.ug.ugcollegename=document.getElementById("ugclgename").value;
	student.education.ug.ugcity=document.getElementById("ugcity").value;
	student.education.ug.ugstate=document.getElementById("ugstate").value;
	student.education.ug.ugcountry=document.getElementById("ugcountry").value;
	student.education.ug.ugmark=document.getElementById("ugmark").value;
	student.education.pg.pgdegree=document.getElementById("pgdegree").value;
	student.education.pg.pgcollegename=document.getElementById("pgclgename").value;
	student.education.pg.pgcity=document.getElementById("pgcity").value;
	student.education.pg.pgstate=document.getElementById("pgstate").value;
	student.education.pg.pgcountry=document.getElementById("pgcountry").value;
	student.education.pg.pgmark=document.getElementById("pgmark").value;
    
    document.getElementById("result").innerHTML=student.name+ "<br>" +student.age+ "<br>" +student.address.city+ "<br>" +
    student.address.state+ "<br>" +student.address.country+ "<br>" +student.education.ug.ugdegree+ "<br>" +student.education.ug.ugcollegename+ "<br>" +
 	student.education.ug.ugcity+ "<br>" +student.education.ug.ugstate+ "<br>" +student.education.ug.ugcountry+ "<br>" +
 	student.education.ug.ugmark+ "<br>" +student.education.pg.pgdegree+ "<br>" +student.education.pg.pgcollegename+ "<br>" +
 	student.education.pg.pgcity+ "<br>" +student.education.pg.pgstate+ "<br>" +student.education.pg.pgcountry+ "<br>" +
 	student.education.pg.pgmark
	console.log(student);
}
