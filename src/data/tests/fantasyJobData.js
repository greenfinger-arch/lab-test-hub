export const fantasyJobData = {
  isReady: false,
  title: "만약 내가 판타지 세계에 떨어진다면?",
  subTitle: "나의 전생(혹은 현생) 재능으로 찾는 판타지 직업!",
  mainImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800", // 신비로운 숲과 마법 같은 분위기
  questions: [
    {
      q: "이세계에 눈을 떴을 때, 가장 먼저 눈에 들어온 풍경은?",
      img: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=600",
      a: [
        { text: "고대 마법 문자가 새겨진 거대한 탑", type: "mage" },
        { text: "훈련용 더미가 가득한 검술 도장", type: "knight" }
      ]
    },
    {
      q: "판타지 세계에서 당신이 가장 배우고 싶은 능력은?",
      img: "https://images.unsplash.com/photo-1544979500-1123497b9770?w=600",
      a: [
        { text: "복잡한 약초를 배합해 신비한 물약을 만드는 법", type: "alchemist" },
        { text: "사람들의 마음을 움직이는 선율과 화술", type: "bard" }
      ]
    },
    {
      q: "몬스터가 나타났다! 당신의 무기는?",
      img: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5c?w=600",
      a: [
        { text: "고대의 지혜가 담긴 마법 지팡이", type: "mage" },
        { text: "단련된 신체와 날카로운 강철 검", type: "knight" }
      ]
    },
    {
      q: "여행 중 길을 잃었을 때 당신의 선택은?",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      a: [
        { text: "별자리와 지도를 분석해 최적의 경로를 찾는다.", type: "alchemist" },
        { text: "마을 사람들에게 노래를 불러주고 정보를 얻는다.", type: "bard" }
      ]
    },
    {
      q: "나의 판타지 삶을 한 단어로 정의한다면?",
      img: "https://images.unsplash.com/photo-1478479401825-96144e057375?w=600",
      a: [
        { text: "지식", type: "mage" },
        { text: "명예", type: "knight" }
      ]
    },
    {
      q: "이세계에서의 목표는 무엇인가요?",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
      a: [
        { text: "세상의 모든 진리를 깨우치기", type: "alchemist" },
        { text: "내 이름이 적힌 노래를 온 대륙에 퍼뜨리기", type: "bard" }
      ]
    }
  ],
  results: {
    mage: {
      name: "지식의 수호자, 대마법사",
      img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600",
      desc: "당신은 냉철한 판단력과 탐구심을 가진 마법사 스타일! 현실에서도 남다른 통찰력으로 문제를 해결하는 지적인 면모를 가지고 있군요. 당신의 뇌는 지금도 새로운 정보를 갈구하고 있습니다. 당신의 지적 호기심을 스마트하게 채워보세요!",
      affiliateLink: "https://link.coupang.com/a/tablet-pc", 
      ctaText: "지식의 파편을 담을 스마트 태블릿 PC"
    },
    knight: {
      name: "불굴의 의지, 전설의 기사",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600",
      desc: "책임감 강하고 목표를 향해 정면 돌파하는 당신은 기사 체질! 현실에서도 묵묵히 제 몫을 다하는 당신의 모습은 주변 사람들에게 든든한 방패가 됩니다. 당신의 강인한 체력을 위해 홈트레이닝을 시작해 보는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/home-gym-set", 
      ctaText: "전설의 기사를 위한 기초 체력 홈트 세트"
    },
    alchemist: {
      name: "만물의 조화, 천재 연금술사",
      img: "https://images.unsplash.com/photo-1530519729491-e5fa5671d1dd?w=600",
      desc: "섬세하고 꼼꼼하게 무언가를 만드는 걸 즐기는 당신, 연금술사군요! 현실에서도 레시피를 개발하거나 무언가를 조합해 결과를 만들어내는 일에 재능이 있을 거예요. 당신의 손끝에서 탄생할 마법 같은 요리와 힐링 아이템들을 소개합니다.",
      affiliateLink: "https://link.coupang.com/a/kitchen-tool-kit", 
      ctaText: "연금술사의 마법이 일어나는 홈카페/주방 도구"
    },
    bard: {
      name: "낭만과 자유, 모험가 음유시인",
      img: "https://images.unsplash.com/photo-1514525253361-b83a65c0d7c0?w=600",
      desc: "당신은 사람들과 어울리는 것을 좋아하고 어디서든 분위기를 메이킹하는 음유시인 스타일! 당신의 입담과 친화력은 현실에서도 최고의 무기예요. 당신의 자유로운 영혼을 더욱 빛내줄 낭만 가득한 아이템들은 어떠세요?",
      affiliateLink: "https://link.coupang.com/a/bluetooth-speaker", 
      ctaText: "낭만을 연주할 감성 블루투스 스피커"
    }
  }
};