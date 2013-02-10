$header
	<article class="login hide">
    
		<header class="loginheader">
            <img src="templates/Delacap/assets/img/alpha.gif" alt="Froxlor Server Management Panel" />
		</header>

		<section class="loginmsg">
        
            <if $update_in_progress !== ''>
                <div class="alert alert-error">
                    <a class="close" data-dismiss="alert">&times;</a>
                    {$update_in_progress}
                </div>
            </if>
            
            <if $successmessage != ''>
                <div class="alert alert-error">
                    <a class="close" data-dismiss="alert">&times;</a>
                    <h4 class="alert-heading">{$lng['success']['success']}</h4>
                    $successmessage
                </div>
            </if>
        
        	<if $message != ''>
                <div class="alert alert-error">
                    <a class="close" data-dismiss="alert">&times;</a>
                    <h4 class="alert-heading">{$lng['error']['error']}</h4>
                    $message
                </div>
            </if>
            
		</section>
        
		<section class="loginsec">
        
            <form class="form-inline" method="post" action="$filename" enctype="application/x-www-form-urlencoded">
                <div class="control-group">
                    <select class="sp100" name="language" id="language">$language_options</select>
                </div>
                
                <div class="control-group">
                    <div class="input-prepend input-append">
                        <if $settings['panel']['allow_preset'] == '1'>
                            <span class="add-on"><i data-placement="left" class="icon-user hasTooltip" data-original-title="{$lng['login']['username']}"></i></span><input type="text" size="15" placeholder="{$lng['login']['username']}" name="loginname" id="loginname" value="" class="input-login" tabindex="3" required/><a data-placement="right" class="btn width-auto login-help hasTooltip" href="$filename?action=forgotpwd" data-original-title="{$lng['login']['forgotpwd']}"><i title="{$lng['login']['forgotpwd']}" class="icon-question-sign"></i></a>
                        <else>
                            <span class="add-on"><i data-placement="left" class="icon-user hasTooltip" data-original-title="{$lng['login']['username']}"></i></span><input type="text" size="15" placeholder="{$lng['login']['username']}" name="loginname" id="loginname" value="" class="input-login" tabindex="3" required/><a data-placement="right" class="btn width-auto login-help" href="#"><i class="icon-question-sign"></i></a>
                        </if>                    
                    </div>
                </div>
                <div class="control-group">
                    <div class="input-prepend input-append">
                        <span class="add-on"><i data-placement="left" class="icon-lock hasTooltip" data-original-title="{$lng['login']['password']}"></i></span><input type="password" size="15" placeholder="{$lng['login']['password']}" name="password" id="password" class="input-login" tabindex="3" required/><button type="submit" class="btn btn-success">{$lng['login']['login']}</button>
                    </div>
                </div>
                <div class="clearfix">
                    <input type="hidden" name="send" value="send" />
                </div>
            </form>
            
        </section>

	</article>
$footer