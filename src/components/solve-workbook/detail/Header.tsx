export default function Header() {
  return (
    <div className="absolute h-[80px] z-[8] bg-white w-full px-[80px] flex gap-[20px] items-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.2628 6.99976L24.9185 8.65549L15.3115 18.2626L24.9185 27.8696L23.2628 29.5253L12 18.2626L23.2628 6.99976Z"
          fill="black"
        />
      </svg>
      <p>문제의 제목을 입력하세요.</p>
    </div>
  );
}
