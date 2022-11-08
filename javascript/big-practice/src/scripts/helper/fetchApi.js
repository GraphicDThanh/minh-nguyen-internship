import URL_API from '../constants/api';
import { API_MESSAGE } from '../constants/messages';

/**
 * FETCH API
 */
const todosURL = `${URL_API.URL}${URL_API.TODOS_URL}`;
const usersURL = `${URL_API.URL}${URL_API.USERS_URL}`;

/**
 * Get all data of users from JSON server
 * @param {string} url
 * @param {number} id
 *
 * @returns {{object} || raise {error}}
 */

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${usersURL}?userID=${id}`);
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    throw response.statusText;
  } catch (error) {
    console.error(API_MESSAGE.GET + error);
    throw error;
  }
};

/**
 * Get data of user from JSON server by mail
 * @param {string} url
 * @param {number} id
 *
 * @returns {{object} || raise {error}}
 */

export const getUserByMail = async (mail) => {
  try {
    const response = await fetch(`${usersURL}?mail=${mail}`);
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    throw response.statusText;
  } catch (error) {
    console.error(API_MESSAGE.GET + error);
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
    const response = await fetch(`${todosURL}?userID=${id}`);
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    throw response.statusText;
  } catch (error) {
    console.error(API_MESSAGE.GET + error);
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
    const response = await fetch(`${todosURL}/${id}`);
    if (response.ok) {
      const user = await response.json();
      return user;
    }
    throw response.statusText;
  } catch (error) {
    console.error(API_MESSAGE.GET + error);
    throw error;
  }
};

/**
 * Add new task to JSON server
 * @param {object} data
 */
export const create = async (data) => {
  try {
    const response = await fetch(todosURL, {
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
    console.error(API_MESSAGE.POST + error);
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
    const response = await fetch(`${todosURL}/${id}`, {
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
    console.error(API_MESSAGE.PATCH + error);
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
    const response = await fetch(`${todosURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw response.statusText;
    }
  } catch (error) {
    console.error(API_MESSAGE.DELETE + error);
    throw error;
  }
};
