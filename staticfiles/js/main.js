$(document).ready(function () {	
	//用于手机端搜索条
$(".mb-header .seach").click(function(event) {
    if ($(this).hasClass('on')) {
        $(".headerseach").stop().slideUp()
        $(this).removeClass('on')
    } else {
        $(this).addClass('on')
        $(".headerseach").stop().slideDown()
    }
});

	$(".pc-header .h-top .language").click(function () {
		if ($(this).hasClass("on")) {
			$(".language-box").removeClass("on")
			$(this).removeClass("on")
			$(".language-box").fadeOut()
		} else {
			$(this).addClass("on")
			$(".language-box").removeClass("on")
			$(".language-box").fadeIn()
		}
	})
	$(".lan").click(function () {
		if ($(this).hasClass("on")) {

			$(this).removeClass("on")
			$(".language-box").removeClass("on")
			$(".language-box").fadeOut()
		} else {
			$(this).addClass("on")
			$(".language-box").addClass("on")
			$(".language-box").fadeIn()
		}
	})
	$(".pc-header .seach").click(function () {
		$(".seac-box").fadeIn()
	})
	$(".seac-box span.clear").click(function () {
		$(".seac-box").fadeOut()
	})

//2023-02-21 解决下拉菜单鼠标移动后生效过快的问题。

	// var stime = null
	// $(".h-close").click(function (e) {
	// 	e.stopPropagation()
	// 	e.preventDefault()
	// 	$(".pc-header .h-bot .nav .li .tit").siblings().stop().hide()
	// 	$(".h-close").hide()
	// })

	// $(".language-box .close, .language-box .mak").click(function () {
	// 	$(".language-box").fadeOut()
	// 	$(".pc-header .h-top .language").removeClass("on")
	// })
	// $('.pc-header .h-bot .nav .li.pro').hover(function () {
	// 	var this_ = $(this)
	// 	stime = setTimeout(function () {
	// 		this_.siblings().find(" .tit").siblings().stop().hide()
	// 		this_.find('.pord-nav').stop().fadeIn();

	// 		$(".h-close").show()
	// 	}, 250)

	// }, function () {
	// 	clearTimeout(stime)
	// 	$(this).find('.pord-nav').stop().hide();
	// 	$(".h-close").hide()
	// })

	// $('.pord-nav .left .pli').eq(0).addClass('cur');
	// $('.pord-nav .left .pli').eq(0).find('.porbox').show();

	// $('.pord-nav .left .pli').hover(function () {
	// 	var _this = $(this);
	// 	var i = _this.index();
	// 	if (i != $('.pord-nav .left .pli.cur').index()) {
	// 		_this.addClass('cur').siblings().removeClass('cur');
	// 		$('.pord-nav .left .pli .porbox').stop().hide();
	// 		_this.find('.porbox').stop().fadeIn();
	// 	}
	// })


	// $('.pc-header .h-bot .nav .li.sol').hover(function () {
	// 	var this_ = $(this)
	// 	stime = setTimeout(function () {
	// 		console.log(1)
	// 		this_.siblings().find(" .tit").siblings().stop().hide()
	// 		this_.find('.sol-nav').stop().fadeIn();

	// 		$(".h-close").show()
	// 	}, 250)

	// }, function () {
	// 	clearTimeout(stime)
	// 	$(this).find('.sol-nav').stop().hide();
	// 	$(".h-close").hide()
	// })
	// $('.sol-nav .left .sli').eq(0).addClass('cur');
	// $('.sol-nav .left .sli').eq(0).find('.solbox').show();
	// $('.sol-nav .left .sli').hover(function () {
	// 	var _this = $(this);
	// 	var i = _this.index();
	// 	if (i != $('.sol-nav .left .sli.cur').index()) {
	// 		_this.addClass('cur').siblings().removeClass('cur');
	// 		$('.sol-nav .left .sli .solbox').stop().hide();
	// 		_this.find('.solbox').stop().fadeIn();
	// 	}
	// })


	// $('.pc-header .h-bot .nav .li.sup').hover(function () {
	// 	var this_ = $(this)
	// 	stime = setTimeout(function () {
	// 	   this_.siblings().find(" .tit").siblings().stop().hide()
	// 	   this_.find('.supp-nav').stop().fadeIn();

	// 		$(".h-close").show()
	// 	}, 250)
	   
	// }, function () {
	// 	clearTimeout(stime)
	// 	$(this).find('.supp-nav').stop().hide();
	// 	$(".h-close").hide()
	// })
	// $('.supp-nav .left1 .pli').eq(0).addClass('cur');
	// $('.supp-nav .left1 .pli').eq(0).find('.porbox').show();
	// $('.supp-nav .left1 .pli').eq(0).find('.porbox').find(".left").find('.pli2').eq(0).addClass("cur")
	// $('.supp-nav .left1 .pli').eq(0).find('.porbox').find(".left").find('.pli2').eq(0).find(".list").show();
	// $('.supp-nav .left1 .pli').hover(function () {
	// 	$('.supp-nav .left2  .pli2').removeClass('cur')
	// 	var _this = $(this);
	// 	var i = _this.index();
	// 	if (i != $('.sol-nav .left1 .pli.cur').index()) {
	// 		_this.addClass('cur').siblings().removeClass('cur');
	// 		$('.supp-nav .left1 .pli .porbox ').stop().hide();
	// 		_this.find('.porbox').stop().fadeIn();
	// 	}
	// })
	// $('.supp-nav .left2  .pli2').hover(function () {
	// 	var _this = $(this);
	   
	// 	var i = _this.index();
	// 	console.log($('.supp-nav  .left2 .pli2.cur').index())
	// 	if (i != $('.supp-nav  .left2 .pli2.cur').index()) {
		   
	// 		_this.addClass('cur').siblings().removeClass('cur');
	// 		$('.supp-nav .left2 .pli2 .list ').stop().hide();
	// 		_this.find('.list').stop().fadeIn();
	// 	}
	// })


	// $('.pc-header .h-bot .nav .li.par').hover(function () {
	// 	var this_ = $(this)
	// 	stime = setTimeout(function () {
	// 		this_.siblings().find(" .tit").siblings().stop().hide()
	// 		this_.find('.par-nav').stop().fadeIn();

	// 		$(".h-close").show()
	// 	}, 250)
	 
	// }, function () {
	// 	clearTimeout(stime)
	// 	$(this).find('.par-nav').stop().hide();
	// 	$(".h-close").hide()
	// })
	// $('.par-nav .left .pli').eq(0).addClass('cur');
	// $('.par-nav .left .pli').eq(0).find('.parbox').show();
	// $('.par-nav .left .pli').hover(function () {
	// 	var _this = $(this);
	// 	var i = _this.index();
	// 	if (i != $('.par-nav .left .pli.cur').index()) {
	// 		_this.addClass('cur').siblings().removeClass('cur');
	// 		$('.par-nav .left .pli .parbox').stop().hide();
	// 		_this.find('.parbox').stop().fadeIn();
	// 	}
	// })

	var stime = null
	var timer = null;
	$(".h-close").click(function (e) {
		e.stopPropagation()
		e.preventDefault()
		$(".pc-header .h-bot .nav .li .tit").siblings().stop().hide()
		$(".h-close").hide()
	})

	$(".language-box .close, .language-box .mak").click(function () {
		$(".language-box").fadeOut()
		$(".pc-header .h-top .language").removeClass("on")
	})
	$('.pc-header .h-bot .nav .li.pro').hover(function () {
		var this_ = $(this)
		stime = setTimeout(function () {
			this_.siblings().find(" .tit").siblings().stop().hide()
			this_.find('.pord-nav').stop().fadeIn();

			$(".h-close").show()
		}, 250)

	}, function () {
		clearTimeout(stime)
		$(this).find('.pord-nav').stop().hide();
		$(".h-close").hide()
	})

	$('.pord-nav .left .pli').eq(0).addClass('cur');
	$('.pord-nav .left .pli').eq(0).find('.porbox').show();

	$('.pord-nav .left .pli').hover(function () {
		var _this = $(this);
		var i = _this.index();
		timer = setTimeout(function () {
			if (i != $('.pord-nav .left .pli.cur').index()) {
				_this.addClass('cur').siblings().removeClass('cur');
				$('.pord-nav .left .pli .porbox').stop().hide();
				_this.find('.porbox').stop().fadeIn();
			}
		}, 300);
	}, function () {
		clearTimeout(timer)
	})


	$('.pc-header .h-bot .nav .li.sol').hover(function () {
		var this_ = $(this)
		stime = setTimeout(function () {
			console.log(1)
			this_.siblings().find(" .tit").siblings().stop().hide()
			this_.find('.sol-nav').stop().fadeIn();

			$(".h-close").show()
		}, 250)

	}, function () {
		clearTimeout(stime)
		$(this).find('.sol-nav').stop().hide();
		$(".h-close").hide()
	})
	$('.sol-nav .left .sli').eq(0).addClass('cur');
	$('.sol-nav .left .sli').eq(0).find('.solbox').show();
	$('.sol-nav .left .sli').hover(function () {
		var _this = $(this);
		var i = _this.index();
		timer = setTimeout(function () {
			if (i != $('.sol-nav .left .sli.cur').index()) {
				_this.addClass('cur').siblings().removeClass('cur');
				$('.sol-nav .left .sli .solbox').stop().hide();
				_this.find('.solbox').stop().fadeIn();
			}
		}, 300);
	}, function () {
		clearTimeout(timer)
	})


	$('.pc-header .h-bot .nav .li.sup').hover(function () {
		var this_ = $(this)
		stime = setTimeout(function () {
			this_.siblings().find(" .tit").siblings().stop().hide()
			this_.find('.supp-nav').stop().fadeIn();

			$(".h-close").show()
		}, 250)

	}, function () {
		clearTimeout(stime)
		$(this).find('.supp-nav').stop().hide();
		$(".h-close").hide()
	})
	$('.supp-nav .left1 .pli').eq(0).addClass('cur');
	$('.supp-nav .left1 .pli').eq(0).find('.porbox').show();
	$('.supp-nav .left1 .pli').eq(0).find('.porbox').find(".left").find('.pli2').eq(0).addClass("cur")
	$('.supp-nav .left1 .pli').eq(0).find('.porbox').find(".left").find('.pli2').eq(0).find(".list").show();
	$('.supp-nav .left1 .pli').hover(function () {
		$('.supp-nav .left2  .pli2').removeClass('cur')
		var _this = $(this);
		var i = _this.index();
		timer = setTimeout(function () {
			if (i != $('.sol-nav .left1 .pli.cur').index()) {
				_this.addClass('cur').siblings().removeClass('cur');
				$('.supp-nav .left1 .pli .porbox ').stop().hide();
				_this.find('.porbox').stop().fadeIn();
			}
		}, 300);
	}, function () {
		clearTimeout(timer)
	})

	$('.supp-nav .left2  .pli2').hover(function () {
		var _this = $(this);

		var i = _this.index();
		console.log($('.supp-nav  .left2 .pli2.cur').index())

		timer = setTimeout(function () {
			if (i != $('.supp-nav  .left2 .pli2.cur').index()) {

				_this.addClass('cur').siblings().removeClass('cur');
				$('.supp-nav .left2 .pli2 .list ').stop().hide();
				_this.find('.list').stop().fadeIn();
			}
		}, 300);
	}, function () {
		clearTimeout(timer)
	})


	$('.pc-header .h-bot .nav .li.par').hover(function () {
		var this_ = $(this)
		stime = setTimeout(function () {
			this_.siblings().find(" .tit").siblings().stop().hide()
			this_.find('.par-nav').stop().fadeIn();

			$(".h-close").show()
		}, 250)

	}, function () {
		clearTimeout(stime)
		$(this).find('.par-nav').stop().hide();
		$(".h-close").hide()
	})
	$('.par-nav .left .pli').eq(0).addClass('cur');
	$('.par-nav .left .pli').eq(0).find('.parbox').show();
	$('.par-nav .left .pli').hover(function () {
		var _this = $(this);
		var i = _this.index();
		timer = setTimeout(function () {
			if (i != $('.par-nav .left .pli.cur').index()) {
				_this.addClass('cur').siblings().removeClass('cur');
				$('.par-nav .left .pli .parbox').stop().hide();
				_this.find('.parbox').stop().fadeIn();
			} 
		}, 300);
	}, function () {
		clearTimeout(timer)
	})

//2023-02-21 end

	$(".mune").click(function () {
		if ($(this).hasClass("on")) {
			$(this).removeClass("on")
			$(".m-nav").stop().fadeOut();
			$(".three-li").stop().fadeOut();
			$(".tow-li").stop().fadeOut();
		} else {
			$(this).addClass("on")
			$(".m-nav").stop().fadeIn();
			$(".three-li").stop().fadeOut();
			$(".tow-li").stop().fadeOut();
		}

	})
	$(".m-nav .nav  .li").click(function () {
		$(this).find(".tow-li").stop().fadeIn();
	})
	$(".m-nav .nav .tow-li  .li-top1 .left").click(function (e) {
		e.stopPropagation()
		e.preventDefault()
		$(".tow-li").stop().fadeOut();
	})
	$(".m-nav .nav  .lis").click(function () {
		$(this).find(".three-li").stop().fadeIn();
	})
	$(".m-nav .nav .three-li  .li-top2 .left").click(function (e) {
		e.stopPropagation()
		e.preventDefault()
		$(".three-li").stop().fadeOut();
	})
	$(".m-nav .nav .close").click(function () {
		$(".three-li").stop().fadeOut();
		$(".tow-li").stop().fadeOut();
		$(".m-nav").stop().fadeOut();
		$(".mune").removeClass("on")
	})
/*
	$("#header a").click(function (e) {
		e.preventDefault()
		var src = $(this).attr("href")
		console.log(src)
		if (src == "javascript:;") {
			e.preventDefault()
		} else {
			src = src.substring(1)
			var newhref = window.location.protocol + "//" + window.location.host  + src

			window.location.href = newhref
		}

	})*/

	if ($(window).width() > 1024) {
		$(window).scroll(function () {
			var before = $(window).scrollTop();
			if (before > 0) {
				$(".pc-header").addClass("scroll")
				$("body").addClass("scroll")
				$(".language-box").addClass("on")
				// $(".pc-header .h-top").animate({
				//	 height: "4px"
				// })
			} else {
				$(".pc-header").removeClass("scroll")
				$("body").removeClass("scroll")
				$(".language-box").removeClass("on")
				// $(".pc-header .h-top").animate({
				//	 height: "75px"
				// })
			}
		})
	}



})

