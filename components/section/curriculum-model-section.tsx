import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function CurriculumModelSection() {
  return (
    <div className="space-y-6">
      <h2 className="handbook-section-title">履修モデルについて</h2>

      <Card className="handbook-card">
        <CardHeader className="bg-primary/5 border-b border-primary/20">
          <CardTitle>3つのプログラム</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {/* 履修モデルの説明文を修正 */}
          <p className="mb-4">
            情報科学は、生活のあらゆるところに関係しており、多くの分野が相互に関連し合って成り立っています。情報科学部では広く学んでいただくとともに、関心のある分野を深く体系的に学んでいただくため、プログラム制を採用しています。
          </p>

          <div className="p-4 mb-4 border rounded-lg bg-secondary">
            <h3 className="mb-2 text-lg font-semibold text-primary">
              プログラム制とは
            </h3>
            <p>
              入学前または入学後に学科や専攻を一つ選ぶのではなく、広く情報科学の諸分野を学びつつ、卒業時にはどれか一つ以上のプログラムでまとまった学修を行ないます。関心が変わった等で、途中でプログラムを変更するのも自由にできますし、2つあるいは3つのプログラムを併修することもできます。情報科学部には、ビジネスアナリティクス、データサイエンス、情報エンジニアリングの3つのプログラムがあります。
            </p>
            <p className="mt-2">
              履修要件を満たす単位を修得すると、情報科学部が発行するプログラム修了証明（certificate）を受領することができます。
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="handbook-card border-2 hover:shadow-md transition-all duration-200">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <CardTitle className="flex items-center gap-2">
                  <Badge className="bg-primary text-white">BA</Badge>
                  ビジネスアナリティクス・プログラム
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  現代ビジネスのキーの一つは、データを使った経営情報分析です。また、情報科学技術を活用した金融取引や金融分析はフィンテックとも言われ、注目を集めています。ビジネスアナリティクス・プログラムでは、こうしたビジネス関連の情報科学技術を学びます。
                </p>
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p className="font-semibold text-primary">
                    科目例: フィンテック・ブロックチェーン
                  </p>
                  <p className="text-sm mt-1">
                    ブロックチェーンとは、Bitcoinなどに代表される仮想通貨の基盤であり、暗号技術によって取引履歴をセキュアかつ分散的に記録・管理する技術です。ブロックチェーン実装のために必要となる要素技術だけではなく、金融業における活用についても概観し、基礎から応用まで幅広く学びます。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="handbook-card border-2 hover:shadow-md transition-all duration-200">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <CardTitle className="flex items-center gap-2">
                  <Badge className="bg-primary text-white">DS</Badge>
                  データサイエンス・プログラム
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  インターネットの普及等により、私たちの暮らしのあらゆる面で大量のデータが集まるようになり、機械学習等を使った高度な分析とその活用が求められるようになりました。データサイエンス・プログラムでは、こうした大規模なデータをどのように分析・活用するかを学びます。
                </p>
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p className="font-semibold text-primary">科目例: IoTとAI</p>
                  <p className="text-sm mt-1">
                    人工知能(Artificial Intelligence) とモノのインターネット
                    (IoT) を統合した概念である Artifical Intelligence of Things
                    (AIoT)
                    も誕生しており、今後、社会のスマート化を目指していく上でAIとIoTの協調が重要視されています。この科目では、IoT
                    および AIの基礎、IoTとAIの協調について体系的に学びます。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="handbook-card border-2 hover:shadow-md transition-all duration-200">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <CardTitle className="flex items-center gap-2">
                  <Badge className="bg-primary text-white">IE</Badge>
                  情報エンジニアリング・プログラム
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  情報科学は現代社会のインフラストラクチャーを支えるものであり、さまざまなシステムやネットワークを構築する人材は今後ますます必要とされています。情報エンジニアリング・プログラムでは、そうした構築の基礎となるプログラミングと関連知識を学びます。
                </p>
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p className="font-semibold text-primary">
                    科目例: 情報ネットワークとセキュリティ
                  </p>
                  <p className="text-sm mt-1">
                    現在ではインターネットを中心とした情報ネットワークが生活の基盤となり、コンピュータやモバイル端末だけではなく、家電などもネットワークに接続されるようになりました。本科目では、情報ネットワークの基本的な知識・技術だけに留まらず、情報システムやネットワークを通じて提供されるサービスに存在する脆弱性やリスクに対応するためのセキュリティについて学びます。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card className="handbook-card">
        <CardHeader className="bg-primary/5 border-b border-primary/20">
          <CardTitle>履修モデル</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 p-4 bg-secondary rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-2">
              履修モデルの見方
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm mb-2">
                  各モデルは一例です。個々の興味や進路に合わせて科目を組み合わせてください。
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-primary border-primary font-bold"
                    >
                      必修
                    </Badge>
                    <span className="text-sm">必ず履修する科目</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-blue-600 border-blue-600 font-bold"
                    >
                      選択必修
                    </Badge>
                    <span className="text-sm">
                      指定された科目から選択して履修する科目
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-gray-700 border-gray-400"
                    >
                      選択
                    </Badge>
                    <span className="text-sm">
                      自由に選択して履修できる科目
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-2">プログラム科目の表記：</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary text-white">◎</Badge>
                    <span className="text-sm">プログラム必修科目</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-primary text-primary"
                    >
                      ○
                    </Badge>
                    <span className="text-sm">プログラム選択科目</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">(4):</span>
                    <span className="text-sm">
                      合計で4単位以上修得することが必要な科目
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="ds" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4 bg-secondary">
              <TabsTrigger
                value="ds"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                データサイエンス
              </TabsTrigger>
              <TabsTrigger
                value="ie"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                情報エンジニアリング
              </TabsTrigger>
              <TabsTrigger
                value="ba"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                ビジネスアナリティクス
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ds">
              <div className="space-y-6">
                {/* 総合科目 */}
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5 border-b border-primary/20">
                    <CardTitle>総合科目</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          1年次 前期①② (20単位)
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            周南Well-being創生入門(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            教養スポーツ実習I(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報リテラシー(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            Python入門(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            コミュニケーション英語I(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            キャリア形成活動I(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            教養ゼミ(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          1年次 後期③④ (20単位)
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            持続可能な社会とダイバーシティ(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            健康とスポーツ(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            アカデミックライティング(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            コミュニケーション英語II(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            データサイエンス入門(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報倫理(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          2年次以降
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            日本国憲法(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報社会論(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            キャリア形成活動II(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            ビジネス英会話(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            コミュニケーション英語III(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            コミュニケーション英語IV(1)
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 学部基礎 */}
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5 border-b border-primary/20">
                    <CardTitle>学部基礎</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          1年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報科学概論(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            実社会とデータ分析(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            計算機概論(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            Python応用(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            データ分析基礎(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            線形代数基礎(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            微分積分基礎(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          2年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            確率統計基礎(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            AI・機械学習基礎(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            地方創生DX(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            社会調査法(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            Javaプログラミング(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            VBAプログラミング(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            データの可視化(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          3年次以降
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="border-blue-600 text-blue-600 font-bold"
                          >
                            実践英語(AI)(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-blue-600 text-blue-600 font-bold"
                          >
                            実践英語(数学)(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-blue-600 text-blue-600 font-bold"
                          >
                            実践英語(情報)(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            情報行動心理学(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            コーパス言語学(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            AI、コンピュータと人間(2)
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* DSプログラム */}
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5 border-b border-primary/20">
                    <CardTitle>データサイエンスプログラム</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          2年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            データサイエンス概論(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            IoTとAI(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            多変量解析(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            ニューラルネットワーク(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          3年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            モデリングの数理(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            数値解析(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            AI・自然言語処理(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            AI・推薦システム(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            環境データサイエンス(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            AI・画像情報処理(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            質的データ分析(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          演習科目
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            専門ゼミ1(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            専門ゼミ2(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            卒業研究(4)
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ie">
              <div className="space-y-6">
                {/* 総合科目 */}
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5 border-b border-primary/20">
                    <CardTitle>総合科目</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          1年次 前期①② (20単位)
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            周南Well-being創生入門(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            教養スポーツ実習I(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報リテラシー(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            Python入門(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            コミュニケーション英語I(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            キャリア形成活動I(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            教養ゼミ(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          1年次 後期③④ (20単位)
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            持続可能な社会とダイバーシティ(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            健康とスポーツ(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            アカデミックライティング(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            コミュニケーション英語II(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            データサイエンス入門(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報倫理(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          2年次以降
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            日本国憲法(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報社会論(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            キャリア形成活動II(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            ビジネス英会話(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            コミュニケーション英語III(1)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            コミュニケーション英語IV(1)
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* IEプログラム */}
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5 border-b border-primary/20">
                    <CardTitle>情報エンジニアリングプログラム</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          2年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            情報エンジニアリング概論(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            データベース(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            アルゴリズムとデータ構造(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            プログラミング(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            情報ネットワークとセキュリティ(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            ソフトウェア工学(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          3年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            コンピュータグラフィックス(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            組み込みシステム(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            ヒューマンコンピュータインタラクション(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            医療情報システム(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            人間とロボットの共生(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            モバイルコンピューティング(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          演習科目
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            専門ゼミ1(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            専門ゼミ2(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            卒業研究(4)
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ba">
              <div className="space-y-6">
                {/* BAプログラム */}
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5 border-b border-primary/20">
                    <CardTitle>ビジネスアナリティクスプログラム</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          2年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            ビジネスアナリティクス概論(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            感性情報処理(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            最適化モデリング(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            会計情報と経営(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            経営と数理モデル(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          3年次
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            インターネットマーケティング(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            シミュレーション(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            品質管理とデータ分析(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            マーケティング・リサーチ(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            フィンテック・ブロックチェーン(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-elective border-gray-300"
                          >
                            金融データ解析(2)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold mb-2 text-primary">
                          演習科目
                        </h3>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            専門ゼミ1(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            専門ゼミ2(2)
                          </Badge>
                          <Badge
                            variant="outline"
                            className="handbook-required border-primary"
                          >
                            卒業研究(4)
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
