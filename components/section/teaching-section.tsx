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

export default function TeachingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">教職課程について</h2>

      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">
            教員になるためには、「教育職員免許法」に基づき、教員免許状を取得しなければなりません。教員免許状は、文部科学省より課程認定を受けた大学で所定の単位を修得した者に対し、各都道府県の教育委員会が授与するものです。
          </p>
          <p>
            本学の教職課程は、将来教職に就く意志のある学生を対象に開設しています。その意志がなく、資格さえ取れればいいといった安易な姿勢で教員免許状の取得を目指さないように強く望みます。
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="goals" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="goals">教員養成の目標・計画</TabsTrigger>
          <TabsTrigger value="requirements">免許状取得要件</TabsTrigger>
          <TabsTrigger value="courses">教職課程授業科目</TabsTrigger>
        </TabsList>

        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>周南公立大学の教員養成の目標・計画</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                本学は「知・徳・体」一体の全人教育を通じて、4つの教育目標を策定し、地域社会に根ざし、一人ひとりの多様な幸福の実現を目指し、持続可能な社会全体のWell-beingに貢献できる人材の育成を目指している。教員養成課程においては本学の教育目標に則し、以下の5つの目標を掲げ、持続可能な社会の創り手となる、生きる力を身に付けた生徒を育成するために必要な諸能力を備えた教員を養成することを目指す。
              </p>

              <div className="p-4 mb-6 border rounded-lg bg-gray-50">
                <h3 className="mb-2 text-lg font-semibold">
                  【教員養成の目標】
                </h3>
                <ol className="ml-6 space-y-1 list-decimal">
                  <li>
                    知・徳・体の調和のとれた、人間性豊かな教員を養成する。
                  </li>
                  <li>
                    世界的視野と幅広く豊かな教養を有するため、絶えず自己研鑽に努める教員を養成する。
                  </li>
                  <li>
                    次世代を担う人材を育てる教師としての使命感と責任感を持つ教員を養成する。
                  </li>
                  <li>
                    子ども一人一人の学びを最大限に引き出し、主体的な学びを支援できる教員を養成する。
                  </li>
                  <li>
                    家庭や地域社会と連携しながら、共通の学校教育目標に向かって組織的・協働的に学校運営ができる教員を養成する。
                  </li>
                </ol>
              </div>

              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="mb-2 text-lg font-semibold">
                  【教員養成の計画】
                </h3>
                <p>
                  1年次は幅広く豊かな教養を持たせるため、各学科での総合科目や専門科目の履修をメインとし、教職課程科目は教師論と教育課程論の2科目のみにとどめ基礎力を養う。2年次以降に専門科目とともに本格的な教職課程科目の履修となるため、約3年間で教員免許取得に向けた科目履修を行うこととなる。2年次には教育に関する理論科目、3年次には現場実習にむけた実践的な科目を配置し段階的に教師力を身に付ける。また各科指導法で教科指導力を身に付けたのち、教育実習の事前指導として模擬授業を繰り返し行うことで教壇へ立つことへの不安を解消、授業運営能力を定着させる。4年次に教育実習を行い、実際の学校現場を体感することで、自分の能力を見極める。4年後期の教職実践演習では教育現場の課題を学ぶとともに、教員としての資質を高めていくこととなる。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>情報科学部情報科学科の教員養成の目標</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                情報科学部情報科学科の教職課程の目標は、データサイエンスおよびICTに関する専門的知識とメディアリテラシーを修得し、デジタル社会における地域課題の解決とイノベーションをリードする実践力、指導力を備えた情報科教員を養成することを目標とする。また、授業や校務などの学校現場のICT化を牽引できる力を身に付けた情報科教員を養成する。
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requirements">
          <Card>
            <CardHeader>
              <CardTitle>免許状取得に必要な基礎資格</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                免許状取得に必要な基礎資格は、学士の学位を有することです。したがって、教員免許状の取得を希望する学生は、卒業に必要な科目と単位を修得しつつ、免許状に必要な科目と単位を修得しなければなりません。
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    免許状の種類及び教科
                  </h3>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>高等学校教諭一種免許状(情報)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    各免許状取得に必要な単位数
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>区分</TableHead>
                        <TableHead>単位数</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>教科及び教科の指導法に関する科目</TableCell>
                        <TableCell>24</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>教育の基礎的理解に関する科目</TableCell>
                        <TableCell>10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          道徳、総合的な学習の時間等の指導法及び生徒指導、教育相談等に関する科目
                        </TableCell>
                        <TableCell>8</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>教育実践に関する科目</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>大学が独自に設定する科目</TableCell>
                        <TableCell>12</TableCell>
                      </TableRow>
                      <TableRow className="font-bold">
                        <TableCell>合計</TableCell>
                        <TableCell>59</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                ※「大学が独自に設定する科目」として、本学では教職ボランティア実習及び学校体験活動があります。また「教育の基礎的理解に関する科目等」と「教科及び教科の指導法に関する科目」のうち、要件を越えて修得した単位は「大学が独自に設定する科目」として算入されます。
              </p>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                教育職員免許法施行規則第66条の6に定める科目
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>科目</TableHead>
                    <TableHead>単位数</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>日本国憲法</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>体育</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>外国語コミュニケーション</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      数理、データ活用及び人工知能に関する科目又は情報機器の操作
                    </TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>教育実習について</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="mb-2 text-lg font-semibold">
                教育実習を履修するための注意
              </h3>
              <p className="mb-4">
                教育実習は、取得する免許種によって、必要な時間数、対応する科目が異なります。
              </p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>免許状の種類</TableHead>
                    <TableHead>実習時間数</TableHead>
                    <TableHead>対応科目</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>高等学校教諭一種免許状</TableCell>
                    <TableCell>80時間以上(正味10日間以上)</TableCell>
                    <TableCell>教育実習I</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                教育実習を履修するための条件
              </h3>
              <p>
                教育実習が実施される前年度までに、すべての「教育の基礎的理解に関する科目等」に該当する科目を修得した学生にのみ履修資格を与えます。未修得の科目がある場合は、教育実習に行くことはできません。ただし、4年次開講科目については履修要件の対象外としますが、必ず履修登録を行ってください。
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>教職課程履修に関すること</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">履修者選抜</h3>
                  <p>
                    本学の教職課程は、将来教職に就く意志のある学生を対象に開設しています。そのため、1年次後期に教職課程履修希望者を対象に、選考を行います。詳細は10月頃に公表します。
                  </p>
                  <p className="text-sm text-gray-600">
                    ※原則として、1年次の修得単位が31単位未満(教職科目以外)
                    及びGPAが2.7未満の者は対象から除かれます。
                    <br />※
                    1年次の教職科目「教師論」「教育課程論」のいずれか、もしくは両方の単位を修得しておく必要があります。
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">履修手続き</h3>
                  <p>
                    教職課程履修者は、指定された期日までに誓約書の提出及び教職課程履修費を納入してください。一度納入された履修費は返金されません。手続きが完了しないと、教職科目の履修登録はできません。
                  </p>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>2年次</TableCell>
                        <TableCell>2万円</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3年次</TableCell>
                        <TableCell>2万円</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">履修辞退</h3>
                  <p>
                    何らかの理由で教職課程の履修を辞退する場合は、学務課へ辞退届を提出してください。
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    教職課程授業科目
                  </h3>
                  <p>
                    教職課程授業科目表を確認し、必要な単位を修得してください。教職課程授業科目表の科目のう���、教育の基礎的理解に関する科目等、大学が独自に設定する科目は、各年次において履修できる単位数の上限を超えて履修することができます。また、教科及び教科の指導法に関する科目のうち以下の科目についても、各年次において履修できる単位数の上限を超えて履修することができます。履修できる単位数の上限を超えて履修した科目については、卒業要件の単位数に含まれません。
                  </p>
                  <ul className="ml-6 mt-2 list-disc">
                    <li>3年次: 情報社会と職業, 情報科教育法I・II</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>免許状の申請手続きについて</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                免許状は、各都道府県の教育委員会が授与します。申請は各人で行ってもよいですが、本学では卒業予定者にかわって、免許状授与申請を一括して山口県教育委員会に提出し、卒業式のときに授与できるようにしています。そのための手続きについては、4年次後期にガイダンスを実施しますので、必ず出席してください。
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>教職課程授業科目表【高一種免(情報)】</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                <span className="font-bold">◎</span>…必修,
                無印･･･修得することが望ましい。
              </p>

              <h3 className="mb-2 text-lg font-semibold">
                ■ 教育職員免許法施行規則第66条の6に定める科目
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>免許法施行規則に定める科目区分</TableHead>
                    <TableHead>本学の該当科目</TableHead>
                    <TableHead>単位数</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>日本国憲法</TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 日本国憲法
                    </TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={2}>体育</TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 健康とスポーツ
                    </TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <span className="font-bold">◎</span> 教養スポーツ実習I
                    </TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={2}>外国語コミュニケーション</TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span>{' '}
                      コミュニケーション英語I
                    </TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <span className="font-bold">◎</span>{' '}
                      コミュニケーション英語II
                    </TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      数理、データ活用及び人工知能に関する科目又は情報機器の操作
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> データサイエンス入門
                    </TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                ■ 教育の基礎的理解に関する科目等
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>免許法施行規則に定める科目区分</TableHead>
                    <TableHead>1年次</TableHead>
                    <TableHead>2年次</TableHead>
                    <TableHead>3年次</TableHead>
                    <TableHead>4年次</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>教育の基礎的理解に関する科目</TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 教師論 (2)
                      <br />
                      <span className="font-bold">◎</span> 教育課程論 (2)
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 教育原理 (2)
                      <br />
                      <span className="font-bold">◎</span> 教育心理学 (2)
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 教育行政論 (2)
                      <br />
                      <span className="font-bold">◎</span> 特別支援教育 (2)
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      道徳、総合的な学習の時間等の指導法及び生徒指導、教育相談等に関する科目
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 教育方法論I (2)
                      <br />
                      教育方法論II (2)
                      <br />
                      <span className="font-bold">◎</span> 生徒指導論 (2)
                      <br />
                      教育相談I (2)
                      <br />
                      <span className="font-bold">◎</span> 教育相談II (2)
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span>{' '}
                      特別活動および総合的な学習の時間 (2)
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>教育実践に関する科目</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 教育実習基礎講座I (2)
                      <br />
                      <span className="font-bold">◎</span> 教育実習基礎講座II
                      (2)
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 教育実習I (2)
                      <br />
                      <span className="font-bold">◎</span> 教職実践演習 (2)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                ■ 教科及び教科の指導法に関する科目
              </h3>
              <p className="mb-2 text-sm text-gray-600">
                ※必修科目を除き8単位以上修得すること。
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>免許法施行規則に定める科目区分</TableHead>
                    <TableHead>1年次</TableHead>
                    <TableHead>2年次</TableHead>
                    <TableHead>3年次</TableHead>
                    <TableHead>4年次</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      情報社会(職業に関する内容を含む。)・情報倫理
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 情報倫理 (2)
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 情報社会論 (2)
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 情報社会と職業 (2)
                      <br />
                      ヒューマンコンピュータインタラクション (2)
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>コンピュータ・情報処理</TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 計算機概論 (2)
                      <br />
                      <span className="font-bold">◎</span> Python入門 (2)
                    </TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> Javaプログラミング
                      (2)
                      <br />
                      プログラミング (2)
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>情報システム</TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> ソフトウェア工学 (2)
                      <br />
                      <span className="font-bold">◎</span> データベース (2)
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>情報通信ネットワーク</TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span>{' '}
                      情報ネットワークとセキュリティ (2)
                      <br />
                      ニューラルネットワーク (2)
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      マルチメディア表現・マルチメディア技術
                    </TableCell>
                    <TableCell>
                      データの可視化 (2)
                      <br />
                      VBAプログラミング (2)
                      <br />
                      <span className="font-bold">◎</span> 実社会とデータ分析
                      (2)
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span>{' '}
                      Webアプリケーション開発 (2)
                      <br />
                      生体情報システム (2)
                    </TableCell>
                    <TableCell>AI・画像情報処理 (2)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      各教科の指導法(情報通信技術の活用を含む。)
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 情報科教育法I (2)
                      <br />
                      <span className="font-bold">◎</span> 情報科教育法II (2)
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                ■ 大学が独自に設定する科目
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>免許法施行規則に定める科目区分</TableHead>
                    <TableHead>1年次</TableHead>
                    <TableHead>2年次</TableHead>
                    <TableHead>3年次</TableHead>
                    <TableHead>4年次</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>大学が独自に設定する科目</TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <span className="font-bold">◎</span> 学校体験活動 (2)
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
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
