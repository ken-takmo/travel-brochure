const regions = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];
const companions = ["ひとり", "友人", "恋人", "家族"];

const options = [];
for (let i = 0; i < 47; i++) {
  options.push({ value: i, label: regions[i] });
}

const companionOption = (data) => {
  const companionOptions = [];
  if (data) {
    for (let i = 0; i < 4; i++) {
      if (i == data) {
        companionOptions.push(
          <option key={i} value={i} defaultValue>
            {companions[i]}
          </option>
        );
      } else {
        companionOptions.push(
          <option key={i} value={i}>
            {companions[i]}
          </option>
        );
      }
    }
  } else {
    for (let i = 0; i < 4; i++) {
      companionOptions.push(
        <option key={i} value={i}>
          {companions[i]}
        </option>
      );
    }
  }
  return companionOptions;
};

const regionOption = (deta) => {
  const regionOptions = [];
  for (let i = 0; i < 47; i++) {
    if (i == deta) {
      regionOptions.push(
        <option key={i} value={i} defaultValue>
          {regions[i]}
        </option>
      );
    } else {
      regionOptions.push(
        <option key={i} value={i}>
          {regions[i]}
        </option>
      );
    }
  }
  return regionOptions;
};

export { regions, companions, options, companionOption, regionOption };
