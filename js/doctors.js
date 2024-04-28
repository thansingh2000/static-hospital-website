var doctors=document.getElementById("doctors");

var img=[
"DOC1546943809774.6.jpg",
"DOC1637739738790.6.jpeg",
"DOC1546943832843.4.jpg",
"DOC1546943893930.5.jpg",
"DOC1546943911389.8.jpg",
"DOC1628941582579.1.jpeg",
"DOC1628858588991.jpg",
"DOC1637739829236.3.jpg",
"DOC1628858166381.8.jpeg",
"DOC1546943453270.7.jpg",
"DOC1628858517925.1.jpg",
"DOC1628858557249.9.jpg",
"DOC1546943152502.3.jpg",
"DOC1546943426351.1.png",
"DOC1546943952529.4.jpg",
"DOC1628858645276.4.jpg",
"DOC1546943476016.2.jpg",
"DOC1546943367773.9.png",
"DOC1546943404190.6.jpg",
"DOC1581324968358.8.jpeg",
"DOC1628858370258.4.jpg",
"DOC1546943222286.8.jpg",
"DOC1628858458642.6.jpg",
"DOC1628858684946.4.jpg",
"DOC1628858427761.7.jpg",
"nikhil.jpeg",
"dr_joshep.jpeg"
];	
var alt=[
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors",
"Shree Medishine Hospital Raipur Specility Doctors"
];	
var DName=[
"Dr. Rajesh Jain(Medical Director)",
"Dr Ashu Jain",
"Dr. Susheel Sharma (Medical Director)",
"Dr. Anurag Agrawal",
"Dr. Yogendra Malhotra",
"Dr. Neha Pagare",
"Dr. Rahul Kapoor",
"Dr. Karan Saraf",
"Dr. Arun Iyer",
"Dr. Ranjan Patel",
"Dr. Suphal Kumar",
"Dr. Surabhi Dubey",
"Dr. Radheshyam Chourasia",
"Dr. Deepak Kothari",
"Dr. N Sinha",
"Dr. Vinita Jain",
"Dr. Sushma Naik",
"Dr. Ravi Goel",
"Dr. Supriti Sharma",
"Dr. Ashit Naik",
"Dr. Pooja Jain",
"Dr. Akash Chopra",
"Dr. Jageshwari Ghritlahre",
"Dr. Vishal Jain",
"Dr. Sunita Gupta",
"Dr. Nikhil Motiramani",
"Dr. Jogesh Vishandasani"

];	
var Qualy=[
"MS, Mch, FHU(JAPAN) Neurosurgeon",
"MS, Mch Neurosurgeon",
"Orthopedics and Joint Replacement Surgeon",
"MD-General Medicine",
"MD-General Medicine",
"MD-General Medicine",
"MS, Mch Urology",
"MD DM Nephrology",
"MD DM Gastroenterology",
"MD Chest Medicine",
"MS General Surgeon",
"MD DM Psychology",
"MD BDS Maxillofacial Surgeon",
"M.ch, DNB Plastic Surgeon",
"MD Gynecology",
"MD Gynecology",
"DCH DNB Pediatrician",
"MD Anesthesia",
"MD Anesthesia",
"MD Anesthesia",
"MPT, BPT Neuro Physiotherapy",
"MPT,BPT Rehabilitation Physiotherapy",
"DMRD Radiologist",
"MD Radiologist",
"MD Pathologist",
"MD DM Cardiology",
"MD DM Cardiology"
];

for(var i=0; i<img.length;i++){
	doctors.innerHTML+=`
		<div class="col-md-4">
			<div class="drBox text-center py-5 my-3 rounded bg-light">
				<img src="doctors/${img[i]}" alt=${alt[i]}>                                   
				<h3 class="p-2 fs-4">${DName[i]}</h3> 
				<p><i class="fas fa-graduation-cap primary-color"></i>&nbsp;${Qualy[i]}</p>
				<a class="btn btn-danger" href="https://wa.me/+917880003497?text=Welcome, Shree Medishine Hospital Raipur"  target="_blank" target="_blank">Book Appointment</a>
			</div>
		</div>
	`;
}	