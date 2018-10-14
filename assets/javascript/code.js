// Pull gist code via ajax


function getGistFile (gist, filename, cb) {
	$.ajax({
		url: 'https://api.github.com/gists/' + gist,
		method: 'GET',
		dataType: 'jsonp'
	}).done( function(gistdata) {
		var content = gistdata.data.files[filename].content;
		cb(content)
	})
}
	


/// Copy code from specified tabs and paste it into the prisim divs
function setCodeExamples(){

	

	var html="";
	$('*[data-language]').each(function(){
		var code=$(this).html();
		code=code.replace(/</g,"&lt;");
	  	code=code.replace(/>/g,"&gt;");
	  	code=$.trim(code);

	  	if(code!==""){
		  	html+="<h3>"+$(this).attr('data-language-label')+"</h3>";
		  	html+='<pre class="'+$(this).attr('data-language')+' line-numbers"><code class="'+$(this).attr('data-language')+' line-numbers">'+code+'</code></pre>';
		}
	});

    $('#code_prisim').html(html);
    if(html==""){
        $('#headPreview').hide();
	}
	
	setTimeout(function(){
		$('.code-toolbar').attr('tabindex','0').addClass('prismButtonListenerAdded');
		$(document).on('click','.code-toolbar .toolbar-item a',function(){
			$(this).parents('.code-toolbar:first').focus();
		})
		$('.code-toolbar .toolbar-item a').attr('tabindex','0').attr("href","javascript:void(0)").attr('role','button');
		$('.code-toolbar').focusin(function(){	
			$(this).find('.toolbar').css('opacity','1')
		})
		$('.code-toolbar').focusout(function(){
			$(this).find('.toolbar').removeAttr('style')
		})
	},200)
	

}



// Add a "full page preview links for embedded items"
function makeEmbeddPreviewLink(){
	var linkText="Open accessible preview in a new window";

	 // CodePen
  $('[data-slug-hash]').each(function(){
  	var href="https://codepen.io/"+$(this).attr('data-user')+"/debug/"+$(this).attr('data-slug-hash')+"/";
	  $(this).after('<p><a href="'+href+'" target="_blank">'+linkText+'</a></p>');
	  $('.codePreviewContent').hide();
  })

  // jsFiddle
  $("script[src*='jsfiddle']").each(function(){
  	var hrefArray=$(this).attr('src').split("/");
  	var href="https://"+hrefArray[2]+"/"+hrefArray[3]+"/"+hrefArray[4]+"/embedded/result/";
	  $(this).after('<p><a href="'+href+'" target="_blank">'+linkText+'</a></p>');
	  $('.codePreviewContent').hide();
  })

  // jsBin
  $("a.jsbin-embed, iframe[src*='jsbin']").each(function(){
  	var hrefArray=$(this).attr('src').split("/");
  	var href="https://output.jsbin.com/"+hrefArray[3];
	  $(this).after('<p><a href="'+href+'" target="_blank">'+linkText+'</a></p>');
	  $('.codePreviewContent').hide();
  })
}

setCodeExamples();
makeEmbeddPreviewLink();