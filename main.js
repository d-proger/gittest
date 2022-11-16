$(document).ready(function () {
    const tabs = $('.ak-tab'),
        links = $('.ak-link');

    // tabs[0].classList.add('active');

    $.each(links, function (index, link) {
        link.setAttribute('data-id', index);
    })

    links.on("click", function (e) {
        e.preventDefault();
        id = $(this).attr('data-id');
        if (tabs[id].classList.contains('active')) {
            tabs[id].classList.remove('active');
        } else {
            tabs.removeClass('active');
            tabs[id].classList.add('active');
            //tabs[id].classList.toggle('active');
        }
    })
})