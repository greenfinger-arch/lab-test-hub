export const pastLifeData = {
  isReady: false,
  title: "나의 전생 직업과 현생의 웬수",
  subTitle: "어쩐지 처음부터 킹받더라니.. 우리 무슨 사이였니?",
  mainImg: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=800", // 빈티지하고 신비로운 이미지
  questions: [
    {
      q: "오늘따라 그 '웬수'가 나를 유독 달달 볶는다면 나의 첫 생각은?",
      img: "https://images.unsplash.com/photo-1541533238202-48617d205027?w=600",
      a: [
        { text: "전생에 내가 쟤한테 빚을 졌나.. 참자..", type: "servant" },
        { text: "전생에 분명 내가 쟤 상사였을 거야. 복수하는 중인가?", type: "noble" }
      ]
    },
    {
      q: "길을 가다 우연히 마주친 그 사람! 나의 반응은?",
      img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600",
      a: [
        { text: "0.1초 만에 스마트폰 보는 척하며 투명 인간 모드!", type: "ninja" },
        { text: "어우 깜짝이야! 일단 어색한 비즈니스 미소를 발사한다.", type: "merchant" }
      ]
    },
    {
      q: "만약 타임머신이 있다면, 당신은 어느 시대로 가고 싶나요?",
      img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600",
      a: [
        { text: "화려한 파티와 드레스가 있는 중세 유럽 성 안", type: "noble" },
        { text: "자유롭게 산천을 유람하는 조선시대 한량 라이프", type: "ninja" }
      ]
    },
    {
      q: "그 사람과 단둘이 엘리베이터에 갇혔다! 가장 견디기 힘든 것은?",
      img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600",
      a: [
        { text: "숨 막히는 정적과 어색한 공기", type: "merchant" },
        { text: "언제 고쳐질지 모르는 막막함 그 자체", type: "servant" }
      ]
    },
    {
      q: "당신이 전생에 아주 귀한 물건을 가졌다면 그것은?",
      img: "https://images.unsplash.com/photo-1584266311624-3b1355b4c03b?w=600",
      a: [
        { text: "나라의 기밀이 담긴 비밀 지도", type: "ninja" },
        { text: "황금으로 치장된 화려한 장신구", type: "noble" }
      ]
    },
    {
      q: "웬수가 실수로 나에게 커피를 쏟았다! 사과하는 그에게 나는?",
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
      a: [
        { text: "괜찮다고 웃으며 말하지만 머릿속으론 세탁비 계산 중", type: "merchant" },
        { text: "속으로 '이거 일부러지?'라며 음모론을 펼친다.", type: "servant" }
      ]
    }
  ],
  results: {
    noble: {
      name: "품위 있는 공주님과 그녀를 시기한 시녀",
      img: "https://images.unsplash.com/photo-1589182397057-b1617b71ad3a?w=600",
      desc: "당신은 전생에 나라를 구한(?) 귀족 중의 귀족! 현생의 웬수는 전생에 당신의 화려함을 질투하던 시녀였을 가능성이 높아요. 그래서 지금도 괜히 당신을 깎아내리려 하는 거랍니다. 우아하게 무시해주는 게 상책! 비단길만 걸으세요~",
      affiliateLink: "https://link.coupang.com/a/noble-tea-set", 
      ctaText: "우아한 티타임을 위한 프리미엄 찻잔 세트"
    },
    servant: {
      name: "엄격한 대감님과 억울한 마당쇠",
      img: "https://images.unsplash.com/photo-1599508704512-2f19fe9f2033?w=600",
      desc: "전생에 당신은 일 잘하기로 소문난 성실한 마당쇠, 웬수는 사사건건 트집 잡던 깐깐한 대감님이었네요! 현생에서도 자꾸 당신에게 일을 미루거나 참견하는 건 그 버릇 못 고쳐서 그래요. 이제는 마당쇠 탈출! 당당하게 '내 일 아님!'을 외치세요.",
      affiliateLink: "https://link.coupang.com/a/massage-gun", 
      ctaText: "어깨 결린 마당쇠를 위한 시원한 마사지 건"
    },
    merchant: {
      name: "거대 상단 행수와 바가지 씌운 보부상",
      img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600",
      desc: "전생에 큰 장터를 주름잡던 큰손이었던 당신! 웬수는 당신에게 가짜 물건을 팔려다 걸린 보부상이었군요. 그래서 지금도 당신 앞에서 묘하게 눈치를 보거나 비굴하게 굴 수도 있어요. 경제적 자유를 꿈꾸는 당신, 전생의 운을 모아 대박 나세요!",
      affiliateLink: "https://link.coupang.com/a/gold-pig-bank", 
      ctaText: "전생의 재운을 불러오는 황금 돼지 저금통"
    },
    ninja: {
      name: "전설의 자객과 타겟이었던 비밀 요원",
      img: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5c?w=600",
      desc: "당신은 어둠 속에서 세상을 움직이던 전설의 자객! 웬수는 당신이 쫓던 비밀 요원이었을 거예요. 서로 쫓고 쫓기던 운명이 현생까지 이어진 거죠. 웬수가 자꾸 당신 주위를 맴도는 건 본능적인 경계심 때문일지도? 이제는 칼 대신 미소를 장전해보세요!",
      affiliateLink: "https://link.coupang.com/a/aromatherapy-oil", 
      ctaText: "지친 자객의 심신을 달래주는 아로마 오일"
    }
  }
};