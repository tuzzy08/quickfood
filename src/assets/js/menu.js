/* ==============================================
	Menu
=============================================== */
function toggleHandler(e){
			e.preventDefault()
		this.target.classList.contains("active")===!0?this.classList.remove("active"):this.classList.add("active")}

$("a.open_close").on("click",function(){
	$(".main-menu").toggleClass("show")
	$(".layer").toggleClass("layer-is-visible")})

$("a.show-submenu").on("click",function(){$(this).next().toggleClass("show_normal")})
$("a.show-submenu-mega").on("click",function(){$(this).next().toggleClass("show_mega")})
$(window).width()<=600&&$("a.open_close").on("click",function(){$(".cmn-toggle-switch").removeClass("active")});for(var toggles=document.querySelectorAll(".cmn-toggle-switch"),i=toggles.length-1;i>=0;i--){var toggle=toggles[i];toggleHandler(toggle)}

