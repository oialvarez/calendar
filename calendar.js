const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const render = () => {
  const startDateInput = document.getElementById('startDate');
  const startDateValue = startDateInput.value || new Date().toISOString().split('T')[0];
  console.log('ssss', startDateInput.value)
  console.log('ssss', startDateValue)
  if (!startDateInput.value) {
    startDateInput.value = startDateValue;
  }

  const numberOfDays = document.getElementById('numberOfDays') || 17;
  const country = document.getElementById('country') || 'US';
  const calendar = document.getElementById('theCalendar');

  const table = document.createElement('div');
  const tableHeader = document.createElement('div');
  const date = document.createElement('div');
  table.appendChild(date);
  table.appendChild(tableHeader);

  for (const DAY in DAYS) {
    if (DAYS.hasOwnProperty(DAY)) {
      const day = DAYS[DAY];
      const div = document.createElement('div');
      div.className = 'pure-u-1-24';
      div.innerHTML = day;
      tableHeader.appendChild(div);
    }
  }

  calendar.appendChild(table);
}