
require.config({
    baseUrl:'/public',
    paths:{
        jquery:'assets/jquery/jquery.min',
        //模板引擎
        template:'assets/artTemplate/template-web',
        uploadify:'assets/uploadify/jquery.uploadify.min',
    	// nprogress:'路径'
    	echarts:'assets/echarts/echarts.min',
        ckeditor:'assets/ckeditor/ckeditor'

    },

	shim: {
		uploadify: {

			deps:['jquery']
		},  
        ckeditor: {
            exports: 'CKEDITOR'
        }
        
	}


});