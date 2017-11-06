
define(['jquery'], function ($) {
	//判断是否登录
	$.ajax({
	    url:'/api/employee/checkRootLogin',
	    type:'get',
	    success:function (info) {
	        if(info.error) {
	            location.href = '/login.html';
	        }
	    }
	})
	//退出登录
	$('.logout').on('click',function () {
		$.ajax({
			url:'/api/employee/employeeLogout',
			type:'get',
			success:function (info) {
				if(info.success) {
					location.href = '/login.html';
				}
			}
		})
	})

	$('.fenlei').on('click',function () {
		// $('.list-unstyled').show();
		$(this).next().slideToggle();
	})

})