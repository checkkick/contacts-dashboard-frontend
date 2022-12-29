export async function getClients() {
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}

export async function getClientById(id) {
  const response = await fetch(`http://localhost:3000/api/client/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}

export async function addClient(body) {
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  }

  return false;
}

export async function updateClient(id, body) {
  const response = await fetch(`http://localhost:3000/api/client/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const data = await response.json();

  return data;
}

export async function daeleteClient(id) {
  const response = await fetch(`http://localhost:3000/api/client/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}
