
//IMG OF BHAKARA
let csrImg=["b1.jpeg",
	"b2.jpeg",
	"b3.jpeg",
	"b4.jpeg",
	"b5.jpeg",
	"b6.jpeg",
	"b7.jpeg",
	"b8.jpeg",
	"b9.jpeg",
	"b10.jpeg",
];
for(let i of csrImg){
	document.getElementById("csrImg").innerHTML+=`
		<div class="col-md-3">
			<div class="card thumbnail">
				<img src="csrImg/${i}">
				<p class="text-center">CSR Camp Joratrai</p>
			</div>
		</div>
	`;
}

//IMG OF BHARENGA BHATA
let csrImg2=["bb1.jpeg",
	"bb2.jpeg",
	"bb3.jpeg",
	"bb4.jpeg",
	"bb5.jpeg",
	"bb6.jpeg",
	"bb7.jpeg",
	"bb8.jpeg",
	"bb9.jpeg",
	"bb10.jpeg",
];
for(let i of csrImg2){
	document.getElementById("csrImg2").innerHTML+=`
		<div class="col-md-3">
			<div class="card thumbnail">
				<img src="csrImg/${i}">
				<p class="text-center">CSR Camp Bharenga Bhata</p>
			</div>
		</div>
	`;
}

//IMG OF Raipur Amlidih
let csrImg4=["r1.jpeg",
	"r2.jpeg",
	"r3.jpeg",
	"r4.jpeg",
	"r5.jpeg"
	
];
for(let i of csrImg4){
	document.getElementById("csrImg4").innerHTML+=`
		<div class="col-md-3">
			<div class="card thumbnail">
				<img src="csrImg/${i}">
				<p class="text-center">CSR Amlidih, Raipur</p>
			</div>
		</div>
	`;
}


//IMG News
let csrImg3=["n1.jpeg"];
for(let i of csrImg3){
	document.getElementById("csrImg3").innerHTML+=`
		<div class="col-md-3">
			<div class="card thumbnail">
				<img src="csrImg/${i}">
				<p class="text-center">CSR Camp Joratrai News</p>
			</div>
		</div>
	`;
}