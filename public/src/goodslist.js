define(['jquery', 'template', './utils'], function ($, template) {

	var size = 2;

	var reg = /\?[a-z]+=(\d+)/;

	var search = location.search || '';

	var page = reg.exec(search) && reg.exec(search)[1];

	page = page || 1;

	$.ajax({
		url:'/api/product/queryProductDetailList',
		type:'get',
		data:{page: page, pageSize: size},
		success: function (info) {			
			console.log(info.rows);
			
			var total = info.total;

			var pageLen = Math.ceil(total / size);

			//调用模板引擎 第一个参数传id 第二个参数传数据
			var html = template('tpl', info);

			var pagehtml = template('page', {
				pageLen: pageLen,
				page: page
			});

			$('.pagination').html(pagehtml);
			//html 把数据放到原来的位置
			$('.goods').html(html);
		}
	})


})