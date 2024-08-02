// src/hooks/useModal.ts
import { useState, useCallback } from 'react';

interface UseModalResult<T> {
    isOpen: boolean;
    selectedItem: T | null;
    open: (item: T) => void;
    close: () => void;
    toggle: () => void;
}

function useModal<T>(): UseModalResult<T> {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    const open = useCallback((item: T) => {
        setSelectedItem(item);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        setSelectedItem(null);
    }, []);

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return { isOpen, selectedItem, open, close, toggle };
}

export default useModal;