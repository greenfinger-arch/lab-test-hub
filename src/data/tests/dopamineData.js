export const dopamineData = {
  isReady: false,
  title: "나의 도파민 중독 유형 테스트",
  subTitle: "내 뇌는 지금 무엇에 지배당하고 있을까?",
  mainImg: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800", // 화려하고 자극적인 네온 조명 이미지
  questions: [
    {
      q: "자기 전, 딱 '5분만' 보려고 켠 유튜브(또는 틱톡)... 정신 차려보니?",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
      a: [
        { text: "이미 2시간 경과, 눈은 충혈됐지만 멈출 수 없다.", type: "scroll" },
        { text: "보면서 배가 고파져서 배달 앱을 켜고 있다.", type: "snack" }
      ]
    },
    {
      q: "스트레스 받는 날, 나를 가장 위로해주는 것은?",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "장바구니에 담아뒀던 물건 결제하기(택배는 나의 힘!)", type: "shopping" },
        { text: "아무 생각 없이 게임이나 드라마 몰아보기", type: "scroll" }
      ]
    },
    {
      q: "맛있는 음식을 먹을 때 당신의 필수 행동은?",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
      a: [
        { text: "먹는 순간에도 다음엔 뭐 먹을지 고민한다.", type: "snack" },
        { text: "일단 사진 찍어서 SNS에 올리고 반응을 기다린다.", type: "heart" }
      ]
    },
    {
      q: "스마트폰 알림 배지가 떠 있으면 당신은?",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "절대 못 참지! 바로 확인해서 지워야 직성이 풀린다.", type: "heart" },
        { text: "귀찮지만 확인은 한다. (그러다 또 30분 순삭)", type: "scroll" }
      ]
    },
    {
      q: "진정한 '휴식'을 위해 당신에게 필요한 환경은?",
      img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600",
      a: [
        { text: "에어컨 빵빵한 집에서 맛있는 거 먹기", type: "snack" },
        { text: "완전 핫하고 힙한 곳에서 '인생샷' 남기기", type: "heart" }
      ]
    },
    {
      q: "쇼핑몰에서 '품절 임박'이라는 문구를 발견했다면?",
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600",
      a: [
        { text: "심장이 뛴다. 이건 하늘이 주신 기회다. 일단 결제!", type: "shopping" },
        { text: "내가 정말 필요한 건지 10초 정도는 고민해본다.", type: "minimal" }
      ]
    }
  ],
  results: {
    scroll: {
      name: "무한 스크롤 좀비, 숏폼 중독자",
      img: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600",
      desc: "당신의 뇌는 지금 15초짜리 자극에 완벽히 길들여졌군요! 멍하니 화면을 올리다 보면 소중한 시간이 증발해버리곤 해요. 하지만 이건 당신의 잘못이 아니라 알고리즘이 너무 똑똑한 탓! 가끔은 스마트폰을 멀리 던지고 먼 산을 바라보는 '뇌 휴식'이 절실합니다.",
      affiliateLink: "https://link.coupang.com/a/phone-lock-box", 
      ctaText: "강제로 폰을 가두는! 스마트폰 금욕 상자 보기"
    },
    snack: {
      name: "맛있는 행복 추구, 야식 사냥꾼",
      img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db06?w=600",
      desc: "스트레스를 먹는 즐거움으로 푸는 스타일이시군요! 입안 가득 퍼지는 자극적인 맛이 당신의 도파민을 폭발시킵니다. 하지만 야식 후의 후회는 더 큰 스트레스를 부를 수 있어요. 가끔은 자극적인 음식 대신 따뜻한 차 한 잔으로 위장을 달래주는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/zero-calorie-snack", 
      ctaText: "죄책감 없는 간식! 제로 칼로리 푸드 모음"
    },
    shopping: {
      name: "택배 상자 수집가, 쇼핑의 화신",
      img: "https://images.unsplash.com/photo-1580913182744-83482294103f?w=600",
      desc: "결제 완료 버튼을 누를 때의 그 짜릿함! 당신에게 쇼핑은 단순한 소비가 아니라 생존을 위한 도파민 충전이네요. 택배 박스를 뜯을 때의 설렘은 최고지만, 통장 잔고를 지키기 위해선 '장바구니 3일 뒤 결제하기' 규칙을 만들어보는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/saving-book", 
      ctaText: "돈 모으는 재미를 주는! 저축 습관 통장"
    },
    heart: {
      name: "좋아요 갈구, 관심의 아이콘",
      img: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=600",
      desc: "사람들의 반응과 빨간색 하트 알림에 뇌가 번쩍 깨는 타입! SNS 속 완벽한 내 모습에 뿌듯함을 느끼지만, 현실의 '나'도 충분히 멋지다는 걸 잊지 마세요. 가끔은 업로드용 사진이 아닌, 내 눈에만 담는 예쁜 풍경을 즐겨보는 시간을 가져보세요.",
      affiliateLink: "https://link.coupang.com/a/disposable-camera", 
      ctaText: "디지털 대신 아날로그로! 일회용 필름 카메라"
    }
  }
};