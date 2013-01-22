/**
* Prepare Topnavigation
*
* @version     	$Id:$
* @author		Rene Kanzler <me (at) renekanzler (dot) com>
*/
;(function($){
		  
	$.fn.prepareMenu = function()
	{

		var aDialog = new Array(
			'admin_settings.php?page=rebuildconfigs',
			'admin_index.php?page=change_theme',
			'admin_settings.php?page=updatecounters',
			'admin_index.php?page=change_language',
			'admin_index.php?page=change_password',
			'customer_index.php?page=change_theme',
			'customer_index.php?page=change_language',
			'customer_index.php?page=change_password'
		);
		
		var oNavigationMenu = $(this);
		
		$('.completeLink', oNavigationMenu).each(function(index) {
			if(index == 0) {
				$('a', this).removeClass().addClass('brand');
				$('a', this).removeAttr('target');
				$('a', this).text('');
				$('a', this).append('<img src="templates/Delacap/assets/img/alpha.gif" />');
				$('.pull-right').before($('a', this));
				$('.pull-right .btn-group').append('<a class="btn btn-info dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" rel="tooltip" data-placement="right"><i class="icon-user icon-white"></i> <span class="caret"></span></a>');
				$('.pull-right .btn-group').append('<ul id="overview" class="dropdown-menu" data-menu-id="' + index + '"></ul>');	
			} else {
				$('#topnav').append('<li class="divider-vertical"></li>');
				$('#topnav').append('<li class="dropdown"></li>');
				
				if($('a', this).is('a')) {
					$('a', this).removeClass().addClass('dropdown-toggle');
					$('a', this).removeAttr('target');
					$('#topnav .dropdown').last().append($('a', this)[0].outerHTML);
				} else {
					$('#topnav .dropdown').last().append('<a href="javascript:void(0)" class="dropdown-toggle">' + $(this).text() + '</a>');
				}
				
				$('#topnav .dropdown').last().append('<ul class="dropdown-menu" data-menu-id="' + index + '"></ul>');
			}
		});
		
		$('.navigationLinks', oNavigationMenu).each(function(index) {
			if(index == 0) {
				$('.pull-right .btn-group a').first().attr('title', $('li', this).first().text()).tooltip({animation: true});
			}
			
			$('li', this).each(function() {
				if(typeof($('a', this)[0]) == 'undefined') {
					$('.dropdown-menu[data-menu-id="' + index + '"]').append('<li><a href="">' + $(this).text() + '</a></li>');
					$('.dropdown-menu[data-menu-id="' + index + '"]').append('<li class="divider"></li>');
				} else {
					$('a', this).removeClass();
					$('a', this).removeAttr('target');
					
					if($('a', this).attr('href').indexOf('&s=') >= 0) {
						aLink = $('a', this).attr('href').split('&s=');
					} else {
						aLink = $('a', this).attr('href').split('?s=');
					}
					
					if($.inArray(aLink[0], aDialog) >= 0) {
						$('a', this).attr('rel', 'confirm');
					}
				
					$('.dropdown-menu[data-menu-id="' + index + '"]').append($(this)[0].outerHTML);
				}
			});
		});

		$('.dropdown-menu[data-menu-id="0"]').append('<li class="divider"></li>');
		$('.dropdown-menu[data-menu-id="0"]').append('<li><a href="javascript:void(0)" rel="about">Info</a></li>');
		
		return true;
	};
	
})(jQuery);