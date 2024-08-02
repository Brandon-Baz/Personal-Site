// src/utils/exportResults.ts
import { saveAs } from 'file-saver';

export const exportToCSV = (data: any[], fileName: string) => {
    const csvContent = data.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, fileName);
};

export const exportToJSON = (data: any, fileName: string) => {
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    saveAs(blob, fileName);
};