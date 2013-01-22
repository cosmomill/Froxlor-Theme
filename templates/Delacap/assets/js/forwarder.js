/**
* Mail Forwarder
*
* @version     	$Id:$
* @author		Rene Kanzler <me (at) renekanzler (dot) com>
*/
;(function($){
		  
	$.fn.forwarder = function()
	{
		var oForm = $(this);
		
		if(oForm.size() == 0) {
			return true;
		}
		
		var oLinks = $('a', oForm);
		
		oForm.empty();
		oForm.append('<table id="mail_fwds" class="table table-bordered"></table>');
		
		$(oLinks).each(function(index) {
			if(index < (oLinks.size() - 1)) {
				$('#mail_fwds').append('<tr></tr>');
				$('#mail_fwds tr').last().append('<td>' + $(this).attr('title') + '</td>');
				$('#mail_fwds tr').last().append('<td>' + $(this)[0].outerHTML + '</td>');
			} else {
				$(this).addClass('btn btn-mini btn-success');
				$('#mail_fwds').after($(this)[0].outerHTML);
			}
		});
		
		return true;
	};
	
})(jQuery);
