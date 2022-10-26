export async function getTodos() {
  try {
    const response = await fetch("https://todos.drewh.net/api/todos");
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error("Unable to get todos");
  }
}

export async function addTodo(title) {
  try {
    const response = await fetch("https://todos.drewh.net/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: title }),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error("Unable to get todos");
  }
}
