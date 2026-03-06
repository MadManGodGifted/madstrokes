export interface ArtForm {
    id: string;
    name: string;
    state: string;
    region: 'North' | 'South' | 'East' | 'West' | 'Northeast' | 'Central';
    coordinates: [number, number];
    shortDescription: string;
    medium: string;
    origin: string;
    approxAge: string;
    significance: string;
    image: string;
}

export const artForms: ArtForm[] = [
    {
        id: 'warli',
        name: 'Warli Art',
        state: 'Maharashtra',
        region: 'West',
        coordinates: [19.0760, 72.8777],
        shortDescription: 'Tribal art characterized by simple geometric shapes.',
        medium: 'Rice paste, red ochre background',
        origin: 'North Sahyadri Range',
        approxAge: '2500-3000 BCE',
        significance: 'Depicts social life and relationship with nature.',
        image: '/images/art/warli.jpg'
    },
    {
        id: 'madhubani',
        name: 'Madhubani Painting',
        state: 'Bihar',
        region: 'East',
        coordinates: [26.3467, 86.0768],
        shortDescription: 'Bright, colorful folk art done with fingers, twigs, and brushes.',
        medium: 'Natural dyes, handmade paper',
        origin: 'Mithila region',
        approxAge: 'Centuries old (Ramayana period)',
        significance: 'Used for rituals and festive occasions.',
        image: '/images/art/madhubani.jpg'
    },
    {
        id: 'gond',
        name: 'Gond Art',
        state: 'Madhya Pradesh',
        region: 'Central',
        coordinates: [22.9734, 78.6569],
        shortDescription: 'Dot and line patterns depicting local flora and fauna.',
        medium: 'Natural colors on mud walls or canvas',
        origin: 'Gond tribe',
        approxAge: '1400 years',
        significance: 'Reflects the tribe\'s belief that everything is inhabited by a spirit.',
        image: '/images/art/gond.jpg'
    },
    {
        id: 'kalamkari',
        name: 'Kalamkari',
        state: 'Andhra Pradesh',
        region: 'South',
        coordinates: [13.5859, 79.9865],
        shortDescription: 'Hand-painted or block-printed cotton textile art.',
        medium: 'Natural dyes on cotton fabric',
        origin: 'Srikalahasti & Machilipatnam',
        approxAge: '3000 years',
        significance: 'Depicts scenes from Hindu mythology.',
        image: '/images/art/kalamkari.jpg'
    },
    {
        id: 'pattachitra',
        name: 'Pattachitra',
        state: 'Odisha',
        region: 'East',
        coordinates: [20.2961, 85.8245],
        shortDescription: 'Cloth-based scroll painting with intricate details.',
        medium: 'Natural colors on treated cloth',
        origin: 'Puri & Raghurajpur',
        approxAge: '5th Century BC',
        significance: 'Closely related to Lord Jagannath cult.',
        image: '/images/art/pattachitra.jpg'
    }
];