$(document).ready(function () {

		$(".kf").click(function () {
			$(".kf-doil").fadeIn()
		   
		})

		$(".kf-doil .close,.kf-doil .mak").click(function () {
			$(".kf-doil").fadeOut()
		})
		if ($(window).width() < 768) {
			$("footer .footer-top .foot-nav .li .tit").click(function (e) {
				e.preventDefault()
				if ($(this).hasClass("on")) {
					$(this).removeClass("on")
					$(this).siblings().stop().slideUp()
				} else {
					$(this).addClass("on")
					$(this).siblings().stop().slideDown()
					$(this).parents().siblings().find(" .tit").removeClass("on")
					$(this).parents().siblings().find(" .sub-nav").stop().slideUp()
				}
			})
		}
		/*
		$("#footer a").click(function (e) {
			e.preventDefault()
			var src = $(this).attr("href")
			if (src == "javascript:;") {
				e.preventDefault()
			} else {
				src = src.substring(1)
				var newhref = window.location.protocol + "//" + window.location.host  + src
				window.location.href = newhref
			}
		})
		*/


		$(".mb-footer .li").click(function () {
			$(this).addClass('on').siblings().removeClass('on')
			$(this).find(".tow-li").stop().fadeIn();
			$(this).siblings().find(".tow-li").stop().fadeOut()
			$(".bgmak").fadeIn();
		})
		$(".mb-footer .li .tow-li  .li-top1 .left").click(function (e) {
			e.stopPropagation()
			e.preventDefault()
			$(".tow-li").stop().fadeOut();
			$(".bgmak").fadeOut()
		})
		$(".mb-footer .lis").click(function () {
			$(this).find(".three-li").stop().fadeIn();
		})
		$(".mb-footer .li .three-li  .li-top2 .left").click(function (e) {
			e.stopPropagation()
			e.preventDefault()

			$(".three-li").stop().fadeOut();
		})
		$(".mb-footer .li .close,.bgmak").click(function (e) {
			e.stopPropagation()
			e.preventDefault()
			$(".tow-li").stop().fadeOut();
			$(".three-li").stop().fadeOut();
			$(".mb-footer .li").removeClass('on')
			$(".bgmak").fadeOut()
		})

	$(window).scroll(function () {
		var tops = ($(window).scrollTop());
		if ($("div").hasClass("adds-nav")) {
			var wraps2 = $(".adds-nav").offset().top;
			if (wraps2 >= tops) {
				$(".adds-nav .wr").removeClass('fixed');
				$(".pc-header").removeClass('fixed');
			} else if (wraps2 <= tops) {
				$(".adds-nav .wr").addClass('fixed');
				$(".pc-header").addClass('fixed');
			};
		}
	})
	getnav($(".pordw"))
})

