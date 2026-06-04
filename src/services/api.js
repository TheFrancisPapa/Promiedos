import * as f1Api from './f1Api';

// Este adaptador delega las llamadas a la API correcta según la categoría seleccionada.
// Por ahora solo tenemos F1, pero preparamos el terreno para MotoGP, WRC, TC, etc.

export const getDriverStandings = async (category, year = 'current') => {
  switch (category) {
    case 'f1':
      return f1Api.getDriverStandings(year);
    // case 'motogp': return motogpApi.getDriverStandings(year);
    default:
      return [];
  }
};

export const getConstructorStandings = async (category, year = 'current') => {
  switch (category) {
    case 'f1':
      return f1Api.getConstructorStandings(year);
    default:
      return [];
  }
};

export const getRaceSchedule = async (category, year = 'current') => {
  switch (category) {
    case 'f1':
      return f1Api.getRaceSchedule(year);
    default:
      return [];
  }
};

export const getDrivers = async (category, year = 'current') => {
  switch (category) {
    case 'f1':
      return f1Api.getDrivers(year);
    default:
      return [];
  }
};

export const getConstructors = async (category, year = 'current') => {
  switch (category) {
    case 'f1':
      return f1Api.getConstructors(year);
    default:
      return [];
  }
};

export const getCircuits = async (category, year = 'current') => {
  switch (category) {
    case 'f1':
      return f1Api.getCircuits(year);
    default:
      return [];
  }
};

export const getLastRaceResults = async (category) => {
  switch (category) {
    case 'f1':
      return f1Api.getLastRaceResults();
    default:
      return null;
  }
};

export const getLastQualifying = async (category) => {
  switch (category) {
    case 'f1':
      return f1Api.getLastQualifying();
    default:
      return null;
  }
};

export const getLastSprint = async (category) => {
  switch (category) {
    case 'f1':
      return f1Api.getLastSprint();
    default:
      return null;
  }
};
