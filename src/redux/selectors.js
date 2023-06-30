export const getContacts = state => state.contacts.items;
export const getIsError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

export const getFilter = state => state.filters.value;
