<?php

$aliases['dev'] = array(
	'uri'=> 'jacob.ccistaging.com',
	'root' => '/home/staging/subdomains/jacobsonconstruction/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

	'ssh-options' => '-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'jacobsonconstruction.ca',
	'root' => '/home/jacobson/subdomains/live2016/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'jacobson',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

	'ssh-options' => '-p 37241'
);