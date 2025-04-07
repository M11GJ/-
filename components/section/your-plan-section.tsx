'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, AlertCircle, Info, Plus, Trash2 } from 'lucide-react';

export default function YourPlanSection() {
  const [selectedYear, setSelectedYear] = useState('2');
  const [selectedSemester, setSelectedSemester] = useState('前期');
  const [selectedProgram, setSelectedProgram] = useState('ds');

  // サンプルデータ - 実際のアプリケーションではユーザーの実際の履修計画データを使用
  const plannedCourses = {
    '2-前期': [
      {
        code: '31-2-21-21-10',
        name: '確率統計基礎',
        credits: 2,
        required: true,
        program: '基礎',
      },
      {
        code: '31-2-21-21-11',
        name: 'AI・機械学習基礎',
        credits: 2,
        required: true,
        program: '基礎',
      },
      {
        code: '31-2-21-21-12',
        name: 'データサイエンス概論',
        credits: 2,
        required: true,
        program: 'DS',
      },
      {
        code: '31-2-21-21-13',
        name: 'IoTとAI',
        credits: 2,
        required: true,
        program: 'DS',
      },
      {
        code: '31-1-14-21-10',
        name: 'コミュニケーション英語Ⅲ',
        credits: 1,
        required: true,
        program: '総合',
      },
      {
        code: '31-1-14-21-11',
        name: 'ビジネス英会話',
        credits: 2,
        required: false,
        program: '総合',
      },
    ],
    '2-後期': [
      {
        code: '31-2-21-21-20',
        name: 'Javaプログラミング',
        credits: 2,
        required: false,
        program: '基礎',
      },
      {
        code: '31-2-21-21-21',
        name: '多変量解析',
        credits: 2,
        required: true,
        program: 'DS',
      },
      {
        code: '31-2-21-21-22',
        name: 'ニューラルネットワーク',
        credits: 2,
        required: true,
        program: 'DS',
      },
      {
        code: '31-1-14-21-20',
        name: 'コミュニケーション英語Ⅳ',
        credits: 1,
        required: true,
        program: '総合',
      },
      {
        code: '31-1-14-21-21',
        name: 'ビジネス英作文',
        credits: 2,
        required: false,
        program: '総合',
      },
    ],
    '3-前期': [
      {
        code: '31-2-21-21-30',
        name: '実践英語（AI）',
        credits: 2,
        required: false,
        program: '基礎',
      },
      {
        code: '31-2-21-21-31',
        name: 'モデリングの数理',
        credits: 2,
        required: false,
        program: 'DS',
      },
      {
        code: '31-2-21-21-32',
        name: '数値解析',
        credits: 2,
        required: false,
        program: 'DS',
      },
      {
        code: '31-2-21-21-33',
        name: 'AI・自然言語処理',
        credits: 2,
        required: false,
        program: 'DS',
      },
      {
        code: '31-3-31-21-30',
        name: '専門ゼミ1',
        credits: 2,
        required: true,
        program: '演習',
      },
    ],
    '3-後期': [
      {
        code: '31-2-21-21-40',
        name: '実践英語（数学）',
        credits: 2,
        required: false,
        program: '基礎',
      },
      {
        code: '31-2-21-21-41',
        name: 'AI・推薦システム',
        credits: 2,
        required: false,
        program: 'DS',
      },
      {
        code: '31-2-21-21-42',
        name: '環境データサイエンス',
        credits: 2,
        required: false,
        program: 'DS',
      },
      {
        code: '31-3-31-21-40',
        name: '専門ゼミ2',
        credits: 2,
        required: true,
        program: '演習',
      },
    ],
  };

  // 選択された年次・学期の履修計画を取得
  const currentPlan =
    plannedCourses[`${selectedYear}-${selectedSemester}`] || [];

  // 単位数の計算
  const totalCredits = currentPlan.reduce(
    (sum, course) => sum + course.credits,
    0
  );
  const requiredCredits = currentPlan
    .filter((course) => course.required)
    .reduce((sum, course) => sum + course.credits, 0);
  const electiveCredits = totalCredits - requiredCredits;

  // 推奨科目 - 実際のアプリケーションではユーザーの履修状況に基づいて動的に生成
  const recommendedCourses = {
    ds: [
      {
        code: '31-2-21-21-50',
        name: 'パターン認識',
        credits: 2,
        program: 'DS/IE',
      },
      {
        code: '31-2-21-21-51',
        name: '生体情報システム',
        credits: 2,
        program: 'DS',
      },
      {
        code: '31-2-21-21-52',
        name: '感性情報処理',
        credits: 2,
        program: 'BA',
      },
    ],
    ie: [
      {
        code: '31-2-21-21-60',
        name: '情報ネットワークとセキュリティ',
        credits: 2,
        program: 'IE',
      },
      {
        code: '31-2-21-21-61',
        name: 'ソフトウェア工学',
        credits: 2,
        program: 'IE',
      },
      {
        code: '31-2-21-21-62',
        name: 'コンピュータグラフィックス',
        credits: 2,
        program: 'IE',
      },
    ],
    ba: [
      {
        code: '31-2-21-21-70',
        name: '最適化モデリング',
        credits: 2,
        program: 'BA',
      },
      {
        code: '31-2-21-21-71',
        name: '会計情報と経営',
        credits: 2,
        program: 'BA',
      },
      {
        code: '31-2-21-21-72',
        name: '経営と数理モデル',
        credits: 2,
        program: 'BA',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">履修計画</h2>

      <Card>
        <CardHeader>
          <CardTitle>履修計画の概要</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                卒業までの単位取得計画
              </h3>
              <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>総合科目</span>
                    <span className="font-semibold">12/19単位</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: '63%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>学科基礎科目</span>
                    <span className="font-semibold">12/20単位</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: '60%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>プログラム科目</span>
                    <span className="font-semibold">4/22単位</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: '18%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>演習科目</span>
                    <span className="font-semibold">0/8単位</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: '0%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>他学科専門科目</span>
                    <span className="font-semibold">0/4単位</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: '0%' }}
                    ></div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between font-semibold">
                    <span>合計</span>
                    <span>28/124単位</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">履修計画アドバイス</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    2年次にプログラム必修科目を優先的に履修することで、3年次以降の専門的な学習がスムーズになります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    実践英語は条件必修科目です。3科目から4単位以上を修得する必要があります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    現在の履修計画では、2年次終了時点で約50単位を修得する見込みです。順調に進んでいます。
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">履修上限</h3>
                <div className="p-3 border rounded">
                  <p className="text-sm">
                    各年次の履修上限単位として、半期は24単位を履修上限単位とし、年間では48単位を履修上限単位とします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>履修計画詳細</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">年次</label>
              <select
                className="p-2 border rounded"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="1">1年次</option>
                <option value="2">2年次</option>
                <option value="3">3年次</option>
                <option value="4">4年次</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">学期</label>
              <select
                className="p-2 border rounded"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                <option value="前期">前期</option>
                <option value="後期">後期</option>
              </select>
            </div>
          </div>

          <div className="mb-4 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">履修予定科目</h3>
              <div className="text-sm">
                合計: {totalCredits}単位（必修: {requiredCredits}単位、選択:{' '}
                {electiveCredits}単位）
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>科目コード</TableHead>
                    <TableHead>科目名</TableHead>
                    <TableHead className="text-center">単位数</TableHead>
                    <TableHead className="text-center">区分</TableHead>
                    <TableHead className="text-center">種別</TableHead>
                    <TableHead className="text-center">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentPlan.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-sm">
                        {course.code}
                      </TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell className="text-center">
                        {course.credits}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={course.required ? 'default' : 'outline'}
                        >
                          {course.required ? '必修' : '選択'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        {course.program}
                      </TableCell>
                      <TableCell className="text-center">
                        {!course.required && (
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <Tabs
              defaultValue={selectedProgram}
              onValueChange={setSelectedProgram}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">推奨科目</h3>
                <TabsList>
                  <TabsTrigger value="ds">DS</TabsTrigger>
                  <TabsTrigger value="ie">IE</TabsTrigger>
                  <TabsTrigger value="ba">BA</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ds" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>科目コード</TableHead>
                      <TableHead>科目名</TableHead>
                      <TableHead className="text-center">単位数</TableHead>
                      <TableHead className="text-center">プログラム</TableHead>
                      <TableHead className="text-center">操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recommendedCourses.ds.map((course, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">
                          {course.code}
                        </TableCell>
                        <TableCell>{course.name}</TableCell>
                        <TableCell className="text-center">
                          {course.credits}
                        </TableCell>
                        <TableCell className="text-center">
                          {course.program}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="ie" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>科目コード</TableHead>
                      <TableHead>科目名</TableHead>
                      <TableHead className="text-center">単位数</TableHead>
                      <TableHead className="text-center">プログラム</TableHead>
                      <TableHead className="text-center">操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recommendedCourses.ie.map((course, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">
                          {course.code}
                        </TableCell>
                        <TableCell>{course.name}</TableCell>
                        <TableCell className="text-center">
                          {course.credits}
                        </TableCell>
                        <TableCell className="text-center">
                          {course.program}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="ba" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>科目コード</TableHead>
                      <TableHead>科目名</TableHead>
                      <TableHead className="text-center">単位数</TableHead>
                      <TableHead className="text-center">プログラム</TableHead>
                      <TableHead className="text-center">操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recommendedCourses.ba.map((course, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">
                          {course.code}
                        </TableCell>
                        <TableCell>{course.name}</TableCell>
                        <TableCell className="text-center">
                          {course.credits}
                        </TableCell>
                        <TableCell className="text-center">
                          {course.program}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline">履修計画をリセット</Button>
            <Button>履修計画を保存</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>履修計画カレンダー</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            時間割表示は現在準備中です。次回のアップデートで追加される予定です。
          </p>
          <Button variant="outline">時間割表示（準備中）</Button>
        </CardContent>
      </Card>
    </div>
  );
}
