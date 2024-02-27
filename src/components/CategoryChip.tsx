interface CategoryChipProps {
  label: string;
}

export default function CategoryChip({ label }: CategoryChipProps) {
  return (
    <div className="flex items-center px-[22px] py-[6px] rounded-[99px] border">
      {label}
    </div>
  );
}
