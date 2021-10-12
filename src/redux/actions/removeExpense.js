export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});
