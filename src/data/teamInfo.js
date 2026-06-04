export const TEAM_COLORS = {
  mercedes: '#00D2BE',
  ferrari: '#DC0000',
  red_bull: '#0600EF', // Oracle Red Bull
  mclaren: '#FF8000', // Papaya Orange
  aston_martin: '#229971',
  alpine: '#0090FF',
  williams: '#005AFF', // Williams Blue
  rb: '#1534CC', // Racing Bulls
  sauber: '#F50537', // Audi (2026) / Kick Sauber
  audi: '#F50537', // Por si la API devuelve 'audi'
  haas: '#E6002B', // Haas Red
  cadillac: '#B5A265' // Cadillac Gold
};

import imageMap from './imageMap.json';

export const getTeamColor = (constructorId) => {
  return TEAM_COLORS[constructorId?.toLowerCase()] || 'var(--f1-red)';
};

export const getTeamLogo = (constructorId) => {
  const id = constructorId?.toLowerCase();
  return imageMap.logos[id] || `/images/teams/logos/${id}.jpg`;
};

export const getTeamCar = (constructorId) => {
  const id = constructorId?.toLowerCase();
  return imageMap.cars[id] || `/images/teams/cars/${id}.jpg`;
};

export const getDriverProfiles = (driverId) => {
  const id = driverId?.toLowerCase();
  let normalizedId = id;
  if (id && id.includes('_')) {
      normalizedId = id.split('_').pop();
  }
  
  const profiles = imageMap.drivers[normalizedId] || imageMap.drivers[id];
  if (Array.isArray(profiles)) return profiles;
  if (typeof profiles === 'string') return [profiles];
  
  return [`/images/drivers/profiles/${id}.jpg`];
};
