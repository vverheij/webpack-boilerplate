const users = [
  { name: 'victor', premium: true },
  { name: 'anna', premium: true },
  { name: 'teddoooo', premium: false },
  { name: 'napoleon', premium: false },
]

const getPremUsers = (users) => {
  return users.filter(u => u.premium);
}


export { getPremUsers, users as default }