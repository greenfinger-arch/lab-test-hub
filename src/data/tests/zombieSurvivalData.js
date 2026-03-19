export const zombieSurvivalData = {
  isReady: false,
  title: "우리, 좀비 사태에서 살아남을 수 있을까?",
  subTitle: "내 연인은 영웅일까, 아니면 나를 미끼로 던질 배신자일까?",
  mainImg: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800", // 황폐해진 도시와 안개 이미지
  questions: [
    {
      q: "평화로운 데이트 중, 저 멀리서 이상한 소리를 내며 달려오는 괴한을 목격했다면?",
      img: "https://images.unsplash.com/photo-1533161093491-443360218e7e?w=600",
      a: [
        { text: "일단 연인의 손을 잡고 무조건 사람이 없는 건물로 튄다!", type: "survivor" },
        { text: "주변의 도구(의자 등)를 들고 연인의 앞을 막아서며 대치한다.", type: "hero" }
      ]
    },
    {
      q: "겨우 몸을 숨긴 대형 마트, 딱 하나만 챙길 수 있다면?",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
      a: [
        { text: "유통기한이 긴 통조림과 생수 한 박스", type: "survivor" },
        { text: "좀비를 한 방에 보낼 수 있는 묵직한 야구 배트", type: "hero" }
      ]
    },
    {
      q: "탈출 중 연인이 발을 삐어 걷지 못하는 상황, 당신의 선택은?",
      img: "https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?w=600",
      a: [
        { text: "어부바! 죽어도 같이 죽고 살아도 같이 산다.", type: "lover" },
        { text: "미안해... '먼저 가서 구조대 불러올게'라며 눈물을 머금고(?) 전력 질주한다.", type: "traitor" }
      ]
    },
    {
      q: "어둠 속에서 누군가 문을 두드린다. '살려주세요!'라는 목소리가 들린다면?",
      img: "https://images.unsplash.com/photo-1505244510004-20ec494809f6?w=600",
      a: [
        { text: "함정일지도 모른다. 절대 열어주지 않고 침묵을 유지한다.", type: "survivor" },
        { text: "위험하더라도 일단 문을 열어 사람을 구한다.", type: "hero" }
      ]
    },
    {
      q: "마침내 구조 헬기가 도착했지만, 자리가 단 한 자리뿐이라면?",
      img: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?w=600",
      a: [
        { text: "연인을 태워 보내고 나는 마지막까지 땅에서 싸우다 전사한다.", type: "lover" },
        { text: "내가 먼저 타서 '복수해줄게!'라고 외치며 이륙한다.", type: "traitor" }
      ]
    }
  ],
  results: {
    hero: {
      name: "제국 최강의 방패, '인류 희망'형",
      img: "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?w=600",
      desc: "당신은 좀비 따위는 한 주먹거리도 안 되는 진정한 영웅이군요! 연인을 지키기 위해서라면 화염 속으로도 뛰어들 기세입니다. 하지만 너무 앞서 나가다가 혼자 좀비 밥이 될 수 있으니 주의하세요. 연인은 당신의 등 뒤가 세상에서 가장 안전하다고 느낍니다.",
      affiliateLink: "https://link.coupang.com/a/camping-flashlight-high", 
      ctaText: "어둠 속에서도 빛나는 영웅의 전술 후레쉬"
    },
    survivor: {
      name: "생존율 99%, '포스트 아포칼립스 전문가'",
      img: "https://images.unsplash.com/photo-1523994590414-d070b469cc27?w=600",
      desc: "지능적인 플레이어! 감정보다는 이성이 앞서는 당신은 좀비 세계관에서 끝까지 살아남아 기지를 세울 관상입니다. 연인을 버리진 않지만, 가장 효율적인 탈출로를 이미 머릿속에 다 그려두셨군요. 당신과 함께라면 굶어 죽을 일은 절대 없겠어요.",
      affiliateLink: "https://link.coupang.com/a/survival-kit-emergency", 
      ctaText: "살아남으려면 필수! 1인용 생존 가방 세트"
    },
    lover: {
      name: "로맨스에 눈먼 희생양, '사랑꾼 좀비'형",
      img: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600",
      desc: "좀비 사태마저 로맨스 영화로 만들어버리는 당신! '너 없인 나도 죽어'를 몸소 실천하는 스타일입니다. 아마 좀비에게 물려도 연인과 손잡고 물릴 분이군요. 비록 생존율은 낮을지 몰라도, 당신의 사랑만큼은 역사에 기록될 것입니다. (물론 좀비들이 그 역사를 읽을지는 모르겠지만요!)",
      affiliateLink: "https://link.coupang.com/a/couple-matching-pajamas", 
      ctaText: "마지막 밤도 예쁘게, 커플 파자마 세트"
    },
    traitor: {
      name: "미안해... 하지만 나는 살아야해! '배신자 싹'형",
      img: "https://images.unsplash.com/photo-1509249023965-68188d441113?w=600",
      desc: "앗... 설마 했는데 정말 본능에 충실하시군요! 연인을 미끼로 던지진 않겠지만(설마요?), 위기의 순간에 '나 먼저!'라는 생각이 0.1초 정도 스쳐 지나갔을 거예요. 연인이 이 결과를 본다면 오늘 저녁 메뉴는 없을지도 모릅니다. 지금 바로 사과하세요!",
      affiliateLink: "https://link.coupang.com/a/delicious-steak-gift", 
      ctaText: "배신감 달래주기용 한우 스테이크 선물세트"
    }
  }
};