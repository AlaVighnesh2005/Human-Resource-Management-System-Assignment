export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function registerUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function loginUser(username, password) {
  const users = getUsers();
  return users.find(
    (u) => u.username === username && u.password === password
  );
}
