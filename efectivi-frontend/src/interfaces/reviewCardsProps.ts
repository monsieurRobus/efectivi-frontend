export interface ReviewCardProps {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    Title:       string;
    Description: Description[];
    ClientName:  string;
    url:         string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Fecha:       Date;
}

export interface Description {
    type:     string;
    children: Child[];
}

export interface Child {
    type: string;
    text: string;
}
