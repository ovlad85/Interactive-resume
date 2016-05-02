
//This section contains the biography 
var bio = {
 	"name" : "Vladimir Olenic",
 	"role" : "Credit Analyst",
 	"contacts" : {
 		"mobile" : "0040742153332",
 		"email" : "vladimir.olenic@gmail.com",
 		"github" : "ovlad85",
 		"location": "Cluj Napoca, Romania"
 	},
 	"welcomeMessage" : "Life is like a box of chocolates",
 	"skills": ["Perseverance","Humor","Open mindedness","Attention to detail","HTML/CSS","JavaScript","jQuery","Python"],
 	"biopic": "images/me.jpg",
 	//this is the function that appends biography elements to the page
 	"display": function () {
 		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
 		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
 		var formattedContact = [
 		HTMLmobile.replace("%data%",bio.contacts.mobile),
 		HTMLemail.replace("%data%",bio.contacts.email),
 		HTMLgithub.replace("%data%",bio.contacts.github),
 		HTMLlocation.replace("%data%",bio.contacts.location)
 		];
 		for (var contact = 0; contact<formattedContact.length; contact++) {
 			$("#topContacts").append(formattedContact[contact]);
 		}
 		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
 		$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
 		if (bio.skills.length > 0) {
 			$("#header").append(HTMLskillsStart);
 			for (var skill = 0; skill < bio.skills.length; skill++) {
 				$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
 			}
 		}
 		for (var footer = 0 ;footer <formattedContact.length; footer++) {
 			$("#footerContacts").append(formattedContact[footer]);	
 		}
 	}
 };

//here we are calling the function
bio.display();


//this sections contains information about work experiance
var work = {
	"jobs": [
	{
		"employer": "Office Depot",
		"title": "Credit Analyst",
		"location":"Cluj-Napoca, Romania",
		"dates": "March 2013 - Present",
		"description": "Front Office and Back Office tasks,taking and placing calls,helping customers with queries regarding invoices and orders,send invoices and statements,process orders,build custom statements and upload invoices on the customers portal if requested,work in Excel and SAP etc."
	}
	],
	//this is the functions that appends work experiance elements to the page
	"display": function () {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedLocation = HTMLworkLocation.replace("%data%" ,work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	} 
};

//here we are calling the function
work.display();

//this sections contains information about the projects I have completed
var projects = {
	"projects" : [
	{
		"title": "Interactive Resume",
		"dates": "2016",
		"description": "develop an interactive resume application that reads your resume content from a JSON file and dynamically displays that content within a provided template. You will use objects, functions, conditionals, and control structures to compose the content that will display on the resume.",
		"images": ["images/1.jpg","images/2.jpg"]
	},
	{
		"title": "Create a Movie Website",
		"dates": "2016",
		"description": "write server-side code to store a list of your favorite movies, including box art imagery and a movie trailer URL. You will then serve this data as a web page allowing visitors to review their movies and watch the trailers.",
		"images": ["images/3.jpg","images/4.jpg"] 
	}
	],
	//this is the function that appends project elements to the page
	"display": function () {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates =  HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);

			for (image in projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
};

//here we are calling the function
projects.display();



//this sections contains information about my education
var education = {
	"schools" : [
	{	
		"name": "Babes Bolyai University",
		"location": "Cluj-Napoca, Romania",
		"degree": "Masters",
		"majors" : "Econometrics",			
		"dates" : "2010 - 2011",
		"url": "https://econ.ubbcluj.ro/"
	},
	{
		"name": "Babes Bolyai University",
		"location": "Cluj-Napoca, Romania",
		"degree": "BA",
		"majors" : "Business Administration",
		"dates" : "2006 - 2010",
		"url": "http://tbs.ubbcluj.ro/"
	}
	],
    "onlineCourses": [
    {
    	"title": "JavaScript Basics",
    	"school": "Udacity",
    	"dates":  "2016",
    	"ürl": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
    	"title": "Programming Foundations with Python",
    	"school": "Udacity",
    	"dates":  "2016",
    	"ürl": "https://www.udacity.com/course/programming-foundations-with-python--ud036"
    }
    ],
    //this is the function that appends elements relating to my education to the page
    "display": function () {
    	for (school in education.schools) {
    		$("#education").append(HTMLschoolStart);
    		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    		formattedName = formattedName.replace("#", education.schools[school].url);
    		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    		$(".education-entry:last").append(formattedName + formattedDegree);
    		$(".education-entry:last").append(formattedDates);
    		$(".education-entry:last").append(formattedLocation);
    		$(".education-entry:last").append(formattedMajors);
    	}
    	$(".education-entry:last").append(HTMLonlineClasses);
    	for (course in education.onlineCourses) {
    		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].ürl);
    		formattedUrl = formattedUrl.replace("#", education.onlineCourses[course].ürl);
    		$(".education-entry:last").append(formattedTitle + formattedSchool);
    		$(".education-entry:last").append(formattedDates);
    		$(".education-entry:last").append(formattedUrl);
    	}
    }
};

//here we are calling the function
education.display();

//click locations function
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);

});

//internationalise name function
function inName() {
	var name = bio.name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
	
};
//here we are appending the international name button and together with the function above 
//we are able to change the way our name appears on the page
//if we press the button we can see the international version of our name
$("#main").append(internationalizeButton);

//here we append the google map
$("#mapDiv").append(googleMap);






