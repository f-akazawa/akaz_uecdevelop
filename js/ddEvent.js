$(function() {

    $('.draggable').draggable( {

        containment: '#draggableArea',
        scroll: false,

    });

    $('.dragTarget').on('dragstart', function (e) {

        // this は p.dragTarget のうち今ドラッグしてるもの
        dragSrcEl = this;
        console.log(this);

    });
    
    // ドキュメントロード時に存在していない動的な要素に対してイベントをつけるには
    // onメソッドで以下の様にする
    $('#upload').on('dragstart','.dragTarget',function(e){
        dragSrcEl = this;
    });
    
     // ドラッグエリアに要素を追加，ドラッグエリアから要素をダブルクリックで削除
    $('#draggableArea').on('dragover', function(e) {

        e.preventDefault();

    }).on('drop', function(e) {

        if( !(e.isDefaultPrevented()) ) {
            e.stopPropagation();
        }

        if(dragSrcEl != this) {
            // this は div#draggableArea
            $('#'+this.id).append("<div class='draggable'><p>"+dragSrcEl.innerText+"</p></div>");
        }

        $('.draggable').each(function() {
            $(this).draggable( {
                containment: '#draggableArea',
                scroll: false,
            });
        });

    }).on('dblclick', '.draggable', function(e) {
        $(this).remove();
    });

});