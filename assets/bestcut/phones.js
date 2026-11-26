(function () {
  const BASE = (document.currentScript && document.currentScript.src || '').replace(/phones\.js.*$/, '');
  const img = (name, pos) => `<img src="${BASE}${name}.jpg" alt="" decoding="async"${pos ? ` style="object-position:${pos}"` : ''}>`;

  const T = {
    ko: {
      appName: 'BestCut', folders: '폴더', cleanups: '정리 목록', folder: '일본 여행', places: '2곳', jeju: '제주 여행', jejuD: '10월 3일 – 5일', weekend: '9월 20일 – 21일', newCleanup: '새로 정리하기',
      trip: '오사카 여행', organized: '68% 정리함', similar: '비슷한 사진 묶음', shots: '스크린샷 묶음', flagged: '흔들림·어두움',
      videos: '짧은 동영상', singles: '한 장짜리 사진', g24: '24묶음', g6: '6묶음', p31: '31장', v9: '9개', p112: '112장',
      swipe: '스와이프', cont: '이어서 정리하기', results: '결과', oneByOne: '한 장씩 보기', keep: '남기기', blurry: '흔들림', best: '추천',
      group: '이 묶음 5장 · 1장 남김', compare: '사진 두 장을 길게 누르면 나란히 비교해요', confirm: '1장 남기고 4장은 지울 후보로',
      inAlbum: '장이 베스트 앨범에 들어가요', free: '약 3.8GB 비울 수 있어요', bestAlbum: '베스트 앨범', shotAlbum: '스크린샷 앨범',
      marked: '지울 후보', left: '그대로 둠', makeDel: '앨범 만들고 960개 지우기', makeOnly: '앨범만 만들기',
      foot: '지운 사진은 30일 동안 "최근 삭제된 항목"에 남아 있어서 되살릴 수 있어요.'
    },
    en: {
      appName: 'BestCut', folders: 'Folders', cleanups: 'Your cleanups', folder: 'Japan Trip', places: '2 places', jeju: 'Jeju Trip', jejuD: 'Oct 3 – 5', weekend: 'Sep 20 – 21', newCleanup: 'Start a new cleanup',
      trip: 'Osaka Trip', organized: '68% organized', similar: 'Similar photos', shots: 'Similar screenshots', flagged: 'Blurry or dark',
      videos: 'Short videos', singles: 'Single photos', g24: '24 groups', g6: '6 groups', p31: '31 photos', v9: '9 videos', p112: '112 photos',
      swipe: 'Swipe', cont: 'Continue organizing', results: 'Results', oneByOne: 'One by one', keep: 'Keep', blurry: 'Blurry', best: 'Best',
      group: '5 in this group · 1 kept', compare: 'Long-press two photos to compare them', confirm: 'Keep 1 · mark 4 for deletion',
      inAlbum: 'photos in your best album', free: 'About 3.8 GB can be freed', bestAlbum: 'Best album', shotAlbum: 'Screenshot album',
      marked: 'Marked for deletion', left: 'Left as they are', makeDel: 'Make albums and delete 960', makeOnly: 'Make albums only',
      foot: 'Deleted photos stay in Recently Deleted for 30 days, so you can still recover them.'
    },
    ja: {
      appName: 'BestCut', folders: 'フォルダ', cleanups: '整理リスト', folder: '日本旅行', places: '2か所', jeju: '済州旅行', jejuD: '10月3日～5日', weekend: '9月20日～21日', newCleanup: '新しく整理する',
      trip: '大阪旅行', organized: '68% 整理済み', similar: '似た写真のグループ', shots: 'スクショのグループ', flagged: 'ブレ・暗い写真',
      videos: '短い動画', singles: '1枚だけの写真', g24: '24グループ', g6: '6グループ', p31: '31枚', v9: '9本', p112: '112枚',
      swipe: 'スワイプ', cont: '続きから整理', results: '結果', oneByOne: '1枚ずつ見る', keep: '残す', blurry: 'ブレ', best: 'おすすめ',
      group: 'このグループ5枚・1枚を残す', compare: '2枚の写真を長押しすると並べて比較できます', confirm: '1枚を残し、4枚を削除候補に',
      inAlbum: '枚がベストアルバムに入ります', free: '約3.8GB 空けられます', bestAlbum: 'ベストアルバム', shotAlbum: 'スクショのアルバム',
      marked: '削除候補', left: 'そのまま', makeDel: 'アルバムを作成して960件を削除', makeOnly: 'アルバムだけ作成',
      foot: '削除した写真は30日間「最近削除した項目」に残るので、復元できます。'
    }
  };
  const S = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;
  const I = {
    stack: S('<path d="M12 3 3 7.5 12 12l9-4.5z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/>'),
    screens: S('<rect x="7" y="3" width="14" height="12" rx="2.5"/><path d="M17 19H5.5A2.5 2.5 0 0 1 3 16.5V8"/>'),
    blur: S('<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="12" r="3"/>'),
    video: S('<rect x="2" y="6" width="14" height="12" rx="2.5"/><path d="m16 10 6-3v10l-6-3z"/>'),
    photo: S('<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="m21 16-5-5-9 9"/>'),
    star: S('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>'),
    starFill: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.4l-5.8 3 1.1-6.4-4.7-4.6 6.5-.9z"/></svg>`,
    trash: S('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    dashed: S('<circle cx="12" cy="12" r="9" stroke-dasharray="3.2 3"/>'),
    hand: S('<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 10V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M15 10.5V6.5a1.5 1.5 0 0 1 3 0v7a7 7 0 0 1-7 7h-.6a6 6 0 0 1-4.7-2.3l-2.5-3.2a1.6 1.6 0 0 1 2.4-2.1L9 14.5"/>'),
    back: S('<path d="M15 5 8 12l7 7"/>', ' stroke-width="2.6"'),
    more: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><circle cx="5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="19" cy="12" r="1.9"/></g></svg>`,
    chev: `<svg class="chev" viewBox="0 0 8 14" aria-hidden="true"><path d="m1.5 1.5 5 5.5-5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    ok: `<svg class="ok" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#34C759"/><path d="m7 12.5 3.2 3L17 8.8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    keepOn: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#0088FF"/><path d="m7 12.5 3.2 3L17 8.8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    keepOff: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="rgba(0,0,0,.12)" stroke="#fff" stroke-width="1.8"/></svg>`,
    blurBadge: S('<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="12" r="3"/>', ' stroke-width="2.4"'),
    x: S('<path d="M6 6l12 12M18 6 6 18"/>', ' stroke="#FF383C" stroke-width="3"'),
    undo: S('<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>', ' stroke-width="2.4"'),
    heart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34C759" d="M12 21s-7.5-4.6-9.5-9.3C1 8.2 3.3 4.5 7 4.5c2.1 0 3.6 1.1 5 2.8 1.4-1.7 2.9-2.8 5-2.8 3.7 0 6 3.7 4.5 7.2C19.5 16.4 12 21 12 21z"/></svg>`,
    heartTag: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 21s-7.5-4.6-9.5-9.3C1 8.2 3.3 4.5 7 4.5c2.1 0 3.6 1.1 5 2.8 1.4-1.7 2.9-2.8 5-2.8 3.7 0 6 3.7 4.5 7.2C19.5 16.4 12 21 12 21z"/></svg>`,
    gear: S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
    folder: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0088FF" d="M3 6.5A2.5 2.5 0 0 1 5.5 4h4l2 2.2h7A2.5 2.5 0 0 1 21 8.7v8.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/></svg>`,
    plus: S('<path d="M12 5v14M5 12h14"/>', ' stroke-width="2.6"'),
    drive: S('<rect x="2.5" y="12" width="19" height="7" rx="2"/><path d="M6 15.5h.01M10 4h4M12 4v5"/>')
  };

  const STATUS = `<div class="bc-status"><span>9:41</span><span class="r">
    <svg viewBox="0 0 18 12" aria-hidden="true"><g fill="currentColor"><rect x="0" y="8" width="3" height="4" rx=".8"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8"/><rect x="10" y="3" width="3" height="9" rx=".8"/><rect x="15" y="0" width="3" height="12" rx=".8"/></g></svg>
    <svg viewBox="0 0 16 12" aria-hidden="true"><path fill="currentColor" d="M8 2.3c2.4 0 4.6.9 6.2 2.5l1.1-1.1A10.3 10.3 0 0 0 8 .7 10.3 10.3 0 0 0 .7 3.7l1.1 1.1A8.7 8.7 0 0 1 8 2.3Zm0 3.2c1.5 0 2.9.6 3.9 1.6L13 6a7 7 0 0 0-10 0l1.1 1.1c1-1 2.4-1.6 3.9-1.6Zm0 3.2c-.7 0-1.3.3-1.8.7L8 11.2l1.8-1.8c-.5-.4-1.1-.7-1.8-.7Z"/></svg>
    <svg viewBox="0 0 27 13" aria-hidden="true"><rect x=".5" y=".5" width="23" height="12" rx="3.6" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="20" height="9" rx="2.3" fill="currentColor"/><path d="M25 4.3v4.4c.8-.3 1.4-1.2 1.4-2.2s-.6-1.9-1.4-2.2Z" fill="currentColor" opacity=".45"/></svg>
  </span></div>`;
  const CHROME = '<div class="bc-island"></div><div class="bc-homebar"></div>';

  const row = (icon, label, val, ok) =>
    `<div class="bc-row">${I[icon]}<div class="bc-rt"><span>${label}</span><span class="v">${val}</span>${ok ? I.ok : I.chev}</div></div>`;

  const screens = {
    trips: t => {
      const two = (a, b) => `<div class="bc-row bc-row2"><div class="bc-rt"><span class="bc-two"><b>${a}</b><small>${b}</small></span>${I.chev}</div></div>`;
      return `${STATUS}
      <div class="bc-bar"><span style="flex:1"></span><span class="bc-glass bc-ic">${I.gear}</span></div>
      <div class="bc-large">${t.appName}</div>
      <div class="bc-head">${t.folders}</div>
      <div class="bc-sec"><div class="bc-row bc-row2"><span class="bc-fold">${I.folder}</span><div class="bc-rt"><span class="bc-two"><b>${t.folder}</b><small>${t.places}</small></span>${I.chev}</div></div></div>
      <div class="bc-head">${t.cleanups}</div>
      <div class="bc-sec">${two(t.jeju, t.jejuD)}${two(t.weekend, '')}</div>
      <div class="bc-bottom" style="align-items:center"><span class="bc-btn pri fit">${I.plus}${t.newCleanup}</span></div>`;
    },

    home: t => `${STATUS}
      <div class="bc-bar"><span class="bc-glass bc-ic">${I.back}</span><span style="flex:1"></span><span class="bc-glass bc-ic">${I.more}</span><span class="bc-glass">${t.results}</span></div>
      <div class="bc-large">${t.trip}</div>
      <div class="bc-sec bc-prog"><b>${t.organized}</b><div class="bc-track"><i></i></div></div>
      <div class="bc-sec">${row('stack', t.similar, t.g24)}${row('screens', t.shots, t.g6)}${row('blur', t.flagged, t.p31, true)}${row('video', t.videos, t.v9)}${row('photo', t.singles, t.p112)}</div>
      <div class="bc-bottom"><div class="bc-btns"><span class="bc-btn fit">${I.hand}${t.swipe}</span><span class="bc-btn pri">${t.cont}</span></div></div>`,

    review: t => {
      const pos = ['50% 50%', '46% 50%', '54% 50%', '50% 46%', '43% 52%'];
      const strip = pos.map((p, i) => `<div class="bc-photo${i === 0 ? ' focus' : ''}">${img(i === 3 ? 'lake' : 'lake', p)}${i === 0 ? `<span class="mini" style="color:#D69E00">${I.starFill}</span>` : ''}<span class="tick">${i === 0 ? I.keepOn : I.keepOff}</span></div>`).join('');
      return `${STATUS}
      <div class="bc-bar"><span class="bc-glass bc-ic">${I.back}</span><span class="ttl">${t.similar}</span><span class="bc-glass bc-ic" style="visibility:hidden"></span></div>
      <div class="bc-photo bc-hero-photo">${img('lake')}<div class="bc-badges"><span class="bc-badge best">${I.starFill}${t.best}</span></div><span class="bc-keep">${I.keepOn}</span></div>
      <div class="bc-meta">${t.group}</div>
      <div class="bc-strip">${strip}</div>
      <div class="bc-hint">${t.compare}</div>
      <div class="bc-bottom" style="padding-top:.8em"><span class="bc-btn pri">${t.confirm}</span></div>`;
    },

    swipe: t => `${STATUS}
      <div class="bc-bar"><span class="bc-glass bc-ic">${I.back}</span><span class="ttl">${t.oneByOne}</span><span class="bc-dim" style="min-width:2.6em;text-align:right">12 / 86</span></div>
      <div class="bc-deck">
        <div class="bc-card bc-photo next">${img('beach')}</div>
        <div class="bc-card bc-photo front">${img('sunset')}<span class="bc-tag">${I.heartTag}${t.keep}</span></div>
      </div>
      <div class="bc-ctrl"><span class="bc-round lg">${I.x}</span><span class="bc-round sm">${I.undo}</span><span class="bc-round lg keep">${I.heart}</span></div>`,

    flagged: t => `${STATUS}
      <div class="bc-bar"><span class="bc-glass bc-ic">${I.back}</span><span class="ttl">${t.oneByOne}</span><span class="bc-dim" style="min-width:2.6em;text-align:right">13 / 86</span></div>
      <div class="bc-deck"><div class="bc-card bc-photo">${img('sunset-shake')}<div class="bc-badges" style="top:.9em;left:.9em"><span class="bc-badge">${I.blurBadge}${t.blurry}</span></div></div></div>
      <div class="bc-ctrl"><span class="bc-round lg">${I.x}</span><span class="bc-round sm">${I.undo}</span><span class="bc-round lg">${I.heart}</span></div>`,

    summary: t => `${STATUS}
      <div class="bc-bar"><span class="bc-glass bc-ic">${I.back}</span><span class="ttl">${t.results}</span><span class="bc-glass bc-ic" style="visibility:hidden"></span></div>
      <div class="bc-sec bc-big" style="margin-top:.5em"><div class="n"><span data-count-from="1284">1,284</span> → <span data-count-to="212">212</span></div><div class="s">${t.inAlbum}</div><div class="f">${I.drive}${t.free}</div></div>
      <div class="bc-sec">${row('star', t.bestAlbum, '212')}${row('screens', t.shotAlbum, '18')}${row('trash', t.marked, '960')}${row('dashed', t.left, '94')}</div>
      <div class="bc-foot">${t.foot}</div>
      <div class="bc-bottom"><span class="bc-btn red">${t.makeDel}</span><span class="bc-btn">${t.makeOnly}</span></div>`
  };

  const phone = (inner, cls = '') =>
    `<div class="bc-phone ${cls}"><div class="bc-frame"><div class="bc-bezel"><div class="bc-screen">${inner}${CHROME}</div></div></div></div>`;
  window.renderBestcutPhones = function (el, lang, list) {
    if (!el) return;
    const t = T[lang] || T.en;
    list = list || ['home', 'swipe', 'summary'];
    el.innerHTML = list.map((s, i) => phone(`<div class="bc-ui${s === 'swipe' ? ' bc-anim' : ''}">${screens[s](t)}</div>`, list.length === 3 && i === 1 ? 'mid' : '')).join('');
  };
  window.BESTCUT_STORY = ['trips', 'home', 'review', 'flagged', 'swipe', 'summary'];
  window.renderBestcutStory = function (el, lang) {
    if (!el) return;
    const t = T[lang] || T.en;
    const current = el.dataset.screen || 'home';
    el.innerHTML = phone(window.BESTCUT_STORY.map(s =>
      `<div class="bc-layer${s === 'swipe' ? ' bc-anim' : ''}${s === current ? ' on' : ''}" data-screen="${s}">${screens[s](t)}</div>`).join(''));
  };
  window.showBestcutScreen = function (el, name) {
    if (!el || el.dataset.screen === name) return;
    el.dataset.screen = name;
    el.querySelectorAll('.bc-layer').forEach(l => l.classList.toggle('on', l.dataset.screen === name));
    if (name === 'summary') {
      const from = el.querySelector('[data-screen="summary"] [data-count-from]');
      if (from && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const start = performance.now(), a = 1284, b = 212;
        el.querySelector('[data-screen="summary"] [data-count-to]').textContent = '0';
        (function tick(now) {
          const p = Math.min(1, (now - start) / 1100), e = 1 - Math.pow(1 - p, 3);
          el.querySelector('[data-screen="summary"] [data-count-to]').textContent = Math.round(b * e).toLocaleString('en-US');
          from.textContent = Math.round(a * Math.min(1, e * 1.4)).toLocaleString('en-US');
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      }
    }
  };
})();
