var main = function () {

        /* loading content of page not visible in the startup screen */


		var animationtime = 300;
        /*var height = $(".maintextgroup .currentabout").height();
        $("#kepem").css({"height" : height});*/

        var changePageContent = function (linktocontent) {
              $("#pagecontent").fadeOut(animationtime, function() {
                  $("#pagecontent").load(linktocontent, function() {
                      $("#pagecontent").fadeIn(animationtime);
                      $(".footer").fadeIn(animationtime);
                    })});
              $(".footer").fadeOut(animationtime);
        };



	$("#clicknyitooldal").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("nyitooldal.html");
	});

    $("#clickhirek").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("hirek.html");
	});

	$("#clicktagsag").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("tagsag.html");
	});

    $("#clickdokumentumok").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("dokumentumok.html");
	});

    $("#clickkutatocsoportok").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("kutatocsoportok.html");
	});

    $("#clickulesek").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("ulesek.html");
	});

    $("#clickpolanyidij").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("polanyidij.html");
	});

    $("#clicklogos").click(function () {
      $(".active").removeClass('active');
      $(this).addClass('active');
      changePageContent("logok.html");
	});


            $(".fancybox").fancybox();


    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
        $("#pagecontent").load("nyitooldal.html");
    });

  };


$(document).ready(main);
