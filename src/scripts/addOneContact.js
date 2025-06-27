import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    try {
        const newContact = faker.helpers.multiple(createFakeContact, {
            count: 1,
        });
        console.log('new:', newContact);
        const existingContacts = await readContacts();
        existingContacts.push(...newContact);
        await writeContacts(existingContacts);
        return existingContacts;
    }
    catch (err) {
        console.log(err);
    }
};

addOneContact();
