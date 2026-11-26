// BestCut iPhone mockups: the Home, Swipe and Results screens, drawn in HTML from the app's own
// layout and wording (TripPick/Home, Swipe, Summary). Replace with real screenshots when they exist.
(function () {
  const T = {
    ko: {
      trip: '오사카 여행', organized: '68% 정리함', similar: '비슷한 사진 묶음', shots: '스크린샷 묶음', flagged: '흔들림·어두움',
      videos: '짧은 동영상', singles: '한 장짜리 사진', g24: '24묶음', g6: '6묶음', p31: '31장', v9: '9개', p112: '112장',
      swipe: '스와이프', cont: '이어서 정리하기', results: '결과', oneByOne: '한 장씩 보기', keep: '남기기', blurry: '흔들림', best: '추천',
      inAlbum: '장이 베스트 앨범에 들어가요', free: '약 3.8GB 비울 수 있어요', bestAlbum: '베스트 앨범', shotAlbum: '스크린샷 앨범',
      marked: '지울 후보', left: '그대로 둠', makeDel: '앨범 만들고 960개 지우기', makeOnly: '앨범만 만들기', back: '여행'
    },
    en: {
      trip: 'Osaka Trip', organized: '68% organized', similar: 'Similar photos', shots: 'Similar screenshots', flagged: 'Blurry or dark',
      videos: 'Short videos', singles: 'Single photos', g24: '24 groups', g6: '6 groups', p31: '31 photos', v9: '9 videos', p112: '112 photos',
      swipe: 'Swipe', cont: 'Continue organizing', results: 'Results', oneByOne: 'One by one', keep: 'Keep', blurry: 'Blurry', best: 'Best',
      inAlbum: 'photos in your best album', free: 'About 3.8 GB can be freed', bestAlbum: 'Best album', shotAlbum: 'Screenshot album',
      marked: 'Marked for deletion', left: 'Left as they are', makeDel: 'Make albums and delete 960', makeOnly: 'Make albums only', back: 'Trips'
    },
    ja: {
      trip: '大阪旅行', organized: '68% 整理済み', similar: '似た写真のグループ', shots: 'スクリーンショットのグループ', flagged: 'ブレ・暗い写真',
      videos: '短い動画', singles: '1枚だけの写真', g24: '24グループ', g6: '6グループ', p31: '31枚', v9: '9本', p112: '112枚',
      swipe: 'スワイプ', cont: '続きから整理', results: '結果', oneByOne: '1枚ずつ見る', keep: '残す', blurry: 'ブレ', best: 'おすすめ',
      inAlbum: '枚がベストアルバムに入ります', free: '約3.8GB 空けられます', bestAlbum: 'ベストアルバム', shotAlbum: 'スクリーンショットのアルバム',
      marked: '削除候補', left: 'そのまま', makeDel: 'アルバムを作成して960件を削除', makeOnly: 'アルバムだけ作成', back: '旅行'
    }
  };

  // Simple SF Symbol look-alikes.
  const I = {
    stack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3 3 7.5 12 12l9-4.5z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg>',
    screens: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="3" width="14" height="12" rx="2"/><path d="M17 19H5a2 2 0 0 1-2-2V8"/></svg>',
    blur: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="12" r="3"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3z"/></svg>',
    photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m21 16-5-5-9 9"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
    dashed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"><circle cx="12" cy="12" r="9"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="#FF3B30" stroke-width="3.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="#34C759"><path d="M12 21s-7.5-4.6-9.5-9.3C1 8.2 3.3 4.5 7 4.5c2.1 0 3.6 1.1 5 2.8 1.4-1.7 2.9-2.8 5-2.8 3.7 0 6 3.7 4.5 7.2C19.5 16.4 12 21 12 21z"/></svg>'
  };

  let uid = 0;
  // Stand-in travel photos: sky, sun and hills in a few palettes.
  const PALETTES = [
    ['#FDBA74', '#F472B6', '#FDE68A', '#7C3AED', '#4C1D95'],
    ['#7DD3FC', '#BAE6FD', '#FDE047', '#22C55E', '#15803D'],
    ['#93C5FD', '#DBEAFE', '#FFFFFF', '#64748B', '#334155'],
    ['#FCA5A5', '#FED7AA', '#FEF3C7', '#0EA5E9', '#0369A1'],
    ['#A5B4FC', '#E0E7FF', '#FDE68A', '#10B981', '#047857'],
    ['#1E3A8A', '#6366F1', '#FDE68A', '#312E81', '#1E1B4B']
  ];
  function scene(p, blur) {
    const [a, b, sun, h1, h2] = PALETTES[p % PALETTES.length];
    const id = 'bcg' + (++uid);
    const f = blur ? `<filter id="${id}f"><feGaussianBlur stdDeviation="1.3"/></filter>` : '';
    return `<svg viewBox="0 0 90 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>${f}</defs>`
      + `<g${blur ? ` filter="url(#${id}f)"` : ''}><rect width="90" height="120" fill="url(#${id})"/><circle cx="62" cy="44" r="11" fill="${sun}" opacity=".95"/>`
      + `<path d="M-5 92 25 58l22 22 14-12 34 30v30H-5z" fill="${h1}"/><path d="M-5 104 30 82l26 14 18-8 21 12v28H-5z" fill="${h2}"/></g></svg>`;
  }

  const status = '<div class="bc-island"></div><div class="bc-status"><span>9:41</span><i></i></div>';
  const row = (icon, label, val, ok) =>
    `<div class="bc-row">${I[icon]}<span>${label}</span><span class="val">${val}</span>${ok ? '<span class="ok">✓</span>' : '<span class="chev">›</span>'}</div>`;

  function home(t) {
    return `${status}<div class="bc-nav"><span>‹ ${t.back}</span><span>${t.results}</span></div>
      <div class="bc-title">${t.trip}</div>
      <div class="bc-group bc-progress"><b>${t.organized}</b><div class="bc-bar"><span style="width:68%"></span></div></div>
      <div class="bc-group">${row('stack', t.similar, t.g24)}${row('screens', t.shots, t.g6)}${row('blur', t.flagged, t.p31, true)}${row('video', t.videos, t.v9)}${row('photo', t.singles, t.p112)}</div>
      <div class="bc-bottom"><div class="bc-btns"><span class="bc-btn">${t.swipe}</span><span class="bc-btn pri grow">${t.cont}</span></div></div>`;
  }

  function swipe(t) {
    return `${status}<div class="bc-nav"><span>‹</span><b>${t.oneByOne}</b><span class="dim">12 / 86</span></div>
      <div class="bc-cardwrap"><div class="bc-card back">${scene(1)}</div>
        <div class="bc-card"><div class="bc-badge"><span>${t.blurry}</span></div><div class="bc-hint">♥ ${t.keep}</div>${scene(0, true)}</div></div>
      <div class="bc-controls"><span class="bc-round lg">${I.x}</span><span class="bc-round sm">${I.undo}</span><span class="bc-round lg">${I.heart}</span></div>`;
  }

  function summary(t) {
    const thumbs = [3, 4, 2, 5, 1, 0].map((p, i) => `<div class="${i < 2 ? 'sel' : ''}">${scene(p)}</div>`).join('');
    return `${status}<div class="bc-nav"><span>‹</span><b>${t.results}</b><span></span></div>
      <div class="bc-group bc-hero"><div class="big">1,284 → 212</div><div class="sub">${t.inAlbum}</div><div class="free">${t.free}</div></div>
      <div class="bc-group">${row('star', t.bestAlbum, '212')}${row('screens', t.shotAlbum, '18')}${row('trash', t.marked, '960')}${row('dashed', t.left, '94')}</div>
      <div class="bc-thumbs">${thumbs}</div>
      <div class="bc-bottom"><span class="bc-btn red">${t.makeDel}</span><span class="bc-btn">${t.makeOnly}</span></div>`;
  }

  window.renderBestcutPhones = function (el, lang) {
    if (!el) return;
    const t = T[lang] || T.en;
    el.innerHTML = [home, swipe, summary]
      .map(fn => `<div class="bc-phone"><div class="bc-phone-frame"><div class="bc-screen">${fn(t)}</div></div></div>`).join('');
  };
})();
