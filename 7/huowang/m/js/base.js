$(function () {

    var wdTop = 0;

    var winH = $(window).height();

    $(window).scroll(function () { 

        if($(window).scrollTop() > winH / 2) {
            $('.fix-bar').addClass('on');
        } else {
            $('.fix-bar').removeClass('on');
        }

    });

    // zepto 设置滚动条位置需为window设置，document会报错
    $('.top').click(function (e) { 
        $(window).scrollTop(0);
    });

    var flag = true;

    $('.nav-btn').click(function (e) { 
        e.preventDefault();
        if(flag) {
            $('.nav-btn div:nth-child(2)').css({
                transform: 'scaleX(0)',
                opacity: 0,
            });
            $('.nav-btn div:nth-child(1)').css('transform', 'rotate(-45deg)');
            $('.nav-btn div:nth-child(3)').css('transform', 'rotate(45deg)');
            $('header').css({
                background: '#fff',
                transition: '.6s .05s',
            })
            $('.top-nav').css({
                height: '8.28rem',
            })
            flag = false;
        } else {
            $('.nav-btn div:nth-child(2)').css({
                transform: 'scaleX(1)',
                opacity: 1,
            });
            $('.nav-btn div:nth-child(1)').css('transform', 'rotate(-0deg)');
            $('.nav-btn div:nth-child(3)').css('transform', 'rotate(0deg)');
            $('header').css({
                background: '',
                transition: '.3s .5s',
            })
            $('.top-nav').css({
                height: 0,
            })
            flag = true;
        }
        
    });

    var flag_2 = false;
    var temp;

    $('.top-nav dt').click(function (e) { 
        e.preventDefault();
        console.log()
        if(flag_2) {
            $(this).find('img').css({
                transform: 'rotate(0deg)',
            });
            $(this).parents('dl').find('.secondary').css({
                height: 0,
            });
            $(this).parents('dl').find('.secondary-2').css({
                height: 0,
            });
            flag_2 = false;
        } else {
            $(this).find('img').css({
                transform: 'rotate(180deg)',
            });
            
            $(this).parents('dl').find('.secondary').css({
                height: $('.secondary dd').height() * 4 + parseInt($('.secondary dd').css('margin-bottom')) * 3 + 'px',
            });
            temp = $(this).parents('dl').find('.secondary-2 dd');
            $(this).parents('dl').find('.secondary-2').css({
                height: temp.height() * temp.length + parseInt(temp.css('margin-bottom')) * (temp.length - 1) + 'px',
            });
            flag_2 = true;
        }
    });
});