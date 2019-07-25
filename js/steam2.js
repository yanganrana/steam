function remen(data) {
    let a = $(".good");
    let keke1 = $(".keke1 > .kekebao");
    let keke2 = $(".keke2");
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let A = a.clone();
        A.css("display", "block");
        A.find(".rmt > img").attr("src", data[i].imgUrl[0]);
        A.find(".da2 > .daa > .daa1 > .p1").html(data[i].name);
        let tb = data[i].platform;
        let bq = data[i].label;
        for (let jh = 0; jh < tb.length; jh++) {
            if (tb[jh] == "Windows") {
                A.find(".da2 > .daa > .daa1 > .p2 > .s1").css("opacity", 1);
            }
            if (tb[jh] == "Mac OS") {
                A.find(".da2 > .daa > .daa1 > .p2 > .s2").css("opacity", 1);
            }
            if (tb[jh] == "Steam") {
                A.find(".da2 > .daa > .daa1 > .p2 > .s3").css("opacity", 1);
            }
            if (tb[jh] == "支持VR") {
                A.find(".da2 > .daa > .daa1 > .p2 > .s4").css("opacity", 1);
            }
            if (tb[jh] == "VR独占") {
                A.find(".da2 > .daa > .daa1 > .p2 > .s5").css("opacity", 1);
            }
        }
        let p3 = $(".da2 > .daa > .daa1 > .p3");
        for (let gz = 0; gz < bq.length; gz++) {
            let spans = $("<span>");
            spans.attr("class", "spans");
            spans.html(data[i].label[gz]);
            p3.append(spans);
        }
        A.find(".da2 > .dbb > .dbb1 > p").html(`-${(data[i].discount) * 100}%`);
        if (data[i].discount == 0) {
            A.find(".da2 > .dbb > .dbb1 > p").css("display", "none");
        }
        A.find(".da2 > .dbb > .dbb2 > .pbb1").html(`￥${data[i].originPrice}`);
        A.find(".da2 > .dbb > .dbb2 > .pbb2").html(`￥${data[i].price}`);
        console.log(data[i].price)
        if (data[i].originPrice == 0) {
            A.find(".da2 > .dbb > .dbb2 > .pbb1").css("display", "none");
        }
        if (data[i].price == "免费开玩") {
            A.find(".da2 > .dbb > .dbb2 > .pbb2").html("免费开玩");
        }
        if (data[i].originPrice == "免费开玩") {
            A.find(".da2 > .dbb > .dbb2 > .pbb1").html("");
        }
        if (data[i].originPrice == "免费开玩") {
            A.find(".da2 > .dbb > .dbb2 > .pbb1").html("");
            A.find(".da2 > .dbb > .dbb2 > .pbb2").html("免费开玩");
        }
        if (data[i].originPrice == data[i].price) {
            A.find(".da2 > .dbb > .dbb2 > .pbb1").html("");
        }
        A.mouseenter(function () {
            $(".kem1 > .p2").html("");
            $(".keke2 > .kem1 > h2").html(data[i].name);
            let hp = data[i].evaluate;
            let pls = data[i].evaluatingCount;
            let youtu = $(".keke2 > .kem2 > div");
            keke2.find(".kem1 > .p1 > .s3").html(`(${pls})`);
            if (hp == 0) {
                keke2.find(".kem1 > .p1 > .s2").html("无评论");
                keke2.find(".kem1 > .p1 > .s3").html("");
            }
            if (hp == 1) {
                keke2.find(".kem1 > .p1 > .s2").html("好评如潮");
            }
            if (hp == 2) {
                keke2.find(".kem1 > .p1 > .s2").html("特别好评");
            }
            if (hp == 3) {
                keke2.find(".kem1 > .p1 > .s2").html("多半好评");
            }
            if (hp == 4) {
                keke2.find(".kem1 > .p1 > .s2").html("褒贬不一");
            }
            if (hp == 5) {
                keke2.find(".kem1 > .p1 > .s2").html("多半差评");
            }
            if (hp == 6) {
                keke2.find(".kem1 > .p1 > .s2").html("差评如潮");
            }
            if (hp == 7) {
                keke2.find(".kem1 > .p1 > .s2").html("好评");
            }
            let yp2 = $(".kem1 > .p2");
            for(let ybq = 0;ybq < bq.length;ybq++){
                let as = $("<a>");
                as.html(data[i].label[ybq]);
                yp2.append(as);
            }
            youtu.eq(0).css({"background":"url("+data[$(this).index()].imgUrl[1]+")","background-size":"cover"});
            youtu.eq(1).css({"background":"url("+data[$(this).index()].imgUrl[2]+")","background-size":"cover"});
            youtu.eq(2).css({"background":"url("+data[$(this).index()].imgUrl[3]+")","background-size":"cover"});
            youtu.eq(3).css({"background":"url("+data[$(this).index()].imgUrl[4]+")","background-size":"cover"});
        })
        keke1.append(A);
    }
}
let dianzuo = $("#dianzuo");
let dianzhong = $("#dianzhong > span");
let dianyou = $("#dianyou");
let indexx = 1;
dianyou.click(function(){
    indexx++;
    if(indexx == 11){
        indexx = 1;
    }
    $(".keke1 > .kekebao").empty();
    let src = $("<script>");
    dianzhong.css("color","#3b6e8c");
    src.attr("src","http://pujie1213.top:90/gamePage?page=" + indexx + "&callback=remen");
    $(dianzhong[indexx - 1]).css("color","#fff");
    $("head").append(src);
    src.remove();
})
dianzuo.click(function(){
    indexx--;
    if(indexx == 0){
        indexx = 10;
    }
    $(".keke1 > .kekebao").empty();
    let src = $("<script>");
    dianzhong.css("color","#3b6e8c");
    src.attr("src","http://pujie1213.top:90/gamePage?page=" + indexx + "&callback=remen");
    $(dianzhong[indexx - 1]).css("color","#fff");
    $("head").append(src);
    src.remove();
})