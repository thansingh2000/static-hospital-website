var GalleryImg=document.getElementById("GalleryImg");

var Img2022=["img2022/1.jpeg",
"img2022/2.jpeg",
"img2022/3.jpeg",
"img2022/4.jpeg",
"img2022/5.jpeg",
"img2022/6.jpeg",
"img2022/7.jpeg",
"img2022/8.jpeg",
"img2022/9.jpeg",
"img2022/10.jpeg",
"img2022/11.jpeg",
"img2022/12.jpeg",
"img2022/13.jpeg",
"img2022/14.jpeg",
"img2022/15.jpeg",
"img2022/16.jpeg",
"img2022/17.jpeg",
"img2022/18.jpeg",
"img2022/19.jpeg",
"img2022/20.jpeg",
"img2022/21.jpeg",
"img2022/22.jpeg",
"img2022/23.jpeg",
"img2022/24.jpeg",
"img2022/25.jpeg",
"img2022/26.jpeg",
"img2022/27.jpeg",
"img2022/28.jpeg",
"img2022/29.jpeg",
"img2022/30.jpeg",
"img2022/31.jpeg",
"img2022/32.jpeg",
"img2022/33.jpeg",
"img2022/34.jpeg",
"img2022/35.jpeg",
"img2022/36.jpeg",
"img2022/37.jpeg",
"img2022/38.jpeg"
];

for(var i=0; i<Img2022.length; i++){
	GalleryImg.innerHTML+=`
		<div class="col-md-4">
			<div>
				<div class="photogallery">
				  <img src=${Img2022[i]} alt="Shree Medishine Hospital Gallary" class="img-thumbnail">
				</div>   
			</div>
		</div>
	`;
}