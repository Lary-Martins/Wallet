import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/headerComponents/Header';
import AddForm from '../components/formsComponents/AddForm';
import EditForm from '../components/formsComponents/EditForm';
import Main from '../components/mainComponents/Main';

function Wallet() {
  const { edit } = useSelector((state) => state.wallet);

  return (
    <section>
      <Header />
      { edit ? <EditForm /> : <AddForm />}
      <Main />
    </section>
  );
}

export default Wallet;
