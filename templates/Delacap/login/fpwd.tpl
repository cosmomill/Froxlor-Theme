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
                        <span class="add-on"><i data-placement="left" class="icon-user hasTooltip" data-original-title="{$lng['login']['username']}"></i></span><input type="text" size="15" placeholder="{$lng['login']['username']}" name="loginname" id="loginname" value="" class="input-fpwd" tabindex="3" required/><a data-placement="right" class="btn width-auto fpwd-back" href="index.php" data-original-title="{$lng['login']['backtologin']}">{$lng['login']['backtologin']}</a>
                    </div>
                </div>
                <div class="control-group">
                    <div class="input-prepend input-append">
                        <span class="add-on"><i data-placement="left" class="icon-envelope hasTooltip" data-original-title="{$lng['login']['email']}"></i></span><input type="text" size="15" placeholder="{$lng['login']['email']}" name="loginemail" id="loginemail" class="input-fpwd" tabindex="3" required/><button type="submit" class="btn btn-inverse">{$lng['login']['remind']}</button>
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