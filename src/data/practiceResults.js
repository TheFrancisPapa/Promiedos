// src/data/practiceResults.js
// Lee dinámicamente de los resultados auto-generados por GitHub Actions usando Fast-F1
import dynamicResults from './practiceResults.json';

export const practiceResults = dynamicResults;

export const getPracticeResults = () => {
    return practiceResults;
};
