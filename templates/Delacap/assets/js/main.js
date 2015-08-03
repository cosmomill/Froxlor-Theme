$.extend({
  getUrlVars: function()
  {
    var vars = [],
		hash,
		hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

$(document).ready(function()
{
	// prepare the navigation menu
	$('#navigationMenu').prepareMenu();
	
	// pagination
	$('.pagination').pagination();

	// button group
	$('label[for="account_yes"]').parent().next().buttonGroup();
	
	// toggle button
	$('label[for="mail_catchall"]').parent().next().toggleButton();
	
	// email forwarder
	$('label[for="mail_fwds"]').parent().next().forwarder();
	
	// make rel="external" links open in a new window
	$("a[rel='external']").attr('target', '_blank');
	
		// tooltip
	$('.hasTooltip').tooltip({});
	
	// language menu (select2)
	function languageFlag(language)
	{
		// hide missing flags
		$("<img src='templates/Delacap/assets/img/flags/" + encodeURIComponent(htmlentities(language.text)) + ".png'/>").error(function(){
			$("img[src='" + $(this).attr('src') + "']").hide();
		});

		return "<img class='flag' src='templates/Delacap/assets/img/flags/" + encodeURIComponent(htmlentities(language.text)) + ".png'/>" + language.text;
	}
	
    $('#language').select2({
		formatResult: languageFlag,
		formatSelection: languageFlag,
		escapeMarkup: function(m) { return m; }
    });
	
	$('#dialogmodal').on('show', function () {
		$('#def_language').select2({
			formatResult: languageFlag,
			formatSelection: languageFlag,
			escapeMarkup: function(m) { return m; }
		});
		
		$('.modal-body').css('overflow-y', 'hidden');
	});
	
	// show buttons on full overview
	if(window.location.search.indexOf('part=all') >= 0)
	{
		$('input.full-overview').show();
	}

	// Auto-select next field in configfile - wizard
	$('#config_distribution').change(function (){
		window.location.href=window.location.href + '&distribution=' + this.options[ this.selectedIndex ].value;
	});
	$('#config_service').change(function (){
		window.location.href=window.location.href + '&service=' + this.options[ this.selectedIndex ].value;
	});
	$('#config_daemon').change(function (){
		window.location.href=window.location.href + '&daemon=' + this.options[ this.selectedIndex ].value;
	});

	// Back-button
	$('#yesnobutton').click(function() {
		history.back();
	});
	
	// close modal dialog on submit
	$('#dialogmodal input:submit').live("click", function() {
		$('#dialogmodal').modal('hide');
	});

	// domainSpecialDialog (see 0.9.27-rc1) greetings from James Bond
	var domainSpecialDialog = $('#speciallogwarningpopup').modal({
				backdrop: true,
				show: false
			});			
	if(domainSpecialDialog.length == 1)
	{
		$('#delete_stats').keyup(function(event)
		{
			if($(this).val().toLowerCase() != $('#delete_statistics_str').val().toLowerCase())
			{
				$('#speciallogyesbutton').attr("disabled", "disabled");
			}
			else
			{
				$('#speciallogyesbutton').removeAttr("disabled");
			}
		});
		
		$('#speciallogyesbutton').click(function()
		{
			if($('input[name=speciallogfile]').prop("checked") != false)
			{
				$('input[name=speciallogfile]').attr("checked", false);
			}
			else
			{
				$('input[name=speciallogfile]').attr("checked", true);
			}
			$("#speciallogverified").val("1");
			
			$(domainSpecialDialog).modal("hide");
		});

		
		$('input[name=speciallogfile]').click(function()
		{
			$(domainSpecialDialog).modal("show");
			return false;
		});
	}
	

	// Sort for tables
	$('span[field]').each(function(index, element)
	{
		var th = $(element).parents("th"),
			active = false;	
			
		if($(element).attr("field") == $.getUrlVar('sortfield'))
		{
			$(element).addClass($.getUrlVar('sortorder') == "asc" ? "asc" : "desc");
			active = true;	
		}
		
		
		if($(th).hasClass('multi'))
		{
			$(element).parents("span").click(function(e)
			{
				window.location.href = $(element).attr(active ? ($.getUrlVar('sortorder') == "asc" ? "desc" : "asc") : "asc");
				return false;
			});
		}
		else
		{
			$(th).click(function(e)
			{
				window.location.href = $(element).attr(active ? ($.getUrlVar('sortorder') == "asc" ? "desc" : "asc") : "asc");
				return false;
			});
		}
		
		$(th).hover(
			function()
			{
				$(this).addClass("hover");
			},
			function()
			{
				$(this).removeClass("hover");
			}
		);
	});


	// index stats
	$("div.progress.used").each(function(index, element)
	{
		var used = $(element).attr('used'),
			total = $(element).attr('total'),
			w = (used != 0) ? 50 : 0;
		
		//console.log($.isNumeric(total));
		if($.isNumeric(total))
		{
			w = Math.round((100 / total) * used);
		}
		else
		{
			$(element).addClass('unlimited progress-success');
		}
		
		$(element).html('<div class="bar" style="width: '+w+'%;"></div>');
	});


	bindSubmitForm(false);
	
	// catch all submit buttons, to provide a dialog for errors
	$("a[rel=confirm]").click(function(e){
		$("#dialogmodal").load($(this).attr("href"),
			function()
			{
				$('#dialogmodal').modal({
				  backdrop: true,
				  show: true
				});
				bindSubmitForm(true);
			});
		return false;
	});

	// About Dialog
	$("a[rel=about]").click(function(e){
		$('#dialogabout').modal({
		  backdrop: true,
		  show: true
		});
		return false;
	});



	$("ul#topnav").menu({
		beforeShow: function(a, b)
		{
			b.css({left: ($(window).width()-a.offset()['left'] < b.width()) ? a.width()-b.width() : 0});
		}
	});


	// set focus on username-field if on loginpage
	$(".login").fadeIn("slow", function(){
		$("#loginname").focus();
		});

	


	// for manage_packages.tpl
	$('#manage_packages_actions > li > a').click(function()
	{
		$('#manage_packages_form > input[type="submit"]').attr('name', $(this).attr('href')).click();
		return false;
	});
	
	
		
	$("div[style='color:red']").replaceWith(function(){
			return '<span class="label label-important">' + $(this).html() + '</span>';
		});

	$("div.jqtransform").jqTransform();

	$().tab();
	$().alert('close');
	$('[rel=tooltip]').tooltip({
		animation: true,
		placement: 'top'
		});
		
	
	$(function () {
	  $("a[rel=popover]")
		.popover({
		  offset: 10,
		  html: true
		})
		.click(function(e) {
		  e.preventDefault()
		})
	})

	// search field
	var divInput = $('div.input');
	$('input#s').bind('focus',
		function()
		{
			divInput.addClass('focus');	
		}).bind('blur',
		function()
		{
			divInput.removeClass('focus');
		}
		);
});




function bindSubmitForm(modal)
{
	$("form[rel=submit]").bind(
		'submit',
		function()
		{
			function showResponse(response, statusText)
			{
				if(statusText == 'success')
				{
					if(response.error == 'true')
					{
						$('#kontaktform').fadeTo("fast", 1);
						showMsg(response.msg);
					}
					else
					{
						$('#kontaktformholder').html(response.msg);
					}
				}
				$('#kontaktformsubmit').removeClass("wait");
			
			}
			
			$(this).ajaxSubmit({
				success: function(response, statusText, xhr, form)
				{
					if(statusText == 'success')
					{
						switch (true)
						{
							case (response.indexOf('dc="dialog"') >= 1):
								if(modal)
								{
									$('#dialogmodal').modal('show');
								}
								break;
							
							case (response.indexOf('dc="dialogerror"') >= 1):
								$(".notifications").notify({
									message: { text: $("p", $(response)).text() },
									type: 'danger',
									fadeOut: { enabled: false }
								}).show();
								break;
								
							case (response.indexOf('dc="dialogsuccess"') >= 1):
								$(".notifications").notify({
									message: { text: $("a", $(response)).text() },
									type: 'success',
									fadeOut: { enabled: true, delay: 1000 },
									onClosed: function(){window.location.href = $("a", $(response)).attr('href')}
								}).show();
								break;
							
							case (response.indexOf('<head>') >= 1):
								window.history.back();
								break;
								
							default:
								var page = $("input[name=page]", form).attr('value');
								var target = form.attr('action');
								var action = $("input[name=action]", form).attr('value');
								var id = $("input[name=id]", form).attr('value');
								
								if(target.indexOf('s=') == -1)
								{
									target = target + '?s=' + $("input[name=s]", form).attr('value') + '&page=' + page;
								}
								
								if(page && target.indexOf('page=' + page) == -1)
								{
									target = target + '&page=' + page;
								}
								
								if(typeof(action) != 'undefined')
								{
									target = target + '&action=' + action;
								}
								
								if(typeof(id) != 'undefined')
								{
									target = target + '&id=' + id;
								}
								
								window.location.href = target;
								
								break;
						};
					}
				}
				});
			return false;
		});
}