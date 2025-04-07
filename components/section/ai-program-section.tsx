import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AIProgramSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        数理・データサイエンス・AI教育プログラム認定制度
      </h2>

      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">
            本学は文部科学省から「数理・データサイエンス・AI教育プログラム」リテラシーレベル(2021年度)、応用基礎レベル(2022年度)の認定を受けています。
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="literacy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="literacy">リテラシーレベル</TabsTrigger>
          <TabsTrigger value="applied">応用基礎レベル</TabsTrigger>
        </TabsList>

        <TabsContent value="literacy">
          <Card>
            <CardHeader>
              <CardTitle>
                本教育プログラムを通じて身に付けることができる能力
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                本学の教育理念である「個性の伸長を本旨とする「知・徳・体」一体の教育を行う」、本学のミッションである「地域の持続的発展と価値創造のための「成長エンジン」となる」、およびSociety
                5.0の時代を見据えた我が国におけるAI戦略2019での数理・データサイエンス・AIの修得の目標を鑑み、本学の学生が、本教育プログラムを通じて、リテラシーレベルの数理・データサイエンス・AIを日常の生活、仕事等の場で使いこなすことができる基礎的素養を主体的に身に付けることができる。
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>認定要件</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                次の表の(1)～(5)「学修内容」に対応した各科目のうち、それぞれ2単位以上修得した場合、数理・データサイエンス・AI教育プログラムを修了したと認定する。
              </p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>学修内容</TableHead>
                    <TableHead>対応する科目</TableHead>
                    <TableHead>配当年次</TableHead>
                    <TableHead>単位</TableHead>
                    <TableHead>履修方法</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      (1)現在進行中の社会変化(第4次産業革命、Society
                      5.0、データ駆動型社会等）に深く寄与しているものであり、それが自らの生活と密接に結びついている
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>データ分析基礎／情報科学科のみ</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      (2)社会で活用されているデータ」や「データの活用領域」は非常に広範囲であって、日常生活や社会の課題を解決する有用なツールになり得るもの
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>実社会とデータ分析／情報科学科のみ</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      (3)様々なデータ利活用の現場におけるデータ利活用事例が示され、様々な適用領域（流通、製造、金融、サービス、インフラ、公共、ヘルスケア等）の知見と組み合わせることで価値を創出するもの
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>実社会とデータ分析／情報科学科のみ</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      (4)活用に当たっての様々な留意事項（ELSI、個人情報、データ倫理、AI社会原則等）を考慮し、情報セキュリティや情報漏洩等、データを守る上での留意事項への理解をする
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>情報倫理</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      (5)実データ・実課題（学術データ等を含む）を用いた演習など、社会での実例を題材として、「データを読む、説明する、扱う」といった数理・データサイエンス・AIの基本的な活用法に関するもの
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>データ分析基礎／情報科学科のみ</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <p className="mt-4 text-sm text-gray-600">
                ※経済経営学部、人間健康科学部の学生は、総合科目必修指定の「データサイエンス入門」1科目の履修によって認定要件が満たされます。
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ※情報科学部の学生は、総合科目選択の「データサイエンス入門」1科目、あるいは学部必修指定の「実社会とデータ分析」および「情報倫理」および「データ分析基礎」の3科目の履修によって認定要件が満たされます。
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>実施体制</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>委員会等</TableHead>
                    <TableHead>役割</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>総合教育センター長</TableCell>
                    <TableCell>運営責任者</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合教育センター</TableCell>
                    <TableCell>プログラムの改善・進化</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>自己点検評価委員会</TableCell>
                    <TableCell>プログラムの自己点検・評価</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applied">
          <Card>
            <CardHeader>
              <CardTitle>
                本教育プログラムを通じて身に付けることができる能力
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                本学の教育理念である「個性の伸長を本旨とする「知・徳・体」一体の教育を行う」、本学のミッションである「地域の持続的発展と価値創造のための『成長エンジン』となる」、およびSociety
                5.0の時代を見据えた我が国におけるAI戦略2019での数理・データサイエンス・AIの修得の目標を鑑み、本学の学生が、数理・データサイエンス・AI教育の応用基礎レベルの「I．データ表現とアルゴリズム」、「II．AI・データサイエンス基礎」、「III．AI・データサイエンス実践」の内容をバランスよく学ぶことができ、目的に応じて適切なデータ収集・抽出・分析を行う能力やAI技術を活用し課題解決につなげる能力を涵養し、応用基礎レベルの数理・データサイエンス・AIの能力をバランスよく身に付けることができる。
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>認定要件</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                次の表の(1)の1-6、1-7、2-2、2-7の各項目、(2)の1-1、1-2、2-1、3-1、3-2、3-3、3-4、3-9の各項目で学ぶ内容に対応した科目をそれぞれ1科目以上修得し、(3)のIの項目で学ぶ内容に対応した科目を2科目、IIの項目で学ぶ内容に対応した科目を1科目以上修得した場合、数理・データサイエンス・AI応用教育プログラムを修了したと認定する。
              </p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>主な学修内容</TableHead>
                    <TableHead>対応する科目</TableHead>
                    <TableHead>配当年次</TableHead>
                    <TableHead>単位</TableHead>
                    <TableHead>履修方法</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan={4}>
                      (1)データサイエンスとして、統計学を始め様々なデータ処理に関する知識「数学基礎（統計数理、線形代数、微分積分）」
                      AIを実現するための手段として「アルゴリズム」、「データ表現」、「プログラミング基礎」の概念や知識の習得
                    </TableCell>
                    <TableCell>1-6 ベクトルと行列</TableCell>
                    <TableCell>線形代数基礎</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      1-7 アルゴリズムの表現(フローチャート)
                    </TableCell>
                    <TableCell>Python入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      2-2
                      コンピュータで扱うデータ(数値、文章、画像、音声、動画など)、情報量の単位(ビット、バイト)、二進数、文字コード
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>計算機概論／情報科学科のみ</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      2-7
                      文字型、整数型、浮動小数点型、変数、代入、四則演算、論理演算、関数、引数、戻り値
                    </TableCell>
                    <TableCell>Python入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={9}>
                      (2)AIの歴史から多岐に渡る技術種類や応用分野、研究やビジネスの現場において実際にAIを活用する際の構築から運用までの一連の流れ
                      「データサイエンス基礎」、「機械学習の基礎と展望」及び「深層学習の基礎と展望」
                    </TableCell>
                    <TableCell>
                      1-1
                      データ駆動型社会、Society5.0、データを活用した新しいビジネスモデル
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1-2 様々なデータ分析手法</TableCell>
                    <TableCell>AI・機械学習基礎</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      2-1
                      ICT(情報通信技術)の進展、ビッグデータ、ソーシャルメディアデータ、人の行動ログデータ、機械の稼働ログデータ
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      3-1
                      AIの歴史、推論、探索、トイプロブレム、エキスパートシステム
                    </TableCell>
                    <TableCell>AI・機械学習基礎</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      3-2
                      AI倫理、AIの社会的受容性、プライバシー保護、個人情報の取り扱い
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>情報倫理</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      3-3 機械学習、教師あり学習、教師なし学習、強化学習
                    </TableCell>
                    <TableCell>AI・機械学習基礎</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3-4 ニューラルネットワークの原理</TableCell>
                    <TableCell>AI・機械学習基礎</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      3-9 AIの社会実装、ビジネス／業務への組み込み
                    </TableCell>
                    <TableCell>AI・機械学習基礎</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={3}>
                      (3)「データを人や社会にかかわる課題の解決に活用できる人材」に関する理解や認識の向上
                    </TableCell>
                    <TableCell>
                      I
                      【データエンジニアリング基礎】データエンジニアリングにおけるデータ収集・加工、学習、評価、ICT(情報通信技術)の進展、ビッグデータ、ソーシャルメディアデータ、人の行動ログデータ、機械の稼働ログデータ
                    </TableCell>
                    <TableCell>データサイエンス入門</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>必修</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>AI・機械学習基礎</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      II 【データ・AI活用
                      企画・実施・評価】AI・データサイエンス実践(演習や課題解決型学習)
                    </TableCell>
                    <TableCell>インターネットマーケティング</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell rowSpan={2}>1科目以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>マーケティング・リサーチ</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <p className="mt-4 text-sm text-gray-600">
                ※「Python入門」を修得した場合には、(1)1-7、2-7の要件を満たすことになります。
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ※「データサイエンス入門」を修得した場合には、(1)2-2、(2)1-1、2-1、3-2、(3)Iの要件を満たすことになります。
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ※「AI・機械学習基礎」を修得した場合には、(2)1-2、3-1、3-3、3-4、3-9、(3)Iの要件を満たすことになります。
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ※「インターネットマーケティング」「マーケティング・リサーチ」のいずれかを修得した場合には、(3)IIを満たすことになります。
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ※上記科目を修得した場合、単位認定については以下のとおりです。
                <br />
                【経済経営学科・スポーツ健康科学科・情報科学科】修得した全ての科目が卒業要件単位に算入されます。
                <br />
                【看護学科】「データサイエンス入門」以外の科目は、卒業要件単位に算入されません。
                <br />
                【福祉学科】「データサイエンス入門」「Python入門」以外の科目は、卒業要件単位に算入されません。
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>実施体制</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>委員会等</TableHead>
                    <TableHead>役割</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>総合教育センター長</TableCell>
                    <TableCell>運営責任者</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合教育センター</TableCell>
                    <TableCell>プログラムの改善・進化</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>自己点検評価委員会</TableCell>
                    <TableCell>プログラムの自己点検・評価</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
