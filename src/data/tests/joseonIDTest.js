export const joseonIDTest = {
  isReady: true,
  title: "우리가 '조선시대'에 태어났다면? 신분 대잔치",
  subTitle: "저잣거리 왈패부터 영의정까지, 당신의 '찐' 신분을 공개하오!",
  mainImg: "/images/joseonIDTest-main.jpg", // 전통 가옥이나 민화 풍 이미지
  questions: [
    {
      q: "마을 큰 잔치가 열렸소! 당신은 어디서 무엇을 하고 있겠소?",
      img: "images/joseonIDTest1.jpg",
      a: [
        { text: "잔치 음식 냄새를 맡으며 맨 앞줄에서 침 흘리고 있다.", type: "commoner" },
        { text: "뒷짐 지고 나타나 '에헴' 한마디 하며 분위기 살핀다.", type: "noble" }
      ]
    },
    {
      q: "길을 가다 사또의 행차와 마주쳤소. 당신의 반응은?",
      img: "images/joseonIDTest2.jpg",
      a: [
        { text: "일단 땅바닥에 넙죽 엎드려 먼지 쌓인 신발만 본다.", type: "slave" },
        { text: "사또가 내 친구인지 슬쩍 확인하고 아는 척할 준비 한다.", type: "noble" }
      ]
    },
    {
      q: "과거 시험 당일! 시험지를 받은 당신은?",
      img: "images/joseonIDTest3.jpg",
      a: [
        { text: "붓에 침을 바르며 천재적인 시 한 수를 읊는다.", type: "scholar" },
        { text: "시험지 뒷면에 주막 이모의 얼굴을 그리고 있다.", type: "commoner" }
      ]
    },
    {
      q: "주막에서 국밥 한 그릇을 먹었소. 계산은 누가 하오?",
      img: "images/joseonIDTest4.jpg",
      a: [
        { text: "\"여기 장부 달아놓으시오!\"라며 위엄 있게 나간다.", type: "noble" },
        { text: "짚신 끈이 풀린 척하며 친구의 눈치를 살핀다.", type: "slave" }
      ]
    },
    {
      q: "임금님이 부르셔서 대궐에 들어갔소. 당신의 첫마디는?",
      img: "images/joseonIDTest5.jpg",
      a: [
        { text: "\"전하, 통촉하여 주시옵소서!\" (상소문 시동)", type: "scholar" },
        { text: "\"전하, 수라간 고기 냄새가 예사롭지 않사옵니다!\"", type: "commoner" }
      ]
    }
  ],
  results: {
    noble: {
      name: "권력의 중심, '안동 김씨 뺨치는 실세'형",
      img: "images/joseonIDTest01.jpg",
      desc: "에헴! 당신은 조선을 뒤흔드는 진정한 권력자군요. 돈보다는 명예, 명예보다는 남들의 시선을 중요시하는 '폼생폼사' 양반입니다. 친구들 사이에서도 주로 대장 노릇을 하며 결제(지갑 열기)를 담당하겠네요. 하지만 실속은 없을 수 있으니 조심하시오!",
      affiliateLink: "https://link.coupang.com/a/dV3KEI", 
      ctaText: "양반의 필수템, 수공예 고급 합죽선"
    },
    scholar: {
      name: "책만 읽는 '과거 낙방 전문 장수생'형",
      img: "images/joseonIDTest02.jpg",
      desc: "지식은 영의정급인데 운이 안 따라주는 비운의 천재! 논리적인 척 말은 많지만 실천력은 제로에 가깝군요. 친구들 모임에서 사사건건 따지기 좋아해 '선비 납셨네' 소리를 자주 듣지 않소? 붓만 굴리지 말고 밖으로 나가서 햇볕 좀 쬐시오!",
      affiliateLink: "https://link.coupang.com/a/dV3Ouj", 
      ctaText: "내년엔 합격하자! 최고급 문방사우 세트"
    },
    commoner: {
      name: "저잣거리의 활력소, '주막 단골 욜로족'형",
      img: "images/joseonIDTest03.jpg",
      desc: "오늘 벌어 오늘 다 쓰는 진정한 조선의 힙스터! 신분 따위 중요치 않소, 그저 맛있는 음식과 술만 있다면 거기가 무릉도원 아니겠소? 분위기 메이커라 친구들이 당신 없으면 모임을 안 할 정도지만, 지갑이 늘 가벼운 게 흠이구려.",
      affiliateLink: "https://link.coupang.com/a/dV3R2L", 
      ctaText: "주막 맛 그대로, 막걸리 담금 키트"
    },
    slave: {
      name: "마당 쓸기 장인, '추노꾼도 포기한 도망노비'형",
      img: "images/joseonIDTest04.jpg",
      desc: "앗... 눈물이 앞을 가리는구려. 잔심부름은 도맡아 하고 칭찬은 남이 다 가져가는 우리 집 마당쇠/무수리 타입! 눈치는 백 단이라 위기 탈출 능력은 최고입니다. 하지만 언제까지 신발 끈만 묶을 순 없소! 이제는 당당하게 주인(친구)의 등짝을 때리시오!",
      affiliateLink: "https://link.coupang.com/a/dV3UOZ", 
      ctaText: "도망칠 때 필수! 푹신한 기능성 신발 깔창"
    }
  }
};