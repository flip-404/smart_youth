export default function SideBar() {
  // 각 버튼 공통 컴포넌트로 만들고, 버튼만 CSR로 구현한다.
  // text-weight 아직 설정하지 않았음
  // drop-shadow도 몇인지 설정하지 않ㄹ았음
  return (
    <div className="fixed left-0 h-screen w-280px bg-white drop-shadow">
      <div className="flex flex-col gap-46px pl-80px pt-130px">
        <div className="text-sideBar-active">홈</div>
        <div className="text-sideBar-inactive">문제 만들기</div>
        <div className="text-sideBar-inactive">찜한 문제들</div>
        <div className="text-sideBar-inactive">My</div>
      </div>
    </div>
  );
}
