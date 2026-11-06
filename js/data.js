/* GM Web3 — 網站資料
 * 想改個人資訊、邀請碼或教學內容，只要改這個檔案即可。
 */
window.SITE = {
  profile: {
    name: "Yoaka",
    title: "Yoakaの人生實驗室",
    tagline: "撸毛 × 投研 × 設計｜用白話文陪你走進 Web3",
    avatar: "https://ugc.production.linktr.ee/7655bfe8-a15b-40a3-a370-99db324a24db_746B1862-1F73-400F-A2CA-F18037BEC2AE.png",
    email: "qq0223lin@gmail.com",
    collabNote: "合作邀約請來信",
    linktree: "https://linktr.ee/yoaka"
  },

  /* 交易所邀請碼：code = 顯示給讀者複製的邀請碼；url = 邀請連結 */
  exchanges: [
    { name: "Binance", zh: "幣安", code: "DXzKnO", url: "https://www.binance.com/join?ref=XI9YZALA", color: "#F0B90B", type: "CEX", desc: "全球交易量最大的交易所之一，幣種多、流動性深，現貨與合約都很完整。" },
    { name: "OKX", zh: "歐易", code: "62626519", url: "https://www.okx.com/join/62626519", color: "#9ca3af", type: "CEX", desc: "交易所 + Web3 錢包雙棲，鏈上撸毛、DEX 兌換與跨鏈都能在同一個 App 完成。" },
    { name: "Bitget", zh: "", code: "cnkx6399", url: "https://share.bitget.com/u/PDVNM481", color: "#00F0FF", type: "CEX", desc: "以跟單交易聞名，合約產品豐富，新幣上架速度快。" },
    { name: "MEXC", zh: "抹茶", code: "yoaka777", url: "https://promote.mexc.com/a/5RmvaOMx", color: "#2F7BFF", type: "CEX", desc: "上新幣非常快、小幣種齊全，現貨手續費低，適合追早期項目。" },
    { name: "Backpack", zh: "", code: "yoaka", url: "https://backpack.exchange/refer/yoaka", color: "#E33E3F", type: "CEX", desc: "Solana 生態出身的合規交易所，介面簡潔，常有積分活動。" },
    { name: "Flipster", zh: "", code: "YOAKAETH", url: "https://flipster.xyz/signin?referral_code=YOAKAETH", color: "#7C3AED", type: "CEX", desc: "主打永續合約的交易平台，介面直覺、上手容易。" },
    { name: "Pionex", zh: "派網", code: "VmLjUbps", url: "https://www.pionex.com/sign/ref/VmLjUbps", color: "#F97316", type: "量化", desc: "內建網格、定投等免費量化機器人，適合想自動化交易的新手。" }
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

  /* 教學章節 */
  chapters: [
    {
      id: "01", emoji: "🌏", title: "Web3 是什麼？", intro: "區塊鏈、加密貨幣、錢包、交易所一次搞懂",
      sections: [
        { title: "一句話版本", html: `<p><strong>Web3 是「資產與身分由你自己掌握」的網路。</strong></p><p>Web2 時代，你的帳號、照片、餘額都存在平台的伺服器裡；Web3 則把這些紀錄寫在公開的區塊鏈上，只要你持有錢包私鑰，就能直接證明「這是我的」。</p>` },
        { title: "區塊鏈：一本全網共同記錄的帳本", html: `<p>想像一本帳本同時有上萬份副本，散落在全球不同電腦裡。每筆新交易要經過多數節點確認才能寫入，而一旦寫入，想偷偷改掉就得同時改掉大部分副本——幾乎不可能。</p><p>注意：鏈上「紀錄難以竄改」不代表「內容一定真實」。項目方寫在白皮書上的承諾，區塊鏈並不會幫你驗證。</p>` },
        { title: "幣（Coin）與代幣（Token）", html: `<ul><li><strong>幣</strong>：一條鏈的原生資產，例如比特幣鏈上的 BTC、以太坊上的 ETH、Solana 上的 SOL，通常用來支付手續費（Gas）。</li><li><strong>代幣</strong>：透過智能合約「發行在別人鏈上」的資產，例如以太坊上的 USDT、UNI。</li></ul><p>同一個代幣可能存在於多條鏈上，轉帳時一定要確認<strong>鏈別</strong>一致。</p>` },
        { title: "智能合約與穩定幣", html: `<p><strong>智能合約</strong>是部署在鏈上的程式：條件達成就自動執行，例如「存入 A 幣，自動換出 B 幣」。DeFi、NFT、鏈遊都是建立在合約之上。</p><p><strong>穩定幣</strong>是價格錨定法幣（多為美元）的代幣，常見有 USDT、USDC。幣圈裡大家多半用穩定幣當「現金」來計價與進出場。</p>` },
        { title: "比特幣從哪裡來？", html: `<p>2008 年，化名「中本聰」的作者發表比特幣白皮書，提出不需要銀行也能點對點轉帳的電子現金系統；2009 年 1 月比特幣網路正式上線。BTC 總量上限約 2,100 萬枚，依規則逐步發行——稀缺，但不代表只漲不跌。</p><p>📄 白皮書原文可在官方網站 <a class="ext" href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener">bitcoin.org</a> 閱讀。</p>` },
        { title: "幣價為什麼會漲跌？", html: `<p>價格由買賣雙方共同決定。影響因素包括：總體經濟與利率、市場情緒、資金流入流出、代幣解鎖拋售、項目基本面、交易所上架／下架消息，以及監管政策。</p><p>新手最該記住的是：<strong>加密貨幣波動極大，單日 ±20% 並不罕見</strong>，只投入你輸得起的資金。</p>` }
      ]
    },
    {
      id: "02", emoji: "📖", title: "買幣前的必修名詞", intro: "市值、FDV、流動性、滑點、手續費",
      sections: [
        { title: "交易對", html: `<p>「BTC/USDT」代表用 USDT 買賣 BTC。斜線前面是你要買的資產，後面是你用來付款的計價資產。</p>` },
        { title: "市值、FDV 與流通量", html: `<ul><li><strong>流通市值</strong> = 價格 × 目前流通量。</li><li><strong>FDV（完全稀釋估值）</strong> = 價格 × 最大供應量，代表「所有幣都放出來後」的估值。</li></ul><p>如果 FDV 遠大於流通市值，表示未來還有大量代幣會解鎖進入市場，可能形成賣壓。</p>` },
        { title: "流動性與成交量", html: `<p>流動性好 = 隨時有人接你的單、價差小。流動性差的小幣，你可能「買得進、賣不掉」，或一賣價格就被砸穿。看 24 小時成交量與掛單深度，可以初步判斷流動性。</p>` },
        { title: "價差、滑點與價格影響", html: `<p><strong>滑點</strong>是你預期的成交價與實際成交價的差距。下單金額越大、市場越淺，滑點越嚴重。在 DEX 兌換時可以設定「滑點容忍度」，但設太高容易被夾子（MEV）吃掉價差。</p>` },
        { title: "手續費與網路費", html: `<ul><li><strong>交易手續費</strong>：交易所向你收的費用，分 Maker（掛單）與 Taker（吃單），掛單通常較便宜。</li><li><strong>提現費</strong>：把幣從交易所提出時收取。</li><li><strong>Gas 費</strong>：在鏈上操作時付給網路的費用，壅塞時會變貴。</li></ul><p>💡 透過<a href="#/exchanges">邀請碼註冊</a>，通常可享有手續費折扣。</p>` },
        { title: "盈虧怎麼算？", html: `<p>報酬率 =（賣出價 − 買入價 − 手續費）÷ 投入成本。記得：虧損 50% 需要上漲 100% 才能回本，所以「先求不虧大錢」比「求翻倍」更重要。</p>` }
      ]
    },
    {
      id: "03", emoji: "🛒", title: "第一次在交易所買幣", intro: "註冊、KYC、入金、買入、提現全流程",
      sections: [
        { title: "第一步：選擇交易所並從官方管道註冊", html: `<p>挑選時看三件事：所在地區是否可用、是否支援你需要的入金方式、平台規模與儲備證明。可參考<a href="#/exchanges">交易所導航</a>，透過官方或邀請連結進入，避免點到假網站。</p>` },
        { title: "第二步：完成 KYC 與安全設定", html: `<ul><li>完成實名認證（KYC），提高出入金額度。</li><li>開啟 <strong>2FA</strong>（建議用 Google Authenticator 等驗證器 App，而非簡訊）。</li><li>設定<strong>防釣魚碼</strong>：官方來信會帶上你設的暗號。</li><li>開啟<strong>提幣白名單</strong>，只允許提到你信任的地址。</li></ul>` },
        { title: "第三步：入金", html: `<p>常見方式：信用卡快捷買幣、銀行轉帳、P2P（C2C）交易，或從其他平台轉入 USDT。</p><p><strong>P2P 注意事項</strong>：只跟高成交率、已認證的商家交易；嚴格按照平台流程付款與放幣，絕不在平台外私下交易；付款備註不要寫「買幣」等字眼以免被銀行風控。</p>` },
        { title: "第四步：小額買入現貨", html: `<p>第一次建議用小金額練習：在「現貨」交易區選 BTC/USDT 或 ETH/USDT，用限價單買入，熟悉介面後再決定是否加碼。</p>` },
        { title: "第五步：賣出與提現", html: `<p>賣出換回 USDT 後，可透過 P2P 賣出換成法幣，或轉回其他平台。提現前務必確認<strong>地址與鏈別</strong>，第一次提現先試一筆小額。</p>` },
        { title: "交易所裡的各種帳戶", html: `<p>多數交易所把資金分成：資金帳戶、現貨帳戶、合約帳戶、理財帳戶等。如果「錢不見了」，先檢查是不是放在不同帳戶裡，需要先「劃轉」才能使用。</p>` }
      ]
    },
    {
      id: "04", emoji: "🏦", title: "交易所導航與挑選", intro: "CEX 與 DEX 差在哪？我該選哪一家？",
      sections: [
        { title: "CEX 與 DEX", html: `<ul><li><strong>CEX（中心化交易所）</strong>：如幣安、OKX。像券商一樣幫你保管資產，有客服、支援法幣，但你要信任平台。</li><li><strong>DEX（去中心化交易所）</strong>：如 Uniswap、Jupiter。直接用錢包和智能合約交易，資產自己保管，但要自己承擔操作風險。</li></ul>` },
        { title: "邀請碼導航", html: `<p>以下是我自己在用的交易所，透過邀請連結註冊可享手續費折扣（依各平台當期活動為準）：</p><div data-embed="exchanges"></div>` },
        { title: "怎麼選？", html: `<ul><li><strong>剛入門</strong>：選大型、幣種主流、介面完整的平台（Binance、OKX）。</li><li><strong>想追新幣</strong>：MEXC、Bitget 上幣速度快。</li><li><strong>想玩鏈上</strong>：OKX 內建 Web3 錢包很方便。</li><li><strong>想自動化交易</strong>：Pionex 的網格與定投機器人。</li></ul><p>建議至少開兩家交易所分散風險，不要把所有資產放在同一個平台。</p>` },
        { title: "儲備證明（PoR）是什麼？", html: `<p>儲備證明是交易所公開「用戶資產有 1:1 足額儲備」的審計資料。它是重要參考，但只代表某個時間點的快照，不代表平台沒有其他負債。</p>` }
      ]
    },
    {
      id: "05", emoji: "📈", title: "現貨與合約入門", intro: "下單方式、K 線、槓桿與風險控制",
      sections: [
        { title: "訂單類型", html: `<ul><li><strong>市價單</strong>：立刻以當前最佳價格成交，快但可能有滑點。</li><li><strong>限價單</strong>：指定價格，價格到了才成交。</li><li><strong>止損／止盈單</strong>：價格觸發時自動賣出，幫你守住紀律。</li></ul>` },
        { title: "K 線怎麼看？", html: `<p>一根 K 線包含開盤、收盤、最高、最低四個價格。實體代表開收盤區間，上下影線代表期間的最高與最低。先學會看支撐、壓力與趨勢，再碰指標。</p>` },
        { title: "槓桿與合約", html: `<p>合約讓你用少量保證金控制較大部位，可以<strong>做多</strong>（看漲）也能<strong>做空</strong>（看跌）。10 倍槓桿下，價格反向 10% 你的保證金就可能歸零。</p>` },
        { title: "全倉、逐倉與強平", html: `<ul><li><strong>逐倉</strong>：每個倉位獨立計算保證金，最多虧掉該倉位的保證金。</li><li><strong>全倉</strong>：整個帳戶餘額共用，一個倉位爆掉可能拖垮全部。</li><li><strong>強平（爆倉）</strong>：保證金不足時被系統強制平倉。</li></ul><p>新手建議：先用逐倉、低槓桿（≤3 倍），並且一定要設止損。</p>` },
        { title: "資金費率", html: `<p>永續合約沒有到期日，靠「資金費率」讓價格貼近現貨。費率為正時，多方付費給空方；為負時反之。持倉越久，這筆成本越不能忽略。</p>` },
        { title: "倉位管理：先想好最多虧多少", html: `<p>經典做法是「單筆最多虧總資金的 1–2%」。先決定止損位置，再反推可以開多大的倉位，而不是先開倉再祈禱。</p>` }
      ]
    },
    {
      id: "06", emoji: "👛", title: "錢包、助記詞與冷錢包", intro: "幣放在哪裡？誰握有鑰匙？",
      sections: [
        { title: "錢包其實是一把鑰匙", html: `<p>錢包本身不存放幣，幣都在鏈上；錢包保管的是能動用這些幣的<strong>私鑰</strong>。<em>Not your keys, not your coins.</em></p>` },
        { title: "地址、私鑰、助記詞", html: `<ul><li><strong>地址</strong>：像銀行帳號，可以公開給別人轉帳給你。</li><li><strong>私鑰</strong>：像金庫鑰匙，任何人拿到就能轉走你的資產。</li><li><strong>助記詞</strong>：12 或 24 個英文單字，是私鑰的備份，可還原整個錢包。</li></ul><p>⚠️ 助記詞請手抄在紙上、離線保存；<strong>絕不拍照、截圖、存雲端或傳給任何人</strong>（包含自稱客服的人）。</p>` },
        { title: "熱錢包 vs 冷錢包", html: `<ul><li><strong>熱錢包</strong>：手機或瀏覽器擴充錢包（MetaMask、OKX Wallet、Phantom），方便但連網。</li><li><strong>冷錢包</strong>：硬體錢包（Ledger、Trezor 等），私鑰不連網，適合長期大額存放。</li></ul>` },
        { title: "我的分倉建議", html: `<ul><li><strong>交易所</strong>：放要交易的資金。</li><li><strong>熱錢包 A</strong>：日常鏈上互動、撸毛用，只放小額。</li><li><strong>冷錢包</strong>：長期持有的主要資產，不連任何不明網站。</li></ul><p>把「常用」與「存錢」分開，即使熱錢包出事，損失也有限。</p>` }
      ]
    },
    {
      id: "07", emoji: "🛡️", title: "安全與防詐指南", intro: "假網站、授權陷阱、常見詐騙手法",
      sections: [
        { title: "假官網與假 App", html: `<p>搜尋引擎廣告、社群私訊裡的連結都可能是釣魚站。請把官網加入書籤，App 只從官方商店或官網下載；網址多一個字母、換一個子網域都要提高警覺。</p>` },
        { title: "連線、簽名、授權不一樣", html: `<ul><li><strong>連線</strong>：讓網站看見你的地址，風險較低。</li><li><strong>簽名</strong>：證明你是地址主人；但有些簽名（如 Permit）其實等同授權。</li><li><strong>授權（Approve）</strong>：允許合約動用你的代幣——這一步最危險。</li></ul><p>看不懂錢包彈窗內容時，<strong>不要按確認</strong>。</p>` },
        { title: "無限授權與撤銷", html: `<p>很多 DApp 預設請求「無限授權」。授權過的合約若被駭或本身就是惡意合約，你的代幣會被轉走。定期到 <a class="ext" href="https://revoke.cash" target="_blank" rel="noopener">Revoke.cash</a> 檢查並撤銷不用的授權。斷開錢包連線 ≠ 撤銷授權。</p>` },
        { title: "常見詐騙手法", html: `<ul><li>假客服私訊要你提供助記詞或「驗證錢包」。</li><li>保證獲利、帶單喊單、殺豬盤式交友投資。</li><li>空投到你錢包的不明代幣，引導你去網站「領取」。</li><li>地址污染：用跟你常用地址頭尾相同的假地址轉小額給你，等你從紀錄複製錯地址。</li></ul><p>記住：<strong>天上不會掉餡餅，著急的通常都是騙子。</strong></p>` },
        { title: "帳號安全檢查清單", html: `<ul><li>☐ 每個交易所使用不同的強密碼</li><li>☐ 開啟驗證器 2FA 與防釣魚碼</li><li>☐ 開啟提幣白名單</li><li>☐ 助記詞離線手抄保存</li><li>☐ 定期撤銷不用的授權</li></ul>` }
      ]
    },
    {
      id: "08", emoji: "🔗", title: "第一次鏈上操作", intro: "收幣、轉帳、Gas、兌換與跨鏈",
      sections: [
        { title: "收幣與轉帳", html: `<p>收款時把地址給對方，並告訴對方<strong>鏈別</strong>（例如 USDT 走 TRC20 還是 ERC20）。轉帳時三件事一定要確認：地址、鏈別、金額。第一次轉帳先試小額。</p>` },
        { title: "Gas 費要準備什麼幣？", html: `<p>在哪條鏈上操作，就要有那條鏈的原生幣當手續費：以太坊要 ETH、Solana 要 SOL、BNB Chain 要 BNB。錢包裡只有 USDT、沒有 Gas 幣，是新手最常卡住的原因。</p>` },
        { title: "在 DEX 兌換", html: `<p>連接錢包 → 選擇要換出與換入的代幣 → 檢查價格影響與滑點 → 授權 → 確認交易。代幣請透過官方或區塊瀏覽器確認<strong>合約地址</strong>，同名假幣非常多。</p>` },
        { title: "跨鏈橋", html: `<p>跨鏈橋把資產從 A 鏈搬到 B 鏈。優先使用官方橋或主流聚合器；跨鏈橋是駭客攻擊的熱門目標，不要把大額資產長時間放在橋上。</p>` }
      ]
    },
    {
      id: "09", emoji: "🐑", title: "撸毛與空投入門", intro: "用時間和互動換取早期項目的獎勵",
      sections: [
        { title: "什麼是撸毛？", html: `<p>「撸羊毛」指的是在項目早期參與測試網、互動、任務，期待未來項目發幣時獲得<strong>空投</strong>獎勵。成本主要是時間與 Gas，但沒有任何空投是保證的。</p>` },
        { title: "常見的參與方式", html: `<ul><li><strong>測試網互動</strong>：領測試幣、試用產品功能。</li><li><strong>主網互動</strong>：實際使用 DEX、借貸、跨鏈等功能。</li><li><strong>積分活動</strong>：交易所或項目的 Points 計畫。</li><li><strong>社群任務</strong>：Galxe、Zealy 等平台上的任務。</li></ul>` },
        { title: "撸毛防坑守則", html: `<ul><li>用專門的撸毛錢包，不放主要資產。</li><li>只從項目官方 X／Discord 取得連結。</li><li>要你先付錢或給助記詞的「空投」，一律是詐騙。</li><li>記錄互動過的項目與成本，避免花的 Gas 比拿到的還多。</li></ul><p>我平常會在 <a class="ext" href="https://twitter.com/yoaka__" target="_blank" rel="noopener">Twitter</a> 分享撸毛項目，歡迎追蹤。</p>` }
      ]
    },
    {
      id: "10", emoji: "🔍", title: "如何研究一個項目？", intro: "看用途、代幣經濟、數據與團隊",
      sections: [
        { title: "五個基本問題", html: `<ol><li>它解決什麼問題？真的有人在用嗎？</li><li>代幣有什麼用途？不持有代幣能不能用產品？</li><li>誰投資了它？團隊是否公開、有沒有黑歷史？</li><li>代幣怎麼分配？什麼時候解鎖？</li><li>鏈上數據（TVL、用戶數、收入）是否真實成長？</li></ol>` },
        { title: "代幣經濟（Tokenomics）", html: `<p>重點看：總量、流通比例、團隊與投資人份額、解鎖時間表。大額解鎖前後常常伴隨賣壓。可以用 <a href="#/tools">工具箱</a> 裡的解鎖追蹤工具查詢。</p>` },
        { title: "紅旗警訊", html: `<ul><li>合約未開源、權限集中在單一地址。</li><li>流動性未鎖定，前幾大地址持有極高比例。</li><li>社群只談價格不談產品，或大量機器人帳號。</li><li>承諾固定高報酬。</li></ul>` }
      ]
    },
    {
      id: "11", emoji: "🗺️", title: "Web3 玩法地圖", intro: "DeFi、NFT、Meme、RWA 各是什麼",
      sections: [
        { title: "DeFi 去中心化金融", html: `<p>用智能合約做到借貸、兌換、收益聚合、質押等金融服務。收益越高通常風險越高——合約漏洞、清算、脫鉤都可能發生。</p>` },
        { title: "NFT", html: `<p>獨一無二的鏈上憑證，可代表藝術品、會員資格、遊戲道具。我自己也有在創作，歡迎逛逛我的 <a class="ext" href="https://opensea.io/under_insight" target="_blank" rel="noopener">OpenSea</a>。</p>` },
        { title: "Meme 幣", html: `<p>以迷因、社群文化驅動的代幣，漲跌極端、多數歸零。玩 Meme 請當作娛樂，只用小額、設好停損。</p>` },
        { title: "RWA 與質押", html: `<p><strong>RWA</strong>：把國債、房地產等現實資產代幣化上鏈。<strong>質押</strong>：鎖定代幣協助網路運作並獲得獎勵，流動性質押（LST）則讓你質押後仍能拿到可交易的憑證。</p>` }
      ]
    },
    {
      id: "12", emoji: "🆘", title: "出問題了怎麼辦？", intro: "充值沒到帳、轉錯鏈、錢包被盜",
      sections: [
        { title: "充值／提現沒到帳", html: `<p>先到區塊瀏覽器用交易哈希（TxID）查狀態：若顯示成功但交易所沒入帳，帶著 TxID 聯繫<strong>官方 App 內</strong>的客服；若還在等待，可能是網路壅塞。</p>` },
        { title: "轉錯鏈或漏填 Memo", html: `<p>部分交易所可以申請找回（可能收費），請盡快聯繫官方客服並提供 TxID。轉到自己錢包的錯鏈資產，通常切換到對應網路就能看到。</p>` },
        { title: "錢包被盜的緊急處理", html: `<ol><li>立刻用<strong>新的乾淨錢包</strong>（新助記詞）接收剩餘資產。</li><li>撤銷所有可疑授權。</li><li>檢查電腦與手機是否中毒、換掉被洩漏的密碼。</li><li>保留證據，必要時報警。</li></ol><p>⚠️ 被盜後最常遇到「幫你追回資產」的二次詐騙，千萬別再付錢。</p>` }
      ]
    }
  ],

  /* 幣圈黑話 */
  slang: [
    ["GM / GN", "Good Morning / Good Night，Web3 社群的日常問候，也是本站名字的由來 ☀️"],
    ["WAGMI", "We're All Gonna Make It，我們都會成功的。"],
    ["NGMI", "Not Gonna Make It，這樣下去不會成功。"],
    ["HODL", "死抱不放，長期持有。源自一次打錯字的 Hold。"],
    ["DYOR", "Do Your Own Research，自己做研究，別盲目跟單。"],
    ["FOMO", "害怕錯過，看到暴漲就衝動追高。"],
    ["FUD", "恐懼、不確定、懷疑，散播利空消息的情緒。"],
    ["撸毛 / 撸羊毛", "參與項目互動、任務，期待獲得空投獎勵。"],
    ["韭菜", "被收割的散戶，割韭菜＝收割散戶。"],
    ["梭哈", "全部資金押上，極不推薦。"],
    ["抄底", "在價格下跌後買入，希望買在低點。"],
    ["站崗", "買在高點後被套住，只能等回本。"],
    ["Rug / 跑路", "項目方捲走資金或撤掉流動性。"],
    ["鑽石手 / 紙手", "能扛住波動長期持有 / 一跌就賣。"],
    ["Ape in", "像猿猴一樣不做研究就衝進去。"],
    ["Degen", "高風險愛好者，什麼新奇的都敢玩。"],
    ["巨鯨", "持有大量資金、能影響價格的地址。"],
    ["土狗", "市值很小、風險極高的新幣。"],
    ["Alpha", "尚未廣為人知的有價值資訊。"],
    ["LFG", "Let's F***ing Go，衝啊！"],
    ["Gas", "鏈上交易的手續費。"],
    ["TVL", "鎖倉總價值，衡量 DeFi 協議規模的指標。"],
    ["Airdrop", "空投，項目方免費發放代幣給符合條件的用戶。"],
    ["CT", "Crypto Twitter，幣圈推特圈。"]
  ],

  /* 工具箱 */
  tools: [
    { group: "行情與數據", items: [
      ["CoinGecko", "https://www.coingecko.com", "幣價、市值、交易所數據"],
      ["CoinMarketCap", "https://coinmarketcap.com", "幣價與排行"],
      ["TradingView", "https://www.tradingview.com", "看 K 線、畫圖分析"],
      ["CoinGlass", "https://www.coinglass.com", "合約持倉、資金費率、爆倉數據"]
    ]},
    { group: "鏈上查詢", items: [
      ["Etherscan", "https://etherscan.io", "以太坊區塊瀏覽器"],
      ["Solscan", "https://solscan.io", "Solana 區塊瀏覽器"],
      ["BscScan", "https://bscscan.com", "BNB Chain 區塊瀏覽器"],
      ["DeBank", "https://debank.com", "多鏈資產與 DeFi 部位總覽"],
      ["Arkham", "https://intel.arkm.com", "追蹤巨鯨與機構地址"]
    ]},
    { group: "項目研究", items: [
      ["DefiLlama", "https://defillama.com", "TVL、協議收入、費用"],
      ["RootData", "https://www.rootdata.com", "融資與投資機構資料"],
      ["Tokenomist", "https://tokenomist.ai", "代幣解鎖時間表"],
      ["Dune", "https://dune.com", "社群製作的鏈上數據看板"]
    ]},
    { group: "安全", items: [
      ["Revoke.cash", "https://revoke.cash", "檢查與撤銷代幣授權"],
      ["Scam Sniffer", "https://www.scamsniffer.io", "釣魚網站與詐騙偵測"],
      ["GoPlus", "https://gopluslabs.io", "代幣合約安全檢測"]
    ]},
    { group: "撸毛任務", items: [
      ["Galxe", "https://galxe.com", "項目任務與憑證平台"],
      ["Zealy", "https://zealy.io", "社群任務平台"],
      ["Layer3", "https://layer3.xyz", "鏈上互動任務"]
    ]}
  ]
};
