export const bucketListData = {
  isReady: false,
  title: "나만의 퍼스널 버킷리스트",
  subTitle: "죽기 전, 당신의 영혼이 가장 원했던 단 하나의 일",
  mainImg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", // 광활한 산맥과 자유로운 느낌
  questions: [
    {
      q: "모든 제약이 사라진다면, 당신은 어떤 아침을 맞이하고 싶나요?",
      img: "https://images.unsplash.com/photo-1470252649358-96f3e8053288?w=600",
      a: [
        { text: "낯선 이국의 땅에서 들리는 파도 소리에 눈을 뜬다.", type: "adventurer" },
        { text: "햇살이 잘 드는 서재에서 차분하게 글을 쓰며 시작한다.", type: "artist" }
      ]
    },
    {
      q: "당신의 삶을 영화로 만든다면, 어떤 장르에 가까울까요?",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
      a: [
        { text: "예측 불가능한 도전과 성장이 가득한 어드벤처", type: "adventurer" },
        { text: "평범한 일상 속 소중한 인연을 다루는 드라마", type: "giver" }
      ]
    },
    {
      q: "지금 당장 통장에 거액이 입금된다면, 가장 먼저 하고 싶은 일은?",
      img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600",
      a: [
        { text: "아무도 나를 모르는 곳으로 가는 편도 티켓 끊기", type: "adventurer" },
        { text: "사랑하는 사람들을 위한 따뜻한 안식처 마련하기", type: "giver" }
      ]
    },
    {
      q: "누군가 당신의 이름을 기억할 때, 어떤 수식어가 붙길 원하시나요?",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
      a: [
        { text: "자신만의 독창적인 흔적을 남긴 사람", type: "artist" },
        { text: "주변을 따뜻하게 밝혀준 사람", type: "giver" }
      ]
    },
    {
      q: "당신이 살아오며 가장 평온함을 느꼈던 순간은?",
      img: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?w=600",
      a: [
        { text: "무언가에 깊이 몰입해 창작하고 있을 때", type: "artist" },
        { text: "사랑하는 이와 말없이 마주 앉아 있을 때", type: "giver" }
      ]
    },
    {
      q: "인생의 마지막 날, 단 하나의 후회가 남는다면 그것은?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "더 넓은 세상을 보지 못한 아쉬움", type: "adventurer" },
        { text: "나만의 작품(혹은 기록)을 남기지 못한 갈증", type: "artist" }
      ]
    }
  ],
  results: {
    adventurer: {
      name: "끝없는 지평선을 꿈꾸는, 자유로운 탐험가",
      img: "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?w=600",
      desc: "당신의 영혼은 정착보다 유목을 원하고 있습니다. 죽기 전 당신이 꼭 해야 할 일은 '아무 연고도 없는 곳에서 한 달 살아보기'입니다. 낯선 공기 속에서 비로소 당신의 진짜 모습을 만나게 될 거예요. 지금 그 지도를 펼쳐보세요.",
      affiliateLink: "https://link.coupang.com/a/travel-backpack", 
      ctaText: "당신의 첫 걸음을 함께할 튼튼한 여행 배낭"
    },
    artist: {
      name: "무(無)에서 유(有)를 만드는, 고독한 창조자",
      img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600",
      desc: "당신에게는 세상을 향해 하고 싶은 이야기가 아주 많군요. 당신의 버킷리스트 1순위는 '나만의 이름으로 된 책(혹은 작품) 완성하기'입니다. 완벽하지 않아도 괜찮습니다. 당신의 흔적을 남기는 행위 자체가 당신의 삶을 완성해줄 것입니다.",
      affiliateLink: "https://link.coupang.com/a/fountain-pen-set", 
      ctaText: "당신의 문장을 기록해줄 클래식 만년필 세트"
    },
    giver: {
      name: "곁을 따뜻하게 지키는, 사랑의 수호자",
      img: "https://images.unsplash.com/photo-1516733985036-3fe55abc59b7?w=600",
      desc: "당신은 사랑을 주고받을 때 가장 빛나는 존재입니다. 당신이 꼭 해봐야 할 일은 '사랑하는 사람들을 위한 정성 어린 만찬 열기'입니다. 화려한 요리가 아니어도 좋습니다. 당신의 진심이 담긴 시간은 그들의 기억 속에 당신을 영원히 살게 할 것입니다.",
      affiliateLink: "https://link.coupang.com/a/dinner-party-deco", 
      ctaText: "소중한 자리를 빛내줄 테이블 웨어 세트"
    }
  }
};