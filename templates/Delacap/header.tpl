<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Default-Style" content="text/css" />
        <if $settings['panel']['no_robots'] == '0'>
            <meta name="robots" content="noindex, nofollow, noarchive" />
            <meta name="GOOGLEBOT" content="nosnippet" />
        </if>
        <link rel="stylesheet" href="templates/Delacap/assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="templates/Delacap/assets/select2/css/select2.css">
        <link rel="stylesheet" href="templates/Delacap/assets/css/main.css">
        <link rel="icon" href="templates/Delacap/assets/img/favicon.ico" type="image/x-icon" />
        <title><if isset($userinfo['loginname']) && $userinfo['loginname'] != ''>{$userinfo['loginname']} - </if>Froxlor Server Management Panel</title>
    </head>
    <body>
	
	<ul id="navigationMenu"><if isset($navigation)>{$navigation}</if></ul>
	
    <if isset($userinfo['loginname'])>
    
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                	<div class="nav-collapse">
    
                        <ul class="pull-right">
                             <div class="btn-group">
                             </div>
                        </ul><!-- /class="pull-right" -->

                        <ul id="topnav" class="nav">
                        </ul><!-- /id="topnav" -->
                        
                	</div><!-- /nav-collapse -->
                </div><!-- /container -->
            </div><!-- /navbar-inner -->
        </div><!-- /navbar -->
    
    </if>
    
    <if isset($userinfo['loginname'])>
        <div class="container">
            <div class="content">
    <else>
        <div class="container">
        <div class="loginpage">
    </if>