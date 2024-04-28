function BookApp(N,Num,E,D,P){
	if(N==="" && Num==="" && E==="" && D===""){
		document.getElementById("ErronMsg").innerText=`Please Enter Something Here....`;
	}
	else{
		var url="https://wa.me/+917880003497?text="
		+"Name :"+N+ "%0a"
		+"Mobile :"+Num+ "%0a"
		+"Email :"+E+ "%0a"
		+"DOB :"+D+ "%0a"
		+"Problems :"+P;
		
		window.open(url).focus();
	}
} 