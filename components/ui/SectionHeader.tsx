export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-center text-foreground">
      {title}
    </h2>
  );
}
