$(window).scroll(function() {
    $('#ahead .section-title').each(function() {
        let imagePos = $(this).offset().top

        let topOfWindow = $(window).scrollTop()
        if (imagePos < topOfWindow+650) {
            $(this).addClass('fadeInDown')
        }
    })
})

$(window).scroll(function() {
    $('#ahead .time').each(function() {
        let imagePos = $(this).offset().top

        let topOfWindow = $(window).scrollTop()
        if (imagePos < topOfWindow+650) {
            $(this).addClass('fadeInLeft')
        }
    })
})

$(window).scroll(function() {
    $('#ahead .time-travel').each(function() {
        let imagePos = $(this).offset().top

        let topOfWindow = $(window).scrollTop()
        if (imagePos < topOfWindow+650) {
            $(this).addClass('fadeInUp')
        }
    })
})

$(window).scroll(function() {
    $('#ahead .time-value').each(function() {
        let imagePos = $(this).offset().top

        let topOfWindow = $(window).scrollTop()
        if (imagePos < topOfWindow+650) {
            $(this).addClass('fadeInRight')
        }
    })
})

