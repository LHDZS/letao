
define(['jquery', 'template', './utils'], function ($, template) {
	 
	$.ajax({
	    url: '/api/user/queryUser',
	    type: 'get',
	    data: {page: 1, pageSize: 10},
	    success: function (info) {
	    	
	    		var html = template('list', info);

	    		$('tbody').html(html);
	    
	    }
	})

	


})