function videoClick(el) {
	if(el[0]==undefined){return;}
	var vidcontainer = $(".vidcontainer"),
		video = $(".vidcontainer video"),
		videoWrap = $('.vidcontainer iframe');
	el.delegate(".play", "click", function (ev) {
		ev.stopPropagation()
		ev.preventDefault()
		var _this = $(this);
		var vid = _this.data("src");
		var link = _this.data('link');
		// ev.preventDefault();
		if (link) {
			videoWrap.attr('src', link);
			vidcontainer.fadeIn();
			videoWrap.stop().show();
			video.stop().hide();
			return;
		} else if (vid) {
			video.attr("src", vid);
			vidcontainer.fadeIn();
			video.get(0).play();
			videoWrap.stop().hide();
			video.stop().show();
		}


	})
	$(".vidcontainer .closevid,.vidcontainer .mask").on("click", function (ev) {
		ev.stopPropagation();
		if (!$(ev.target).hasClass("video")) {
			video.get(0).pause();
			vidcontainer.fadeOut(function () {
				video.attr("src", "");
				videoWrap.attr('src', '');
				videoWrap.stop().show();
				video.stop().show();
			})
		}
	})

	// $(".adds-nav a").on("click", function (e) {
	//	 e.preventDefault()
	//	 e.stopPropagation()
	//	 var index = $(this).index();
	//	 var top = $(".pordw").eq(index).offset().top - 80;

	//	 $("body,html").animate({
	//		 scrollTop: top
	//	 }, 1000);
	// })


}

