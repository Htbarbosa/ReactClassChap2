import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./componensts/Dashboard";
import { Header } from "./componensts/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <Modal
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cadastrar Transação</h2>
                </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
