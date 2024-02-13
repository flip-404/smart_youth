import SupportDropDown from "./SupportDropDown";

export default function Support() {
  return (
    <>
      <div className="w-full flex flex-col pl-85px pr-120px">
        <p className="mb-37px">궁금해요</p>
        <div className="flex flex-col gap-21px">
          <SupportDropDown />
          <SupportDropDown />
          <SupportDropDown />
          <SupportDropDown />
        </div>
      </div>
    </>
  );
}
