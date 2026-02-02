import { createContext, useContext, useState, type ReactNode } from 'react';

interface DiagnosisContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const DiagnosisContext = createContext<DiagnosisContextType | undefined>(undefined);

export const DiagnosisProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <DiagnosisContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </DiagnosisContext.Provider>
    );
};

export const useDiagnosis = () => {
    const context = useContext(DiagnosisContext);
    if (!context) {
        throw new Error('useDiagnosis must be used within a DiagnosisProvider');
    }
    return context;
};
