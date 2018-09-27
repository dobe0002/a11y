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