const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const render = () => {
  const startDate = document.getElementById('startDate') || new Date().toISOString().split('T')[0];
  const numberOfDays = document.getElementById('numberOfDays') || 17;
  const country = document.getElementById('country') || 'US';
  const calendar = document.getElementById('theCalendar');

  const table = document.createElement('div');
  const tableHeader = document.createElement('div');
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