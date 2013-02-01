$header
	<article>
		<header>
			<h2>
				{$lng['admin']['configfiles']['serverconfiguration']} &nbsp;
			</h2>
		</header>
		
		<div class="overviewadd">
            <a class="btn btn-success" href="{$linker->getLink(array('section' => 'configfiles', 'page' => 'configfiles'))}">{$lng['admin']['configfiles']['wizard']}</a>
		</div>

		<section class="fullform bradiusodd">
			<form action="{$linker->getLink(array('section' => 'configfiles'))}" method="get" enctype="application/x-www-form-urlencoded">
			<fieldset>
						<input type="hidden" name="s" value="$s" />
						<input type="hidden" name="page" value="$page" />

						<table class="table table-bordered table-striped">
							$distributions
						</table>
			</fieldset>
			</form>
		</section>
	</article>
$footer
