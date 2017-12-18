(function($) {

    var $mddShare = $('#mdd-share'),
        $mddShareOpen = $('#mdd-share--open'),
        $mddShareClose = $('#mdd-share--close'),
        $mddShareLayer = $('#mdd-share--layer');

    $mddShareOpen.on('click', function(){
        $mddShare.addClass('in');
        return false;
    });

    $mddShareClose.on('click', function(){
        $mddShare.removeClass('in');
        return false;
    });

    $mddShareLayer.find('.md-share').on('click', function(){
        window.open(jQuery(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });
    
    var $cardsStacked = $('#cards-stacked'),
        $cardsNav = $cardsStacked.find('.cards-nav'),
        $current = 0,
        $first = 0,
        $cards = $cardsStacked.find('.card'),
        $total = $cards.length,
        $isMoving = false;


    function getEq($pos){
        var $eq = $current + $pos;
        if($eq > $total-1){
            $eq = - $total + ($current + $pos);
        }
        return $eq;
    }

    $cardsNav.find('a').on('click', function(){
        if(!$isMoving){
            $isMoving = true;
            if($(this).data('dir') === 'prev'){
                $current--;
                if($current < 0){
                    $current = $total-1;
                }
            } else {
                $current++;
                if($current > $total-1){
                    $current = 0;
                }
            }


            $cards.eq(getEq(0)).removeClass().addClass('card card--left');
            $cards.eq(getEq(1)).removeClass().addClass('card card--center');
            $cards.eq(getEq(2)).removeClass().addClass('card card--right');
            $cards.eq(getEq(3)).removeClass().addClass('card card--next-first');
            $cards.eq(getEq(4)).removeClass().addClass('card card--next-second');
            $cards.eq(getEq(5)).removeClass().addClass('card card--prev-second');
            $cards.eq(getEq(6)).removeClass().addClass('card card--prev-first');

            setTimeout(function(){
                $isMoving = false;
            }, 400);
        }

    });

})(jQuery);