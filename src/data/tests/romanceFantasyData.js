export const romanceFantasyData = {
  isReady: false,
  title: "만약 우리가 '로판' 주인공이라면?",
  subTitle: "당신의 숨겨진 고귀한 혈통과 치명적인 매력을 찾아보세요!",
  mainImg: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800", // 화려한 성이나 연회장 이미지
  questions: [
    {
      q: "낯선 성의 연회장에 초대받은 당신, 첫 등장은 어떠해야 할까요?",
      img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600",
      a: [
        { text: "모두의 시선을 한몸에 받으며 화려하게 중앙 계단으로 등장", type: "noble" },
        { text: "구석에서 샴페인을 홀짝이며 조용히 상황을 관조하기", type: "shadow" }
      ]
    },
    {
      q: "사랑하는 이가 위험에 처했다는 소식을 들었을 때, 당신의 행동은?",
      img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
      a: [
        { text: "앞뒤 재지 않고 즉시 말을 달려 구하러 간다.", type: "action" },
        { text: "침착하게 배후를 파악하고 완벽한 구출 작전을 설계한다.", type: "plan" }
      ]
    },
    {
      q: "당신이 가장 선호하는 데이트(밀회) 장소는?",
      img: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=600",
      a: [
        { text: "달빛이 쏟아지는 비밀스러운 황실 정원", type: "noble" },
        { text: "벽난로가 타오르는 아늑하고 포근한 서재", type: "plan" }
      ]
    },
    {
      q: "연인이 다른 이와 다정하게 대화하는 모습을 목격했다면?",
      img: "https://images.unsplash.com/photo-1529111462002-ad9990176883?w=600",
      a: [
        { text: "당당하게 다가가 내 연인임을 선포한다. (직진)", type: "action" },
        { text: "차갑게 미소 지으며 나중에 조용히 질투를 표현한다. (여유)", type: "shadow" }
      ]
    },
    {
      q: "당신을 상징하는 향기는 무엇이었으면 하나요?",
      img: "https://images.unsplash.com/photo-1541612560052-b9d58f0a75a5?w=600",
      a: [
        { text: "시원하고 묵직한 새벽 숲의 향기", type: "shadow" },
        { text: "은은하고 고혹적인 붉은 장미 향기", type: "noble" }
      ]
    }
  ],
  results: {
    noble: {
      name: "만인의 연인, '햇살 가득 성녀/성자'상",
      img: "https://images.unsplash.com/photo-1518101642274-1f9947844002?w=600",
      desc: "당신은 존재만으로도 주변을 환하게 밝히는 로판의 정석 주인공! 따뜻한 눈빛과 다정한 말투로 모두를 홀리지만, 오직 한 사람에게만 지독하게 순정적인 타입이군요. 당신의 미소 한 번에 제국의 전쟁도 멈출 것만 같아요.",
      affiliateLink: "https://link.coupang.com/a/rose-perfume-set", 
      ctaText: "성녀/성자의 향기, 로즈 퍼퓸 세트"
    },
    shadow: {
      name: "냉혈한 뒤에 숨겨진 순정, '북부 대공'상",
      img: "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?w=600",
      desc: "차가운 눈매와 묵직한 분위기! 누구에게도 곁을 내주지 않을 것 같지만, 내 사람에게만은 한없이 약해지는 츤데레의 정석입니다. '관심 없다'고 말하면서 이미 선물을 준비해 둔 당신의 서툰 진심이 가장 치명적인 매력 포인트군요.",
      affiliateLink: "https://link.coupang.com/a/black-coat-collection", 
      ctaText: "북부 대공의 카리스마, 블랙 롱코트"
    },
    action: {
      name: "직진밖에 모르는 '천재 기사'상",
      img: "https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600",
      desc: "복잡한 건 딱 질색! 사랑도 열정도 몸이 먼저 반응하는 행동파 주인공입니다. 거침없는 고백과 시원시원한 성격으로 상대방의 마음을 무장해제 시키는 능력이 탁월하네요. 당신과 함께라면 그 어떤 모험도 두렵지 않을 것 같습니다.",
      affiliateLink: "https://link.coupang.com/a/sport-watch-set", 
      ctaText: "기사의 기동력! 스마트 스포츠 워치"
    },
    plan: {
      name: "세상을 뒤흔드는 '막후의 책략가'상",
      img: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=600",
      desc: "부채 하나로 정계를 뒤흔드는 영리한 두뇌의 소유자! 겉으로는 평온해 보이지만, 사실 모든 상황은 당신의 손바닥 위에서 굴러가고 있군요. 치밀한 계획 속에 숨겨둔 다정한 눈빛은 오직 당신이 선택한 단 한 명만 볼 수 있는 특권입니다.",
      affiliateLink: "https://link.coupang.com/a/fancy-fountain-pen", 
      ctaText: "책략가의 품격, 프리미엄 만년필"
    }
  }
};