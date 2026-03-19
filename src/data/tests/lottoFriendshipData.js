export const lottoFriendshipData = {
  isReady: false,
  title: "우리가 '복권 1등' 당첨된다면? 우정의 유효기간",
  subTitle: "100억이 생긴 순간, 당신은 친구의 번호를 지울 것인가?",
  mainImg: "https://images.unsplash.com/photo-1518458028434-a23ad7365194?w=800", // 돈뭉치나 금괴 이미지
  questions: [
    {
      q: "꿈에 조상님이 나타나 번호 6개를 점지해주셨소! 당신의 첫 행동은?",
      img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600",
      a: [
        { text: "단톡방에 '나 1등 되면 니들 다 외제차 뽑아준다'고 허세를 부린다.", type: "mouth-player" },
        { text: "아무에게도 말하지 않고 조용히 복권방으로 향한다. (가족도 모르게)", type: "ghost-rich" }
      ]
    },
    {
      q: "드디어 1등 당첨! 당첨금을 받으러 가는 길, 친구에게 전화가 왔소.",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "너무 기뻐서 \"야! 나 1등 됐어! 오늘 소고기 파티다!\"라고 소리친다.", type: "golden-bell" },
        { text: "목소리를 깔고 \"나 지금 좀 바쁘니까 나중에 통화하자\"며 끊는다.", type: "ghost-rich" }
      ]
    },
    {
      q: "친구가 갑자기 급전이 필요하다며 500만 원만 빌려달라고 한다면?",
      img: "https://images.unsplash.com/photo-1554224155-1696413575b9?w=600",
      a: [
        { text: "그냥 준 셈 치고 쿨하게 입금해준다. (이게 의리지!)", type: "golden-bell" },
        { text: "\"나 요즘 주식 때문에 마이너스야...\"라며 앓는 소리를 한다.", type: "acting-poor" }
      ]
    },
    {
      q: "100억 부자가 된 당신, SNS 프로필 상태는?",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
      a: [
        { text: "공항 라운지나 명품 쇼핑백 사진으로 도배한다.", type: "mouth-player" },
        { text: "계정을 탈퇴하거나 아주 평범한 풍경 사진만 올린다.", type: "ghost-rich" }
      ]
    },
    {
      q: "친구들과의 모임 날, 1차 계산서가 나왔소. 당신의 선택은?",
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600",
      a: [
        { text: "멋지게 카드를 던지며 \"전부 내 앞으로 달아놔!\"라고 한다.", type: "golden-bell" },
        { text: "n분의 1을 철저히 계산하며 잔돈 100원까지 챙긴다.", type: "acting-poor" }
      ]
    }
  ],
  results: {
    "golden-bell": {
      name: "우리 동네 기부천사, '골든벨 마스터'형",
      img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600",
      desc: "당신은 돈보다 사람이 먼저인 진정한 의리파군요! 100억이 생기면 친구들 빚부터 갚아줄 세상에 없는 천사입니다. 하지만 너무 퍼주다가 100억이 1년 만에 사라질 수 있으니 조심하시오! 친구들은 당신을 '회장님'으로 모시며 평생 충성을 다할 것입니다.",
      affiliateLink: "https://link.coupang.com/a/luxury-champagne-glasses", 
      ctaText: "회장님 축배용! 크리스탈 샴페인 잔 세트"
    },
    "ghost-rich": {
      name: "번호 바꾸고 잠적, '007 본드걸/본드'형",
      img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600",
      desc: "당첨 확인과 동시에 비행기 티켓을 끊을 분이군요! '우정은 돈 앞에서 무의미하다'는 철저한 실속파입니다. 아마 친구들은 당신이 이민 간 줄 알거나 행방불명된 줄 알 겁니다. 가끔 외로울 땐 익명으로 친구들에게 치킨 기프티콘이라도 쏴주는 자비를 베푸시오!",
      affiliateLink: "https://link.coupang.com/a/noise-canceling-headphones", 
      ctaText: "세상과 단절하고 싶을 때! 소음 차단 헤드폰"
    },
    "acting-poor": {
      name: "돈 있는 척 안 하는 '연기대상'형",
      img: "https://images.unsplash.com/photo-1509139562610-5a218202b077?w=600",
      desc: "통장엔 100억이 찍혀있지만 여전히 친구들에게 '돈 없다'고 징징거리는 무서운 연기력의 소유자! 부자가 돼도 푼돈 아끼는 재미로 살 스타일입니다. 친구들은 당신이 부자인 줄 꿈에도 모르고 고기를 사줄지도 모릅니다. 양심이 있다면 가끔은 슬쩍 계산대 앞으로 가시오!",
      affiliateLink: "https://link.coupang.com/a/slim-minimalist-wallet", 
      ctaText: "돈 없는 척하기 딱 좋은! 낡은 느낌 가죽 지갑"
    },
    "mouth-player": {
      name: "말로만 다 사주는 '꿈속의 재벌'형",
      img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600",
      desc: "정작 당첨도 안 됐는데 이미 머릿속으로 친구들 빌딩 한 채씩 다 사준 분입니다! 입만 열면 억 단위가 오가지만 실제 지갑엔 만 원짜리 한 장뿐... 그래도 당신의 화려한 입담 덕분에 친구들은 잠시나마 행복한 꿈을 꿉니다. 언젠가 진짜 당첨되면 그 약속 꼭 지키길 바라오!",
      affiliateLink: "https://link.coupang.com/a/lucky-gold-pig-bank", 
      ctaText: "꿈이 현실로! 황금돼지 저금통"
    }
  }
};