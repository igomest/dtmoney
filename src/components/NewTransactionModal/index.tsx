import { Container, TransactionTypeContainer, RadioBox } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal'
import { useState } from 'react'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    const [type, setType] = useState('deposit')
    
    
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

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                    </RadioBox>
                </TransactionTypeContainer>

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