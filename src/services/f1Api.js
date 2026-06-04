// src/services/api.js
// Usando Jolpica F1 API (reemplazo de Ergast)

const BASE_URL = 'https://api.jolpi.ca/ergast/f1';

export const getDriverStandings = async (year = 'current') => {
  try {
    const res = await fetch(`${BASE_URL}/${year}/driverStandings.json`);
    const data = await res.json();
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  } catch (error) {
    console.error("Error fetching driver standings:", error);
    return [];
  }
};

export const getConstructorStandings = async (year = 'current') => {
  try {
    const res = await fetch(`${BASE_URL}/${year}/constructorStandings.json`);
    const data = await res.json();
    return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
  } catch (error) {
    console.error("Error fetching constructor standings:", error);
    return [];
  }
};

export const getRaceSchedule = async (year = 'current') => {
  try {
    const res = await fetch(`${BASE_URL}/${year}.json`);
    const data = await res.json();
    return data.MRData.RaceTable.Races;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    return [];
  }
};

export const getDrivers = async (year = 'current') => {
    try {
        const res = await fetch(`${BASE_URL}/${year}/drivers.json`);
        const data = await res.json();
        return data.MRData.DriverTable.Drivers;
    } catch (error) {
        console.error("Error fetching drivers:", error);
        return [];
    }
};

export const getConstructors = async (year = 'current') => {
    try {
        const res = await fetch(`${BASE_URL}/${year}/constructors.json`);
        const data = await res.json();
        return data.MRData.ConstructorTable.Constructors;
    } catch (error) {
        console.error("Error fetching constructors:", error);
        return [];
    }
};

export const getCircuits = async (year = 'current') => {
    try {
        const res = await fetch(`${BASE_URL}/${year}/circuits.json`);
        const data = await res.json();
        return data.MRData.CircuitTable.Circuits;
    } catch (error) {
        console.error("Error fetching circuits:", error);
        return [];
    }
};

export const getLastRaceResults = async () => {
    try {
        const res = await fetch(`${BASE_URL}/current/last/results.json`);
        const data = await res.json();
        return data.MRData.RaceTable.Races[0];
    } catch (error) {
        console.error("Error fetching last race results:", error);
        return null;
    }
};

export const getLastQualifying = async () => {
    try {
        const res = await fetch(`${BASE_URL}/current/last/qualifying.json`);
        const data = await res.json();
        return data.MRData.RaceTable.Races[0];
    } catch (error) {
        console.error("Error fetching last qualifying:", error);
        return null;
    }
};

export const getLastSprint = async () => {
    try {
        const res = await fetch(`${BASE_URL}/current/last/sprint.json`);
        const data = await res.json();
        return data.MRData.RaceTable.Races[0];
    } catch (error) {
        console.error("Error fetching last sprint:", error);
        return null;
    }
};
