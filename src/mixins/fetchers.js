export async function get(route) {
  let response = await fetch(route);
  let data = await response.json()
  return data;
}


export async function post(route, payload) {
  let response = await fetch(route, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(payload)
  })
  let data = await response.json()
  return data
}

export async function put(route, payload) {
  let response = await fetch(route, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(payload)
  })
  let data = await response.json()
  return data
}

export async function remove(route, payload) {
  let response = await fetch(route, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(payload)
  })
  let data = await response.json()
  return data
}
