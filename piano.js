 
   window.onload = function()
   {
	  var piano= Synth.createInstrument('piano');

			 $('#key_1').on('click' , function(){
					   piano.play('C',3,2);
				   });
				   $('body').on('keypress',function(event){
					   if(event.keyCode==81 || event.keyCode==113)
					   {
						   $('#key_1').addClass('hover')
						   piano.play('C',3,2);
						   
					   }
					   
				   }); 	
			 $('#key_2').on('click' , function(){
					   piano.play('D',3,2);
				   });
				   $('body').on('keypress',function(event){
					   if(event.keyCode==87 || event.keyCode==119)
					   {
						    $('#key_2').addClass('hover')
						   piano.play('D',3,2);
						   
					   }
				   });
					   
			$('#key_3').on('click' , function(){                                              
			   piano.play('E',3,2);                                                       
		   });
		   $('body').on('keypress',function(event){
			
			   if(event.keyCode==69 || event.keyCode==101)
			   {
				    $('#key_3').addClass('hover')
				   piano.play('E',3,2);
			   }
		   });
		   
		    $('#key_4').on('click' , function(){
			   piano.play('F',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==82 || event.keyCode==114)
			   {
				    $('#key_4').addClass('hover')
				   piano.play('F',3,2);
			   }
		   });
		   
		     $('#key_5').on('click' , function(){
			   piano.play('G',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==84 || event.keyCode==116)
			   {
				    $('#key_5').addClass('hover')
				   piano.play('G',3,2);
			   }
		   });
		   
		   		     $('#key_6').on('click' , function(){
			   piano.play('A',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==89  || event.keyCode==121)
			   {
				    $('#key_6').addClass('hover')
				   piano.play('A',3,2);
			   }
		   });
		   
		     $('#key_7').on('click' , function(){
			   piano.play('B',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==85 || event.keyCode==117)
			   {
				    $('#key_7').addClass('hover')
				   piano.play('B',3,2);
			   }
		   });
		   
		     $('#key_8').on('click' , function(){
			   piano.play('C',4,2);
		   });
		   $('body').on('keypress',function(event){
		
			   if(event.keyCode==73 || event.keyCode==105)
			   {
				    $('#key_8').addClass('hover')
				   piano.play('C',4,2);
			   }
		   });
		   
		     $('#key_9').on('click' , function(){
			   piano.play('D',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==79 || event.keyCode==111)
			   {
				    $('#key_9').addClass('hover')
				   piano.play('D',4,2);
			   }
		   });
		   
		   
		    $('#key_10').on('click' , function(){
			   piano.play('E',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==80 || event.keyCode==112)
			   {
				    $('#key_10').addClass('hover')
				   piano.play('E',4,2);
			   }
		   });
		   
		     $('#key_11').on('click' , function(){
			   piano.play('F',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==90|| event.keyCode==122 )
			   {
				    $('#key_11').addClass('hover')
				   piano.play('F',4,2);
			   }
		   });
		   
		     $('#key_12').on('click' , function(){
			   piano.play('G',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==88|| event.keyCode==120)
			   {
				    $('#key_12').addClass('hover')
				   piano.play('G',4,2);
			   }
		   });
		   
		     $('#key_13').on('click' , function(){
			   piano.play('A',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==67 || event.keyCode==99)
			   {
				    $('#key_13').addClass('hover')
				   piano.play('A',4,2);
			   }
		   });
		   
		     $('#key_14').on('click' , function(){
			   piano.play('B',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==86 || event.keyCode==118)
			   {
				    $('#key_14').addClass('hover')
				   piano.play('B',4,2);
			   }
		   });
		   
		     $('#key_15').on('click' , function(){
			   piano.play('C',5,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==66 || event.keyCode==98)
			   {
				    $('#key_15').addClass('hover')
				   piano.play('C',5,2);
			   }
		   });
		   
		     $('#key_16').on('click' , function(){
			   piano.play('D',5,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==78 || event.keyCode==110)
			   {
				    $('#key_16').addClass('hover')
				   piano.play('D',5,2);
			   }
		   });
		   
		     $('#key_17').on('click' , function(){
			   piano.play('E',5,2);
		   });
		   $('body').on('keypress',function(event){
			
			   if(event.keyCode==77 || event.keyCode==109)
			   {
				    $('#key_17').addClass('hover')
				   piano.play('E',5,2);
			   }
		   });
		   
		     $('#key_18').on('click' , function(){
			   piano.play('F',5,2);
		   });
		   $('body').on('keypress',function(event){
			 
			   if(event.keyCode==65 || event.keyCode==97)
			   {
				    $('#key_18').addClass('hover')
				   piano.play('F',5,2);
			   }
		   });
		   
		     $('#key_19').on('click' , function(){
			   piano.play('G',5,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==83 || event.keyCode==115)
			   {
				    $('#key_19').addClass('hover')
				   piano.play('G',5,2);
			   }
		   });
		   
		     $('#key_20').on('click' , function(){
			   piano.play('A',5,2);
		   });
		   $('body').on('keypress',function(event){
			 
			   if(event.keyCode==91)
			   {
				    $('#key_20').addClass('hover')
				   piano.play('A',5,2);
			   }
		   });
		   
		   
		      $('#key_21').on('click' , function(){
			   piano.play('B',5,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==93)
			   {
				    $('#key_21').addClass('hover')
				   piano.play('B',5,2);
			   }
		   });
		   
		      $('#key-1').on('click' , function(){
			   piano.play('C#',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==50)
			   {
				    $('#key-1').addClass('hover')
				   piano.play('C#',3,2);
			   }
		   });
		   
		     $('#key-2').on('click' , function(){
			   piano.play('C#',3,2);
		   });
		   $('body').on('keypress',function(event){
			 
			   if(event.keyCode==51)
			   {
				    $('#key-2').addClass('hover')
				   piano.play('C#',3,2);
			   }
		   });
		   
		     $('#key-3').on('click' , function(){
			   piano.play('D#',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==53)
			   {
				    $('#key-3').addClass('hover')
				   piano.play('D#',3,2);
			   }
		   });
		   
		     $('#key-4').on('click' , function(){
				
			   piano.play('E#',3,2);
		   });
		   $('body').on('keypress',function(event){
			   if(event.keyCode==54)
			   {
				    $('#key-4').addClass('hover')
				   piano.play('E#',3,2);
			   }
		   });
		   
		     $('#key-5').on('click' , function(){
			   piano.play('F#',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==55)
			   {
				    $('#key-5').addClass('hover')
				   piano.play('F#',3,2);
			   }
		   });
		   
		     $('#key-6').on('click' , function(){
			   piano.play('G#',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==57)
			   {
				    $('#key-6').addClass('hover')
				   piano.play('G#',3,2);
			   }
		   });
		   
		     $('#key-7').on('click' , function(){
			   piano.play('A#',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==48)
			   {
				    $('#key-7').addClass('hover')
				   piano.play('A#',3,2);
			   }
		   });
		   
		      $('#key-8').on('click' , function(){
			   piano.play('B#',3,2);
		   });
		   $('body').on('keypress',function(event){
			 
			   if(event.keyCode==68 || event.keyCode==100)
			   {
				    $('#key-8').addClass('hover')
				   piano.play('B#',3,2);
			   }
		   });
		   
		     $('#key-9').on('click' , function(){
			   piano.play('C#',3,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==70 || event.keyCode==102)
			   {
				    $('#key-9').addClass('hover')
				   piano.play('C#',3,2);
			   }
		   });
		   
		     $('#key-10').on('click' , function(){
			   piano.play('D#',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==71  || event.keyCode==103)
			   {
				    $('#key-10').addClass('hover')
				   piano.play('D#',4,2);
			   }
		   });
		   
		     $('#key-11').on('click' , function(){
			   piano.play('D#',4,2);
		   });
		   $('body').on('keypress',function(event){
			 
			   if(event.keyCode==72 || event.keyCode==104)
			   {
				    $('#key-11').addClass('hover')
				   piano.play('D#',4,2);
			   }
		   });
		   
		     $('#key-12').on('click' , function(){
			   piano.play('E#',4,2);
		   });
		   $('body').on('keypress',function(event){
			  
			   if(event.keyCode==74 || event.keyCode==106)
			   {
				    $('#key-12').addClass('hover')
				   piano.play('E#',4,2);
			   }
		   });
		   
		     $('#key-13').on('click' , function(){
			   piano.play('F#',4,2);
		   });
		   $('body').on('keypress',function(event){
			 
			   if(event.keyCode==75 || event.keyCode==107)
			   {
				    $('#key-13').addClass('hover')
				   piano.play('F#',4,2);
			   }
		   });
		   
		     $('#key-14').on('click' , function(){
			   piano.play('G#',4,2);
		   });
		   $('body').on('keypress',function(event){
			   if(event.keyCode==76 || event.keyCode==108)
			   {
				    $('#key-14').addClass('hover')
				   piano.play('G#',5,2);
			   }
		   });
		   
		     $('#key-15').on('click' , function(){
			   piano.play('A#',5,2);
		   });
		   $('body').on('keypress',function(event){
			  if(event.keyCode==59 || event.keyCode==186)
			   {
				    $('#key-15').addClass('hover')
				   piano.play('A#',5,2);
			   }
		   });
		   
		   
		   $('body').on('keyup',function(event){
			       $('.keys').removeClass('hover')
		   });
             $('body').on('keyup',function(event){
			       $('.black keys').removeClass('hover')
		   });
					   
						   
	   
   }