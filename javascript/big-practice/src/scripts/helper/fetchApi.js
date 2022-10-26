/**
 * FETCH API
 */
const URL = 'http://localhost:3000/users';

/**
 * Get all data from JSON server
 * @returns array which is parsed from json
 */
export const get = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw response.statusText;
    }

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Add new user to JSON server
 * @param {object} data / new user data
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
 * @param {object} data / task list data of specified user
 * @param {number} id / user Id
 */
export const patch = async (data, id) => {
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
