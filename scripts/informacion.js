$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.sectionTabs article').hide();
    $('.sectionTabs article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.sectionTabs article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;        
    });

    $('.boton').click(function(){
        $('ul.tabs li a').removeClass('active');
        $('.tab2').addClass('active');
        $('.sectionTabs article').hide();

        var activeTab = $('.tab2').attr('href');
        $(activeTab).show();
        return false;        
    });

    $('.btn-payment').click(function(){
        $('ul.tabs li a').removeClass('active');
        $('.tab3').addClass('active');
        $('.sectionTabs article').hide();

        var activeTab = $('.tab3').attr('href');
        $(activeTab).show();
        return false;        
    });
});