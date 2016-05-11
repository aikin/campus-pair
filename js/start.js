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
                        $hero.removeClass('hover');
                        $hero.click(function () {
                            event.preventDefault();
                            $("#dojo").modal();
                        }).unbind('mouseenter mouseleave');
                        
                        return
                    }

                    $hero.hover(function () {
                        $hero.removeClass('hover');
                        $(this).addClass('hover');
                        $('.hero-show').html($('#hero-' + $(this).children('img').attr('id')).html());
                    }).unbind('click');
                    
                    $('.auto-hover')
                        .trigger('mouseenter')
                        .addClass('hover');
                }
            });
            setTimeout(function () {
                $('.auto-hover')
                    .trigger('mouseenter')
                    .addClass('hover');
            }, 1000);
        });
});