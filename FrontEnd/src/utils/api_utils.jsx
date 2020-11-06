export async function getEvents() {
  const response = await fetch("http://52.188.114.62:80/api/events/", { method: "GET" });
  const json = await response.json();
  return json.data;
}

export async function getOrganizations(eventID) {
  const data = { event: eventID, };
  const response = await fetch(
    "http://52.188.114.62:80/api/organizations/", 
    { 
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const json = await response.json();
  return json.data;
}

export async function registerVolunteer(eventID, password, organization, first, last, email) {
  const data = { 
    event: eventID, 
    password: password,
    organization: organization,
    first_name: first,
    last_name: last,
    email: email,
  };
  const response = await fetch(
    "http://52.188.114.62:80/api/register_volunteer/", 
    { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const json = await response.json();
  return json.id;
}

export async function registerInventory(volunteerID, password, supplyID, amount, expirationYear, expirationMonth, expirationDay) {
  const data = { 
    volunteer: volunteerID, 
    password: password,
    supply: supplyID,
    amount: amount,
    expiraton: {
      year: expirationYear,
      month: expirationMonth,
      day: expirationDay,
    },
  };
  const response = await fetch(
    "http://52.188.114.62:80/api/register_inventory/", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const json = await response.json();
  return json.category;
}

export async function registerSupply(volunteerID, password, name, brand, refNumber) {
  const data = { 
    volunteer: volunteerID, 
    password: password,
    name: name,
    brand: brand,
    ref_number: refNumber,
  };
  const response = await fetch(
    "http://52.188.114.62:80/api/register_supply/", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const json = await response.json();
  return json.id;
}

export async function getSupplies(volunteerID, password, imageText) {
  const data = { 
    volunteer: volunteerID, 
    password: password,
    image_text: imageText,
  };
  const response = await fetch(
    "http://52.188.114.62:80/api/search_supply/", 
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const json = await response.json();
  return json.search_results;
}

export async function getUserStats(volunteerID, password) {
  const data = { 
    volunteer: volunteerID, 
    password: password,
  };
  const response = await fetch(
    "http://52.188.114.62:80/api/stats/", 
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const json = await response.json();
  return {
    today: json.today,
    allTime: json.all_time,
  };
}