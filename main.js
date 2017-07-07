				function fancyTimeFormat(time) //isse hmara currenttime or duration time ese(1:22) show hoga
			{   
				// Hours, minutes and seconds
				var hrs = ~~(time / 3600);
				var mins = ~~((time % 3600) / 60);
				var secs = time % 60;

				// Output like "1:01" or "4:03:59" or "123:03:59"
				var ret = "";

				if (hrs > 0) {
					ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
				}

				ret += "" + mins + ":" + (secs < 10 ? "0" : "");
				ret += "" + secs;
				return ret;
			}
	
	
	   
			function toggleSong() { //is function ko hm jha b same code use hua hoga bha iska function name daal denge 
			var song = document.querySelector('audio');//isme html file mai se queryselector mai jo b pda h usko select krna or audio ko dhund ke play krna 
			if(song.paused == true) { //agr hmara song pause hua to song play hoga 
			console.log('Playing'); //print playing
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');  //isse hmari class mai play remove hoga or pause add hoga
			song.play();
			}
			else {//agr play hua to pause hojayega
			console.log('Pausing');
			$('.play-icon').removeClass('fa-pause').addClass('fa-play'); //isse hmari class mai pause remove hoga or play add hoga
			song.pause();
			}
			}
			
			
			function addSongNameClickEvent(songName,position) {
			var id = '#song' + position;
			$(id).click(function() {
			var audio = document.querySelector('audio');
			var currentSong = audio.src;
			if(currentSong.search(songName) != -1)
			{
			toggleSong();
			}
			else {
			audio.src = songName;
			toggleSong();
			}
			});
			}
	
	
	
			  function updateCurrentTime() {  //isse hmara current time update hota rhega jb window load hojayegi through window.onload 
					var song = document.querySelector('audio');
					var currentTime = Math.floor(song.currentTime);//math.floor function se decimal value ignore hojayegi
					currentTime = fancyTimeFormat(currentTime);//isse current time (1:20)ese type show hoga
					var duration = Math.floor(song.duration);
					duration = fancyTimeFormat(duration)//isse duration time (3:20)ese type show hoga
					$('.time-elapsed').text(currentTime);//jo hmne time dala h bo text show hoga
					$('.song-duration').text(duration);
				}
				
				window.onload = function() {
				updateCurrentTime();//jb window load hogi to current time btayegA fir 0 se start hoga
				setInterval(function() {//isse hmara time hr second change hota rhega
				updateCurrentTime();
				},1000);
				
				
				 var songs = [{
					'name': 'Alone',
					'artist': 'Marshmello',
					'album': 'Apple Music',
					'duration': '4:33',
				   'fileName': 'song4.mp3'
				},
				{
					'name': 'Choo Lo',
					'artist': 'The Local Train',
					'album': 'Alas Ka Pedh',
					'duration': '4:13',
					'fileName': 'song5.mp3'
				},
				{
					'name': 'Cheap Thrills',
					'artist': 'Sia',
					'album': 'This Is Acting',
					'duration': '3:44',
					'fileName': 'song6.mp3'
				},
				{
					'name': 'Summer',
					'artist': 'Marsmello',
					'album': 'Joytime',
					'duration': '1:45',
					'fileName': 'song7.mp3'
				},
				{
					'name': 'Bhyanak Atma',
					'artist': 'Nuclea',
					'album': 'Raja Baja',
					'duration': '3:29',
					'fileName': 'song8.mp3'
				}]

				
				 for(var i =0; i < songs.length; i++) {
					 var obj = songs[i];
						var name = '#song' + (i+1);
						var song = $(name);
						song.find('.song-name').text(obj.name);
						song.find('.song-artist').text(obj.artist);
						song.find('.song-album').text(obj.album);
						song.find('.song-length').text(obj.duration);
						addSongNameClickEvent(obj.fileName,i+1)
					
				 }
				
				//addSongNameClickEvent(fileNames[0],1);
				//addSongNameClickEvent(fileNames[1],2);
				//addSongNameClickEvent(fileNames[2],3);
				//addSongNameClickEvent(fileNames[3],4);
				//addSongNameClickEvent(fileNames[4],5);
				
				
							
				//for (var i = 0; i < fileNames.length ; i++) {
				//	addSongNameClickEvent(fileNames[i],i+1)
				//} 
				
				}
				
				
	
	
	
        $('.welcome-screen button').on('click', function() {  //isme hm welcome screen mai button ko dhundenge or jb click hoga to niche vala code run hoga
        var name = $('#name-input').val();  // isme hmne nameinput id dhundo or to get the value jo b hmne tet type kiya
        if (name.length > 2) {// agr hmari name ki length 2 se jyada h to welome message ayega 
            var message = "Welcome, " + name; // isse welcome or jo b name type krenge 
            $('.main .user-name').text(message);  //or jo b text likha hoga bo message show hoga
            $('.welcome-screen').addClass('hidden'); //welcome screen hidden
            $('.main').removeClass('hidden');  //main screen hidden
        } else {//wrna error show krega
            $('#name-input').addClass('error'); // isme name-input naam ki id ko dhundna jis b element ke sath h 
        }
		
		
		
		
		
			});
			$('.play-icon').on('click', function() {
				toggleSong();//ye hmara function ka name h jisse hmara same code run hoga jo us function mai likha h
			});
	
	
	
	
            $('body').on('keypress', function(event) {
                if (event.keyCode == 32) {  //isse hm jb spacebar press krenge to hmara song pause play hoga
                  toggleSong(); 
                }
            });