export const fengShuiWealthData = {
  id: "fengshui-wealth",
  title: "내 방의 '재물운' 골든스팟 진단",
  relatedPostUrl: "https://ranklamp.com/2026-bedroom-feng-shui-wealth-guide/",
  subTitle: "혹시 당신의 방이 돈이 새 나가는 구조인가요? 풍수지리로 분석한 2026년 맞춤형 재물운 인테리어 솔루션.",
  isReady: true,
  mainImg: "/images/fengShuiWealth-main.jpg",
  questions: [
    {
      q: "방 문을 열었을 때, 가장 먼저 시선이 닿는 곳에 무엇이 있나요?",
      img: "/images/fengShuiWealth1.jpg",
      a: [
        { text: "커다란 거울이 정면으로 보여요.", type: "REFLECT" },
        { text: "침대의 발치나 어질러진 옷가지가 보여요.", type: "CHAOS" },
        { text: "창문이나 탁 트인 공간이 보여요.", type: "FLOW" },
        { text: "벽이나 막힌 가구가 보여요.", type: "STAGNANT" }
      ]
    },
    {
      q: "침대 머리(헤드) 방향은 현재 어느 쪽을 향하고 있나요?",
      img: "/images/fengShuiWealth2.jpg",
      a: [
        { text: "방 문을 등지고 있거나 문과 정면으로 마주 봐요.", type: "STAGNANT" },
        { text: "창문 쪽을 향해 있어요.", type: "FLOW" },
        { text: "화장실 벽면과 붙어 있어요.", type: "CHAOS" },
        { text: "벽면에 안정적으로 붙어 있고 문을 대각선으로 바라봐요.", type: "REFLECT" }
      ]
    },
    {
      q: "방 안에서 가장 오랫동안 머무는 '작업 공간(책상)'의 상태는?",
      img: "/images/fengShuiWealth3.jpg",
      a: [
        { text: "전선이 복잡하게 엉켜 있고 서류가 쌓여 있어요.", type: "CHAOS" },
        { text: "벽을 마주 보고 앉는 구조예요.", type: "STAGNANT" },
        { text: "등 뒤에 문이 있어서 누가 들어오면 깜짝 놀라요.", type: "REFLECT" },
        { text: "밝은 조명이 있고 시야가 확보된 편이에요.", type: "FLOW" }
      ]
    },
    {
      q: "현재 방 안의 조명(빛) 환경은 어떤가요?",
      img: "/images/fengShuiWealth4.jpg",
      a: [
        { text: "천장 형광등 하나만 밝게 켜두는 편이에요.", type: "STAGNANT" },
        { text: "구석구석 어두운 그림자가 지는 곳이 많아요.", type: "CHAOS" },
        { text: "간접 조명이나 스탠드를 활용해 은은한 분위기를 만들어요.", type: "FLOW" },
        { text: "햇빛은 잘 들지만 밤에는 너무 깜깜해요.", type: "REFLECT" }
      ]
    },
    {
      q: "방 안에 있는 식물이나 거울의 배치는 어떤가요?",
      img: "/images/fengShuiWealth5.jpg",
      a: [
        { text: "말린 꽃(드라이플라워)이나 먼지 쌓인 조화가 있어요.", type: "CHAOS" },
        { text: "거울이 너무 많아서 자다가 깨면 내 모습에 놀라요.", type: "REFLECT" },
        { text: "싱싱한 초록 잎 식물이 한두 개 있어요.", type: "FLOW" },
        { text: "식물도 거울도 딱히 없어요.", type: "STAGNANT" }
      ]
    }
  ],
  results: {
    FLOW: {
      name: "황금빛 기운이 흐르는 '금전운의 통로'",
      img: "/images/fengShuiWealth01.jpg",
      desc: "당신의 방은 이미 긍정적인 에너지가 잘 순환되고 있습니다! 약간의 포인트만 더하면 재물운이 폭발할 수 있는 구조군요. 생명력이 느껴지는 관엽식물을 남동쪽에 배치해 기운을 더 증폭시켜보세요.",
      ctaText: "재물운을 부르는 '해바라기 액자' 보기",
      affiliateLink: "https://link.coupang.com/a/d1m8aJ"
    },
    CHAOS: {
      name: "돈이 새어 나가는 '에너지 블랙홀'",
      img: "/images/fengShuiWealth02.jpg",
      desc: "어질러진 물건과 엉킨 전선들이 재물운의 발목을 잡고 있습니다. 특히 드라이플라워는 풍수지리상 '죽은 기운'을 뜻해 재물운을 갉아먹으니 주의하세요! 당장 정리 정돈부터 시작해야 돈이 들어오기 시작합니다.",
      ctaText: "공간의 질서를 잡는 '정리 수납함' 추천",
      affiliateLink: "https://link.coupang.com/a/d1nhfN"
    },
    REFLECT: {
      name: "운을 밀어내는 '반사된 기회'",
      img: "/images/fengShuiWealth03.jpg",
      desc: "정면 거울이나 불안정한 가구 배치가 들어오려는 운을 튕겨내고 있습니다. 침대 위치를 문과 대각선 방향으로 옮기고, 거울은 문을 정면으로 마주 보지 않게 가려주는 것만으로도 금전운의 흐름이 눈에 띄게 좋아질 것입니다.",
      ctaText: "나쁜 기운을 막아주는 '현관 발매트'",
      affiliateLink: "https://link.coupang.com/a/d1nnOn"
    },
    STAGNANT: {
      name: "기운이 멈춰있는 '정체된 우물'",
      img: "/images/fengShuiWealth04.jpg",
      desc: "방안의 공기와 기운이 너무 무겁게 가라앉아 있습니다. 어두운 구석에는 반드시 은은한 간접 조명을 설치해 '양의 기운'을 보충해야 합니다. 조명 하나만 바꿔도 막혔던 금전의 흐름이 뚫리기 시작할 것입니다.",
      ctaText: "재물운을 깨우는 '따뜻한 색 무드등'",
      affiliateLink: "https://link.coupang.com/a/d1nrqB"
    }
  }
};