export const seasonOfLoveData = {
  isReady: false,
  title: "당신은 나의 인생에서 어떤 계절이었나요?",
  subTitle: "함께 걸어온 수만 일의 시간, 우리를 닮은 계절을 찾아서",
  mainImg: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=800", // 나란히 놓인 두 켤레의 신발이나 의자
  questions: [
    {
      q: "우리 처음 만났던 그날, 기억나나요? 그때 당신은 어떤 느낌이었소?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "싱그럽고 풋풋해서 보기만 해도 가슴 뛰던 봄꽃 같았지", type: "spring" },
        { text: "뜨거운 태양 아래서도 지치지 않던 정열적인 여름 같았소", type: "summer" }
      ]
    },
    {
      q: "아이들 키우고 정신없이 살던 시절, 우리 참 바빴구려. 그때 가장 생각나는 건?",
      img: "https://images.unsplash.com/photo-1502086223501-7ea2443d844c?w=600",
      a: [
        { text: "치열하게 일하고 땀 흘리며 함께 일구던 뜨거운 여름날", type: "summer" },
        { text: "힘든 일 끝내고 돌아와 서로의 어깨를 토닥이던 가을 저녁", type: "autumn" }
      ]
    },
    {
      q: "살다 보니 마음이 시리고 추운 날도 있었소. 그때 당신은 어땠나요?",
      img: "https://images.unsplash.com/photo-1483197452165-7abc1b347941?w=600",
      a: [
        { text: "말없이 곁에서 따뜻한 온기가 되어준 든든한 아랫목 같았소", type: "winter" },
        { text: "곧 봄이 올 거라며 나를 웃게 해주던 희망찬 바람 같았지", type: "spring" }
      ]
    },
    {
      q: "다시 태어난다면, 당신은 우리 인생의 어느 때로 돌아가고 싶소?",
      img: "https://images.unsplash.com/photo-1510337550647-e84f83e3bc18?w=600",
      a: [
        { text: "아무것도 몰랐지만 서로만 봐도 좋았던 첫 시작의 봄", type: "spring" },
        { text: "이제야 비로소 서로의 마음을 깊이 보게 된 지금 이 순간", type: "autumn" }
      ]
    },
    {
      q: "지금 내 곁에 앉아 있는 당신에게 꼭 해주고 싶은 말은?",
      img: "https://images.unsplash.com/photo-1494236581341-7d38b2e7d824?w=600",
      a: [
        { text: "그동안 고생 많았소. 내 곁에 있어 줘서 고마워", type: "autumn" },
        { text: "우리 남은 시간도 지금처럼 오순도순 재미나게 삽시다", type: "winter" }
      ]
    }
  ],
  results: {
    spring: {
      name: "여전히 내 가슴을 뛰게 하는 '나의 영원한 봄'",
      img: "https://images.unsplash.com/photo-1490750141103-6cac27aaab94?w=600",
      desc: "수십 년이 지났어도 내 눈엔 당신이 처음 만난 그날처럼 고와요. 당신 덕분에 내 인생엔 늘 꽃향기가 가득했소. 가끔 티격태격해도 돌아서면 당신뿐인 거 알지? 우리 남은 날들도 봄볕 아래 산책하듯 다정하게 걸어갑시다.",
      affiliateLink: "https://link.coupang.com/a/comfortable-shoes", 
      ctaText: "함께 산책할 때 신기 좋은 편한 커플 신발"
    },
    summer: {
      name: "함께 땀 흘리며 일궈온 '우리의 뜨거운 여름'",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "참 치열하고도 뜨겁게 살았구려. 당신이라는 든든한 동지가 없었다면 그 험한 세월을 어찌 버텼을까 싶소. 이제 그 뜨거웠던 열정은 깊은 신뢰가 되었네. 고생 많았소, 나의 동반자여. 이제는 그늘 아래서 시원한 바람 맞으며 편히 쉬어도 좋소.",
      affiliateLink: "https://link.coupang.com/a/massage-chair-mini", 
      ctaText: "고생한 서로의 어깨를 위해, 부모님 안마기"
    },
    autumn: {
      name: "함께해서 더 풍요로운 '인생의 고운 단풍'",
      img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600",
      desc: "인생의 열매들이 참 곱게도 익었구려. 단풍 든 산이 푸른 산보다 아름답듯, 당신의 주름진 미소가 세상에서 제일 예쁘오. 서로 닮아가는 우리 모습이 참 보기 좋네. 남은 인생은 이 가을 풍경처럼 여유롭고 넉넉하게, 서로를 더 귀하게 여기며 삽시다.",
      affiliateLink: "https://link.coupang.com/a/premium-tea-gift", 
      ctaText: "마주 앉아 도란도란 나누는 향긋한 차 세트"
    },
    winter: {
      name: "서로의 체온으로 이겨낸 '포근한 겨울밤'",
      img: "https://images.unsplash.com/photo-1517262905747-51cbb63bb901?w=600",
      desc: "바깥바람이 차가워도 당신과 함께라면 무서울 게 없소. 긴 세월 모진 풍파 다 겪었지만, 결국 남은 건 당신 손의 온기뿐이구려. 우리 인생의 겨울은 춥지 않고 참 포근하오. 내 곁에 묵묵히 있어 줘서, 고맙고 또 고맙소. 사랑하오.",
      affiliateLink: "https://link.coupang.com/a/cashmere-scarf", 
      ctaText: "서로의 목을 감싸줄 부드러운 커플 머플러"
    }
  }
};