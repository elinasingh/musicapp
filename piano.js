  
   window.onload = function()
   {
	   var piano= Synth.createInstrument('piano');
	   
	   
	   $('#key_1').on('click',function(){
		   piano.play('C',3,2);
	   });
	   $('body').on('keypress',function(event){
		   $('.keys').toggleClass('hover');
		   if(event.keyCode==81 || event.keyCode==113)
		   {
			   
			   piano.play('C',3,2);
			   
		   }
		   
	   }); 
	   
	    $('#key_2').on('click' , function(){
		   piano.play('D',3,2);
	   });
	   $('body').on('keypress',function(event){
		   $('.keys').toggleClass('hover');
		   if(event.keyCode==87 || event.keyCode==119)
		   {
			   piano.play('D',3,2);
		   }
	   });
	   
	   
         $('#key_3').on('click' , function(){                                              
			   piano.play('E',3,2);                                                       
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==69 || event.keyCode==101)
			   {
				   piano.play('E',3,2);
			   }
		   });
		   
		    $('#key_4').on('click' , function(){
			   piano.play('F',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==82 || event.keyCode==114)
			   {
				   piano.play('F',3,2);
			   }
		   });
		   
		     $('#key_5').on('click' , function(){
			   piano.play('G',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==84 || event.keyCode==116)
			   {
				   piano.play('G',3,2);
			   }
		   });
		   
		     $('#key_6').on('click' , function(){
			   piano.play('A',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==89  || event.keyCode==121)
			   {
				   piano.play('A',3,2);
			   }
		   });
		   
		     $('#key_7').on('click' , function(){
			   piano.play('B',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==85 || event.keyCode==117)
			   {
				   piano.play('B',3,2);
			   }
		   });
		   
		     $('#key_8').on('click' , function(){
			   piano.play('C',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==73 || event.keyCode==105)
			   {
				   piano.play('C',4,2);
			   }
		   });
		   
		     $('#key_9').on('click' , function(){
			   piano.play('D',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==79 || event.keyCode==111)
			   {
				   piano.play('D',4,2);
			   }
		   });
		   
		     $('#key_10').on('click' , function(){
			   piano.play('E',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==80 || event.keyCode==112)
			   {
				   piano.play('E',4,2);
			   }
		   });
		   
		     $('#key_11').on('click' , function(){
			   piano.play('F',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==90|| event.keyCode==122 )
			   {
				   piano.play('F',4,2);
			   }
		   });
		   
		     $('#key_12').on('click' , function(){
			   piano.play('G',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==88|| event.keyCode==120)
			   {
				   piano.play('G',4,2);
			   }
		   });
		   
		     $('#key_13').on('click' , function(){
			   piano.play('A',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==67 || event.keyCode==99)
			   {
				   piano.play('A',4,2);
			   }
		   });
		   
		     $('#key_14').on('click' , function(){
			   piano.play('B',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==86 || event.keyCode==118)
			   {
				   piano.play('B',4,2);
			   }
		   });
		   
		     $('#key_15').on('click' , function(){
			   piano.play('C',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==66 || event.keyCode==98)
			   {
				   piano.play('C',5,2);
			   }
		   });
		   
		     $('#key_16').on('click' , function(){
			   piano.play('D',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==78 || event.keyCode==110)
			   {
				   piano.play('D',5,2);
			   }
		   });
		   
		     $('#key_17').on('click' , function(){
			   piano.play('E',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==77 || event.keyCode==109)
			   {
				   piano.play('E',5,2);
			   }
		   });
		   
		     $('#key_18').on('click' , function(){
			   piano.play('F',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==65 || event.keyCode==97)
			   {
				   piano.play('F',5,2);
			   }
		   });
		   
		     $('#key_19').on('click' , function(){
			   piano.play('G',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==83 || event.keyCode==115)
			   {
				   piano.play('G',5,2);
			   }
		   });
		   
		     $('#key_20').on('click' , function(){
			   piano.play('A',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==91)
			   {
				   piano.play('A',5,2);
			   }
		   });
		   
		   
		      $('#key_21').on('click' , function(){
			   piano.play('B',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==93)
			   {
				   piano.play('B',5,2);
			   }
		   });
		   
		     $('#key-1').on('click' , function(){
			   piano.play('C#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==50)
			   {
				   piano.play('C#',3,2);
			   }
		   });
		   
		     $('#key-2').on('click' , function(){
			   piano.play('C#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==51)
			   {
				   piano.play('C#',3,2);
			   }
		   });
		   
		     $('#key-3').on('click' , function(){
			   piano.play('D#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==53)
			   {
				   piano.play('D#',3,2);
			   }
		   });
		   
		     $('#key-4').on('click' , function(){
				 $('.keys').toggleClass('hover');
			   piano.play('E#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   if(event.keyCode==54)
			   {
				   piano.play('E#',3,2);
			   }
		   });
		   
		     $('#key-5').on('click' , function(){
			   piano.play('F#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==55)
			   {
				   piano.play('F#',3,2);
			   }
		   });
		   
		     $('#key-6').on('click' , function(){
			   piano.play('G#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==57)
			   {
				   piano.play('G#',3,2);
			   }
		   });
		   
		     $('#key-7').on('click' , function(){
			   piano.play('A#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==48)
			   {
				   piano.play('A#',3,2);
			   }
		   });
		   
		      $('#key-8').on('click' , function(){
			   piano.play('B#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==68 || event.keyCode==100)
			   {
				   piano.play('B#',3,2);
			   }
		   });
		   
		     $('#key-9').on('click' , function(){
			   piano.play('C#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==70 || event.keyCode==102)
			   {
				   piano.play('C#',3,2);
			   }
		   });
		   
		     $('#key-10').on('click' , function(){
			   piano.play('D#',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==71  || event.keyCode==103)
			   {
				   piano.play('D#',4,2);
			   }
		   });
		   
		     $('#key-11').on('click' , function(){
			   piano.play('D#',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==72 || event.keyCode==104)
			   {
				   piano.play('D#',4,2);
			   }
		   });
		   
		     $('#key-12').on('click' , function(){
			   piano.play('E#',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==74 || event.keyCode==106)
			   {
				   piano.play('E#',4,2);
			   }
		   });
		   
		     $('#key-13').on('click' , function(){
			   piano.play('F#',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==75 || event.keyCode==107)
			   {
				   piano.play('F#',4,2);
			   }
		   });
		   
		     $('#key-14').on('click' , function(){
			   piano.play('G#',4,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==76 || event.keyCode==108)
			   {
				   piano.play('G#',5,2);
			   }
		   });
		   
		     $('#key-15').on('click' , function(){
			   piano.play('A#',5,2);
		   });
		   $('body').on('keypress',function(event){
			   $('.keys').toggleClass('hover');
			   if(event.keyCode==59 || event.keyCode==186)
			   {
				   piano.play('A#',5,2);
			   }
		   });

		   
   }