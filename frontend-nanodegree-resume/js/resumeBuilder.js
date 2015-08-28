/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var name = "Joe Korbel";
 var role = "Web Developer";

var bio = {
	"name" : "Joe Korbel",
	"role" : "Web Developer",
	"contact info" : "715-790-0781",
	"picture URL" : "http://i.imgur.com/Z1w1IQm.jpg",
	"welcome message" : "Hello"
};

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 