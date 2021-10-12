export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  edit: true,
  id,
});
