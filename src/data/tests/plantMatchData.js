export const plantMatchData = {
  id: "plantMatch",
  title: "나의 성향 저격 반려식물 찾기",
  relatedPostUrl: "https://ranklamp.com/find-your-soul-partner-plant",
  subTitle: "식물 킬러 탈출! 당신의 라이프스타일과 통하는 초록 단짝은?",
  isReady: true,
  mainImg: "/images/plant-main.jpg",
  questions: [
    {
      q: "드디어 기다리던 주말! 당신의 충전 방식은?",
      img: "/images/plant-q1.jpg",
      a: [
        { text: "광합성이 필요해! 햇살 좋은 카페나 야외 활동 ☀️", type: "SUN" },
        { text: "커튼 치고 스탠드 하나면 충분, 집에서의 정적인 휴식 🕯️", type: "SHADE" }
      ]
    },
    {
      q: "친구가 갑자기 울면서 전화를 했다면 당신은?",
      img: "/images/plant-q2.jpg",
      a: [
        { text: "일단 같이 울어준다. '무슨 일이야.. 속상해 죽겠네' 🫂", type: "HUMID" },
        { text: "침착하게 원인을 묻는다. '누구 때문이야? 상황이 어떻게 된 건데?' 🧐", type: "DRY" }
      ]
    },
    {
      q: "새로운 취미를 시작할 때 당신의 스타일은?",
      img: "/images/plant-q3.jpg",
      a: [
        { text: "장비부터 풀세트로! 화려하게 시작하는 맥시멀리스트 🛍️", type: "SUN" },
        { text: "최소한으로 소박하게, 본질에 집중하는 미니멀리스트 🧘", type: "DRY" }
      ]
    },
    {
      q: "갑자기 쏟아지는 업무 폭탄! 당신의 멘탈 상태는?",
      img: "/images/plant-q4.jpg",
      a: [
        { text: "주변에 도움을 청하거나 수다로 스트레스를 푼다 🗣️", type: "HUMID" },
        { text: "혼자 구석에서 묵묵히 하나씩 해치운다 🦾", type: "SHADE" }
      ]
    },
    {
      q: "당신의 방 안에서 가장 비중이 큰 물건은?",
      img: "/images/plant-q5.jpg",
      a: [
        { text: "컬러풀한 소품, 여행 기념품 등 활기찬 아이템 🎨", type: "SUN" },
        { text: "책, 노트북, 깔끔한 무채색 가구들 💻", type: "SHADE" }
      ]
    }
  ],
  results: {
    SUN: {
      name: "파이팅 넘치는 '여인초'",
      img: "/images/plant-res01.jpg",
      desc: "당신은 존재감 뿜뿜! 시원시원한 잎을 가진 여인초와 닮았네요. 사람들의 관심을 먹고 자라며, 가끔은 과한 열정으로 번아웃이 오기도 하지만 그게 당신의 매력! 웅장한 기운으로 집안 분위기를 압도해 보세요.",
      ctaText: "거실의 주인공, 여인초 구경하기",
      affiliateLink: "https://link.coupang.com/a/dXmDWd"
    },
    SHADE: {
      name: "무심한 듯 시크한 '스투키'",
      img: "/images/plant-res02.jpg",
      desc: "한 달에 한 번 물 주는 것도 귀찮으시죠? 걱정 마세요. 스투키는 당신이 자신을 잊어버릴 때 가장 행복해합니다. '나한테 관심 꺼!'라고 외치는 스투키와 함께 서로 간섭하지 않는 쿨한 동거 생활을 즐겨보세요.",
      ctaText: "게으른 집사용 스투키 보러가기",
      affiliateLink: "https://link.coupang.com/a/dXmziN"
    },
    DRY: {
      name: "불사조 멘탈 '산세베리아'",
      img: "/images/plant-res03.jpg",
      desc: "어떤 악조건에서도 살아남는 당신, 식물계의 생존왕 산세베리아가 딱입니다. 공기 정화 능력은 덤! 웬만해서는 죽지 않는 강인함으로 당신의 든든한 초록 보디가드가 되어줄 거예요.",
      ctaText: "강철 생명력 산세베리아 찾기",
      affiliateLink: "https://link.coupang.com/a/dXmZcg"
    },
    HUMID: {
      name: "애교 만점 수다쟁이 '마란타'",
      img: "/images/plant-res04.jpg",
      desc: "밤이 되면 잎을 모아 기도하는 섬세한 당신! 마란타는 당신의 작은 관심에도 민감하게 반응하며 매일 새로운 모습을 보여줄 거예요. 조금 까다롭지만, 그만큼 사랑스러운 반려식물과 깊은 교감을 나눠보세요.",
      ctaText: "섬세한 감성 마란타 구경하기",
      affiliateLink: "https://link.coupang.com/a/dXm9XN"
    }
  }
};