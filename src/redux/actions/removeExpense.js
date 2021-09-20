export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const removeExpenses = (id) => ({
  type: REMOVE_EXPENSES,
  id,
});
