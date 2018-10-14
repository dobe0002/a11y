// Pull gist code via ajax
function getGistFile(t,a,i){$.ajax({url:"https://api.github.com/gists/"+t,method:"GET",dataType:"jsonp"}).done(function(t){var e=t.data.files[a].content;i(e)})}
/// Copy code from specified tabs and paste it into the prisim divs
function setCodeExamples(){var e="";$("*[data-language]").each(function(){var t=$(this).html();t=(t=t.replace(/</g,"&lt;")).replace(/>/g,"&gt;"),""!==(t=$.trim(t))&&(e+="<h3>"+$(this).attr("data-language-label")+"</h3>",e+='<pre class="'+$(this).attr("data-language")+' line-numbers"><code class="'+$(this).attr("data-language")+' line-numbers">'+t+"</code></pre>")}),$("#code_prisim").html(e),""==e&&$("#headPreview").hide(),setTimeout(function(){$(".code-toolbar").attr("tabindex","0").addClass("prismButtonListenerAdded"),$(document).on("click",".code-toolbar .toolbar-item a",function(){$(this).parents(".code-toolbar:first").focus()}),$(".code-toolbar .toolbar-item a").attr("tabindex","0").attr("href","javascript:void(0)").attr("role","button"),$(".code-toolbar").focusin(function(){$(this).find(".toolbar").css("opacity","1")}),$(".code-toolbar").focusout(function(){$(this).find(".toolbar").removeAttr("style")})},200)}
// Add a "full page preview links for embedded items"
function makeEmbeddPreviewLink(){var a="Open accessible preview in a new window";
// CodePen
$("[data-slug-hash]").each(function(){var t="https://codepen.io/"+$(this).attr("data-user")+"/debug/"+$(this).attr("data-slug-hash")+"/";$(this).after('<p><a href="'+t+'" target="_blank">'+a+"</a></p>"),$(".codePreviewContent").hide()}),
// jsFiddle
$("script[src*='jsfiddle']").each(function(){var t=$(this).attr("src").split("/"),e="https://"+t[2]+"/"+t[3]+"/"+t[4]+"/embedded/result/";$(this).after('<p><a href="'+e+'" target="_blank">'+a+"</a></p>"),$(".codePreviewContent").hide()}),
// jsBin
$("a.jsbin-embed, iframe[src*='jsbin']").each(function(){var t,e="https://output.jsbin.com/"+$(this).attr("src").split("/")[3];$(this).after('<p><a href="'+e+'" target="_blank">'+a+"</a></p>"),$(".codePreviewContent").hide()})}setCodeExamples(),makeEmbeddPreviewLink();
//# sourceMappingURL=code-min.js.map