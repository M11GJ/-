import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

export default function PolicySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">情報科学部情報科学科 3つのポリシー</h2>
      <p>
        情報科学部は、学部教育の質と方向性を確保・公開するため、ディプロマ・ポリシー、カリキュラム・ポリシー、アドミッション・ポリシーの3つを制定しています。
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="admission">
          <AccordionTrigger className="text-lg font-semibold">
            入学者受入の方針 (アドミッション・ポリシー)
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  情報科学部のカリキュラムの実施に際し、以下のアドミッション・ポリシーを満たす学生を広く募集し、受け入れます。
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>
                    <span className="font-semibold text-red-700">AP1</span>
                    社会の諸問題に対して興味を持ち、情報科学の学問領域を学修するために必要な基礎学力や能力を身に付けている。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">AP2</span>
                    デジタル社会の諸問題を自らの問題としてとらえることができ、課題解決の道筋やアイデアを自分の言葉で表現できる。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">AP3</span>
                    自ら考えて行動するとともに、文化的・社会的基盤を異にする他者に対しても関心を持ち、他者と協働して課題解決に取り組む姿勢を持っている。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">AP4</span>{' '}
                    グローバルな視野をもって地域を見つめ、地域の持続的な発展に貢献しようとする強い意欲がある。
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="curriculum">
          <AccordionTrigger className="text-lg font-semibold">
            教育課程編成・実施の方針 (カリキュラム・ポリシー)
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  ディプロマ・ポリシーを満たす人材を輩出するために、情報科学部は以下のカリキュラム・ポリシーに従って教育課程を編成し教育を実施していきます。
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>
                    <span className="font-semibold text-red-700">CP1</span>
                    情報科学の基本的な知識・技能を学ぶ概論科目や、プログラミング基礎科目、数学系科目を情報科学基礎領域の1~2年次に配置する。データサイエンスプログラムにおいては、データ分析の基礎となる科目を難易度に応じて年次進行となるように配置する。情報エンジニアリングプログラムにおいては、ICTにおける基礎技術、プログラミングのための理論と実践に関する科目を年次進行で配置する。ビジネスアナリティクスプログラムにおいては、ビジネスの基礎となる科目、データ取得及び分析に関わる科目、地域社会や企業の抱える諸問題を解決するための科目を年次進行で配置する。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">CP2</span>
                    基礎領域にはデータ分析と表現・考察に関わる科目を配置する。データサイエンスプログラムには、データを分析する科目やAIに関する科目を配置する。情報エンジニアリングプログラムにはICTの活用を検討する科目を配置する。ビジネスアナリティクスプログラムには、インターネットや金融などの領域においてデータを分析・考察する科目を配置する。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">CP3 PBL</span>
                    型授業やキャリア形成支援授業などにより社会問題への協調的な実践力を育む科目及び専門ゼミを配置する。各プログラムの高年次には社会実装型の科目を配置する。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">CP4</span>
                    総合科目や情報社会系科目により社会的教養や情報技術と人との関わりを教養として身に付け、実践英語により本学部での学びの国際展開力を身に付ける。卒業研究では地域に関連したテーマを研究することにより、地域社会の生活・産業の持続的な発展に貢献できる素地を身に付ける。
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="diploma">
          <AccordionTrigger className="text-lg font-semibold">
            卒業認定・学位授与の方針 (ディプロマ・ポリシー)
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  情報科学部は、定められた年限を在学し、所定の単位数を取得し、総合科目及び3つのプログラムでの学修を通して、以下を修得したものに学士(情報科学)の学位を授与します。
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>
                    <span className="font-semibold text-red-700">
                      DP1 【知識及び技能】
                    </span>
                    情報科学の学問内容及び分析手法を深く理解し、地域や社会及び企業の抱える諸問題を解決することができる。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">
                      DP2【思考力・判断力・表現力等】
                    </span>
                    社会の諸問題に対して、情報科学の方法論を用いて分析・考察し、データ及び結果を視覚化して表現することができる。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">
                      DP3【主体性・多様性・協調性】
                    </span>
                    社会の諸問題に主体的かつ積極的に取り組み、得られた成果を社会生活に効果的・協調的に還元することができる。
                  </li>
                  <li>
                    <span className="font-semibold text-red-700">
                      DP4【地域貢献】
                    </span>
                    グローバルな視野をもって地域を見つめ、豊かな教養を生かした、地域の持続的な発展に貢献できる。
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education">
          <AccordionTrigger className="text-lg font-semibold">
            教育方針と評価の方針
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <ul className="ml-6 space-y-2 list-disc">
                  <li>
                    主に知識の修得、理解を目的とした科目は、講義により実施する。
                  </li>
                  <li>
                    主に修得した知識を模擬的・総合的に体験し技術を身につけることを目的とした科目は、演習により実施する。
                  </li>
                  <li>
                    アクティブ・ラーニングや ICT
                    システムを導入し、学生が能動的に学べる教育方法を実践する。
                  </li>
                  <li>
                    履修者数の上限を設定し、必要に応じて少人数グループで授業を実施する。
                  </li>
                  <li>
                    成績評価は単位取得者の成績分布を定め、GPA制を厳格に運用する。
                  </li>
                  <li>
                    学修成果の評価については、公平性と透明性を確保するために、達成すべき質的基準をシラバスに定め、筆記試験・実技試験・レポート・授業貢献度等から多面的・総合的に評価を行う。
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
