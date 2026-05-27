export const animeList = [
  {
    id: "star-rail-traveler",
    title: "星轨旅人",
    meta: "更新至 08 话 · 奇幻 / 冒险 · 9.6",
    tag: "本周热播",
    progress: "第 08 话",
    score: "9.6",
    genres: ["奇幻", "冒险", "治愈"],
    year: "2026",
    director: "白石遥",
    studio: "Aurora Studio",
    cast: ["林原夏", "川岛澪", "沈知遥", "陆明哲"],
    synopsis:
      "少女列车员与失忆的星术师穿越漂浮群岛，在每一站寻找被遗忘的夏天。旅途中，他们逐渐发现星轨列车并不是交通工具，而是一份被封存的古老约定。",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=82",
    banner:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=85",
    episodes: 12,
  },
  {
    id: "twilight-magic-club",
    title: "薄暮魔法社",
    meta: "更新至 11 话 · 校园 / 魔法 · 9.4",
    tag: "今日上新",
    progress: "第 11 话",
    score: "9.4",
    genres: ["校园", "魔法", "轻喜剧"],
    year: "2026",
    director: "森田光",
    studio: "Paper Moon",
    cast: ["苏千寻", "早见绫", "陈亦舟", "北川晴"],
    synopsis:
      "放学后的旧礼堂亮起蓝色灯火，四名新人魔法师开始处理城市里的奇妙委托。每一次委托都连接着一段青春烦恼，也让社团成员更靠近彼此。",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=82",
    banner:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1600&q=85",
    episodes: 12,
  },
  {
    id: "mechanical-heartbeat",
    title: "机械心跳",
    meta: "更新至 06 话 · 科幻 / 热血 · 9.1",
    tag: "高燃连载",
    progress: "第 06 话",
    score: "9.1",
    genres: ["科幻", "机甲", "热血"],
    year: "2026",
    director: "韩野",
    studio: "Iron Frame",
    cast: ["叶承", "山崎凛", "孟秋", "顾远川"],
    synopsis:
      "废墟机甲赛场重新开幕，少年驾驶员要用一颗旧引擎挑战最强联盟。速度、策略和信任在每一次撞击中被重新校准。",
    image:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=900&q=82",
    banner:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=1600&q=85",
    episodes: 10,
  },
  {
    id: "seaside-store",
    title: "海边便利店",
    meta: "全 12 话 · 治愈 / 日常 · 9.7",
    tag: "治愈日常",
    progress: "全 12 话",
    score: "9.7",
    genres: ["治愈", "日常", "青春"],
    year: "2025",
    director: "青木南",
    studio: "Harbor Light",
    cast: ["许若晴", "竹内真", "周晚", "铃木遥"],
    synopsis:
      "小镇海岸边的便利店每天都会迎来不同的客人。少年店员用热便当、旧收音机和一点点笨拙善意，修补着大家的夏天。",
    image:
      "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?auto=format&fit=crop&w=900&q=82",
    banner:
      "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?auto=format&fit=crop&w=1600&q=85",
    episodes: 12,
  },
  {
    id: "moon-shadow-detectives",
    title: "月影侦探团",
    meta: "更新至 03 话 · 悬疑 / 推理 · 8.9",
    tag: "悬疑推理",
    progress: "第 03 话",
    score: "8.9",
    genres: ["悬疑", "推理", "都市"],
    year: "2026",
    director: "梁清弦",
    studio: "Night Case",
    cast: ["秦栀", "神谷悠", "李斯年", "唐绘"],
    synopsis:
      "午夜之后，城市旧区会出现只有孩子能看见的月影线索。侦探团追踪每个谜题，也逐步触碰到十年前失踪案的真相。",
    image:
      "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=900&q=82",
    banner:
      "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=1600&q=85",
    episodes: 12,
  },
];

export const heroSlides = animeList.slice(0, 3).map((anime) => ({
  id: anime.id,
  title: anime.title,
  meta: anime.meta,
  desc: anime.synopsis,
  label: anime.tag,
  image: anime.banner,
}));

export const rankings = ["星轨旅人", "薄暮魔法社", "机械心跳", "月影侦探团", "海边便利店"];

export const demoVideoSource =
  "https://v16.toutiao50.com/a8d610fa01b1fd869612123d388b11b5/6a17cb34/video/tos/alisg/tos-alisg-v-90231e-sg/ocelTmgGUCzZ2gsLIeE5TIIPpDbNeGUAdrIKsL/";
