<script setup lang="ts">
import useStore from "./store"
const {account} = useStore()
console.log('account',account.UserInfo);
  // 点击出的文字数组，可自行添加，不要太多哦
  let text = ["苏苑好帅", "苏苑真帅~", "帅帅苏~", "苏帅帅~", "阿苏帅啊~", "苏苏我爱你~",'刘大狗子'];
// 计数
var count = 0;
      // 鼠标按下事件
      document.body.onmousedown = function (e) {
          // 获取鼠标点击位置
          
          var x = e.pageX;
         var y = e.pageY ;
         
        // 分别创建所需要的元素节点
        let body = document.body
        var img = document.createElement("div");
         var left = document.createElement("div");
         var right = document.createElement("div");
         var under = document.createElement("div");
         var txt = document.createElement("div");
         // 通过随机数从文字数组中获取随机下标的文字
        var textNode = document.createTextNode(text[parseInt(Math.random() * text.length)]);
         // 文字添加到txt节点中
        txt.appendChild(textNode);
 
         img.className = "img" + " " + "img" + count;
         left.className = "left";
         right.className = "right";
         under.className = "under";
        txt.className = "text";
  

        
         // 将创建的元素添加到容器中
        img.appendChild(left);
         img.appendChild(right);
        img.appendChild(under);
       img.appendChild(txt);
       body?.append(img)
  
         img.style.top = y + "px";
         img.style.left = x + "px";
         console.log('查询位置x',x,'查询位置x',y);
  
         // 获取随机颜色
         var color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," +
             parseInt(Math.random() * 255) + ")";
         txt.style.color=color;
         for (var i = 0; i < 3; i++) {
             img.children[i].style.background = color;
        }
     }

     // 鼠标抬起事件
     document.body.onmouseup = function () {
         document.getElementsByClassName("img" + count)[0].style.transform = "scale(0.5)";
         document.getElementsByClassName("img" + count)[0].style.transform = "translateY(-40px)";
         document.getElementsByClassName("img" + count)[0].style.opacity = "0";
         count++;
    }

</script>

<template>
 

<div class="mydiv" id="mydiv"></div>

</template>

<style  lang='less' >
  .img {
    width: 20px;
    height: 15px;
    opacity: 1;
    position: absolute;
    z-index: 100000;
    transition: 5s;

}
body{

 position:relative;

 }
//   body{
//   position:relative;
//   }

  .left,.right {width: 10px;height: 10px;border-radius: 100%;position: absolute;}
  .right {right: 0;}
  .under {width: 10px;height: 10px;position: absolute;top: 5px;left: 5px;transform: rotate(45deg)}
  .text {width: 50px;font-size: 10px;line-height: 1;position: absolute;top: -1em;left: -15px;text-align: center; font-size: ;}


</style>
