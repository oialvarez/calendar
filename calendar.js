const render = () => {
  const startDate = document.getElementById('startDate') || new Date().toISOString().split('T')[0];
  const numberOfDays = document.getElementById('numberOfDays') || 17;
  const country = document.getElementById('country') || 'US';
  const calendar = document.getElementById('theCalendar');
  calendar.style.display = 'inline';
}