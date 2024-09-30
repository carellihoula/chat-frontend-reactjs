

export interface PersonItemProps {
    id: number;
    name: string;
    photo: string;
    onClick: (id: number) => void,
    status: boolean
}

export interface Person {
    id: number;
    name: string;
    photo: string;
    status: boolean
    
}

// Message.tsx

export interface Message {
    id: number;
    sender: string;
    receiver: string;
    content: string;
    timestamp: Date;
    senderPhoto: string; 
  }
  