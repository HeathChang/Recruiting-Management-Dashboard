import { IconHeart } from '@tabler/icons-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-[32px] px-[32px] min-w-[720px]">
      {/* Header */}
      <div className="w-full flex justify-between ">
        <div>Header</div>
        <div className='flex gap-[8px]'>
          <div>지원자/메일함</div>
          <div>채용팀</div>
        </div>
      </div>
      {/* Sub-Header */}
      <div className="flex gap-[8px]">
        <div>활성화</div>
        <div>메모 추가</div>
      </div>
      {/* Search Area */}
      <div className="flex justify-between">
        <div className='flex gap-[8px]'>
          <div>평가대상</div>
          <div>input area</div>
        </div>
        <div className='flex gap-[8px]'>
          <div>플러스 버튼</div>
          <div>필터 버튼</div>
          <div>정렬 버튼</div>
          <div>대량 업데이트</div>
          <div>다중선택</div>
          <div>합격</div>
          <div>두개</div>
        </div>
      </div>
      {/* Main Area */}
      <div className="flex justify-between">
        <div>지원</div>
        <div>TA</div>
        <div>1차 인터뷰</div>
        <div>코딩테스트</div>
        <div>2차인터뷰</div>
        <div>입사확정</div>
      </div>


    </div>
  )
}

export default App

