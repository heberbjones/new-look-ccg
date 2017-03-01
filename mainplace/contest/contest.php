<html>

	<head>
	
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	
		<link type="text/css" rel="stylesheet" href="http://crystalcleangaming.com/crystal.css">
		
		<link rel="stylesheet" type="text/css" href="contest.css">
		
		<link rel="stylesheet" type="text/css" href="../mains/main.css">
		
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		
		<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
		
		<link href="https://fonts.googleapis.com/css?family=Indie+Flower|Raleway" rel="stylesheet">
		
		<link rel="shortcut icon" href="../mains/redfavicon.png">
		
		<title>C.C.G Contest</title>
		
	</head>
	
	<body id="body">
	
		<div id="lefter">
	
			<a href="../otherpgs/gamepg/games.html" title="The Games Page">
				
				<div>Games <i class="fa fa-gamepad"></i></div>
				
			</a>
			<br>
			<a href="../otherpgs/settingpg/setting.html" title="The Settings Page">
				
				<div>Settings <i class="fa fa-gear"></i></div>
				
			</a>
			<br>
			<a href="../otherpgs/settingpg/setting.html" title="Edit your Profile">
				
				<div>Profile <i class="material-icons">person</i></div>
				
			</a>
			<br>
			<a href="../index.html" title="The Home Page">
				
				<div>Home <i class="material-icons">home</i></div>
				
			</a>
		
		</div>
	
		<div class="row">
		
			<div id="header" class="col-md-12">
			
				<div class="row">
				
					<h2 class="jfs col-md-1"><i id="colbtn" class="fa fa-angle-left"></i></h2>
					
					<h1 id="logo" class="jfs col-md-4"><a href="http://crystalcleangaming.com" title="Crystal-Clean-Gaming.com"><img src="../pics/logo.png" alt="CCG Logo" width="300px"></a></h2>
					
				</div>
			
			</div>
		
		</div>	
		
		<div class="row">
		
			<div class="col-md-12 rales" id="sbmttdAnswr">
			
				<h2 class="redtitl">Entered Your Game!</h2>
				<BR>
				<?php
				
				$user = $_POST['user'];
				$info = $_POST['info'];
				$email = $_POST['email'];
				$linkem = $_POST['linktoaccnt'];
				$gitrepo = $_POST ['gitrepo'];
				$to = 'crystalcleangaming@gmail.com';
				$subject = 'Entered in contest';
				$sendmsg = $user . ' submitted ' . $gitrepo . ', and they said ' . $linkem . ' to linking their account.' . ' Here is the info they sent: ' . $info .  '. From: ' . $email;
				
				mail($to, $subject, $sendmsg, ' From: ' . $email);
				
				echo $user . ', submitted a link to their game, at ' . $gitrepo . '<br /> <br />'; 
				echo 'And they said ' . $linkem . ' to having a link to their account when the game starts.' . '<br /> <br />';
				echo 'This is the info they gave on their game: ' . '<br /> <br />';
				echo $info;
				
				
				?>
				
				
			
			</div>
		
		</div>
		
		<script src="../mains/main.js">
		</script>
		
		<script src="../mains/slide.js">
		</script>
		
	</body>
	
</html>