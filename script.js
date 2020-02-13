$('.ui.dropdown').dropdown()

$('.progress').progress({
    label: 'ratio',
})

$('.ui.checkbox').checkbox()


var last_incident = moment("2016-01-01", "YYYY-MM-DD", true)
var days_without_incident = moment().diff(last_incident, 'days')

$('#days-without-incident').text(days_without_incident.toLocaleString())

var routes = {
    tengiz: {
        0: 'Shanyrak-TCOV-IB',
        1: 'Tengiz Route 2',
        2: 'Tengiz Route 3',
    },
    atyrau: {
        0: 'Atyrau Route 1',
        1: 'Atyrau Route 2',
        2: 'Atyrau Route 3',
    },
    kulsary: {
        0: 'Kulsary Route 1',
        1: 'Kulsary Route 2',
        2: 'Kulsary Route 3',
    },
}

function filter(e) {

    var route_list = routes[e.target.value]

    $('#route-dropdown').html('')

    Object.keys(route_list).forEach(function(key) {
        $('#route-dropdown').append('<option value="' + key + '">' + route_list[key] + '</option>')
    })

    showTable(0)
}

function showTable(e) {

    var selector = '#' + $('#location-dropdown').val() + '-' + (e ? e.target.value : 0)

    $('table').hide()
    $(selector).show()
}

showTable(0)