function getnav(item) {
	var oNav = $('.adds-nav'); //瀵艰埅澹�
	var aNav = oNav.find('.wr  a'); //瀵艰埅
	var aDiv = item; //妤煎眰
	// aNav.eq(0).addClass('on').siblings().removeClass("on");
	$(window).scroll(function () {
		//鍙绐楀彛楂樺害
		var winH = $(window).height();
		//榧犳爣婊氬姩鐨勮窛绂�
		var iTop = $(window).scrollTop();
		//	   //榧犳爣婊戝姩鏍峰紡鏀瑰彉
		aDiv.each(function () {
			if (winH + iTop - $(this).offset().top > winH / 5) {
				var _this = $(this).index();
				// console.log(_this)
				aNav.removeClass('on');
				aNav.eq(_this).addClass('on');


			}
		})
		if (iTop < 5) {
			// aNav.eq(0).addClass('on').siblings().removeClass("on");
		}


	})
	aNav.on("click", function () {
		var index = $(this).index();
		var top = aDiv.eq(index).offset().top - 70;
		$(this).addClass("on").siblings().removeClass("on");
		$("body,html").animate({
			scrollTop: top
		}, 1000);
	})
}

//DIMS对接后新增的download分类选项卡，可以通用，给最外层增加class就能改样式。


            function initializeTabs(tabContainerId) {
                const $tabContainer = $(`#${tabContainerId}`);
                const $tabs = $tabContainer.find('.tab-title');
                const $contents = $tabContainer.find('.tab-content');

                // Initialize first tab as active
                $tabs.first().addClass('active');
                $contents.first().addClass('active-tab');

                // Click event for tabs
                $tabs.on('click', function() {
                    const index = $(this).index();  // Get the index of the clicked tab

                    // Remove active class from all tabs and contents
                    $tabs.removeClass('active');
                    $contents.removeClass('active-tab');

                    // Add active class to the clicked tab and corresponding content
                    $(this).addClass('active');
                    $contents.eq(index).addClass('active-tab');
                });
            }

            // Initialize tabs

 //用于DIMS对接之后，download下载时，把下载链接的乱码替换成列表里的文件名。
 
  // function downFile(ShowUrl, Name) { 
  // 			ShowUrl = decodeURIComponent(ShowUrl);
  //           const x = new window.XMLHttpRequest();
  //           x.open('GET', ShowUrl, true);
  //           x.responseType = 'blob';
  //           x.onload = () => {
  //               const url = window.URL.createObjectURL(x.response);
  //               const a = document.createElement('a');
  //               a.href = url;
  //               a.target = '_blank'
  //               a.download = Name;
  //               a.style.display = 'none'
  //               document.body.append(a)
  //               a.click();
  //           };
  //           x.send();
  //       }
        
           //downFile
    



    //用于ip跳转功能，用户访问时，按IP跳转到对应的地址。 2024-08-28 

        //配置JSON  country对应跳转网站
	//测试时将需要跳转至网站对应的country改为中国即可
	var JSONObject = {
		"relation": [
			{ "country": "美国", "type": "2" },
			{ "country": "韩国", "type": "3" },
			{ "country": "越南", "type": "4" },
			{ "country": "俄罗斯", "type": "5" },
			{ "country": "波兰", "type": "6" },
			{ "country": "法语", "type": "7" },
			{ "country": "土耳其", "type": "8" },
			{ "country": "西班牙", "type": "9" },
			{ "country": "意大利", "type": "10" },
			{ "country": "日本", "type": "11" },
			{ "country": "阿拉伯", "type": "12" },
			{ "country": "泰语", "type": "13" },
			{ "country": "印度尼西亚", "type": "14" },
			{ "country": "葡萄牙", "type": "15" },
      { "country": "加拿大", "type": "16" }
		],
		"netrel": [
			{ "type": "2", "net": "https://global.uniview.com/us/", "note": "/us","name":"USA","text1":"choose your country or region: " ,"text2":"Continue"},
			{ "type": "3", "net": "https://www.uniview.com/kr/", "note": "/kr","name":"한국어","text1":"해당지역의 적용할 언어를 선택합니다: " ,"text2":"다음"},
			{ "type": "4", "net": "https://global.uniview.com/vn/", "note": "/vn","name":"Tiếng việt","text1":"Lựa chọn ngôn ngữ của bạn: " ,"text2":"Tiếp tục"},
			{ "type": "5", "net": "https://global.uniview.com/ru/", "note": "/ru","name":"Русский","text1":"Выберите язык: " ,"text2":"Продолжайте"},
			{ "type": "6", "net": "https://global.uniview.com/pl/", "note": "/pl","name":"Polski","text1":"Wybierz język, którego używasz: " ,"text2":"kontyntynuj"},
			{ "type": "7", "net": "https://global.uniview.com/fr/", "note": "/fr","name":"Français","text1":"Choisissez la langue applicable à votre région pour parcourir: " ,"text2":"Continuer"},
			{ "type": "8", "net": "https://global.uniview.com/tr/", "note": "/tr","name":"Turkish","text1":"Kullandığınız dili seçin: " ,"text2":"İlerlemek"},
			{ "type": "9", "net": "https://global.uniview.com/es/", "note": "/es","name":"Español","text1":"Elija el idioma aplicable a su región para navegar: " ,"text2":"Continúe"},
			{ "type": "10", "net": "https://global.uniview.com/it/", "note": "/it","name":"Italiano","text1":"Scegli la lingua utilizzata nella tua zona per navigare：" ,"text2":"Continua"},
			{ "type": "11", "net": "https://global.uniview.com/jp/", "note": "/jp","name":"日本語","text1":"あなたの国または地域の言語を選択してください: " ,"text2":"続行"},
			{ "type": "12", "net": "https://global.uniview.com/arab/", "note": "/arab","name":"العربية","text1":"تفضل باختيار اللغة المناسبة لمنطقتك" ,"text2":"استمر"},
			{ "type": "13", "net": "https://global.uniview.com/th/", "note": "/th","name":"ไทย","text1":"เลือกภาษาที่คุณใช้: " ,"text2":"ดำเนินการต่อ"},
			{ "type": "14", "net": "https://global.uniview.com/id/", "note": "/id","name":"bahasa Indonesia","text1":"Pilih bahasa yang Anda gunakan: " ,"text2":"terus"},
			{ "type": "15", "net": "https://global.uniview.com/pt-br/", "note": "/pt-br","name":"Portuguesa","text1":"Escolha o idioma aplicável à sua área para navegar：" ,"text2":"Continue"},
      { "type": "16", "net": "https://global.uniview.com/us/", "note": "/us","name":"Canada","text1":"choose your country or region: " ,"text2":"Continue"}
		]
	}

	function language(toText1,toName,toText2,toNet){
		$(".choice").each(function(){
			var $ul = $(this), $lis = $ul.find("li"), $li = $ul.children("li"), $div = $lis.eq(1);
			$lis.click(function(){
				var n = ($(this).index()+1)+"";
				if ($div.css("display")==="block"){$lis.not($li).css("display","none");}else{$lis.not($li).css("display","block");}
				
				if ($(this).attr("role") === "option"){
					$li.find("span").html($(this).text());
				
					strNet = eval(JSONObject.netrel);
					for(var j=0;j<strNet.length;j++){
						if(strNet[j].type==n ){
							$(".langtiptext").html(strNet[j].text1);
							$(".langname").html(strNet[j].name);
							$(".langbtntext").html(strNet[j].text2);
							$(".choice").attr("data-href",strNet[j].net);
						}
					}
				}
				
			})
		});
		$(".langtiptext").html(toText1);
		$(".langname").html(toName);
	    $(".langbtntext").html(toText2);
		$(".choice").attr("data-href",toNet);
	};

        $(document).ready(function () {
            if (!(localStorage.getItem('mk_language_expiry') && Number(localStorage.getItem('mk_language_expiry')) > Date.now())) {
                var toNet = "https://global.uniview.com/";
                $.get('https://jsonip.com/', function (res) {
                    var ip = res.ip;

                    $.ajax({
                        type: 'get',
                        url: 'https://qryip.market.alicloudapi.com/lundear/qryip',
                        data: {
                            ip: ip,
                        },
                        headers: {
                            'Authorization': 'APPCODE d4faf15ffc7240fda8a17ba229460b2b'
                        },
                        dataType: 'json', // 使用json而不是jsonp
                        success: function (res) {
                            //alert(res.result.ad_info.nation);
                            //获取当前URL
                            var strURL = window.location.href;
                            //JSON转化对象
                            strJSONObject = eval(JSONObject.relation);
                            strNet = eval(JSONObject.netrel);
                            //初始化
                            var flags = "0";
                            var strNote = "NOFOUND";
                            // var toNet = "https://global.uniview.com";
                            var toCountry = "International";
                            var toText1 = "Choose the language you use";
                            var toText2 = "Continue";
                            //取得当前国家对应的TYPE
                            for (var i = 0; i < strJSONObject.length; i++) {
                                if (strJSONObject[i].country == res.result.ad_info.nation) {
                                    flags = strJSONObject[i].type;
                                    break;
                                }
                            }
                            //通过TYPE赋值
                            for (var j = 0; j < strNet.length; j++) {
                                if (strNet[j].type == flags) {
                                    strNote = strNet[j].note;
                                    toNet = strNet[j].net;
                                    toCountry = strNet[j].name;
                                    toText1 = strNet[j].text1;
                                    toText2 = strNet[j].text2;
                                    localStorage.setItem('mk_language_to', toNet);
                                    break;
                                }
                            }

                            if (strURL.indexOf(strNote) < 0 && strNote != "NOFOUND") {
                                $(".langtiptext").html(toText1);
                                $(".langbtntext").html(toText2);
                                $(".langname").html(toCountry);

                            }
                            $(".black_background").show();
                            language(toText1, toCountry, toText2, toNet)
                            if (strNote == "NOFOUND") {
                                $(".black_background").hide();
                            }
                        }
                    });


                });
            }
            else {
                if (localStorage.getItem('mk_language_flag') == "YES") {
                    window.location = localStorage.getItem('mk_language_to');
                }
                $(".black_background").hide();
            }

//点击按钮事件
    $(".langskip").click(function () {
    
       
		localStorage.setItem('mk_language_expiry', Date.now() + 72e5);
        localStorage.setItem('mk_language_flag', "YES");
         window.location = $(".choice").attr("data-href");
    })

    $(".langclose").click(function () {
    	
        $(".black_background").hide();
		localStorage.setItem('mk_language_expiry', Date.now() + 72e5);
        localStorage.setItem('mk_language_to', "NO");
    })


	document.onmouseup = function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		var _con = $('.choice')//获取你的目标元素
		//1. 点击事件的对象不是目标区域本身
		//2. 事件对象同时也不是目标区域的子元素
		if(!_con.is(e.target) && _con.has(e.target).length === 0){
			$(".choice>div>li").css("display","none")
			$(".choice div").removeClass("selected");
			$("#reponse,#reponse2").removeClass("li_input_click");
		}
	}

        });

    

	 //用于ip跳转功能  end

