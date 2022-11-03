/**
 * FETCH API
 */
const URL = 'http://localhost:3000/todos';
const URLUser = 'http://localhost:3000/users';

/**
 * Get all data of tasks from JSON server
 * @param {string} url
 *
 * @returns {{object} || raise {error}}
 * */
export const get = async () => {
  try {
    const response = await fetch(URL);
    const data = response.json();
    if (!response.ok) {
      throw response.statusText;
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get all data of users from JSON server
 * @param {string} url
 * @param {number} id
 *
 * @returns {{object} || raise {error}}
 */

export const getUser = async () => {
  try {
    const response = await fetch(`${URLUser}`);
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    throw response.statusText;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get all data of users from JSON server
 * @param {string} url
 * @param {number} id
 *
 * @returns {{object} || raise {error}}
 */

export const getTasksByUser = async (id) => {
  try {
    const response = await fetch(`${URL}?userID=${id}`);
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    throw response.statusText;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get task from JSON server by id
 * @param {string} url
 * @param {number} id
 *
 * @returns {{object} || raise {error}}
 */

export const getTasksById = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`);
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    throw response.statusText;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Add new task to JSON server
 * @param {object} data
 */
export const post = async (data) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw response.statusText;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Update data tasks with specific id in database
 * @param {object} data
 * @param {number} id
 */
export const update = async (id, data) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw response.statusText;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Delete data tasks with specific id in database
 * @param {object} data
 * @param {number} id
 */
export const remove = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw response.statusText;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
