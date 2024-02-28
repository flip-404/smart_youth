import cls from "@/utils/cls";

type CategoryTabProps = {
  handleTabChange: (tab: string) => void;
  tabType: string;
  currentTab: string;
  contentCount: number;
  label: string;
};

export default function CategoryTab({
  handleTabChange,
  tabType,
  currentTab,
  contentCount,
  label,
}: CategoryTabProps) {
  return (
    <button
      className={cls(currentTab !== tabType ? "text-[#A3A3A3]" : "")}
      onClick={() => handleTabChange(tabType)}
    >
      {label}
      <span
        className={cls(
          currentTab !== tabType ? "invisible" : "",
          "text-[#A3A3A3]"
        )}
      >
        &nbsp;{contentCount}
      </span>
    </button>
  );
}
