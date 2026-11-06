/* GM Web3 — 網站資料
 * 想改個人資訊、邀請碼、交易所教學，只要改這個檔案即可。
 * 教學章節在 js/chapters.js。
 */
window.SITE = window.SITE || {};
Object.assign(window.SITE, {
  profile: {
    name: "Yoaka",
    title: "Yoakaの人生實驗室",
    tagline: "撸毛 × 投研 × 設計｜用白話文陪你走進 Web3",
    avatar: "https://ugc.production.linktr.ee/7655bfe8-a15b-40a3-a370-99db324a24db_746B1862-1F73-400F-A2CA-F18037BEC2AE.png",
    email: "qq0223lin@gmail.com",
    collabNote: "合作邀約請來信",
    linktree: "https://linktr.ee/yoaka"
  },

  /* 交易所：陣列順序＝網站顯示順序（MEXC 置頂）
   * code = 顯示給讀者複製的邀請碼；url = 邀請連結；slug = 教學文章網址 #/ex/slug */
  exchanges: [
    {
      slug: "mexc", name: "MEXC", zh: "抹茶", code: "yoaka777", url: "https://promote.mexc.com/a/5RmvaOMx",
      color: "#2F7BFF", type: "CEX", pinned: true,
      desc: "上新幣超快、小幣種最齊，現貨掛單 0 手續費，追早期項目必備。",
      guide: {
        updated: "2026-11",
        summary: "MEXC（抹茶）是以「上新幣快、幣種多、手續費低」出名的交易所，很多鏈上剛火起來的幣，第一個上的 CEX 常常就是 MEXC。這是我自己追新幣、撸毛後換幣最常用的平台。",
        facts: [["成立", "2018 年"], ["主打", "新幣、小幣、低手續費"], ["現貨費率", "Maker 0%／Taker 約 0.05%"], ["合約費率", "Maker 0%／Taker 約 0.02%"], ["邀請碼", "yoaka777"]],
        sections: [
          { title: "MEXC 適合誰？", html: `<ul><li>✅ 想第一時間買到新幣、Meme、小市值幣的人</li><li>✅ 交易頻繁、在意手續費的人</li><li>✅ 撸毛領到代幣後想找地方賣的人</li><li>⚠️ 新幣多也代表垃圾幣多，上架≠安全，請先讀<a href="#/c/11">怎麼研究一個項目</a></li></ul>` },
          { title: "Step 1：用邀請碼註冊", html: `<ol><li>點本頁的「立即註冊」進入 MEXC 官方邀請頁（或下載官方 App）。</li><li>選擇 Email 或手機號註冊，設定密碼。</li><li>確認邀請碼欄位為 <code>yoaka777</code>（用我的連結會自動帶入；沒帶入就手動貼上）。</li><li>輸入信箱／簡訊驗證碼，完成註冊。</li></ol><p>⚠️ 邀請碼一定要在<strong>註冊當下</strong>填，事後通常不能補。</p>` },
          { title: "Step 2：完成 KYC 身分驗證", html: `<p>MEXC 的規則比較寬鬆：未完成 KYC 也能交易，但<strong>提現額度與部分功能會受限</strong>。建議還是完成初級認證，提領額度更高，新手任務獎勵通常也要求 KYC。</p><ol><li>App 首頁點頭像 →「身分認證」。</li><li>選國籍，上傳身分證或護照正反面。</li><li>依指示完成人臉辨識，通常幾分鐘到數小時內審核完成。</li></ol>` },
          { title: "Step 3：安全設定（別跳過）", html: `<ul><li>綁定 Google Authenticator 驗證器</li><li>設定防釣魚碼</li><li>開啟提現白名單</li><li>資金密碼和登入密碼不要一樣</li></ul>` },
          { title: "Step 4：台灣用戶怎麼入金", html: `<p>MEXC 沒有封鎖台灣 IP，台灣用戶可以正常開戶與交易。最常用的入金方式：</p><ol><li><strong>台灣交易所轉 USDT（最推薦）</strong>：在 MAX、BitoPro 等台灣交易所用台幣買 USDT → MEXC「資產」→「充值」→ 選 USDT 與 <strong>TRC20</strong> 網路 → 複製地址 → 回台灣交易所提領。手續費低、到帳快。</li><li><strong>P2P（C2C）買幣</strong>：只選平台認證、成交率高的商家。</li><li><strong>信用卡／第三方買幣</strong>：方便但費用較高。</li></ol><p>入金後如果在「資金帳戶」，記得劃轉到「現貨帳戶」才能交易。</p>` },
          { title: "Step 5：買第一顆幣", html: `<ol><li>點「現貨」→ 搜尋幣種（例如 BTC/USDT）。</li><li>選「限價」輸入價格與數量，或「市價」直接成交。</li><li>買新幣前先到幣種資訊頁核對<strong>合約地址</strong>，確認不是同名假幣。</li></ol>` },
          { title: "手續費與 MX 折扣", html: `<table><thead><tr><th></th><th>Maker（掛單）</th><th>Taker（吃單）</th></tr></thead><tbody><tr><td>現貨</td><td>0%</td><td>約 0.05%</td></tr><tr><td>合約</td><td>0%</td><td>約 0.02%</td></tr></tbody></table><p>持有平台幣 MX 或用 MX 抵扣手續費可再享折扣。MEXC 常會調整費率與活動，<strong>請以官網費率頁為準</strong>；用 API 下單的費率表也不同。</p>` },
          { title: "出金：怎麼換回台幣", html: `<ol><li>把幣賣成 USDT，劃轉到資金帳戶。</li><li>「提現」→ 貼上台灣交易所的 USDT 充值地址，網路選 <strong>TRC20</strong>（兩邊一定要一致）。</li><li>到台灣交易所把 USDT 賣成台幣，提領到銀行。</li></ol><p>大額台幣進出可能觸發銀行洗錢防制詢問，保留交易紀錄；海外交易所所得也要留意申報規定。</p>` },
          { title: "注意事項", html: `<ul><li>MEXC 不受台灣金管會監管，資產不要全部放在單一平台。</li><li>新幣上線初期波動極大，有些幣會在短時間內暴跌或被下架。</li><li>只從官網或官方 App 登入，小心假網站。</li></ul>` }
        ]
      }
    },
    {
      slug: "binance", name: "Binance", zh: "幣安", code: "DXzKnO", url: "https://www.binance.com/join?ref=XI9YZALA",
      color: "#F0B90B", type: "CEX",
      desc: "全球交易量最大的交易所之一，幣種多、流動性深，現貨合約理財都齊全。",
      guide: {
        updated: "2026-11",
        summary: "幣安（Binance）是全球規模最大的加密貨幣交易所之一，流動性好、產品最完整，從現貨、合約、理財到 Launchpool 都有，也設有 SAFU 用戶保障基金。新手想找一間「什麼都有」的主力交易所，幣安是很穩的選擇。",
        facts: [["成立", "2017 年"], ["主打", "流動性、產品完整度"], ["現貨費率", "Maker／Taker 0.1%（BNB 抵扣 75 折）"], ["保障", "SAFU 用戶保障基金"], ["邀請碼", "DXzKnO"]],
        sections: [
          { title: "幣安適合誰？", html: `<ul><li>✅ 第一次開海外交易所、想要一間主力平台</li><li>✅ 交易主流幣，在意深度與成交品質</li><li>✅ 想參與 Launchpool、理財、Alpha 新幣活動</li></ul>` },
          { title: "開戶前準備", html: `<ul><li>Email 或手機號碼</li><li>身分證件（護照最通用；部分國家可用身分證或駕照）</li><li>可以拍照與人臉辨識的手機</li></ul><p>開戶大約 5 分鐘，KYC 通常 5–15 分鐘內自動審核完成。</p>` },
          { title: "Step 1：用邀請連結註冊", html: `<ol><li>點本頁「立即註冊」，或下載官方 Binance App。</li><li>輸入 Email／手機，設定密碼。</li><li>確認推薦碼欄位已自動帶入（用我的連結會自動帶入）。</li><li>完成信箱／簡訊驗證。</li></ol>` },
          { title: "Step 2：KYC 身分驗證", html: `<ol><li>App →「身分認證」→ 選擇居住國家。</li><li>上傳證件，填寫個人資料與地址。</li><li>完成人臉驗證，等待審核。</li></ol><p>沒有 KYC 幾乎無法入金與交易，建議註冊完就一次做完。</p>` },
          { title: "Step 3：安全設定", html: `<ul><li>驗證器 App 或 Passkey 雙重驗證</li><li>防釣魚碼（幣安官方信件會帶上）</li><li>提現白名單</li><li>定期檢查登入裝置</li></ul>` },
          { title: "Step 4：台灣用戶入金方式", html: `<ol><li><strong>台灣交易所買 USDT 再轉入（手續費最低）</strong>：在 MAX、BitoPro 用台幣買 USDT → 幣安「錢包」→「充值」→ USDT → 網路選 <strong>TRC20</strong> → 複製地址到台灣交易所提領。</li><li><strong>P2P 幣幣交易</strong>：目前台灣無法用台幣 P2P 直接入金，需要先換成加密貨幣再橋接，以官網顯示為準。</li><li><strong>信用卡買幣</strong>：最快，但費率較高。</li><li><strong>美元電匯</strong>：適合大額，需要外幣帳戶。</li></ol>` },
          { title: "Step 5：買幣", html: `<p>新手可以先用「閃兌」熟悉流程，再到「現貨交易」練習限價單。閃兌和現貨的報價方式不同，比較時看最後到手數量。</p>` },
          { title: "手續費", html: `<p>現貨 Maker／Taker 各 0.1%，開啟「使用 BNB 抵扣手續費」可打 75 折，再加上邀請碼返佣更省。VIP 等級越高費率越低。費率以官網為準。</p>` },
          { title: "出金", html: `<p>賣成 USDT → 提現到台灣交易所的 USDT 地址（網路兩邊要一致）→ 在台灣交易所賣成台幣提領。第一次提現先小額測試。</p>` },
          { title: "注意事項", html: `<ul><li>幣安在各國的服務範圍會隨法規調整，請以官網公告為準。</li><li>網路上有大量幣安假網站與假客服，只從書籤或官方 App 進入。</li><li>邀請碼說明：我的 Linktree 標示邀請碼為 DXzKnO，邀請連結內參數為 XI9YZALA，用連結註冊會自動帶入。</li></ul>` }
        ]
      }
    },
    {
      slug: "okx", name: "OKX", zh: "歐易", code: "62626519", url: "https://www.okx.com/join/62626519",
      color: "#9ca3af", type: "CEX",
      desc: "交易所＋Web3 錢包雙棲，台幣 P2P 可直接買 U，撸毛、DEX、跨鏈一個 App 搞定。",
      guide: {
        updated: "2026-11",
        summary: "OKX 是全球前幾大交易所，最大特色是同一個 App 裡同時有中心化交易所和功能完整的 Web3 錢包，撸毛、鏈上兌換、跨鏈都很方便；台灣用戶也能用台幣 P2P 直接買 USDT，是我很推薦給新手的第一間交易所。",
        facts: [["主打", "交易所＋Web3 錢包"], ["台幣入金", "支援 P2P 買 USDT"], ["現貨費率", "約 Maker 0.08%／Taker 0.1%"], ["KYC", "需完成 Level 1 才能交易與出金"], ["邀請碼", "62626519"]],
        sections: [
          { title: "OKX 適合誰？", html: `<ul><li>✅ 想用台幣直接買 USDT 的台灣新手</li><li>✅ 想玩鏈上、撸毛空投（內建 Web3 錢包）</li><li>✅ 想要交易所和錢包在同一個 App 裡管理</li></ul>` },
          { title: "Step 1：用邀請連結註冊", html: `<ol><li>點本頁「立即註冊」或下載官方 OKX App。</li><li>選擇國家／地區，輸入 Email 或手機。</li><li>確認邀請碼為 <code>62626519</code>。</li><li>完成驗證碼、設定密碼。</li></ol>` },
          { title: "Step 2：KYC（必做）", html: `<p>OKX 自 2024 年起要求完成 Level 1 身分驗證才能交易與出金。</p><ol><li>個人中心 →「身分認證」。</li><li>上傳身分證、護照或駕照。</li><li>完成人臉辨識，等待審核。</li></ol>` },
          { title: "Step 3：安全設定", html: `<ul><li>驗證器 2FA、防釣魚碼、提現白名單</li><li>資金密碼和登入密碼不同</li><li>Web3 錢包的助記詞（或 MPC 備份）要另外妥善保存</li></ul>` },
          { title: "Step 4：台灣用戶三種入金", html: `<ol><li><strong>台幣 P2P 買 USDT</strong>：「買幣」→「P2P 交易」→ 選 TWD 與 USDT → 挑認證商家 → 照訂單用本人帳戶轉帳 → 按「已付款」→ 商家放幣。平台本身不收 P2P 手續費。</li><li><strong>信用卡買幣</strong>：透過第三方服務，費用約 2–3.5%。</li><li><strong>從台灣交易所轉入</strong>：在 BitoPro、MAX 買 USDT → OKX「充值」複製地址 → 網路選 TRC20 或 Arbitrum One 等低費網路。</li></ol>` },
          { title: "Step 5：交易所與 Web3 錢包切換", html: `<p>App 上方可以在「交易所」和「錢包」之間切換。交易所的資產要「提現」到自己的 Web3 錢包地址才會上鏈，兩邊不是同一個帳戶。</p>` },
          { title: "手續費", html: `<p>一般用戶現貨約 Maker 0.08%／Taker 0.1%，持有 OKB 或交易量提高可降級費率。實際以官網費率頁為準。</p>` },
          { title: "出金", html: `<p>常見做法：USDT 用 P2P 賣成台幣（只認本人帳戶真實入帳才放幣），或轉回台灣交易所賣出再提領。網路一定要選對。</p>` },
          { title: "注意事項", html: `<ul><li>P2P 小心黑錢：只接受本人帳戶付款，不接受第三方代付。</li><li>Web3 錢包連 DApp 時要看清楚授權內容，詳見<a href="#/c/09">安全與防詐</a>。</li><li>服務範圍以官網公告為準。</li></ul>` }
        ]
      }
    },
    {
      slug: "bitget", name: "Bitget", zh: "", code: "cnkx6399", url: "https://share.bitget.com/u/PDVNM481",
      color: "#00F0FF", type: "CEX",
      desc: "跟單交易龍頭，合約產品豐富，新幣上架快，新手可以直接跟著高手下單。",
      guide: {
        updated: "2026-11",
        summary: "Bitget 成立於 2018 年、總部在新加坡，最有名的是「跟單交易」：可以查看交易員的歷史績效，一鍵跟著他們下單。合約產品和新幣上架也很積極，近年還推出代幣化美股等新產品。",
        facts: [["成立", "2018 年"], ["主打", "跟單交易、合約"], ["現貨費率", "Maker／Taker 0.1%（BGB 抵扣 8 折）"], ["出金條件", "需完成 KYC Level 1"], ["邀請碼", "cnkx6399"]],
        sections: [
          { title: "Bitget 適合誰？", html: `<ul><li>✅ 沒時間看盤、想參考高手操作的人（跟單）</li><li>✅ 想交易合約、新幣的人</li><li>⚠️ 跟單不等於穩賺，交易員過去績效不代表未來</li></ul>` },
          { title: "Step 1：用邀請連結註冊", html: `<ol><li>點本頁「立即註冊」或下載官方 Bitget App。</li><li>輸入 Email／手機、設定密碼。</li><li>確認邀請碼已帶入（我的邀請碼：<code>cnkx6399</code>）。</li><li>完成驗證。</li></ol>` },
          { title: "Step 2：KYC 與安全設定", html: `<p>出金前必須完成 KYC Level 1（身分證件＋人臉辨識）。完成後立刻設定驗證器 2FA、防釣魚碼和提現白名單。</p>` },
          { title: "Step 3：台灣用戶入金", html: `<p>目前無法直接用台幣入金 Bitget，常見路線：</p><ol><li><strong>台灣交易所轉 USDT（推薦）</strong>：在 MAX 或 BitoPro 買 USDT → Bitget「充值」→ USDT → TRC20 → 複製地址提領過來。Bitget 不收充值費，只有轉出方的網路費。</li><li><strong>P2P</strong>：平台不收費，但商家報價可能有價差，一定要選認證商家、只用本人帳戶。</li><li><strong>信用卡</strong>：費用約 3–4%，最貴。</li></ol>` },
          { title: "Step 4：怎麼跟單", html: `<ol><li>進入「跟單」頁面，篩選交易員。</li><li>看<strong>歷史報酬、最大回撤、跟單人數、帶單時間</strong>，不要只看近 7 天報酬。</li><li>設定跟單金額、單筆上限、止損比例。</li><li>先用小額跟一段時間，觀察後再調整。</li></ol><p>跟單的交易員通常會從獲利中抽成，條件以頁面顯示為準。</p>` },
          { title: "手續費", html: `<p>現貨 Maker／Taker 約 0.1%，用 BGB 抵扣可享 8 折；合約費率另計。費率與活動以官網為準。</p>` },
          { title: "出金", html: `<p>把 USDT 提到台灣交易所（網路要一致）→ 賣成台幣 → 提領到銀行。第一次先小額測試。</p>` },
          { title: "注意事項", html: `<ul><li>Bitget 為境外平台，可用產品會受地區與 KYC 限制。</li><li>跟單合約一樣有爆倉風險，請設好止損與跟單上限。</li><li>邀請碼說明：Linktree 標示邀請碼為 cnkx6399，邀請連結為 PDVNM481，用連結註冊會自動帶入。</li></ul>` }
        ]
      }
    },
    {
      slug: "backpack", name: "Backpack", zh: "", code: "yoaka", url: "https://backpack.exchange/refer/yoaka",
      color: "#E33E3F", type: "CEX",
      desc: "Solana 生態出身的合規交易所，介面簡潔，常有積分與空投活動。",
      guide: {
        updated: "2026-11",
        summary: "Backpack 由 Solana 生態知名團隊打造（同時也有 Backpack 錢包與 Mad Lads NFT），主打合規與簡潔介面，並收購了 FTX EU 處理歐洲用戶的資產返還。平台常有積分（Points）活動，是撸毛玩家關注的交易所之一。",
        facts: [["背景", "Solana 生態團隊"], ["主打", "合規、積分活動"], ["現貨費率", "Maker 0.08%／Taker 0.10%"], ["KYC", "證件＋活體驗證"], ["邀請碼", "yoaka"]],
        sections: [
          { title: "Backpack 適合誰？", html: `<ul><li>✅ Solana 生態玩家</li><li>✅ 想參與交易所積分、潛在空投的人</li><li>✅ 喜歡簡潔介面、重視合規的人</li></ul>` },
          { title: "Step 1：用邀請連結註冊", html: `<ol><li>點本頁「立即註冊」（邀請碼 <code>yoaka</code> 會自動帶入）。</li><li>輸入 Email、設定密碼，完成信箱驗證。</li><li>帳戶類型選「個人帳戶」。</li></ol>` },
          { title: "Step 2：KYC", html: `<p>依官方說明，個人 KYC 需要：</p><ul><li>全名、出生日期、地址</li><li>收入來源與職業</li><li>清晰有效的身分證件</li><li>活體檢測（Liveness check，人臉辨識）</li></ul><p>資料要和證件完全一致，避免審核卡關。</p>` },
          { title: "Step 3：入金", html: `<ol><li><strong>鏈上轉入 USDC／USDT／SOL</strong>：從台灣交易所或其他平台提領過來，Solana 網路速度快、手續費低。</li><li><strong>美元電匯</strong>：部分地區支援，最低約 100 美元，必須從本人帳戶匯款。</li></ol>` },
          { title: "Step 4：交易與積分", html: `<p>現貨 Maker 0.08%／Taker 0.10%，部分穩定幣交易對可能有免手續費優惠。平台會依交易量、持倉等發放積分，積分規則與是否兌換代幣以官方公告為準，<strong>積分不保證有價值</strong>。</p>` },
          { title: "出金", html: `<p>把資產提到自己的錢包或台灣交易所（Solana 網路要選對），再換成台幣。</p>` },
          { title: "注意事項", html: `<ul><li>台灣用戶能否開戶、入金通道與費率會變動，以官網為準。</li><li>為了刷積分而大量合約交易，手續費和爆倉風險可能遠大於獎勵。</li></ul>` }
        ]
      }
    },
    {
      slug: "flipster", name: "Flipster", zh: "", code: "YOAKAETH", url: "https://flipster.xyz/signin?referral_code=YOAKAETH",
      color: "#7C3AED", type: "合約",
      desc: "專注永續合約，主打 0 手續費、一鍵反手，數百種合約可交易。",
      guide: {
        updated: "2026-11",
        summary: "Flipster 成立於 2021 年，團隊來自量化交易公司，專注永續合約交易。主打「零手續費」與一鍵反向持倉（Instant Flip），可交易數百種主流幣、山寨幣與 Meme 幣的永續合約。",
        facts: [["成立", "2021 年"], ["主打", "永續合約、0 手續費"], ["獲利模式", "買賣價差（Spread）"], ["槓桿", "最高約 100 倍"], ["邀請碼", "YOAKAETH"]],
        sections: [
          { title: "Flipster 適合誰？", html: `<ul><li>✅ 已經懂合約、想要介面直覺的人</li><li>✅ 交易頻繁、在意手續費的人</li><li>⚠️ <strong>完全沒碰過合約的新手先別來</strong>，先讀<a href="#/c/07">槓桿與風險管理</a></li></ul>` },
          { title: "「零手續費」要看懂", html: `<p>Flipster 不靠手續費賺錢，而是靠<strong>買賣價差</strong>。也就是說，你的交易成本藏在開倉和平倉的價差裡，「0 手續費」不等於「0 成本」。下單時看清楚買價和賣價。</p>` },
          { title: "Step 1：用邀請連結註冊", html: `<ol><li>點本頁「立即註冊」（邀請碼 <code>YOAKAETH</code> 自動帶入）。</li><li>點「Get started」，輸入 Email、設定密碼。</li><li>收驗證信完成註冊。</li></ol>` },
          { title: "Step 2：KYC", html: `<p>到「帳戶驗證」選擇身分證驗證，上傳證件正反面並完成人臉掃描（由第三方 Sumsub 處理）。新戶獎勵通常要求完成較高等級的 KYC 與入金、交易量任務。</p>` },
          { title: "Step 3：入金", html: `<p>從台灣交易所或其他平台提領 USDT 過來，網路選 TRC20 通常 1–3 分鐘到帳。入金後劃轉到交易帳戶即可開始。</p>` },
          { title: "Step 4：開第一筆合約", html: `<ol><li>選幣種，決定做多或做空。</li><li><strong>槓桿先開 2–3 倍</strong>，選逐倉。</li><li>一定要設定止損。</li><li>需要反向時可用一鍵反手（Flip），但不要因為情緒來回追單。</li></ol>` },
          { title: "注意事項", html: `<ul><li>高槓桿是 Flipster 的賣點，也是新手爆倉的主因。</li><li>平台的合規狀態依地區不同，使用前請確認。</li><li>交易競賽、獎勵活動都有條件，看清楚再參加。</li></ul>` }
        ]
      }
    },
    {
      slug: "pionex", name: "Pionex", zh: "派網", code: "VmLjUbps", url: "https://www.pionex.com/sign/ref/VmLjUbps",
      color: "#F97316", type: "量化",
      desc: "內建 16 種以上免費交易機器人，網格、定投一鍵開，適合想自動化的新手。",
      guide: {
        updated: "2026-11",
        summary: "Pionex 派網是以「免費交易機器人」聞名的交易所，內建 16 種以上機器人，最熱門的是網格交易和定期定額（DCA），不用寫程式就能讓策略 24 小時自動執行，手續費也很低。",
        facts: [["主打", "免費量化機器人"], ["機器人", "16 種以上（網格、定投、馬丁…）"], ["現貨費率", "約 0.05%"], ["適合行情", "網格適合震盪盤"], ["邀請碼", "VmLjUbps"]],
        sections: [
          { title: "派網適合誰？", html: `<ul><li>✅ 沒時間盯盤、想要紀律化交易的人</li><li>✅ 想長期定投 BTC／ETH 的人</li><li>✅ 想學網格交易的新手</li></ul>` },
          { title: "Step 1：用邀請連結註冊", html: `<ol><li>點本頁「立即註冊」（邀請碼 <code>VmLjUbps</code>）。</li><li>輸入 Email 或手機、設定密碼並完成驗證。</li><li>邀請碼的補填時間很短，<strong>務必在註冊時就填好</strong>。</li></ol>` },
          { title: "Step 2：KYC 與安全", html: `<p>完成實名認證才能領取完整新戶獎勵與提高額度。之後設定驗證器 2FA 與提現白名單。</p>` },
          { title: "Step 3：入金", html: `<p>派網曾開放超商用台幣買幣，但該功能已停止公測，台幣管道請以官網現況為準。目前最穩定的方式是：在台灣交易所買 USDT → 派網「充值」→ 選 USDT 與 TRC20 → 提領過來。</p>` },
          { title: "Step 4：開第一個網格機器人", html: `<ol><li>「交易機器人」→「現貨網格」。</li><li>選幣對（新手建議 BTC/USDT）。</li><li>設定<strong>價格上限、下限、網格數量</strong>；不確定可以先用「AI 推薦參數」。</li><li>投入小額資金啟動，觀察一兩週。</li></ol><p>網格在區間內自動低買高賣，<strong>適合震盪盤</strong>；單邊大跌跌破下限時會滿手套牢，單邊大漲突破上限則會提早賣光。</p>` },
          { title: "定投機器人（DCA）", html: `<p>設定固定金額與週期（每天／每週）自動買入，適合長期看好 BTC、ETH，又不想猜高低點的人。</p>` },
          { title: "手續費", html: `<p>現貨約 0.05%，機器人本身免費，邀請碼另有折扣。以官網為準。</p>` },
          { title: "注意事項", html: `<ul><li>機器人只是執行策略的工具，不保證獲利。</li><li>合約網格、槓桿網格有爆倉風險，新手先用現貨網格。</li><li>新戶活動有期限，參加前看清楚條件。</li></ul>` }
        ]
      }
    }
  ],

  /* 社群連結 */
  socials: [
    { name: "LINE 社群", note: "30s 實現 FIRE｜投資交流", url: "https://line.me/ti/g2/evhbWubtxaAFX_WOnp4XFlueN5ggXgatH91vcw", icon: "💬" },
    { name: "Twitter / X", note: "撸🐑｜項目分享🚀", url: "https://twitter.com/yoaka__", icon: "𝕏" },
    { name: "Instagram", note: "生活｜旅遊🍴", url: "https://www.instagram.com/yoaka_/", icon: "📸" },
    { name: "Medium", note: "教程｜投研📈", url: "https://medium.com/@yoaka", icon: "✍️" },
    { name: "Telegram", note: "私訊聯絡", url: "https://t.me/yoakalin", icon: "✈️" },
    { name: "Discord", note: "社群伺服器", url: "https://discord.gg/blocto", icon: "🎮" },
    { name: "Portfolio", note: "Yoaka's Portfolio", url: "https://www.notion.so/yoaka/Shu-Chi-Lin-eef37ae2f0c94388948002f92a39ed3d", icon: "🗂️" },
    { name: "Website", note: "3D｜服裝｜設計🌷", url: "https://underinsight.wixsite.com/2017", icon: "🌷" },
    { name: "OpenSea", note: "NFT Collection🌊", url: "https://opensea.io/under_insight", icon: "🌊" },
    { name: "Email", note: "qq0223lin@gmail.com", url: "mailto:qq0223lin@gmail.com", icon: "📮" }
  ],

  /* 幣圈黑話：[詞, 解釋, 分類] */
  slang: [
    ["GM / GN", "Good Morning / Good Night，Web3 社群的日常問候，也是本站名字的由來 ☀️", "術語"],
    ["DYOR", "Do Your Own Research，自己研究、自己查證，不把別人的意見當結論。", "術語"],
    ["FOMO", "害怕錯過，看到暴漲就衝動追高。", "術語"],
    ["FUD", "恐懼、不確定、懷疑。但不能拿這個詞否定所有質疑。", "術語"],
    ["HODL", "長期持有不賣，源自一次打錯字的 Hold。", "術語"],
    ["ATH / ATL", "歷史最高價／歷史最低價。", "術語"],
    ["Bull / Bear", "看漲／看跌，也指牛市／熊市。", "術語"],
    ["Whale 巨鯨", "持有大量資金、能影響價格的地址。", "術語"],
    ["Alpha", "還沒被大家知道的有價值資訊。", "術語"],
    ["TVL", "鎖倉總價值，衡量 DeFi 協議規模的指標。", "術語"],
    ["Gas", "鏈上交易的手續費。", "術語"],
    ["Airdrop 空投", "項目方免費發代幣給符合條件的用戶。", "術語"],
    ["撸毛", "參與項目互動、任務，期待拿到空投。", "術語"],
    ["Rug / 跑路", "項目方捲款或撤走流動性。", "術語"],
    ["Degen", "高風險愛好者，什麼新東西都敢衝。", "術語"],
    ["CT", "Crypto Twitter，幣圈推特圈。", "術語"],
    ["WAGMI / NGMI", "我們都會成功／這樣下去不會成功。", "術語"],
    ["LFG", "Let's F***ing Go，衝啊！", "術語"],
    ["長期看好", "短期先不要問我。", "玩梗"],
    ["健康回調", "跌了，但我想講得好聽一點。", "玩梗"],
    ["鑽石手", "抱得住……也可能只是賣不下手。", "玩梗"],
    ["紙手", "剛賣就漲、剛買就慌。", "玩梗"],
    ["繳學費", "錢變少了，希望經驗有變多。", "玩梗"],
    ["格局打開", "先忍住不要賣。", "玩梗"],
    ["價值投資", "本來想做短線，被套之後改成長期。", "玩梗"],
    ["最後一跌", "上次也是這樣說的。", "玩梗"],
    ["韭菜", "被收割的散戶。割韭菜＝收割散戶。", "玩梗"],
    ["站崗", "買在山頂，只能等回本。", "玩梗"],
    ["梭哈", "全部押上。不推薦，真的不推薦。", "玩梗"],
    ["土狗", "市值超小、風險超高的新幣。", "玩梗"],
    ["Ape in", "像猿猴一樣不研究就衝進去。", "玩梗"],
    ["抄底抄在半山腰", "以為是底，其實下面還有地下室。", "玩梗"]
  ],

  /* 工具箱 */
  tools: [
    { group: "行情與基本資料", items: [
      ["CoinGecko", "https://www.coingecko.com", "幣價、市值、供應量"],
      ["CoinMarketCap", "https://coinmarketcap.com", "行情、排行、交易所數據"],
      ["TradingView", "https://www.tradingview.com", "看 K 線、畫圖分析"],
      ["CoinGlass", "https://www.coinglass.com", "合約持倉、資金費率、爆倉"]
    ]},
    { group: "區塊瀏覽器", items: [
      ["Etherscan", "https://etherscan.io", "以太坊交易、地址、合約"],
      ["BscScan", "https://bscscan.com", "BNB Chain 交易查詢"],
      ["Solscan", "https://solscan.io", "Solana 交易查詢"],
      ["Tronscan", "https://tronscan.org", "TRON（TRC-20 USDT）查詢"],
      ["Arbiscan", "https://arbiscan.io", "Arbitrum 交易查詢"]
    ]},
    { group: "鏈上數據與研究", items: [
      ["DEX Screener", "https://dexscreener.com", "鏈上交易對、池子、新幣"],
      ["DefiLlama", "https://defillama.com", "TVL、協議收入、費用"],
      ["DeBank", "https://debank.com", "多鏈資產與 DeFi 部位"],
      ["Arkham", "https://intel.arkm.com", "追蹤巨鯨與機構地址"],
      ["RootData", "https://www.rootdata.com", "融資與投資機構資料"],
      ["Tokenomist", "https://tokenomist.ai", "代幣解鎖時間表"],
      ["Dune", "https://dune.com", "鏈上數據看板"]
    ]},
    { group: "新聞資訊", items: [
      ["動區動趨", "https://www.blocktempo.com", "繁中區塊鏈新聞"],
      ["鏈新聞 ABMedia", "https://abmedia.io", "繁中加密貨幣新聞"],
      ["PANews", "https://www.panewslab.com", "中文快訊與深度文章"]
    ]},
    { group: "安全檢查", items: [
      ["Revoke.cash", "https://revoke.cash", "查授權、撤授權"],
      ["GoPlus", "https://gopluslabs.io", "代幣與授權風險檢測"],
      ["Scam Sniffer", "https://www.scamsniffer.io", "釣魚網站偵測"]
    ]},
    { group: "撸毛任務", items: [
      ["Galxe", "https://galxe.com", "項目任務與憑證"],
      ["Zealy", "https://zealy.io", "社群任務平台"],
      ["Layer3", "https://layer3.xyz", "鏈上互動任務"]
    ]},
    { group: "學習資源", items: [
      ["Binance Academy", "https://academy.binance.com/zt", "繁中加密入門百科"],
      ["ethereum.org", "https://ethereum.org/zh-tw/security/", "以太坊官方安全指南"],
      ["Bitcoin 白皮書", "https://bitcoin.org/bitcoin.pdf", "中本聰原文"]
    ]}
  ]
});
