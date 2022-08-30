async function loadConf() {
    const response = await fetch('https://conf.ontico.ru/api/conferences/forCalendar.json');
    const data = await response.json();
}
loadConf()
