<tr>
	<td class="formlabeltd" style="line-height:33px;">
		<label for="name">{$title}</label>
	</td>
	<td>{$option}</td>
	<td>
		<if $activated == 1>
			<a class="btn btn-mini" alt="{$lng['admin']['configfiles']['serverconfiguration']}" href="$filename?page=overview&amp;part=$part&amp;s=$s"><i class="icon-pencil"></i></a>
		</if>
	</td>
</tr>
