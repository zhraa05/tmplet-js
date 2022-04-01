// var muneItm = document.getElementById("menu").getElementsByClassName("li");
// var had = document.getElementById("text")
// var btn = document.getElementById("zar")
// var myMmue = document.getElementById("menu")
// var conter = 1;
// for (i =0; i < muneItm.length ; i++){
//     muneItm[i].addEventListener("click", select ) ;
// }
// function select(){
//  had.innerHTML= this.innerHTML;
 
//  for (i =0; i < muneItm.length ; i++){
//  muneItm[i].classList.remove("selected")
// }this.claslist.add("selected")}
// btn.addEventListener("click", newItm)
// function newItm(){
//     myMmue.innerHTML += "<li>new line" + conter + "</li>"
//     conter++;
// }
// console,l(document.getElementsByTagName("p")[0].attributes)
// let myp = document.getElementsByTagName("p")[0]
// if(myp.hasAttribute(data-src)){
//     console.log("found")
// }
// else{
//     console.log(`not 'found'`)
// }
// التطبيق  الثاني

    jQuery(document).ready(function(){
        jQuery(".box-close").click(function(){
            // jQuery(this).parents(".box").slideUp();
            // jQuery(this).parents(".box").hide();
            jQuery(this).parents(".box").fadeOut();
        });
        jQuery(".answer").hide();
        jQuery(".question").click(function(){
            // jQuery(this).next(".answer").slideDown()
             jQuery(this).next(".answer").slideToggle()
        });
        jQuery(".faq .question").addClass(".pointer")
        jQuery(".question").append(' <span class="icon" style="float: left;">>></span>')
        jQuery("#mor").click(function(){
            jQuery("#placc-holdir").load("more.html .mor-itmes")
            return false
        });
    })

