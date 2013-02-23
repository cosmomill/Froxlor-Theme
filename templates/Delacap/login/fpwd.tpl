$header
	<article class="login hide">
    
		<header class="loginheader">
            <img src="templates/Delacap/assets/img/alpha.gif" alt="Froxlor Server Management Panel" />
		</header>
        
		<section class="loginmsg">

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
                    <div class="input-prepend input-append">
                        <span data-placement="left" class="add-on hasTooltip" data-original-title="{$lng['login']['username']}"><i class="icon-user"></i></span><input type="text" size="15" placeholder="{$lng['login']['username']}" name="loginname" id="loginname" value="" class="input-login" tabindex="3" required/><a data-placement="right" class="btn width-auto hasTooltip" href="index.php" data-original-title="{$lng['login']['backtologin']}"><i class="icon-repeat"></i></a>
                    </div>
                </div>
                <div class="control-group">
                    <div class="input-prepend input-append">
                        <span data-placement="left" class="add-on hasTooltip" data-original-title="{$lng['login']['email']}"><i class="icon-envelope"></i></span><input type="text" size="15" placeholder="{$lng['login']['email']}" name="loginemail" id="loginemail" class="input-login" tabindex="3" required/><button data-placement="right" type="submit" class="btn btn-inverse hasTooltip" data-original-title="{$lng['login']['remind']}"><i class="icon-arrow-right icon-white"></i></button>
                    </div>
                </div>
                <div class="clearfix">
                    <input type="hidden" name="action" value="$action" />
                    <input type="hidden" name="send" value="send" />
                </div>
            </form>
        </section>
        
	</article>
$footer