<?php 
/**
 * Name: Zippyshare Player Script
 * Version: 1.0, Last updated: April 24, 2020
 * Website: https://apicodes.com
 * Contact: Support@apicodes.com
 */
?>
<!DOCTYPE html>
<html>
<head>
	<title>Zippyshare Video Player - APICodes</title>
	<meta name="robots" content="noindex">
	<link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js"></script>
	<script type="text/javascript" src="https://ssl.p.jwpcdn.com/player/v/8.8.6/jwplayer.js"></script>
	<script type="text/javascript">jwplayer.key="64HPbvSQorQcd52B8XFuhMtEoitbvY/EXJmMBfKcXZQU2Rnn";</script>
	<style type="text/css" media="screen">html,body{padding:0;margin:0;height:100%}#apicodes-player{width:100%!important;height:100%!important;overflow:hidden;background-color:#000}</style>
</head>
<body>

<?php 
		error_reporting(0);
		
		$link = (isset($_GET['link'])) ? $_GET['link'] : 'https://www71.zippyshare.com/v/H6oOxEgL/file.html';

		$sub = (isset($_GET['sub'])) ? $_GET['sub'] : '';

		$poster = (isset($_GET['poster'])) ? $_GET['poster'] : 'https://demo.apicodes.com/the-boss-baby-poster.jpg';
		
		if ($link != '') {
 			
 				include_once 'config.php';

 				$domainServer = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://" . $_SERVER['SERVER_NAME'] . dirname($_SERVER['PHP_SELF']);

 				$sources = '[{"file":"'.$domainServer.'/download.php?url='.$link.'","type":"video\/mp4"}]';

				$result = '<div id="apicodes-player"></div>';

				$data = 'var player = jwplayer("apicodes-player");
							player.setup({
								sources: '.$sources.',
								aspectratio: "16:9",
								startparam: "start",
								primary: "html5",
								preload: "auto",
								image: "'.$poster.'",
							    captions: {
							        color: "#f3f368",
							        fontSize: 16,
							        backgroundOpacity: 0,
							        fontfamily: "Helvetica",
							        edgeStyle: "raised"
							    },
							    tracks: [{ 
							        file: "'.$sub.'", 
							        label: "English",
							        kind: "captions",
							        "default": true 
							    }]
							});
				            player.on("setupError", function() {
				              swal("Server Error!", "Please contact us to fix it asap. Thank you!", "error");
				            });
							player.on("error" , function(){
								swal("Server Error!", "Please contact us to fix it asap. Thank you!", "error");
							});';
							
				$packer = new Packer($data, 'Normal', true, false, true);

				$packed = $packer->pack();

				$result .= '<script type="text/javascript">' . $packed . '</script>';
			
				echo $result;

		} else echo 'Link not found!';
?>
</body>
</html>
