import { Container, TransactionTableContainer } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar modal" className="react-modal-close" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    type="text"
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTableContainer>
                    <button
                        type="button"
                    >
                        <img src={incomeImg} alt="Entrada" />
                    </button>

                    <button
                        type="button"
                    >
                        <img src={outcomeImg} alt="Saída" />
                    </button>
                </TransactionTableContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    )
}