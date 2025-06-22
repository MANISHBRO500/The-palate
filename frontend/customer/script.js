document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      event: form.event.value,
      date: form.date.value,
      day: form.day.value,
      startTime: form.startTime.value,
      endTime: form.endTime.value,
      people: form.people.value,
      status: 'Pending'
    };
  
    const res = await fetch('https://the-palate.onrender.com/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  
    const result = await res.json();
    alert(result.message);
    form.reset();
  });
  
