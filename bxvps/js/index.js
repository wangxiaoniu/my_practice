

//头部导航切换
function navActive(){
    if(!document.getElementsByTagName) return false;
    var navul=document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0];
    var links=navul.getElementsByTagName('a');
    if(links.lenght ==0) return false;
    var linkurl;
    for(var i=0;i<links.length;i++){
        linkurl=links[i].getAttribute('href');
        if(window.location.href.indexOf(linkurl) != -1){
            links[i].className='active';

        }
    }
}


// 域名注册页tab导航切换

function navTab(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById('domain_tab')) return false;
    if(!document.getElementById('tab_box')) return false;
    var tabnav = document.getElementById('domain_tab');
    var tabLi=tabnav.getElementsByTagName('li');
    var divbox=document.getElementById("tab_box");
    var boxlist=divbox.children;
    for(var i=0;i<tabLi.length;i++){
        tabLi[i].index=i;//index自定义属性，用来保存编号
        tabLi[i].onmouseover=function(){
            for (var i=0;i<boxlist.length;i++) {
                 addClass(boxlist[i],'hide');//先将内容全部隐藏
            }
            removeClass(boxlist[this.index],'hide');//当鼠标触发时去掉hide类，再显示对应的内容
           for(var j=0;j<tabLi.length;j++){
               tabLi[j].className='';//取消所有li样式
           }
            addClass(this,'active');

        }

    }

}

addLoadEvent(navActive);

addLoadEvent(navTab);



