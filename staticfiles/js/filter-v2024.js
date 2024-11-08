function productFilter(options) {
  var proArr = options.product || [],
    tempArr = options.product || [],
    pagesize = 12,
    pages = Math.ceil(tempArr.length / pagesize),
    $ProductBox = $("#PList"),
    $PageBar = $("#PAGE"),
    $chklist = [],
    fun = options.fun || null,
    productTye = options.type || "Camera",
    isCompare = options.compare === false ? options.compare : true,
    cur = 1,
    fdimension =
      options.filter != undefined ? Object.keys(options.filter).length : 0;

  function array_reset(arr) {
    for (var i = 0; i < fdimension; i++) {
      arr[i] = [];
    }
  }

  function attr_classify(kwd, filterArr, fkey, allkeys) {
    var kwdArr = [],
      len = kwd.length;
    array_reset(kwdArr);
    // 2024-9-19删除小写转换
    for (var j = 0; j < len; j++) {
      for (var m = 0; m < fdimension; m++) {
        if (filterArr[m].indexOf("|" + kwd[j] + "|") > -1) {
          kwdArr[m].push(kwd[j]);
          if (allkeys[m].indexOf(kwd[j]) == -1) {
            allkeys[m].push(kwd[j]);
          }
          break;
        }
      }
    }
    for (var k = 0; k < fdimension; k++) {
      if (kwdArr[k].length < 1) {
        kwdArr[k].push(fkey[k]);
      }
    }
    return kwdArr;
  }

  function data_process() {
    var len = proArr.length,
      kwd,
      filterArr = [],
      fkeyArr = [],
      allkeys = [],
      ii = 0,
      isNum = true;
    array_reset(allkeys);
    for (var k in options.filter) {
      filterArr.push("|" + options.filter[k].join("|") + "|");
      fkeyArr.push(k);
    }

    // 2024-9-19删除小写转换

    // for(var i=0;i<len;i++){
    // 	kwd = proArr[i].keywords;
    // 	if(kwd!=""){
    // 		if(kwd.substr(-1)==","){
    // 			kwd=kwd.substring(0, kwd.length-1);
    // 		}
    // 		kwd = kwd.split(",");
    // 		proArr[i].keywords = attr_classify(kwd,filterArr,fkeyArr,allkeys);
    // 	}else{
    // 		proArr[i].keywords = [];
    // 	}
    // }
    // 分割判定增加顿号

    for (var i = 0; i < len; i++) {
      var kwd = proArr[i].keywords;
      if (kwd != "") {
        // 删除最后一个字符如果是逗号或中文逗号
        if (kwd.substr(-1) == "," || kwd.substr(-1) == "、") {
          kwd = kwd.substring(0, kwd.length - 1);
        }

        // 按中文逗号或普通逗号分割字符串
        if (kwd.includes("、")) {
          kwd = kwd.split("、");
        } else {
          kwd = kwd.split(",");
        }

        // 处理分割后的关键字数组
        proArr[i].keywords = attr_classify(kwd, filterArr, fkeyArr, allkeys);
      } else {
        proArr[i].keywords = [];
      }
    }
    console.log(proArr);

    for (var i = 0; i < allkeys.length; i++) {
      allkeys[i].sort();
      for (tt = 0; tt < allkeys[i].length; tt++) {
        if (Number(allkeys[i][tt], 10) == NaN) {
          isNum = false;
          break;
        }
      }
      if (isNum) {
        allkeys[i].sort(function (a, b) {
          return b - a;
        });
      }
      var tmpkeys = "All|" + allkeys[i].join("|");
      allkeys[i] = tmpkeys.split("|");
    }
    for (var k in options.filter) {
      options.filter[k] = allkeys[ii++];
    }
  }
  function init() {
    if (fdimension) {
      data_process();
      filterAttrSetup(options.filter);
    }
    setup();
    pageto();
  }
  function setup() {
    var len = tempArr.length,
      start,
      num;
    if (len < 1) {
      clear();
      return;
    }
    pages = Math.ceil(len / pagesize);
    num = len >= pagesize ? pagesize : len;
    pack();
    start = (cur - 1) * pagesize;
    show(start, num);
  }
  function show(start, len) {
    var $A = $ProductBox.find(".a");
    $A.hide();
    for (var i = start; i < len; i++) {
      $A.eq(i).show();
    }
    if (pages == 1) {
      $PageBar.hide();
      return;
    }
    pageBar();
  }
  function removestr(title) {
    //del 'series' in the title
    return title.replace(/\s?series/gi, "");
  }

  // 用于添加角标
  function get_features(str) {
    //Generate attribute icon code
    var html = "",
      tx;
    if (str == "") {
      return html;
    }
    if (str.indexOf("New") >= 0) {
      html += '<div class="New"></div>';
      str = str.replace("New", "");
    }
    tx = str.split(",");
    html += '<ul class="features">';
    for (var i = 0; i < tx.length; i++) {
      if (tx[i] != "") {
        html += '<li class="' + tx[i] + '"></li>';
      }
    }
    html += "</ul>";
    return html;
  }
  function pack() {
    var len = tempArr.length,
      html = "",
      unit =
        '<div class="a" style="display:none;">{{abstract}}<div class="check"><div class="tit-15">' +
        (isCompare
          ? '<label class="{{checked}}" data-img="{{title1}}|{{photo}}"> Compare</label>'
          : " ") +
        '</div></div><a href="{{link}}" data-type="' +
        productTye +
        '" data-keywords="{{keywords}}"><div class="img"><img src="{{photo}}" alt=""></div><div class="tit-18">{{title}}</div><div class="tit-16">{{desc}}</div></a></div>';
    var unv_pro;
    if ($.cookie("unv_pro")) {
      unv_pro = JSON.parse($.cookie("unv_pro")).list.join("");
    } else {
      unv_pro = "";
    }

    for (var i = 0; i < len; i++) {
      if (unv_pro.indexOf("|" + tempArr[i].title + "|") > 0) {
        html += unit
          .replace(/{{title}}/g, tempArr[i].title)
          .replace(/{{title1}}/g, removestr(tempArr[i].title))
          .replace(/{{desc}}/g, tempArr[i].desc)
          .replace(/{{link}}/g, tempArr[i].link)
          .replace(/{{photo}}/g, tempArr[i].photo)
          .replace(/{{keywords}}/g, tempArr[i].keywords)
          .replace(/{{abstract}}/g, get_features(tempArr[i].abstract))
          .replace(/{{checked}}/g, "checked");
      } else {
        html += unit
          .replace(/{{title}}/g, tempArr[i].title)
          .replace(/{{title1}}/g, removestr(tempArr[i].title))
          .replace(/{{desc}}/g, tempArr[i].desc)
          .replace(/{{link}}/g, tempArr[i].link)
          .replace(/{{photo}}/g, tempArr[i].photo)
          .replace(/{{keywords}}/g, tempArr[i].keywords)
          .replace(/{{abstract}}/g, get_features(tempArr[i].abstract))
          .replace(/{{checked}}/g, "");
      }
    }
    $ProductBox.html(html);
    save_checkbox();
  }
  function save_checkbox() {
    var len = tempArr.length,
      proname;
    $chklist = [];
    $chklist.push($("#PList>.a"));
    fun && fun();
  }
  function clear_checkbox() {
    for (var j = 0; j < $chklist.length; j++) {
      $($chklist[j]).find("label").removeClass("checked");
    }
  }
  function clear() {
    $ProductBox.html("");
    $PageBar.hide();
  }
  function pageScrollUpdate() {
    var top = $(".pordu-c").offset().top;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1000
    );
  }
  function pageto(dir, pos) {
    var len = tempArr.length,
      start;
    if (dir == undefined) {
      return;
    }
    switch (dir) {
      case "prev":
        if (cur - 1 < 1) {
          return;
        }
        cur--;
        left();
        break;
      case "next":
        if (cur + 1 > pages) {
          return;
        }
        cur++;
        right();
        break;
      case "first":
        if (cur == 1 || len <= pagesize) {
          return;
        }
        cur = 1;
        left();
        break;
      case "last":
        if (cur == pages) {
          return;
        }
        cur = pages;
        right();
        break;
      case "go":
        if (isNaN(pos) || pos > pages || pos <= 0) {
          return;
        }
        if (pos == cur) {
          return;
        }
        if (pos != pages) {
          cur = pos;
          left();
        } else {
          cur = pages;
          right();
        }
        break;
    }
    function left() {
      start = (cur - 1) * pagesize;
      show(start, start + pagesize);
      pageBar();
      pageScrollUpdate && pageScrollUpdate();
    }
    function right() {
      start = (cur - 1) * pagesize;
      if (cur < pages) {
        show(start, start + pagesize);
      } else {
        show(start, len);
      }
      pageBar();
      pageScrollUpdate && pageScrollUpdate();
    }
  }
  function pageBar() {
    if (cur == 1) {
      $PageBar.find("img[data-page='first']").addClass("blur");
      $PageBar.find("img[data-page='prev']").addClass("blur");
      $PageBar.find("img[data-page='next']").removeClass("blur");
      $PageBar.find("img[data-page='last']").removeClass("blur");
    } else if (cur == pages) {
      $PageBar.find("img[data-page='first']").removeClass("blur");
      $PageBar.find("img[data-page='prev']").removeClass("blur");
      $PageBar.find("img[data-page='next']").addClass("blur");
      $PageBar.find("img[data-page='last']").addClass("blur");
    } else {
      $PageBar.find("img[data-page='first']").removeClass("blur");
      $PageBar.find("img[data-page='prev']").removeClass("blur");
      $PageBar.find("img[data-page='next']").removeClass("blur");
      $PageBar.find("img[data-page='last']").removeClass("blur");
    }
    $PageBar.find("span")[0].innerHTML = cur + "/" + pages;
    $PageBar.find("input[type='text']").val("");
    $PageBar.show();
  }
  function filter(s) {
    var keyword,
      flag = true,
      str;
    function find_keyword(keyword, str) {
      for (var k = 0; k < keyword.length; k++) {
        if (str.indexOf("|" + keyword[k] + "|") >= 0) {
          // 不再转换小写
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
      return flag;
    }

    if (s === null) {
      clear();
      return;
    }

    str = getFilterAttr(); // 不再将字符串转换为小写

    tempArr = [];
    var len = proArr.length;

    for (var i = 0; i < len; i++) {
      keyword = proArr[i].keywords;

      if (keyword.length > 0) {
        for (var j = 0; j < keyword.length; j++) {
          if (keyword[j].length < 1) {
            flag = false;
            break;
          }
          flag = find_keyword(keyword[j], str); // 不再传递小写的关键词
          if (!flag) {
            flag = false;
            break;
          }
        }
      } else {
        flag = false;
      }

      if (flag) {
        tempArr.push(proArr[i]);
      }
      flag = true;
    }

    if (tempArr.length < 1) {
      clear();
      return;
    }
    pages = Math.ceil(tempArr.length / pagesize);
    cur = 1;
    setup();
  }
  function filterAttrSetup(attr) {
    var attrs = attr || null,
      html = "";
    if (attrs === null) {
      /*$("#Filter-Reset").click(function(){
				$("#Product-Model").val("");
				tempArr = proArr;
				setup();
				pageto();
			});*/ return;
    }

    for (var key in attrs) {
      // 处理key，删除&及之前的内容
      var displayKey = key.split(/::/).pop();
      html +=
        '<div class="li"><div class="tit" data-type="' +
        displayKey +
        '"><div class="tit-16 lh1">' +
        displayKey +
        '</div><div class="icon"><img src="https://sgcdn.uniview.com/tres/images/2022/img/faq1.png" alt=""></div></div><div class="sub-a" style="display:none;">';
      //    修改默认状态未收起，tit on改为tit，style中block改为none
      for (var i = 0; i < attrs[key].length; i++) {
        // 处理attrs[key][i]，删除&及之前的内容
        var displayValue = attrs[key][i].split(/::/).pop();

        html +=
          '<div class="lis on" data-type="' +
          attrs[key][i] +
          '"><div class="box"><img src="https://sgcdn.uniview.com/tres/images/2022/img/g.png" alt="" class="tran-middle"></div><div class="tit-14">' +
          displayValue +
          "</div></div>";
      }
      html += "</div></div>";
    }
    console.log(key);

    console.log(displayValue);

    $("#Filters").html(html);

    $("#Filters .lis").on("click", function () {
      var v = $(this).attr("data-type"),
        $dl = $(this).parent("div.sub-a");
      if (v != "All") {
        if ($(this).hasClass("on")) {
          $(this).removeClass("on");
          $(this).siblings("div[data-type=All]").removeClass("on");
          if ($(this).siblings("div.on").length == 0) {
            filter(null);
            clear();
          } else {
            filter();
          }
        } else {
          $(this).addClass("on");
          if (
            $(this).siblings("div.on").length ==
            $(this).siblings("div").length - 1
          ) {
            $(this).siblings("div[data-type=All]").addClass("on");
            if ($("#Filters .lis.on").length == $("#Filters .lis").length) {
              tempArr = proArr;
              pages = Math.ceil(tempArr.length / pagesize);
              cur = 1;
              setup();
              return;
            }
          }
          filter();
        }
      } else {
        if ($(this).hasClass("on")) {
          $dl.children("div").removeClass("on");
          $(this).removeClass("on");
          filter(null);
          clear();
        } else {
          $dl.children("div").addClass("on");
          if ($("#Filters .lis.on").length != $("#Filters .lis").length) {
            filter();
          } else {
            tempArr = proArr;
            pages = Math.ceil(tempArr.length / pagesize);
            cur = 1;
            setup();
          }
        }
      }
    });
    /*$("#Filter-Reset").click(function(){
			$("#Product-Model").val("");
			$("#Filters .lis").addClass("on");
			tempArr = proArr;
			setup();
			pageto();
		});*/
  }
  function getFilterAttr() {
    var $filters = $("#Filters .sub-a>.on"),
      len = $filters.length,
      attrStr = "";
    for (var i = 0; i < len; i++) {
      if ($filters[i].dataset.type != "All") {
        attrStr += "|" + $filters[i].dataset.type;
      } else {
        attrStr +=
          "|" + $filters[i].parentElement.previousElementSibling.dataset.type;
      }
    }
    return attrStr + "|";
  }
  function search(s) {
    var len = proArr.length,
      ptitle;
    tempArr = [];
    s = s.toLowerCase();
    for (var i = 0; i < len; i++) {
      ptitle = proArr[i].title.toLowerCase();
      if (ptitle.indexOf(s) >= 0 || proArr[i].desc.indexOf(s) >= 0) {
        tempArr.push(proArr[i]);
      }
    }
    if (tempArr.length < 1) {
      clear();
      $ProductBox.html(
        '<p style="margin:20px 0px 0px 50px; text-align:center; font-size:14px;">Sorry, no products found for <span style="color:#f00;">' +
          s +
          "</span>.</p>"
      );
      return;
    }
    pages = Math.ceil(tempArr.length / pagesize);
    cur = 1;
    setup();
  }
  init();
  return {
    search: search,
    clear: clear,
    page: pageto,
    clear_checkbox: clear_checkbox,
    getCheckbox: function () {
      return $chklist;
    },
  };
}
function Compare() {
  var $pannel = $("#Compare-pannel"),
    $count = $pannel.find(".count"),
    $ul = $pannel.find(".list"),
    cplist = [];

  function init() {
    var p = $.cookie("unv_pro"),
      arr = [],
      $Pro = $Page.getCheckbox(),
      dataimg,
      cacheItem,
      $label;
    if (p == undefined) {
      return;
    }
    arr = JSON.parse(p).list;
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(/\|/g, "");
    }
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < $Pro[0].length; j++) {
        $label = $($Pro[0][j]).find("label");
        dataimg = $label.attr("data-img").split("|");
        if (dataimg[0] == arr[i]) {
          cacheItem = { name: dataimg[0], url: dataimg[1], chk: $label };
          $label.addClass("checked");
          add(cacheItem, arguments.callee.name);
          break;
        }
      }
    }
    //$pannel.show();
  }
  function render() {
    var n = cplist.length,
      html = "";
    for (var i = 0; i < n; i++) {
      html +=
        '<div class="li"><div class="img"><img src="' +
        cplist[i].url +
        '" alt="' +
        cplist[i].name +
        '"><div class="close" data-button="delete"></div></div><div class="tit-16">' +
        cplist[i].name +
        "</div></div>";
    }
    for (var j = n; j < 4; j++) {
      html += '<div class="li"><div class="img"></div></div>';
    }
    $count.html(n);
    $ul.html(html);
  }
  function delElement(name) {
    if (cplist.length < 1) {
      return false;
    }
    for (var i = 0; i < cplist.length; i++) {
      if (cplist[i].name == name) {
        cplist.splice(i, 1);
        break;
      }
    }
    if (cplist.length < 1) {
      $pannel.find(".btn_compare").addClass("off");
    }
    render();
  }
  function isFull() {
    return cplist.length == 4;
  }
  function hasElement(name) {
    if (cplist.length < 1) {
      return false;
    }
    for (var i = 0; i < cplist.length; i++) {
      if (cplist[i].name == name) {
        delElement(name);
        return true;
      }
    }
    return false;
  }
  function add(pro, type) {
    var html = "";
    cplist.push(pro);
    render();
    $pannel.find(".btn_compare").removeClass("off");
    if (type != "init" && $pannel.is(":hidden")) {
      $pannel.show();
    }
    return true;
  }
  function run(obj) {
    var $this = obj,
      product = $this.attr("data-img").split("|"),
      item = {},
      unv_pro,
      productTye = $this.parent(".check").siblings("a").attr("data-type");
    item.name = product[0];
    item.url = product[1];
    item.chk = $this;

    if (
      $.cookie("unv_pro") &&
      JSON.parse($.cookie("unv_pro")).name != productTye
    ) {
      $this[0].className = "";
      showError("Only the same category can be compared!");
      return;
    }
    if (hasElement(item.name)) {
      $this.attr("checked", false);
      delCookieItem("|" + item.name + "|");
    } else if (isFull()) {
      showError("Exceeded maximum number of comparisons!");
      $this[0].className = "";
    } else {
      if (!$.cookie("unv_pro")) {
        unv_pro = { name: productTye, list: ["|" + item.name + "|"] };
        $.cookie("unv_pro", JSON.stringify(unv_pro), { expires: 7 });
      } else {
        unv_pro = JSON.parse($.cookie("unv_pro"));
        unv_pro.list.push("|" + item.name + "|");
        $.cookie("unv_pro", JSON.stringify(unv_pro), { expires: 7 });
      }
      $this[0].className = "checked";
      add(item);
    }
  }
  function empty() {
    var html = "";
    for (var i = 0; i < cplist.length; i++) {
      cplist[i].chk[0].className = "";
    }
    cplist = [];
    for (var j = 0; j < 4; j++) {
      html += '<div class="li"><div class="img"></div></div>';
    }
    $ul.html(html);
    $count.html(0);
    $.removeCookie("unv_pro");
    $pannel.find(".btn_compare").addClass("off");
    $Page.clear_checkbox();
  }
  function showError(s) {
    $("#Compare-tip").html(s).show().delay(2000).fadeOut(200);
  }
  init();
  $pannel.on("click", function (e) {
    var obj = e.target || e.srcElement,
      li = $(obj).parents("div.li"),
      pos,
      p;
    switch (obj.dataset["button"]) {
      case "delete":
        pos = $ul.find(".li").index(li);
        cplist[pos].chk[0].className = "";
        delCookieItem("|" + cplist.splice(pos, 1)[0].name + "|");
        if (cplist.length < 1) {
          $pannel.find(".btn_compare").addClass("off");
        }
        render();
        break;
      case "close":
        $pannel.hide();
        break;
      case "clear":
        empty();
        break;
      case "compare":
        if (cplist.length < 1) {
          showError("Please select a product to compare.");
          return;
        }
        if (
          obj.className.indexOf("off") > 0 ||
          obj.parentNode.className.indexOf("off") > 0
        ) {
          return;
        }
        p = "";
        for (var i = 0; i < cplist.length; i++) {
          p += cplist[i].name + ",";
        }
        p = p.substr(0, p.length - 1);
        sessionStorage.setItem("p", p);
        location.href = "https://www.uniview.com/Compare/default.htm";
        break;
    }
  });
  return {
    run: run,
  };
}

function new_product_sticky(arr) {
  // 直接返回原数组，但对包含 "New" 标签的商品进行置顶排序
  return arr.sort(function (a, b) {
    var a1 = a.abstract.indexOf("New") >= 0 ? 1 : 0,
      b1 = b.abstract.indexOf("New") >= 0 ? 1 : 0;
    return b1 - a1;
  });
}

function delCookieItem(c) {
  var unv_pro = JSON.parse($.cookie("unv_pro")),
    arr = [],
    len,
    tmp;
  unv_pro.list = unv_pro.list.filter(function (e) {
    return e != c;
  });

  arr = $Page.getCheckbox();
  arr = arr[0];
  len = arr.length;
  for (var i = 0; i < len; i++) {
    tmp = $(arr[i]);
    if ("|" + tmp.find("label").data("img").split("|")[0] + "|" == c) {
      tmp.find("label").removeClass("checked");
    }
  }
  if (unv_pro.list.length < 1) {
    $.removeCookie("unv_pro");
    return;
  }
  $.cookie("unv_pro", JSON.stringify(unv_pro));
}
