import artFormsData from './artFormsData.json';

export interface ArtForm {
  id: string;
  name: string;
  state: string;
  region: string;
  shortDescription: string;
  detailedDescription: string;
  history: string;
  materialsUsed: string[];
  culturalSignificance: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  medium?: string;
}

export const artForms: ArtForm[] = artFormsData as ArtForm[];
