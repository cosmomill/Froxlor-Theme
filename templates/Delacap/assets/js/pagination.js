/**
* Pagination
*
* @version     	$Id:$
* @author		Rene Kanzler <me (at) renekanzler (dot) com>
*/
;(function($){
		  
	$.fn.pagination = function()
	{

		var oPagination = $(this);
		var oPages = $(this).find('*');
		
		$(oPagination).empty();
		$(oPagination).append('<ul></ul>');
		
		$(oPages).each(function(index) {
			if($(this).is('strong')) {
				$('ul', oPagination).append('<li class="active"><a href="javascript:void(0)">' + $(this).text() + '</a></li>');
			} else {
				$('ul', oPagination).append('<li>' + $(this)[0].outerHTML + '</li>');
			}
		});
		
		$('ul li:first', oPagination).remove();
		$('ul li:last', oPagination).remove();

		return true;
	};
	
})(jQuery);
