export const weirdSuperpowerData = {
  isReady: false,
  title: "나에게 숨겨진 '병맛 초능력' 찾기",
  subTitle: "마블은 절대 안 불러주지만, 일상에선 개이득인 하찮은 능력!",
  mainImg: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800", // 우스꽝스러운 히어로 복장 이미지
  questions: [
    {
      q: "지하철이나 버스를 탔을 때, 당신이 가장 먼저 하는 행동은?",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
      a: [
        { text: "누가 곧 내릴 것 같은지 '스캔'하며 빈자리 근처로 가기", type: "luck" },
        { text: "귀신같이 구석진 자리를 찾아가서 눈 감기", type: "stealth" }
      ]
    },
    {
      q: "자기 전, 천장에 모기가 한 마리 지나가는 것을 발견했다면?",
      img: "https://images.unsplash.com/photo-1557053513-39210086307b?w=600",
      a: [
        { text: "불 켜고 잡을 때까지 끝까지 추격한다.", type: "combat" },
        { text: "이불을 머리까지 쓰고 '내일의 나'에게 맡긴다.", type: "stealth" }
      ]
    },
    {
      q: "배달 음식을 시켰는데, 예상보다 20분이나 늦어진다면?",
      img: "https://images.unsplash.com/photo-1526367790999-0150786486a2?w=600",
      a: [
        { text: "문밖의 작은 발소리에도 귀가 쫑긋하며 설렌다.", type: "luck" },
        { text: "리뷰 이벤트 서비스를 하나 더 줄지 안 줄지 예상해본다.", type: "prophecy" }
      ]
    },
    {
      q: "친구들과 사진을 찍을 때, 당신의 포지션은?",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
      a: [
        { text: "어떻게든 얼굴이 작아 보이려고 각도를 조절한다.", type: "stealth" },
        { text: "누구보다 빠르게 제일 웃긴 표정을 짓는다.", type: "combat" }
      ]
    },
    {
      q: "마트 계산대 줄이 길다. 당신이 서는 줄은?",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
      a: [
        { text: "가장 짧아 보이는 줄에 선다.", type: "luck" },
        { text: "계산원이 가장 빨라 보이는 줄을 분석해서 선다.", type: "prophecy" }
      ]
    }
  ],
  results: {
    luck: {
      name: "지하철 빈자리 하이에나",
      img: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?w=600",
      desc: "당신은 만원 지하철에서도 당신이 다가가는 순간 누군가 일어나는 기적을 행합니다! 인구 밀도가 높은 대한민국에서 가장 실용적인 초능력자죠. 당신의 엉덩이는 언제나 따뜻한 시트를 보장받습니다.",
      affiliateLink: "https://link.coupang.com/a/noise-cancelling-earphone", 
      ctaText: "앉아서 가며 꿀잠 자는 법! 노이즈 캔슬링 이어폰"
    },
    stealth: {
      name: "아는 척 금지, 투명인간 9단",
      img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600",
      desc: "길 건너편에서 아는 사람이 보일 때, 눈을 마주치지 않고 자연스럽게 사라지는 '스텔스' 능력을 갖췄군요. 당신은 회식 자리에서도 소리소문없이 조용히 사라질 수 있는 진정한 은둔의 고수입니다.",
      affiliateLink: "https://link.coupang.com/a/dark-sunglasses", 
      ctaText: "스텔스 모드 강화! 연예인용 왕 선글라스"
    },
    combat: {
      name: "잠 못 드는 밤의 지배자, 모기 학살자",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600",
      desc: "어둠 속에서도 왱~ 소리의 근원지를 정확히 파악해 단 한 방의 박수로 처단하는 전설의 사수! 당신과 함께라면 무더운 여름밤 캠핑도 두렵지 않습니다. 에프킬라 없이도 평화를 유지하는 당신, 좀 멋있을지도?",
      affiliateLink: "https://link.coupang.com/a/electric-fly-swatter", 
      ctaText: "학살자의 무기! 갓성비 전기 모기채"
    },
    prophecy: {
      name: "배달 도착 1분 전 감별사",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
      desc: "벨이 울리기 60초 전, 이미 젓가락을 세팅하고 현관문 앞에 서 있는 미래 예지자! 라이더님의 오토바이 엔진 소리만 들어도 메뉴를 맞히는 경지에 올랐군요. 당신의 식욕은 0.1초도 기다림을 용납하지 않습니다.",
      affiliateLink: "https://link.coupang.com/a/ramen-pot-set", 
      ctaText: "예지력을 뽐내며 끓이는 양은 냄비 세트"
    }
  }
};