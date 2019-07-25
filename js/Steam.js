// var ajax = new XMLHttpRequest()

// ajax.open("get","http://pujie1213.top:90/rcGame",false);
// ajax.send();
// var data = ajax.responseText;
// data = JSON.parse(data);
let arr = [];
let cookie = new Cookie();
window.onunload = function () {
	if (arr.length != 0) {
		if (cookie.getCookie("history")) {
			let gameArr = cookie.getCookie("history").split(",");
			arr.forEach(function (item, index) {
				if (gameArr.indexOf(item) == -1) {
					gameArr.push(item);
				}
			})
			cookie.setCookie("history", gameArr, 7);
		} else {
			cookie.setCookie("history", arr, 7);
		}
	}
}
function getJSON(data) {
	let d1 = $(".d1");
	var ua = $("#lunbo");
	for (let tv = 0; tv < data.length; tv++) {
		var A = d1.clone();
		A.attr("gameid", data[tv].gameId);
		A.click(function () {
			let gameid = $(this).attr("gameid");
			if (arr.indexOf(gameid) == -1) {
				arr.push(gameid);
			}
		})
		A.find("a").attr("href", "javascript:;")

		A.css("display", "block");
		A.find(".ua img").attr("src", data[tv].imgUrl[0]);
		A.find("h3").html(data[tv].name);
		A.find("#la").html("￥" + data[tv].price);
		A.find("#lb").html("￥" + data[tv].originPrice);
		A.find("#lc").html("-" + (data[tv].discount * 100) + "%");
		var ub1 = A.find(".ub1 img");
		for (var ubb = 0; ubb < data[tv].imgUrl.length; ubb++) {
			ub1.eq(ubb).attr("src", data[tv].imgUrl[ubb]);
		}
		if (!data[tv].isSale) {
			A.find("#lb").css("display", "none");
			A.find("#lc").css("display", "none");
		}
		for (var c = 0; c < data[tv].platform.length; c++) {
			var platformList = data[tv].platform;
			var spsp = A.find("#baobao > span");
			if (platformList[c] == "Windows") {
				spsp.eq(0).css("display", "block");
			}
			if (platformList[c] == "Steam") {
				spsp.eq(1).css("display", "block");
			}
			if (platformList[c] == "Mac OS") {
				spsp.eq(2).css("display", "block");
			}
			if (platformList[c] == "HTCvive") {
				spsp.eq(3).css("display", "block");
			}
			if (platformList[c] == "oculusrift") {
				spsp.eq(4).css("display", "block");
			}
		}
		ua.append(A)
	}
	let wrap = $(".zhong1");
	let wrap1 = $(".tuba");
	let wrap2 = $(".jianshang");
	let wrap3 = $(".vr");
	function Slider(el) {
		this.left = el.find(".pb");
		this.right = el.find(".pc");
		this.Lilist = el.find(".lunbo > div");
		this.ml = el.find("lunbo");
		this.index = 0;
		let _this = this;
		this.lock = true;
		for (let tt = 0; tt < this.Lilist.length; tt++) {
			let xiaojian = document.createElement("p");
			el.find(".yd").append(xiaojian);
		}
		this.diyi = el.find(".yd > p").eq(0);
		this.diyi.css("background", "#eee");
		this.yd = el.find(".yd > p");
		this.rightclick = function () {
			_this.index++;
			if (_this.index == _this.Lilist.length) {
				_this.index = 0;
			}
			_this.yd.css({ "background": "" });
			_this.Lilist.fadeOut(300);

			_this.Lilist.eq(_this.index).fadeIn(300);
			_this.yd.eq(_this.index).css({ "background": "#eee" });
		}
		this.right.click(this.rightclick);


		this.leftclick = function () {
			_this.index--;
			if (_this.index == -1) {
				_this.index = 9;
			}
			_this.yd.css({ "background": "" });
			_this.Lilist.fadeOut(300);
			_this.Lilist.eq(_this.index).fadeIn(300);
			_this.yd.eq(_this.index).css({ "background": "#eee" });
		}
		this.left.click(this.leftclick);



		this.ydclick = function () {
			_this.Lilist.fadeOut(300);
			_this.yd.css({ "background": "" });
			_this.Lilist.eq($(this).index()).fadeIn(500);
			_this.yd.eq($(this).index()).css({ "background": "#eee" });
			_this.index = $(this).index();
		}
		this.yd.click(this.ydclick);
		var cj = setInterval(function(){_this.right.click()},3000);
	}
	let Slider1 = new Slider(wrap);
	let Slider2 = new Slider(wrap1);
	let Slider3 = new Slider(wrap2);
	let Slider4 = new Slider(wrap3);
}
// var left = $("#pb");
// var right = $("#pc");
// var lunbo = $("#lunbo");
// var img = $("#lunbo > div");
// var index = 0;
// var yd = $("#yd > p");
// lunbo.mouseenter(function () {
// 	clearInterval(zj);
// })
// left.mouseenter(function () {
// 	clearInterval(zj);
// })
// right.mouseenter(function () {
// 	clearInterval(zj);
// })
// lunbo.mouseleave(function () {
// 	zj = setInterval(function () {
// 		right.click();
// 	}, 3000);
// })
// right.click(function () {
// 	index++;
// 	if (index == img.length) {
// 		index = 0;
// 	}
// 	img.fadeOut(300);
// 	yd.css("background", "");
// 	img.eq(index).fadeIn(300);
// 	yd.eq(index).css("background", "#eee");
// });
// var zj = setInterval(function () {
// 	right.click();
// }, 3000);
// left.click(function () {
// 	img.eq(index)
// 	index--;
// 	if (index == -1) {
// 		index = 9;
// 	}
// 	img.fadeOut(300);
// 	yd.css("background", "");
// 	img.eq(index).fadeIn(300);
// 	yd.eq(index).css("background", "#eee");
// });
// yd.click(function () {
// 	yd.css("background", "");
// 	img.fadeOut(300);
// 	yd.eq($(this).index()).css("background", "#eee");
// 	img.eq(index).fadeIn(300);
// 	index = $(this).index();
// })
// let his = $("#xianzai");
// function fnn(data) {
// 	data.forEach(function (item, index) {
// 		let a = $("<span>");
// 		a.attr("href", item.href);
// 		a.html(item.name);
// 		his.append(a);
// 	})
// }

let zuijin = $("#zuijin");
if (!cookie.getCookie("history")) {
	zuijin.css({ "display": "none" });
} else {
	let data = cookie.getCookie("history");
	let script = $("<script>");
	script.attr("src", `http://pujie1213.top:90/history?gameId=${data}&callback=fnn`);
	script.appendTo(("head"));
}
























