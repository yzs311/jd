 window.addEventListener('load', function() {
 	  //初始化左侧分类swiper内容滚动
     var swiper = new Swiper('.category-left .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
     });
 	  //初始化右侧分类swiper内容滚动
     var swiper = new Swiper('.category-right .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
         scrollbar: {
             el: '.swiper-scrollbar',
         },
         mousewheel: true,
     });

     //获取所有的li标签
    var liList = document.querySelectorAll('.category-left ul li');
    //console. log(liList);
    //获取li标签的高度
    var liHeight = liList[0].offsetHeight;
    //console.log(liHeight);
    //获取盒子的总高度
    var maxHeight = document.querySelector('.swiper-slide');
    //获取页面显示的高度
    var height = maxHeight.parentNode.offsetHeight;
    //console.log(height);
    var maxHeight = maxHeight.offsetHeight;
    //获取移动的容器
    var content = document.querySelector('.swiper-wrapper');
    //遍历li标签 给每一个li 标签添加点击事件
    for ( var i = 0 ; i < liList.length ; i++) {
      //给每一个li标签添加一个索引
      liList[i].index = i;
      //要移动的高度 = 索引 * li标签的高度
      liList[i].onclick = function () {
        //console.log(this.index);
        //计算需要移动的高度
        var translateY = - this.index * liHeight;
        //计算能移动的最大高度
        var minTranslateY = height - maxHeight;
        //console.log(minTranslateY);
        if ( translateY < minTranslateY) {
          translateY = minTranslateY;
        }
        content.style.transform = "translateY("+ translateY +"px)";
        content.style.transition = "all 0.3s ease 0s";
        //console.log(content.style);
        //清除所有li标签的active
        for ( var j = 0 ; j < liList.length ; j++) {
          liList[j].classList.remove('active');
        }
        this.className = 'active';
      }
    }
 })
