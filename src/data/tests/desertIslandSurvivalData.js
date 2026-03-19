export const desertIslandSurvivalData = {
  isReady: false,
  title: "만약 우리가 '무인도'에 떨어진다면? 극한의 역할 분담",
  subTitle: "낭만은 끝났다! 살아서 돌아가기 위한 우리만의 생존 전략",
  mainImg: "https://images.unsplash.com/photo-1505881502353-a1986add373c?w=800", // 황량하지만 아름다운 무인도 해변
  questions: [
    {
      q: "눈을 떠보니 파도 소리만 들리는 낯선 해변, 가장 먼저 당신이 할 일은?",
      img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
      a: [
        { text: "일단 주변을 샅샅이 뒤져 먹을 수 있는 열매나 도구를 찾는다.", type: "gatherer" },
        { text: "높은 곳으로 올라가 섬의 지형을 파악하고 탈출로를 구상한다.", type: "leader" }
      ]
    },
    {
      q: "해가 지기 시작한다! 밤을 보낼 임시 거처를 만들 때 당신의 스타일은?",
      img: "https://images.unsplash.com/photo-1499242015907-fd91d5d02f13?w=600",
      a: [
        { text: "나뭇가지와 잎을 모아 비바람을 막을 튼튼한 집을 짓는다.", type: "builder" },
        { text: "겁먹은 연인을 다독이며 불을 피워 체온을 유지시킨다.", type: "healer" }
      ]
    },
    {
      q: "배가 너무 고프다. 바다 저 멀리 물고기가 보인다면?",
      img: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=600",
      a: [
        { text: "나무 막대기를 뾰족하게 깎아 직접 바다로 뛰어든다.", type: "builder" },
        { text: "밀물과 썰물을 이용해 물고기가 갇힐 함정을 설계한다.", type: "leader" }
      ]
    },
    {
      q: "연인이 지쳐서 '우린 여기서 못 나갈 거야'라며 울먹인다면?",
      img: "https://images.unsplash.com/photo-1529606041204-dc96e6c0397a?w=600",
      a: [
        { text: "\"걱정 마, 내가 있잖아!\"라며 긍정적인 에너지를 불어넣는다.", type: "healer" },
        { text: "\"울 시간에 구조 신호용 불이나 더 때자\"라며 현실적으로 대응한다.", type: "leader" }
      ]
    },
    {
      q: "저 멀리 배 한 척이 지나간다! 구조 신호를 보낼 때 당신은?",
      img: "https://images.unsplash.com/photo-1534321231932-e7c3b2952566?w=600",
      a: [
        { text: "해변에 커다란 SOS 글자를 새기고 연기를 피워 올린다.", type: "leader" },
        { text: "거울이나 금속 파편을 이용해 빛 반사 신호를 필사적으로 보낸다.", type: "gatherer" }
      ]
    }
  ],
  results: {
    leader: {
      name: "냉철한 두뇌, '무인도 베어 그릴스'형",
      img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600",
      desc: "당신은 무인도에서도 문명을 세울 사람입니다! 감정에 휘둘리지 않고 상황을 객관적으로 파악해 탈출 전략을 짜는 브레인이군요. 당신의 지휘 아래라면 연인은 무인도에서도 '호텔급' 안전을 보장받을 수 있을 거예요. 하지만 가끔은 연인의 서운한 마음도 좀 살펴주세요!",
      affiliateLink: "https://link.coupang.com/a/multi-tool-survival-knife", 
      ctaText: "리얼 생존러의 필수품, 18가지 기능 멀티툴"
    },
    builder: {
      name: "강인한 육체, '인간 중장비'형",
      img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600",
      desc: "말보다 행동! 당신은 무인도에서 집을 짓고 멧돼지를 잡을 든든한 일꾼이자 보호자입니다. 당신의 우직한 손길이 닿는 곳마다 아늑한 보금자리가 생겨나죠. 연인은 당신의 넓은 등 뒤에서 '우린 살 수 있어'라는 확신을 얻습니다. 당신이야말로 야생의 진정한 주인공입니다!",
      affiliateLink: "https://link.coupang.com/a/heavy-duty-tarp", 
      ctaText: "비바람도 끄떡없는 초경량 서바이벌 타프"
    },
    healer: {
      name: "희망의 불꽃, '무인도 멘탈 케어'형",
      img: "https://images.unsplash.com/photo-1499195333224-3ce974eecfb4?w=600",
      desc: "생존에 가장 중요한 건 꺾이지 않는 마음! 당신은 절망적인 상황에서도 웃음을 잃지 않고 연인을 다독이는 정신적 지주입니다. 당신이 피운 작은 모닥불과 따뜻한 위로 한 마디가 사실은 생존율을 가장 높이는 핵심 요소죠. 당신 곁에 있다면 지옥 같은 무인도도 캠핑장이 됩니다.",
      affiliateLink: "https://link.coupang.com/a/portable-hammock-set", 
      ctaText: "무인도에서도 꿀잠! 초경량 휴대용 해먹"
    },
    gatherer: {
      name: "알뜰살뜰 살림꾼, '정글의 수집가'형",
      img: "https://images.unsplash.com/photo-1502472545332-e24172e772ea?w=600",
      desc: "쓰레기도 보석으로 만드는 재주꾼! 해변에 떠밀려온 플라스틱 통 하나도 훌륭한 식기나 도구로 변신시키는 섬세한 관찰력의 소유자입니다. 당신이 숲에서 찾아온 이름 모를 열매와 도구들이 사실은 팀의 생명줄이죠. 당신의 알뜰함 덕분에 무인도 생활이 의외로 풍족할지도?",
      affiliateLink: "https://link.coupang.com/a/water-purifier-straw", 
      ctaText: "어떤 물도 마실 수 있는 휴대용 정수 빨대"
    }
  }
};