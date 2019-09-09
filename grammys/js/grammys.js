
window.onload = loadvalues;

function loadvalues() {



}

$(document).ready(function () {
    $.getJSON("https://api.myjson.com/bins/6n42d", function (jd) {
        $.each(jd.fields, function (i, item) {
            $("#category_types").append($('<option>)', {
                value: jd.fields[i].field_id,
                text: jd.fields[i].field
            }));
        });
        var list = $("#nominees_section").append('<ul></ul>').find('ul');
        $('ul').empty()
        $.each(jd.fields[0].categories, function (i, item) {
            list.append('<br><br><li style="color: red">' + jd.fields[0].categories[i].category_name + '</li>');

            $.each(jd.fields[0].categories[i].nominees, function (j, item) {
                if (jd.fields[0].categories[i].winner_id == j) {
                    list.append('<div class="winner">' + '<h1> Winner </h1>' + '<br> Nominee: ' +
                        jd.fields[0].categories[i].nominees[j].nominee + '<br> <br> Artista: ' +
                        jd.fields[0].categories[i].nominees[j].artist + '<br>');
                } else {
                    list.append('<div >' + '<br> Nominee: ' +
                        jd.fields[0].categories[i].nominees[j].nominee + '<br> <br> Artista: ' +
                        jd.fields[0].categories[i].nominees[j].artist + '<br>');
                }
            })
        })
    })
})

function changevalue(sel) {
    $.getJSON("https://api.myjson.com/bins/6n42d", function (jd) {
        var list = $("#nominees_section").append('<ul></ul>').find('ul');
        $('ul').empty()
        $.each(jd.fields[sel.value - 1].categories, function (i, item) {
            list.append('<br><br><li style="color: red">' + jd.fields[sel.value - 1].categories[i].category_name + '</li>');

            $.each(jd.fields[sel.value - 1].categories[i].nominees, function (j, item) {
                if (jd.fields[sel.value - 1].categories[i].winner_id == j) {
                    list.append('<div class="winner">' + '<h1> Winner </h1>' + '<br> Nominee: ' +
                        jd.fields[sel.value - 1].categories[i].nominees[j].nominee + '<br> <br> Artista: ' +
                        jd.fields[sel.value - 1].categories[i].nominees[j].artist + '<br>');
                } else {
                    list.append('<div >' + '<br> Nominee: ' +
                        jd.fields[sel.value - 1].categories[i].nominees[j].nominee + '<br> <br> Artista: ' +
                        jd.fields[sel.value - 1].categories[i].nominees[j].artist + '<br>');
                }
            })
        })
    })
}

