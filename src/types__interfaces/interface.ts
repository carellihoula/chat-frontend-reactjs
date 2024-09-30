

export interface PersonItemProps {
    id: number;
    name: string;
    photo: string;
    onClick: (id: number) => void
}

export interface Person {
    id: number;
    name: string;
    photo: string;
    
}