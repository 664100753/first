//沙箱模式
(function(window){
    //jq的构造函数
    function jQuery(selector){

        return new init(selector);
        
    }

    //new $是如何把new关键字去掉的?
    //利用工厂函数,返回一个实例对象,巧妙的去掉了关键字new



    //jq的原型对象
    //fn是原型对象的简写形式
   jQuery.fn = jQuery.prototype = {
       
        //利用混入式继承方法在原型对象上添加方法
        extend:function(obj){
            for(var key in obj){
                this[key] = obj[key]
            }
        }
    }


    //jq方法的拓展模块
    jQuery.fn.extend({
        sayHi:function(){
            console.log('哈哈');
        },
        css:function(){
            console.log('我是css方法');
        },

        addClass:function(cname){
            //隐士迭代
            for(var i = 0; i < this.length; i++){
                this[i].classList.add(cname);//this指的是当前对象
            }

            return this;//返回当前操作的对象,可以继续调用其它方法,这就是链式编程的原理
        }


    })

    //定义一个构造函数
    //把构造函数存到原型对象上,方便后期获取
    var init = jQuery.fn.init = function(selector){
            //根据选择器,来把对象包装成伪数组
        var elements = document.querySelectorAll(selector);
        //遍历每一项
        for(var i = 0; i < elements.length; i++){
            this[i] = elements[i]//this代表当前对象

        }
        this.length = elements.length;//把对象包装成伪数组


    }

    //让init实例对象指向jq原型对象,使用上面的方法
    init.prototype = jQuery.prototype;


    //报数据暴露给外界
    //$是jq的简写形式,
    window.$ = window.jQuery = jQuery;
})(window);