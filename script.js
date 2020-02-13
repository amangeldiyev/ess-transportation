$('.ui.dropdown').dropdown()

$('.progress').progress({
    label: 'ratio',
})

var last_incident = moment("2016-01-01", "YYYY-MM-DD", true)
var days_without_incident = moment().diff(last_incident, 'days')

$('#days-without-incident').text(days_without_incident.toLocaleString())