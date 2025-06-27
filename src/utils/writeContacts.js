import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
    }
    catch (err) {
        console.error('Error writing contacts:', err.message);
    }
};