/**
* Buttons
*
* @version     	$Id:$
* @author		Rene Kanzler <me (at) renekanzler (dot) com>
*/
;(function($){
		  
	$.fn.buttonGroup = function()
	{
		var oForm = $(this);
		
		if(oForm.size() == 0) {
			return true;
		}
		
		var oLinks = $('a', oForm);
		
		oForm.empty();
		oForm.append('<div class="btn-group"></div>');
		
		$(oLinks).each(function(index) {
			$(this).addClass('btn btn-mini');
			
			if($(this).attr('href').indexOf('action=delete') >= 0) {
				$(this).attr('rel', 'confirm');
			}
			
			$('.btn-group', oForm).append($(this)[0].outerHTML);
		});
		
		return true;
	};
	
})(jQuery);


/**
* @name     	toggleButton
*/
;(function($){
		  
	$.fn.toggleButton = function()
	{
		var oForm = $(this);
		
		if(oForm.size() == 0) {
			return true;
		}
		
		var oLink = $('a', oForm);
		
		var oText = oForm;
		$('a', oText).text('');
		oText.not('a');
		var sText = oText.text().replace(/(\[|\])/g, '');
		
		oForm.empty();
		oLink.addClass('btn btn-mini');
		oLink.text($.trim(sText));
		oLink.append('<i class="icon-share-alt"></i>');
		oForm.append(oLink[0].outerHTML);
		
		return true;
	};
	
})(jQuery);
