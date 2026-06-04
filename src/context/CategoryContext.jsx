import { createContext, useContext, useState, useEffect } from 'react';

export const CategoryContext = createContext();

export const CATEGORIES = {
  f1: {
    id: 'f1',
    name: 'Fórmula 1',
    shortName: 'F1',
    color: '#e10600',
    icon: '🏎️'
  },
  motogp: {
    id: 'motogp',
    name: 'MotoGP',
    shortName: 'MotoGP',
    color: '#da0000', // Rojo más oscuro o diferente
    icon: '🏍️'
  },
  wrc: {
    id: 'wrc',
    name: 'Rally WRC',
    shortName: 'WRC',
    color: '#005a9b',
    icon: '🚗'
  },
  indycar: {
    id: 'indycar',
    name: 'IndyCar',
    shortName: 'IndyCar',
    color: '#004b87',
    icon: '🏎️'
  },
  tc: {
    id: 'tc',
    name: 'Turismo Carretera',
    shortName: 'TC',
    color: '#00a3e0', // Celeste Argentina
    icon: '🚙'
  },
  nascar: {
    id: 'nascar',
    name: 'NASCAR',
    shortName: 'NASCAR',
    color: '#ffd100', // Amarillo NASCAR
    icon: '🚗'
  },
  wec: {
    id: 'wec',
    name: 'WEC / Le Mans',
    shortName: 'WEC',
    color: '#00205b',
    icon: '⏱️'
  },
  f2: {
    id: 'f2',
    name: 'Fórmula 2',
    shortName: 'F2',
    color: '#0090d0',
    icon: '🏎️'
  },
  f3: {
    id: 'f3',
    name: 'Fórmula 3',
    shortName: 'F3',
    color: '#e3000f',
    icon: '🏎️'
  },
  supergt: {
    id: 'supergt',
    name: 'Super GT',
    shortName: 'Super GT',
    color: '#ee1c25',
    icon: '🏁'
  },
  f1academy: {
    id: 'f1academy',
    name: 'F1 Academy',
    shortName: 'F1 Acad',
    color: '#e9006a', // Rosa / Fucsia
    icon: '👩‍🚀'
  },
  tc2000: {
    id: 'tc2000',
    name: 'TC2000',
    shortName: 'TC2000',
    color: '#e30613',
    icon: '🚘'
  },
  rallyarg: {
    id: 'rallyarg',
    name: 'Rally Argentino',
    shortName: 'Rally Arg',
    color: '#75b2dd',
    icon: '🏜️'
  }
};

export const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('f1');

  // Actualizar variables de CSS globales dependiendo de la categoría
  useEffect(() => {
    const root = document.documentElement;
    const catData = CATEGORIES[activeCategory];
    if (catData && catData.color) {
      root.style.setProperty('--category-main-color', catData.color);
    } else {
      root.style.setProperty('--category-main-color', '#e10600'); // F1 Default
    }
  }, [activeCategory]);

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory, CATEGORIES }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
