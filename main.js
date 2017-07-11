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
			
				 var songs = [{          //objects ka array
					'name': 'Alone',
					'artist': 'Marshmello',
					'album': 'Apple Music',
					'duration': '4:33',
				    'fileName': 'song1.mp3',
				    'image': 'alone.jpg'
				},
				{
					'name': 'Choo Lo',
					'artist': 'The Local Train',
					'album': 'Alas Ka Pedh',
					'duration': '4:13',
					'fileName': 'song2.mp3',
					'image': 'choolo.jpg'
				},
				{
					'name': 'Cheap Thrills',
					'artist': 'Sia',
					'album': 'This Is Acting',
					'duration': '3:44',
					'fileName': 'song3.mp3',
					'image': 'cheap.jpg'
				},
				{
					'name': 'Summer',
					'artist': 'Marshmello',
					'album': 'Joytime',
					'duration': '1:45',
					'fileName': 'song4.mp3',
					'image': 'summer.jpg'
				},
				{
					'name': 'Bhyanak Atma',
					'artist': 'Nuclea',
					'album': 'Raja Baja',
					'duration': '3:29',
					'fileName': 'song5.mp3',
					'image': 'nuclea.jpg'
				},
				{
					'name': 'Let Me Love You',
					'artist': 'DJ Snake Ft Justin Bieber',
					'album': 'Let Me Love You',
					'duration': '3:26',
					'fileName': 'song6.mp3',
					'image': 'love.jpg'
				},
				{
					'name': 'Closer',
					'artist': 'The Chainsmokers',
					'album': 'Closer',
					'duration': '4:21',
					'fileName': 'song7.mp3',
					'image': 'closer.jpg'
				},
				{
					'name': 'We Dont Talk Anymore',
					'artist': 'Charlie Puth',
					'album': 'Nine Track Mind',
					'duration': '3:37',
					'fileName': 'song8.mp3',
					'image': 'talk.jpg'
				},
				{
					'name': 'I Got You',
					'artist': 'Bebe Rexha',
					'album': 'Echo',
					'duration': '3:11',
					'fileName': 'song9.mp3',
					'image': 'bebe.jpg'
				},
				{
					'name': 'Jogi',
					'artist': 'Swastik The Band',
					'album': 'The Album',
					'duration': '6:12',
					'fileName': 'song10.mp3',
					'image': 'jogi.jpg'
				},
				{
					'name': 'Yeh Zindagi Hai',
					'artist': 'The Local Train',
					'album': 'Aalas Ka Pedh',
					'duration': '4:09',
					'fileName': 'song11.mp3',
					'image': 'zindagi.jpg'
				}]

	
	
	   
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
			
			
				function changeCurrentSongDetails(songObj) {
						$('.current-song-image').attr('src','img/' + songObj.image)
						$('.current-song-name').text(songObj.name)
						$('.current-song-album').text(songObj.album)
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
			
			
			function addSongNameClickEvent(songObj,position) { //isse koi b song play pause kr skte or song jha se pause hoga bhi se play hoga
			 var songName = songObj.fileName; // New Variable 
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
			changeCurrentSongDetails(songObj); // Function Call
			}
			});
			}
	
				
				window.onload = function() {
			    changeCurrentSongDetails(songs[0]);
				updateCurrentTime();//jb window load hogi to current time btayegA fir 0 se start hoga
				setInterval(function() {//isse hmara time hr second change hota rhega
				updateCurrentTime();
				},1000);
				
				
			
				
				 for(var i =0; i < songs.length; i++) {            
					 var obj = songs[i];
						var name = '#song' + (i+1);
						var song = $(name);
						song.find('.song-name').text(obj.name);
						song.find('.song-artist').text(obj.artist);
						song.find('.song-album').text(obj.album);
						song.find('.song-length').text(obj.duration);
						addSongNameClickEvent(obj,i+1);
					
				 }
				
				//addSongNameClickEvent(fileNames[0],1);
				//addSongNameClickEvent(fileNames[1],2);
				//addSongNameClickEvent(fileNames[2],3);
				//addSongNameClickEvent(fileNames[3],4);
				//addSongNameClickEvent(fileNames[4],5);
				
				
							
				//for (var i = 0; i < fileNames.length ; i++) {
				//	addSongNameClickEvent(fileNames[i],i+1)
				//} 
				
							$('#songs').DataTable({
							paging: false
							});
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
			
			
			
			
			
			
			
			
			
			