import Image from 'next/image';

export function BookCard({ title, cover }: { title: string; cover: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-48 relative">
        <Image src={cover} alt={title} fill className="object-cover rounded-lg shadow-md" />
      </div>
      <h3 className="mt-4 text-center text-sm font-medium text-foreground">{title}</h3>
    </div>
  );
}
