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
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Download } from 'lucide-react';

export default function YourRequirementsSection() {
  const [selectedProgram, setSelectedProgram] = useState('ds');
  const [showSimulationDialog, setShowSimulationDialog] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  // 履修済み科目と履修予定科目のデータを取得（実際のアプリケーションではAPIから取得）
  const completedCourses = [
    {
      code: '31-1-11-21-01',
      name: '周南Well-being創生入門',
      category: '総合',
      credits: 2,
      grade: 'A',
      year: '1年次',
      semester: '前期',
    },
    {
      code: '31-1-11-21-02',
      name: '教養スポーツ実習Ⅰ',
      category: '総合',
      credits: 1,
      grade: 'A',
      year: '1年次',
      semester: '前期',
    },
    {
      code: '31-1-14-21-01',
      name: '情報リテラシー',
      category: '総合',
      credits: 2,
      grade: 'B',
      year: '1年次',
      semester: '前期',
    },
    {
      code: '31-1-14-21-02',
      name: 'Python入門',
      category: '総合',
      credits: 2,
      grade: 'A',
      year: '1年次',
      semester: '前期',
    },
    {
      code: '31-2-21-21-01',
      name: '情報科学概論',
      category: '基礎',
      credits: 2,
      grade: 'B',
      year: '1年次',
      semester: '前期',
    },
    {
      code: '31-2-21-21-02',
      name: '実社会とデータ分析',
      category: '基礎',
      credits: 2,
      grade: 'A',
      year: '1年次',
      semester: '前期',
    },
    {
      code: '31-2-21-21-03',
      name: '計算機概論',
      category: '基礎',
      credits: 2,
      grade: 'C',
      year: '1年次',
      semester: '後期',
    },
    {
      code: '31-2-21-21-04',
      name: 'Python応用',
      category: '基礎',
      credits: 2,
      grade: 'B',
      year: '1年次',
      semester: '後期',
    },
    {
      code: '31-2-21-21-05',
      name: 'データ分析基礎',
      category: '基礎',
      credits: 2,
      grade: 'A',
      year: '1年次',
      semester: '後期',
    },
  ];

  const plannedCourses = [
    {
      code: '31-2-21-21-10',
      name: '確率統計基礎',
      category: '基礎',
      credits: 2,
      year: '2年次',
      semester: '前期',
    },
    {
      code: '31-2-21-21-11',
      name: 'AI・機械学習基礎',
      category: '基礎',
      credits: 2,
      year: '2年次',
      semester: '前期',
    },
    {
      code: '31-2-21-21-12',
      name: 'データサイエンス概論',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '前期',
    },
    {
      code: '31-2-21-21-13',
      name: 'IoTとAI',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '前期',
    },
  ];

  // 卒業要件シミュレーション実行
  const runSimulation = () => {
    // 実際のアプリケーションではより複雑な計算を行う
    const totalCompletedCredits = completedCourses.reduce(
      (sum, course) => sum + course.credits,
      0
    );
    const totalPlannedCredits = plannedCourses.reduce(
      (sum, course) => sum + course.credits,
      0
    );
    const totalCredits = totalCompletedCredits + totalPlannedCredits;

    // 残りの必要単位数
    const remainingCredits = 124 - totalCredits;

    // 各カテゴリの単位数
    const generalCredits =
      completedCourses
        .filter((c) => c.category === '総合')
        .reduce((sum, c) => sum + c.credits, 0) +
      plannedCourses
        .filter((c) => c.category === '総合')
        .reduce((sum, c) => sum + c.credits, 0);
    const basicCredits =
      completedCourses
        .filter((c) => c.category === '基礎')
        .reduce((sum, c) => sum + c.credits, 0) +
      plannedCourses
        .filter((c) => c.category === '基礎')
        .reduce((sum, c) => sum + c.credits, 0);
    const programCredits =
      completedCourses
        .filter((c) => ['DS', 'IE', 'BA'].includes(c.category))
        .reduce((sum, c) => sum + c.credits, 0) +
      plannedCourses
        .filter((c) => ['DS', 'IE', 'BA'].includes(c.category))
        .reduce((sum, c) => sum + c.credits, 0);
    const exerciseCredits =
      completedCourses
        .filter((c) => c.category === '演習')
        .reduce((sum, c) => sum + c.credits, 0) +
      plannedCourses
        .filter((c) => c.category === '演習')
        .reduce((sum, c) => sum + c.credits, 0);
    const otherCredits =
      completedCourses
        .filter((c) => c.category === '他学科')
        .reduce((sum, c) => sum + c.credits, 0) +
      plannedCourses
        .filter((c) => c.category === '他学科')
        .reduce((sum, c) => sum + c.credits, 0);

    // 各カテゴリの不足単位数
    const generalRemaining = Math.max(0, 19 - generalCredits);
    const basicRemaining = Math.max(0, 20 - basicCredits);
    const programRemaining = Math.max(0, 22 - programCredits);
    const exerciseRemaining = Math.max(0, 8 - exerciseCredits);
    const otherRemaining = Math.max(0, 4 - otherCredits);

    // カテゴリ別の不足単位数の合計
    const categoryRemainingTotal =
      generalRemaining +
      basicRemaining +
      programRemaining +
      exerciseRemaining +
      otherRemaining;

    // 自由選択単位数（どのカテゴリでも良い残りの単位数）
    const freeChoiceCredits = Math.max(
      0,
      remainingCredits - categoryRemainingTotal
    );

    // 卒業見込み年度の計算
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // 0-indexed
    const isAfterMarch = currentMonth >= 4;
    const academicYear = isAfterMarch ? currentYear : currentYear - 1;
    const studentYear = academicYear - 2024 + 1; // 2024年入学と仮定

    // 残りの単位数と現在の学年から卒業見込み年度を計算
    let expectedGraduationYear = 2028; // 標準の卒業年度（4年後）

    if (remainingCredits <= 40 && studentYear >= 3) {
      // 残り40単位以下で3年生以上なら標準通り卒業見込み
      expectedGraduationYear = 2024 + 4;
    } else if (remainingCredits > 40 && studentYear >= 3) {
      // 残り40単位超で3年生以上なら1年遅れる可能性
      expectedGraduationYear = 2024 + 5;
    } else if (remainingCredits <= 20 && studentYear === 2) {
      // 残り20単位以下で2年生なら早期卒業の可能性
      expectedGraduationYear = 2024 + 3;
    }

    setSimulationResult({
      totalCredits,
      remainingCredits,
      categoryRemaining: {
        general: generalRemaining,
        basic: basicRemaining,
        program: programRemaining,
        exercise: exerciseRemaining,
        other: otherRemaining,
      },
      freeChoiceCredits,
      expectedGraduationYear,
      recommendations: [
        remainingCredits > 0
          ? `卒業までにあと${remainingCredits}単位が必要です。`
          : '卒業要件の単位数を満たしています。',
        programRemaining > 0
          ? `プログラム科目があと${programRemaining}単位必要です。`
          : null,
        exerciseRemaining > 0
          ? `演習科目があと${exerciseRemaining}単位必要です。`
          : null,
        '卒業論文の提出と審査合格が必要です。',
      ].filter(Boolean),
    });

    setShowSimulationDialog(true);
  };

  // サンプルデータ - 実際のアプリケーションではユーザーの実際の履修データを使用
  const requirementsData = {
    totalCredits: {
      required: 124,
      earned: 28,
      inProgress: 12,
      remaining: 84,
    },
    categories: {
      general: {
        required: 19,
        earned: 12,
        inProgress: 4,
        remaining: 3,
      },
      departmentBasic: {
        required: 20,
        earned: 12,
        inProgress: 4,
        remaining: 4,
      },
      program: {
        required: 22,
        earned: 4,
        inProgress: 4,
        remaining: 14,
      },
      exercise: {
        required: 8,
        earned: 0,
        inProgress: 0,
        remaining: 8,
      },
      otherDepartment: {
        required: 4,
        earned: 0,
        inProgress: 0,
        remaining: 4,
      },
    },
    programs: {
      ds: {
        requiredCourses: [
          {
            code: '31-2-21-21-12',
            name: 'データサイエンス概論',
            credits: 2,
            status: 'earned',
          },
          {
            code: '31-2-21-21-13',
            name: 'IoTとAI',
            credits: 2,
            status: 'earned',
          },
          {
            code: '31-2-21-21-21',
            name: '多変量解析',
            credits: 2,
            status: 'inProgress',
          },
          {
            code: '31-2-21-21-22',
            name: 'ニューラルネットワーク',
            credits: 2,
            status: 'inProgress',
          },
        ],
        electiveCourses: [
          {
            code: '31-2-21-21-50',
            name: 'パターン認識',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-51',
            name: '生体情報システム',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-31',
            name: 'モデリングの数理',
            credits: 2,
            status: 'planned',
          },
          {
            code: '31-2-21-21-32',
            name: '数値解析',
            credits: 2,
            status: 'planned',
          },
          {
            code: '31-2-21-21-33',
            name: 'AI・自然言語処理',
            credits: 2,
            status: 'planned',
          },
          {
            code: '31-2-21-21-41',
            name: 'AI・推薦システム',
            credits: 2,
            status: 'planned',
          },
          {
            code: '31-2-21-21-42',
            name: '環境データサイエンス',
            credits: 2,
            status: 'planned',
          },
        ],
      },
      ie: {
        requiredCourses: [
          {
            code: '31-2-21-21-60',
            name: '情報エンジニアリング概論',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-61',
            name: 'データベース',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-62',
            name: 'アルゴリズムとデータ構造',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-63',
            name: 'プログラミング',
            credits: 2,
            status: 'notTaken',
          },
        ],
        electiveCourses: [
          {
            code: '31-2-21-21-64',
            name: '情報ネットワークとセキュリティ',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-65',
            name: 'ソフトウェア工学',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-66',
            name: 'コンピュータグラフィックス',
            credits: 2,
            status: 'notTaken',
          },
        ],
      },
      ba: {
        requiredCourses: [
          {
            code: '31-2-21-21-70',
            name: 'ビジネスアナリティクス概論',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-71',
            name: '最適化モデリング',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-72',
            name: '経営と数理モデル',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-73',
            name: 'シミュレーション',
            credits: 2,
            status: 'notTaken',
          },
        ],
        electiveCourses: [
          {
            code: '31-2-21-21-74',
            name: '感性情報処理',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-75',
            name: '会計情報と経営',
            credits: 2,
            status: 'notTaken',
          },
          {
            code: '31-2-21-21-76',
            name: 'インターネットマーケティング',
            credits: 2,
            status: 'notTaken',
          },
        ],
      },
    },
    practicalEnglish: {
      required: 4,
      earned: 0,
      inProgress: 2,
      remaining: 2,
      courses: [
        {
          code: '31-2-21-21-30',
          name: '実践英語（AI）',
          credits: 2,
          status: 'inProgress',
        },
        {
          code: '31-2-21-21-40',
          name: '実践英語（数学）',
          credits: 2,
          status: 'inProgress',
        },
        {
          code: '31-2-21-21-50',
          name: '実践英語（情報）',
          credits: 2,
          status: 'notTaken',
        },
      ],
    },
  };

  // ステータスに応じたバッジの表示
  const getStatusBadge = (status) => {
    switch (status) {
      case 'earned':
        return <Badge className="bg-green-500">修得済</Badge>;
      case 'inProgress':
        return <Badge className="bg-blue-500">履修中</Badge>;
      case 'planned':
        return <Badge className="bg-amber-500">履修予定</Badge>;
      case 'notTaken':
        return <Badge variant="outline">未履修</Badge>;
      default:
        return null;
    }
  };

  // 進捗率の計算
  const calculateProgress = (earned, required) => {
    return Math.min(Math.round((earned / required) * 100), 100);
  };

  // 現在選択されているプログラムのデータ
  const currentProgram = requirementsData.programs[selectedProgram];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">卒業要件チェック</h2>

      <Card>
        <CardHeader>
          <CardTitle>卒業要件の達成状況</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">総単位数</h3>
              <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex justify-between mb-2">
                  <span>必要単位数</span>
                  <span className="font-semibold">
                    {requirementsData.totalCredits.required}単位
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>修得済単位数</span>
                  <span className="font-semibold">
                    {requirementsData.totalCredits.earned}単位
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>履修中単位数</span>
                  <span className="font-semibold">
                    {requirementsData.totalCredits.inProgress}単位
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>残り必要単位数</span>
                  <span className="font-semibold">
                    {requirementsData.totalCredits.remaining}単位
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span>進捗状況</span>
                    <span>
                      {calculateProgress(
                        requirementsData.totalCredits.earned,
                        requirementsData.totalCredits.required
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{
                        width: `${calculateProgress(
                          requirementsData.totalCredits.earned,
                          requirementsData.totalCredits.required
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                卒業要件チェックリスト
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">4年以上在籍</p>
                    <p className="text-sm text-gray-600">現在1年目</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">124単位以上修得</p>
                    <p className="text-sm text-gray-600">現在28単位修得済み</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">卒業論文の提出と審査合格</p>
                    <p className="text-sm text-gray-600">4年次に実施</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>科目区分別要件</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">1. 総合科目</h3>
              <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 mb-2">
                <div className="flex justify-between mb-1">
                  <span>必修科目19単位を修得すること</span>
                  <span>
                    {requirementsData.categories.general.earned}/
                    {requirementsData.categories.general.required}単位
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{
                      width: `${calculateProgress(
                        requirementsData.categories.general.earned,
                        requirementsData.categories.general.required
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">2. 専門科目</h3>

              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-medium mb-2">
                    2-1. 学科基礎科目およびプログラム科目 (要件合計80単位)
                  </h4>

                  <div className="ml-4 space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">
                        2-1-1. 学科基礎科目 (要件合計20単位)
                      </h5>
                      <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 mb-2">
                        <div className="flex justify-between mb-1">
                          <span>必修科目16単位を修得すること</span>
                          <span>12/16単位</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: '75%' }}
                          ></div>
                        </div>

                        <div className="flex justify-between mb-1">
                          <span>実践英語(3科目)から4単位修得すること</span>
                          <span>
                            {requirementsData.practicalEnglish.earned}/
                            {requirementsData.practicalEnglish.required}単位
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{
                              width: `${calculateProgress(
                                requirementsData.practicalEnglish.earned,
                                requirementsData.practicalEnglish.required
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="mt-2">
                        <h6 className="font-medium mb-1">実践英語科目</h6>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>科目コード</TableHead>
                              <TableHead>科目名</TableHead>
                              <TableHead className="text-center">
                                単位数
                              </TableHead>
                              <TableHead className="text-center">
                                状態
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {requirementsData.practicalEnglish.courses.map(
                              (course, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-mono text-sm">
                                    {course.code}
                                  </TableCell>
                                  <TableCell>{course.name}</TableCell>
                                  <TableCell className="text-center">
                                    {course.credits}
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {getStatusBadge(course.status)}
                                  </TableCell>
                                </TableRow>
                              )
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">
                        2-1-2. プログラム科目 (要件合計22単位)
                      </h5>
                      <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 mb-4">
                        <p className="mb-2">
                          下記に示す三つのプログラムから、最低1つのプログラムを履修すること。
                          各プログラムの履修にあたっては、必修科目を含む22単位を修得すること。
                        </p>
                        <div className="flex justify-between mb-1">
                          <span>プログラム科目修得状況</span>
                          <span>
                            {requirementsData.categories.program.earned}/
                            {requirementsData.categories.program.required}
                            単位
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{
                              width: `${calculateProgress(
                                requirementsData.categories.program.earned,
                                requirementsData.categories.program.required
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <Tabs
                        defaultValue={selectedProgram}
                        onValueChange={setSelectedProgram}
                      >
                        <TabsList className="grid w-full grid-cols-3 mb-4">
                          <TabsTrigger value="ds">データサイエンス</TabsTrigger>
                          <TabsTrigger value="ie">
                            情報エンジニアリング
                          </TabsTrigger>
                          <TabsTrigger value="ba">
                            ビジネスアナリティクス
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="ds" className="space-y-4">
                          <div>
                            <h6 className="font-medium mb-1">必修科目</h6>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>科目コード</TableHead>
                                  <TableHead>科目名</TableHead>
                                  <TableHead className="text-center">
                                    単位数
                                  </TableHead>
                                  <TableHead className="text-center">
                                    状態
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {currentProgram.requiredCourses.map(
                                  (course, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-mono text-sm">
                                        {course.code}
                                      </TableCell>
                                      <TableCell>{course.name}</TableCell>
                                      <TableCell className="text-center">
                                        {course.credits}
                                      </TableCell>
                                      <TableCell className="text-center">
                                        {getStatusBadge(course.status)}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </div>

                          <div>
                            <h6 className="font-medium mb-1">選択科目</h6>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>科目コード</TableHead>
                                  <TableHead>科目名</TableHead>
                                  <TableHead className="text-center">
                                    単位数
                                  </TableHead>
                                  <TableHead className="text-center">
                                    状態
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {currentProgram.electiveCourses.map(
                                  (course, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-mono text-sm">
                                        {course.code}
                                      </TableCell>
                                      <TableCell>{course.name}</TableCell>
                                      <TableCell className="text-center">
                                        {course.credits}
                                      </TableCell>
                                      <TableCell className="text-center">
                                        {getStatusBadge(course.status)}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </div>
                        </TabsContent>

                        <TabsContent value="ie" className="space-y-4">
                          <div>
                            <h6 className="font-medium mb-1">必修科目</h6>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>科目コード</TableHead>
                                  <TableHead>科目名</TableHead>
                                  <TableHead className="text-center">
                                    単位数
                                  </TableHead>
                                  <TableHead className="text-center">
                                    状態
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {requirementsData.programs.ie.requiredCourses.map(
                                  (course, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-mono text-sm">
                                        {course.code}
                                      </TableCell>
                                      <TableCell>{course.name}</TableCell>
                                      <TableCell className="text-center">
                                        {course.credits}
                                      </TableCell>
                                      <TableCell className="text-center">
                                        {getStatusBadge(course.status)}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </div>

                          <div>
                            <h6 className="font-medium mb-1">選択科目</h6>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>科目コード</TableHead>
                                  <TableHead>科目名</TableHead>
                                  <TableHead className="text-center">
                                    単位数
                                  </TableHead>
                                  <TableHead className="text-center">
                                    状態
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {requirementsData.programs.ie.electiveCourses.map(
                                  (course, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-mono text-sm">
                                        {course.code}
                                      </TableCell>
                                      <TableCell>{course.name}</TableCell>
                                      <TableCell className="text-center">
                                        {course.credits}
                                      </TableCell>
                                      <TableCell className="text-center">
                                        {getStatusBadge(course.status)}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </div>
                        </TabsContent>

                        <TabsContent value="ba" className="space-y-4">
                          <div>
                            <h6 className="font-medium mb-1">必修科目</h6>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>科目コード</TableHead>
                                  <TableHead>科目名</TableHead>
                                  <TableHead className="text-center">
                                    単位数
                                  </TableHead>
                                  <TableHead className="text-center">
                                    状態
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {requirementsData.programs.ba.requiredCourses.map(
                                  (course, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-mono text-sm">
                                        {course.code}
                                      </TableCell>
                                      <TableCell>{course.name}</TableCell>
                                      <TableCell className="text-center">
                                        {course.credits}
                                      </TableCell>
                                      <TableCell className="text-center">
                                        {getStatusBadge(course.status)}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </div>

                          <div>
                            <h6 className="font-medium mb-1">選択科目</h6>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>科目コード</TableHead>
                                  <TableHead>科目名</TableHead>
                                  <TableHead className="text-center">
                                    単位数
                                  </TableHead>
                                  <TableHead className="text-center">
                                    状態
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {requirementsData.programs.ba.electiveCourses.map(
                                  (course, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-mono text-sm">
                                        {course.code}
                                      </TableCell>
                                      <TableCell>{course.name}</TableCell>
                                      <TableCell className="text-center">
                                        {course.credits}
                                      </TableCell>
                                      <TableCell className="text-center">
                                        {getStatusBadge(course.status)}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">
                    2-2. 演習科目 (要件合計8単位)
                  </h4>
                  <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 mb-2">
                    <div className="flex justify-between mb-1">
                      <span>演習科目から必修科目8単位を修得すること</span>
                      <span>
                        {requirementsData.categories.exercise.earned}/
                        {requirementsData.categories.exercise.required}
                        単位
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{
                          width: `${calculateProgress(
                            requirementsData.categories.exercise.earned,
                            requirementsData.categories.exercise.required
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">
                    2-3. 他学科専門科目 (要件合計4単位)
                  </h4>
                  <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 mb-2">
                    <div className="flex justify-between mb-1">
                      <span>他学科専門科目から4単位を修得すること</span>
                      <span>
                        {requirementsData.categories.otherDepartment.earned}/
                        {requirementsData.categories.otherDepartment.required}
                        単位
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{
                          width: `${calculateProgress(
                            requirementsData.categories.otherDepartment.earned,
                            requirementsData.categories.otherDepartment.required
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">3. 卒業論文</h3>
              <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                <p>4年次に卒業論文を提出し、卒業論文の審査に合格すること。</p>
                <div className="mt-2">
                  <Badge variant="outline">未着手</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>卒業要件シミュレーション</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            現在の履修状況と履修計画に基づいた卒業要件達成シミュレーションです。
          </p>
          <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2">卒業見込み</h3>
            <p>
              現在の履修計画に基づくと、
              <span className="font-bold">2029年3月</span>
              に卒業要件を満たす見込みです。
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={runSimulation}>
              詳細なシミュレーションを表示
            </Button>
          </div>

          <Dialog
            open={showSimulationDialog}
            onOpenChange={setShowSimulationDialog}
          >
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>卒業要件シミュレーション結果</DialogTitle>
              </DialogHeader>
              {simulationResult && (
                <div className="space-y-4 py-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                      <h3 className="font-semibold mb-2">単位取得状況</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>取得済み・履修予定単位数</span>
                          <span className="font-semibold">
                            {simulationResult.totalCredits}単位
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>残り必要単位数</span>
                          <span className="font-semibold">
                            {simulationResult.remainingCredits}単位
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>卒業要件単位数</span>
                          <span className="font-semibold">124単位</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                      <h3 className="font-semibold mb-2">卒業見込み</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>卒業見込み年月</span>
                          <span className="font-semibold">
                            {simulationResult.expectedGraduationYear}年3月
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>標準卒業年月</span>
                          <span className="font-semibold">2028年3月</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-semibold mb-2">
                      カテゴリ別残り必要単位数
                    </h3>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="flex justify-between">
                        <span>総合科目</span>
                        <span className="font-semibold">
                          {simulationResult.categoryRemaining.general}単位
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>学科基礎科目</span>
                        <span className="font-semibold">
                          {simulationResult.categoryRemaining.basic}単位
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>プログラム科目</span>
                        <span className="font-semibold">
                          {simulationResult.categoryRemaining.program}単位
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>演習科目</span>
                        <span className="font-semibold">
                          {simulationResult.categoryRemaining.exercise}単位
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>他学科専門科目</span>
                        <span className="font-semibold">
                          {simulationResult.categoryRemaining.other}単位
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>自由選択単位</span>
                        <span className="font-semibold">
                          {simulationResult.freeChoiceCredits}単位
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-semibold mb-2">アドバイス</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      {simulationResult.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </div>

                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setShowSimulationDialog(false)}
                    >
                      閉じる
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      結果をダウンロード
                    </Button>
                  </DialogFooter>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
