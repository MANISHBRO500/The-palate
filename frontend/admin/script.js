async function fetchBookings() {
    const res = await fetch('/api/bookings');
    const bookings = await res.json();
    const container = document.getElementById('bookings');
  
    container.innerHTML = bookings.map(b => `
      <div class="card">
        <p><strong>${b.name}</strong> (${b.email})</p>
        <p>Event: ${b.event}</p>
        <p>${b.date} (${b.day}) | ${b.startTime} - ${b.endTime}</p>
        <p>People: ${b.people}</p>
        <p>Status: <strong>${b.status}</strong></p>
        ${b.status === 'Pending' ? `
          <button onclick="updateStatus('${b._id}', 'Accepted')">Accept</button>
          <button onclick="updateStatus('${b._id}', 'Denied')">Deny</button>
        ` : ''}
      </div>
    `).join('');
  }
  
  async function updateStatus(id, status) {
    await fetch(`/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    fetchBookings();
  }
  
  fetchBookings();
  