define(['jquery', 'template', 'ckeditor', './utils', 'uploadify'], function ($, template, CKEDITOR) {

CKEDITOR.replace('ck');

$('form').on('submit',function () {

    var _this = $(this);

        $.ajax({
            url: '/api/product/addProduct',
            type:'post',
            data:_this.serialize(),
            success: function (info) {
               
                if(info.success) {
                    location.href = '/goods_list.html ';
                }
            }
        });
        return false;
    })
    //插入图片
    $('#upfile').uploadify({
        //模板自带的一些方法属性 可以根据喜好修改
        buttonText: '',
        width: 120,
        height: 120,
        itemTemplate: '<span></span>',
        // 传递的数据 和 data一个作用
        //这些是必须要有的 
        fileObjName:'pic1',
        //引包
        swf:'/public/assets/uploadify/uploadify.swf',
        //地址
        uploader:'/api/product/addProductPic',
        onUploadSuccess:function (file, data) {
            //解析json字符串
            var res = JSON.parse(data);
            //放入 img 标签 内的 src后面 实现预览 后面是地址拼接
            $('.preview img').attr('src', 'http://localhost:3000' + res.picAddr);
            //点击保存 上传到数据库
            $('input[name="pic"]').val(res.picAddr);
        }
    });
    // 添加品牌
    $.ajax({
        url:'/api/category/querySecondCategoryPaging',
        type:'get',
        data:{page:1, pageSzie:10},
        success: function (info) {
            //使用模板引擎 记住用法就好了
            var html = template('tpl', info);
            //把上面模板引擎获取到的数据 放入到这个类里
            $('.brand').append(html);
            
        }
    })
	
})