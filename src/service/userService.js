export const saveUserInLocalStorage = (user) => {
  if (localStorage.getItem("users") == null) {
    var users = [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    if (!checkIfUserExists(user)) {
      var users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  localStorage.setItem("user", JSON.stringify(user));
}

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
}

export const checkUserInLocalStorage = () => {
  return getUserFromLocalStorage() !== null;
}

export const checkIfUserExists = (user) => {
  if (localStorage.getItem("users") == null) {
    return false;
  }
  var users = JSON.parse(localStorage.getItem("users"));
  for (var i = 0; i < users.length; i++) {
    if (users[i].userName === user.userName) {
      return true;
    }
  }
  return false;
}

export const getUserByUsername = (userName) => {
  if (localStorage.getItem("users") == null) {
    return null;
  }
  var users = JSON.parse(localStorage.getItem("users"));
  for (var i = 0; i < users.length; i++) {
    if (users[i].userName === userName) {
      return users[i];
    }
  }
  return null;
}

export const getUserById = (userId) => {
  if (localStorage.getItem("users") == null) {
    return null;
  }
  var users = JSON.parse(localStorage.getItem("users"));
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      return users[i];
    }
  }
  return null;
}

export const logoutCurrentUser = () => {
  localStorage.removeItem("user");
}

export const generateRandomColor = () => {
  let colors = ["red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "amber", "orange", "brown"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}