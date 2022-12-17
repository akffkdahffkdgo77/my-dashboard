import React from 'react';

interface ICardHeader {
    children: React.ReactNode[];
}

export default function CardHeader({ children }: ICardHeader) {
    return <div className="flex items-center gap-x-4 p-4 font-mono h-[72px]">{children}</div>;
}
