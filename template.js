$(document).ready(function () {
	const searchData = ["Alex", "Zajc", "Ortega", "Volkan Demirel", "Tadic", "Anelka", "Zico", "Deivid"];
	$("#search_id").autocomplete({
		source: searchData
	});
});

// now date
const nowDate = () => {
	document.getElementById('now_date').innerHTML = new Date().getFullYear();
}
nowDate();
