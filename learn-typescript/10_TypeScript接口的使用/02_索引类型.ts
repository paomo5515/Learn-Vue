// 通过 interface 来定义索引类型
interface IndexLanguahe {
  [index: number]: string
}

const frontLanguage: IndexLanguahe = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue",
  // 4: 127 报错
}


interface ILanguageYear {
  [name: string]: number
}
const languageTear: ILanguageYear = {
  "C": 1972,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}