// 产品栏目文档、download栏目下载点击后出现下载条  2024-09-27  杨荻欢

  function showProgress(fileName) {
            var progressContainer = document.querySelector('.progress-container');
            progressContainer.style.display = 'block'; /* Use block to keep alignment */
            document.querySelector('.file-name').textContent = fileName;
        }

        function hideProgress() {
            var progressContainer = document.querySelector('.progress-container');
            progressContainer.style.display = 'none';
        }

        function stopDownload() {
            if (xhr && xhr.readyState !== 4) { // Check if request is still open
                xhr.abort(); // Abort the request
            }
            hideProgress(); // Hide the progress container
        }

        var xhr; // Global variable to hold the XMLHttpRequest object

        function downFile(url, name) {

            url = decodeURIComponent(url);


            showProgress(name);

            xhr = new window.XMLHttpRequest(); // Save the XMLHttpRequest object globally
            xhr.open('GET.html', url, true);
            xhr.responseType = 'blob';

            let loaded = 0;
            let total = 0;
            const progressBar = document.querySelector('.progress-bar span');

            xhr.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    loaded = event.loaded;
                    total = event.total;
                    const percentComplete = Math.round((loaded / total) * 100);
                    progressBar.style.width = `${percentComplete}%`;
                    progressBar.textContent = `${percentComplete}%`;
                } else {
                    console.log(`Downloaded ${loaded} bytes`);
                }
            });

            xhr.onload = () => {
                const url = window.URL.createObjectURL(xhr.response);
                const a = document.createElement('a');
                a.href = url;
                a.target = '_blank';
                a.download = name;
                a.style.display = 'none';
                document.body.append(a);
                a.click();
                URL.revokeObjectURL(url); // Clean up the temporary URL
                hideProgress();
            };

            xhr.onerror = () => {
                alert("There was an error downloading the file.");
                hideProgress();
            };

            xhr.send();
        }

        // 产品栏目文档、download栏目下载点击后出现下载条 end