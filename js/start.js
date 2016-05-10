$(function () {
    function getWindowWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    }

    var wookmark;

    $('#container').imagesLoaded()
        .done(function (instance) {
            wookmark = new Wookmark('#container', {
                itemWidth: function () {
                    if (getWindowWidth() < 768) return "100%";
                    return getWindowWidth() < 960 ? '40%' : '24%'
                },
                outerOffset: 20,
                flexibleWidth: true,
                autoResize: true,
                onLayoutChanged: function () {
                    var $hero = $('.hero--tint');
                    if (getWindowWidth() < 960) {
                        $('.hero--tint').removeClass('hover');
                        $hero.click(function () {
                            event.preventDefault();
                            $("#dojo").modal();
                        }).unbind('mouseenter mouseleave');
                        $('.submit').addClass('hide');
                        return
                    }
                    $hero.hover(function () {
                        $('.hero--tint').removeClass('hover');
                        $(this).addClass('hover');
                        $('.hero-show .detail').html($('#hero-' + $(this).children('img').attr('id')).html());
                    }).unbind('click');
                    $('.auto-hover')
                        .trigger('mouseenter')
                        .addClass('hover');
                    $('.submit').removeClass('hide');
                }
            });
            setTimeout(function () {
                $('.auto-hover')
                    .trigger('mouseenter')
                    .addClass('hover');
                $('.submit').removeClass('hide');
            }, 1000);
        });
});