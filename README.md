# GM Web3｜Yoaka 的幣圈新手教學

純靜態網站（HTML + CSS + JS），不需要任何建置工具。

## 內容
- 16 章 Web3 新手教學（觀念、一二級市場、買幣、交易所、現貨、合約、錢包、防詐、鏈上操作、項目研究、玩法地圖、QA 與計算機…）
- 交易所邀請碼導航（MEXC 置頂），每家都有「立即註冊」與「教學文章」兩個按鈕
- 7 篇交易所教學：MEXC、Binance、OKX、Bitget、Backpack、Flipster、Pionex
- 幣圈黑話翻譯機、Web3 工具箱、關於我與所有社群連結
- 全站搜尋、深淺色模式、手機版選單

## 修改內容
- 個人資訊、邀請碼、交易所教學、社群連結、黑話、工具：`js/data.js`（交易所陣列順序＝網站顯示順序）
- 教學章節：`js/chapters.js`

## 本機預覽
```bash
python3 -m http.server 8000
# 打開 http://localhost:8000
```

## 部署到 GitHub Pages
Repo → Settings → Pages → Source 選 `Deploy from a branch`，Branch 選要發布的分支與 `/ (root)`，存檔後幾分鐘即可上線。
