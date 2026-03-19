export const fengShuiWarningData = {
  id: "fengshui-warning",
  title: "당장 치우세요! 돈이 새나가는 '방의 경고'",
  relatedPostUrl: "https://ranklamp.com/top-3-feng-shui-taboos-experts-avoid/",
  subTitle: "방 문을 열자마자 보이는 '이것'이 당신의 재물운을 막고 있습니다. 소름 돋는 풍수지리 금기 사항 진단.",
  isReady: true,
  mainImg: "/images/fengShuiWarning-main.jpg",
  questions: [
    {
      q: "방 문을 열었을 때, 가장 먼저 정면에 무엇이 보이나요?",
      img: "/images/fengShuiWarning1.jpg",
      a: [
        { text: "커다란 거울이 나를 비추고 있다.", type: "MIRROR" },
        { text: "창문이 정면에 있어 밖이 훤히 보인다.", type: "LEAK" },
        { text: "침대 발치가 문 쪽을 향해 있다.", type: "DRAIN" },
        { text: "벽이나 옷장 등으로 막혀 있다.", type: "BLOCK" }
      ]
    },
    {
      q: "침대 주변이나 구석에 '생명력이 없는 물건'이 있나요?",
      img: "/images/fengShuiWarning2.jpg",
      a: [
        { text: "드라이플라워(말린 꽃)나 인조 식물이 있다.", type: "DRAIN" },
        { text: "고장 난 가전제품이나 안 쓰는 물건이 쌓여 있다.", type: "BLOCK" },
        { text: "싱싱한 생화나 관엽 식물이 있다.", type: "STABLE" },
        { text: "딱히 아무것도 두지 않았다.", type: "LEAK" }
      ]
    },
    {
      q: "방 안의 '거울'은 주로 어떤 상태인가요?",
      img: "/images/fengShuiWarning3.jpg",
      a: [
        { text: "자다가 눈을 떴을 때 내 모습이 바로 보인다.", type: "MIRROR" },
        { text: "먼지가 쌓여 있거나 얼룩진 채 방치되어 있다.", type: "DRAIN" },
        { text: "화장대 안에 숨겨져 있거나 문 뒤에 있다.", type: "STABLE" },
        { text: "거울이 너무 많아 방이 사방으로 비친다.", type: "MIRROR" }
      ]
    },
    {
      q: "당신의 '지갑'이나 '금전 관련 물건'은 어디에 두시나요?",
      img: "/images/fengShuiWarning4.jpg",
      a: [
        { text: "침대 머리맡이나 책상 위에 아무렇게나 둔다.", type: "LEAK" },
        { text: "어둡고 서늘한 서랍 안이나 옷장 깊숙이 둔다.", type: "STABLE" },
        { text: "가방 안에 넣어둔 채 방 구석에 던져둔다.", type: "BLOCK" },
        { text: "화장대 위 조명 아래에 둔다.", type: "MIRROR" }
      ]
    },
    {
      q: "현재 방의 공기와 향기는 어떤가요?",
      img: "/images/fengShuiWarning5.jpg",
      a: [
        { text: "환기를 잘 안 해서 약간 쿰쿰한 냄새가 난다.", type: "BLOCK" },
        { text: "디퓨저나 향초로 항상 좋은 향을 유지한다.", type: "STABLE" },
        { text: "무향이지만 공기가 항상 차갑고 서늘하다.", type: "LEAK" },
        { text: "음식 냄새나 생활 악취가 섞여 있다.", type: "DRAIN" }
      ]
    }
  ],
  results: {
    MIRROR: {
      name: "운을 튕겨내는 '반사된 재물'",
      img: "/images/fengShuiWarning01.jpg",
      desc: "문을 열자마자 보이는 거울은 들어오는 복을 그대로 반사해 쫓아냅니다. 특히 잠자는 모습이 비치는 거울은 기운을 빼앗아 가 재물운을 악화시킵니다. 거울의 위치를 옮기거나 사용하지 않을 때는 천으로 가려주세요!",
      ctaText: "거울을 가려줄 '감성 가리개 커튼' 보기",
      affiliateLink: "https://link.coupang.com/a/d1zGi4"
    },
    LEAK: {
      name: "밑 빠진 독에 물 붓기, '에너지 누수'",
      img: "/images/fengShuiWarning02.jpg",
      desc: "문과 창문이 일직선으로 마주 보고 있으면 재물 기운이 머물지 못하고 곧장 빠져나갑니다. 돈은 버는데 모이지 않는 전형적인 구조입니다. 중문이나 파티션, 혹은 두꺼운 암막 커튼으로 기운의 통로를 꺾어줘야 합니다.",
      ctaText: "기운을 막아주는 '압축봉 파티션' 추천",
      affiliateLink: "https://link.coupang.com/a/d1zLlD"
    },
    DRAIN: {
      name: "생기를 갉아먹는 '부정의 흔적'",
      img: "/images/fengShuiWarning03.jpg",
      desc: "말린 꽃(드라이플라워)이나 고장 난 물건은 풍수에서 '죽은 기운'을 뜻합니다. 이런 물건들은 방 안의 생기를 흡수하여 당신의 금전적 판단력을 흐리게 만듭니다. 지금 당장 버리는 것이 재물운의 시작입니다.",
      창Text: "생기를 불어넣는 '공기정화 식물' 보기",
      affiliateLink: "https://link.coupang.com/a/d1zUII"
    },
    BLOCK: {
      name: "꽉 막힌 혈도, '정체된 자산'",
      img: "/images/fengShuiWarning04.jpg",
      desc: "쿰쿰한 냄새와 쌓여있는 짐들은 기운의 흐름을 막아 새로운 기회를 차단합니다. 재물은 맑은 공기와 밝은 빛을 타고 흐릅니다. 환기를 자주 하고 어두운 구석에 작은 조명을 켜두는 것만으로도 막혔던 금전운이 돌기 시작합니다.",
      ctaText: "공기 정화와 향기를 동시에 '인센스 스틱'",
      affiliateLink: "https://link.coupang.com/a/d1z13S"
    },
    STABLE: {
      name: "재물이 쌓이는 '명당의 기초'",
      img: "/images/fengShuiWarning05.jpg",
      desc: "기본적인 풍수 원리를 잘 지키고 계시네요! 하지만 재물운은 관리할수록 커집니다. 지갑을 두는 서랍 안에 작은 금속 소품이나 황금색 아이템을 넣어보세요. 재물이 재물을 부르는 마법을 경험하게 될 것입니다.",
      ctaText: "돈을 부르는 '금전운 행운의 부적'",
      affiliateLink: "https://link.coupang.com/a/d1z5jZ"
    }
  }
};